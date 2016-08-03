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
