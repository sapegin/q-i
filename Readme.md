# q-i: quickly inspect Node.js objects

Useful for debugging big objects, like webpack configuration.

## Installation

```bash
npm install q-i
```

## Usage

```js
const { print, stringify } = require('q-i');

print({ a: 42 });
console.log(stringify({ a: 42 }));
```

## Change log

The change log can be found on the [Releases page](https://github.com/sapegin/q-i/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Artem Sapegin](http://sapegin.me) and [contributors](https://github.com/sapegin/q-i/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
