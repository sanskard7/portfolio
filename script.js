/* ABOUT TEXT */
.about-text{
  text-align:center;
  max-width:800px;
  margin:20px auto;
  line-height:1.7;
  color:#ddd;
}

.about-text span{
  color:#a78bfa;
  font-weight:500;
}

/* ABOUT CARDS */
.about-cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
  margin-top:30px;
}

.about-card{
  padding:20px;
  text-align:center;
  transition:0.3s;
}

.about-card:hover{
  transform:translateY(-8px);
  box-shadow:0 0 20px #7c3aed;
}
