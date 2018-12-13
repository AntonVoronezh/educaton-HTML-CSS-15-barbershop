const getSliderBtnSubmit = document.querySelector('.slider--submit');
const getSliderSubmitForm = document.querySelector('.slider-form');
const getSliderSubmitBtn = document.querySelector('.slider-form__submit');
const getSliderP = document.querySelector('.slider-form__out');

getSliderBtnSubmit.addEventListener('click', createSubmitForm);

function createSubmitForm() {
    getSliderSubmitForm.style.height = '100%';
    getSliderSubmitForm.style.opacity = '1';
};

getSliderSubmitBtn.addEventListener('click', createNewComment);

function createNewComment(event) {
    event.preventDefault();
    const text =
        `Ваше фото <b>${getSliderSubmitForm.avatar.value}</b>, <br>
    ваше имя - <b>${getSliderSubmitForm.firstname.value}</b>, <br>
    ваша фамилия - <b>${getSliderSubmitForm.lastname.value}</b> <br>
    и ваш комментарий <b>"${getSliderSubmitForm.comment.value}"</b> <br><br>
    <span>будут сохранены и опубликованы</span>`
    // console.log(text);
    getSliderP.innerHTML = text;

};