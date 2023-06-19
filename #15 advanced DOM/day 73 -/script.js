'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ///////////////////////////////////////////////

// first section smooth scrolling
const scrollBtn = document.querySelector('.btn--text')
const scrollToSec = document.querySelector('#section--1') 

scrollBtn.addEventListener('click', (e)=>{
  e.preventDefault()

  scrollToSec.scrollIntoView({behavior: 'smooth'});
})



// /////////////////
// adding navbar navigation 
document.querySelector('.nav__links')
        .addEventListener('click', function(e){
          e.preventDefault()
          if(e.target.classList.contains('nav__link')){
              const scrollTo = e.target.getAttribute('href')
              document.querySelector(scrollTo).scrollIntoView({behavior: 'smooth'})
          }
        })