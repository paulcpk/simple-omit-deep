# simple-omit-deep
JS Utility script for deeply omitting object properties, inspired by lodash omit.

## Installation

```
npm install simple-omit-deep --save-dev
```

## Usage

```
import { omitDeep } from 'simple-omit-deep';

const fooBar = {
  foo: 9000,
  bar: 'Hello World!',
  baz: {
    bar: 'Catch me if you can!',
    foo: 12000
  }
};

const cleanFooBar = omitDeep(fooBar, 'bar');

console.log(cleanFooBar);

/* logs:
{
  foo: 9000,
  baz: {
    foo: 12000
  }
}
*/