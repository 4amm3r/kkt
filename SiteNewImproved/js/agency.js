// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    var recommendView = false;
    $('#recommendationdiv').hide();
    $('#recommendexpand').on('click', function(){
        if(recommendView == false){                   
            $('#recommendexpand').text('See Less');
            $('#recommendationdiv').slideDown(1000);
        }
        else{                                       
            $('#recommendexpand').text('See More');
            $('#recommendationdiv').slideUp(1000);
        }
        recommendView = !recommendView;
    });
    
    var testimonialView = false;
    $('#testimonialdiv').hide();
    $('#testimonialexpand').on('click', function(){
        if(testimonialView == false){                   
            $('#testimonialexpand').text('See Less');
            $('#testimonialdiv').slideDown(1000);
        }
        else{                                       
            $('#testimonialexpand').text('See More');
            $('#testimonialdiv').slideUp(1000);
        }
        testimonialView = !testimonialView;
    });

})(jQuery); // End of use strict
