from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication  # ✅
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError


class UserMeView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]  # ✅ Esto fuerza solo JWT

    def get(self, request):
        user = request.user
        return Response({
            "id": user.id,
            "dni": user.dni,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role.name if user.role else None,
            "is_active": user.is_active,
            "date_joined": user.date_joined,
            "last_login": user.last_login,
            "photo_url": user.photo.url if user.photo else None,
        })

    def post(self, request):
        """
        API para cambiar la contraseña del usuario autenticado.
        """
        user = request.user
        data = request.data

        current_password = data.get("current_password")
        new_password = data.get("new_password")
        confirm_password = data.get("confirm_password")

        if not all([current_password, new_password, confirm_password]):
            return Response({"detail": "Todos los campos son obligatorios."}, status=status.HTTP_400_BAD_REQUEST)

        if not user.check_password(current_password):
            return Response({"detail": "La contraseña actual no es correcta."}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({"detail": "La nueva contraseña y la confirmación no coinciden."}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        return Response({"detail": "Contraseña actualizada correctamente."}, status=status.HTTP_200_OK)

    def put(self, request):
        """
        Actualizar los datos del perfil del usuario.
        """
        user = request.user
        data = request.data

        user.first_name = data.get("first_name", user.first_name)
        user.last_name = data.get("last_name", user.last_name)
        user.email = data.get("email", user.email)

        if "photo" in request.FILES:
            user.photo = request.FILES["photo"]

        try:
            user.full_clean()
            user.save()
            return Response({"detail": "Perfil actualizado correctamente."}, status=status.HTTP_200_OK)
        except ValidationError as e:
            return Response({"detail": e.message_dict}, status=status.HTTP_400_BAD_REQUEST)


