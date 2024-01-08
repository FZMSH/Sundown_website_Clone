var fixed_elem = document.querySelector('.fixed-element');
var elem_container =document.querySelector('.elem-container');

elem_container.addEventListener('mouseenter',function(){
   fixed_elem.style.display = 'block'
});

elem_container.addEventListener('mouseleave',function(){
    fixed_elem.style.display = 'none'
 });

 var elems = document.querySelectorAll('#elem');
 elems.forEach(function(e){
    e.addEventListener('mouseenter',function(){
        var image = e.getAttribute('data-image');
        fixed_elem.style.backgroundImage = `url(${image})`;
    })
 })



 function loco(){
   const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true
  });
  
 }

function swipperAnimation(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
}

swipperAnimation();


function menuAnimation(){
   var navimg = document.querySelector('nav img')
var menu = document.querySelector('nav h3')
var full = document.querySelector('#full-scr')
var flag =0
menu.addEventListener('click',function(){
   if(flag == 0){
      full.style.top = 0
      navimg.style.opacity = 0
      flag = 1
   }
   else{
      full.style.top = "-100%"
      navimg.style.opacity = 1
      flag = 0

   }
 
})
}
menuAnimation();

document.querySelector('#loader')
setTimeout(function(){
 loader.style.top = "-100%"
},4000)