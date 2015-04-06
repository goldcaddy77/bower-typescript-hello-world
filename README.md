# Bower TypeScript Hello World

Scaffolding for Bower modules using TypeScript and Gulp.  This project contains:

* Standard directory structure for building JS modules
* TypeScript support using `gulp-typescript` module
* Watchers to recompile your files on save
* A gulp task to automatically increment your patch release version


## Installation

Install global npm dependencies:

        npm install -g gulp bower

Install node packages:

        npm install

Install Bower packages:

        bower install

## Running tests

To run the test suite:

        ./node_modules/karma/bin/karma start

## Bumping Your Bower Version

Tell gulp to bump the version number and create a new git tag for the version:
  
     gulp bump

Then push it up to Git:

     git push origin master --tags
