from django.contrib import admin
from .models import *

# Register your models here.
class ActivityAdmin(admin.ModelAdmin):
    list_display = ["title"]
    search_fields = ["title"]
        
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["user"]
    search_fields = ["user"]
    
class CommentsAdmin(admin.ModelAdmin):
    list_display = ["activity", "content"]
    search_fields = ["activity"]
            
admin.site.register(Activity, ActivityAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Comments, CommentsAdmin)