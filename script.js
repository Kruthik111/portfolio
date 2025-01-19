var flag = 0;
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  //document.getElementById("ham-icon").style.display="none";
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  if (flag == 0) {
    // document.getElementById("ham-icon").src = "./assets/close-icon.png";
    document
      .getElementById("ham-icon")
      .setAttribute(
        "d",
        "M15.854 12.854L11 8l4.854-4.854a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0L8 5 3.146.146a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707L5 8 .146 12.854a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0L8 11l4.854 4.854a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"
      );
    flag = 1;
  } else {
    document
      .getElementById("ham-icon")
      .setAttribute(
        "d",
        "M22 13c0 1.11-.89 2-2 2H4a2 2 0 110-4h9l2.5 2 2.5-2h2a2 2 0 012 2M12 3C3 3 3 9 3 9h18s0-6-9-6M3 18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-1H3v1z"
      );
    flag = 0;
  }
}
var lastScrollLocation = 0;
var sec = ["#top", "#profile", "about"];

var darkmode = document.querySelectorAll(".mode");

// console.log(darkmode.length);

//for dark mode

var mode = "light";

// darkmode.addEventListener("click", modechange());
function modechange() {
  var darkmode = document.querySelectorAll(".mode");
  var buttons = document.querySelectorAll(".btn");
  var buttons2 = document.querySelectorAll(".mainBtn");
  var detailContainer = document.querySelectorAll(".details-container");
  if (mode === "light") {
    mode = "dark";
    document.documentElement.setAttribute("dark-theme", "dark");
    document.getElementById("about-text").color = "white";
    for (let i = 0; i < 2; i++) {
      darkmode[i].classList.add("spin");
    }
    //darkmode
    setTimeout(() => {
      document.body.style.color = "white";
      document.querySelector(".btn-color-2").classList.add("white-text");

      document.body.style.backgroundColor = "rgb(0, 0, 5)";
      document.getElementById("profileimg").src = "./assets/batman-image.webp";

      // document.querySelectorall(".details-container").classList.add(".glow-shadow");
      for (let i = 0; i < 2; i++) {
        darkmode[i].src = "./assets/sun-icon.png";
        darkmode[i].classList.remove("spin");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("glow-btn");
      }
      for (let i = 0; i < buttons2.length; i++) {
        buttons2[i].classList.add("glow-shadow");
      }
      for (let i = 0; i < detailContainer.length; i++) {
        detailContainer[i].classList.add("glow-shadow");
      }
      toWhiteColor();
    }, 500);
  } else {
    document.documentElement.setAttribute("dark-theme", "light");
    mode = "light";
    for (let i = 0; i < 2; i++) {
      darkmode[i].classList.add("reverse-spin");
    }
    // document.querySelector(".details-container").remove("glow-shadow");
    setTimeout(() => {
      document.body.style.color = "black";
      document.querySelector(".btn-color-2").classList.remove("white-text");
      var batimg = (document.getElementById("profileimg").src =
        "./assets/cow-boy-img.jpg");
      for (let i = 0; i < 2; i++) {
        darkmode[i].src = "./assets/moon-icon.png";
        darkmode[i].classList.remove("reverse-spin");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("glow-btn");
      }
      for (let i = 0; i < buttons2.length; i++) {
        buttons2[i].classList.remove("glow-shadow");
      }
      for (let i = 0; i < detailContainer.length; i++) {
        detailContainer[i].classList.remove("glow-shadow");
      }
      document.body.style.backgroundColor = "#fff";
      document.getElementsByTagName("p").color = "white";

      todarkColor();
    }, 500);
  }
}
// function to add white text class to make text color to white in background
function toWhiteColor() {
  var alllinks = document.querySelectorAll("a");
  for (let i = 0; i < alllinks.length; i++) {
    alllinks[i].classList.add("white-text");
  }
  var alllinks = document.querySelectorAll("h3");
  for (let i = 0; i < alllinks.length; i++) {
    alllinks[i].style.color = "#000";
  }
}
function todarkColor() {
  var alllinks = document.querySelectorAll("a");
  for (let i = 0; i < alllinks.length; i++) {
    alllinks[i].classList.remove("white-text");
  }
}

//for automatic copyright update

const date = new Date();
const year = date.getFullYear();
document.getElementById(
  "Copyright"
).innerHTML = `Copyright &#169; ${year} Kruthik s. All Rights Reserved.`;

var torch = document.getElementById("torch");

function setProfileToGif() {
  if (mode === "light") {
    document.getElementById("profileimg").src = "./assets/cow-boy-gif.gif";
    setTimeout(() => {
      document.getElementById("profileimg").src = "./assets/cow-boy-img.jpg";
    }, 5000);
  }
}
