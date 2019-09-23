#!/usr/bin/env sh

set -e

# another folder migrate
cp -r ./another ./docs/.vuepress/dist

# deploy
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:superj80820/superj80820.github.io.git master

cd -