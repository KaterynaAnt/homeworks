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