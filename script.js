// LOADER
window.addEventListener("load", ()=>{
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.display="none";
  }
});

// MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if(toggle && nav){
  toggle.addEventListener("click", ()=>{
    nav.classList.toggle("active");
  });
}

// DARK MODE
const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){
  themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
  });
}

// ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", ()=>{
  sections.forEach(sec=>{
    if(window.scrollY > sec.offsetTop - 400){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
