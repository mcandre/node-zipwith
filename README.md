# zipwith - A Node.js port of Haskell's zipWith function

# EXAMPLE

```
$ grunt
Running "exec:test" (exec) task

> zipwith@0.0.2 test /home/apenneb/Desktop/src/node-zipwith
> mocha


  ․․․

  3 passing (6ms)


Done, without errors.
```

# HOMEPAGE

https://github.com/mcandre/node-zipwith

# NPM

https://www.npmjs.com/package/zipwith

# INSTALL

```
$ npm install zipwith
```

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

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

## Git Hooks

See `hooks/`.
