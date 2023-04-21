const navMobile = document.querySelector('.nav-mobile')
const body = document.querySelector('body')
const navBtm = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtm.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	body.classList.toggle('scroll-lock')
}

const activateScroll = () => {
	navBtm.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
	body.classList.remove('scroll-lock')
}

const links = document.querySelectorAll('.nav__link')
links.forEach(link => {
	link.addEventListener('click', activateScroll)
})

navBtm.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

// finish menu remove
