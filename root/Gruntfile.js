module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: "/* <%= pkg.author.name %> <<%= pkg.author.email %>> (<%= pkg.author.url %>) */"
      },
      dynamic_mappings: {
        expand: true,
        cwd: "src/js",
        src: ["*.js"],
        dest: "dist/js",
        ext: ".min.js",
        extDot: "first"
      }
    },
    jshint: {
      files: ["Gruntfile.js", "dist/js/*.js"]
    },
    jade: {
      options: {
        data: function() {
          var optionsFile = (process.env.PROD) ? "prod.options.json"
            : "dev.options.json";
          return require("./" + optionsFile);
        }
      },
      dynamic_mappings: {
        expand: true,
        cwd: "src/jade",
        src: ["*.jade"],
        dest: "dist/",
        ext: ".html",
        extDot: "first"
      }
    },
    sass: {},
    watch: {
      scripts: {
        files: ["src/js/*.js"],
        tasks: ["uglify", "jshint"],
        options: {
          spawn: false,
          livereload: true  
        }
      },
      jade: {
        files: ["src/jade/*.jade"],
        tasks: ["jade"],
        options: {spawn: false}
      }
    },
    clean: {
      dist: {
        src: ["dist"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass", "uglify", "jshint", "jade"]);
};
