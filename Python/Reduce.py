import functools
from functools import reduce
my_list=[10,23,43,22,65]
def max_digit(x,y):
    if x>y:
        return x
    else:
        return y
print(functools.reduce(max_digit,my_list))

#--------------------------------------------------------------
form functools import reduce   #only reduce ko import kiya   only single objet hi return aayega
my_list=[10,23,43,22,65]
def max_digit(x,y):
    if x>y:
        return x
    else:
        return y
print(reduce(max_digit,my_list))

#------------------minimam --------------------------------
# from functools import reduce
my_list=[10,23,43,22,65]
def min_digit(x,y):
    if x<y:
        return x
    else:
        return y
print(reduce(min_digit,my_list))

#-------------------- sum --------------------------------
# from functools import reduce
my_list=[10,23,43,22,65]
def sum_digit(x,y):
        return x+y
    
print(reduce(sum_digit,my_list))

#--------------smallest nu --------------------------
from functools import reduce
my_list=[10,23,43,22,65,7]
def sum_digit(x,y):
        if x<y:
            return x
        else:
            return y
    
print(reduce(sum_digit,my_list))
#---------------- highest ---------------------------
from functools import reduce
my_list=[10,23,43,22,65,7]
def sum_digit(x,y):
        if x>y:
            return x
        else:
            return y
    
print(reduce(sum_digit,my_list))