const video = document.getElementById('video');
const pause = document.getElementById('pause');
const playback = document.getElementById('playback')


pause.onclick = function isPause() {
    video.pause();
    pause.style.display = "none";
    playback.style.display = "flex";

}

playback.onclick = function isPlayback() {
    video.play();
    playback.style.display = "none";
    pause.style.display = "flex";
} 

// document.getElementById('header-icon').disabled = true


const remove_element = document.getElementById('main_icon')
remove_element.addEventListener('click', function() {
    debugger
    remove_element.blur();
})
