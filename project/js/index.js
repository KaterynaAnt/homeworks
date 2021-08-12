   $(document).ready(function(){
      
   function initSlider() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        cssEase: 'linear'  
    });
   }
   initSlider();
  });

  $(document).ready(function(){
      
    function initSlider() {
        $('.responsive').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            ]
          });
    }
    initSlider();
   });

