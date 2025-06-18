# Given a number n find the prime factorization of the number.
# Note: Print the prime factors in non-decreasing order.

class Solution:    
  def printPrimeFactorization(self, n):
    # Your code here
    result = []
    #handleing only even prime 2
    while n%2 == 0:
      result.append(2)
      n= n//2
    # handeling remaining primes (odd)
    for i in range(3, int(n**0.5)+1, 2):
      while n % i == 0:
        result.append(i)
        n = n // i
          
    # remaining n is prime if n >2 ( it must be a prime number itself)
    if n > 2:
      result.append(n)  
        
    strResult = " ".join([str(x) for x in result])
    print(strResult)
      
s1 = Solution()
s1.printPrimeFactorization(200)