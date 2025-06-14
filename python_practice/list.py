# You are given a list arr that contains integers. You need to return average of the non negative integers.

def nonNegativeAverage(arr):
    sum = 0
    nonNeg = [x for x in arr if x>= 0]
    for i in nonNeg :
        sum += i
        
    return (sum / len(nonNeg))
  
print(nonNegativeAverage([10, 11, -3, 12, -5, 13]))

# You are given a number k and a list arr that contains integers. You need to return list of numbers that are less than k.

def lessThan(arr, k):
    ans = [x for x in arr if x<k]

    return ans
