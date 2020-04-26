$(document).ready(function() {

  // Credit for Toggle Background Color: https://www.geeksread.com/javascript-lesson-36-dom-how-to-toggle-background-color/

  var key = document.querySelector("#key");
  var backgroundColor = "background-color";
  var color = "color";
  var filter = "filer";
  var isLight = false;

  key.addEventListener("click", function() {
    if (isLight) {
      document.body.style.backgroundColor = "black",
      document.body.style.color= "white";
      isLight = false;
    } else {
      document.body.style.backgroundColor = "white",
      document.body.style.color= "black";
      isLight = true;
    }
  });
});
