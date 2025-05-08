from django.db import models
from apps.core.models.users import Role

class Module(models.Model):
    name = models.CharField(max_length=100)
    logo = models.CharField(max_length=255, null=True, blank=True)  # ruta al logo
    url = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    

    class Meta:
        db_table = 'tb_modules'
        verbose_name = 'Module'
        verbose_name_plural = 'Modules'
        ordering = ['name']
    


class RoleModulePermission(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    allowed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.role} - {self.module} - {'Allowed' if self.allowed else 'Not Allowed'}"

    class Meta:
        unique_together = ('role', 'module')
        db_table = 'tb_role_module_permissions'
        verbose_name = 'Role Module Permission'
        verbose_name_plural = 'Role Module Permissions'
        ordering = ['role', 'module']

    