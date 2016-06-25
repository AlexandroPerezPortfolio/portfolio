// fix for vh sizes in android devices (where if the browswer hides the top bar
// makes the header increase its viewport size and makes the site jumpy)

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
  var height = $(window).height() + 60;
  console.log ('document height = :', height);
  height = height.toString() + "px";

  $('.vh-fix').css("height", height);
}
