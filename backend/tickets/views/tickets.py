from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import Ticket
from ..serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    
    def get_queryset(self):
        return Ticket.objects.filter(seller=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)
    
    @action(detail=True, methods=['post'])
    def purchase(self, request, pk=None):
        ticket = self.get_object()
        if ticket.status != 'available':
            return Response(
                {'error': 'Ticket is not available'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        ticket.buyer = request.user
        ticket.status = 'sold'
        ticket.save()
        
        serializer = self.get_serializer(ticket)
        return Response(serializer.data)