const songTitle = document.getElementById( 'songTitle' );
const fillBar = document.getElementById("fill");
const currentTime =  document.getElementById( 'currentTime' );
const totalTime =  document.getElementById( 'totalTime' );
const volumeSlider = document.getElementById( 'volumeSlider' );
const songSlider = document.getElementById( 'songSlider' );
let songs = [ './music/Caravan Palace - Lone Digger.mp3',"./music/Arys - It's Alright.mp3","./music/04 BLOOM - Just Lay Down.mp3",
    "./music/Koven - Love Wins Again.mp3","./music/Aimer - Through My Blood.mp3","./music/02. 작은 것들을 위한 시 (Boy with Luv) feat. Halsey.mp3",
    "./music/Shonan No Kaze - Grand Blue.mp3","./music/Silhouette - Bad Computer_ Skyelle.mp3","./music/Breaknoise - Weigh Me Down (ft. Holly Drummond).mp3",
    "./music/Future - Government Official.mp3","./music/Madeon - All My Friends.mp3","./music/Tristam - Questions.mp3","./music/Enkidu - Falling (Embody Remix).mp3",
    "./music/Foster The People - Imagination.mp3","./music/Uppermost X Juani - Pure.mp3","./music/Hans Zimmer - A Way Of Life.mp3","./music/Money In The Grave - Drake_Rick Ross.mp3","./music/Monsta X - Alligator.mp3","./music/Chop - Loyalty Means Everything.mp3"];
let songCover = [ "./img/covercaravan.jpg", "./img/arys.jpg", "./img/bloom.jpg", "./img/lovewins.jpg", './img/aimer.jpg','./img/boywith.jpg','./img/cover.jpg','./img/silhouette.jpg',
    './img/breaking.jpg','./img/government.jpg','./img/friends.jpg','./img/questions.jpg','./img/enkidu.jpg','./img/foster.jpg','./img/pure.jpg','./img/samurai.jpg','./img/drake.jpg','./img/monsta.png','./img/chop.png'];
let currentSong = 0 ;
const tracklist =  document.getElementById( 'tracklist' );
let songIndex = 0;
let music = new Audio();
volumeSlider.value = 0.05;
music.volume = 0.05;
window.onload = playSong;
songs.forEach( function ( song ) {
    const li = document.createElement( 'li' );
    let temp = strToReg( song );
    tracklist.appendChild( li );
    li.innerHTML += "<br>"+"<a onclick = 'playSongOnClick("+songIndex+")'>"+temp+"</a>"+"</br>";
    songIndex++;
});
function convertTime( seconds ){
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = (min < 10) ? "0" + min : min;
    sec = ( sec < 10 ) ? "0" + sec:sec;
    currentTime.textContent = min + ":" + sec;
}
function totalu( seconds ){
    let max = Math.floor( music.duration );
    let min = Math.floor( seconds/60 );
    let sec = seconds % 60;
    min = ( min < 10 ) ? "0" + min : min;
    sec = ( sec < 10 ) ? "0" + sec:sec;
    totalTime.textContent = min + ":" + sec;
    songSlider.setAttribute( "max", max );
}
function strToReg( str ){
    let titleToStr = str;
    let regex1 = /.\/music\//gi;
    let regex2 = /.mp3/gi;
    titleToStr = titleToStr.replace( regex1, '' );
    titleToStr = titleToStr.replace( regex2, '' );
    return titleToStr;
}
setInterval( updateSongSlider, 1000 );
function updateSongSlider(){
    let aya = music.currentTime / music.duration;
    let c = Math.round( music.currentTime );
    songSlider.value = c;
    convertTime( c );
    totalu( Math.round( music.duration ) );
    if( music.ended ){
        nextS();
    }
}
function playSongOnClick( chosenSong ){
    currentSong = chosenSong;
    playSong();
    $( "#play img" ).attr("src", "./img/Pause.png" );
    $( "#image img" ).attr( "src", songCover[ currentSong ] );
    $( "#bg img" ).attr( "src", songCover[ currentSong ] );
}
function playSong(){
    music.src = songs[ currentSong ];
    songTitle.textContent = strToReg( songs[ currentSong ] );
    music.play();
}
function playP(){
    if( music.paused ) {
        music.play();
        $( "#play img" ).attr( "src", "./img/Pause.png" );
    }else{
        music.pause();
        $( "#play img" ).attr( "src", "./img/Play.png" );
    }
}
function nextS(){
    ++currentSong;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    playSong();
    $( "#play img" ).attr( "src", "./img/Pause.png" );
    $( "#image img" ).attr("src", songCover[ currentSong ] );
    $( "#bg img" ).attr( "src", songCover[ currentSong ] );
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
function manageVolume(){
    music.volume = volumeSlider.value;
}
function seekSong(){

    music.currentTime = songSlider.value;
}
function toggl(){
    document.getElementById( 'tracks' ).style.width = "0";
    document.getElementById( 'toggle' ).style.left = '97vw';
    document.getElementById('closeSidebar').style.visibility = "hidden";
}
function openSidebar(){
    document.getElementById('tracks').style.width = "20vw";
    document.getElementById('toggle').style.left = '75vw';
    document.getElementById('closeSidebar').style.visibility = "visible";
}
