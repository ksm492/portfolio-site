console.log("hello world!");

$(document).ready(function() {

    $("#key").hover(function() {
      $("body").css("background-color", "white"),
        $("body").css("color", "black");
    });

    $("#key").hover(function() {
      $("#key").css("filter", "invert(0)");
    });

    // Credit for jQuery Rotation Animation: https://codepen.io/seeker5084/pen/VMQGwX
    $('#key').hover(function() {
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
    });

});
