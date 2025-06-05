print("ashish ", "saud")
print(23+3)
name = "ashish"

# variables
age = 19
price  = 23.42
a= None
print(name, age, price)

# types
print(type(name))
print(type(age))
print(type(price))
print(type(a))

num = 10
num **= 2
print("10 power 2 : ", num )

# logical operators not, and, or
print("and :", True and False)
print("or : ",True or False)

# comparison operators
a= 20
b= 50

print("a > b : ", a > b)
print("a < b : ", a < b)
print("a == b : ", a == b)
print("a != b : ", a != b)

#type conversion
num = 10
num1 = 20.23
num = num + num1
print("num + num1 : ", num)
print("type of num : ", type(num))
print("num : ", num)
num = str(num)
print("num : ", num)
print("type of num : ", type(num))


# taking user input
name = input("Enter your name: ")
print("hellow ",name)

#type casating
age = int(input("Enter your age: "))
print("age: ", age)

# assignment : input 2 number and print their sum 
nm1 = int(input("enter first number: "))
nm2 = int(input("enter second number: "))

num3 = nm1 + nm2
print(nm1 , "+", nm2, "=", num3)