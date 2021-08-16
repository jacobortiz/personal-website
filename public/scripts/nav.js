$(document).ready(navScroll);
$(window).resize(navScroll);
$(window).scroll(navScroll)

var path = window.location.pathname;

function navScroll() {
    if($(window).width() >= 992) {
        var scroll_top = 0;
        scroll_top = $(window).scrollTop();
        $('.counter').html(scroll_top);

        if(scroll_top >= 100) {
            $('#global-nav').css({
                'padding':  '0px'
            })

            $('.nav-scroll').css({
                'color':    '#101010',
                'padding-top':  '0px',
                'padding-bottom':   '0px'
            })

            $('#global-nav').addClass('scrolled-nav')
        } else if(scroll_top < 100) {
            $('.nav-scroll').css({
                'padding-top':  '10px',
                'padding-bottom':   '10px'
            })

            if(!(path === '/contact') && !(path === '/software')) {
                $('.nav-scroll').css({
                    'color':    'white',
                })
            }
            $('#global-nav').removeClass('scrolled-nav');
        }
    } else {
        $('.nav-scroll').css({
            'color':    '#101010',
            'padding-top':  '10px',
            'padding-bottom':   '10px'
        })

        $('#global-nav').css({
            'padding':    '21px',
            'padding-top':  '8px',
            'padding-bottom':   '8px'
        })
    }
}