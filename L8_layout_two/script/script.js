const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu nav');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', function(){
    console.dir(menu);
    menu.style.transform = 'translateX(0%)';
});

closeBtn.addEventListener('click', function(){
    console.dir(menu);
    menu.style.transform = 'translateX(-100%)';
});