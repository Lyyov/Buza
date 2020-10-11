$(function () {
  var burger = $('.burger');
  var menuMobile = $('.menuMobile')
  var footerTitle = $(".footerTitle");
  var footerUl = $(".footerBloc").children("ul");
  var footerLine = $('.footerBloc').children('.line');

  if (screen.width < 768) {
    $(document).mouseup(function (e) {
      if (
        !burger.is(e.target) &&
        !menuMobile.is(e.target) &&
        menuMobile.has(e.target).length === 0
      ) {
        $(menuMobile).hide(300);
      }
    });
    $(burger).on("click", function (e) {
      $(menuMobile).toggle(300);
    });
  }
  if (screen.width < 768) {
    $(footerTitle).addClass("bcgPlusFooter");
    $(footerLine).remove();
    footerTitle.on("click", function (e) {
      footer(e);
    });
  }



  function footer(e) {
    $(footerTitle).removeClass("bcgMinusFooter");
    $(footerTitle).addClass("bcgPlusFooter");
    $(footerUl).css("height", "0");
    $(footerUl).css("padding-bottom", "0");
    if ($(e.target).hasClass("bcgPlusFooter")) {
      $(e.target).removeClass("bcgPlusFooter");
      $(e.target).addClass("bcgMinusFooter");
      $(e.target)
        .next(footerUl)
        .css("height", "auto");
      $(e.target)
        .next(footerUl)
        .css("padding-bottom", "20px");
    } else {
      $(e.target).addClass("bcgPlusFooter");
      $(e.target).removeClass("bcgMinusFooter");
      $(e.target)
        .next(footerUl)
        .css("height", "0");
      $(e.target)
        .next(footerUl)
        .css("padding-bottom", "0");
    }
  }
});

$(function () {

  $(".slideParteners").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: true,
    dots: false,
    variableWidth: true,
    speed: 500
  });
  $(document).ready(function () {
    var touchstartY = 0;
    var touchendY = 0;
    var dd = document.getElementById('cover')
    var menuMobile = $('.menuMobile')

    if (screen.width < 768) {
      dd.addEventListener('touchstart', function (event) {
        touchstartY = event.changedTouches[0].screenY;
      }, false);

      dd.addEventListener('touchend', function (event) {
        touchendY = event.changedTouches[0].screenY;
        handleGesure();
      }, false);
      function handleGesure() {
        var header = $('header');
        if (touchendY > touchstartY) {
          $(header).css('top', '0');
          $(menuMobile).css('top', '113px');
        }
        if (touchendY < touchstartY) {
          $(menuMobile).css('top', '53px');
          $(header).css('top', '-60px');
        }
      }
    }

  });

});


// filterFloor

$(function () {

  var filterBloc = document.querySelector('#filterBloc');
  var inputChecked = document.getElementsByName('floor');
  var filterButt = document.getElementById('filterSelect')
  var filterSelect = $("#filterSelect").children('span');
  var filterSelectOpen = $('.filterSelectOpen');
  var floorContainer = $('.floorContainer');
  filterFloor();
  function filterFloor(e) {
    for (var i = 0; i < inputChecked.length; i++) {
      if (inputChecked[i].checked) {
        $(filterSelect).text($(inputChecked[i]).next().children().text())
      }
    }
    closeFilter();
  }
  function floorCont() {
    $(floorContainer).removeClass('dspBlock');
    for (var i = 0; i < inputChecked.length; i++) {
      if (inputChecked[i].checked) {
        $(floorContainer[i]).addClass('dspBlock');
      }
    }
  }
  function filterOpen(e) {
    if (filterSelectOpen.hasClass('filterSelectValue')) {
      closeFilter();
    }
    else {
      filterSelectOpen.addClass('filterSelectValue')
    }
  }
  function closeFilter() {

    filterSelectOpen.removeClass('filterSelectValue')
  }

  $(document).mouseup(function (e) {
    var filterButt = $('#filterSelect').children();
    var filterButt2 = $('#filterSelect');
    if (
      !filterButt.is(e.target) &&
      !filterButt2.is(e.target) &&
      !filterSelectOpen.is(e.target) &&
      filterSelectOpen.has(e.target).length === 0
    ) {
      closeFilter();
    }
  });
  filterBloc.addEventListener('change', filterFloor);
  filterBloc.addEventListener('change', floorCont);
  filterButt.addEventListener('click', filterOpen);
});