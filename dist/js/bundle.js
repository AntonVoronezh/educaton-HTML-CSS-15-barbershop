
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
            });

       

    myMap.geoObjects
        .add(myPlacemark)
});
// конец карты

const getMobMenu = document.querySelector('.mob-menu');
const getOpenMobMenu = document.querySelector('.mobile-menu');
const getUserLink = document.querySelectorAll('.user__link');

getMobMenu.addEventListener('click', closeMobMenu);

function closeMobMenu() {
  getMobMenu.classList.add('mob-menu-hide')
};

getOpenMobMenu.addEventListener('click', openMobMenu);

function openMobMenu() {
  getMobMenu.classList.remove('mob-menu-hide')
};




const getNewsShowBtn = document.querySelector('.news-show');
const getHideNewsLists = document.querySelectorAll('.news__list--bottom');
// const getShowNewsLists = document.querySelectorAll('.news__list--show');

getNewsShowBtn.addEventListener('click', funcNewsShow);

function funcNewsShow() {
    getHideNewsLists.forEach(elem => {
        elem.classList.toggle('news__list--show')
    });
    getNewsShowBtn.innerHTML = 'спрятать';
    getNewsShowBtn.removeEventListener('click', funcNewsShow);
    getNewsShowBtn.addEventListener('click', funcNewsHide);
};

function funcNewsHide() {
   
    getHideNewsLists.forEach(elem => {
        elem.classList.toggle('news__list--show')
    });
    
    getNewsShowBtn.innerHTML = 'показать все';
    getNewsShowBtn.removeEventListener('click', funcNewsHide);
    getNewsShowBtn.addEventListener('click', funcNewsShow);
};

// начало кода модальное окно отзывов
let text = '<br><br><strong>СЕКРЕТЫ МЯГКОЙ И ПОСЛУШНОЙ БОРОДЫ</strong> \
<br><br>1. ГОРЯЧИЙ ДУШ. ПОВЫШЕННАЯ ВЛАЖНОСТЬ И ПАР, РАСПАРЯТ КОЛЮЧИЕ ВОЛОСКИ ВАШЕЙ БОРОДЫ. ПОСЛЕ ДУША, ВОСПОЛЬЗУЙТЕСЬ УВЛАЖНЯЮЩИМ МАСЛОМ (ЛЮБЫМ, КОТОРОЕ У ВАС ЕСТЬ ИЛИ СПЕЦИАЛЬНЫМ ДЛЯ БОРОДЫ), НАКРОЙТЕ ЛИЦО МАХРОВЫМ ПОЛОТЕНЦЕМ НА 10-15 МИНУТ И СДЕЛАЙТЕ ЛЕГКИЙ МАССАЖ.\
<br><br>2. НЕ МОЙТЕ БОРОДУ КАЖДЫЙ ДЕНЬ!!!ОТ ЕЖЕДНЕВНОГО МЫТЬЯ,ВОЛОСЫ НА БОРОДЕ СТАНОВЯТСЯ ЕЩЕ ЖЕСТЧЕ. МОЖНО МЫТЬ ЧЕРЕЗ ДЕНЬ,ЕСЛИ ЭТО КРАЙНЕ НЕОБХОДИМО, ТОГДА ПРИРОДНЫЕ МАСЛА,КОТОРЫЕ ДЕЛАЮТ ВОЛОСЫ ПОСЛУШНЫМИ УСПЕЮТ НАКОПИТЬСЯ.\
<br><br>3. КОНДИЦИОНЕР ДЛЯ ВОЛОС ИЛИ СПЕЦИАЛЬНЫЙ КОНДИЦИОНЕР ДЛЯ БОРОДЫ. ДАННОЕ СРЕДСТВО ПОМОЖЕТ УПРАВЛЯТЬ ВОЛОСАМИ И СДЕЛАТЬ ИХ МАКСИМАЛЬНО ПОДАТЛИВЫМИ.';

const getCommentsSelectors = document.querySelectorAll(".news__more-link");
const successOverlay = createOverlay(" <img src=\"./img/news/news1.jpg\">" + text);
// console.log(getCommentsSelectors.length);


for (let i = 0; i < getCommentsSelectors.length; i += 1) {
    getCommentsSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        document.body.appendChild(successOverlay);
    });
}

function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
  
    const template = document.querySelector("#overlayTemplate");
    overlayElement.innerHTML = template.innerHTML;
  
    const closeElement = overlayElement.querySelector(".close");
    closeElement.addEventListener("click", function(event) {
        event.preventDefault();
      document.body.removeChild(overlayElement);
    });
  
    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = content;
  
    return overlayElement;
  }



const left = document.querySelector(".slider__left");
const right = document.querySelector(".slider__right");
const items = document.querySelector("#items");
const sliderDotsAll = document.querySelectorAll('.slider__dots-item');
const sliderDotsDiv = document.querySelector('.slider__dots');
const item = items.querySelectorAll(".elem");

const width = 100;
let count = 0;

right.addEventListener("click", function () {

    if (count <= item.length - 2) {
        count += 1;

        makePosition(count);

        sliderDotsAll.forEach(elem => elem.classList.remove('slider__dots-item--active'));
        sliderDotsAll[count].classList.add('slider__dots-item--active');
    }
});

left.addEventListener("click", function () {

     if (count !== 0) {
        count -= 1;

        makePosition(count);

        sliderDotsAll.forEach(elem => elem.classList.remove('slider__dots-item--active'));
        sliderDotsAll[count].classList.add('slider__dots-item--active');
    }
});

sliderDotsDiv.addEventListener('click', changeActiveDots);

function changeActiveDots(event) {

    sliderDotsAll.forEach(elem => elem.classList.remove('slider__dots-item--active'));
    


    event.target.classList.add('slider__dots-item--active');

    sliderDotsAll.forEach((elem, num) => {
        if(elem.classList.contains('slider__dots-item--active'))
        makePosition(num);
    } );

};

function makePosition(argCount) {
    position = width * argCount;
    return items.style.marginLeft = '-' + position + '%';
};

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



