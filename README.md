# num.js

<a href="https://www.npmjs.com/package/num.js"><img src="https://img.shields.io/npm/v/num.js" /></a>

> library to provide a wrapper for JavaScript's Number primitive

**num.js** is a simple wrapper for Number objects in JavaScript:

```js
new Num(20)
// Num { value: 20 }
```

it's small and fast, with methods taken from [big.js](https://mikemcl.github.io/big.js/).

a Num instance is immmutable in the sense that it is not changed by its methods:

```js
x = new Num(20)
x.minus(5)       // Num { value: 15 }
x                // Num { value: 20 }
```

## install
```
$ npm install num.js
```

## API

### new Num (value)
construct a new Num instance.

#### value
type: `Num|number|string`

### available methods
all [big.js](https://mikemcl.github.io/big.js/) methods are available **except** for the following:
- `prec`
- `toJSON`
- `toNumber`

num.js method signatures are nearly identical to those of big.js, with Num instances, numbers, and strings accepted as parameters.

## license
MIT
