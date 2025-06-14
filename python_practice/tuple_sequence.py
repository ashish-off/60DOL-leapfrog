#You are given a tuple numbers that contains a A.P sequence integer. You need to calculate the next three sequences of numbers and return the whole sequence in a tuple.

def sequence(tup):
    diff = tup[1] - tup[0]
    for x in range(3): 
        tup += (tup[len(tup) - 1] + diff ,)
    return tup
  
sequence_tuple = (2, 4, 6, 8, 10)
# print(sequence(sequence_tuple))  

# You are given a tuple numbers that contains integers. You need to return a tuple containing doubles of given numbers.

def doubleTup(numbers):
    result = ()
    for x in numbers :
        result += (x*2 ,)
    return result
  
print(doubleTup((1, 2, 3, 4, 5)))