from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
from .models import *

class Activity(models.Model):
    when = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField()
    city = models.CharField(max_length=300, blank = True)
    state = models.CharField(max_length=300, blank = True)
    country = models.CharField(max_length=300, blank = True)
    createdBy = models.ForeignKey('auth.User', related_name='activities', on_delete=models.CASCADE)
    image = models.ImageField('activity image', upload_to='media', default = '/media/default.jpg', blank=True)

class Profile(models.Model):
    user = models.ForeignKey('auth.User', related_name='profile', on_delete=models.CASCADE)
    city = models.CharField(max_length=300, blank = True)
    state = models.CharField(max_length=300, blank = True)
    country = models.CharField(max_length=300, blank = True)
    avatar = models.ImageField('profile picture', upload_to='media', default = '/media/default.jpg', blank=True)

    def __str__(self):
        return self.user.first_name

    class Meta:
        verbose_name_plural = "Profile"

class Comments(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    activity = models.ForeignKey(Profile, on_delete=models.CASCADE)
    content = models.TextField()
