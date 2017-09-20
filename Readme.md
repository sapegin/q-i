# q-i: Node.js objects inspector with color highlighting

Useful for debugging big objects, like webpack configuration.

![](https://d3vv6lp55qjaqc.cloudfront.net/items/0S1R2F1u1i1E2h2z0R41/q-i.png)

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
