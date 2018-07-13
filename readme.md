# async-mkdirp

[![NPM][npm]][npm-url]
[![npm bundle size (minified + gzip)][minzip]][minzip-url]

Recursively create directories, like `mkdir -p`, and return a promise.

# Install

```
npm install -S async-mkdirp
```

## Usage

Normal:

```js
const mkdirp = require('async-mkdirp');

(async () => {
  await mkdirp('/tmp/foo/bar/baz');
  // Code here runs after all directories have been created
})();
```

Make multiple paths in parallel:

```js
const mkdirp = require('async-mkdirp');

const createDirs = async () => {
  await Promise.all([
    mkdirp('/tmp/foo/bar/baz'),
    mkdirp('./my/cool/folder'),
  ]);
  // Code here runs after all directories have been created
}

createDirs();
```

# API

## mkdir(path[, mode])

- `path` `<String>` | `<Buffer>`
- `mode` `<Integer>`

Asynchronous `mkdir -p`. `mode` defaults to `0o777`.

# About

This project is inspired by [`substack/mkdirp`](https://github.com/substack/node-mkdirp). It has been rewritten to take advantage of `async` functions, and does not include a synchronous method or cli.

# Similar projects

- [node-mkdirp](https://github.com/substack/node-mkdirp) - callback style mkdirp, with cli
- [mkdirp-promise](https://github.com/ahmadnassri/mkdirp-promise) - node-mkdirp wrapped in a promise
- [mkdirp-then](https://github.com/fs-utils/mkdirp-then) - node-mkdirp wrapped in a promise, and any-promise for promise implementation

# License

MIT

[npm]: https://img.shields.io/npm/v/async-mkdirp.svg
[npm-url]: https://npmjs.com/package/async-mkdirp

[minzip]: https://img.shields.io/bundlephobia/minzip/async-mkdirp.svg
[minzip-url]: https://bundlephobia.com/result?p=async-mkdirp
