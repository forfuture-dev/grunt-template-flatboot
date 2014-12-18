module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      dist: {
        src: ["dist"]
      }
    },
    cleanRaw: {
      dist: {
        src: ["!dist/js/*.min.js", "!dist/css/*.min.css"]
      }
    },
    coffee: {
      dynamic_mappings: {
        expand: true,
        cwd: "src/coffee",
        src: ["*.coffee"],
        dest: "dist/js",
        ext: ".js",
        extDot: "first"
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ["src/html"], dest: "dist/", filter: "isFile"},
          {expand: true, src: ["src/css"], dest: "dist/css", filter: "isFile"},
          {expand: true, src: ["src/js"], dest: "dist/js", filter: "isFile"},
          {expand: true, src: ["src/assets/**"], dest: "dist/assets"}
        ]
      }
    },
    css: {
      main: {
        options: {
          banner: "/* <%= pkg.author.name %> <<%= pkg.author.email %>> (<%= pkg.author.url %>) */"
        },
        dynamic_mappings: {
          expand: true,
          cwd: "dist/css",
          src: ["*.css"],
          dest: "dist/css",
          ext: ".min.css",
          extDot: "first"
        }
      }
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
    jshint: {
      files: ["Gruntfile.js", "dist/js/*.js"]
    },
    nodemon: {
      server: {
        script: "server.js",
        options: {
          cwd: "dist/",
          env: {
            NODE_JS_PORT: "9911"
          }
        }
      }
    },
    sass: {
      dynamic_mappings: {
        expand: true,
        cwd: "src/sass",
        src: ["*.sass", "*.scss"],
        dest: "dist/css",
        ext: ".css",
        extDot: "first"
      }
    },
    stylus: {
        dynamic_mappings: {
        expand: true,
        cwd: "src/stylus",
        src: ["*.styl"],
        dest: "dist/css",
        ext: ".css",
        extDot: "first"
      }
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: "/* <%= pkg.author.name %> <<%= pkg.author.email %>> (<%= pkg.author.url %>) */"
      },
      dynamic_mappings: {
        expand: true,
        cwd: "dist/js",
        src: ["*.js"],
        dest: "dist/js",
        ext: ".min.js",
        extDot: "first"
      }
    },
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
      },
      sass: {
        files: ["src/sass/*.sass"],
        tasks: ["sass"],
        options: {spawn: false}
      },
      stylus: {
        files: ["src/stylus/*.styl"],
        tasks: ["stylus"],
        options: {spawn: false}
      },
      css: {
        files: ["src/css/*.css"],
        tasks: ["copy"],
        options: {spawn: false}
      },
      js: {
        files: ["src/js/*.js"],
        tasks: ["copy"],
        options: {spawn: false}
      },
      coffee: {
        files: ["src/coffee/*.coffee"],
        tasks: ["coffee"],
        options: {spawn: false}
      }
      html: {
        files: ["src/html/*.html"],
        tasks: ["copy"],
        options: {spawn: false}
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["html", "jade", "css", "sass", "stylus", "js",
    "coffee", "jshint"]);
  grunt.registerTask("dist", ["default", "cssmin", "uglify", "cleanRaw"]);
};
