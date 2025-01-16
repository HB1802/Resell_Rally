from django.urls import path
from .views.auth import register, login
from .views.profile import ProfileView

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
]