# class method and static method
class Person:
    count = 0  # class variable
    name = "anonymous"

    def __init__(self, name):
        self.name = name
        Person.count += 1  # increment the class variable
        

    @classmethod
    def get_count(cls):
        return cls.count

    @staticmethod
    def is_adult(age):
        return age >= 18 
    
print(Person.count, Person.name)  # 0 amonymous

p1 = Person("Ashi")
print(p1.name, Person.count)
print(Person.count, Person.name)  # 1 anonymous 

p2 = Person("Bobby")
print(p2.name, Person.count)  
print(Person.count, Person.name) # 2 anonymous

# 'count' is a class variable, so it's shared and updated by all instances.
# 'name' is an instance variable (self.name), so each object has its own value.

# @property method 
print("Property method example : \n")

class Student : 
    def __init__(self , phy, chem, math):
        self.phy = phy
        self.chem = chem
        self.math = math
        # self.percentage = str((phy + chem + math) / 3) + "%"
        
    def calculate_percentage(self):
        return str((self.phy + self.chem + self.math) / 3) + "%"
    
    # better way to handle percentage using property decorator
    @property
    def percentage(self):
        return str((self.phy + self.chem + self.math) / 3) + "%"
        
s1 = Student(80, 90, 85)
# print(s1.percentage)  # 85.0%
print(s1.calculate_percentage())

s1.phy = 95  # changing physics marks
print(s1.percentage)  # 90.0% (percentage is updated automatically)
