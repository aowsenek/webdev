function dropdown1(){
var dropdown1 = document.getElementById("dropdowndiv");
console.log(dropdown1);
dropdown1.innerHTML = '<select id="dd1" onclick="dropdown2()"><option value="">Select</option><option value="bank">Bank</option><option value="cc">Credit Card</option><option value="db">Debit Card</option><option value="matress">Under my Mattress</option></select>';
}

function dropdown2(){
var dd2 = document.getElementById("dropdowndiv2");
console.log(dropdown2);
var value = document.getElementById("dd1").value;
var bank = ["JP Morgan Chase& Co.","Bank of America","Capital One"];
var cc = ["MasterCard","Visa","American Express","Discover"];
var db = ["MasterCard","Visa","American Express"];
var naame=value;

if (value.toString() == "bank"){ value = bank;}
else if (value.toString() == "cc"){value = cc;}
else if (value.toString() == "db"){value = db;}
//else {value = mattress;}
dd2.innerHTML = '<select id="dd2" onclick="boxes()"><option>Select</option></select><div id="boxes"></div>';

var innerstuff = document.getElementById("dd2");

for(var i =0; i <value.length; i++){
console.log(value[i]);
innerstuff.innerHTML += '<option value='+naame+'>'+value[i]+'</option>';
}
}

function boxes(){
console.log("boxes");
var words;
var type = document.getElementById("dd2").value;  
console.log ("start boxes");
console.log(type);
if (type.toString() =="bank"){
words = ["'Routing Number'","PIN","Password"];
}
else if (type.toString() == "cc"){
words = ["'Credit Card Number'", "CVC", "'Expiration Date'"];
}
else if (type.toString() == "db"){
words = ["'Debit Card Number'", "CVC", "'Expiration Date'","PIN"];
}
else {}
var box = document.getElementById("boxes");
for(var i = 0;i<words.length;i++){
box.innerHTML+= '<input type="text" placeholder='+words[i]+'><br>'; 
}
}

function fulllist1(){
var dropdown1 = document.getElementById("dropdowndiv");
console.log(dropdown1);
dropdown1.innerHTML = '<select multiple="multiple" size="3" id="dd1" onclick="fulllist2()"><option value="">Select</option><option value="bank">Bank</option><option value="cc">Credit Card</option><option value="db">Debit Card</option><option value="matress">Under my Mattress</option></select>';
}

function fulllist2(){
var dd2 = document.getElementById("dropdowndiv2");
console.log(dropdown2);
var value = document.getElementById("dd1").value;
var bank = ["JP Morgan Chase& Co.","Bank of America","Capital One"];
var cc = ["MasterCard","Visa","American Express","Discover"];
var db = ["MasterCard","Visa","American Express"];
var naame=value;
console.log(value);
if (value.toString() == "bank"){ value = bank;}
else if (value.toString() == "cc"){value = cc;}
else if (value.toString() == "db"){value = db;}
//else {value = mattress;}
dd2.innerHTML = '<select multiple="multiple" size="'+value.length+'"id="dd2" onclick="boxes()"><option>Select</option></select><div id="boxes"></div>';

var innerstuff = document.getElementById("dd2");

for(var i =0; i <value.length; i++){
console.log(value[i]);
innerstuff.innerHTML += '<option value='+naame+'>'+value[i]+'</option>';
}
}
