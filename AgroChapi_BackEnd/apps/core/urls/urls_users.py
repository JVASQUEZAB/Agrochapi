from rest_framework.routers import DefaultRouter
from core.views.users import UserAdminViewSet


router = DefaultRouter()

router.register(r'', UserAdminViewSet, basename='me')

urlpatterns = router.urls