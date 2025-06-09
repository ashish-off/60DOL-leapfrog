# file types : text and binary
f = open("demo.txt", "r") 
data = f.read()
print(data)
# print(type(data))  string
f.close()