n=int(input("Enter NUmber"))
a=0
b=1
i=1
print(a,end=',')
print(b,end=',')
while i<=(n-2):
    c=a+b
    a=b
    b=c
    if i<(n-2):
        print(c,end=',')
    else:
        print(c)
    i=i+1