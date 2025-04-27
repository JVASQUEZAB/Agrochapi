from django.db import models

# Create your models here.
class AreaResponsable(models.Model):
    """
    Modelo que representa las áreas responsables de los fundos.
    """
    codigo = models.CharField(max_length=3, unique=True)
    nombre = models.CharField(max_length=50)

    class Meta:
        db_table = 'ac_areas_responsables'
        verbose_name = 'Área Responsable'
        verbose_name_plural = 'Áreas Responsables'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.nombre}"