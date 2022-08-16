const songs=[
    {
        name:"Maa_tujhe_salam",
        title:"Maa Tujhe Salaam",
        artist:"A.R. Rahman",
    },
    {
        name:"Teri_Mitti",
        title:"Teri Mitti",
        artist:"B Praak",
    },
    {
        name:"Kun_faya_kun",
        title:"Kun Faya Kun",
        artist:"A.R. Rahman",
    },
   
]

const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let songindex=0;
let isplaying=false;

const playMusic=()=>{
    music.play();
    isplaying=true;
    play.title="pause";
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}


const pauseMusic=()=>{
    music.pause();
    isplaying=false;
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

const loadSong=(song)=>{
title.textContent=song.title;
artist.textContent=song.artist;
music.src="music/"+song.name+".mp3";
img.src="images/"+song.name+".jpg";

}

const nextsong=()=>{
    songindex=(songindex+1)%songs.length;
    loadSong(songs[songindex]);
    isplaying ? playMusic() : pauseMusic();
}

const prevsong=()=>{
    songindex=(songindex-1+songs.length)%songs.length;
    loadSong(songs[songindex]);
    isplaying ? playMusic() : pauseMusic();
}

play.addEventListener("click",()=>{
    isplaying ? pauseMusic() : playMusic();
});

next.addEventListener("click",nextsong);

prev.addEventListener("click",prevsong);