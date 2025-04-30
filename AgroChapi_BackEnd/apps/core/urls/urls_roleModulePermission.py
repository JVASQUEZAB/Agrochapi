from rest_framework.routers import DefaultRouter
from core.views.RoleModulePermission import RoleModulePermissionViewSet

router = DefaultRouter()

router.register(r'modulespermission', RoleModulePermissionViewSet)

urlpatterns = router.urls