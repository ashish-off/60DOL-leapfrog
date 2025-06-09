def isEven (num):
  return num % 2 == 0

print(isEven(4))  
print(isEven(5))  

def largestOf (a, b, c):
  if a>b and a>c :
    return a
  elif b>a and b>c:
    return b
  else: 
    return c

print(largestOf(23,451,333))

# defualt arguments
def prod (a =1, b = 1):
  return a * b

print(prod(2,3))  
print(prod(2))
print(prod())

# wap to find length of list 
def lengthList (lst):
  len = 0
  for i in lst:
    len += 1
  return len

list1 = [1,2,3,4,5,6,7,8,9]

print("length : ", lengthList(list1))

# for item in list1:
#   print(item , end= " ")
  
