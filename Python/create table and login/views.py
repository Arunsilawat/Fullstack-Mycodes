from django.shortcuts import render
from.models import Student
# Create your views here.
def home(request):
    return render(request,'home.html')
def register(request):
    if request.method=='POST':
        name=request.POST.get('nm')
        email=request.POST.get('em')
        contact=request.POST.get('con')
        password=request.POST.get('pass')
        cpassword=request.POST.get('cpass')
        #print(name,email,contact,password)
        # Student.objects.create(stu_name=name,stu_email=email,stu_contact=contact,stu_password=password)
        # msg="registraton successfull"
        # return render(request,'home.html',{'msg':msg})
        if password==cpassword:
            user=Student.objects.filter(stu_email=email)
            if user:
                msg="Email already exist"
                return render(request,'register.html',{'msg':msg})
            else:
                Student.objects.create(stu_name=name,stu_email=email,stu_contact=contact,stu_password=password)
                msg="Registration Successfully"
                return render(request,'login.html',{'msg':msg})
        else:
            msg="Password & Confirm Password not matched"
            return render(request,'register.html',{'msg':msg})
    else:
     return render(request,'register.html')

def login(request):
    return render(request,'login.html')

def all(request):
    data=Student.objects.all()
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def myfilter(request):
    data=Student.objects.filter(stu_name="Arun")
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def myexclude(request):
    data=Student.objects.exclude(stu_name="Arun")
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def myassending(request):
    data=Student.objects.order_by("stu_name")  #  .reverse()  se bhi dissending de dega
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def mydissending(request):
    data=Student.objects.order_by("-stu_name")
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def myrendom(request):
    data=Student.objects.order_by("?")
    data1=data.values()
    return render(request,'dashboard.html',{'data':data1})

def myslice(request):
    data=Student.objects.all()[5::]
    data1=data
    return render(request,'dashboard.html',{'data':data1})

def myreverse(request):
    data=Student.objects.order_by("-id")[:5:]
    data1=data.values()
    return render(request,'dashboard.html',{'data':data})