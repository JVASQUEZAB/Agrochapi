from django.urls import path, include


urlpatterns = [
    path('users/', include('core.urls.urls_users')),
    path('master/', include('core.urls.urls_consumers')),
    path('master/', include('core.urls.urls_activities')),
    path('', include('core.urls.urls_logout')),
    
]