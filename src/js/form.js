const getForm = document.querySelector('.form');
const getSubmitForm = document.querySelector('.btn--form');
const getBeardList = document.querySelector('.beard__list');
const getAllBeardItems = getBeardList.querySelectorAll('.radio');
const getDopList = document.querySelector('.dop');
const getAllDopItems = getDopList.querySelectorAll('.checkbox');

getSubmitForm.addEventListener('click', createOffer);

function createOffer(event) {
    event.preventDefault();

    const arrDop = [];
    [...getAllDopItems].filter(elem => elem.checked === true ? arrDop.push(elem.nextElementSibling.nextElementSibling.innerHTML) : null);
    const strDop = arrDop.join(', ');

    let BeardItem = '';
    [...getAllBeardItems].filter(elem => elem.checked === true ? BeardItem = elem.nextElementSibling.nextElementSibling.innerHTML : null);

    const text =
        `Ваше имя - <b>${getForm.name.value}</b>, <br>
    ваше отчество - <b>${getForm.surname.value}</b>,<br>
    ваша фамилия <b>"${getForm.family.value}"</b> <br>
    ваш телефон <b>"${getForm.phone.value}"</b> <br>
    ваш майл <b>"${getForm.mail.value}"</b> <br>
    <strong>будут сохранены и опубликованы</strong><br><br>
    ваша Информация для мастера <b>"${getForm.text.value}"</b> <br>
    <strong>будут передана мастеру</strong><br><br>
    модель бороды "${BeardItem}" <br>
    + <br>
    ${strDop} <br>
    `;
    // console.log(text);

        const successOverlay2 = createOverlay(text);
    document.body.appendChild(successOverlay2);

};