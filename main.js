const nav = document.getElementById('navigation')
const backToTopButton = document.getElementById('backToTopButton')
const body = document.getElementsByTagName('body')[0]

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndAt = sectionTop + sectionHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //se o sectionEndAt for menor doq a linha do meio, ja passou, por isso negamos para q isso n ocorra
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //basicamente: se esta entre o fim e o inicio da sessao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
  #testimonials,
  #about,
  #about header,
  #about .content`)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  autoplay: {
    delay: 5000
  },

  keyboard: true,

  breakpoints: {
    1024: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
