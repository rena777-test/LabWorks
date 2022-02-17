const menuBtn = document.querySelector('.burger-btn');//чистый js
const menu = document.querySelector('.menu nav');
const closeBtn = document.querySelector('.close');
const posterBtn = document.querySelector('.poster-btn');


menuBtn.addEventListener('click', function(){
    console.dir(menu);
    menu.style.transform = 'translateX(0%)';
});

closeBtn.addEventListener('click', function(){
    console.dir(menu);
    menu.style.transform = 'translateX(-100%)';
});

/* posterBtn.addEventListener('click', function(){
    posterBtn.style.color = 'brown';
    $('.poster-slider').slick();
});
 */
//выполняю подключение слайдера
$('.poster-slider').slick(
  {
    arrows:true,
    accessibility:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:false,
    variableWidth:false
  }
);//задаю функцию доллар, внутри селектор кот меня интересует,вызываю метод slick
$('.ours-slider').slick({

  adaptiveHeight:true ,  //чтобы заработало надо slick-track включить align-items:flex-start
  slidesToShow:4,
  slidesToScroll:1,
  speed:1000,
  easing:'ease',
  initialSlide: 0,
  infinite:true,
  autoplay:true,
  autoplaySpeed:1000,
  pauseOnFocus:true,
  pauseOnHover:true,
  pauseOnDotsHover:true,
  draggable:true, // для ПК //если это св-во, то верхние три не будут работать
  swipe:true,// для телефона//
  touchThreshold:5, 
  touchMove:true, //при зажатой мышке не потянешь,а при true можно шевелить влево вправо
  waitForAnimate:true,
  centerMode:false,  // при добавлении появляется класс slick-center
  variableWidth:true
 /*    
   responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable:true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            draggable:true
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            draggable:true
          }
        }
       ]  */
});


/* new WOW({
  animateClass: 'animate__animated'
}).init(); */
