import razorpay
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Payment
from .serializers import PaymentSerializer
from tickets.models import Ticket

razorpay_client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_payment(request):
    ticket_id = request.data.get('ticket_id')
    try:
        ticket = Ticket.objects.get(id=ticket_id, status='available')
    except Ticket.DoesNotExist:
        return Response(
            {'error': 'Ticket not found or not available'},
            status=status.HTTP_404_NOT_FOUND
        )

    # Create Razorpay Order
    order_amount = int(float(ticket.price) * 100)  # Convert to paise
    order_currency = 'INR'
    razorpay_order = razorpay_client.order.create({
        'amount': order_amount,
        'currency': order_currency,
    })

    # Create Payment record
    payment = Payment.objects.create(
        user=request.user,
        ticket=ticket,
        amount=ticket.price,
        razorpay_order_id=razorpay_order['id']
    )

    # Update ticket status
    ticket.status = 'pending'
    ticket.save()

    return Response({
        'id': payment.id,
        'order_id': razorpay_order['id'],
        'amount': order_amount,
        'currency': order_currency,
        'key': settings.RAZORPAY_KEY_ID
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_payment(request):
    payment_id = request.data.get('razorpay_payment_id')
    order_id = request.data.get('razorpay_order_id')
    signature = request.data.get('razorpay_signature')

    try:
        payment = Payment.objects.get(razorpay_order_id=order_id)
    except Payment.DoesNotExist:
        return Response(
            {'error': 'Payment not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    # Verify signature
    params_dict = {
        'razorpay_payment_id': payment_id,
        'razorpay_order_id': order_id,
        'razorpay_signature': signature
    }

    try:
        razorpay_client.utility.verify_payment_signature(params_dict)
        payment.status = 'completed'
        payment.razorpay_payment_id = payment_id
        payment.razorpay_signature = signature
        payment.save()

        # Update ticket status
        ticket = payment.ticket
        ticket.status = 'sold'
        ticket.buyer = payment.user
        ticket.save()

        return Response({'status': 'Payment successful'})
    except Exception:
        payment.status = 'failed'
        payment.save()
        
        # Revert ticket status
        ticket = payment.ticket
        ticket.status = 'available'
        ticket.save()
        
        return Response(
            {'error': 'Payment verification failed'},
            status=status.HTTP_400_BAD_REQUEST
        )