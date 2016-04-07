var collegecount = 0;
function start(){
	var time = 60;
	var startstuff = document.getElementById("start");
	startstuff.innerHTML = '<div class="textbox"><input onkeyup="onEnter()" type= text id ="college" placeholder="Full College Name"></div><div><h2 id="clock"></h2></div><div class="buttons"><a class="button" id = "pause" onclick="clock(1,0)">Pause</a><a class="button" onclick="clock(2,0)">Restart</a></div>';
	clock(0, time);
}

function clock(arg, time){
	console.log(arg);
	if (arg == 0 ){
		console.log("clock start");
		var clock = setInterval(function(){time--
				var clockstuff = document.getElementById("clock");
				clockstuff.innerHTML = time;
				if (time == 0 ){clearInterval(clock);
				console.log("end of clock");
				if (collegecount == 10){
				var alerty = alert("You Won!");
				location.reload();
				}
				else {
				var alerty = alert("You Lost.");
				location.reload();
				}
				}},1000);
	}
	else if(arg == 1){
		console.log("clock pause");
		var alerty = alert("Resume?");
	}
	else if(arg ==2){
		console.log("clock reset");
		location.reload()
	}
}


function onEnter(){
	var colleges = ["UVA", "Virginia Tech","CU Boulder","UC Berkeley","GMU","Stanford","Penn State","Olin","UC Davis","USC"];
	var college1=document.getElementById('college').value;
	console.log(college1, collegecount);
	for(var i = 0; i < colleges.length; i++){
		if (colleges[i] === college1) {
			console.log("yes");
			console.log(college1);
			var tdTag = document.getElementById(i+1);
			tdTag.innerHTML = college1;
			var box = document.getElementById("college");
			box.value="";
			collegecount++;
			console.log(collegecount);
		}
	}
	if (collegecount == 10){
		var alerty = alert("You Won!");
		location.reload();
	}
}
