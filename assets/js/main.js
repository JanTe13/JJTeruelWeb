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
            cat: "(Barcelona 1952) és paisatgista, arquitecte i dissenyador industrial. Des de l'any 1984 dirigeix el seu propi estudi de disseny, arquitectura i paisatgisme amb una àmplia cartera de clients tant nacionals com internacionals, i una trajectòria reconeguda amb diversos premis i distincions, i referenciada en múltiples publicacions.",
            es: "(Barcelona 1952) es paisagista, arquitecto y diseñador industrial. Desde el año 1984 dirige su propio estudio de diseño, arquitectura y paisagismo con una amplia cartera de clientes tanto nacionales como internacionales, y con una trayectoria reconocida con varios premios y distinciones, y referenciada en múltiples publicaciones.",
            en: "(Barcelona 1952) is a landscape architect, architecht and industrial designer. Since 1984 he runs his own studio which counts on a wide portfolio of clients, both national and international, and a professional trajectory recognized with various prizes and distinctions, and references in diverse publications."
        },
        "Description 2": {
            cat: "Des de l'any 1996 és professor associat de la Facultat de Belles Arts de la Universitat de Barcelona i des de l'any 2011 és professor de BAU Escola Superior de Disseny de Barcelona.",
            es: "Desde el año 1996 es profesor asociado de la Facultat de Bellas Artes de la Universidad de Barcelona y desde el año 2011 es profesor de BAU Escuela Superior de Diseño de Barcelona.",
            en: "Since 1996 he is a lecturer at Faculty of Fine Arts, University of Barcelona, and since 2011 at the BAU, Design school in Barcelona."
        },
        "Products description": {
            cat: "Dona un cop d'ull als productes dissenyats per ",
            es: "Hecha un vistazo a los productos  diseñados por ",
            en: "Have a look through the porducts designed by "
        },
        "Graduat Paisatgisme": {
            cat: "Graduat Superior en Paisatgisme",
            es: "Graduado Superior en Paisagismo",
            en: "Higher Degree in Landscaping"
        },
        "Escola Arq": {
            cat: "Escola Tècnica Superior d'Arquitectura",
            es: "Escuela Técnica Superior de Arquitectura",
            en: "Barcelona Technical College of Architecture"
        },
        "Arquitecte": {
            cat: "Arquitecte",
            es: "Arquitecto",
            en: "Architect"
        },
        "DIndustrial": {
            cat: "Dissenyador Industrial",
            es: "Diseñador Industrial",
            en: "Industrial Designer"
        },
        "Escola Elisava": {
            cat: "Escola Elisava",
            es: "Escuela Elisava",
            en: "Elisava College"
        },
        "ArtsGraf": {
            cat: "Graduat en Arts Gràfiques",
            es: "Graduado en Artes Gráficas",
            en: "Graduated in Graphic Arts"
        },
        "Escola Arts": {
            cat: "Escola d'Arts Aplicades i d'Oficis Artístics",
            es: "Escuela de Artes Aplicadas y de Oficios Artísticos",
            en: "School of Applied Arts and Artistic Crafts"
        },
        "Prizes": {
            cat: "Premis",
            es: "Premios",
            en: "Prizes"
        },
        "Others": {
            cat: "Altres",
            es: "Otros",
            en: "Others"
        },
        "Iberdiseno": {
            cat: '1990 Selecció "Iberdiseño 90"',
            es: '1990 Selección "Iberdiseño 90"',
            en: '1990 "Iberdiseño 90" selection'
        },
        "SIDI": {
            cat: "1986-1987-1988-1990 Selecció SIDI",
            es: "1986-1987-1988-1990 Selección SIDI",
            en: "1986-1987-1988-1990 SIDI Selection"
        },
        "Valencia": {
            cat: "València",
            es: "Valencia",
            en: "Valencia"
        },
        "Delta": {
            cat: "1986, 2 Seleccions Delta ADI-FAD",
            es: "1986, 2 Selecciones Delta ADI-FAD",
            en: "1986, 2 Delta ADI-FAD Selections"
        },
        "Marie-Claire": {
            cat: '1986, Selecció "La Maison de Marie-Claire"',
            es: '1986, Selección "La Maison de Marie-Claire"',
            en: '1986, "La Maison de Marie-Claire" Selection'
        },
        "Paris": {
            cat: "París",
            es: "París",
            en: "Paris"
        },
        "Colegiat": {
            cat: "Col·legiat",
            es: "Colegiado",
            en: "Collegiate"
        },
        "Soci": {
            cat: "Soci",
            es: "Socio",
            en: "Partner"
        },
        "COAC": {
            cat: " Col·legi Oficial d'Arquitectes de Catalunya (COAC)",
            es: " Colegio Oficial de Arquitectos de Cataluña (COAC)",
            en: " Col·legi Oficial d'Arquitectes de Catalunya (COAC)"
        },
        "ADI-FAD": {
            cat: " Agrupació de Disseny Industrial del Foment de les Arts i el Disseny (ADI-FAD)",
            es: " Agrupación de Diseño Industrial del Fomento de las Artes y el Diseño (ADI-FAD)",
            en: " Agrupació de Disseny Industrial del Foment de les Arts i el Disseny (ADI-FAD)"
        }
    };

    var translator = $('body').translate({lang: "cat", t: dict}); //use Catalan by default

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














