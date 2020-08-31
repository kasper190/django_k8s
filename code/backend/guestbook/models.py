from django.db import models
from django.utils import timezone


class Guestbook(models.Model):
    """Guestbook django model"""
    author = models.CharField(max_length=200)
    message = models.CharField(max_length=500)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return str(self.id)

    def __repr__(self):
        return f"Guestbook(id={self.id}, author={self.author}, \
                           timestamp={self.timestamp})"
