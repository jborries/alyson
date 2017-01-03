(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();



  }); // end of document ready

  $(document).ready(function() {
      $('.parallax').parallax();
  });

  $(window).load(function() {
   // executes when complete page is fully loaded, including all frames, objects and images
   alert("Jesse - if you see this, the init.javascript file is loading");
  });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  $(document).ready(function(){
      $('.carousel').carousel();
    });

    $(document).ready(function(){
        $('.slider').slider({full_width: true, indicators: true, height: 400, transition: 500, interval: 6000});
    })

    $(document).ready(function(){
        //pause slider
        $('.slider').slider('pause');

        $('.slider').slider('pause');
        // Start slider
        $('.slider').slider('start');
        // Next slide
        $('.slider').slider('next');
        // Previous slide
        $('.slider').slider('prev');
    });

})(jQuery); // end of jQuery name space
