function updatesize(){
  const height = window.innerHeight;
  const width = window.innerWidth;
  const one = document.querySelector("h1");
one.innerText = `Width: ${width} and Height: ${height}`;
}
window.addEventListener("resize",updatesize());
updatesize();