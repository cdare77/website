// DOM ready
$(function() {
  var originalBGfooter = $("body").css("background-color"),
      x, y, xy, bgWebKit, bgMoz,
      lightColor = "rgba(255,255,255,0.75)",
      gradientSize = 125;

  $("body").mousemove(function(e) {
    x  = e.pageX - this.offsetLeft;
    y  = e.pageY - this.offsetTop;
    xy = x + " " + y;
    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGfooter;
    bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGfooter + " " + gradientSize + "px)";

    $(this)
      .css({ background: bgWebKit })
      .css({ background: bgMoz });
  }).mouseleave(function() {
    $(this).css({ background: originalBGfooter });
  });
});
