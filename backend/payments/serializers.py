from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'amount', 'razorpay_order_id', 'status', 'created_at']
        read_only_fields = ['razorpay_order_id', 'status']