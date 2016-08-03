// variable used to check when the menu is fixed. Used to handle
// situations when the window is resized.
var menuFixed = true;

// The mobileMenu feature will be used to show or hide the menu from the
// user when he/she scrolls up or down. This triggers only on
// mobile-devices/small-windows and when the user is in the maincontainer.
var mobileMenuFeature = false;
var requestMobileMenuFeatureOff = false;

var inContainer = false;
var maxWidth = 800;

$(window).resize(function() {
  if ($(document).width() <= maxWidth && inContainer) {
    mobileMenuFeature = true;
  } else if ($(document).width() > maxWidth && inContainer) {
    requestMobileMenuFeatureOff = true;
  }
});


var waypoints = $('.maincontainer').waypoint(function(direction) {
  if (menuFixed && direction == "up"){
    mobileMenuFeature = false;
  }
  inContainer = !inContainer;
});


var waypoints = $('.maincontainer').waypoint(function(direction) {
  if (menuFixed && $(document).width() <= maxWidth && direction == "down") {
    menuFixed = false;
    mobileMenuFeature = true;
    $('.nav-container').addClass('slideOutUp');
  }
}, {
  offset: 0
});


var iScrollPos = 0;
$(window).scroll(function () {
  var iCurScrollPos = $(this).scrollTop();
  if (iCurScrollPos > iScrollPos) {
    // if scrolling down
    if (mobileMenuFeature && menuFixed) {
      $('.nav-container').addClass('slideOutUp').removeClass('slideInDown');
      //$('.nav-container').toggleClass('slideOutUp slideInDown');
      menuFixed = !menuFixed;
    }
  } else {
    // if scrolling up
    if (mobileMenuFeature && !menuFixed){
      $('.nav-container').addClass('slideInDown').removeClass('slideOutUp');
      //$('.nav-container').toggleClass('slideOutUp slideInDown');
      menuFixed = !menuFixed;
      // If there is a request to turn the mobile feature off, then do it.
      if (requestMobileMenuFeatureOff) {
        requestMobileMenuFeatureOff = false;
        mobileMenuFeature = false;
      }
    }
  }
  iScrollPos = iCurScrollPos;
});
