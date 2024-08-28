#Wap to create following list at runtime and placed them all in single list.(list of list)
record=int(input("How many..."))
st_detail=[[],[],[]]
for i in range(record):
    name=input("enter Name : ")
    address=input("enter Addres : ")
    marks=int(input("enter marks : " ))
    st_detail[0].append(name)
    st_detail[1].append(address)
    st_detail[2].append(marks)
print(st_detail)