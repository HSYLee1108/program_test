import requests
name = input("filename")+".txt"
url=input("url=")
response = requests.get(url)
with open(name,"w", encoding="utf-8") as f:
    f.write(response.text)   
print("txt download finished")