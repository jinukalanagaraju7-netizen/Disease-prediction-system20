function registerUser(){

let user=document.getElementById("newuser").value;
let pass=document.getElementById("newpass").value;

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created");

window.location="login.html";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("username");
let savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}else{

alert("Invalid Login");

}

}

function predictDisease(symptom){

let disease="General Disease";

if(symptom=="fever") disease="Viral Fever";
else if(symptom=="cough") disease="Common Cold";
else if(symptom=="headache") disease="Migraine";
else if(symptom=="vomiting") disease="Food Poisoning";
else if(symptom=="cold") disease="Flu";
else if(symptom=="fatigue") disease="Anemia";

document.getElementById("resultBox").innerHTML=
"Possible Disease: "+disease;

drawChart(disease);

}

function drawChart(disease){

const ctx=document.getElementById("chart");

new Chart(ctx,{

type:"pie",

data:{

labels:[disease,"Other Diseases"],

datasets:[{

data:[75,25],

backgroundColor:["red","blue"]

}]

}

});

}
