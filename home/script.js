console.log("i'm here!");

$(document).ready(function() {

  $("#projects").mouseenter(function() {
    $("body").css({"background-color": "cyan"})
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
    $("body").css({"background-color": "magenta"})
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
    $("body").css({"background-color": "yellow"})
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
