from django.core.management.base import BaseCommand
from core.models.calendar import Calendar
from datetime import date, timedelta
import locale

try:
    locale.setlocale(locale.LC_TIME, 'es_ES.utf8')
except:
    locale.setlocale(locale.LC_TIME, 'es_ES')

class Command(BaseCommand):
    help = "Genera el calendario global desde una fecha inicial hasta una fecha final"

    def handle(self, *args, **kwargs):
        start_date = date(2000, 1, 1)
        end_date = date(2080, 12, 31)

        current_date = start_date
        created_count = 0

        while current_date <= end_date:
            obj, created = Calendar.objects.get_or_create(
                date=current_date,
                defaults={
                    'year': current_date.year,
                    'month_number': current_date.month,
                    'month_name': current_date.strftime('%B').capitalize(),
                    'iso_week': current_date.isocalendar()[1],
                }
            )
            if created:
                created_count += 1
            current_date += timedelta(days=1)

        self.stdout.write(self.style.SUCCESS(f'Calendario generado exitosamente. Total fechas nuevas: {created_count}'))
