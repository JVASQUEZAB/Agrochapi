from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from apps.core.views import CustomTokenObtainPairView

urlpatterns = [

    # Endpoint para obtener el token (acceso y refresh)
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),

    # Endpoint para refrescar el token de acceso usando el refresh token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    #Otros endpoints
    path('api/core/', include('apps.core.urls')),
    path('api/account/', include('apps.account.urls')),
    #path('admin/', admin.site.urls),
]
