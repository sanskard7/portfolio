// Typing Effect
const roles = ["IT Student","Frontend Developer","Software Engineer"];
let i=0,j=0,isDeleting=false;

function type(){
  let current = roles[i];

  if(!isDeleting){
    document.getElementById("typing").innerHTML = current.substring(0,j++);
    if(j>current.length){ isDeleting=true; setTimeout(type,1000); return;}
  }else{
    document.getElementById("typing").innerHTML = current.substring(0,j--);
    if(j==0){ isDeleting=false; i=(i+1)%roles.length;}
  }
  setTimeout(type,100);
}
type();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

// Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<50;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    dx:Math.random()-0.5,
    dy:Math.random()-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#a78bfa";
    ctx.fill();

    p.x+=p.dx;
    p.y+=p.dy;

    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();
