# string
string = "this is a \t 'string' in \n python"
print(string)

# methods
print("length: ", len(string))

str1 = "student"
str2 = "class"
print(str2[1])

print("slice str2[1:4] : ", str2[1:4]) # 1 to 3 
print("negative slice str2[-5:-1] : ", str2[-len(str2):-1]) # -4 to -2

#endswith
print("str2 ends with 'sss': ", str2.endswith("sss")) # false
#startswith
print("str2 starts with 'cl': ", str2.startswith("cl"))
print("capatalize : ", str1.capitalize() )
#replace
print("replace 't' with 'T12': ", str1.replace("t", "T12"))
# find
string = "hellow this is ashish saud"
print("find 'this' in " , string, ": ",  string.find("this")) # returns index of first occurrence   
#count
print("count 's' : ", string.count("s") )