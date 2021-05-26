function filterProjects(e) {
  const projects = document.querySelectorAll('.list div') // select all project divs
  let filter = e.target.dataset.filter // grab the value in the event target's data-filter attribute
  projects.forEach(project => {
    project.classList.contains(filter) // does the project have the filter in its class list?
      ? project.classList.remove('hidden') // if yes, make sure .hidden is not applied
      : project.classList.add('hidden') // if no, apply .hidden
  })
}

// navigation
const btnHamburguer = document.querySelector('#bntHamburguer')
btnHamburguer.addEventListener('click', toggleShow)

const body = document.querySelector('body')
const header = document.querySelector('.header')
const fadeElms = document.querySelectorAll('.has-fade')

function toggleShow(e) {
  e.preventDefault()
  if (!header.classList.contains('open')) {
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
