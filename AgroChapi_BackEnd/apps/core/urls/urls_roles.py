from rest_framework.routers import DefaultRouter
from core.views.role import RoleAdminViewSet


router = DefaultRouter()

router.register(r'', RoleAdminViewSet, basename='me')

urlpatterns = router.urls