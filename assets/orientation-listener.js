// Listen to orientation changes using media queries

/*  references
    https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    https://davidwalsh.name/orientation-change */

/*  Requirements:
    - jQuery
    - isMobile.js*/

/*var isMobileDevice = function() {
  var ua = navigator.userAgent.toLowerCase();
  var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
  return android || iPhone || iPad;
}();*/

function handleOrientationChange() {
  setTimeout(function(){
    lockHeader();

    var elementsToLock = [
      "#more-button"
    ];
    lockPosition(elementsToLock);
  }, 500);
}





var deadHeightLandscape = 0;
var deadHeightPortrait = 0;
function lockHeader() {
  var currentDeadHeight = screen.height - window.innerHeight;
  // if in portrait
  if (screen.height > screen.width) {
    if (currentDeadHeight > deadHeightPortrait) {
      deadHeightPortrait = currentDeadHeight;
    }
    lockHeight(deadHeightPortrait);
  }
  // else in landscape
  else {
    if (currentDeadHeight > deadHeightLandscape) {
      deadHeightLandscape = currentDeadHeight;
    }
    lockHeight(deadHeightLandscape);
  }
}

/**
 * use it to lock the height of elements that use 100vh height in mobile devices
 * (which causes a jumpy website when the mobile browswer hides the address bar).
 * It uses the screen.height to measure the viewport and substracts the deadHeight.
 * @param {string} deadHeight - (optional) height in pixels used by the browser's
 * address bar and the device's UI. this is useful for locking the height of a
 * fullscreen element that appears in the first page view (i.e. a header that is 100vh),
 * but wich would change size if the user scrolls down.
 */
function lockHeight(deadHeight) {
  deadHeight = deadHeight || 0;
  var height = (screen.height - deadHeight).toString() + "px";
  $("header").css("height", height);
}



/**
 * use it to lock the position of elements that use bottom positioning in mobile devices
 * (which causes the elements to by jumpy when the mobile browswer hides the address bar).
 * It uses the element.position() to get the top and left coordinates.
 * @param {array} elements - (required) (default: []) array of element selectors (jQuery) to lock.
 */
function lockPosition(elements){
  elements = elements || [];

  for (var element of elements) {
    $(element).css("bottom", "");
    $(element).css("top", "");
    var position = $(element).position();
    $(element).css("bottom", "auto");

    $(element).css("top", position.top);

    var overflow;
    if (screen.height > screen.width){
      overflow = (window.innerHeight+deadHeightPortrait) - screen.height;
    } else {
      overflow =  (window.innerHeight+deadHeightLandscape) - screen.height;
    }
    if (overflow > 0){
      position.top -= overflow;
      $(element).css("top", position.top);
    }
  }
}


if (isMobileDevice) {
  handleOrientationChange();
  window.addEventListener("orientationchange", handleOrientationChange);
  console.log("I'm mobile, so I added an orientationchange listener");
} else {
  console.log("I'm not mobile, so I didn't add an orientationchange listener");
}



var title = $("h1");
var pHeight = window.innerHeight;
var pWidth = window.innerWidth;
title.text(pHeight + ':' + pWidth);
document.addEventListener('scroll', function(e) {
  if (window.innerHeight !== pHeight) {
    // update pHeight to all elements
    pHeight = window.innerHeight;
    pWidth = window.innerWidth;
    title.text(pHeight + ':' + pWidth);
  }
});
