#!bin/bash

mkdir -p dist
cp README.md dist/README.md
cp package.json dist/package.json
cp index.d.ts dist/index.d.ts
cp -r src/styles dist/styles
cp -r src/styles dist
babel src/ --out-dir dist --ignore **/setupTests.js,**/test.js,**/*.test.js,**/*.stories.js,**/stories.js

pushd ./dist
yarn link
popd