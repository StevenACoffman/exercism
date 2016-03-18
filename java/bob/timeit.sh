#!/bin/bash
#First create empty files for python and node to chew on
touch null.py
touch null.js
i=0
echo "Python start up time (*1000):"
time while [ $((i++)) -lt 1000 ] ; do python null.py ; done
i=0
echo "Node start up time (*1000):"
time while [ $((i++)) -lt 1000 ] ; do node null.js ; done
