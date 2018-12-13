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