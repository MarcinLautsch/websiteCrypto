const navMobile = document.querySelector('.nav-mobile')
const navBtm = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtm.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

navBtm.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

// --menu dopracowac---
