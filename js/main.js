//           всплывающее окно каталог при наведении 
let catalog = document.querySelector('.catalog');
let hamHeadOne = document.querySelector('.header-container');         // переменная родителя всего меню 
let menuCloseHeadOne = document.querySelector('.header-down__block'); // пер. списка который изчезает
document.addEventListener('mouseover', menuOne);     //  весь родительский документ прослушивается и роб. функция
function menuOne(event) {
    if (event.target.closest('.catalog')) {      // если нажать на картинку кнопку 
        menuCloseHeadOne.classList.remove('passive');     // уберет невидимость  
    }
    if (event.target.closest('.catalog')) {      // если нажать на картинку кнопку 
        catalog.classList.add('red');
    }
/*     if (!event.target.closest('.')) {          // если нажать мимо родительского блока 
        menuCloseHeadOne.classList.add('passive');      // невидимость добавит 
    } */
};
document.addEventListener('click', menuOneClose);
function menuOneClose(event) {
    if (!event.target.closest('.catalog, .header-down__block')) {          
        menuCloseHeadOne.classList.add('passive'); 
        catalog.classList.remove('red');   
    }     
};

/* menuCloseHeadOne.addEventListener('mouseout', menuOneHidden);
function menuOneHidden(event) {
    if (event.target.closest('.header-down__block')
        && event.target.closest('.header-down__block-parent__01')
        && event.target.closest('.header-down__block-parent__02')
        && event.target.closest('.header-down__block-parent__01')
    ) {
        console.log('inside');
        menuCloseHeadOne.classList.add('passive');

    }
};  */


//          Листание картинок кружочками 

let hamSectionOne = document.querySelector('.section__01-wraper');         // переменная родителя всего меню 
let menuSectionOne = document.querySelector('.section__01-img__01'); // пер. списка который изчезает
let menuSectionTwo = document.querySelector('.section__01-img__02');
let menuSectionThree = document.querySelector('.section__01-img__03');
let menuSectionFour = document.querySelector('.section__01-img__04');

let btnSectionOne = document.querySelector('.section__01-slide__01-active');
let btnSectionTwo = document.querySelector('.section__01-slide__02-active');
let btnSectionThree = document.querySelector('.section__01-slide__03-active');
let btnSectionFour = document.querySelector('.section__01-slide__04-active');


document.addEventListener('click', menuSection);     //  весь родительский документ прослушивается и роб. функция
function menuSection(event) {
    if (event.target.closest('.section__01-slide__01')) {      // если нажать на картинку кнопку 
        menuSectionOne.classList.remove('passive');       // добавит видимость 
        menuSectionTwo.classList.add('passive'); 
        menuSectionThree.classList.add('passive');
        menuSectionFour.classList.add('passive');
        btnSectionOne.classList.remove('passive');   
        btnSectionTwo.classList.add('passive'); 
        btnSectionThree.classList.add('passive');
        btnSectionFour.classList.add('passive');
    }
    if (event.target.closest('.section__01-slide__02')) {      
        menuSectionTwo.classList.remove('passive'); 
        menuSectionOne.classList.add('passive');  
        menuSectionThree.classList.add('passive');
        menuSectionFour.classList.add('passive');
        btnSectionOne.classList.add('passive');   
        btnSectionTwo.classList.remove('passive'); 
        btnSectionThree.classList.add('passive');
        btnSectionFour.classList.add('passive');  
    }
    if (event.target.closest('.section__01-slide__03')) {      
        menuSectionThree.classList.remove('passive');
        menuSectionOne.classList.add('passive'); 
        menuSectionTwo.classList.add('passive'); 
        menuSectionFour.classList.add('passive'); 
        btnSectionOne.classList.add('passive');   
        btnSectionTwo.classList.add('passive'); 
        btnSectionThree.classList.remove('passive');
        btnSectionFour.classList.add('passive');
    }
    if (event.target.closest('.section__01-slide__04')) {      
        menuSectionFour.classList.remove('passive'); 
        menuSectionOne.classList.add('passive'); 
        menuSectionTwo.classList.add('passive');       
        menuSectionThree.classList.add('passive');
        btnSectionOne.classList.add('passive');   
        btnSectionTwo.classList.add('passive'); 
        btnSectionThree.classList.add('passive');
        btnSectionFour.classList.remove('passive');
    }
};


let callWindowClose = document.querySelector('.section__01-call__window');
document.addEventListener('click', windowClose);
function windowClose(event) {
    if (event.target.closest('.section__01-call')) {      // если нажать на картинку кнопку 
        callWindowClose.classList.remove('passive');       // добавит видимость 
    }
    if (event.target.closest('.section__01-call__window-top>img')) { 
        callWindowClose.classList.add('passive'); 
    } 
};  

/*        Для показать полностью      */ 

let showAll = document.querySelector('.section__02-wraper');
let hiddenAll = document.querySelector('.section__02-wraper__coppy');

document.addEventListener('click', showHidden);
function showHidden(event) {
    if(event.target.closest('.show-all')) {
        showAll.classList.add('passive');
        hiddenAll.classList.remove('passive');
    }
    if(event.target.closest('.hidden-all')) {
        hiddenAll.classList.add('passive');
        showAll.classList.remove('passive');
    }
};