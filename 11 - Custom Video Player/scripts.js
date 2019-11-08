// Get our Elements
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progressBar');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skyp]');
    const ranges = player.querySelectorAll('.player__slider');


//Build out functions
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
// Hook uo the envent listernet