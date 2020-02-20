from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status

from website.models import *
from website.serializers import *


@csrf_exempt
def customer_list(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        customers_serializer = CustomerSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        Customer.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt 
def customer_detail(request, pk):
    try: 
        customer = Customer.objects.get(pk=pk) 
    except Customer.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        customer_serializer = CustomerSerializer(customer) 
        return JsonResponse(customer_serializer.data) 
 
    elif request.method == 'PUT': 
        customer_data = JSONParser().parse(request) 
        customer_serializer = CustomerSerializer(customer, data=customer_data) 
        if customer_serializer.is_valid(): 
            customer_serializer.save() 
            return JsonResponse(customer_serializer.data) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        customer.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

    
@csrf_exempt
def customer_list_age(request, age):
    customers = Customer.objects.filter(age=age)
        
    if request.method == 'GET': 
        customers_serializer = CustomerSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'


@csrf_exempt
def register(request):
    user_data = JSONParser().parse(request)
    user_auth_serializer = UserAuthSerializer(data=user_data)
    if user_auth_serializer.is_valid(): 
        user_auth_serializer.save()

        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()

        return JsonResponse(user_auth_serializer.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(user_auth_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@csrf_exempt
def login(request):
    user_data = JSONParser().parse(request)
    try: 
        user_auth = UserAuth.objects.get(pk=user_data['user_id']) 
    except UserAuth.DoesNotExist: 
        return HttpResponse('the unc id has not been registered.', status=status.HTTP_404_NOT_FOUND)

    if user_auth.password == user_data['password']:
        user = User.objects.get(pk=user_data['user_id'])
        return JsonResponse(UserSerializer(user).data) 

    return HttpResponse('incorrect password', status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def list_tags(request):
    if request.method == 'GET':
        tags = Tag.objects.all()
        tags_serializer = TagSerializer(tags, many=True)
        print(tags_serializer.data)
        return JsonResponse(tags_serializer.data, safe=False)


@csrf_exempt
def list_notes(request, tag):
    print('Hello {}'.format(tag))
    if request.method == 'GET':
        notes = Note.objects.filter(tag_id=tag)
        notes_serializer = NoteSerializer(notes, many=True)
        return JsonResponse(notes_serializer.data, safe=False)


@csrf_exempt
def post_notes(request):
    note_data = JSONParser().parse(request)
    note_serializer = NoteSerializer(data=note_data)
    if note_serializer.is_valid():
        note_serializer.save()
        return JsonResponse(note_serializer.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(note_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    
