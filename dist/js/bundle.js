console.log('kkfff111');
const convert = items => items.reduce((acc, [key, value]) =>
  ({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});
  
  
// // начало карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [51.680427, 39.176769],
        zoom: 14
    }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
      
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/logo/logotype-map.svg',
                // Размеры метки.
                iconImageSize: [226, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-1, -1]
            }),

        myPlacemarkWithContent = new ymaps.Placemark([51.689497, 39.176869], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '.img/logo/logotype-map.svg',
                // Размеры метки.
                iconImageSize: [226, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
// конец карты


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

function playPause() {

    if (player.getPlayerState() !== 1) {
        player.playVideo();
        getVideoPlayPauseButton.style.opacity = '0';
    } else {
        player.pauseVideo();
        getVideoPlayPauseButton.style.opacity = '0.5';
    }
};



