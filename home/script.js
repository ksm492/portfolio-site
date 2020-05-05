console.log("i'm here!");

$(document).ready(function() {

  $("#projects").mouseenter(function() {
    $("body").css({"background-color": "#b9e0fd"})
  });

  $("#projects").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#projects").hover(function() {
    $("#assignments").toggle(),
    $("#try-outs").toggle(),
    $("#about").toggle(),
    $("#contact").toggle()
  });

  $("#assignments").mouseenter(function() {
    $("body").css({"background-color": "#f9b4a6"})
  });

  $("#assignments").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#assignments").hover(function() {
    $("#projects").toggle(),
    $("#try-outs").toggle(),
    $("#about").toggle(),
    $("#contact").toggle()
  });

  $("#try-outs").mouseenter(function() {
    $("body").css({"background-color": "#ffeb7f"})
  });

  $("#try-outs").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#try-outs").hover(function() {
    $("#projects").toggle(),
    $("#assignments").toggle(),
    $("#about").toggle(),
    $("#contact").toggle()
  });


});
