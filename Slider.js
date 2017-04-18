 function comingsoon(){
   alert("Coming Soon!!!");
}

var slide_images = [
    "Game.png",
    "Music.png"
];

var slide_buttons = [
    "Play Games!!!",
    "Listen to Music~~~"
];

var slide_selector = 0;

function prev(){
    slide_selector--;
    if(slide_selector<0){
        slide_selector = slide_images.length - 1;
    }
    var image = document.getElementById("slide_image");
    image.src = slide_images[slide_selector];
    var button = document.getElementById("slide_button");
    button.innerHTML = slide_buttons[slide_selector];
}

function next(){
    slide_selector++;
    if(slide_selector>= slide_images.length){
        slide_selector = 0;
    }
    var image = document.getElementById("slide_image");
    image.src = slide_images[slide_selector];
    var button = document.getElementById("slide_button");
    button.innerHTML = slide_buttons[slide_selector];
}