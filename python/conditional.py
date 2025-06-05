#if elif else
age = 29

if (age >18) :
  print("can vote & drink")
elif (age >= 18 and age < 21) :
  print("can vote but not drink")
else :
  print("cannot vote or drink")
  
# nested if
if (age > 18) :
  if (age > 60) :
    print("cannot drive")
  else :
    print("can drive")
else :
  print("cannot vote or drink")
  
# assignment : input number and check if it is even or odd
num = int(input("Enter a number: "))
if (num % 2 == 0) :
  print(num, "is even")
else :
  print(num, "is odd")
  
  # assignment : largest of 3 numbers
num1 =int(input("Enter num1: "))
num2 =int(input("Enter num2: "))
num3 =int(input("Enter num3: "))

if (num1 > num2 and num1 > num3) :
  print(num1, "is largest")
elif (num2 > num1 and num2 > num3) :
  print(num2, "is largest")
else : 
  print(num3, "is largest")