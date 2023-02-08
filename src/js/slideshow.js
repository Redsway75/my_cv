  var images = [
    "img/montains.svg",
    "img/winter.svg",
    "img/Motion-Background.svg",
    "img/paisagem.svg",
    "img/gravity.svg"
  ];

  var currentImage = 0;

function nextImage() {
  currentImage++;
  if (currentImage == images.length) {
    currentImage = 0;
  }

  $('.background-container').fadeOut(1000, function() {
    $(this).css('background-image', 'url(' + images[currentImage] + ')');
    $(this).fadeIn(2000);
  });
}

$(document).ready(function() {
  setTimeout(nextImage, 1000);
  setInterval(nextImage, 10000);
});

