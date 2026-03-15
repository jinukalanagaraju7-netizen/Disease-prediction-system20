function registerUser(){

let user=document.getElementById("newuser").value;
let pass=document.getElementById("newpass").value;

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created Successfully");

window.location="index.html";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("username");
let savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}
else{

alert("Invalid Username or Password");

}

}

function predict(symptom){

let disease="General Disease";

if(symptom=="fever") disease="Viral Fever";
if(symptom=="cough") disease="Common Cold";
if(symptom=="headache") disease="Migraine";
if(symptom=="vomiting") disease="Food Poisoning";

document.getElementById("result").innerHTML=
"Possible Disease: "+disease;

}
