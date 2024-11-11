

# from django.urls import path
# from .views import *

# urlpatterns = [
#     path("stu_info/<int:pk>",stu_info,name='stu_info'),
#     path("stu_list/",stu_list,name='stu_list'),
#     # path("student_api/",student_api,name='student_api'),
# ]

from django.urls import path
from .views import *
urlpatterns = [
    path('stu_info/',MovieList.as_view(),name='Movie_List'), 
    path('stu_list/<int:pk>', MovieDetail.as_view(),name='Movie_Detail')
]