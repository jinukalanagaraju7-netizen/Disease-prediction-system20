function predictDisease(){

let checkboxes=document.querySelectorAll("input[type=checkbox]:checked");

let symptoms=[];

checkboxes.forEach(cb=>{
symptoms.push(cb.value);
});

let disease="Unknown Disease";

/* Disease logic */

if(symptoms.includes("fever") && symptoms.includes("cough")){
disease="Flu";
}

else if(symptoms.includes("fever") && symptoms.includes("rash")){
disease="Dengue";
}

else if(symptoms.includes("headache") && symptoms.includes("nausea")){
disease="Migraine";
}

else if(symptoms.includes("stomachpain") && symptoms.includes("vomiting")){
disease="Food Poisoning";
}

else if(symptoms.includes("chestpain") && symptoms.includes("breathing")){
disease="Heart Problem";
}

else if(symptoms.includes("cold") && symptoms.includes("sneezing")){
disease="Common Cold";
}

else if(symptoms.includes("fatigue") && symptoms.includes("jointpain")){
disease="Arthritis";
}

document.getElementById("result").innerHTML=
"Possible Disease: "+disease;

}
