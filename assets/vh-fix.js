// fix for vh unit sizes in mobile devices (where if the browswer hides or
// resizes the top bar it makes the header increase its viewport size and makes
// the site jumpy)

var ua = navigator.userAgent.toLowerCase();
var android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
var iPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
var iPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
if(android || iPhone || iPad) {
  var height = $(window).height();
  height = height.toString() + "px";
  $('header').css("height", height);
}
