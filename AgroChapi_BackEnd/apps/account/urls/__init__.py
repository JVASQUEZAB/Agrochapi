from django.urls import path, include


urlpatterns = [
    path('', include('account.urls.urls_user'))
    
]