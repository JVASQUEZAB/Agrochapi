from django.urls import path, include


urlpatterns = [
    path('permissions/', include('core.urls.urls_roleModulePermission')),
    path('modules/', include('core.urls.urls_allowedModulePermission')),

    path('users/', include('core.urls.urls_users')),
    path('roles/', include('core.urls.urls_roles')),
    
    path('master/', include('core.urls.urls_consumers')),
    path('master/', include('core.urls.urls_activities')),

    path('', include('core.urls.urls_logout')),
    
]