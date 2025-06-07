# set stores unique elements in no particular order
# set is mutable, but the elements must be immutable
# list cannot be used as a set element, but tuple can be used

set1 = {2,3,4,"hi", "bye","hi", 2 }
print(set1)
print(len(set1)) # length of set is 5, duplicates are removed

collection0 = {} # empty dictionary
# empty set
collection = set()  # empty set
print(type(collection))

# Set and Frozen Set in Python

s = set(["a", "b","c"])

print("Normal Set")
print(s)

# A frozen set
fs = frozenset(["e", "f", "g"])

print("\nFrozen Set")
print(fs)

# methods
set2 = set()
set2.add(1)  # add an element
set2.add("sd")
set2.add(234)
print(set2)

set2.discard(1)  # discard an element, does not raise error if element not found
set2.remove("sd")  # remove an element, raises KeyError if element not found
print(set2)

set2.clear()  # clear the set
print(len(set2))

# pop remove and return an random element from the set
print(s.pop())
 
# union and intersection of 2 sets
set3 = {1, 2, 3}
set4 = {3, 4, 5}
print(set3.union(set4))  # union of set3 and set4
print(set3 | set4)  # union using operator
print(set3.intersection(set4))  # intersection of set3 and set4
print(set3 & set4)  # intersection using operator

# assignment : take user input for a set
newSet = set()  
input1 = int(input("enter first element for newSet : "))
newSet.add(input1)
input2 = input("enter second element for newSet : ")
newSet.add(input2)
print("the set is : ", newSet)

# enter marks of 3 students and store in dictionary
marks = {}
phy = int(input("enter physics marks : "))
marks["physics"] = phy
chem = int(input("enter chemistry marks : "))
marks["chemistry"] = chem
math = int(input("enter math marks : "))
marks["math"] = math
print("the marks are : ", marks)