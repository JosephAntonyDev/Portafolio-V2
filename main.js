// Variable para controlar el menú
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    const menuBtn = document.querySelector(".nav-responsive");
    const menuIcon = menuBtn.querySelector("i");
    
    if(menuVisible){
        nav.classList.remove("responsive");
        menuBtn.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuVisible = false;
    }else{
        nav.classList.add("responsive");
        menuBtn.classList.add("active");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuVisible = true;
    }
}

function seleccionar(){
    const nav = document.getElementById("nav");
    const menuBtn = document.querySelector(".nav-responsive");
    const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;
    
    nav.classList.remove("responsive");
    if(menuBtn) menuBtn.classList.remove("active");
    if(menuIcon) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
    menuVisible = false;
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', function(event) {
    const nav = document.getElementById("nav");
    const menuBtn = document.querySelector(".nav-responsive");
    
    if(menuVisible && !nav.contains(event.target) && !menuBtn.contains(event.target)) {
        seleccionar();
    }
});

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // Technical skills
        habilidades[0].classList.add("golang");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("devops");
        habilidades[5].classList.add("movil");
        // Soft skills
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("liderazgo");
        habilidades[9].classList.add("resolucion");
        habilidades[10].classList.add("aprendizaje");
        habilidades[11].classList.add("adaptabilidad");
    }
}

function descargarCV(){
    const link = document.createElement('a');
    link.href = './files/PintoAguilar_CV.pdf';
    link.download = 'PintoAguilar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(title, message, isError = false) {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastTitle = toast.querySelector('.toast-title');
    const toastText = toast.querySelector('.toast-text');
    const toastProgress = toast.querySelector('.toast-progress');
    
    // Actualizar contenido
    toastTitle.textContent = title;
    toastText.textContent = message;
    
    // Cambiar icono según tipo
    if (isError) {
        toastIcon.className = 'toast-icon fa-solid fa-circle-xmark error';
        toast.classList.add('error');
    } else {
        toastIcon.className = 'toast-icon fa-solid fa-check-circle';
        toast.classList.remove('error');
    }
    
    // Reiniciar animación de progreso
    toastProgress.style.animation = 'none';
    toastProgress.offsetHeight; // Trigger reflow
    toastProgress.style.animation = 'progress 5s linear forwards';
    
    // Mostrar toast
    toast.classList.add('show');
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const btnEnviar = document.getElementById('btn-enviar');
            const btnText = btnEnviar.querySelector('.btn-text');
            const btnLoading = btnEnviar.querySelector('.btn-loading');
            const btnIcon = btnEnviar.querySelector('.btn-icon');
            
            // Mostrar estado de carga
            btnText.style.display = 'none';
            btnIcon.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            btnEnviar.disabled = true;
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showToast(
                        '¡Mensaje enviado!', 
                        'Gracias por contactarme. Te responderé pronto.'
                    );
                    contactForm.reset();
                } else {
                    showToast(
                        'Error al enviar', 
                        'Hubo un problema. Intenta de nuevo o envíame un email directo.',
                        true
                    );
                }
            } catch (error) {
                showToast(
                    'Error de conexión', 
                    'No se pudo enviar el mensaje. Verifica tu conexión.',
                    true
                );
            } finally {
                // Restaurar botón
                btnText.style.display = 'inline';
                btnIcon.style.display = 'inline';
                btnLoading.style.display = 'none';
                btnEnviar.disabled = false;
            }
        });
    }
    
    const btnCV = document.getElementById('btnDescargarCV');
    if(btnCV){
        btnCV.addEventListener('click', descargarCV);
    }
});

const proyectosData = {
    vixel: {
        nombre: "Vixel",
        titulo: "Vixel",
        descripcion: "Plataforma descentralizada revolucionaria que combina juegos, torneos competitivos y streaming en vivo, todo impulsado por tecnología Blockchain en la red Vara. Este proyecto ganó el 1er lugar a nivel Nacional y 2do lugar Internacional en competencias de desarrollo blockchain.",
        imagen: "./img/portafolio/vixel.png",
        tecnologias: ["Rust", "Blockchain", "Vara Network", "React", "Node.js", "WebSockets", "TypeScript"],
        features: [
            "Sistema de torneos con smart contracts",
            "Streaming en vivo integrado",
            "Wallet de criptomonedas nativa",
            "Sistema de recompensas tokenizado",
            "Matchmaking inteligente para jugadores"
        ],
        github: "https://github.com/JosephAntonyDev/Vixel-Torn",
        demo: "#"
    },
    vaultdoc: {
        nombre: "VaultDoc-VD",
        titulo: "VaultDoc-VD",
        descripcion: "Plataforma de seguridad empresarial diseñada para la gestión segura de archivos gubernamentales. Incluye análisis de vulnerabilidades en tiempo real, encriptación de extremo a extremo y auditoría completa de accesos.",
        imagen: "./img/portafolio/VaultDoc.png",
        tecnologias: ["Go", "PostgreSQL", "JWT", "Docker", "Redis", "Microservices", "gRPC"],
        features: [
            "Encriptación AES-256 de archivos",
            "Análisis de vulnerabilidades automatizado",
            "Sistema de permisos granular",
            "Auditoría y logs de seguridad",
            "API RESTful documentada"
        ],
        github: "https://github.com/AnabelenScript/VaultDoc-VD",
        demo: "#"
    },
    geova: {
        nombre: "GEOVA",
        titulo: "GEOVA",
        descripcion: "Sistema inteligente de medición y análisis para proyectos de ingeniería civil. Utiliza sensores IoT con Raspberry Pi y ESP32 para recopilar datos en tiempo real, procesarlos con Python y visualizarlos en dashboards interactivos.",
        imagen: "./img/portafolio/GEOVA.png",
        tecnologias: ["Python", "Raspberry Pi", "ESP32", "FastAPI", "PostgreSQL", "MQTT", "React"],
        features: [
            "Monitoreo en tiempo real con IoT",
            "Dashboard de visualización de datos",
            "Alertas automáticas configurables",
            "Exportación de reportes PDF",
            "API para integración externa"
        ],
        github: "https://github.com/AnabelenScript/Geova_Frontend",
        demo: "#"
    },
    frimeet: {
        nombre: "Frimeet",
        titulo: "Frimeet",
        descripcion: "Plataforma de recomendaciones inteligente que combina APIs REST robustas con bases de datos relacionales (PostgreSQL) y no relacionales (MongoDB). El sistema utiliza algoritmos de Machine Learning para personalizar las sugerencias.",
        imagen: "./img/portafolio/Frimeet.png",
        tecnologias: ["Node.js", "MongoDB", "PostgreSQL", "Python", "Express", "Machine Learning", "Redis"],
        features: [
            "Motor de recomendaciones con ML",
            "Sistema de caché con Redis",
            "Autenticación OAuth 2.0",
            "Base de datos híbrida",
            "API REST documentada con Swagger"
        ],
        github: "https://github.com/AlleksDev/Frimeet",
        demo: "#"
    },
    readingclub: {
        nombre: "Reading Club",
        titulo: "Reading Club",
        descripcion: "Plataforma social para amantes de la lectura donde pueden crear y unirse a clubs de lectura, compartir reseñas, organizar sesiones de discusión y descubrir nuevos libros basados en sus intereses.",
        imagen: "./img/portafolio/ReadingClub.png",
        tecnologias: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
        features: [
            "Creación de clubs de lectura",
            "Chat en tiempo real para discusiones",
            "Sistema de reseñas y calificaciones",
            "Recomendaciones personalizadas",
            "Calendario de eventos de lectura"
        ],
        github: "https://github.com/JosephAntonyDev",
        demo: "#"
    },
    animtop: {
        nombre: "AnimTop",
        titulo: "AnimTop",
        descripcion: "Aplicación web interactiva para explorar los mejores animes, estrenos de temporada y tendencias. Consume APIs externas para mostrar información actualizada con una interfaz moderna y atractiva.",
        imagen: "./img/portafolio/AnimTop2.png",
        tecnologias: ["JavaScript", "API REST", "CSS3", "HTML5", "Fetch API"],
        features: [
            "Top animes por popularidad y rating",
            "Calendario de estrenos por temporada",
            "Búsqueda avanzada con filtros",
            "Información detallada de cada anime",
            "Diseño responsive y moderno"
        ],
        github: "https://github.com/JosephAntonyDev",
        demo: "#"
    },
    game2d: {
        nombre: "Videojuego 2D Educativo",
        titulo: "Videojuego 2D Educativo",
        descripcion: "Juego educativo desarrollado para el Museo Chiapas de Ciencia y Tecnología. Enseña la formación del cuerpo humano de manera interactiva y divertida, diseñado especialmente para niños y jóvenes visitantes del museo.",
        imagen: "./img/portafolio/Game2D.jpg",
        tecnologias: ["Unity", "C#", "2D Graphics", "Game Design", "UI/UX"],
        features: [
            "Mecánicas de juego intuitivas",
            "Contenido educativo validado",
            "Múltiples niveles de dificultad",
            "Gráficos 2D optimizados",
            "Sistema de logros y progreso"
        ],
        github: "https://github.com/JosephAntonyDev/Human_formation-Game",
        demo: "#"
    },
    encriptador: {
        nombre: "Encriptador de Texto",
        titulo: "Encriptador de Texto",
        descripcion: "Herramienta web de encriptación y desencriptación de texto desarrollada como parte del programa Oracle Next Education (ONE) de Alura. Permite codificar mensajes de forma segura utilizando algoritmos personalizados.",
        imagen: "./img/portafolio/encriptador.png",
        tecnologias: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
        features: [
            "Encriptación de mensajes de texto",
            "Desencriptación instantánea",
            "Copiar al portapapeles",
            "Interfaz intuitiva y limpia",
            "100% responsive"
        ],
        github: "https://github.com/JosephAntonyDev/Challenge_oracle_grupo7",
        demo: "https://josephantonydev.github.io/Challenge_oracle_grupo7/"
    }
};

// Función para abrir el modal
function abrirModal(proyectoId) {
    const proyecto = proyectosData[proyectoId];
    if (!proyecto) return;
    
    const modal = document.getElementById('modal-proyecto');
    
    // Actualizar contenido del modal
    document.getElementById('modal-proyecto-nombre').textContent = proyecto.nombre;
    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    document.getElementById('modal-imagen').src = proyecto.imagen;
    document.getElementById('modal-imagen').alt = proyecto.nombre;
    
    // Stats
    document.getElementById('modal-tech-count').textContent = proyecto.tecnologias.length;
    document.getElementById('modal-features-count').textContent = proyecto.features.length;
    
    // Links
    document.getElementById('modal-github-link').href = proyecto.github;
    document.getElementById('modal-demo-link').href = proyecto.demo;
    
    // Tecnologías
    const techList = document.getElementById('modal-tech-list');
    techList.innerHTML = proyecto.tecnologias.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Features
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = proyecto.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Mostrar modal
    modal.classList.add('activo');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal-proyecto');
    modal.classList.remove('activo');
    document.body.style.overflow = '';
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-proyecto');
    if (e.target === modal) {
        cerrarModal();
    }
});