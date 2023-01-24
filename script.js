let boton = document.querySelector("button");
boton.addEventListener("click", function () {
  swal(
    "¡Muchas gracias!",
    "Espero tu contacto a jennienichols@gmail.com",
    "success"
  );
});

let cuerpo = document.querySelector("#cambio_color1");
cuerpo.addEventListener("mouseover", function () {
  cuerpo.classList.add("color_cuerpo");
});

cuerpo.addEventListener("mouseleave", function () {
  cuerpo.classList.remove("color_cuerpo");
});
