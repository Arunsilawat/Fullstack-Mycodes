
#-----------------------find vovel ---------------------
my_str=input("Enter Name")
def vovel(n):
    my_vovel=['a','e','i','o','u','e','A','I','O','U','E']
    if n in my_vovel:
        return True
print(list(filter(vovel,my_str)))

# ---------------------- consonenet ------------------------object in ,not in // object==object same find karne ke liye is ,is not
my_str=input("Enter Name")
def vovel(n):
    my_vovel=['a','e','i','o','u','e','A','I','O','U','E']
    if n not in my_vovel:
        return True
print(list(filter(vovel,my_str)))

#---------------------------------------------------
my_list=[12,34,44,56,76,22,3,12,22]
def new(n):
    if n>=30:
        return True
print(list(filter(new,my_list)))

#-----------even ------------------
my_list=[12,34,44,56,76,22,3,12,22]
def new(n):
    if n%2==0:
        return True
print(list(filter(new,my_list)))
#----------------------------odd ------------
my_list=[12,34,44,56,76,22,3,12,22]
def new(n):
    if n%2!=0:
        return True
print(list(filter(new,my_list)))