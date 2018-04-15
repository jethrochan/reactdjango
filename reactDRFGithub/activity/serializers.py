from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    activities = serializers.HyperlinkedRelatedField(many=True, view_name='activity:activity-detail', read_only=True)
    profile = serializers.HyperlinkedRelatedField(many=True, view_name='activity:profile-detail', read_only=True)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'activities', 'profile')

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    
    createdBy = serializers.ReadOnlyField(source='createdBy.username')

    class Meta:
        model = Activity
        fields = ('when', 'id', 'title', 'description', 'city', 'state', 'country', 'createdBy', 'image')

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        fields = ('id', 'user', 'city', 'state', 'country', 'avatar', 'user')