
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from guestbook.views import GuestbookListCreateAPIView
from guestbook_backend.health_check import HealthCheckView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', GuestbookListCreateAPIView.as_view()),
    path('api/health-check/', HealthCheckView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
