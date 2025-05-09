from django.db import models
from django.core.validators import MinValueValidator
from apps.core.models.users import CustomUser
from apps.core.models.record_status import RecordStatus
from apps.core.models.calendar import Calendar
from apps.core.models.consumers import Fundo, Cultivo, Consumidor
from apps.core.models.activities import Labor
from apps.core.models.activities import UMedida
from .areas import AreaResponsable

#Modelo de la tabla de Programas de Mano de obra
class ProgramaMO(models.Model):
    fecha = models.ForeignKey(
        Calendar,
        on_delete=models.PROTECT,
        verbose_name="Fecha"
    )
    labor = models.ForeignKey(Labor, on_delete=models.PROTECT, verbose_name="Labor")
    consumidor = models.ForeignKey(Consumidor, on_delete=models.PROTECT, verbose_name="Consumidor")
    unidad_medida = models.ForeignKey(UMedida, on_delete=models.PROTECT, verbose_name="Unidad de Medida")
    area_responsable = models.ForeignKey(AreaResponsable, on_delete=models.PROTECT, verbose_name="Área Responsable")

    sub_labor = models.CharField(max_length=255, verbose_name="Sub Labor", blank=True)

    productividad = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        verbose_name="Productividad"
    )
    programa = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        verbose_name="Programa"
    )
    real = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        verbose_name="Real"
    )

    created_by = models.ForeignKey(CustomUser, on_delete=models.PROTECT, related_name='programa_mo_creados')
    record_status = models.ForeignKey(RecordStatus, on_delete=models.PROTECT)

    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Última actualización")

    class Meta:
        db_table = "ac_programa_mo"
        verbose_name = "Programa MO"
        verbose_name_plural = "Programas MO"
        unique_together = (
            'fecha',
            'labor',
            'consumidor',
            'unidad_medida',
            'area_responsable'
        )

    def __str__(self):
        return f"{self.fecha} - {self.consumidor} - {self.labor}"