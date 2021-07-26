let currentpage

window.onload = function () {
  currentpage = window.location.pathname

  buttons.forEach(btn => {
    btn.addEventListener('click', interactive)

    let langBtn = btn.getAttribute('lang')
    if (langBtn === 'es' && currentpage.includes('index-es.html')) {
      console.log('tengo ques estar activo esp')
      btn.classList.add('active-language')
    }
    if (langBtn === 'en' && currentpage.includes('index.html')) {
      console.log('tengo que estar activo eng')
      btn.classList.add('active-language')
    }
  })
}

// const btnEs = document.querySelector('#es')
const buttons = document.querySelectorAll('.btn-language')

// redirect to the user
function redirectLang(lang) {
  window.location.href = `index-${lang}.html`
}

// all interactions
function interactive(e) {
  const elementEvent = e.target
  const lnEvent = e.target.getAttribute('lang')

  console.log(elementEvent)

  if (lnEvent === 'es' && !currentpage.includes('index-es')) {
    redirectLang('es')
  } else if (lnEvent === 'en' && !currentpage.includes('index.html')) {
    window.location.href = 'index.html'
  }
  // active-language
}
