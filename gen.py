import markdown2
import os, sys, codecs

index_file = 'index.html'
output = ''
index_str = ''
find_str = '<div class="main-body">'

with codecs.open('index.txt', 'r', 'utf-8') as file:
    output = markdown2.markdown(file.read())

with codecs.open('index.in', 'r', 'utf-8') as file:
    index_str = file.read()

with codecs.open(index_file, 'w', 'utf-8') as file:
    i = index_str.find(find_str)
    out_str = index_str[0:i+len(find_str)+1]+output+index_str[i+len(find_str)+1:]
    file.write(out_str)


