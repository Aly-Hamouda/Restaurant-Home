$(document).ready(function(){

  /* nav button click event */
  var clicked = false;
  var $header = $('header');
  $header.find('.nav-btn').click(function(){
    var $this = $(this);
    if (!clicked) {
      clicked = true;
      $this.parent().toggleClass('active');
      setTimeout(function (){
        clicked = false;
      }, 1450);
    }
  });

  $(document).on('click', function(e){
    var clickover = $(e.target);
    if (!clickover.closest('header').length && $('nav').hasClass('active')) {
      $('nav').removeClass('active');
    }
  });

  var $mainSection = $('.main-section');
  $(window).scroll(function(){
    if($(window).scrollTop() >= $mainSection.height() - 100){
      $header.addClass('sticky');
    } else{
      $header.removeClass('sticky');
    }
  });

  //Menu Slider function {Begin}

  function menuSlider() {
    var $sliderContainer = $('.menu-slider');
    var $slider = $sliderContainer.find('.slider');
    var $sliderBanner = $sliderContainer.find('.slider-banner');
    var $sliderItems = $sliderBanner.find('.slider-item');
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find('.arrow.next');
    var $prevBtn = $sliderContainer.find('.arrow.prev');

    var slidesToShow = 3;
    var activeSlides = slidesToShow;

    function responsiveSlides(){
      activeSlides -= slidesToShow;
      if ($(window).width() <= 991 && $(window).width() > 550) {
        slidesToShow = 2;
      }else if ($(window).width() <= 550) {
        slidesToShow = 1;
      }else {
        slidesToShow = 3;
      }
      activeSlides += slidesToShow;
    }responsiveSlides();

    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

    /*
      >>> To calculate items width and set the banner's width to it
      >>> To calculate the width when resizing the window of browser
    */
    var itemWidth;
    var itemsWidth;
    function fixWidth() {
      itemWidth = $('.menu-slider .slider-item').outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);
    }

    fixWidth();

    function leftCalc() {
      return itemWidth * itemMove;
    }

    //Ubdate itemWidth every time the screen changed >> Begin <<
    $(window).resize(function () {
      responsiveSlides();
      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
      fixWidth();
      $sliderBanner.css('left', -leftCalc());
    });
    //Ubdate itemWidth every time the screen changed >> Begin <<

    var left = 0;
    var itemMove = 0;

    var clicked = false;

    function checkStatus() {
      //This function check if there is no slides to next or previous BTN to make them disabled
      //Next btn Check
      if (activeSlides == itemsLength) {
        $nextBtn.addClass('disabled');
      }else {
        $nextBtn.removeClass('disabled');
      }

      //Prev btn Check
      if (activeSlides == slidesToShow) {
        $prevBtn.addClass('disabled');
      }else {
        $prevBtn.removeClass('disabled');
      }
    }checkStatus();


    $nextBtn.click(function () {
      if (!clicked) {

        if (activeSlides != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc();
          $sliderBanner.css('left', left);
          activeSlides++;
          setTimeout(function() {
            clicked = false;
          }, 400);
          //to check if it's disabled or not
          checkStatus();
        }
      }
    });

    $prevBtn.click(function () {
      if (!clicked) {

        if (activeSlides > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css('left', left);
          activeSlides--;
          setTimeout(function() {
            clicked = false;
          }, 400);
          //to check if it's disabled or not
          checkStatus();
        }

      }
    });

  }

  menuSlider();

  //Menu Slider function {END}

  //Chief Slider function {Begin}

  function chiefSlider() {
    var $sliderContainer = $('.chief-slider');
    var $slider = $sliderContainer.find('.slider');
    var $sliderBanner = $sliderContainer.find('.slider-banner');
    var $sliderItems = $sliderBanner.find('.slider-item');
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find('.arrow.next');
    var $prevBtn = $sliderContainer.find('.arrow.prev');

    var slidesToShow = 1;
    var activeSlides = slidesToShow;

    // function responsiveSlides(){
    //   activeSlides -= slidesToShow;
    //   if ($(window).width() <= 991 && $(window).width() > 550) {
    //     slidesToShow = 2;
    //   }else if ($(window).width() <= 550) {
    //     slidesToShow = 1;
    //   }else {
    //     slidesToShow = 3;
    //   }
    //   activeSlides += slidesToShow;
    // }responsiveSlides();

    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

    /*
      >>> To calculate items width and set the banner's width to it
      >>> To calculate the width when resizing the window of browser
    */
    var itemWidth;
    var itemsWidth;

    function fixWidth() {
      itemWidth = $('.chief-slider .slider-item').outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);
    }

    fixWidth();

    function leftCalc() {
      return itemWidth * itemMove;
    }

    //Ubdate itemWidth every time the screen changed >> Begin <<
    $(window).resize(function () {

      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
      fixWidth();
      $sliderBanner.css('left', -leftCalc());

    });
    //Ubdate itemWidth every time the screen changed >> Begin <<

    var left = 0;
    var itemMove = 0;

    var clicked = false;

    function checkStatus() {
      //This function check if there is no slides to next or previous BTN to make them disabled
      //Next btn Check
      if (activeSlides == itemsLength) {
        $nextBtn.addClass('disabled');
      }else {
        $nextBtn.removeClass('disabled');
      }

      //Prev btn Check
      if (activeSlides == slidesToShow) {
        $prevBtn.addClass('disabled');
      }else {
        $prevBtn.removeClass('disabled');
      }
    }checkStatus();


    $nextBtn.click(function () {
      if (!clicked) {

        if (activeSlides != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc();
          $sliderBanner.css('left', left);
          activeSlides++;
          setTimeout(function() {
            clicked = false;
          }, 400);
          //to check if it's disabled or not
          checkStatus();
        }
      }
    });

    $prevBtn.click(function () {
      if (!clicked) {

        if (activeSlides > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css('left', left);
          activeSlides--;
          setTimeout(function() {
            clicked = false;
          }, 400);
          //to check if it's disabled or not
          checkStatus();
        }

      }
    });

  }

  chiefSlider();

  //Chief Slider function {END}



});
