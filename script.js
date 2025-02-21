document.addEventListener("DOMContentLoaded", function () {
    // Capturar el formulario
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores ingresados por el usuario
        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        // Datos de acceso (simulación)
        const credenciales = {
            admin: { password: "12345", redireccion: "admin.html" },
            cajero: { password: "54321", redireccion: "cajero.html" }
        };

        // Validación del usuario y contraseña
        if (credenciales[usuario] && credenciales[usuario].password === password) {
            alert(`Inicio de sesión exitoso como ${usuario}. Redirigiendo...`);
            window.location.href = credenciales[usuario].redireccion; // Redirección a la página correspondiente
        } else {
            alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
        }
    });
});

document.getElementById("destino").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    let precio = selectedOption.getAttribute("data-precio");
    document.getElementById("precio").value = precio ? precio : "";
});

document.getElementById("ventaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let ci = document.getElementById("ci").value;
    let destino = document.getElementById("destino").value;
    let asiento = document.getElementById("asiento").value;
    let precio = document.getElementById("precio").value;

    // Redirigir a la página de factura con los datos en la URL
    window.location.href = `factura.html?nombre=${nombre}&ci=${ci}&destino=${destino}&asiento=${asiento}&precio=${precio}`;
});
