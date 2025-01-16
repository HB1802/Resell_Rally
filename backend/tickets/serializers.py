from rest_framework import serializers
from .models import Ticket
from events.serializers import EventSerializer

class TicketSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
    
    class Meta:
        model = Ticket
        fields = '__all__'
        read_only_fields = ('seller', 'buyer', 'status')