'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const tabs = [...document.querySelectorAll('.operations__tab')]
const tab_container = document.querySelector('.operations__tab-container');
const operation_content = [...document.querySelectorAll('.operations__content')];


const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const sectionOne = document.querySelector('#section--1');


const sections = document.querySelectorAll('.section');


const slides = document.querySelectorAll('.slide');
const btnNxtSld = document.querySelector('.slider__btn--right');
const btnPreSld = document.querySelector('.slider__btn--left');

///////////////////////////////////////
// Modal window


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


////////////////////
// adding functionalities to tabbed components

// activating tab button
tab_container.addEventListener('click', (e)=>{
  const clicked = e.target.closest('.operations__tab')
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  // activating tab content
  operation_content.forEach(content => content.classList.remove('operations__content--active'));
  const active_content = document.querySelector(`.operations__content--${clicked.dataset.tab}`);
  active_content.classList.add('operations__content--active')
})


// working on links and nav components

function handleMouseOverTab(e, opacity){
  const el = e.target;
  const siblings = el.closest('.nav').querySelectorAll('.nav__link');
  const logo = el.closest('.nav').querySelector('.nav__logo')
  
  if (e.target.classList.contains('nav__link')){
    
    siblings.forEach(sib =>{
      if(sib != el) sib.style.opacity = opacity
    })
    logo.style.opacity = opacity
  }
}

nav.addEventListener('mouseover', (e)=>{
  handleMouseOverTab(e, 0.25)
});

nav.addEventListener('mouseout', (e)=>{
  handleMouseOverTab(e, 1)
});

// implementing hide seek navbar according to page location.

const headerObserver = new IntersectionObserver(function(entries, observer){
  const [entry] = entries;
    
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')

}, { root:null, threshold: 0.1, rootMargin: `-${nav.getBoundingClientRect().height}px`})

headerObserver.observe(header);


// implementing sections show up on scrolling.

function revealSection(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {root:null, threshold:0.1}) 


sections.forEach(sec =>{
  sectionObserver.observe(sec)
})

// lazy loading images

const images = document.querySelectorAll('.features__img');

function lazyImgLoader(entries, observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', ()=>{
      entry.target.classList.remove('lazy-img');
    })

    observer.unobserve(entry.target);
}

const options = {
  threshold: 0.9
}

const imageObserver = new IntersectionObserver(lazyImgLoader, options)

images.forEach(img => imageObserver.observe(img));

// implementing testimonial section slider


let curSlide = 0;

slides.forEach((slide, ind) =>{
  slide.style.transform = `translateX(${ind * 100}%)`;
})

const goToSlide = function(current){
  slides.forEach((slide, ind) =>{
    slide.style.transform = `translateX(${100 * (ind - current)}%)`;
  })
}

btnNxtSld.addEventListener('click',()=>{
  if(curSlide > (slides.length - 2)) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide)
})

btnPreSld.addEventListener('click',()=>{
  if(curSlide == 0) curSlide = slides.length - 1;
  else curSlide--;

  goToSlide(curSlide)
})