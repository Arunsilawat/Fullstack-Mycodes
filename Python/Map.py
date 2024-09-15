#map() -->number or input == no of output-->colection return aayega

# my_list=[1,2,3,4,5]
# def squer(n):
#     return n**2
# new_list=list(map(squer,my_list))
# print(new_list)


my_list1=[1,2,3,4,5]
my_list2=[5,4,3,2,1]
def add(x,y):
    return x+y
new_list=list(map(add,my_list1,my_list2))
print(new_list)
#----------------------------------------------------------------

def add(x,y):
    return x+y
new_list=list(map(add,[5,4,3,2,1],[1,2,3,4,5]))
print(new_list)

#------------------------------------------------
#lambda 
x=lambda a,b:a+b
print((list(map(x,[1,2,3,4,5],[5,4,3,2,1]))))