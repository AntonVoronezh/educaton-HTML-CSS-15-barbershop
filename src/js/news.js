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

