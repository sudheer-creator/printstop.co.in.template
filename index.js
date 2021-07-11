console.log("navbarToggler");

let navbarToggler=document.getElementById("navbarToggler");
navbarToggler.addEventListener("click",navbarShow);

function navbarShow(){
  let navbar=document.getElementById("navbar2");
  navbar.style.display=`block`;
}