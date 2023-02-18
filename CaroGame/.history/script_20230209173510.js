function Click(id) {
  console.log(id);
}

let quare = document.querySelectorAll(".square");
quare.addEventListener("click", function () {
  console.log(quare.id);
});
