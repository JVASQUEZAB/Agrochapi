from django.db import models
from django.conf import settings

class LoginRegister(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    logout_time = models.DateTimeField(null=True, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'tb_login_records'
        verbose_name = 'Login Record'
        verbose_name_plural = 'Login Records'
        ordering = ['-login_time']

    def __str__(self):
        return f"LoginRecord(user={self.user.dni}, login_time={self.login_time})"