from django.db import models

# Create your models here.
class Student(models.Model):
    stu_name=models.CharField(max_length=50)
    stu_email=models.EmailField()
    stu_contact=models.IntegerField()
    stu_password=models.CharField(max_length=25)

class Query(models.Model):
    stu_name=models.CharField(max_length=50)
    stu_email=models.EmailField()
    stu_contact=models.IntegerField()
    stu_query=models.TextField()
    def __str__(self):
        return self.stu_query

        

from django.db import models


class User(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    contact=models.IntegerField()
    def __str__(self):
        return str(self.name)
    

quali=[("1","M.Tech"),("2","B.Tech"),("3","BCA"),("4","BBA")]

class Profile(models.Model):
    pro_name=models.OneToOneField(User,on_delete=models.CASCADE)
    quali=models.CharField(max_length=50,choices=quali)
    city=models.CharField(max_length=50)
    def __str__(self):
        return str(self.pro_name)
