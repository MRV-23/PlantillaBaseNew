     //Dar click fuera del menú lateral o del header provoca que se cierre
     $(document).click(function(e) {
            if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0 && !mainHeader.is(e.target) && mainHeader.has(e.target).length === 0 && window.innerWidth <= 1364) {
                if (!$('.page-container').hasClass('sbar_collapsed')) {
                    $('.page-container').addClass('sbar_collapsed');
                }
            }
        });

    /*================================
    Preloader
    ==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function() {
        setTimeout(function() {
            preloader.fadeOut('slow', function() { $(this).remove(); });
        }, 300)
    });

    /*================================
    sidebar collapsing
    ==================================*/
    if (window.innerWidth <= 1364) {
        $('.page-container').addClass('sbar_collapsed');
    }
    $('body').on('click', '.nav-btn',function() {
        $('.page-container').toggleClass('sbar_collapsed');
    });

    /*================================
    Start Footer resizer
    ==================================*/
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    /*================================
    sidebar menu
    ==================================*/
    //$("#menu").metisMenu();


    /*================================
    stickey Header
    ==================================*/
    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop(),
    //         mainHeader = $('#sticky-header'),
    //         mainHeaderHeight = mainHeader.innerHeight();

    //     console.log(mainHeader.innerHeight());
    //     if (scroll > 1) {
    //         $("#sticky-header").addClass("sticky-menu");
    //     } else {
    //         $("#sticky-header").removeClass("sticky-menu");
    //     }
    // });


    /*================================
    form bootstrap validation
    ==================================*/
    // $('[data-toggle="popover"]').popover()

    /*------------- Start form Validation -------------*/
    // window.addEventListener('load', function() {
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.getElementsByClassName('needs-validation');
    //     // Loop over them and prevent submission
    //     var validation = Array.prototype.filter.call(forms, function(form) {
    //         form.addEventListener('submit', function(event) {
    //             if (form.checkValidity() === false) {
    //                 event.preventDefault();
    //                 event.stopPropagation();
    //             }
    //             form.classList.add('was-validated');
    //         }, false);
    //     });
    // }, false);

    /*================================
    datatable active
    ==================================*/
    // if ($('#dataTable').length) {
    //     $('#dataTable').DataTable({
    //         responsive: true
    //     });
    // }
    // if ($('#dataTable2').length) {
    //     $('#dataTable2').DataTable({
    //         responsive: true
    //     });
    // }
    // if ($('#dataTable3').length) {
    //     $('#dataTable3').DataTable({
    //         responsive: true
    //     });
    // }


    /*================================
    Slicknav mobile menu
    ==================================*/
    // $('ul#nav_menu').slicknav({
    //     prependTo: "#mobile_menu"
    // });

    /*================================
    login form
    ==================================*/
    $('body').on('focus', '.form-gp input,.form-gp select', function() {
        $(this).parent('.form-gp').addClass('focused');
    });
    $('body').on('focusout', '.form-gp input,.form-gp select', function() {
        if ($(this).val().length === 0) {
            $(this).parent('.form-gp').removeClass('focused');
        }
    });

    /*================================
    slider-area background setting
    ==================================*/
  
    $('body').on('click', '.settings-btn', function() {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });

    $('body').on('click','.offset-close', function() {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });
    
    /*================================
    Owl Carousel
    ==================================*/
    function slider_area() {
        var owl = $('.testimonial-carousel').owlCarousel({
            margin: 50,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1360: {
                    items: 1
                },
                1600: {
                    items: 2
                }
            }
        });
    }
    slider_area();

    /*================================
    Fullscreen Page
    ==================================*/

    // if ($('#full-view').length) {

        var requestFullscreen = function(ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var exitFullscreen = function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

    
        $('body').on('click','#full-view', function(e) {
            e.preventDefault();
            requestFullscreen(document.documentElement);
            $('body').addClass('expanded');
        });

        $('body').on('click','#full-view-exit', function(e) {
            e.preventDefault();
            exitFullscreen();
            $('body').removeClass('expanded');
        });

    // }

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) 
                $('.back-to-top').fadeIn('slow');
            else 
                $('.back-to-top').fadeOut('slow');
        });
    
        $('.back-to-top').click(function() {
            $('html, body').animate({
            scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        });

