document.querySelector('.mainscreen').style.backgroundColor="rgba(0,0,0,0.47)";
let menubutton=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');

menubutton.addEventListener("click",function(){
menu.classList.toggle('hide');

if(menubutton.classList.contains('fa-bars')){
    menubutton.classList.add('fa-xmark');
    menubutton.classList.remove('fa-bars');
}
else{
    menubutton.classList.add('fa-bars');
    menubutton.classList.remove('fa-xmark');
}
});