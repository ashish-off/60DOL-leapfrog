# file types : text and binary
f = open("demo.txt", "r") # "rb" for binary read

# data = f.read()
# data = f.read(10) # read first 10 characters

# data = f.readlines()  # read all lines into a list
line1 = f.readline()  # read one line at a time(first)
line2 = f.readline()  # read one line at a time (second)
# print(data)
print(line1)
print(line2)

# print(type(data))  string
f.close()

