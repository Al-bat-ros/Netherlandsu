const icon = document.querySelector('.menu-icon');
const iconWrapper = document.querySelector('.icon-wrapper');
iconWrapper.addEventListener('click', ()=>{
    icon.classList.toggle('menu-icon-active');
})