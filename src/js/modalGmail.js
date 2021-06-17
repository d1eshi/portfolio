const btn = document.querySelector('#icon-gmail')
const body = document.querySelector('body')

btn.addEventListener('click', function (e) {
  e.preventDefault()

  const modal = btn.nextElementSibling

  const modalClose = modal.querySelector('.times-modal')
  const modalOverlay = btn.parentElement.querySelector('.overlay')

  const openModal = function () {
    modal.classList.add('is-open')
    modal.style.animation = 'fade-in 200ms forwards'
    modalOverlay.style.animation = 'fade-in 200ms forwards'
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
    modalOverlay.style.animation = 'fade-out 200ms forwards'
    modal.addEventListener('animationend', closeModal)
  })

  openModal()
})
