# zipwith - A Node.js port of Haskell's zipWith function

# EXAMPLE

```
$ node
> var zipwith = require("zipwith");
> zipwith.zipwith(function (a, b) { return a + b; }, [1, 2, 3], [4, 5, 6]);
[ 5, 7, 9 ]
> zipwith.zipwith(function (a, b) { return a * b; }, [1, 2, 3], [4, 5, 6]);
[ 4, 10, 18 ]
```

# HOMEPAGE

https://github.com/mcandre/node-zipwith

# NPM

https://www.npmjs.com/package/zipwith

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 6.9.1+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2.3+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)
* [editorconfig-cli](https://github.com/amyboyd/editorconfig-cli) (e.g. `go get github.com/amyboyd/editorconfig-cli`)
* [flcl](https://github.com/mcandre/flcl) (e.g. `go get github.com/mcandre/flcl/...`)

# DEVELOPMENT

## Lint

Keep the code tidy:

```
$ grunt lint
```

## Spell Check

```
$ grunt aspelllint
...
```

## Local CI

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile-lint
...
```
