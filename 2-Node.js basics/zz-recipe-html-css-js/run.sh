#!/bin/sh

PORT=8000

if [ ! -z $1 ]
then
  PORT=$1
fi

python -m SimpleHTTPServer $PORT

