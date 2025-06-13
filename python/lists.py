marks = [23.34, 34.5, 45.4, 45.56, 56.5]
print(marks)
print(len(marks))
print(marks[2])
print(type(marks))

# mutablity
marks[2] = 0.00
print(marks)

#methods
print("slicing marks[1:4] : ", marks[1:4])
print("slicing marks[-3:-1] : ", marks[-3:-1])

# append 
marks.append(100.0)
print(marks)

print("ascending sorting : ", marks.sort()) # none
marks.sort()
print("ascending sorting : ", marks) 

marks.sort(reverse= True)
print("descending sorting : ", marks)

list = ["apple", "mango", "banana", "orange"]
list.sort()
print("sorted list : ", list)
list.reverse()
print("reversed list : ", list)

#insert
list.insert(3, "kiwi")
print("inserted list : ", list)

#remove and pop
list.remove("kiwi") # removes first occurrence
print("after removing kiwi : ", list)
marks.pop(2)
print("after popping index 2 : ", marks)

l1 = [x for x in range(11) if x%2 == 0] 
print(l1)
l2 = [x for x in range(11) if x%2 != 0]
print(l2)