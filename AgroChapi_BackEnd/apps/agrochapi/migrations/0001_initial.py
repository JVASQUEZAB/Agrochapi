# Generated by Django 5.0.14 on 2025-05-07 09:16

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AreaResponsable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=3, unique=True)),
                ('nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Área Responsable',
                'verbose_name_plural': 'Áreas Responsables',
                'db_table': 'ac_areas_responsables',
                'ordering': ['codigo'],
            },
        ),
        migrations.CreateModel(
            name='ProgramaMO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_labor', models.CharField(blank=True, max_length=255, verbose_name='Sub Labor')),
                ('productividad', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Productividad')),
                ('programa', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Programa')),
                ('real', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Real')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Última actualización')),
                ('area_responsable', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='agrochapi.arearesponsable', verbose_name='Área Responsable')),
            ],
            options={
                'verbose_name': 'Programa MO',
                'verbose_name_plural': 'Programas MO',
                'db_table': 'ac_programa_mo',
            },
        ),
    ]
