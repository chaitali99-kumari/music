console.log("welcome to csms rock music");

let songIndex = 0;
let audioElement = new Audio('songs/1.m4a');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterName=document.getElementById('masterName')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Ek_Zindagi" , filepath:"songs/1.m4a" , coverPath:"cover/Ek-Zindagi.jpeg"},
    {songName:"Dil aaj kl" , filepath:"songs/2.m4a" , coverPath:"cover/dil_aaj_kl.jpg"},
    {songName:"chhoomantar" , filepath:"songs/3.m4a" , coverPath:"cover/Choomantar.jpg"},
    {songName:"Daru_desi" , filepath:"songs/4.m4a" , coverPath:"cover/daru_desi.jpg"},
    {songName:"Bewajah" , filepath:"songs/5.m4a" , coverPath:"cover/Bewajah.jpg"},
    {songName:"Dhunki" , filepath:"songs/6.m4a" , coverPath:"cover/dhunki.jpg"},
    {songName:"uff_mere_dil_me" , filepath:"songs/7.m4a" , coverPath:"cover/uff.jpg"},
    {songName:"Buddhu_sa_mann" , filepath:"songs/8.m4a" , coverPath:"cover/budhu_sa_mn_h.jpg"}
]

songItem.forEach(function(element,i){
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName

})
masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        masterName.innerText=songs[songIndex].songName;
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        masterName.innerText=songs[songIndex].songName;
        gif.style.opacity = 0; 
    }
})

audioElement.addEventListener('timeupdate', function(){
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' ,function(){
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
function makeAllPause(){
    Array.from(document.getElementsByClassName('play')).forEach(function(element){
        element.classList.add('fa-play-circle-o');
        element.classList.remove('fa-pause-circle-o');
        
    }) 
}

Array.from(document.getElementsByClassName('play')).forEach(function(element){
    element.addEventListener('click',function(e){
        makeAllPause();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `songs/${songIndex+1}.m4a` ;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        masterName.innerText=songs[songIndex].songName;
        
    })
})
 
document.getElementById('previous').addEventListener('click', function(){
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src = `songs/${songIndex+1}.m4a` ;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        masterName.innerText=songs[songIndex].songName;
})
document.getElementById('next').addEventListener('click', function(){
    if(songIndex>=7){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
        audioElement.src = `songs/${songIndex+1}.m4a` ;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        masterName.innerText=songs[songIndex].songName;
})