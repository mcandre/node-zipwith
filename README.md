# zipwith - A Node.js port of Haskell's zipWith function

# EXAMPLE

    $ npm test

    > zipwith@0.0.2 test /Users/andrew/Desktop/src/node-zipwith
    > node example.js

    [ 4, 4, 4 ]
    [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]

# HOMEPAGE

https://github.com/mcandre/node-zipwith

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.10+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)

# TESTING

Ensure the example script works as expected:

    $ bundle
    $ cucumber
    Feature: Run example tests

      Scenario: Running example tests            # features/run_example_tests.feature:3
        Given the program has finished           # features/step_definitions/steps.rb:1
        Then the output is correct for each test # features/step_definitions/steps.rb:5

    1 scenario (1 passed)
    2 steps (2 passed)
    0m0.066s

Guard can automatically run testing when the code changes:

    $ bundle
    $ guard -G Guardfile-cucumber
    ...

# INSTALL

    $ npm install zipwith

# LINT

Keep the code tidy:

    $ npm run-script lint

Guard can automatically lint when the code changes:

    $ bundle
    $ guard -G Guardfile-lint
    ...
