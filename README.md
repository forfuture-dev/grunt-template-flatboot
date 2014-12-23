
# grunt-template-esta

> For your **Grunt** workflow

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](https://travis-ci.org/forfuture-dev/node-sequential-ids.svg?branch=master)](https://travis-ci.org/forfuture-dev/node-sequential-ids)

Time is **$** and we do NOT throw it away... getting started with a new
website project.

With [grunt-init][grunt-init], initialize a static website project
utilizing:

  * Languages:
    * [Coffeescript][coffee]
    * [HTML][html]
    * [Jade][jade]
    * [Javascript][javascript]
    * [Sass][sass]
    * [Stylus][stylus]

  * Resources:
    * [Angular][angular]
    * [Bootstrap][bootstrap]
    * [flatUI][flatUI]
    * [bootflat][bootflat]
    * [jQuery][jQuery]


## installation

We use __make__:

```bash
$ git clone https://github.com/forfuture-dev/grunt-template-esta.git
$ cd grunt-template-esta && make
$ cd .. && rm -r grunt-template-esta
```

## usage

To generate a new project, simply: `grunt-init esta`

You then install grunt dependencies:

```bash
$ npm install
```

The `Gruntfile.js` created follows a convention rather than require much
configuration. Read more about this [convention][convention]...

You may now, continually run tasks with `grunt`


## production

So you are ready for production?!

```bash
$ grunt dist
```

This will create a _dist_ directory, with all the files necessary
to upload your optimized static files to a server.


## contribution

Source code may be found on [github][repo]


## license

The MIT License (MIT)

Copyright (c) 2014 Forfuture LLC <we@forfuture.co.ke>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to
whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[convention]:https://github.com/forfuture-dev/grunt-template-esta/wiki/Convention
[repo]:https://github.com/forfuture-dev/grunt-template-esta

[angular]:https://angularjs.org
[bootflat]:http://bootflat.github.io
[bootstrap]:https://getbootstrap.com
[coffee]:http://coffeescript.org
[flatUI]:http://designmodo.com/flat-free
[grunt-init]:https://gruntjs.com
[html]:http://en.wikipedia.org/wiki/HTML
[jade]:https://jade-lang.com
[javascript]:https://developer.mozilla.org/en/docs/Web/JavaScript
[jQuery]:http://code.jquery.com
[onpm]:https://github.com/forfuture-dev/onpm
[npm]:https://npmjs.org
[sass]:https://sass-lang.com
[stylus]:http://learnboost.github.io/stylus
