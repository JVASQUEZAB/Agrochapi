from django.urls import path
from account.views.user import UserMeView

urlpatterns = [
    path('me/', UserMeView.as_view(), name='current-user'),
]
