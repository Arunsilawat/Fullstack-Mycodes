#Wap to display detail of student gaving highest 
name=["ajay","aman","akash","sonam","radha"]
address=["bhopal","ujjain","bhopal","ratlam","agra"]
st_marks=[45,56,35,56,12]
maxnum=max(st_marks)
# print(maxnum)
count=st_marks.count(maxnum)
# print(count)
index=-1
for i in range(count):
    index=st_marks.index(maxnum,index+1)
    print("Student Name",name[index])
    print("Student Address",address[index])
    print("Student Marks",st_marks[index])
    