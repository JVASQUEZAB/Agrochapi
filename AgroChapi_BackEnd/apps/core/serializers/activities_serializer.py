from rest_framework import serializers
from apps.core.models.activities import *


# Serializers for the models in the activities module
# These serializers are used to convert model instances to JSON format and vice versa.
# Activities Model
class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = '__all__'



# Labores Model
class LaborSerializer(serializers.ModelSerializer):
    codigo_actividad = serializers.PrimaryKeyRelatedField(
        queryset=Actividad.objects.all()
    )
    actividad_detalle = ActividadSerializer(source='codigo_actividad', read_only=True)

    class Meta:
        model = Labor
        fields = [
            'codigo',
            'descripcion',
            'is_active',
            'codigo_actividad',
            'actividad_detalle',
        ]



class UMedidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UMedida
        fields = '__all__'