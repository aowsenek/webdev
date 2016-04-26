function ajaxcall(){
	console.log("strar");
	var first = document.getElementById("first").value;
	var last = document.getElementById("last").value;
	var avail = document.getElementById("avail").value;
	var nth = document.getElementById("nth").value;
	var n = document.getElementById("n").value;
	var letters = document.getElementById("letters").value;
	var vowels = document.getElementById("vowels").value;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function (){
		console.log("tsrt");
		if (req.readyState == 4 && req.status == 200){
			var text = req.responseText;
			console.log(text);

			document.getElementById("results").innerHTML = "<hr><h3> Results </h3> <p>"+text+"</p>";
		}
	}
        var str = "first="+first+"&last="+last+"&nth="+nth+"&n="+n+"&letters="+letters+"&vowels="+vowels+"&avail="+avail;
	console.log(str);
	req.open("GET","http://webdev.aowsenek.tk/static/php/lab4.php?"+str,true);
	//req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}

