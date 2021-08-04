
  $(document).ready(function(){
   function initSlider() {
       console.log('.slider');
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'  
    });
   }
   initSlider();
  });