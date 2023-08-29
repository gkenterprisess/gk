document.querySelector('.mainscreen').style.backgroundColor="rgba(0,0,0,0.47)";
let menubutton=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');
let images=[
    {
        image:'images/imga/infra.jpg'
    },
    {
        image:'images/imga/infra2.jpg'
    },
    {
        image:'images/img/970x647/infra1.JPG'
    },
    {
        image:'images/imga/machinemini.jpg'
    },
    {
        image:'images/img/970x647/infra5.jpg'
    },
    {
        image:'images/imga/rwawm.jpg'
    },
    {
        image:'images/img/970x647/infra9.jpg'
    },
    {
        image:'images/img/970x647/infra8.jpg'
    },
    {
        image:'images/imga/newraw.jpg'
    },
    {
        image:'images/imga/pack.jpg'
    },
    {
        image:'images/imga/rimnew.jpg'
    },
    {
        image:'images/imga/boki.jpg'
    },
    {
        iamge:'images/imga/infras.jpg'
    }
];
let picture=document.querySelector('.slider-img');
let left=document.querySelector('.leftbutton');
let right=document.querySelector('.rightbutton');
let indexss=images.length-1;
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
        picture.src=images[4].image;
    });