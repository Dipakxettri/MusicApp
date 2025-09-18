
const songs = [
    {
        file: "song1.mp3",
        name: "Birds of a feather ",
        artist: "Billie Eilish",
        logo:"song1.jpg"
    },
    {
        file: "song2.mp3",   
        name: "Imagine",
        artist: "John Lennon",
        logo:"song2.jpg"

    },
    {
        file: "song3.mp3",  
        name: "Night Changes",
        artist: "One Direction",
        logo:"song3.jpg"

    },

]

//select HTML Elements:
const playPase = document.querySelector(".playPase");
const audio = document.getElementById("audio");
const menue_1 = document.querySelector(".menue-1");
const menue_2 = document.querySelector(".menue-2");
const menue_btn = document.querySelector(".menue-btn");
const btn_1 = document.querySelector("#m");
const btn_2 = document.querySelector("#x");
const progress = document.getElementById("progress")
const next_btn = document.getElementById("next");
const previous_btn = document.getElementById("previous");
const song_logo = document.getElementById("songLogo");

//Handel menue:
menue_btn.addEventListener('click', () => {
    if (menue_btn.getAttribute("id") === "m") {
        btn_1.setAttribute("class", "menue-btn hide");
        btn_2.setAttribute("class", "menue-btn");

        menue_2.setAttribute("class", "menue-2 ")
    }

})
if (!audio.src.includes(songs[0])) {
            audio.src = songs[0].file;
        }

// Buttons logics: 
playPase.addEventListener("click", () => {
    if (playPase.getAttribute("id") === "play") {
        audio.play();
        playPase.setAttribute("id", "pause");
        playPase.innerHTML = "";
        playPase.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    else {
        audio.pause()
        console.log("hiii");
        playPase.setAttribute("id", "play");
        playPase.innerHTML = "";
        playPase.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
})

// Handel next and previous:
const song_name = document.getElementById("name");
const song_arther = document.getElementById("aurther");
let i = 0;

const playSong = (index) => {
    playPase.innerHTML = "";
        playPase.innerHTML = '<i class="fa-solid fa-pause"></i>';
        song_name.innerHTML = songs[index].name;
        song_arther.innerHTML = songs[index].artist;
        audio.src = songs[index].file;
        song_logo.src = songs[index].logo;
        audio.play();
}

next_btn.addEventListener("click", () => {
    i = i + 1;
    if(i >= songs.length)i = 0;
        playSong(i);
})

previous_btn.addEventListener("click", () => {
    i = i - 1;
    if(i < 0)i = songs.length - 1;
    playSong(i);
})

// Handel some times and progress:
audio.addEventListener("timeupdate", () => {
    let value = (audio.currentTime / audio.duration) * 100;
    progress.value = value;
})

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
})

// progress.addEventListener("click", () => {

// })


