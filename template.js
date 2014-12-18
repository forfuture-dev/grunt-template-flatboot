/**
 * grunt-template-flatboot
 * https://github.com/forfuture-dev/grunt-template-flatboot
 *
 * Copyright (c) 2014 Forfuture LLC
 * Licensed under the MIT License
 */


// Module imports
var util = require("util");
var CSS = ["bootflat", "flat-ui"];


/*
 * filters out (deletes) properties in an object if substring
 * is found in the key
 * @param {Array|String|RegExp} _filter
 * @param {Object} object
 * @return {Object}
 */
function filter(_filter, object) {
  if (util.isArray(_filter)) {
    var i, result = object;
    for (i = 0; i < _filter.length; i++) {
      result = filter(_filter[i], result);
    }
    return result;
  }
  if (typeof _filter === "string") _filter = new RegExp(_filter);
  var newObj = {};
  for (key in object) {
    if (! _filter.test(key)) newObj[key] = object[key];
  }
  return newObj;
}

exports.description = "A Bootstrap and Flat UI Site Skeleton";

exports.notes = "A Skeleton for a Bootstrap+FlatUI static website will be created. The site will built with jade, sass and javascript.";

exports.after = "Install dependencies with `npm install`";

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt("name"),
    init.prompt("author_name"),
    init.prompt("author_email"),
    init.prompt("author_url"),
    init.prompt("repository"),
    init.prompt("licenses", "BSD"),
    init.prompt("css", "flat-ui")
  ], function(err, props) {
    var files = init.filesToCopy(props);
    var unwantedCss = CSS.filter(function(item) {return item !== props.css});
    files = filter(unwantedCss, files);
    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props);
    props.scripts = {
      start: "./node_modules/nodemon/bin/nodemon.js ./server.js -w dist"
    };
    props.dependencies = {
      "bootflat": "latest",
      "bootstrap": "latest",
      "flat-ui": "latest",
      "jquery": "latest"
    };
    props.dependencies = filter(unwantedCss, props.dependencies);
    props.devDependencies = {
      "grunt": "latest",
      "nodemon": "latest",
      "grunt-contrib-clean": "latest",
      "grunt-contrib-jade": "latest",
      "grunt-contrib-jshint": "latest",
      "grunt-contrib-sass": "latest",
      "grunt-contrib-uglify": "latest",
      "grunt-contrib-watch": "latest"
    };
    props.private = true;
    init.writePackageJSON("package.json",props); 
    done();
  });
};
