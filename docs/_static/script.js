function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", function(event) {
  ///////////////////////////////////////
  // rotate images in images-rotate directory:
  var ind = getRandomInt(images_rotate.length);
  var info = images_rotate[ind];
  var img_src = "_static/images-rotate/" + info.image;
  var caption = info.caption;
  var link = "https://matplotlib.org/stable/" + info.link;
  var html = '<a href="' + link + '">' +
    '<img class="imrot-img" src="' + img_src + '" aria-labelledby="sample-plot-caption"/>' +
    '<div class="imrot-cap" id="sample-plot-caption">' + caption + '</div>' +
    '</a>';
  document.getElementById('image-rotator').innerHTML = html;
});
