# Signup (Account Creation)

## Tópicos Especiais em Computação II

## **Team**

- **Students**:
  - João de Oliveira Castro Neto
  - Daniel Magalhães Farias
  - Edilson Morais Brito
- **Professor**: Dr. Eyder Franco Sousa Rios
- **University**: Universidade Estadual do Piauí (UESPI)
- **Course**: Bachelor in Computer Science
- **Subject**: Tópicos Especiais em Computação II

---

## **Project Description**

This project implements a use case for a backend system for a ride-hailing application using **TypeScript**, following the principles of **Clean Code**, **Clean Architecture**, **SOLID**, and **Test-Driven Development (TDD)**.

### **Selected Use Case**

**Signup (Account Creation)**
The selected use case involves creating an account for passengers or drivers. The system ensures unique email addresses and allows the creation of accounts with details such as name, email, CPF, password, and car plate (for drivers).

---

## Diagram

![Example Image](diagram.jpg 'Diagram of the use case')

#### 1. Setup VSCode Extensions

```bash
code --install-extension dracula-theme.theme-dracula
code --install-extension oderwat.indent-rainbow
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension yzhang.markdown-all-in-one
code --install-extension natqe.reload
code --install-extension vscode-icons-team.vscode-icons
code --install-extension dbaeumer.vscode-eslint
```

#### 2. Initial Setup

**`package.json`**

```json
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "Node, Typescript, Jest, ESLint Template Project",
  "main": "src/main.js",
  "scripts": {
    "dev": "nodemon -r tsconfig-paths/register --exec ts-node ./src/main.ts --files",
    "start": "node ./build/src/index.js",
    "build": "tsc && tsc-alias",
    "lint": "eslint ./src/**/*.ts --fix",
    "format": "prettier --write ./**/*.{ts,json}"
  },
  "keywords": [],
  "author": "Eyder Rios",
  "license": "MIT",
  "resolutions": {
    "glob": "^9",
    "rimraf": "^4"
  },
  "dependencies": {
    "dotenv": "^16"
  },
  "devDependencies": {
    "@types/jest": "^29",
    "@types/node": "^22",
    "@typescript-eslint/eslint-plugin": "^8",
    "@typescript-eslint/parser": "^8",
    "eslint": "^9",
    "eslint-config-love": "^113",
    "eslint-config-prettier": "^9",
    "eslint-plugin-import": "^2",
    "eslint-plugin-jest": "^28",
    "eslint-plugin-markdown": "^5",
    "eslint-plugin-n": "^17",
    "eslint-plugin-prettier": "^5",
    "eslint-plugin-promise": "^7",
    "jest": "^29",
    "prettier": "^3",
    "ts-jest": "^29",
    "ts-node": "^10",
    "ts-node-dev": "^2",
    "tsconfig-paths": "^4",
    "typescript": "^5",
    "typescript-transform-paths": "^3"
  }
}
```

```bash
rm -rf node_modules yarn.lock
yarn cache clean
yarn install
```

**`.env`**

```bash
NODE_ENV=dev

DB_SCHEMA=mies
DB_NAME=mies
DB_USER=mies
DB_PASSWORD=mies
```

`env.d.ts`

```ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev' | 'test' | 'prod'

      API_KEY: string

      DB_SCHEMA: string
      DB_NAME: string
      DB_USER: string
      DB_PASSWORD: string
    }
  }
}

export {}
```

**`src/main.ts`**

```ts
import dotenv from 'dotenv'

const initApp = () => {
  dotenv.config()
}

const main = () => {
  initApp()
}
```

#### 3. Setup Typescript

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2023",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "resolveJsonModule": true,
    "baseUrl": ".",
    "outDir": "./build",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "types": ["node", "jest"],
    "plugins": [
      {
        "transform": "typescript-transform-paths"
      },
      {
        "transform": "typescript-transform-paths",
        "afterDeclarations": true
      }
    ],
    "paths": {
      "@/*": ["./src/*", "./test/*"]
    }
  },
  "include": ["./src/**/*.ts", "./test/**/*.ts", "env.d.ts"],
  "exclude": ["node_modules", "tsconfig.json"]
}
```

#### 4. Setup ESLint and Prettier

`eslint.config.js`

```js
module.exports = {
  root: true,
  env: {
    browser: false,
    es2023: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'markdown', 'import'],
  rules: {
    // ESLint Rules
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',

    // TypeScript Rules
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Prettier Rules
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 120,
        tabWidth: 2
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    }
  ],
  ignorePatterns: ['build', 'coverage', 'dist', 'node_modules']
}
```

#### 5. Setup Jest

`jest.config.js`

```js
import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '@/(.*)': ['<rootDir>/src/$1']
  }
}

export default config
```

## Running the tests

Execute all tests using Jest:

```
yarn test
```
