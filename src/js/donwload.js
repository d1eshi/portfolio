const downloadBtns = document.querySelectorAll('.download-btn')
const btn = downloadBtns.forEach(elm => {
  elm.addEventListener('click', () => {
    const ruta = '../docs/Frontend-Developer-CV.pdf'
    elm.href = ruta
    elm.download = ruta
  })
})
