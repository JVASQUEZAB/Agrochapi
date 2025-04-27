from rest_framework.routers import DefaultRouter
from core.views.consumers import FundoViewSet, CultivoViewSet, VariedadViewSet, ConsumidorViewSet


router = DefaultRouter()

router.register(r'fundos', FundoViewSet)
router.register(r'cultivos', CultivoViewSet)
router.register(r'variedades', VariedadViewSet)
router.register(r'consumidores', ConsumidorViewSet)

urlpatterns = router.urls