# zipwith - A Node.js port of Haskell's zipWith function

# INSTALL

    $ npm install zipwith

# EXAMPLE

    $ npm test

    > zipwith@0.0.2 test /Users/andrew/Desktop/src/node-zipwith
    > mocha


      ․․․

      3 passing (5ms)

# HOMEPAGE

https://github.com/mcandre/node-zipwith

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.10+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Lint

Keep the code tidy:

    $ npm run-script lint

## Spell Check

    $ aspelllint
    ...

## Local CI

Guard can automatically lint when the code changes:

    $ bundle
    $ guard -G Guardfile-lint
    ...

## Git Hooks

See `hooks/`.
