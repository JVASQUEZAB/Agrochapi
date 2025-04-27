from django.urls import path
from core.views.logout_view import LogoutView

urlpatterns = [
    path('logout/', LogoutView.as_view(), name='logout'),
]