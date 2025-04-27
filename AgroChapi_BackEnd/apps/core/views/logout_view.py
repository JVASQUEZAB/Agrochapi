from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import logout

class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        # Llamamos a logout para disparar el signal user_logged_out
        logout(request)
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)