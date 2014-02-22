import markdown2
import os, sys, codecs

output = ''
with codecs.open('index.txt', 'r', 'utf-8') as file:
    output = markdown2.markdown(file.read())
with codecs.open('index.o', 'w', 'utf-8') as file:
    file.write(output)


