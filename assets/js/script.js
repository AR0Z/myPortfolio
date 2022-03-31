AOS.init();

var elem = document.querySelector('.project-car');
var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: false,
    fullscreen: false
});