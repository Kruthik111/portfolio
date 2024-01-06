var flag = 0;
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //document.getElementById("ham-icon").style.display="none";
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    if (flag == 0) {
        document.getElementById("ham-icon").src = "./assets/close-icon.png";
        flag = 1;
    } else {
        document.getElementById("ham-icon").src = "./assets/hamimg.png";
        flag = 0;
    }
}
var lastScrollLocation = 0;
var sec = ["#top", '#profile', 'about'];

var darkmode = document.querySelectorAll(".mode");

// console.log(darkmode.length);

//for dark mode

var mode = "light";

// darkmode.addEventListener("click", modechange());
function modechange() {
    var darkmode = document.querySelectorAll(".mode");
    if (mode === "light") {
        mode = "dark";
        document.documentElement.setAttribute("dark-theme","dark");
        for(let i=0;i<2;i++){
        darkmode[i].classList.add("spin");
        }
        //darkmode
        setTimeout(() => {
            document.body.style.color = "white";
            document.querySelector(".btn-color-2").classList.add("white-text");
            
            document.body.style.backgroundColor = "rgb(0, 0, 5)";
            
            // document.querySelectorall(".details-container").classList.add(".glow-shadow");
            for(let i=0;i<2;i++){
                
            darkmode[i].src = "./assets/sun-icon.png";
            darkmode[i].classList.remove("spin");
            }
             document.getElementById("profileimg").src = "./assets/batman-image.webp";
            toWhiteColor();
        
        }, 1000);
    } else {
        document.documentElement.setAttribute("dark-theme","light");
        mode = "light";
        for(let i=0;i<2;i++){
        darkmode[i].classList.add("reverse-spin");
        }
        // document.querySelector(".details-container").remove("glow-shadow");
        setTimeout(() => {
            document.body.style.color = "black";
            document.querySelector(".btn-color-2").classList.remove("white-text");
            for(let i=0;i<2;i++){
            darkmode[i].src = "./assets/moon-icon.png";
            darkmode[i].classList.remove("reverse-spin");
                }
            
            document.body.style.backgroundColor = "#fff";
            
            var batimg = document.getElementById("profileimg").src = "./assets/Profilepic.jpg";
            todarkColor();
        }, 1000);
    }
}
// function to add white text class to make text color to white in background
function toWhiteColor(){
    var alllinks = document.querySelectorAll("a");
    for(let i=0;i<alllinks.length;i++){
    alllinks[i].classList.add("white-text");
    }
    var alllinks = document.querySelectorAll("h3");
    for(let i=0;i<alllinks.length;i++){
    alllinks[i].style.color="#000";
    }
    // var alllimg = document.querySelectorAll("img");
    // for(let i=0;i<alllimg.length;i++){
    // allimg[i].classList.add("white-img");
    // }
    // var shadow = document.getElementsByClassName("details-container").classList.add("glow-shadow");
}
function todarkColor(){
    var alllinks = document.querySelectorAll("a");
    for(let i=0;i<alllinks.length;i++){
    alllinks[i].classList.remove("white-text");
    }
    
    // var shadow = document.getElementsByClassName("details-container").classList.add("glow-shadow");
}

//for automatic copyright update

const date = new Date();
const year = date.getFullYear();
document.getElementById("Copyright").innerHTML = `Copyright &#169; ${year} Kruthik s. All Rights Reserved.`;





