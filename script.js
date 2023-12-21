var flag=0;
function toggleMenu(){
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
//document.getElementById("ham-icon").style.display="none";
menu.classList.toggle("open");
icon.classList.toggle("open");
if(flag==0){
document.getElementById("ham-icon").src="./assets/close-icon.png";
flag=1;
}else{
    document.getElementById("ham-icon").src="./assets/hamimg.png";
    flag=0;
}
}
var lastScrollLocation = 0;
var sec = ["#top",'#profile','about'];
 