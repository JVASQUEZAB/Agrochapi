from rest_framework import serializers
from apps.core.models.modules import Module, RoleModulePermission

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['id', 'name', 'logo', 'url']



class RoleModulePermissionSerializer(serializers.ModelSerializer):
    role_name = serializers.CharField(source='role.name', read_only=True)
    module_name = serializers.CharField(source='module.name', read_only=True)

    class Meta:
        model = RoleModulePermission
        fields = ['id', 'role', 'role_name', 'module', 'module_name', 'allowed']
