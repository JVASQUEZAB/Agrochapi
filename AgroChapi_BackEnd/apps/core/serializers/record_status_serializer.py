from rest_framework import serializers
from apps.core.models.record_status import RecordStatus

class RecordStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordStatus
        fields = ['id', 'name', 'description']