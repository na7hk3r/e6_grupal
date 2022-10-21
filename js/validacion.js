let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

/////// Funcion extraída de Documentacion de Bootstrap ///////

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
  "use strict";

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll(".needs-validation");

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// function validarContraseñas() {
//   if (password1 === password2 && password1 == '.isvalid') {
//     password1.classList.add('was-validated')
//   }
// }

// document.getElementById('submit').addEventListener('click', () => {
//   validarContraseñas();
// })
