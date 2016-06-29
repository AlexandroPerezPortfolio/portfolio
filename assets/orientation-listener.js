// Listen to orientation changes using media queries

/*  references
    https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    https://davidwalsh.name/orientation-change */

/*  Requirements: jQuery */

var Device = function() {
  // public properties
  this.barHeight = screen.height - window.innerHeight;

  // private variables
  var orientation = getOrientation(screen.width, screen.height); // "landscape" or "portrait"
  var onOrientationChangeFunction = function(){}; // function to execute when orientation changes

  // privileged methods
  this.getOrientation = function() {
    return orientation;
  };

  this.addOrientationChangeListener = function(fn) {
    onOrientationChangeFunction = fn;
  };

  this.updateState = function() {
    if (orientation !== getOrientation(screen.width, screen.height)) {
      orientation = getOrientation(screen.width, screen.height);
      onOrientationChange(onOrientationChangeFunction);
    }
  };

  // private methods
  function onOrientationChange(fn) {
    fn();
  }

  // construcor code (always executes at instantiation)
  window.addEventListener("resize", function(){
    device.updateState();
  });
};

// Useful functions
function getOrientation(width, height) {
  if (width > height){
    return "landscape";
  } else {
    return "portrait";
  }
}
function isMobileDevice() {
  var ua = navigator.userAgent.toLowerCase();
  var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
  return android || iPhone || iPad;
}

var device = new Device();

device.addOrientationChangeListener(function() {
  var height = "100vh";
  if (isMobileDevice()) {
    height = screen.height - device.barHeight;
    height = height.toString() + "px";
  }
  $("header").css("height", height);
  $("a").text(device.barHeight.toString());
});
