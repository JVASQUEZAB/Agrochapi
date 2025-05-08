from rest_framework import viewsets, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from apps.core.models import Role
from apps.core.serializers import RoleSerializer

class IsAdmin(permissions.BasePermission):
    """
    Permite el acceso solo a usuarios con rol de Administrador.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role and request.user.role.hierarchy == 6 # el nivel 6 es la jerarquia mas alta, solo a nivel admin

class RoleAdminViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated, IsAdmin]
