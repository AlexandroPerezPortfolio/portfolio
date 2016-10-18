// Listen to orientation changes using media queries

/*  references
    https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    https://davidwalsh.name/orientation-change */

/*  Requirements:
    - jQuery: for selectors only
    - isMobile.js: (custom module) to detect if device is mobile */

/*var isMobileDevice = function() {
  var ua = navigator.userAgent.toLowerCase();
  var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
  return android || iPhone || iPad;
}();*/

// Change timeout if it takes longer for some devices to track the orientation change.
var timeout = 300;

// Interval time for the custom orientation listener.
var listenerInterval = 100;




/**
 * use it to lock the height of elements that use 100vh height in mobile devices
 * (which causes a jumpy website when the mobile browswer hides the address bar).
 * It uses jQuery's css() to set the height.
 * @param {int} height - (required) height in pixels (Number only).
 */
function lockHeight(height) {
  $(".full-screen-height").css("height", height);
  $(".min-full-screen-height").css("min-height", height);
}



/**
 * use it to lock the position of elements that use bottom positioning in mobile devices
 * (which causes the elements to by jumpy when the mobile browswer hides the address bar).
 * It uses the element.position() to get the top and left coordinates.
 * @param {int} top - (required) position from top.
 */
function lockPosition(top){
  var elements = $(".lock-position-on-mobile");
  elements.css("bottom", "auto");
  elements.css("top", top - elements.height());
}




var maxLandscapeHeight;
var maxPortraitHeight;
var current, last;
if (portrait()) {
  last = 'portrait';
  current = 'portrait';
  maxPortraitHeight = window.innerHeight;
  maxLandscapeHeight = window.innerWidth;
} else {
  last = 'landscape';
  current = 'landscape';
  maxLandscapeHeight = window.innerHeight;
  maxPortraitHeight = window.innerWidth;
}

// Custom Orientation Listener
var myInterval;
//
function listen(){
  myInterval = setInterval(listener, listenerInterval);
}
function stopListening() {
  clearInterval(myInterval);
}
function listener() {
  if (portrait()) {
    current = 'portrait';
  } else {
    current = 'landscape';
  }
  if (current !== last) {
    last = current;
    stopListening();
    setTimeout(function() {
      orientationChange();
      listen();
    }, timeout);
  } else {
    orientationChange();
  }
}

function orientationChange() {
  if(current === 'portrait') {
    if (window.innerHeight < maxPortraitHeight) {
      maxPortraitHeight = window.innerHeight;
    }
    lockHeight(maxPortraitHeight);
    lockPosition(maxPortraitHeight);
  } else {
    if (window.innerHeight < maxLandscapeHeight) {
      maxLandscapeHeight = window.innerHeight;
    }
    lockHeight(maxLandscapeHeight);
    lockPosition(maxLandscapeHeight);
  }
}

function portrait() {
  return Math.abs(window.orientation) % 180 === 0;
};



if (isMobileDevice) {
  orientationChange();
  listen();
}
