# f = open("demo.txt", "w")
# f = open("demo.txt", "r+") # 'r+' mode allows reading and writing
# f = open("demo.txt", "a") # 'a' mode allows appending to the file
f = open("demo.txt", "w+") # 'w+' mode allows reading and writing, truncating the file to zero length

f.write("hii my name is ashish.\n")
f.write("I am learning file handeling\n")
f.seek(0)  # Move the cursor to the beginning of the file to read what was written
data = f.read()
print(data)
f.close()

