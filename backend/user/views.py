from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from serializer import UserSerializer
from models import Users

@api_view(['POST'])
def signup(requests):

    pass