$(function(){

  let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    
    /* Header fixed */
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset){
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    $("#nav_toggle").on("click",function(event){
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
  })

    /* Smooth scroll */
    $("[data-scroll]").on("click", function() {
      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
          scrollTop:  blockOffset
      }, 500);
  });


  /* Slider */
  $("[data-slider]").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    
      responsive: [
      {
        breakpoint: 770,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // {
      // // breakpoint: 1200,
      // // settings: {
      // //   infinite: true,
      // //   slidesToShow: 3,
      // //   slidesToScroll: 3,
      // // }
      // // },
        ]
  });
})




AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 2, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

