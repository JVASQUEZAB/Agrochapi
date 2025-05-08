from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from apps.common.permissions import IsAdminUserOrReadOnly

from apps.core.models.record_status import RecordStatus
from apps.core.serializers.record_status_serializer import RecordStatusSerializer


class RecordStatusViewSet(viewsets.ModelViewSet):
    """
    Viewset for the RecordStatus model.
    Provides CRUD operations for the RecordStatus model.
    """
    queryset = RecordStatus.objects.all()
    serializer_class = RecordStatusSerializer
    permission_classes = [IsAuthenticated, IsAdminUserOrReadOnly]