module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        requirejs:{
            compile:{
                options:{
                    baseUrl:'.',
                    mainConfigFile:"js/app.js",
                    name: "js/app",
                    out:"optimized.js",
                    optimize:"none"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};