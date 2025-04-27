from django.db import models



# RecordStatus Model
# Este modelo representa los diferentes estados de un registro.
class RecordStatus(models.Model):
    name = models.CharField(max_length=50, unique=True)
    level = models.PositiveSmallIntegerField()

    class Meta:
        db_table = 'tb_record_status'
        verbose_name = 'Estado de Registro'
        verbose_name_plural = 'Estados de Registro'
        ordering = ['level']

    def __str__(self):
        return f"{self.name} ({self.level})"
