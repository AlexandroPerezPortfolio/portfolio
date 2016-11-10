$(document).ready(function () {
  // document.addEventListener("touchstart", function(){}, true);
  setMobileNavigation();
  enableProjectDescAnimations();

  $('a[href$="#"]').click(function() {
    console.log("Empty anchor link stopped.");
    return false;
  });
});
