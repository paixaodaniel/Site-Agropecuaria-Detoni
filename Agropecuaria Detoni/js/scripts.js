
    (function ($) {
    "use strict";


    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });



    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

   /*
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };*/

    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery);

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openclick").style.display = "none";
    document.getElementById('nav_brand').style.display = "none";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openclick").style.display = "block";
    document.getElementById('nav_brand').style.display = "block";
  }

  let op = window.document.getElementById('open')
  let cl = window.document.getElementById('close')
  function abrir() {
    document.getElementById("gado1").style.display = "none"
    document.getElementById("gado2").style.maxHeight = "2500px"
    document.getElementById("ag").style.height = "calc(500px - 29vh)"
    op.style.display = "none"
  }

  function fechar() {
    document.getElementById("gado1").style.display = "block"
    document.getElementById("gado2").style.maxHeight = "0px"
    document.getElementById("ag").style.height = "unset"
    op.style.display = "flex"

  }


