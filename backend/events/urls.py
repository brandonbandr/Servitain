from django.urls import path
from .views import get_events, create_event, edit_event

urlpatterns = [

    path('get_events/', view=get_events, name='get_events'),
    path('create_event/', view=create_event, name='create_event'),
    path('edit_event/<int:pk>', view=edit_event, name='edit_event')
]