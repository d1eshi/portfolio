import './header'
import './filterProjects'
import './modalGmail'
import './language'

if ('loading' in HTMLImageElement.prototype) {
  console.log('El navegador soporta `lazy-loading`...')
} else {
  console.log('`lazy-loading` no soportado...')
}