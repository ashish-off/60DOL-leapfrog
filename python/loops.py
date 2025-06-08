# while loop
# i = 0
# while i < 5:
#     print(i)
#     i += 1  
    
# while loop with condition for even numbers
# j = 0
# while j < 10:
#   if j % 2 == 0:
#     print(j)
#   j += 1
    
#continue 
# k = 0
# while k < 5:
#     if k == 2:
#         k += 1
#         continue  # skip the rest of the loop when i is 2
#     print(k)
#     k += 1

# else in while loop
a =0
while a < 5:
    print(a)
    a += 1  
else:
    print("Loop finished successfully") # excute when loop condition is false
    
# for loop
print("For loop example:")
list = [1, 2, 3, 4, 5]
for i in list:
    print(i)
    
set = {"apple", "banana", "cherry"}
for i in set:
    print(i)
    
dict = {"name": "Alice", "age": 30, "city": "New York"}
for key, value in dict.items() :
    print(key , ":", value)
    
# for loop with range
for i in range(5):
    print(i) # 0 to 4

print(range(5)) # range(0,5)

# for loop with range and step
for i in range(0, 10, 2): # start, stop, step
    print(i) 

# for loop with else
for i in range(10, 20, 3):
    print(i)    
else:
    print("Loop finished successfully")
    
# for loop with break
for i in range(5):
    if i == 3:
        break  # exit the loop when i is 3
    print(i)
