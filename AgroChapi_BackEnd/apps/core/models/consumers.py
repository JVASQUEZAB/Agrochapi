from django.db import models


# Fundo Model
# Este modelo representa los fundos.


class Fundo(models.Model):
    codigo = models.CharField(max_length=3, unique=True)
    nombre = models.CharField(max_length=50)

    class Meta:
        db_table = 'tb_fundos'
        verbose_name = 'Fundo'
        verbose_name_plural = 'Fundos'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.nombre}"



class Cultivo(models.Model):
    codigo = models.CharField(max_length=3, unique=True)
    nombre = models.CharField(max_length=50)

    class Meta:
        db_table = 'tb_cultivos'
        verbose_name = 'Cultivo'
        verbose_name_plural = 'Cultivos'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.nombre}"
    
 

# Variedad Model
# Este modelo representa las variedades de cada cultivo.

class Variedad(models.Model):
    codigo = models.CharField(max_length=3, unique=True)
    descripcion = models.CharField(max_length=50)
    cultivo = models.ForeignKey(Cultivo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_variedades'
        verbose_name = 'Variedad'
        verbose_name_plural = 'Variedades'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.nombre} {self.cultivo}"
    

# Consumer Model
# Este modelo representa los consumidores de cada fundo.

class Consumidor(models.Model):
    TIPO_CONSUMIDOR = (
        ('directo', 'Directo'),
        ('indirecto', 'Indirecto'),
    )

    fundo = models.ForeignKey(Fundo, on_delete=models.CASCADE)
    variedad = models.ForeignKey(Variedad, on_delete=models.SET_NULL, null=True, blank=True)
    codigo = models.CharField(max_length=20, unique=True)
    nombre_corto = models.CharField(max_length=5, null=True, blank=True)
    descripcion = models.CharField(max_length=50)
    area = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    fecha_alta = models.DateTimeField()
    fecha_baja = models.DateTimeField(null=True, blank=True)
    tipo = models.CharField(max_length=10, choices=TIPO_CONSUMIDOR, default='directo')
    grupo_manejo = models.CharField(max_length=100, null=True, blank=True)
    
    class Meta:
        db_table = 'tb_consumidores'
        verbose_name = 'Consumidor'
        verbose_name_plural = 'Consumidores'
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} {self.descripcion} {self.fundo} {self.variedad} {self.grupo_manejo}"
    

    