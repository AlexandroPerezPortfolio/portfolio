
function setMobileNavigation() {
  // for Hamburger button on mobile devices
  // set effects relating to the mobile navigation
  var menu = $('#menu');
  var menuLinks = $('#menu-links');
  var isHidden = true;

  menu.click(function(e) {
    if (isHidden){
      showMenu();
    } else {
      hideMenu();
    }
  });

  $("#menu-links, #menu-links > li > a").click(function(){
    hideMenu();
  });

  $(".title").click(function(){
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);
  });

  function showMenu() {
    console.log("menu shown");
    menuLinks.css("display", "block");
    menu.html('<i class="fa fa-times" aria-hidden="true"></i>');
    isHidden = false;
  }

  function hideMenu() {
    console.log("menu hidden");
    menuLinks.css("display", "");
    menu.html('<i class="fa fa-bars" aria-hidden="true"></i>');
    isHidden = true;
  }

}

/*
$(document).ready(function () {

  var menu = $('#menu');
  var menuLinks = $('#menu-links');
  var isHidden = true;

  menu.click(function(e) {
    if (isHidden){
      menuLinks.css("display", "block");
      menu.html('<i class="fa fa-times" aria-hidden="true"></i>');
      isHidden = false;
    } else {
      menuLinks.css("display", "");
      menu.html('<i class="fa fa-bars" aria-hidden="true"></i>');
      isHidden = true;
    }
  });
});
*/
