# tuples (immutable)
tup = (2,4,5,7,8,3,2,7) # (2,) for single element in tuple
print(tup[1])
print("slicing", tup[1:4])

# assignment: taker 3 movies from user and store in a list
movies = []
mov = input("Enter movie 1: ")
movies.append(mov)
movies.append(input("Enter movie 2: "))
movies.append(input("Enter movie 3: "))
print("movies: ", movies)

# assignment : check if a list contains a palindrome of elements
elem = [1,2,2,1]
# newElem = elem.copy()
newElem = elem[:]
newElem.reverse()
if elem == newElem : 
  print("list is palindrom")
else :
  print("list is not palindrom")
  
  # assignment : counte the number of A's in a tuple
grades = ('A', 'B', 'C', 'A', 'D', 'A', 'B')
count_A = grades.count('A')
print("total A's", count_A)

