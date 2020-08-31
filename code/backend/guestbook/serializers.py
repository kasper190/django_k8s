from .models import Guestbook
from rest_framework.serializers import ModelSerializer


class GuestbookSerializer(ModelSerializer):
    """Guestbook serializer"""
    class Meta:
        model = Guestbook
        fields = [
            'id',
            'author',
            'message',
            'timestamp',
        ]
        read_only_fields = [
            'id',
            'timestamp',
        ]
