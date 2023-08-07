document.querySelector('.mainscreen').style.backgroundColor='rgb(0,0,0,0.2)'
let menu=document.querySelector('.menu');
let menubutton=document.querySelector('.fa-bars');
menubutton.addEventListener("click",function(){
    // header.style.height='fit-content';
menu.classList.toggle('hide');

})