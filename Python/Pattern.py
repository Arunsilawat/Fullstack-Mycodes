#-----------partten
n=int(input("How many row requird"))
i=1
while i<=n:
    print(i*'*'+(n-i)*(' '))
    i=i+1
#-----------------reverse ----------------------
n=int(input("How many row requird"))
i=1
while i<=n:
    print((n-i)*(' ')+i*'*')
    i=i+1

#------------------piramid --------------------
n=int(input("How many row requird"))
i=1
while i<=n:
    print((n-i)*(' ')+i*' *')
    i=i+1
#--------------odd even piramid --------------
n=int(input("How many row requird"))
i=1
while i<=n:
    print((n-i)*(' ')+(2*i-1)*'*')
    i=i+1
#------------ulta ----------------------------------
n=int(input("How many row requird"))
i=0
while i<n:
    print(i*' '+(n-i)*' *')
    i=i+1
#----------------------------------------------------
n=int(input("How many row requird"))
i=0
while i<n:
    print(i*' '+(n-i)*('*'))
    i=i+1

#------------------------------------------------
n=int(input("How many row requird"))
i=0
while i<n:
    print(i*' '+(n-i)*'*')
    i=i+1