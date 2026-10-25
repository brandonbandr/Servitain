from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Events
from .serializer import EventSerializer

# Create your views here.
@api_view(['GET'])
def get_events(request):

    # GET DATABASE INFORMATION
    events = Events.objects.all()

    # CONVERTS THE EVENTS INTO JSON DATA
    serializedData = EventSerializer(events, many=True).data

    # SENDING THE RESPONSE
    return Response(serializedData)

@api_view(['POST'])
def create_event(request):

    # WHAT THE FRONT USER SENDS
    data = request.data

    # UPDATES THE MODEL
    serializer = EventSerializer(data=data)

    # IF THE INFORMATION WORKS
    if serializer.is_valid():

        # SAVE TO THE DB
        serializer.save()

        # RETURNS THE VALUE WITH A GOOD STATUS CODE
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    else:

        # ERROR HANDLING WITH BAD STATUS CODE
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def edit_event(request, pk):

    # TRIES TO GET THE DB OBJECT
    try: 

        event = Events.objects.get(pk=pk)

    except Events.DoesNotExist:

        return Response(status=status.HTTP_404_NOT_FOUND)
    

    # WHICH METHOD IS BEING USED
    match request.method:

        # EDITING THE DATABASE ENTRIES
        case 'PUT':

            # SETS UP DATA 
            data = request.data

            serializer = EventSerializer(data = data)

            # VALIDATES
            if serializer.is_valid():

                serializer.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            # ERROR HANDLING
            else:

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # DELETING ENTRIES
        case 'DELETE':
            
            event.delete()
            
            serializer = EventSerializer(Events, many=True)

            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)