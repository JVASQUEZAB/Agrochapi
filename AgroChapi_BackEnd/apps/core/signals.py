from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.dispatch import receiver
from django.utils.timezone import now
from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist
from django.utils.timezone import now

from core.models.login_register import LoginRegister

@receiver(user_logged_in)
def register_login(sender, request, user, **kwargs):
    # Captura IP address
    ip_address = get_client_ip(request)
    # Captura User-Agent
    user_agent = request.META.get('HTTP_USER_AGENT', '')

    # Crea un nuevo registro de login
    LoginRegister.objects.create(
        user=user,
        login_time=now(),
        ip_address=ip_address,
        user_agent=user_agent,
    )

@receiver(user_logged_out)
def register_logout(sender, request, user, **kwargs):
    try:
        # Busca el último login que no tenga logout registrado
        last_login_record = LoginRegister.objects.filter(
            user=user,
            logout_time__isnull=True
        ).latest('login_time')
        
        last_login_record.logout_time = now()
        last_login_record.save()
    except ObjectDoesNotExist:
        pass  # Si no hay registro previo, no hacemos nada

def get_client_ip(request):
    """ Función para obtener la IP del cliente. """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
