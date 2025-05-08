from django.urls import path
from apps.core.views.allowedModulesPermission import AllowedModulesView

urlpatterns = [
    path('allowed/', AllowedModulesView.as_view(), name='allowed-modules'),
]
