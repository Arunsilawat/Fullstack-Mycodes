records={}

n=int(input("How many ...? : "))
for i in range(n):
    aadhar=int(input("Enter Aadhar : "))
    name=input("Enter Name : ")
    mobile=input("Enter Mob. : ")
    d={"name":name,"mobile":mobile}
    records[aadhar]=d 
print(records)