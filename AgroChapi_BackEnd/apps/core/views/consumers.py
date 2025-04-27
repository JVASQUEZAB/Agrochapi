from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from common.permissions import IsAdminUserOrReadOnly

from core.models.consumers import Fundo, Cultivo, Variedad, Consumidor
from core.serializers.consumers_serializer import FundoSerializer, CultivoSerializer, VariedadSerializer, ConsumidorSerializer


#Viewsets for the models in the consumers module
# These viewsets are used to handle HTTP requests and responses for the models.
# They provide CRUD operations for the models.

class FundoViewSet(viewsets.ModelViewSet):
    queryset = Fundo.objects.all()
    serializer_class = FundoSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]



# The CultivoViewSet handles HTTP requests for the Cultivo model.
# It provides CRUD operations for the Cultivo model.
class CultivoViewSet(viewsets.ModelViewSet):
    queryset = Cultivo.objects.all()
    serializer_class = CultivoSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]



# The VariedadViewSet handles HTTP requests for the Variedad model.
# It provides CRUD operations for the Variedad model.
class VariedadViewSet(viewsets.ModelViewSet):
    queryset = Variedad.objects.all()
    serializer_class = VariedadSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]



# The ConsumidorViewSet handles HTTP requests for the Consumidor model.
# It provides CRUD operations for the Consumidor model.
class ConsumidorViewSet(viewsets.ModelViewSet):
    queryset = Consumidor.objects.all()
    serializer_class = ConsumidorSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]