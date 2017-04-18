var enter_name = "Insert your name here"

var user_name = prompt("Please enter your name", enter_name);

if(user_name === "" || user_name == enter_name){
	alert("Welcome!");
} else if (user_name){
	alert("Welcome, "+user_name);
} else {
	alert("Welcome!");
}

if(get_name() != -1){
    var guide = document.getElementById("guide");
    var name = get_name();
    guide.innerHTML = " What would you like to do, "+name+"? ";
}

function get_name(){
    if(user_name === "" || user_name == enter_name){
        return -1;
    } else if (user_name){
        return user_name;
    } else {
        return -1;
    }
}