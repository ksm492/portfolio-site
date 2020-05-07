console.log("hello world!");

$(document).ready(function() {

  var transition = function() {

    $("body").css({
      "background-color": "white",
      "color": "black"
    });

    $("#key").css({
      "filter": "invert(0)"
    });

    // Credit for jQuery Rotation Animation: https://codepen.io/seeker5084/pen/VMQGwX
    $('#key').animate({
      deg: 90
    }, {
      duration: 1000,
      step: function(now) {
        $(this).css({
          transform: 'rotate(' + now + 'deg)'
        });
      }
    });

    $("#key").fadeIn()
      .css({
        position: "relative"
      })
      .animate({
        top: "250",
        opacity: 0
      }, 1000, function() {
        $("#key").remove(),
          $("#animate-typing").remove(),
          $("#introduction").remove()
      });

  }

  $("#key").on("click", function() {
    transition();
  });

  // Credit for transition for animation to complete: https://forum.webflow.com/t/delay-page-transition-for-animation-to-complete/52793
  $("#key").on("click", function(e) {
    e.preventDefault();
    var linkUrl = $("a").attr('href');
    setTimeout(function(url) {
      window.location = url;
    }, 2000, linkUrl);
  });

});
