// LOADER
window.addEventListener("load", ()=>{
  const loader = document.getElementById("loader");
  if(loader) loader.style.display="none";
});

// TYPING
const text="Sanskar Dongare";
let i=0;
function typing(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
  cursor.style.top=e.clientY+"px";
  cursor.style.left=e.clientX+"px";
});

// PROGRESS
window.addEventListener("scroll",()=>{
  let s=document.documentElement.scrollTop;
  let h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progress").style.width=(s/h)*100+"%";
});

// ANIMATION
const sections=document.querySelectorAll(".section");
window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(window.scrollY>sec.offsetTop-400){
      sec.style.opacity=1;
      sec.style.transform="translateY(0)";
    }
  });
});
