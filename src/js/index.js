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
    speed: 500,
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

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//click the image and a scaled version of the full size image will appear
$(".lightbox").click(function(event) {
  event.preventDefault();
  console.log("dd");
  var imageLocation = $(this).attr("href");

  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //show the overlay
  $overlay.show();
});

$("#overlay").click(function() {
  $("#overlay").hide();
});
