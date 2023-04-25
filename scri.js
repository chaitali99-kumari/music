let masterPlay = document.getElementById('masterplay');
let audioElement = new Audio('songs/1.m4a');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterName = document.getElementById('masterName');
let gif = document.getElementById('gif');
let first = document.getElementById('0');


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
  songItem.forEach(function(element ,i){
   element.getElementsByTagName("img")[0].src= songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

  function playy(e){
    if(audioElement.paused){
        e.classList.remove('fa-play-circle-o');
        e.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity=1;
        audioElement.play();
    }
    else{
        alert("play");
        e.classList.remove('fa-pause-circle-o');
        e.classList.add('fa-play-circle-o');
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity=0;
        audioElement.pause();
    }
}

masterPlay.addEventListener('click', function playByMasterplay(){
    if(audioElement.paused){
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        first.classList.remove('fa-play-circle-o');
        first.classList.add('fa-pause-circle-o');
        gif.style.opacity=1;
        audioElement.play();
       }
       else{
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        first.classList.remove('fa-pause-circle-o');
        first.classList.add('fa-play-circle-o');
        gif.style.opacity=0;
        audioElement.pause();
       } 

});

function makeAllPause(){
    
    Array.from(document.getElementsByClassName('play')).forEach(function(element){
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o');
          

    })

}

Array.from(document.getElementsByClassName('play')).forEach(function(element){
    element.addEventListener('click',function(e){
        makeAllPause();
        masterName.innerText = songs[e.target.id].songName;
       audioElement.src = songs[e.target.id].filepath;
       playy(e.target);

    })
})
 

 