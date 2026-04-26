// Smooth scroll
document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click", function(e){
    const target = this.getAttribute("href");

    if(target.startsWith("#")){
      e.preventDefault();
      document.querySelector(target)
        .scrollIntoView({behavior:"smooth"});
    }
  });
});

// Image preview
function openImage(src){
  document.getElementById("imgModal").style.display="flex";
  document.getElementById("modalImg").src = src;
}

function closeImage(){
  document.getElementById("imgModal").style.display="none";
}
