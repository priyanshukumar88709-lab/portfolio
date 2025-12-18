const nav = document.querySelector(".menu");
const nav1 = document.querySelector(".nav1");
const navlink = document.querySelectorAll(".nav-link");
let isActive = false;
nav.addEventListener("click",()=>{
  if(!isActive){
     nav1.style.transform = "translateX(100%)";
     isActive = true;
  }
  else{
   nav1.style.transform = "translateX(-100%)";
   isActive = false;

 }
 console.log("hello");
});
 navlink.forEach(link => {
  link.addEventListener("click", () => {
    nav1.style.transform = "translateX(-100%)"; // close nav
  });
});


















// const button = document.querySelector(".button");
// button.addEventListener("click",()=>{
//     //   window.scrollTo({
//     // top: 0,
//     // behavior: "smooth" 
// //   });
//   const teamSection = document.querySelector("#team");
//   teamSection.scrollIntoView({ behavior: "smooth" });
// })
