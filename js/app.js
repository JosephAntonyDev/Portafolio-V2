// ============================================
// APP - Cargador de secciones e inicialización
// ============================================

// Secciones a cargar dinámicamente
const secciones = [
    { id: 'section-inicio',      archivo: './html/sections/inicio.html' },
    { id: 'section-sobremi',     archivo: './html/sections/sobremi.html' },
    { id: 'section-skills',      archivo: './html/sections/skills.html' },
    { id: 'section-curriculum',  archivo: './html/sections/curriculum.html' },
    { id: 'section-portfolio',   archivo: './html/sections/portfolio.html' },
    { id: 'section-contacto',    archivo: './html/sections/contacto.html' },
    { id: 'section-footer',      archivo: './html/sections/footer.html' }
];

// Cargar todas las secciones HTML y luego inicializar la app
async function cargarSecciones() {
    try {
        const cargas = secciones.map(async (seccion) => {
            const contenedor = document.getElementById(seccion.id);
            if (!contenedor) return;
            const response = await fetch(seccion.archivo);
            if (!response.ok) throw new Error(`Error cargando ${seccion.archivo}`);
            contenedor.innerHTML = await response.text();
        });

        await Promise.all(cargas);
        inicializarApp();
    } catch (error) {
        console.error('Error al cargar secciones:', error);
    }
}

// Inicializar todos los módulos después de que el HTML esté listo
function inicializarApp() {
    // Portafolio: generar cards y tabs
    generarPortfolioCards();
    initPortfolioTabs();

    // Contacto: formulario
    initContactForm();

    // CV: botón de descarga
    const btnCV = document.getElementById('btnDescargarCV');
    if (btnCV) {
        btnCV.addEventListener('click', descargarCV);
    }

    // Skills: animación al hacer scroll
    window.addEventListener('scroll', efectoHabilidades);
}

// Iniciar carga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarSecciones);
