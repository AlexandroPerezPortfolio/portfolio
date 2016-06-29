// Listen to orientation changes using media queries

/*  references
    https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    https://davidwalsh.name/orientation-change */

/*  Requirements: jQuery */

function handleOrientationChange(mql) {
  // set a small timeout to give time to the browswer to change, and then get
  // the height. NOTE: without this, it doesn't work in chrome devtools when testing
  // orientation changes. Have to check on actual devices without this fix.
  /*setTimeout(function() { /**/
    // always do something
    // default height.
    var height = "100vh";
    if (isMobileDevice()) {
      height = $(window).height().toString() + "px";;
    }
    $("header").css("height", height);

    // left as it is for reference only
    if (mql.matches) {
      // Viewport in portrait orientation
      // do nothing
    } else {
      // Viewport in landscape orientation
      // do nothing
    }
  /*}, 0); /**/

}

//  mql: media query listener
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);

// checks if devices is an Android, iPhone or iPad
function isMobileDevice() {
  var ua = navigator.userAgent.toLowerCase();
  var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
  return android || iPhone || iPad;
}
