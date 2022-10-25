let Total = 0;
console.log("Hola");
function sumarprecio(valorproducto) {
  Total = Total + valorproducto;
  document.getElementById("Total").innerHTML =
    "TOTAL: " + "$" + Total + " Pesos";
}
function Borrar() {
  Total = 0;
  document.getElementById("Total").innerHTML = "TOTAL:" + " $" + 0 + " Pesos";
}


//document.getElementById("boton").addEventListener("click", sumarprecio(100))