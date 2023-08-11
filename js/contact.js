import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
const supabaseUrl = 'https://zdtgrrarkopvtaznsphj.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdGdycmFya29wdnRhem5zcGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NTIxMTUsImV4cCI6MjAwNzMyODExNX0.5EhWwiofCvhbeaLCEzwEWrF4wAJJQEJPN4-n14Ji8OU";
const supabase = createClient(supabaseUrl, supabaseKey);

document.querySelector('.mainscreen').style.backgroundColor="rgba(0,0,0,0.47)";
let menubutton=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');
let name=document.querySelector('#name');
let email=document.querySelector('#email');
let number=document.querySelector('#number');
let queryu=document.querySelector('#query');
let submitbt=document.querySelector('#submit');
submitbt.addEventListener('click',async function(){

const { dasta, error } = await supabase
.from('user_data')
.insert([
  { fullname:name.value,emailid:email.value,phone_number:number.value,query:queryu.value },
])
.select()

});


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