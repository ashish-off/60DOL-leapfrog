# single inheritance  

class Vehicle : 
  def __init__(self, type):
    self.type = type
    
  @staticmethod
  def start():
    print("vehicle started")
    
  @staticmethod
  def stop():
    print("vehicle stopped")
    
class Car (Vehicle) :
  def __init__(self, type, brand) :
    super().__init__(type)
    self.brand = brand
    
  def autopilot(self, auto = False):
    super().start()
    if auto:
      print("autopilot engaged")
    else:
      print("autopilot not engaged")
    
# t1 = Car("ev", "tesla")
# # t1.start()
# t1.autopilot()
# print(t1.type, t1.brand)
    
# multi level inheritance

class carColor (Car) :
  def __init__(self, type, brand, color) :
    super().__init__(type, brand)
    self.color = color
    
  def display(self):
    print(f"Car Type: {self.type}, Brand: {self.brand}, Color: {self.color}")
    
c1 = carColor("ev", "tesla", "red")
c1.autopilot(True)
c1.display()

