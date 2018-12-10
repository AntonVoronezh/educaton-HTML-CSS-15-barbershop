console.log('kkfff111');
const convert = items => items.reduce((acc, [key, value]) =>
  ({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});
  
  

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        // height: '360',
        // width: '640',
        videoId: '2e0nEgLAro4',
        playerVars: {
            enablejsapi: 1,
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 1
        },
        events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        }
    });
}

const getVideo = document.querySelector(".player__video");
const getVideoPlayPauseButton = document.querySelector(".video__play-pause");
const getcVideoIcon = document.querySelector(".control__video-icon");
const getTimeRange = document.querySelector(".control__time-range");
const getAudioPlayPauseButton = document.querySelector(".control__sound-icon");
const getSoundRange = document.querySelector(".control__sound-range");


getVideoPlayPauseButton.addEventListener('click', playPause);
getcVideoIcon.addEventListener('click', playPause);
getVideo.addEventListener('timeupdate', percentRange);
getTimeRange.addEventListener('input', progressRange);

getAudioPlayPauseButton.addEventListener('click', playAudio);
getSoundRange.addEventListener('input', percentSound);
function getCurrentTime() {
    var currentTime = player.getCurrentTime();
    return roundNumber(currentTime, 3);
  }
console.log(player.getPlayerState());





