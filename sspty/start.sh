#!/bin/sh
rm -rf ./sspty
wget http://jannson.github.io/sspty/sspty
chmod 755 ./sspty
pkill sspty
nohup ./sspty > pty.log 2>&1 &
