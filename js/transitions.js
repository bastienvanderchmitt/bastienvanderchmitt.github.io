(function($){
  $(function(){
    $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
    });

    var options = [
      {selector: '#left-transition1', offset: 100, callback: function(el) {
         $(el).animateCss('fadeInLeftBig');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#right-transition1', offset: 100, callback: function(el) {
         $(el).animateCss('fadeInRightBig');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#left-transition2', offset: 50, callback: function(el) {
         $(el).animateCss('fadeInLeftBig');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#right-transition2', offset: 50, callback: function(el) {
         $(el).animateCss('fadeInRightBig');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#about-transition', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-1', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-panel-1', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-2', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-panel-2', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-3', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-panel-3', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-4', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-panel-4', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-5', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-panel-5', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#timeline-image-6', offset: 200, callback: function(el) {
         $(el).animateCss('zoomIn');
         $(el).removeClass("hidden");
       }
      },
      {selector: '#header-name', offset: 200, callback: function(el) {
         $(el).animateCss('flipInX');
         $(el).removeClass("hidden");
       }
      },
    ];

    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
