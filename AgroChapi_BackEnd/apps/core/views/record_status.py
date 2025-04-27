from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from common.permissions import IsAdminUserOrReadOnly

from core.models.record_status import RecordStatus
from core.serializers.record_status_serializer import RecordStatusSerializer


class RecordStatusViewSet(viewsets.ModelViewSet):
    """
    Viewset for the RecordStatus model.
    Provides CRUD operations for the RecordStatus model.
    """
    queryset = RecordStatus.objects.all()
    serializer_class = RecordStatusSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]