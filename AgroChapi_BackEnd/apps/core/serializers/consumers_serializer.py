from rest_framework import serializers
from apps.core.models.consumers import *


# Serializers for the models in the consumers module
# These serializers are used to convert model instances to JSON format and vice versa.
class FundoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fundo
        fields = '__all__'



class CultivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivo
        fields = '__all__'



class VariedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variedad
        fields = '__all__'



class ConsumidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumidor
        fields = '__all__'