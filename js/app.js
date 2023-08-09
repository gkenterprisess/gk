document.querySelector('.mainscreen').style.backgroundColor='rgb(0,0,0,0.47)'
let menu=document.querySelector('.menu');
let menubutton=document.querySelector('.fa-bars');
let leftbutton=document.querySelector('.leftarrow');
let rightbutton=document.querySelector('.rightarrow');
let img=document.querySelector('.pics-sample');


let images=[
    {
        image:'../gk//images/img/397x300/02.jpg'
    },
    {
        image:'../gk/images/imga/rimmini.jpg'
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

let indexs=images.length-1;
    leftbutton.addEventListener('click',function(){
        indexs--;
        if(indexs<0){
            indexs=images.length-1;
            img.src=images[indexs].image;
            console.log(indexs);
        }
        else{
            img.src=images[indexs].image;
            console.log(indexs);
        }
    })

    rightbutton.addEventListener('click',function(){
        indexs++;
        if(indexs>images.length-1){
            indexs=0;
            img.src=images[indexs].image;
            console.log(indexs);
        }
        else{
            img.src=images[indexs].image;
            console.log(indexs);
        }
    })

window.addEventListener('load',function(){
    img.src=images[indexs].image;
})
menubutton.addEventListener("click",function(){
menu.classList.toggle('hide');
if(menubutton.classList.contains('fa-xmark')){
    menubutton.classList.remove('fa-xmark');
    menubutton.classList.add('fa-bars');
}
else{
    menubutton.classList.remove('fa-bars')
    menubutton.classList.add('fa-xmark');

}
})