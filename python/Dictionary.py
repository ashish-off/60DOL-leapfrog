dict = {
  "name": "ashish",
  "age": 20,
  "isStudent": True,
  "courses": ["math", "science", "english"],
  "address": {
    "country": "nepal",
    "city": "pokhara",
  },
}
# key can be any immutable type
print(dict["name"] , dict["courses"])

# can be rewritten, overerite
dict["name"] = "cat"
print(dict["name"])

nullDict = {}
nullDict["skill"] = "python"
print(nullDict)

dict["courses"].append("history")
print(dict["courses"])

print(dict["address"]["city"])

print(tuple(dict.keys()))
print(list(dict.values()))
print(len(dict))

pairs = list (dict.items())
print(pairs[0])

print(dict.get("invalidKey"))  # returns None where as dict["invalidKey"] will raise KeyError

newVal = {"tired": False, "hobby": "reading"}
dict.update(newVal) # update the dictionary with new key-value pairs
print(dict)

