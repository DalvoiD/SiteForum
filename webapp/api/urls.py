from django.urls import path

from webapp.api.views import CurrentUserAPIView


urlpatterns = [
    path('user/', CurrentUserAPIView.as_view(), name='current-user'),
]