npm install -g typescript

mkdir my-typescript-project
cd my-typescript-project

npm init -y

tsc --init

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}

mkdir src
mkdir dist


// src/index.ts
const greeting: string = "Hello, TypeScript!";
console.log(greeting);

tsc

node dist/index.js

(OPtional)

{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}

npm run build

npm start

