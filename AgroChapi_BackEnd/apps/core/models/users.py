from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils import timezone
from ..managers import CustomUserManager



# Role Model
# Este modelo representa los diferentes roles de usuario en el sistema.
class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)
    hierarchy = models.PositiveSmallIntegerField()

    class Meta:
        db_table = 'tb_roles'
        verbose_name = 'Rol'
        verbose_name_plural = 'Roles'
        ordering = ['-hierarchy']  # Ordena de forma descendente por jerarquía

    def __str__(self):
        return f"{self.name} ({self.hierarchy})"


# CustomUser Model
# Este modelo define a los usuarios del sistema.
class CustomUser(AbstractBaseUser, PermissionsMixin):
    dni = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.PROTECT)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    last_login = models.DateTimeField(blank=True, null=True)
    date_joined = models.DateTimeField(default=timezone.now)
    photo = models.ImageField(upload_to='users/photos/', blank=True, null=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_users',
        blank=True
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_users',
        blank=True
    )

    USERNAME_FIELD = 'dni'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    class Meta:
        db_table = 'tb_custom_users'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['-date_joined']

    def __str__(self):
        return f"{self.dni} - {self.first_name} {self.last_name}"

    
