lis=["we","are","here","to","revise","python"]
print(len(lis))
# lis[0].capitalize()
#capitalize karna 
for i in range(0,len(lis)):
    # lis[i]=lis[i].capitalize()         #first latter capital
    # lis[i]=lis[i].upper()              #all latter capital
    lis[i]=lis[i][0].upper()+lis[i][1:]  #first latter capital   
print(lis)

#---------------------------> palindrom <------------------------------------
#question-->WAp to create a new list with the help list such that it contain 
#only palindrom string which has a length more then 2.

lis=["ababa","nitin","we","new","www","a"]
lis1=[]
for i in lis:
    if i==i[ : :-1] and len(i)>2:
        lis1.append(i)
print(lis1)