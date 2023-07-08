$(function(){
    //BANNER SLICK SLIDER STARTS HERE
    $('#banner').slick({
        arrows:false,
        dots:true,
        autoplay:true
      });
    //BANNER SLICK SLIDER ENDS HERE
    //TEAM EXPART SLICK SLIDER STARTS HERE
    $('.teaminfoInner').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '.leftarrow',
      nextArrow: '.rightarrow',
    });
    //TEAM EXPART SLICK SLIDER ENDS HERE
    //TESTIMONIAL SLICK SLIDER STARTS HERE
    $('.mainCards').slick({
      arrows: false,
      dots: true,
    });
    //TESTIMONIAL SLICK SLIDER ENDS HERE
})