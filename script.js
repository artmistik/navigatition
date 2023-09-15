document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.getElementById('navbar')
	let isNavbarVisible = false

	navbar.addEventListener('mouseenter', function () {
		if (!isNavbarVisible) {
			navbar.classList.add('active')
			isNavbarVisible = true
		}
	})

	navbar.addEventListener('mouseleave', function () {
		if (isNavbarVisible) {
			navbar.classList.remove('active')
			isNavbarVisible = false
		}
	})

	const logoSvg = document.getElementById('logo-svg')
	let currentRotation = 0

	logoSvg.addEventListener('mouseenter', () => {
		currentRotation += 215
		logoSvg.style.transform = `rotate(${currentRotation}deg)`
	})

	logoSvg.addEventListener('mouseleave', () => {
		currentRotation = 0
		logoSvg.style.transform = `rotate(${currentRotation}deg)`
	})
})
