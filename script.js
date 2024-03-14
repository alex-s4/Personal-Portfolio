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
}

navProjDropDown.onmouseover = function(){
    navProjDropDown.style.display = "block";
    navProjText.style.borderBottom = "5px solid #fff";
}

navProj.onmouseout = function(){
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
}

navProjDropDown.onmouseout = function(){
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
}

navConnect.onmouseover = function(){
  navConnectDropDown.style.display = "block";
  navConnectText.style.borderBottom = "5px solid #fff";
}

navConnectDropDown.onmouseover = function(){
  navConnectDropDown.style.display = "block";
  navConnectText.style.borderBottom = "5px solid #fff";
}

navConnect.onmouseout = function(){
  navConnectDropDown.style.display = "none";
  navConnectText.style.borderBottom = "none";
}

navConnectDropDown.onmouseout = function(){
  navConnectDropDown.style.display = "none";
  navConnectText.style.borderBottom = "none";
}


// NAV MENU INDICATOR ON CURRENT PAGE
const navHomeText = document.querySelector("#nav-home a");
const navAboutText = document.querySelector("#nav-about a");

var currentPage = window.location.pathname;

switch (currentPage) {
  case "/index.html":
    navHomeText.style.borderBottom = "5px solid #fff"
    break;
  case "/about.html":
    navAboutText.style.borderBottom = "5px solid #fff"
    break;
}