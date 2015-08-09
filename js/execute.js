$('#banner').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// function makemiddle()
// {
//   var h1,h2,h3;
//   h1=document.getElementById(".main-logo").style.height;
//   h2=document.getElementById("#anni").style.height;
//   h3=(h1-h2)/2;
//   document.getElementById('#anni').style.marginTop=h3;
// }