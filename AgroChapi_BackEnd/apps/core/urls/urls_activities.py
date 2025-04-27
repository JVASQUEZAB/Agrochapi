from rest_framework.routers import DefaultRouter
from core.views.activities import ActividadViewSet, LaborViewSet, UMedidaViewSet


router = DefaultRouter()

router.register(r'actividades', ActividadViewSet)
router.register(r'labores', LaborViewSet)
router.register(r'umedida', UMedidaViewSet)

urlpatterns = router.urls