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


