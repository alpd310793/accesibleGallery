// Añadir un listener para el evento onload del documento
window.onload = function() {
    addTabFocus();
};

// Función para añadir el atributo tabindex y listeners de eventos
function addTabFocus() {
    console.log("Evento onload disparado");

    // Selecciona todas las imágenes con la clase "preview"
    var images = document.querySelectorAll(".preview");

    // Recorre cada imagen para agregar el atributo tabindex y los event listeners
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        
        // Añadir el atributo tabindex
        image.setAttribute("tabindex", "0");

        // Añadir el event listener para el evento onfocus
        image.addEventListener("focus", function() {
            console.log("Evento onfocus disparado en la imagen con alt:", this.alt);
            upDate(this);
        });

        // Añadir el event listener para el evento onblur
        image.addEventListener("blur", function() {
            console.log("Evento onblur disparado en la imagen con alt:", this.alt);
            unDo();
        });
    }
}

// Función upDate para manejar el evento onmouseover y onfocus
function upDate(previewPic) {
    console.log("Evento upDate disparado");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    // Cambia la URL de la imagen de fondo del div con el id "image"
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Cambia el texto del div con el id "image"
    document.getElementById("image").innerText = previewPic.alt;
}

// Función unDo para manejar el evento onmouseout y onblur
function unDo() {
    console.log("Evento unDo disparado");
    
    // Revertir la URL de la imagen de fondo del div con el id "image" a la original (vacío)
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Revertir el texto del div con el id "image" al original
    document.getElementById("image").innerText = "Hover over an image below to display here.";
}
