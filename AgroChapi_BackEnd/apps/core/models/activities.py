from django.db import models


#Activities Model
# Este modelo representa las distintas actividades.

class Actividad(models.Model):
    codigo = models.CharField(max_length=3, unique=True)
    descripcion = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'tb_actividades'
        verbose_name = 'Actividad'
        verbose_name_plural = 'Actividades'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.descripcion}"
    

#Labores Model
# Este modelo representa las labores a realizar con su respectiva relacion a la actividad correspondiente.

class Labor(models.Model):
    codigo = models.CharField(max_length=6, unique=True)
    descripcion = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    codigo_actividad = models.ForeignKey(Actividad, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_labores'
        verbose_name = 'Labor'
        verbose_name_plural = 'Labores' 
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.descripcion} {self.codigo_actividad} {self.codigo_actividad.descripcion}"



#Modelo de la tabla de Unidades de Medida para las labores
# Este modelo representa las unidades de medida para las labores.
class UMedida(models.Model):
    """
    Modelo que representa las unidades de medida para las labores.
    """
    codigo = models.CharField(max_length=3, unique=True)
    u_medida = models.CharField(max_length=50)

    class Meta:
        db_table = 'tb_unidades_medida'
        verbose_name = 'Unidad de Medida'
        verbose_name_plural = 'Unidades de Medida'
        ordering = ['id']

    def __str__(self):
        return f"{self.id} {self.nombre}"