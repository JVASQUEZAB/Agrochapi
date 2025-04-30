from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apps.core.models.modules import RoleModulePermission
from apps.core.serializers.modules_serializer import RoleModulePermissionSerializer


class RoleModulePermissionViewSet(viewsets.ModelViewSet):
    queryset = RoleModulePermission.objects.all()
    serializer_class = RoleModulePermissionSerializer
    permission_classes = [IsAuthenticated]
