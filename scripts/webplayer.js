/*<script
src="https://code.jquery.com/jquery-2.2.4.js"
integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
crossorigin="anonymous"></script>

var songTitle = document.getElementById( 'songTitle' );
var fillBar = document.getElementById("fill");
var currentTime =  document.getElementById( 'currentTime' );
var totalTime =  document.getElementById( 'totalTime' );
var songs = [ './music/Caravan Palace - Lone Digger.mp3',"./music/Arys - It's Alright.mp3","./music/04 BLOOM - Just Lay Down.mp3","./music/Koven - Love Wins Again.mp3","./music/Aimer - Through My Blood.mp3"];
var songCover = [ "./img/covercaravan.jpg", "./img/arys.jpg", "./img/bloom.jpg", "./img/lovewins.jpg", './img/aimer.jpg']
var currentSong = 0 ;
var i = 0;

var tracklist =  document.getElementById( 'tracklist' );
songs.forEach( function ( item ) {

var li = document.createElement( 'li' );

tracklist.appendChild( li );
var temp = strToReg( item );


li.innerHTML += "<br>"+"<a href=''>"+temp+"</a>"+"</br>";

//  li.innerHTML="<a href=''>Somelink</a>"+" "+"Sometext";
});
async function convertTime( seconds ){
var min = Math.floor(seconds/60);
var sec = seconds % 60;
min = (min < 10) ? "0" + min : min;
sec = (sec<10) ? "0" + sec:sec;
currentTime.textContent = min + ":" + sec;

await totalu(Math.round(music.duration));



}
function totalu(seconds){
var min = Math.floor(seconds/60);
var sec = seconds % 60;
min = (min < 10) ? "0" + min : min;
sec = (sec<10) ? "0" + sec:sec;
console.log(min);
console.log(sec);
totalTime.textContent = min + ":" + sec;


}



var music = new Audio();
music.volume = 0.1;
window.onload = playSong;

function strToReg( str ){
    var titleToStr = str;
    console.log(str);
    var regex1 = /.\/music\//gi;
    var regex2 = /.mp3/gi;
    titleToStr = titleToStr.replace( regex1, '' );
    titleToStr = titleToStr.replace( regex2, '' );

    return titleToStr;

}
music.addEventListener('timeupdate',function(){

       var position = music.currentTime / music.duration;

       fillBar.style.width = position * 100 +'%';
       convertTime( Math.round(music.currentTime ));
       if(music.ended){
         nextS();
       }
   });

function playSong(){
  music.src = songs[ currentSong ];
  songTitle.textContent = strToReg( songs[ currentSong ] );
  music.play();
}
function playP(){
  if(music.paused){
    music.play();
    $("#play img").attr("src","./img/Pause.png");
  }else{
    music.pause();

    $("#play img").attr("src","./img/Play.png");
  }




  }


function nextS(){
  ++currentSong;
  if (currentSong > songs.length-1){
    currentSong = 0;
  }

  playSong();
  $("#play img").attr("src","./img/Pause.png");
  $("#image img").attr("src",songCover[currentSong]);
  $("#bg img").attr("src",songCover[currentSong]);
}
function prevS(){
  --currentSong;
  if ( currentSong  <  0  ){
    currentSong = songs.length - 1;
  }

  playSong();
  $( "#play img" ).attr( "src", "./img/Pause.png" );
  $( "#image img" ).attr( "src",songCover[ currentSong ] );
  $( "#bg img" ).attr( "src",songCover[ currentSong ] );
}
*/
