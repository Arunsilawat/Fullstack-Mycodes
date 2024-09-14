#------------- Swap --------------------->using third variable
x=10
y=20
print("Befor Swap",x,y)
z=x
x=y
y=z
print("After Swap",x,y)
#--------------Swap --------------------->multipication division
x=int(input("Enter first no : "))
y=int(input("Enter Second no : "))
print("Befor Swap :",x,y)
x=x*y
y=x/y
x=x/y
print("After Swap :",x,y)
#--------------- Swap ------------------->addition and subtraction
x=int(input("Enter first no : "))
y=int(input("Enter Second no : "))
print("Befor Swap :",x,y)
x=x+y
y=x-y
x=x-y
print("After Swap :",x,y)
#--------------- Swap ------------------->without variable
x=int(input("Enter first no : "))
y=int(input("Enter Second no : "))
print("Befor Swap :",x,y)
x,y=y,x
print("After Swap :",x,y)
