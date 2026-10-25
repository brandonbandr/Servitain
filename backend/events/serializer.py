from rest_framework import serializers
from .models import Events

# SERIALIZER CLASS CREATION
class EventSerializer(serializers.ModelSerializer):

    # SPECIFIES THE META INFORMATION, AKA WE WANT ALL FIELDS TO EVENTS MODEL
    class Meta():

        model = Events
        fields = '__all__'

    def create(self, validated_data):
        # Create the main object
        my_object = Events.objects.create(**validated_data)

        return my_object