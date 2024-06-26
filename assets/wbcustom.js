$(document).ready(function() {

    // Tab Append
    $('.appendtabfea').appendTo('#tab-fea-0');
    $('.appendtablatest').appendTo('#tab-latest-0');
    $('.appendtabbest').appendTo('#tab-best-0');

    /* Swiper.js Slideshow.liquid */
    const swiper = new Swiper('.swiper-slideshow', {
        // Optional parameters
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
    });
  
    // // Slideshow
    // $('.owl-slider').slick({
    //     dots: true,
    //     arrows: false,
    //     infinite: false,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    // top category
    $('.owl-catt').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1591,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        } 
        ]
    });
    $(".owl-catt").show();

    // Home Tab Product  
    $('.owl-toppro,.wbnewpro').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1591,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $(".owl-toppro").show();
    $(".wbnewpro").show();

    // Home Tab Product   
    $('.wbtopr').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1591,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $(".wbtopr").show();

    $(".owl-dealp").slick({
        rows: 3,
        loop: true,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 299,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      }); 


    // Latest Product
    $('.wblatest').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $(".wblatest").show();

    // Home Left Product   
    $('.wbpop,.wbbestp').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {  
                slidesToShow: 1
            }
        }
        ]  
    });
    $(".wbpop,.wbbestp").show();

    // special product
    $('.wbspeprod').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 1  
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $(".wbspeprod").show();


    // Countdown Timer
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        Date.prototype.yyyymmdd = function() {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
            var dd  = this.getDate().toString();
            return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
        };
        var date = new Date();
        if (finalDate > date.yyyymmdd()){
            $(this).parents('.timer_outer').css('display','block');
        }else{
            $(this).parents('.timer_outer').css('display','none');  
        }
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div><span>%D</span><strong>d</strong></div><div><span>%H</span><strong>h</strong></div><div><span>%M</span><strong>m</strong></div><div><span>%S</span><strong>s</strong></div>'));
        });
    });

    // Product Category
    if ($(window).width() >= 576) {
        $(".ptabbr").slick({
        rows: 6,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
           {
            breakpoint: 1410,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
              }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    };
    $(".ptabbr").show();
    $('.ptabbr a.nav-link').click(function () {
        $('.ptabbr a.nav-link').addClass('active');
        $('.ptabbr a.nav-link').removeClass('active');
    });


    $('.owl-procat').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $(".owl-procat").show();

    // Testimonial
    $('.testi').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
  	$(".testi").show();


    // Blog
    $('.wbblog').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
  	$(".wbblog").show();

    // Logo Slider
    $('.wblogobar').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 7
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        }
        ]
    });
  	$(".wblogobar").show();

    // header menu more
    if ($(document).width() >= 1410){
         var count_block = $('#wbmegalevel-1 .wbmenul_1').length;
         var number_blocks = 10;
         if(count_block < number_blocks){
              return false; 
         } else {
              
              $('#wbmegalevel-1 .wbmenul_1').each(function(i,n){
                    if(i == number_blocks) {
                         $('#wbmegalevel-1').append('<li class="view_more wbmenul_1">+<a class="dropdown-item wbmenul1_link">More</a></li>');
                    }
                    if(i> number_blocks) {
                         $(this).addClass('wr_hide_menu');
                    }
              })
              $('.wr_hide_menu').hide();
              $('.view_more.wbmenul_1').click(function() {
                    $(this).toggleClass('active');
                    $('.wr_hide_menu').slideToggle();
              });
         }
    }
   
    if (($(document).width() >= 992) && ($(document).width() <= 1199)) {
         var count_block = $('#wbmegalevel-1 .wbmenul_1').length;
         var number_blocks = 6;
         if(count_block < number_blocks){
              return false;   
         } else {
              
              $('#wbmegalevel-1 .wbmenul_1').each(function(i,n){
                    if(i == number_blocks) {
                         $('#wbmegalevel-1').append('<li class="view_more wbmenul_1">+<a class="dropdown-item wbmenul1_link">More</a></li>');
                    }
                    if(i> number_blocks) {
                         $(this).addClass('wr_hide_menu');
                    }
              })
              $('.wr_hide_menu').hide();
              $('.view_more.wbmenul_1').click(function() {
                    $(this).toggleClass('active');
                    $('.wr_hide_menu').slideToggle();
              });
         }
    }

    // Scroll To top
    $("#scroll").addClass("scrollhide");
        $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            $("#scroll").addClass("scrollhide")
        } else {
            $("#scroll").removeClass("scrollhide")
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    // Mobile Menu Toggle
    if ($(window).width() <= 991) {
        $('.wbmegamainhd').on('click', function() {
            var targetMenu = '#' + $(this).data('submenu');
            $(targetMenu).slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });
        $('#megamenu').prependTo('.headlogo');
    };

    if ($(window).width() <= 767) {
        $('.headtleft localization-form').appendTo('.customer_account ul');
        $('.wbheadwish').appendTo('.customer_account ul .wbhwish');
        
    };

    // Collection Grid/List View
    $(document).on('click', '.wblistgridbtn', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).hasClass('listv')) {
            $('#product-grid').addClass('product-list').removeClass('product-grid');
        } else if ($(this).hasClass('gridv')) {
            $('#product-grid').addClass('product-grid').removeClass('product-list');
        }
    });

    

    // Popup Product
    $('.wbpopup-popducts .popinner').hide();
    var i = 0;
    setIntervalFun();
    var totalTimer = parseInt(3000) + parseInt(2000);
    setInterval( setIntervalFun, totalTimer);
    function setIntervalFun()
    {
        $('.wbpopup-popducts .popinner').eq(i).fadeIn(400);
        setTimeout(function(){
            $('.wbpopup-popducts .popinner').eq(i).fadeOut(400);
            i++;
            if ($('.wbpopup-popducts .popinner').length <= i) {
                i = 0;
            }
        },parseInt(7000));
    }
    $(document).on('click', '.wbclosepopup', function(){
        $('.wbpopup-popducts').fadeOut(400).remove();
    });

    // Box Layout
    $(".wbboxdemo").click(function(){
        $(".wbboxlt").attr("id","wbboxlayout");
    });
    $(".wbwidedemo").click(function(){
        $(".wbboxlt").removeAttr("id");
    }); 
    // Color Customizer
    $("body").on("click", ".wbinnerclr a", function(e){
    e.preventDefault();
    $('.wbinnerclr').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbcolorname=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbcolorname href="' + $(this).attr('href') + '">');
    });
    // Rtl Mode
    $("body").on("click", ".wbrtlmode a", function(e){ 
    e.preventDefault();
    $('.wbrtlmode').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbrtl=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbrtl href="' + $(this).attr('href') + '">');
    });
    // Color Open/Close 
    $('.wbopen-closeclr').click(function() {
        if ($(this).hasClass('wbclrdisable')) {
            $(this).removeClass('wbclrdisable');
            $(this).addClass('wbclrenable');
            $('.wbcolor_box').animate({right: '30px'}, 450);
            $('.wbcolor_box').css({'box-shadow': '0 10px 35px 10px rgba(0,0,0,.06)', 'background': '#fff', 'border-radius': '4px 0 4px 4px'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '1'}, 450);
        } else {
            $(this).removeClass('wbclrenable');
            $(this).addClass('wbclrdisable');
            $('.wbcolor_box').animate({right: '-250px'}, 450);
            $('.wbcolor_box').css({'box-shadow': 'none', 'background': 'transparent'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '0'}, 450);
        }
    });


}); // Document Ready Div End


$(window).on('load',function(){
    $(".s-panel .loader").removeClass("wrloader");
});

// Menu For Mobile
function w3_open() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("megamenu").className = "active";
    $('body').addClass("wbbodyscroll");
}
function w3_close() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("megamenu").className = "";
    $('body').removeClass("wbbodyscroll");
}