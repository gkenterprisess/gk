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

submitbt.setAttribute('disabled','true');
function validationinjs(){
if(email.value.includes('@')&&name.value!==""&&number.value!==""){
    submitbt.removeAttribute('disabled');  
  
}
else{
    console.log("nopes");
}
};
name.addEventListener('input',validationinjs);
email.addEventListener('input',validationinjs);

let { data: user_data, error } = await supabase
  .from('user_data')
  .select('*')
console.log(user_data);
number.addEventListener('input',validationinjs);


    submitbt.addEventListener('click',async function(){

        const { data, error } = await supabase
        .from('user_data')
        .insert([
          { fullname:name.value,emailid:email.value,phone_number:number.value,query:queryu.value },
        ])
        .select();
       
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