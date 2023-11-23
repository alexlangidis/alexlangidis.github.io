$(document).ready(function () {


    $('.fa-bars, .fa-xmark').click(function (e) { 
        e.preventDefault();
        $('.fa-bars, .fa-xmark, .mobile-menu').toggleClass('hidden');
        $('.menu-div').toggleClass('h-screen');
    });


       // Smooth scroll when li is clicked
       $('.scroll-link').click(function (e) {
        e.preventDefault();
        let target = $(this.hash);
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // Adjust the speed of the scroll as needed
      });

 // Close mobile menu when li is clicked
    $('.mobile-menu li').click(function () {
      $('.fa-bars, .fa-xmark, .mobile-menu').toggleClass('hidden');
    });

});