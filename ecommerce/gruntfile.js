module.exports=function(grunt){
    grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
        concurrent:{
            target:['serve','watch']
        },
        parallel: {
    assets: {
      options: {
        grunt: true
      },
      tasks: ['serve','watch']
    }
  },
         watch: {
              html: {
                files: '*.html',               
            options: {
                livereload: true,
                }
         },
  scripts: {
    files: ['**/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
},
    serve: {
        options: {
            port: 9000,
        }
    }
    });
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['serve','watch']);
}