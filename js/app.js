document.querySelector('.mainscreen').style.backgroundColor='rgb(0,0,0,0.47)'
let menu=document.querySelector('.menu');
let menubutton=document.querySelector('.fa-bars');
// let header=document.querySelector('.header');
// // let distaance=header.offSetTop;
// window.addEventListener('scroll',function(){
//     if(window.scrollY>0){
//         header.classList.toggle('sticky');
//     }
// })
menubutton.addEventListener("click",function(){
  
menu.classList.toggle('hide');

})