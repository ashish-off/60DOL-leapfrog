# factorial without recursion
def factorial (num):
  fact = 1
  for i in range(1, num +1):
    fact *= i
  return fact

print(factorial(5))  

# recursion : print 1 to n backward 
print("recursion : ")
def show (n) :
  if n == 0:
    return
  print(n)
  show(n-1)
  print("end")

show(5)

# recursion : factorials
def fact(n):
  if n == 0 or n == 1:
    return 1
  else:
    return n * fact(n-1)
  
result = fact(3)
print("fact 3 : ", result) 
  
def tailFacto(n, fact = 1):
  if n == 0 or n == 1:
    return fact
  return tailFacto(n-1, n*fact)
  
print("tailFacto 3 : ", tailFacto(3))

# print sum of n natural nuber 

def sumOfN (n):
  if n == 0:
    return 0
  return n + sumOfN(n-1)

print("sum of 5 : ", sumOfN(5))

def printList (lst, index = 0):
  if index == len(lst):
    return
  print(lst[index])
  printList(lst, index +1)
  
printList(["ashish", "saud", 1,43,54, "hi"])