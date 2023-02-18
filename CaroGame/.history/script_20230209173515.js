function Click(id) {
  console.log(id);
}

let quare = document.querySelectorAll(".square");
quare.addEventListener("click", Click () {
  console.log(quare.id);
});
