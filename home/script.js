console.log("i'm here!");

$(document).ready(function() {

  $("#projects-title").mouseenter(function() {
    $("body").css({"background-color": "#b9e0fd"})
  });

  $("#projects-title").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#projects-title").hover(function() {
    $("#projects-text").toggle(),
    $("#assignments-title").toggle(),
    $("#try-outs-title").toggle(),
    $("#about-title").toggle(),
    $("#contact").toggle()
  });

  $("#assignments-title").mouseenter(function() {
    $("body").css({"background-color": "#f9b4a6"})
  });

  $("#assignments-title").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#assignments-title").hover(function() {
    $("#assignments-text").toggle(),
    $("#projects-title").toggle(),
    $("#try-outs-title").toggle(),
    $("#about-title").toggle(),
    $("#contact").toggle()
  });

  $("#try-outs-title").mouseenter(function() {
    $("body").css({"background-color": "#ffeb7f"})
  });

  $("#try-outs-title").mouseleave(function() {
    $("body").css({"background-color": "white"})
  });

  $("#try-outs-title").hover(function() {
    $("#try-outs-text").toggle(),
    $("#projects-title").toggle(),
    $("#assignments-title").toggle(),
    $("#about-title").toggle(),
    $("#contact").toggle()
  });

  $("#about-title").hover(function() {
    $("#about-text").toggle(),
    $("#about-image").toggle(),
    $("#projects-title").toggle(),
    $("#assignments-title").toggle(),
    $("#try-outs-title").toggle(),
    $("#contact").toggle()
  });


});
