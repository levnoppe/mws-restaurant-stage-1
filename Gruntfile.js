/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: 300,  
            quality: 40
            
          },{
            name: 'medium',
            width: 450,
            quality: 40
            
          },{
            name: "large",
            width: 600,
            // separator: "-",
             //suffix: "_x2",
            quality: 40
            /*
            Change these:
            
            width: ,
            suffix: ,
            quality:
            */
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    },

    // /* Clear out the images directory if it exists */
    // clean: {
    //   dev: {
    //     src: ['img'],
    //   },
    // },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'img/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-mkdir');
  //grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  grunt.registerTask('default', ['responsive_images']);

};
