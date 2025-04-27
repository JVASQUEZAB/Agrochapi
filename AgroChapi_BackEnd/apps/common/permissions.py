
from rest_framework.permissions import BasePermission

class IsAdminUserOrReadOnly(BasePermission):
    """
    Permite el acceso solo a usuarios con rol 'Administrador'.
    """

    def has_permission(self, request, view):
        user = request.user
        return (
            user and 
            user.is_authenticated and 
            hasattr(user, 'role') and 
            user.role.name.lower() == 'administrador'
        )