from rest_framework import viewsets, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from apps.core.models import CustomUser
from apps.core.serializers import CustomUserSerializer

class IsAdmin(permissions.BasePermission):
    """
    Permite el acceso solo a usuarios con rol de Administrador.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role and request.user.role.hierarchy == 6 # el nivel 6 es la jerarquia mas alta, solo a nivel admin

class UserAdminViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated, IsAdmin]
