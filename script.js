
function copiar(boton) {
    const comando = boton.previousElementSibling.textContent;

    navigator.clipboard.writeText(comando)
        .then(() => {
            boton.textContent = "¡Copiado!";

            setTimeout(() => {
                boton.textContent = "Copiar";
            }, 2000);
        })
        .catch(() => {
            boton.textContent = "No se pudo copiar";
        });
}

// Crear un nuevo commit visual
function crearCommit() {
    const mensaje = document.getElementById("mensajeCommit");
    const historial = document.getElementById("historial");

    if (mensaje.value.trim() === "") {
        alert("Escribe un mensaje para tu commit");
        return;
    }

    const nuevoCommit = document.createElement("div");

    nuevoCommit.className = "comando";

    nuevoCommit.innerHTML = `
        <h3>Commit creado correctamente</h3>
        <p>${mensaje.value.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <small>Fecha: ${new Date().toLocaleString()}</small>
    `;

    historial.prepend(nuevoCommit);

    mensaje.value = "";

    alert("¡Tu commit se agregó al historial visual!");
}
