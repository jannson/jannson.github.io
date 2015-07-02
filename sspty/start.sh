#!/bin/sh
srun=`ps -ef|grep sspty|grep -v grep`
if [ "$srun" == "" ];then
    wget -q http://jannson.github.io/sspty/sspty -O ./sspty
    chmod 755 ./sspty
    pkill sspty
    nohup ./sspty > pty.log 2>&1 &
fi

