$(document).ready(function () {
  // document.addEventListener("touchstart", function(){}, true);
  setMobileNavigation();
  enableProjectDescAnimations();
  setTypedAnimations();
  setSkillPercentage();

  $('a[href$="#"]').click(function() {
    console.log("Empty anchor link stopped.");
    return false;
  });
});
