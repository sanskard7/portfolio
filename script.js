// IMAGE POPUP
function openImage(src){
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeImage(){
  document.getElementById("imgModal").style.display = "none";
}
