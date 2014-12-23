/**
* Build script
*/


module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: {
        src: ["template.js", "root/Gruntfile.js"]
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-jshint");
  
  grunt.registerTask("default", ["jshint"]);
};