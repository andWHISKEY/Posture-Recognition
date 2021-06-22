

//webpage.js file

 

//----------------------------------

 

//SMOOTH SCROLL

 

// $(function() {

//   smoothScroll(1776); //original = 1000 

// });

 

function smoothScroll(duration) {

  $('a[href^="#"]').on('click', function(event) {

 

    var target = $($(this).attr('href'));

 

    if (target.length) {

      event.preventDefault();

      $('html, body').animate({

        scrollTop: target.offset().top

      }, duration);

    }

  });

}

 

//----------------------------------

 

//animations for work section -- 

$(".thumb-overlay").hide();

$(".thumb-unit").hover(function() {

  $(this).find(".thumb-overlay").toggle();

});

//"this" is refering to the thing you are hovering over--

 

//---------------------------------

//----------------------------------

 

//PAGE SLIDER ANIMATION --

 

$(function() {

  //might have to be joined with "scroll" function above 

  pageSlider();

});

 

function pageSlider() {

  //in the video, targets "thumb-units" in the work section--

  $(".toWriteSection").click(function() {

    $(".slider-page").css("left", "-100%");

    $(".write-container").show();

  });

}

$(".return-arrow").click(function() {

  $(".slider-page").css("left", "0%");

  $(".write-container").hide(1000); //slider wont disappear but fade out - maintains consistency of page slide -- 800 is from the transition in slider-page section//

});

 

//----------------------------------

//CLIENT FUNCTIONS -- 

//For Client Quote Animation

$(function() {

  //might have to be joined with "scroll & pageSlider" function above 

  clientSlider();

 

});

//could import this part above into the main function at the top(Like C++)

function clientSlider() {

 

  $(".client-unit").first().addClass("active-client-unit"); //"active-client-unit

  $(".client-logo").first().addClass("active-client-logo"); //"active-client-logo

 //

 

  $(".client-logo").click(function() {

    var $this = $(this),

      $siblings = $this.parent().children(),

      position = $siblings.index($this);

 

    //remove "active-class" from all "client-unit" sections // then find a specific number/position using  "eq" of the object of all that hold that class // and add the "active-client-unit" class for the "client unit" and the "active-client-logo" class for the "client-logo" section (i.e. their parent sections) -probably redundant but allows animation only for client-unit section//

    $(".client-unit").removeClass("active-client-unit").eq(position).addClass("active-client-unit").addClass("animated zoomIn");

    $(".client-logo").removeClass("active-client-logo").eq(position).addClass("active-client-logo");

 

  });

 

  $(".client-control-next, .client-control-prev").click(function() {

    var $this = $(this),

      currActiveClient = $(".client-slider").find(".active-client-unit"),

      //currActiveLogo = $(".clients-logo").find("active-client-logo"),

      positionC = $(".client-slider").children().index(currActiveClient),

      //positionL = $(".clients-logo").children().index(currActiveLogo),

      clientNum = $(".client-unit").length;

    //logoNum = $(".client-logo").length; 

 

    if ($this.hasClass("client-control-next")) {

      if (positionC < clientNum - 1) {

 

        $(".active-client-unit").removeClass("active-client-unit").next().addClass("active-client-unit").addClass("animated zoomIn");

        $(".active-client-logo").removeClass("active-client-logo").next().addClass("active-client-logo");

 

      } else {

 

        $(".client-unit").removeClass("active-client-unit").first().addClass("active-client-unit").addClass("animated zoomIn");

        $(".client-logo").removeClass("active-client-logo").first().addClass("active-client-logo");

 

      }

    } else {

 

      if (positionC === 0) {

 

        $(".client-unit").removeClass("active-client-unit").last().addClass("active-client-unit").addClass("animated zoomIn");

        $(".client-logo").removeClass("active-client-logo").last().addClass("active-client-logo");

 

      } else {

 

        $(".active-client-unit").removeClass("active-client-unit").prev().addClass("active-client-unit").addClass("animated zoomIn");

        $(".active-client-logo").removeClass("active-client-logo").prev().addClass("active-client-logo");

      }

 

    }

  });

 

}

//--------------------------------------

 

//----------------------------------

//----------------------------------