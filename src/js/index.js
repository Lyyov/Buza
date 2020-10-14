// Header & navbar & footer

$(function() {
  var burger = $(".burger");
  var menuMobile = $(".menuMobile");

  if (screen.width < 768) {
    $(document).mouseup(function(e) {
      if (
        !burger.is(e.target) &&
        !menuMobile.is(e.target) &&
        menuMobile.has(e.target).length === 0
      ) {
        $(menuMobile).hide(300);
      }
    });
    $(burger).on("click", function(e) {
      $(menuMobile).toggle(300);
    });
  }
});

// Sliders //

$(function() {
  let defaultSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    dots: false,
    speed: 1000,
  };

  $(".sliderHome").slick({
    ...defaultSettings,
    dots: true,
    fade: true,
  });

  $(".sliderTopSales").slick({
    ...defaultSettings,
    arrows: true,
    slidesToShow: 3,
    nextArrow: $("#slickPrevTopSales"),
    prevArrow: $("#slickNextTopSales"),
  });
  $(".sliderNewProducts").slick({
    ...defaultSettings,
    arrows: true,
    slidesToShow: 3,
    nextArrow: $("#slickNextNew"),
    prevArrow: $("#slickPrevNew"),
  });
});

// animations //

(function() {
  let header = document.getElementById("header");

  window.addEventListener("scroll", scrollThrottler, false);

  let scrollTimeout;
  function scrollThrottler() {
    header.classList.add('isScrolling');
    if ( !scrollTimeout ) {
      scrollTimeout = setTimeout(function() {
        scrollTimeout = null;
        actualScrollHandler();
       }, 200);
    } 
  }

  function actualScrollHandler() {
    header.classList.remove('isScrolling');
  }

}());

// Modal Gallery //

(function() {
  const galleryModal = document.getElementById("galleryModal");
  
  $(document).on('click', '.zoomImg', function () {
    galleryModal.modal("show")
  })

}());

