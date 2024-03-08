// NUMBERS FROM LANDING PAGE WILL COUNT

const counters = document.querySelectorAll('.value');
const speed = 10;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 100);
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

navProj.onmouseover = function(){
    console.log("ugly proj")
    navProjDropDown.style.display = "block";
    navProjText.style.borderBottom = "5px solid #fff";
}

navProjDropDown.onmouseover = function(){
    console.log("ugly proj")
    navProjDropDown.style.display = "block";
    navProjText.style.borderBottom = "5px solid #fff";
}

navProj.onmouseout = function(){
    console.log("ugly proj")
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
}

navProjDropDown.onmouseout = function(){
    console.log("ugly proj")
    navProjDropDown.style.display = "none";
    navProjText.style.borderBottom = "none";
}