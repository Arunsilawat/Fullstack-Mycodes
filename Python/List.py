lis=["we","are","here","to","revise","python"]
print(len(lis))
# lis[0].capitalize()
#capitalize karna 
for i in range(0,len(lis)):
    # lis[i]=lis[i].capitalize()         #first latter capital
    # lis[i]=lis[i].upper()              #all latter capital
    lis[i]=lis[i][0].upper()+lis[i][1:]  #first latter capital   
print(lis)