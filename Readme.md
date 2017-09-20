# q-i: Node.js objects inspector with color highlighting

[![npm](https://img.shields.io/npm/v/q-i.svg)](https://www.npmjs.com/package/q-i)
[![Build Status](https://travis-ci.org/sapegin/q-i.svg)](https://travis-ci.org/sapegin/q-i)

Useful for debugging big objects, like webpack configuration.

![](https://d3vv6lp55qjaqc.cloudfront.net/items/0S1R2F1u1i1E2h2z0R41/q-i.png)

## Features

* Compact and readable output
* No unnecessary quotes
* Color highlighted
* Prints the whole object or only the part you need
* Collapses huge arrays and objects (more than 30 items by default)

## Installation

```bash
npm install q-i
```

## Usage

```js
const { print, stringify } = require('q-i');

const obj = { a: { x: 41, y: { z: 42 } } };

// Print whole object
print(obj);
console.log(stringify(obj));
/* =>
{
  a: {
    x: 41,
    y: {
      z: 42
    }
  }
}
*/

// Print part of an object
print(obj, 'a.y');
console.log(stringify(obj, 'a.y'));
/* =>
{
  z: 42
}
*/
```

## Options

```js
print(obj, { maxItems: Infinity })
print(obj, 'a.y', { maxItems: Infinity })
stringify(obj, { maxItems: Infinity })
stringify(obj, 'a.y', { maxItems: Infinity })
```

### `maxItems` (default: 30)

Collapse arrays with more than `maxItems` items and objects with more than `maxItems` keys.

## Change log

The change log can be found on the [Releases page](https://github.com/sapegin/q-i/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Artem Sapegin](http://sapegin.me) and [contributors](https://github.com/sapegin/q-i/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
