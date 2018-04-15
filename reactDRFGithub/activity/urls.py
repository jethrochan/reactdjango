from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from activity import views

urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^activity/$', views.ActivityList.as_view(), name='activity-list'),
    url(r'^activity/(?P<pk>[0-9]+)/$', views.ActivityDetail.as_view(), name='activity-detail'),
    url(r'^users/$', views.UserList.as_view(), name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='user-detail'),
    url(r'^profile/$', views.ProfileList.as_view(), name='profile-list'),
    url(r'^profile/(?P<pk>[0-9]+)/$', views.ProfileDetail.as_view(), name='profile-detail'),
    url(r'^fistbump/$', views.home, name='home'),
    url(r'^fistbump/(?:.*)/?$', views.home),
]

urlpatterns = format_suffix_patterns(urlpatterns)
