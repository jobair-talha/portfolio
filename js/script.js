// services Slider
$('.service-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left"></i>',
    nextArrow: '<i class="fas fa-arrow-right"></i>',
  });
  
// Portfolio mixitup
  var mixer = mixitup('.click');
  
  // testimonial slider
  $('.testi-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left"></i>',
    nextArrow: '<i class="fas fa-arrow-right"></i>',
  });