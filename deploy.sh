#!/bin/bash

# export .evn file variable. Ref: https://unix.stackexchange.com/questions/79064/how-to-export-variables-from-a-file
source .env
export $(cut -d= -f1 .env)

# If have error, then print.
set -e

# projects folder migrate
cp -r ./projects ./docs/.vuepress/dist

# deploy
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:${GITHUB_USERNAME}/${GITHUB_USERNAME}.github.io.git master
cd -