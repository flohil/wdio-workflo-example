# wdio-workflo-example
This repository provides code examples for the usage of wdio-workflo.

## Setup
Run ```npm install``` on the project directory.

## Executing Tests
You can either execute all testcases defined in this repository

```./node_modules/.bin/wdio-workflo```

or invoke only a single testcase

```./node_modules/.bin/wdio-workflo --testcases '["npmjs.search for the npm package wdio-workflo"]'```.

## Path aliases
This repository uses tsconfig's ```paths``` option to define path aliases:

- ```~``` refers to the project directory (```./```)
- ```?``` refers to the path ```./system_test/src/```

