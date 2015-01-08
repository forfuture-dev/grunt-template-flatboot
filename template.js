/**
 * grunt-template-esta
 * https://github.com/forfuture-dev/grunt-template-esta
 *
 * Copyright (c) 2014 Forfuture LLC
 * Licensed under the MIT License
 */


exports.description = "Simple, minimal-configuration grunt template";
exports.after = "Install dependencies with `npm install`";

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt("name"),
    init.prompt("author_name"),
    init.prompt("author_email"),
    init.prompt("author_url"),
    init.prompt("repository"),
    init.prompt("licenses", "MIT")
  ], function(err, props) {
    var files = init.filesToCopy(props);
    props.dependencies = {
      "angular": "latest",
      "bootflat": "latest",
      "bootstrap": "latest",
      "flat-ui": "latest",
      "jquery": "latest"
    };
    props.devDependencies = {
      "express": "latest",
      "grunt": "latest",
      "grunt-contrib-clean": "latest",
      "grunt-contrib-coffee": "latest",
      "grunt-contrib-copy": "latest",
      "grunt-contrib-csslint": "latest",
      "grunt-contrib-cssmin": "latest",
      "grunt-contrib-imagemin": "latest",
      "grunt-contrib-jade": "latest",
      "grunt-contrib-jshint": "latest",
      "grunt-nodemon": "latest",
      "grunt-contrib-sass": "latest",
      "grunt-contrib-stylus": "latest",
      "grunt-contrib-uglify": "latest",
      "grunt-contrib-watch": "latest"
    };
    props.private = true;
    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props);
    init.writePackageJSON("package.json", props);
    done();
  });
};
