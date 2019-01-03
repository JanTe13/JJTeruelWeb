"use strict";

//Rage Template
//Designerd by: http://bootstrapthemes.co

jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    }
    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
 
    });



// slick slider active Home Page Tow
    $(".testimonial_slid").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });



//    featured slider
    $('.featured_slider').slick({
        centerMode: true,
        dote: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 1500,
        index: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



//---------------------------------------------
// Counter 
//---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });





//About us accordion 

    $("#faq_main_content").collapse({
        accordion: true,
        open: function () {
            this.addClass("open");
            this.css({height: this.children().outerHeight()});
        },
        close: function () {
            this.css({height: "0px"});
            this.removeClass("open");
        }
    });





//Team Skillbar active js

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });

//Language control
    //Dictionary
    var dict = {
        "Hello": {
            cat: "Inici",
            es: "Inicio",
            en: "Hello"
        },
        "Portfolio": {
            cat: "Productes",
            es: "Productos",
            en: "Products"
        },
        "About": {
            cat: "Qui soc",
            es: "Acerca de mi",
            en: "About me"
        },
        "Contact": {
            cat: "Contacte",
            es: "Contacto",
            en: "Contact"
        },
        "Language": {
            cat: "Idioma",
            es: "Idioma",
            en: "Language"
        },
        "Jobs": {
            cat: "Dissenyador industrial / Arquitecte / Paisatgista",
            es: "Diseñador industrial / Arquitecto / Paisagista",
            en: "Industrial designer / Architect / Landscape architect"
        },
        "Description 1": {
            cat: "(Barcelona 1952) és arquitecte per l'ETSAB (Escola Tècnica Superior d'Arquitectura de Barcelona) (2004), dissenyador industrial per l'escola Elisava (1978) i Graduat Superior en Paisatgisme per l'ETSAB (2009).",
            es: "(Barcelona 1952) es arquitecto por la ETSAB (Escuela Técnica Superior de Arquitectura de Barcelona) (2004), diseñador industrial por la Escola Elisava (1978) y Graduado Superior en Paisajismo en la ETSAB (2009).",
            en: "(Barcelona 1952) is an architect by ETSAB (The Barcelona Technical College of Architecture)(2004), Industrial Design by Escola Elisava (1978) and higher degree in Landscape at ETSAB (2009)."
        },
        "Description 2": {
            cat: "Dirigeix, des de l'any 1984, el seu propi estudi professional on desenvolupa projectes de disseny industrial, arquitectura i paisatgisme.",
            es: "Dirige, desde el año 1984, su propio estudio profesional donde desarrolla proyectos de diseño industrial, arquitectura y paisajismo.",
            en: "Since 1984 he runs his own industrial design studio, which counts on a wide portfolio of clients, both national and international, and a professional trajectory recognized with various prizes and distinctions, and references in diverse publications."
        },
        "Description 3": {
            cat: "Des de l'any 1996 és professor associat de la Facultat de Belles Arts de la Universitat de Barcelona i des de l'any 2011 és professor de BAU Escola Superior de Disseny de Barcelona.",
            es: "Desde el año 1996 es profesor asociado de la Facultat de Bellas Artes de la Universidad de Barcelona y desde el año 2011 es profesor de BAU Escuela Superior de Diseño de Barcelona.",
            en: "Since 1996 he is a lecturer at Faculty of Fine Arts, University of Barcelona, and since 2011 at the BAU, Design school in Barcelona."
        },
        "Products description": {
            cat: "Dona un cop d'ull als productes dissenyats per ",
            es: "Hecha un vistazo a los productos  diseñados por ",
            en: "Have a look through the porducts designed by "
        }
    };

    var translator = $('body').translate({lang: "cat", t: dict}); //use English

    $('#en').click(function() {
        translator.lang("en");
    });

    $('#es').click(function() {
        translator.lang("es");
    });

    $('#cat').click(function() {
        translator.lang("cat");
    });

    //End

});














