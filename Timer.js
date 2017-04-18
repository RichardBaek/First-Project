var time_displayer = document.getElementById("time");

var time_sec = 0;
var time_min = 0;
var time_hour = 0;

function pad(str,num){
	return (num < 10) ? str+"0" : str;
}

function printTime() {
	time_sec++;
	if(time_sec == 60){
 		time_sec = 0;
 		time_min++;
	}
	if(time_min == 60){
 		time_min = 0;
 		time_hour++;
 	}
 	var sec_pad = pad(":",time_sec);
 	var min_pad = pad(":",time_min);
 	var hour_pad = pad(" ",time_hour);
	time_displayer.innerHTML = "Time Wasted:"+hour_pad+time_hour+min_pad+time_min+sec_pad+time_sec;
}

setInterval(printTime, 1000);