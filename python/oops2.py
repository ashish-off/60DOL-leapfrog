class student :
  __private = "private variable"  
  
  def __init__(self,name) :
    self.name = name
    # self.__name = name # private variable
    
  def __greet(self) :
    print("Hello ", self.name)
    
  def welcome(self) :
    self.__greet()  # calling private method
    print("Welcome")
    
s1 = student("ashish")
print(s1.name) # accessing public variable
# print(s1.__name) # error, private variable 

del s1.name # delete variable 
# print(s1.name) # error

# s1.__greet() # error, private method
del s1
# print(s1) # error

s2 = student("bats")
s2.welcome()