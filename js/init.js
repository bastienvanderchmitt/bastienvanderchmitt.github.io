(function($){
  $(function(){

    var closeNavBarOnClick = false;

    function isMobile() {
      try{ document.createEvent("TouchEvent"); return true; }
      catch(e){ return false; }
    }

    if(isMobile()) {
      $("#modal").addClass("bottom-sheet");
      closeNavBarOnClick = true;
    }

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      closeOnClick: closeNavBarOnClick, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});

  }); // end of document ready
})(jQuery); // end of jQuery name space
