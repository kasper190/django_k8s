from .models import Guestbook
from rest_framework.generics import ListCreateAPIView
from .serializers import GuestbookSerializer


class GuestbookListCreateAPIView(ListCreateAPIView):
    """Guestbook API View for list and create actions"""
    queryset = Guestbook.objects.all()
    serializer_class = GuestbookSerializer
