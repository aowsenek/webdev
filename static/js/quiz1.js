function dropdown(){
console.log("dd1");
var dd1=document.getElementById("dd1");
dd1.innerHTML='<select id="drop1" onchange="gpa()"><option value="4">A</option><option value="3">B</option><option value="2">C</option><option value="1">D</option><option value="0">F</option></select>';

var dd2=document.getElementById("dd2");
dd2.innerHTML='<select id="drop2" onchange="gpa()"><option value="4">A</option><option value="3">B</option><option value="2">C</option><option value="1">D</option><option value="0">F</option></select>';
}
function gpa(){
	var q1=parseInt(document.getElementById("drop1").value);
	var q2=parseInt(document.getElementById("drop2").value);
	var  gpa=document.getElementById("gpa");
	var math = (q1+q2)/2;
	gpa.innerHTML = "<p>"+math+"</p>";
}

