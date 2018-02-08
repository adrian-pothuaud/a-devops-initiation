#!/bin/sh

# remove existing test report files in public folder
rm -rf public/assets/*
rm -rf public/assets/
rm -rf public/*.html
rm -rf public/*.json

# mv new files
mv mochawesome-report/* public/

# remove mochawesome-reports folder
rm -rf mochawesome-report/*
rm -rf mochawesome-report