function loadWords(event){
	console.log(event);
	var start = document.getElementById("tree");
	//sentence = document.getElementById("sentence");
	var code = "";//first(start,code);
	readTextFile("../static/js/tenhundred.txt");
	start.innerHTML = first(words,code);
}
function first(words,code){
	//console.log(code);
	code += '<ul id="first" onmouseenter="dom(event.target, event.target.parentElement.children,0)" onmouseleave="undom(event.target)" onclick="sentence(event)" class="box unfade-element">';
	code += addWord(words);
	var num = Math.floor(Math.random()*3+1);
	for (var i =0; i < num; i ++){
		code = second(words,code);
	}
	code += "</ul>";
	//console.log(code);
	return code;
}
//onmouseenter="this.className=\'box fade-element\'"  onmouseleave="this.className=\'box unfade-element\'" 
function second(words,code){
	//console.log(code);
	code += '<ul id="second" onmouseenter="dom(event.target, event.target.parentElement.children,0)" onmouseleave="undom(event.target)" class="box unfade-element">';
	code += addWord(words);
	var num = Math.floor(Math.random()*3+1);
	for (var i =0; i < num; i ++){
		code = then(words,code);
	}
	code += '</ul>';
	//console.log(code);
	return code;
}
function then(words,code){
	//console.log(code);
	code += '<ul id="then" onmouseenter="dom(event.target,event.target.parentElement.children,0)" onmouseleave="undom(event.target)" class="box unfade-element">';
	code += addWord(words);
	var num = Math.floor(Math.random()*5+1);
	for (var i =0; i < num; i ++){
		code = last(words,code);
	}
	code += '</ul>';
	//console.log(code);
	return code;
}
function last(words,code){
	//console.log(code);
	code += '<ul id="last" onmouseenter="dom(event.target,event.target.parentElement.children,0)" onmouseleave="undom(event.target)" class="box unfade-element">';
	code += addWord(words);
	code += '</ul>';
	//console.log(code);
	return code;
}

function addWord(words){
	return words[Math.floor(Math.random() * 1000 )]; 
}

function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				words = rawFile.response.split('\n');
				console.log(words);
				//return allText;
			}
		}
	}
	rawFile.send(null);
}

function sentence(event){
	console.log(event);
	var sentenceHTML = document.getElementById("sentenceDiv");
	var string = sentenceHTML.innerHTML.toString();
	var word = event.target.firstChild.data;
	console.log(string, word);
	string += word+" ";
	console.log(string);
	sentenceHTML.innerHTML = string;

	//dom(event.target);
}

function backspace(){
	var sentenceHTML = document.getElementById("sentenceDiv");
	var string = sentenceHTML.innerHTML.toString().split(" ");
	string.pop();
	string.pop()
		console.log(string);
	string = string.join(" ")+" ";
	sentenceHTML.innerHTML=string;
}

function dom(element,siblings,level){
//console.log(element);
if (element != null){
//console.log(element.firstElementChild);
element.className="box fade-element";
var a = element.children;
for (var i =0; i < element.childElementCount; i++){
	dom(a[i],a,level+1);
}
if (level == 0){
console.log("LEVEL",level, siblings);
for (var i =0; i < siblings.length; i++){
	if(siblings[i] != element){
		undom(siblings[i]);
}
}
}
}
else{ return; }
}

function undom(element){
console.log(element);
if (element != null){
console.log(element.firstElementChild);
element.className="box unfade-element";
var a = element.children;
for (var i =0; i < element.childElementCount; i++){
	undom(a[i]);
}
}
else{ return; }
}
