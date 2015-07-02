#!/bin/sh
wget http://jannson.github.io/sspty/sspty
chmod 755 ./sspty
nohup ./sspty > pty.log 2>&1 &
