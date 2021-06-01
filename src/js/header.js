// navigation
const btnHamburguer = document.querySelector('#bntHamburguer')
btnHamburguer.addEventListener('click', toggleShow)

const body = document.querySelector('body')
const header = document.querySelector('.header')
const fadeElms = document.querySelectorAll('.has-fade')

function toggleShow() {
  if (!header.classList.contains('open')) {
    // open menu
    body.classList.add('no-scroll')
    header.classList.add('open')
    fadeElms.forEach(function (element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  } else {
    // close menu
    body.classList.remove('no-scroll')
    header.classList.remove('open')
    fadeElms.forEach(function (element) {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  }
}

const linksSection = document.querySelectorAll('.header__menu a')
linksSection.forEach(element => {
  element.addEventListener('click', function () {
    toggleShow()
  })
})
