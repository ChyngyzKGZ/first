const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
   burger.classList.toggle('showMobileBtn')
   nav.classList.toggle('showNav')
   backdrop.classList.toggle('showBackdrop')
})

