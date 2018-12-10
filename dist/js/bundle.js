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







