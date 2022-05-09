const nav = document.getElementById('navigation')
const backToTopButton = document.getElementById('backToTopButton')
const body = document.getElementsByTagName('body')[0]

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function openMenu() {
  body.classList.add('menu-expanded')
}

function closeMenu() {
  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
