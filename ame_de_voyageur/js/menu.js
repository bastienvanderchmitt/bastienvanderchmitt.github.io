// Menu scrollTo script

$(document).ready(function (){
    $("#menu-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-shops").click(function (){
        $('html, body').animate({
            scrollTop: $("#shops").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});
