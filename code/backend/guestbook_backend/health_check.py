from django.db import connection
from django.http import HttpResponse
from django.views import View


class HealthCheckView(View):
    """Health check django app"""
    def __init__(self) -> None:
        super().__init__()
        
        self.health_check_tests = [
            self.healt_check_database,
        ]

    def healt_check_database(self) -> bool:
        """Health check for database connection"""
        with connection.cursor() as cursor:
            cursor.execute("select 1")
            if cursor.fetchone()[0] != 1:
                return False
            return True

    def health_check_all(self) -> bool:
        """Health check for all tests"""
        return all(map(lambda method: method(), self.health_check_tests))

    def get(self, request, *args, **kwargs) -> HttpResponse:
        """Health check view"""
        if not self.health_check_all():
            return HttpResponse("Health check not pass", status=503)
        return HttpResponse("OK")
