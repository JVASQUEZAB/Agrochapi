from rest_framework import serializers
from apps.core.models import Role, Module, RoleModulePermission

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

    def create(self, validated_data):
        role = super().create(validated_data)
        print("Creando rol y permisos")

        # Crear permisos no asignados (allowed=False) para todos los módulos existentes
        modules = Module.objects.all()
        RoleModulePermission.objects.bulk_create([
            RoleModulePermission(role=role, module=module, allowed=False)
            for module in modules
        ])

        return role
