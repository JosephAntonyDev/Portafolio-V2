// ============================================
// PORTAFOLIO: Cards, Tabs y Modal
// ============================================

function generarCardHTML(key, proyecto) {
    const isAndroid = proyecto.categoria === 'android';
    const cardClass = isAndroid ? 'proyecto-card proyecto-card-android' : 'proyecto-card';
    const imgClases = ['proyecto-imagen'];
    if (proyecto.placeholderClases) imgClases.push(proyecto.placeholderClases);

    // Badges HTML
    let badgesHTML = '';
    if (proyecto.badges && proyecto.badges.length > 0) {
        if (proyecto.badges.length === 1) {
            const b = proyecto.badges[0];
            badgesHTML = `<div class="proyecto-destacado ${b.clase}"><i class="${b.icono}"></i> ${b.texto}</div>`;
        } else {
            badgesHTML = '<div class="proyecto-badges">' +
                proyecto.badges.map(b => `<div class="proyecto-destacado ${b.clase}"><i class="${b.icono}"></i> ${b.texto}</div>`).join('') +
                '</div>';
        }
    }

    // Estado HTML
    let estadoHTML = '';
    if (proyecto.estado) {
        estadoHTML = `<div class="proyecto-estado ${proyecto.estado.clase}"><i class="${proyecto.estado.icono}"></i> ${proyecto.estado.texto}</div>`;
    }

    // Tech tags (max 4 on card)
    const cardTechs = proyecto.tecnologias.slice(0, 4);
    const techHTML = cardTechs.map(t => `<span class="tech-tag">${t}</span>`).join('');

    return `
    <article class="${cardClass}" data-proyecto="${key}">
        <div class="${imgClases.join(' ')}">
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}" loading="lazy">
            <div class="proyecto-overlay">
                <button class="btn-ver-proyecto" onclick="abrirModal('${key}')">
                    <i class="fa-solid fa-eye"></i> Ver Detalles
                </button>
            </div>
            ${badgesHTML}
            ${estadoHTML}
        </div>
        <div class="proyecto-info">
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.resumen}</p>
            <div class="proyecto-tecnologias">${techHTML}</div>
            <div class="proyecto-acciones">
                <a href="${proyecto.github}" target="_blank" class="btn-proyecto">
                    <i class="fa-brands fa-github"></i> GitHub
                </a>
                <button class="btn-proyecto btn-detalles" onclick="abrirModal('${key}')">
                    Detalles <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </article>`;
}

function generarMasProyectosCard(tipo) {
    const isAndroid = tipo === 'android';
    return `
    <article class="proyecto-card proyecto-mas${isAndroid ? ' proyecto-card-android' : ''}">
        <div class="proyecto-imagen proyecto-github">
            <div class="github-icon-big">
                <i class="fa-brands fa-${isAndroid ? 'android' : 'github'}"></i>
            </div>
        </div>
        <div class="proyecto-info">
            <h3>${isAndroid ? 'Próximos Proyectos' : 'Más Proyectos'}</h3>
            <p>${isAndroid ? 'Más aplicaciones Android nativas en desarrollo. Explora mi GitHub para ver avances.' : 'Explora más proyectos, contribuciones y código en mi perfil de GitHub.'}</p>
            <div class="proyecto-acciones">
                <a href="https://github.com/JosephAntonyDev" target="_blank" class="btn-proyecto btn-github-full">
                    <i class="fa-brands fa-github"></i> Ver GitHub
                </a>
            </div>
        </div>
    </article>`;
}

function generarPortfolioCards() {
    const webContainer = document.getElementById('portfolio-web');
    const androidContainer = document.getElementById('portfolio-android');
    if (!webContainer || !androidContainer) return;

    let webHTML = '';
    let androidHTML = '';

    Object.entries(proyectosData).forEach(([key, proyecto]) => {
        const cardHTML = generarCardHTML(key, proyecto);
        if (proyecto.categoria === 'android') {
            androidHTML += cardHTML;
        } else {
            webHTML += cardHTML;
        }
    });

    webHTML += generarMasProyectosCard('web');
    androidHTML += generarMasProyectosCard('android');

    webContainer.innerHTML = webHTML;
    androidContainer.innerHTML = androidHTML;
}

function initPortfolioTabs() {
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioContents = document.querySelectorAll('.portfolio-content');
    
    portfolioTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            portfolioTabs.forEach(t => t.classList.remove('active'));
            portfolioContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const targetId = `portfolio-${tab.dataset.tab}`;
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// ============================================
// GALERÍA MÓVIL - Estado global
// ============================================
let galeriaActual = [];
let galeriaIndex = 0;
let lightboxAbierto = false;

// Función para abrir el modal
function abrirModal(proyectoId) {
    const proyecto = proyectosData[proyectoId];
    if (!proyecto) return;
    
    const modal = document.getElementById('modal-proyecto');
    const modalContent = modal.querySelector('.modal-contenido');
    const modalImg = document.getElementById('modal-imagen');
    const modalImgContainer = document.querySelector('.modal-imagen-principal');
    const galeriaContainer = document.getElementById('modal-galeria');

    // Add/remove android class for modal styling
    if (proyecto.categoria === 'android') {
        modalContent.classList.add('modal-android');
    } else {
        modalContent.classList.remove('modal-android');
    }
    
    // Actualizar contenido del modal
    document.getElementById('modal-proyecto-nombre').textContent = proyecto.nombre;
    document.getElementById('modal-titulo').textContent = proyecto.titulo;
    document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
    
    // Imagen vs Galería
    const tieneGaleria = proyecto.galeria && proyecto.galeria.length > 0;

    if (tieneGaleria) {
        // Ocultar imagen simple, mostrar galería
        modalImgContainer.style.display = 'none';
        galeriaContainer.style.display = '';
        galeriaActual = proyecto.galeria;
        galeriaIndex = 0;
        renderGaleria();
    } else if (proyecto.imagen) {
        // Imagen simple (web projects)
        modalImgContainer.style.display = 'block';
        galeriaContainer.style.display = 'none';
        modalImg.src = proyecto.imagen;
        modalImg.alt = proyecto.nombre;
        galeriaActual = [];
    } else {
        modalImgContainer.style.display = 'none';
        galeriaContainer.style.display = 'none';
        galeriaActual = [];
    }
    
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

// ============================================
// GALERÍA - Render dinámico
// ============================================

function renderGaleria() {
    const container = document.getElementById('modal-galeria');
    if (!container || galeriaActual.length === 0) return;

    const total = galeriaActual.length;
    const isSingle = total === 1;

    container.className = 'galeria-movil' + (isSingle ? ' single' : '');

    // Hero
    let heroHTML = `
    <div class="galeria-hero" onclick="abrirLightbox()">
        <img class="galeria-hero-img" src="${galeriaActual[galeriaIndex]}" alt="Screenshot ${galeriaIndex + 1}">
        <button class="galeria-nav prev" onclick="event.stopPropagation(); galeriaNav(-1)">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="galeria-nav next" onclick="event.stopPropagation(); galeriaNav(1)">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
        <span class="galeria-counter">${galeriaIndex + 1} / ${total}</span>
        <button class="galeria-expand" onclick="event.stopPropagation(); abrirLightbox()" title="Ver en pantalla completa">
            <i class="fa-solid fa-expand"></i>
        </button>
    </div>`;

    // Thumbnails
    let thumbsHTML = '';
    if (total > 1) {
        const scrollable = total > 5 ? ' scrollable' : '';
        thumbsHTML = `<div class="galeria-thumbs${scrollable}">`;
        galeriaActual.forEach((img, i) => {
            thumbsHTML += `
            <div class="galeria-thumb${i === galeriaIndex ? ' active' : ''}" onclick="galeriaIrA(${i})">
                <img src="${img}" alt="Thumb ${i + 1}" loading="lazy">
            </div>`;
        });
        thumbsHTML += '</div>';
    }

    container.innerHTML = heroHTML + thumbsHTML;

    // Attach swipe to gallery hero
    const heroEl = container.querySelector('.galeria-hero');
    if (heroEl) {
        heroEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        heroEl.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe('galeria'); }, { passive: true });
    }
}

function galeriaNav(dir) {
    if (galeriaActual.length <= 1) return;
    galeriaIndex = (galeriaIndex + dir + galeriaActual.length) % galeriaActual.length;
    updateGaleriaHero();
}

function galeriaIrA(index) {
    if (index === galeriaIndex) return;
    galeriaIndex = index;
    updateGaleriaHero();
}

function updateGaleriaHero() {
    const heroImg = document.querySelector('.galeria-hero-img');
    const counter = document.querySelector('.galeria-counter');
    const thumbs = document.querySelectorAll('.galeria-thumb');

    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
            heroImg.src = galeriaActual[galeriaIndex];
            heroImg.alt = `Screenshot ${galeriaIndex + 1}`;
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1)';
        }, 180);
    }

    if (counter) {
        counter.textContent = `${galeriaIndex + 1} / ${galeriaActual.length}`;
    }

    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === galeriaIndex);
    });

    // Scroll active thumb into view
    const activeThumb = document.querySelector('.galeria-thumb.active');
    if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// ============================================
// LIGHTBOX - Vista fullscreen
// ============================================

function abrirLightbox() {
    if (galeriaActual.length === 0) return;
    const lightbox = document.getElementById('galeria-lightbox');
    const img = document.getElementById('lightbox-imagen');
    const counterText = document.getElementById('lightbox-counter-text');

    img.src = galeriaActual[galeriaIndex];
    counterText.textContent = `${galeriaIndex + 1} / ${galeriaActual.length}`;

    lightbox.classList.add('activo');
    lightboxAbierto = true;

    // Hide nav if single
    const navBtns = lightbox.querySelectorAll('.lightbox-nav');
    const counterEl = lightbox.querySelector('.lightbox-counter');
    if (galeriaActual.length <= 1) {
        navBtns.forEach(b => b.style.display = 'none');
        counterEl.style.display = 'none';
    } else {
        navBtns.forEach(b => b.style.display = '');
        counterEl.style.display = '';
    }
}

function cerrarLightbox() {
    const lightbox = document.getElementById('galeria-lightbox');
    lightbox.classList.remove('activo');
    lightboxAbierto = false;
}

function lightboxNav(dir) {
    if (galeriaActual.length <= 1) return;
    galeriaIndex = (galeriaIndex + dir + galeriaActual.length) % galeriaActual.length;

    const img = document.getElementById('lightbox-imagen');
    const counterText = document.getElementById('lightbox-counter-text');

    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    setTimeout(() => {
        img.src = galeriaActual[galeriaIndex];
        counterText.textContent = `${galeriaIndex + 1} / ${galeriaActual.length}`;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 180);

    // Sync modal gallery thumbnails
    updateGaleriaHero();
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal-proyecto');
    modal.classList.remove('activo');
    document.body.style.overflow = '';
    cerrarLightbox();
    galeriaActual = [];
    galeriaIndex = 0;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (lightboxAbierto) {
            cerrarLightbox();
        } else {
            cerrarModal();
        }
        return;
    }

    // Arrow navigation for gallery and lightbox
    if (galeriaActual.length > 1) {
        if (e.key === 'ArrowLeft') {
            if (lightboxAbierto) lightboxNav(-1);
            else galeriaNav(-1);
        } else if (e.key === 'ArrowRight') {
            if (lightboxAbierto) lightboxNav(1);
            else galeriaNav(1);
        }
    }
});

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-proyecto');
    if (e.target === modal) {
        cerrarModal();
    }
});

// Cerrar lightbox al hacer click en el fondo
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('galeria-lightbox');
    if (e.target === lightbox) {
        cerrarLightbox();
    }
});

// ============================================
// TOUCH / SWIPE SUPPORT
// ============================================
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe(target) {
    const diff = touchStartX - touchEndX;
    const threshold = 50;
    if (Math.abs(diff) < threshold) return;

    if (target === 'lightbox' && lightboxAbierto) {
        lightboxNav(diff > 0 ? 1 : -1);
    } else if (target === 'galeria' && galeriaActual.length > 1) {
        galeriaNav(diff > 0 ? 1 : -1);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Swipe on lightbox
    const lightbox = document.getElementById('galeria-lightbox');
    if (lightbox) {
        lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        lightbox.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe('lightbox'); }, { passive: true });
    }
});
