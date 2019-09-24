#!/bin/bash

cd ./tests
for f in *.py; do python "$f"; done