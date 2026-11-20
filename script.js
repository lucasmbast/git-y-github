
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
