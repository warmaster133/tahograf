//           гамбургер 

let hamHeadOne = document.querySelector('.header-container');         // переменная родителя всего меню 
let menuCloseHeadOne = document.querySelector('.header-down__block'); // пер. списка который изчезает
document.addEventListener('mouseover', menuOne);     //  весь родительский документ прослушивается и роб. функция
function menuOne(event) {
    if (event.target.closest('.catalog')) {      // если нажать на картинку кнопку 
        menuCloseHeadOne.classList.remove('passive');     // уберет невидимость 
    }
/*     if (!event.target.closest('.')) {          // если нажать мимо родительского блока 
        menuCloseHeadOne.classList.add('passive');      // невидимость добавит 
    } */
};
document.addEventListener('click', menuOneClose);
function menuOneClose(event) {
    if (!event.target.closest('.catalog')) {          
        menuCloseHeadOne.classList.add('passive');     
    }     
};