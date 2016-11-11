/* SMOOTH SCROLL */
/* jQuery Required */
/* Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
var offset = 66;
// reffer to navigation.css -> media queries for numbers
if ((screen.width <= 434) || ( (screen.height < screen.width) && (screen.height <= 412) ) ) {
  offset -= 10;
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 1000);
        return false;
      }
    }
  });
});
