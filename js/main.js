$(function(){

    $('.slider__inner').slick({
   arrows:false,
   dots:true
    });

    $('.works__inner').slick({
   slidesToShow:4,
   slidesToScroll:2,
   prevArrow: '<button type="button" class="slick-arrow slick-prev"> <img src="img/work/slider-left.svg" alt=""> </button>',
   nextArrow:'<button type="button" class="slick-arrow slick-next"> <img src="img/work/slider-right.svg" alt=""> </button>'
       });
  });