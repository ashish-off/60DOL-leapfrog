# ploymorphism : 

class Complex : 
  def __init__ (self, real, imag):
    self.real = real
    self.imag = imag
    
  def show(self):
    return f"{self.real} + {self.imag}i"
  
  # def add (self, num) :
  #   real = self.real + num.real
  #   imag = self.imag + num.imag
  #   return Complex(real, imag)

  def __add__ (self, num) :
    real = self.real + num.real
    imag = self.imag + num.imag
    return Complex(real, imag)
  
  def __sub__ (self, num) :
    real = self.real - num.real
    imag = self.imag - num.imag
    return Complex(real, imag)
  
  
n1 = Complex(2, 3)
n2 = Complex(4, 5)
# n3 = n1.add(n2)
n3 = n1 + n2  # using the __add__ method
print(n3.show())
n4 = n1 - n2
print(n4.show())  