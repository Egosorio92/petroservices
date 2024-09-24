function cambiarIdioma(idioma) {
    if (idioma === 'es') {
        document.getElementById("titulo").textContent = "Servicios de Geología y Análisis Petrográficos";
        document.getElementById("nombre").textContent = "Tu Nombre";
        document.getElementById("descripcion").textContent = "Geólogo especializado en gestión ambiental con experiencia en prospección de aguas subterráneas, cartografía geológica, y análisis petrográficos. Ofrecemos estudios detallados y soluciones técnicas para la industria minera y de Oil & Gas.";
        document.getElementById("servicios-titulo").textContent = "Servicios Ofrecidos";
        document.getElementById("lista-servicios").innerHTML = `
            <li>Análisis Petrográficos</li>
            <li>Prospección de Aguas Subterráneas</li>
            <li>Cartografía Geológica</li>
            <li>Consultoría en Gestión Ambiental</li>`;
    } else if (idioma === 'en') {
        document.getElementById("titulo").textContent = "Geological Services and Petrographic Analysis";
        document.getElementById("nombre").textContent = "Your Name";
        document.getElementById("descripcion").textContent = "Geologist specialized in environmental management with experience in groundwater prospecting, geological mapping, and petrographic analysis. We offer detailed studies and technical solutions for the mining and Oil & Gas industries.";
        document.getElementById("servicios-titulo").textContent = "Services Offered";
        document.getElementById("lista-servicios").innerHTML = `
            <li>Petrographic Analysis</li>
            <li>Groundwater Prospecting</li>
            <li>Geological Mapping</li>
            <li>Environmental Management Consulting</li>`;
    }
}
