document.getElementById("form-recomendacion").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("nueva-recomendacion");
  const texto = input.value.trim();

  if (texto !== "") {
    const nueva = document.createElement("div");
    nueva.className = "recomendacion";
    nueva.textContent = texto;

    document.getElementById("contenedor-recomendaciones").appendChild(nueva);
    input.value = "";

    alert("Thank you for your recommendation!");
  }
});
