$(document).ready(function() {

  $("#key").on("click", function() {
    $("body").css({
      "background-color": "white",
      "color": "black"
    });
  });

  $("#key").on("click", function() {
    $("#key").css({
      "filter": "invert(0)"
    });
  });

  // Credit for jQuery Rotation Animation: https://codepen.io/seeker5084/pen/VMQGwX
  $('#key').on("click", function() {
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

  $("#key").on("click", function() {
    $("#key").animate({
      top: "250",
      opacity: 0
    }, 1000, function() {
      $("#key").remove()
    });
  });
});
