let networks = {
  airtel: {
    numbers: [
      "701", "708", "802", "808",
      "812", "901", "902", "904",
      "907", "912"
    ],
    logo: "url('./pictures/airtel logo.jpg')"
  },

  mtn: {
    numbers: [
      "703", "704", "706", "803",
      "806", "810", "813", "814",
      "816", "903", "906", "913",
      "916",
    ],
    logo: "url('./pictures/mtn logo.png')"
  },

  glo: {
    numbers: [
      "705", "805", "807", "811",
      "815", "905", "915",
    ],
    logo: "url('./pictures/Globacom Limited Logo.png')"
  },

  etisalat: {
    numbers: [
      "809", "817", "818", "909",
      "908",
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
    let includes = networks[network]["numbers"].includes(value.slice(1, 4))

    // Rahim Added excludes and recludes to be used in the "else if" statement.

    let excludes = networks[network]["numbers"].includes(value.slice(4, 7))
    let recludes = networks[network]["numbers"].includes(value.slice(5, 8))

    // Rahim added this("if(value.slice(0,1) == 0)"") cause the first number, 
    // inputed might not be 0 and it will still run and i made maxlength "15"
    // for the "+2340" and also removed the 0's,in the numbers array to make
    // it work with the "+234" and "+2340"

    if (value.slice(0, 1) == 0) {
      if (includes && value !== "" && !isNaN(value)) {
        console.log(network)
        e.target.style.backgroundImage = networks[network]["logo"]
        break
      }else { e.target.style.backgroundImage = "none" }
    }
    else if (value.slice(0, 5) == +2340) {
      if (recludes && value !== "" && !isNaN(value)) {
        console.log(network)
        e.target.style.backgroundImage = networks[network]["logo"]
        break
      }else { e.target.style.backgroundImage = "none" }
    }
    else if (value.slice(0, 4) == +234) {
      if (excludes && value !== "" && !isNaN(value)) {
        console.log(network)
        e.target.style.backgroundImage = networks[network]["logo"]
        break
      }else { e.target.style.backgroundImage = "none" }

    }
    else { e.target.style.backgroundImage = "none" }
  }
}

// document.addEventListener('DOMContentLoaded', startApp);

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //