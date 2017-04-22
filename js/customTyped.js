$(function(){
  var cpt=1;
  const FONT_1 = "Roboto";
  const FONT_2 = "Rubik Mono One";
  const FONT_3 = "Gloria Hallelujah";
  const FONT_4 = "Raleway";
  const FONT_5 = "Pacifico";

  $(".element").typed({
    strings: [ "Hello, I'm Bastien", "I Love to Develop.", "I am Creative.", "I Love Design.", "I am Developer." ],
    typeSpeed: 50,
    startDelay: 1000,
    loop: false,
    preStringTyped: function() {
      switch(cpt) {
          case 1:
              $('.element').css("font-family", FONT_1);
              cpt = 2;
              break;
          case 2:
              $('.element').css("font-family", FONT_2);
              cpt = 3;
              break;
          case 3:
              $('.element').css("font-family", FONT_3);
              cpt = 4;
              break;
          case 4:
              $('.element').css("font-family", FONT_4);
              cpt = 5;
              break;
          case 5:
              $('.element').css("font-family", FONT_5);
              cpt = 1;
              break;
          default:
              break;
      }
    },
  });
});
