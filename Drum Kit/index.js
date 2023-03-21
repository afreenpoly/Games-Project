for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
document.querySelectorAll(".drum")[index].addEventListener("click",function() {
    var audio=new Audio("sounds/tom-1.mp3")
    audio.play();   
});
}