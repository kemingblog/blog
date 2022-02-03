window.onscroll = function() {
  scroll();
};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll").style.width = scrolled + "%";
  document.getElementById("progress").innerHTML = Math.round(scrolled) + "%";
  if(Math.round(scrolled) >= 9) {
    document.getElementById("scroll-div").style.position = "fixed";
    document.getElementById("scroll-div").style.marginTop = "-80px";
  } else {
    document.getElementById("scroll-div").style.position = "unset";
    document.getElementById("scroll-div").style.marginTop = "unset";
  }
}