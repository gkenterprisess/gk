document.querySelector('.mainscreen').style.backgroundColor='rgb(0,0,0,0.47)'
let menu=document.querySelector('.menu');
let menubutton=document.querySelector('.fa-bars');
menubutton.addEventListener("click",function(){
  
menu.classList.toggle('hide');

})