#coding=utf-8 
import os
filedir = "/storage/sdcard0/AppProjects/LWYSTookit/src/main/"
filenames=os.listdir(filedir)
f=open('/storage/sdcard0/AppProjects/LWYSTookit/build/final.js','w')
    
for line in open(filedir+"main.js"):
    f.writelines(line)

for line in open(filedir+"base1.js"):
    f.writelines(line)

f.close()

print("OK")
