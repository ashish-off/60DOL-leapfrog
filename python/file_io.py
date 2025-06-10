with open("demo.txt", "a+") as f: 
  f.write("im ashish\n")
  f.write("im appending this text\n")
  f.seek(0)
  print(f.read())
  f.close()
