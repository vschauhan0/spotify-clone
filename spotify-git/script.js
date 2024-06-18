console.log("Welcome");

let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let SongName = document.getElementById('SongName');
let songItem = Array.from(document.getElementsByClassName('container'));
let songItemPlay = document.getElementById('songItemPlay');
// audioElement.play();

let songs = [
    { songname: "Dehka Ek Khwab", filePath: "songs/1.mp3", coverPath: "artists/img1.jpeg" },
    { songname: "Shape of You", filePath: "songs/2.mp3", coverPath: "artists/img2.jpeg" },
    { songname: "Way down we go", filePath: "songs/1.mp3", coverPath: "artists/img3.jpeg" },
    { songname: "Mood", filePath: "songs/2.mp3", coverPath: "artists/img4.jpeg" },
    { songname: "Mi amor", filePath: "songs/1.mp3", coverPath: "artists/img5.jpeg" },
    { songname: "Channa Ve", filePath: "songs/2.mp3", coverPath: "artists/img6.jpeg" },
    { songname: "People", filePath: "songs/1.mp3", coverPath: "artists/img7.jpeg" },
    { songname: "Rang Bhini radha", filePath: "songs/2.mp3", coverPath: "artists/img8.jpeg" },
    { songname: "Starboy", filePath: "songs/1.mp3", coverPath: "artists/img9.jpeg" },
    { songname: "Nights Changes", filePath: "songs/1.mp3", coverPath: "artists/img10.jpeg" },
    { songname: "Dancin", filePath: "songs/2.mp3", coverPath: "artists/img11.jpg" },
    { songname: "Dandeloines", filePath: "songs/1.mp3", coverPath: "artists/img12.jpeg" }
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songname;
});



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-solid");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-solid");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-solid");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate', () => {
    progrress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progrress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (audioElement.duration * myProgressBar.value) / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        SongName.innerText = songs[songIndex].songname;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 11) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    makeAllPlay();
    audioElement.src = `songs/${songIndex}.mp3`;
    SongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 11;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    SongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})


