from .models import *
from .serializers import *
from rest_framework import generics

#for authentication
from rest_framework import permissions
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

#for API endpoint
from rest_framework.decorators import api_view
from rest_framework import renderers
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import *

#html renders
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'activity': reverse('activity:activity-list', request=request, format=format),
        'users': reverse('activity:user-list', request=request, format=format),
        'profiles': reverse('activity:profile-list', request=request, format=format),
    })

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ActivityList(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer): #override
        serializer.save(createdBy=self.request.user)

class ActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer): #override
        serializer.save(user=self.request.user)

@login_required
def home(request, format=None):
    return render(request, 'activity/home.html',
         {
            #empty ok, no parameters passed to the home.html file
         })
