var hamburger = document.getElementById("hamburger");
var menu = document.querySelector("nav")

hamburger.addEventListener("click", openNav);

function openNav(event) {
    event.preventDefault();
    // alert("you clicked")

    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
}

// Music Player

var audio = document.querySelector("#my-audio");
var audioBtn = document.querySelector("#audio-btn")

audioBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(audio.paused){
        audio.play();
        audioBtn.textContent = "Pause Music"
    } else { 
        audio.pause();
        audioBtn.textContent = "Play Music"
    }
});



