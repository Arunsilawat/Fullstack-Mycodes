from django.contrib import admin
from django.urls import path
from app import views
urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login')
]

# ------------------------------------------------------------------
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls'))
]
