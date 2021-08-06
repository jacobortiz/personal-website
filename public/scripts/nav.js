$(window).resize(navScroll);
$(document).ready(navScroll);
$(window).scroll(navScroll);

var toggle = 0;
var url = window.location.pathname;

function navScroll(){
    if($(window).width() >= 992) {
        var scrollTop = 0;
          scrollTop = $(window).scrollTop();
           $('.counter').html(scrollTop);

          if (scrollTop >= 100) {
              $('#global-nav').css({
                  "padding":"0px"
              })
              $(".nav-scroll").css({
                  "color":"#101010",
                  "padding-bottom":"0px",
                  "padding-top":"0px"
              })
            $('#global-nav').addClass('scrolled-nav');

        } else if (scrollTop < 100) {
            $(".nav-scroll").css({
                "padding-bottom":"10px",
                "padding-top":"10px"
            })

            if(!(url === '/contact') && !(url === '/software')) {
                $(".nav-scroll").css({
                    "color": "white"
                })
            }

            $('#global-nav').removeClass('scrolled-nav');
          }
    }
    else {
        $(".nav-scroll").css({
            "color":"#101010",
            "padding-bottom":"10px",
            "padding-top":"10px"
        })
        $('#global-nav').css({
            "padding":"21px",
            "padding-top":"8px",
            "padding-bottom":"8px"
        })
    }
}

$(".navbar-toggler").click(function() {
    toggle++;
    if(toggle % 2 == 1) {
        console.log("ACTIVE TOGGLE");
        $('#global-nav').removeClass('toggle-height');
    }
    else {
        $('#global-nav').addClass('toggle-height');
    }
});
