from django.db import models
from .consumers import Consumidor


# Calendar Model
# Este modelo representa el calendario de actividades y labores a realizar en cada fundo.  
class Calendar(models.Model):
    date = models.DateField(primary_key=True)
    year = models.PositiveIntegerField()
    month_number = models.PositiveSmallIntegerField()
    month_name = models.CharField(max_length=20)
    iso_week = models.PositiveSmallIntegerField()

    class Meta:
        db_table = 'tb_calendar'
        ordering = ['date']
        verbose_name = "Fecha del Calendario"
        verbose_name_plural = "Fechas del Calendario"

    def __str__(self):
        return f"{self.date} - {self.month_name} {self.year}"





#Campaign Calendar Model
# Este modelo representa el calendario de campañas por consumidor.
class ConsumerCampaignCalendar(models.Model):
    consumer = models.ForeignKey('Consumidor', on_delete=models.CASCADE)
    cultivo = models.CharField(max_length=50)  # redundancia por seguridad, aunque esté en Consumer
    campaign_label = models.CharField(max_length=20)  # Ej. "2024-2025"

    # Fechas de campaña
    start_date = models.DateField()  # Si no se define: 1 de abril del año de fin de campaña anterior
    end_date = models.DateField()    # Si no se define: 31 de marzo del año siguiente

    # Etapas fenológicas (solo para uva)
    postcosecha_start = models.DateField(null=True, blank=True)  # por defecto: día después del fin de cosecha anterior
    poda_start = models.DateField(null=True, blank=True)         # por defecto: 1 de junio
    cosecha_end = models.DateField(null=True, blank=True)        # por defecto: 31 de marzo siguiente

    class Meta:
        db_table = 'tb_campaign_calendar'
        verbose_name = 'Calendario de Campañas por Consumidor'
        ordering = ['consumer', 'campaign_label']
        unique_together = ('consumer', 'campaign_label')

    def __str__(self):
        return f"{self.consumer} - {self.campaign_label}"
