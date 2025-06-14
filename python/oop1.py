# # class
# class Car :
#   brand = "BMW"
#   color = "black"  
# # objest
# s1 = Car()
# print(s1.brand, s1.color)

class Student  :

  # # default constructor (Python does not support method overloading so only one constructor can be defined)
  # def __init__(self):
  #   print("default constructor called")
  
  # parameterized constructor
  def __init__(self, name, marks):
    self.name = name
    self.marks = marks
    # print("parameterized constructor called")
    
  def welcome(self) :
    print("Welcome ", self.name)
  
  def getMark (self) :
    return self.marks  
  
  # static method : method that dont use self paremeter
  @staticmethod
  def displaySchool() :
    print("vs niketan higher secondary school")

s1 = Student("ashish" , 90)
print(s1.name , s1.marks)

s2 = Student("charlie" , 95)
s2.welcome()
print(s2.getMark())

# static method can be called using class name or object name
s2.displaySchool()
Student.displaySchool()