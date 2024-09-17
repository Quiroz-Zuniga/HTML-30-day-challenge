var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Muestra el valor inicial

slider.oninput = function() {
  output.innerHTML = this.value;
}
