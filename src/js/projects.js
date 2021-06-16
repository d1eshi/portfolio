const btnFilter = document.querySelectorAll('.filter-option') // button to filter projects
btnFilter.forEach(btn => {
  btn.addEventListener('click', function (e) {
    filterProjects(e)
  })
})

export default function filterProjects(e) {
  const projects = document.querySelectorAll('.list figure') // select all project divs
  let filter = e.target.dataset.filter // grab the value in the event target's data-filter attribute
  projects.forEach(project => {
    project.classList.contains(filter) // does the project have the filter in its class list?
      ? project.classList.remove('hidden') // if yes, make sure .hidden is not applied
      : project.classList.add('hidden') // if no, apply .hidden
  })
}

const body = document.querySelector('body')
const portfolioContainer = document.querySelector('.portfolio-items')
const portfolioOverlay = document.querySelector('.portfolio .overlay')
portfolioContainer.addEventListener('click', e => {
  e.target.classList.contains('portfolio-link') ? e.preventDefault() : null

  const modalToggle = e.target.closest('.portfolio-link')
  // console.log(modalToggle)
  if (!modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  const modalClose = modal.querySelector('.times-modal')

  const openModal = function () {
    modal.classList.add('is-open')
    modal.style.animation = 'fade-in 200ms forwards'
    portfolioOverlay.style.animation = 'fade-in 200ms forwards'
    body.classList.add('no-scroll')
  }

  const closeModal = function () {
    modal.classList.remove('is-open')
    body.classList.remove('no-scroll')
    modal.removeEventListener('animationend', closeModal)
  }

  modalClose.addEventListener('click', e => {
    e.preventDefault()
    modal.style.animation = 'fade-out 200ms forwards'
    portfolioOverlay.style.animation = 'fade-out 200ms forwards'
    modal.addEventListener('animationend', closeModal)
  })

  openModal()
})
