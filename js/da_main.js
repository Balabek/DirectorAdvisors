$(document).ready(function() {

    // Testimonials slider
    $('.testimonials_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 400,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Close the collapse navbar after a menu link is clicked and bring back the brightness
    let navbarlinx = $('.navbar-nav>li>a');
    $(navbarlinx).on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.animated-icon1').toggleClass('open');
        $('.da_header_area,.da_innerheader_area').toggleClass('dimmer');
    });
    if ((screen.width > 991)) {
        $(navbarlinx).on('click', function(){
            $('.da_header_area, .da_innerheader_area').removeClass('dimmer');
        });
    }
    $('.navbar-toggler').on('click', function(){
        $('.da_header_area, .da_innerheader_area').toggleClass('dimmer');
    });



    // Fancy animation for hamburger menu
    $('.da_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });

    // Disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()


    // Sent message notification toast (correct button class is '.send_btn')
    $('.send_btn').click(function() {
        $('.toast').toast('show')
    });


});

