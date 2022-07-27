let networks = {
	airtel: {
		numbers: [
			"0701", "0708", "0802", "0808",
			"0812", "0901", "0902", "0904",
			"0907", "0912"
		],
		logo: "url('./pictures/airtel logo.jpg')"
	},

	mtn: {
		numbers: [
			"0703", "0704", "0706", "0803",
			"0806", "0810", "0813", "0814",
			"0816", "0903", "0906", "0913",
			"0916",
		],
		logo: "url('./pictures/mtn logo.png')"
	},

	glo: {
		numbers: [
			"0705", "0805", "0807", "0811",
			"0815", "0905", "0915",
		],
		logo: "url('./pictures/Globacom Limited Logo.png')"
	},

	etisalat: {
		numbers: [
			"0809", "0817", "0818", "0909",
			"0908",
		],
		logo: "url('./pictures/9mobile logo.jpg')"
	}
}



function startApp() {

	let darkMode = true
	let theme = document.querySelector("#theme")
	let inputTags = document.querySelectorAll(".input")
	inputTags.forEach(element => element.oninput = checkAndChange)

	document.querySelector("#theme-switch").onchange = () => {
		darkMode = !darkMode
		theme.href = darkMode ? "bootstrap.min.css" : "bootstrap-light.min.css"
	}
}



function checkAndChange(e) {

  // the value that was keyed in
	let value = e.target.value
	
	for (let network in networks) {
    // whether or not the first 4 characters of the value is in
    // any number array of the networks
		let includes = networks[network]["numbers"].includes(value.slice(0, 4))

		if (includes && value !== "" && !isNaN(value)) {
			console.log(network)
			e.target.style.backgroundImage = networks[network]["logo"]
			break
		}
		else e.target.style.backgroundImage = "none";
	}
}

// document.addEventListener('DOMContentLoaded', startApp);
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //