from rest_framework import serializers
from core.models.activities import *


# Serializers for the models in the activities module
# These serializers are used to convert model instances to JSON format and vice versa.
# Activities Model
class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = '__all__'



# Labores Model
class LaborSerializer(serializers.ModelSerializer):
    class Meta:
        model = Labor
        fields = '__all__'


class UMedidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UMedida
        fields = '__all__'