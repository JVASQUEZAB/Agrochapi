from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.core.models import RoleModulePermission, Module

class AllowedModulesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        role = request.user.role  # Asegúrate que `request.user` tenga un campo `role`
        if not role:
            return Response({"detail": "Usuario sin rol asignado."}, status=400)

        allowed_modules = Module.objects.filter(
            rolemodulepermission__role=role,
            rolemodulepermission__allowed=True
        ).order_by('id')

        modules_data = [
            {
                "id": module.id,
                "name": module.name,
                "logo": module.logo,
                "url": module.url
            } for module in allowed_modules
        ]

        return Response(modules_data)
