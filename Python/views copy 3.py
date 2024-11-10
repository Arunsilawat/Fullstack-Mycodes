 

# from django.shortcuts import render
# from django.http import HttpResponse,JsonResponse
# from .models import Student
# from .serializers import StudentSerializer
# from rest_framework.renderers import JSONRenderer
# import io
# from rest_framework.parsers import JSONParser
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.

# def student_list(req):
#     stu = Student.objects.all() # -----------------
#     print(type(stu))
#     print("Stu= ",stu)
#     print("stu.values()= ",stu.values())
#     print("stu.values_list()=",stu.values_list())
#     print("stu.values_list(col1,col2,col3)=",stu.values_list('name','roll','city'))
#     serializer = StudentSerializer(stu,many=True) # -------------------
#     print("Serializer= ",serializer)
#     print(serializer.data)
#     # json_data = JSONRenderer().render(serializer.data)
#     # print("Json_data = ",json_data)
#     # return HttpResponse(json_data,content_type='application/json')
#     # when we send json data from views then contet type must be a "application/json" 
#     return JsonResponse(serializer.data,safe=False) # -----------
#     # first argument of JsonResponse should be a dict, otherwise set safe=False

# def student_detail(req,pk):
#     user = Student.objects.get(pk=pk)
#     print(type(user))
#     print("Stu_name= ",user.name)
#     print("Stu_roll= ",user.roll)
#     print("Stu_city= ",user.city)
#     serializer = StudentSerializer(user)
#     print("Serializer= ",serializer)
#     print(serializer.data)
#     # json_data = JSONRenderer().render(serializer.data)
#     # print("Json_data = ",json_data)
#     # return HttpResponse(json_data,content_type='application/json')
#     # when we send json data from views then contet type must be a "application/json" 
#     return JsonResponse(serializer.data,safe=False)
#     # first argument of JsonResponse should be a dict, otherwise set safe=False

#  =============== Single line ======================
# @csrf_exempt
# def student_api(request):
#     if request.method == 'GET':
#         json_data = request.body
#         print(json_data)
#         if json_data:
#             stream = io.BytesIO(json_data)
#             python_data = JSONParser().parse(stream)
#             id = python_data.get('id')
#             stu = Student.objects.get(id=id)
#             serializer = StudentSerializer(stu)
#             return JsonResponse(serializer.data,safe=False)
#         else:
#             stu_all = Student.objects.all()
#             serializer = StudentSerializer(stu_all,many=True)
#             return JsonResponse(serializer.data,safe=False)
    
#     elif request.method == 'POST':
#         json_data = request.body
#         stream = io.BytesIO(json_data)
#         python_data = JSONParser().parse(stream)
#         serializer =StudentSerializer(data = python_data)
#         if serializer.is_valid():
#             serializer.save()
#             res = {'msg': 'Data Created'}
#             json_data = JSONRenderer().render(res)
#             return HttpResponse(json_data, content_type='application/json')
#         json_data = JSONRenderer().render(serializer.errors)
#         return HttpResponse(json_data, content_type='application/json')
    
#     elif request.method == 'PUT':
#             json_data = request.body
#             stream = io.BytesIO(json_data)
#             python_data = JSONParser().parse(stream)
#             id = python_data.get('id')
#             stu = Student.objects.get(id=id)
#             # serializer = StudentSerializer(stu, data=python_data, partial = True)
#             serializer = StudentSerializer(stu, data=python_data)
#             if serializer.is_valid():
#                 serializer.save()
#                 res = {'msg':'Data Updated !!'}
#                 json_data = JSONRenderer().render(res)
#                 return HttpResponse(json_data, content_type='application/json')
#             json_data = JSONRenderer().render(serializer.errors)
#             return HttpResponse(json_data, content_type='application/json')

#     elif request.method == 'PATCH':
#         json_data = request.body
#         stream = io.BytesIO(json_data)
#         python_data = JSONParser().parse(stream)
#         id = python_data.get('id')
#         stu = Student.objects.get(id=id)
#         serializer = StudentSerializer(stu, data=python_data, partial = True)
#         if serializer.is_valid():
#             serializer.save()
#             res = {'msg':'Data Partially Updated...!!'}
#             json_data = JSONRenderer().render(res)
#             return HttpResponse(json_data, content_type='application/json')
#         json_data = JSONRenderer().render(serializer.errors)
#         return HttpResponse(json_data, content_type='application/json')  

#     elif request.method == 'DELETE':
#         json_data = request.body
#         stream = io.BytesIO(json_data)
#         python_data = JSONParser().parse(stream)
#         id = python_data.get('id')
#         if id:
#             stu = Student.objects.get(id=id)
#             stu.delete()
#             res = {'msg': 'Data Deleted!!'}
#             return JsonResponse(res, safe=False)
#         else:
#             res = {'msg': 'id not present in Database'}
#             return JsonResponse(res)
# ----------------------------------------- function based view-----------------------------------------------


# from rest_framework.decorators import api_view 
# from rest_framework.response import Response 
# from rest_framework import status
# from .serializers import StudentSerializer
# from .models import Student
# # from django.shortcuts import render
# # from django.http import HttpResponse,JsonResponse
# # 
# # from rest_framework.renderers import JSONRenderer
# # import io
# # from rest_framework.parsers import JSONParser
# # from django.views.decorators.csrf import csrf_exempt
# @api_view(['GET', 'POST'])  
# def stu_list(request): 
#     if request.method=='GET':
#         student = Student.objects.all()
#         serializer=StudentSerializer(student,many=True)
#         return Response(serializer.data) 
    
#     elif request.method=='POST':
#         serializer=StudentSerializer(data=request.data) 
#         if serializer.is_valid(): 
#             serializer.save() 
#             return Response(serializer.data) 
#         else: return Response(serializer.errors)

# @api_view(['GET', 'PUT','DELETE','PATCH']) 
# def stu_info(request,pk):
#     id = Student.objects.filter(id=pk)
#     if id:
#         if request.method=='GET': 
#             student=Student.objects.get(id=pk) 
#             serializer = StudentSerializer(student) 
#             return Response(serializer.data) 
        
#         elif request.method=='PUT': 
#             student=Student.objects.get(id=pk) 
#             serializer = StudentSerializer(student,data=request.data) 
#             if serializer.is_valid(): 
#                 serializer.save() 
#                 return Response(serializer.data) 
#             else: return Response(serializer.errors) 
        
#         elif request.method=='PATCH': 
#             student=Student.objects.get(id=pk) 
#             serializer = StudentSerializer(student,data=request.data,partial=True) 
#             if serializer.is_valid(): 
#                 serializer.save() 
#                 return Response(serializer.data) 
#             else: return Response(serializer.errors)
        
#         elif request.method=='DELETE': 
#                 student=Student.objects.get(id=pk) 
#                 student.delete() 
#                 return Response({'msg':"Data deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
#     else:
#         res = {'msg': 'id not present in Database'}
#         return Response(res)
# ------------------------------- class based views ----------------------------------

from django.shortcuts import render

# Create your views here.
from api.models import Movie 
from api.serializers import MovieSerializer 
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status

class MovieList(APIView):

    def get(self, request): 
        movies = Movie.objects.all() 
        serializer=MovieSerializer(movies,many=True) 
        return Response(serializer.data)
     
    def post(self, request): 
        serializer=MovieSerializer(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else: return Response(serializer.errors)

class MovieDetail(APIView): 
    def get(self, request,pk): 
        try: 
            movie=Movie.objects.get(pk=pk) 
        except Movie.DoesNotExist: 
            return Response({'msg':'Detail not found'},status=status.HTTP_404_NOT_FOUND) 
        serializer = MovieSerializer(movie) 
        return Response(serializer.data) 
    def put(self,request,pk): 
        movie=Movie.objects.get(pk=pk) 
        serializer = MovieSerializer(movie,data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            # return Response(serializer.data) 
            return Response({'msg':"Data updated successfully"})
        else: return Response(serializer.errors) 
    def delete(self,request,pk): 
        movie=Movie.objects.get(pk=pk) 
        movie.delete() 
        return Response({'msg':"Data deleted successfully"}, status=status.HTTP_204_NO_CONTENT)