def isPalindrome(s):
    l = 0
    r = len(s) - 1
    while l<r :
        if s[l].lower() != s[r].lower() :
            break
        l += 1
        r -= 1
    else : 
        return True
    return False

print(isPalindrome("tenEt"))