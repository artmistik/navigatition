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
	const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
	
})
