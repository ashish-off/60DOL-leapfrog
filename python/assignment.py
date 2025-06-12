# assignment 1:  create a file named assignment.txt and write

# with open("assignment.txt", "w") as f:
#   f.write("Hi everyone \n")
#   f.write("we are learning File I/O \n")
#   f.write("using Java \n")
#   f.write("i like programming in Java \n")
#   f.close()
  
# assignment 2: replace 'Java' with 'Python'

# with open("assignment.txt", "r+") as f :
#   data = f.read()
#   print(data)
#   newData = data.replace("Java", "Python")
#   print(newData)
#   f.seek(0) 
#   f.write(newData)
#   f.close()
  
# assignment 3 : search for the 'learning' word
def search_word(word):
  with open("assignment.txt", "r") as f:
    data = f.read()
    if data.find(word) != -1:
      print(f"The word '{word}' is present in the file.")
    else:
      print(f"The word '{word}' is not present in the file.")
    f.close()
    
# search_word("learning")
  
# assignment 4: count the number of lines in the file

def count_lines():
  with open("assignment.txt", "r") as f:
    lines = f.readlines()
    line_count = len(lines)
    print(f"The number of lines in the file is: {line_count}")
    f.close()
    
# count_lines()

# assignment 5: which line contains the word

def find_Line_word(word):
  data = True
  line_no = 1
  with open("assignment.txt", "r") as f:
    while data:
      data = f.readline()
      if word in data:
        print(f"The word '{word}' is present in line {line_no}.")
      line_no += 1
  f.close()


find_Line_word("Python")
