let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");


//validar las contraseñas
password2.addEventListener("input", validarContraseña);

  function validarContraseña(){
  if (password2.value === password1.value) {
    password2.setCustomValidity("");
  } else {
    password2.setCustomValidity("#valid-feedback");
  }};


//Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
function validación() {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  };