---
title: 'Basics of Jest'
excerpt: 'In this article, we will cover the very basics of the Jest testing framework. We will start by learning how to
install Jest and how to use it to test our project. Then we will discuss the different methods we can use to test such
as mocking, stubbing and spying. Lastly, we will summarize what we have learnt and how we can start using TDD (Test
Driven Development) within our projects.'
date: '2022-07-31T12:00:00.000Z'
status: 'RELEASED'
---

## 1. Overview

Jest, is a batteries included testing framework

---

## 2. Set up Jest

We can install jest using npm:

```bash
npm install --save-dev jest
```

We save jest as a dev dependency since it will test our code and will not be used in production.

---

## 3. Creating a Simple Test

### 3.1. Create a function

Firstly, we will need something to test. For this, we will create a new file called `add.js` and add the following code:

```js
// add.js
export default function add(a, b) {
  return a + b
}
```

this code exports a default function of `add`, which combines two values and returns the result.

### 3.2. Create a test

We can now create a test file called `add.test.js` and add the following code:

```js
// add.test.js
import add from './add.js'

it('adds 1 + 2 to equal 3', () => expect(add(1, 2)).toBe(3))
```

### 3.3. Running the test

We can now run all tests using the following command:

```bash {2}
# 👇 need this flag to run tests with ES6 syntax
$ NODE_OPTIONS=--experimental-vm-modules npx jest
# 👇 output
(node:15429) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  ./add.test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.248 s
Ran all test suites.
```

or we can just run the test file directly:

```bash {2}
# passing in the file name as a parameter to jest    👇
$ NODE_OPTIONS=--experimental-vm-modules npx jest add.test.js
# 👇 output
(node:15989) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  ./add.test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.225 s, estimated 1 s
Ran all test suites matching /add.test.js/i.
```
