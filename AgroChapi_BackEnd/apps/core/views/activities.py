from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from core.models.activities import Actividad, Labor, UMedida
from core.serializers.activities_serializer import ActividadSerializer, LaborSerializer, UMedidaSerializer
from common.permissions import IsAdminUserOrReadOnly



class ActividadViewSet(viewsets.ModelViewSet):
    """
    Viewset for the Actividad model.
    Provides CRUD operations for the Actividad model.
    """
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]


class LaborViewSet(viewsets.ModelViewSet):
    """
    Viewset for the Labor model.
    Provides CRUD operations for the Labor model.
    """
    queryset = Labor.objects.all()
    serializer_class = LaborSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]


class UMedidaViewSet(viewsets.ModelViewSet):
    """
    Viewset for the UMedida model.
    Provides CRUD operations for the UMedida model.
    """
    queryset = UMedida.objects.all()
    serializer_class = UMedidaSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]