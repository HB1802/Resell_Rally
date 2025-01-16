from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from ..serializers import UserSerializer

class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get_object(self):
        return self.request.user