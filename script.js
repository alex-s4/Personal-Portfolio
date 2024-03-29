// AUTOMATICALLY UPDATE CURRENT YEAR IN FOOTER

let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});


// NUMBERS FROM LANDING PAGE WILL COUNT

const counters = document.querySelectorAll('.value');
const speed = 1100;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 0.05);
        }else{
          counter.innerText = value + "+";
        }
     
   }
   
   animate();
})


// NAV DROPDOWN WILL APPEAR UPON HOVER

const navProj = document.querySelector("#nav-feat-proj");
const navProjText = document.querySelector("#nav-feat-proj a");
const navProjDropDown = document.querySelector("#feat-proj-dropdown");
const navConnect = document.querySelector("#nav-contact");
const navConnectText = document.querySelector("#nav-contact a");
const navConnectDropDown = document.querySelector("#connect-dropdown");

// const dropDownDisplay = [
//   {
//     name: "hovered",
//     "dropdown display": "block",
//     "navbar bottom border": "5px solid #fff"
//   },
//   {
//     name: "not hovered",
//     "dropdown display": "none",
//     "navbar bottom border": "none"
//   }
// ]

// function navMouseOver() {
//   this.
// }

// navProj.addEventListener("mouseover", navMouseOver);


navProj.onmouseover = function(){
    navProjDropDown.style.display = "block";
    navProjText.style.borderBottom = "5px solid #fff";
    navProjText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)";
}

navProjDropDown.onmouseover = function(){
    navProjDropDown.style.display = "block";
    navProjText.style.borderBottom = "5px solid #fff";
    navProjText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)";
}

navProj.onmouseout = function(){
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
    navProjText.style.backgroundImage = "none"
}

navProjDropDown.onmouseout = function(){
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
    navProjText.style.backgroundImage = "none"
}

navConnect.onmouseover = function(){
  navConnectDropDown.style.display = "block";
  navConnectText.style.borderBottom = "5px solid #fff";
  navConnectText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)";
}

navConnectDropDown.onmouseover = function(){
  navConnectDropDown.style.display = "block";
  navConnectText.style.borderBottom = "5px solid #fff";
  navConnectText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)";
}

navConnect.onmouseout = function(){
  navConnectDropDown.style.display = "none";
  navConnectText.style.borderBottom = "none";
  navConnectText.style.backgroundImage = "none"
}

navConnectDropDown.onmouseout = function(){
  navConnectDropDown.style.display = "none";
  navConnectText.style.borderBottom = "none";
  navConnectText.style.backgroundImage = "none"
}


// NAV MENU INDICATOR ON CURRENT PAGE
const navHomeText = document.querySelector("#nav-home a");
const navAboutText = document.querySelector("#nav-about a");

var currentPage = window.location.pathname;

switch (currentPage) {
  case "/index.html":
    navHomeText.style.borderBottom = "5px solid #fff"
    navHomeText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)"

    break;
  case "/about.html":
    navAboutText.style.borderBottom = "5px solid #fff"
    navAboutText.style.backgroundImage = "linear-gradient(0deg, #fff 0%, #1f628d 10%)"

    break;
}

const landingAboutBtn = document.getElementById("landing-about-btn");

// landingAboutBtn.onclick = function () {
//   location.href =  + "/about.html";
// }