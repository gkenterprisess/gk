document.querySelector('.mainscreen').style.backgroundColor="rgba(0,0,0,0.47)";
let menubutton=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');
let images=[
    {
        image:'../gk/images/img/397x300/02.jpg'
    },
    {
        image:'../gk/images/imga/rimnew.jpg'
    },
    {
        image:'../gk/images/imga/kolimini.jpg'
    },
    {
        image:'../gk/images/imga/newminii.jpg'
    },
    {
        image:'../gk/images/img/970x647/01.jpg'
    }
];
let picture=document.querySelector('.slider-img');
let left=document.querySelector('.leftbutton');
let right=document.querySelector('.rightbutton');
let indexss=images.length-1;
left.addEventListener('click',function(){
indexss--;
if(indexss<0){
    indexss=images.length-1;
    picture.src=images[indexss].image;
}
else{
        picture.src=images[indexss].image;
}
});
right.addEventListener('click',function(){
    indexss++;
    if(indexss>images.length-1){
        indexss=0;
        picture.src=images[indexss].image;
    }
    else{
        picture.src=images[indexss].image;
    }
})
window.addEventListener('load',function(){
    picture.src=images[1].image;
});
menubutton.addEventListener("click",function(){
menu.classList.toggle('hide');

if(menubutton.classList.contains('fa-bars')){
    menubutton.classList.add('fa-xmark');
    menubutton.classList.remove('fa-bars');
}
else{
    menubutton.classList.add('fa-bars');
    menubutton.classList.remove('fa-xmark')
}
})