// Listen to orientation changes using media queries

/*  references
    https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    https://davidwalsh.name/orientation-change */

/*  Requirements: jQuery */

var isMobileDevice = function() {
  var ua = navigator.userAgent.toLowerCase();
  var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
  return android || iPhone || iPad;
}();

var barHeight = screen.height - window.innerHeight;

var handleOrientationChange = function() {
  var height = "100vh";
  if (isMobileDevice) {
    height = screen.height - barHeight;
    height = height.toString() + "px";
  }
  $("header").css("height", height);
};

handleOrientationChange();
window.addEventListener("orientationchange", handleOrientationChange);
