document.getElementById("searchButton").addEventListener("click", function() {
    let query = document.getElementById("searchInput").value;
    if (!query) {
        alert("Por favor, escribe el nombre de una canción.");
        return;
    }

    let searchUrl = `https://soundcloud.com/search?q=${encodeURIComponent(query)}`;
    
    // Mostrar el enlace de búsqueda
    document.getElementById("result").innerHTML = `
        <p>Haz clic aquí para ver los resultados en SoundCloud:</p>
        <a href="${searchUrl}" target="_blank">${searchUrl}</a>
    `;

    // Intentar incrustar el reproductor (requiere URL exacta)
    let embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(searchUrl)}`;
    document.getElementById("player").innerHTML = `
        <iframe width="100%" height="166" scrolling="no" frameborder="no"
            src="${embedUrl}">
        </iframe>
    `;
});
