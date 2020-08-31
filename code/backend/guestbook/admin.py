from django.contrib import admin
from .models import Guestbook


class GuestbookAdmin(admin.ModelAdmin):
    """Guestbook django admin page"""
    model = Guestbook
    list_display = ['id', 'author', 'message', 'timestamp']
    list_display_links = list_display
    readonly_fields = ['id']
    list_filter = ['timestamp']
    search_fields = ['author', 'message']


admin.site.register(Guestbook, GuestbookAdmin)
