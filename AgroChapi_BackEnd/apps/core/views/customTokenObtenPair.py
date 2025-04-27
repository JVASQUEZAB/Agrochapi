from rest_framework_simplejwt.views import TokenObtainPairView
from django.utils.timezone import now
from django.contrib.auth import get_user_model
from django.contrib.auth import login  # <<--- Importante esto

User = get_user_model()

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        # Si el login fue exitoso
        if response.status_code == 200:
            dni = request.data.get('dni')
            try:
                user = User.objects.get(dni=dni)
                user.last_login = now()
                user.save(update_fields=['last_login'])
                login(request, user)  # <<--- ¡Esto dispara el signal user_logged_in!
            except User.DoesNotExist:
                pass  # No actualizamos si no se encuentra el usuario

        return response
