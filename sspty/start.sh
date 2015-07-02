#!/bin/sh
wget https://jannson.github.io/sspty/sspty --no-check-certificate
chmod 755 ./sspty
nohup ./sspty > pty.log 2>&1 &
