const menuBtn = document.querySelector('.burger-btn');//чистый js
const menu = document.querySelector('.menu nav');
const closeBtn = document.querySelector('.close');
/* const posterBtn = document.querySelector('.poster-btn'); */

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
$('.poster-slider').slick();//задаю функцию доллар, внутри селектор кот меня интересует,вызываю метод slick
$('.ours-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
   /*  autoplay: true, */
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      /*   {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        } */
      ]
});