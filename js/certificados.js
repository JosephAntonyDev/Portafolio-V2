// ============================================
// CERTIFICADOS — Datos, renderizado y modal
// ============================================

const PROVEEDORES = {
    aws: {
        nombre: 'Amazon Web Services',
        color: '#FF9900',
        icono: 'fa-brands fa-aws',
        urlBase: 'https://www.credly.com/badges/'
    },
    cisco: {
        nombre: 'Cisco',
        color: '#1BA0D7',
        icono: 'fa-solid fa-network-wired',
        urlBase: 'https://www.credly.com/badges/'
    },
    alura: {
        nombre: 'Alura Latam',
        color: '#7C3AED',
        icono: 'fa-solid fa-graduation-cap',
        urlBase: 'https://cursos.alura.com.br/certificate/'
    }
};

const CATEGORIAS_CERT = {
    cloud:       { label: 'Cloud',       icono: 'fa-solid fa-cloud' },
    redes:       { label: 'Redes',       icono: 'fa-solid fa-network-wired' },
    desarrollo:  { label: 'Desarrollo',  icono: 'fa-solid fa-code' },
    profesional: { label: 'Profesional', icono: 'fa-solid fa-briefcase' }
};

const TABS_ORDER = [
    { tab: 'todos',       label: 'Todos',       count: 28, icono: 'fa-solid fa-layer-group' },
    { tab: 'cloud',       label: 'Cloud',       count: 4,  icono: 'fa-solid fa-cloud' },
    { tab: 'redes',       label: 'Redes',       count: 3,  icono: 'fa-solid fa-network-wired' },
    { tab: 'desarrollo',  label: 'Desarrollo',  count: 11, icono: 'fa-solid fa-code' },
    { tab: 'profesional', label: 'Profesional', count: 10, icono: 'fa-solid fa-briefcase' }
];

const CERTIFICADOS = [
    // ── AWS (4) ──────────────────────────────────────────────────────────
    {
        id: 'aws-genai',
        titulo: 'AWS Academy Graduate — Generative AI Foundations',
        proveedor: 'aws', categoria: 'cloud',
        fecha: 'nov. 2025',
        credId: 'fb4e5840-9c4e-4f29-a0f1-b50588c8dbce',
        imagen: null
    },
    {
        id: 'aws-arch',
        titulo: 'AWS Academy Graduate — Cloud Architecting',
        proveedor: 'aws', categoria: 'cloud',
        fecha: 'mar. 2025',
        credId: '613fb3e6-1e80-49e2-a0e5-70c49a59e2cb',
        imagen: null
    },
    {
        id: 'aws-dev',
        titulo: 'AWS Academy Graduate — Cloud Developing',
        proveedor: 'aws', categoria: 'cloud',
        fecha: 'dic. 2024',
        credId: 'ec295e5f-e9db-41f8-a946-d22e2394b489',
        imagen: null
    },
    {
        id: 'aws-found',
        titulo: 'AWS Academy Graduate — Cloud Foundations',
        proveedor: 'aws', categoria: 'cloud',
        fecha: 'nov. 2023',
        credId: '30f622c6-485d-4e8f-b9e5-48c81bfea5c5',
        imagen: null
    },
    // ── Cisco (3) ────────────────────────────────────────────────────────
    {
        id: 'cisco-net',
        titulo: 'Networking Basics',
        proveedor: 'cisco', categoria: 'redes',
        fecha: 'mar. 2025',
        credId: 'c07fa544-a894-4c99-bf1e-06e6971315c9',
        imagen: null
    },
    {
        id: 'cisco-os-basics',
        titulo: 'Operating Systems Basics',
        proveedor: 'cisco', categoria: 'redes',
        fecha: 'sept. 2025',
        credId: 'a9357352-030d-4976-8695-ae76032501ea',
        imagen: null
    },
    {
        id: 'cisco-os-support',
        titulo: 'Operating Systems Support',
        proveedor: 'cisco', categoria: 'redes',
        fecha: 'oct. 2025',
        credId: 'e06fc620-1a0a-495a-a98c-635e25404075',
        imagen: null
    },
    // ── Alura — Desarrollo (11) ──────────────────────────────────────────
    {
        id: 'alura-html1',
        titulo: 'HTML y CSS: ambientes de desarrollo, estructura de archivos y tags',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: '9eaea176-d44f-41ba-a2d1-637c4edd8844',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/html-css-desarrollo-estructura-archivos-tags/certificate',
        imagen: null
    },
    {
        id: 'alura-html2',
        titulo: 'HTML y CSS: Clases, Posicionamiento y Flexbox',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: 'e8084ef6-4f2d-44c0-bff6-01b6e76aa582',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/html-css-clases-posicionamiento-flexbox/certificate',
        imagen: null
    },
    {
        id: 'alura-html3',
        titulo: 'HTML y CSS: header, footer y variables CSS',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: 'e19a520c-4c66-4b28-b09f-98579caddfd6',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/html-css-header-footer-variables-css/certificate',
        imagen: null
    },
    {
        id: 'alura-html4',
        titulo: 'HTML y CSS: trabajando con responsividad y publicación de proyectos',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: '3af1194e-fc1c-49bf-a983-a6512e5c51d0',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/html-css-trabajando-responsividad-publicacion-proyectos/certificate',
        imagen: null
    },
    {
        id: 'alura-java1',
        titulo: 'Java: creando tu primera aplicación',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'dic. 2024',
        credId: 'ca9e56b5-4737-4747-9c6c-064f8e9264e9',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/java-creando-primera-aplicacion/certificate',
        imagen: null
    },
    {
        id: 'alura-java2',
        titulo: 'Java: aplicando la Orientación a Objetos',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ene. 2025',
        credId: '5434ea80-60c5-4e77-a328-b3bb1ae47d7f',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/java-aplicando-orientacion-objetos/certificate',
        imagen: null
    },
    {
        id: 'alura-java3',
        titulo: 'Java: trabajar con listas y colecciones de datos',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ene. 2025',
        credId: '7b3b1597-9c7d-40c4-bb91-0fbb671b7d13',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/java-trabajar-listas-colecciones-datos/certificate',
        imagen: null
    },
    {
        id: 'alura-git',
        titulo: 'Git y GitHub: repositorio, commit y versiones',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: '8ebbd5d3-d8b6-412a-98ad-30660c8e8fa0',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/git-github-repositorio-commit-versiones/certificate',
        imagen: null
    },
    {
        id: 'alura-logic1',
        titulo: 'Lógica de programación: sumérgete en la programación con JavaScript',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'jul. 2024',
        credId: '34134a4c-1659-4fc1-abda-92fe1b9fbb91',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/logica-programacion-sumergete-programacion-javascript/certificate',
        imagen: null
    },
    {
        id: 'alura-logic2',
        titulo: 'Lógica de programación: explorar funciones y listas',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: 'c7d54773-707a-438b-ab94-d55805924619',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/logica-programacion-explorar-funciones-listas/certificate',
        imagen: null
    },
    {
        id: 'alura-challenge',
        titulo: 'Prácticando lógica de programación: Challenge Encriptador de texto',
        proveedor: 'alura', categoria: 'desarrollo',
        fecha: 'ago. 2024',
        credId: '5deabd15-e152-4379-97a7-3bc4334889e8',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/challenge-encriptador-texto/certificate',
        imagen: null
    },
    // ── Alura — Profesional (10) ─────────────────────────────────────────
    {
        id: 'alura-aprender',
        titulo: 'Aprender a aprender: técnicas para tu autodesarrollo',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'jun. 2024',
        credId: 'b6cb1e89-7f8b-4c1f-8b50-9f76dfc1eb4b',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/aprender-a-aprender-tecnicas-autodesarrollo/certificate',
        imagen: null
    },
    {
        id: 'alura-chatgpt',
        titulo: 'ChatGPT: optimizando la calidad de los resultados',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'ago. 2024',
        credId: '94c4283a-7f42-413c-b819-5a0b38a85260',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/chatgpt-optimizando-calidad-resultados/certificate',
        imagen: null
    },
    {
        id: 'alura-carrera',
        titulo: 'Desarrollo de carrera: demanda del mercado',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'oct. 2024',
        credId: '5be207a3-20d4-4f6e-b115-c35077e3cf94',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/desarrollo-carrera-demanda-mercado/certificate',
        imagen: null
    },
    {
        id: 'alura-emprendimiento',
        titulo: 'Emprendimiento: De la idea al plan de negocios',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'oct. 2024',
        credId: 'ed7d2c8b-9933-4c74-af5f-5cd8cee12c40',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/emprendimiento-idea-plan-negocios/certificate',
        imagen: null
    },
    {
        id: 'alura-foco',
        titulo: 'Foco: Enfocarse trae más resultados para el día a día',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'ago. 2024',
        credId: 'e47cf9e2-9b12-458e-9e06-9cd69ddd3ff6',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/foco-habito-dia-a-dia/certificate',
        imagen: null
    },
    {
        id: 'alura-agilidad',
        titulo: 'Fundamentos de Agilidad: Primeros pasos para la transformación ágil',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'oct. 2024',
        credId: '3236ea58-8ff2-494d-8ed3-561638d64ab1',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/fundamentos-agilidad-primeros-pasos-transformacion-agil/certificate',
        imagen: null
    },
    {
        id: 'alura-habitos',
        titulo: 'Hábitos: Ser productivo para cumplir sus metas personales',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'ago. 2024',
        credId: 'c0e209cc-172f-4744-939c-14f1fbf158f9',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/habitos-productivo-metas-personales/certificate',
        imagen: null
    },
    {
        id: 'alura-linkedin',
        titulo: 'LinkedIn: Cómo hacer que tu perfil trabaje por ti',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'ago. 2024',
        credId: '9fa330e4-c0a7-4bc4-b643-82c20a6b7506',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/linkedin-hacer-perfil-trabaje-por-ti/certificate',
        imagen: null
    },
    {
        id: 'alura-proposito',
        titulo: 'Propósito profesional: ser el protagonista de tu carrera',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'oct. 2024',
        credId: 'd0872f61-0cb7-4c8a-8715-74cedce40e23',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/proposito-profesional-protagonista-carrera/certificate',
        imagen: null
    },
    {
        id: 'alura-transicion',
        titulo: 'Transición de carrera: una guía al campo de tecnología',
        proveedor: 'alura', categoria: 'profesional',
        fecha: 'oct. 2024',
        credId: 'c7f30a74-7d1a-49fc-b1ad-6c3ec9a69057',
        url: 'https://app.aluracursos.com/user/joseantoniopintoaguilar/course/transicion-carrera-guia-campo-tecnologia/certificate',
        imagen: null
    }
];

// ── State ─────────────────────────────────────────────────────────────────────

let currentFilter   = 'todos';
let currentPage     = 1;
let currentTabIndex = 0;

function getPerPage() {
    return window.innerWidth <= 700 ? 8 : 12;
}

function getFilteredCerts() {
    return currentFilter === 'todos'
        ? CERTIFICADOS
        : CERTIFICADOS.filter(c => c.categoria === currentFilter);
}

// ── Rendering ─────────────────────────────────────────────────────────────────

function renderCertCards() {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;

    const filtered  = getFilteredCerts();
    const perPage   = getPerPage();
    const total     = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1)          currentPage = 1;

    const start    = (currentPage - 1) * perPage;
    const pageCerts = filtered.slice(start, start + perPage);

    grid.innerHTML = pageCerts.map((cert, i) => {
        const prov = PROVEEDORES[cert.proveedor];
        const cat  = CATEGORIAS_CERT[cert.categoria];
        return `
            <div class="cert-card cert-card-anim"
                 data-prov="${cert.proveedor}"
                 style="--prov-color:${prov.color}; animation-delay:${i * 0.045}s">
                <div class="cert-card-glow"></div>
                <div class="cert-card-header">
                    <div class="cert-prov-icon">
                        <i class="${prov.icono}"></i>
                    </div>
                    <span class="cert-cat-tag cert-cat-${cert.categoria}">
                        <i class="${cat.icono}"></i> ${cat.label}
                    </span>
                </div>
                <div class="cert-card-body">
                    <h3 class="cert-titulo">${cert.titulo}</h3>
                    <div class="cert-meta">
                        <span class="cert-fecha">
                            <i class="fa-solid fa-calendar-check"></i> ${cert.fecha}
                        </span>
                        <span class="cert-prov-name">${prov.nombre}</span>
                    </div>
                </div>
                <div class="cert-card-footer">
                    <button class="cert-ver-btn" onclick="abrirCertificado('${cert.id}')">
                        <i class="fa-solid fa-certificate"></i> Ver Certificado
                    </button>
                </div>
            </div>
        `;
    }).join('');

    renderPagination(total, perPage, totalPages);
}

// ── Pagination ────────────────────────────────────────────────────────────────

function renderPagination(total, perPage, totalPages) {
    const container = document.getElementById('cert-paginacion');
    if (!container) return;

    if (totalPages <= 1) { container.innerHTML = ''; return; }

    const p = currentPage;
    let html = '';

    // Prev
    html += `<button class="cert-page-btn cert-page-prev ${p === 1 ? 'disabled' : ''}"
                onclick="certGoPage(${p - 1})">
                <i class="fa-solid fa-chevron-left"></i>
             </button>`;

    // Pages
    for (let i = 1; i <= totalPages; i++) {
        const near = Math.abs(i - p) <= 1;
        const edge = i === 1 || i === totalPages;
        if (near || edge) {
            html += `<button class="cert-page-btn cert-page-num ${i === p ? 'active' : ''}"
                         onclick="certGoPage(${i})">${i}</button>`;
        } else if (Math.abs(i - p) === 2) {
            html += `<span class="cert-page-dots">…</span>`;
        }
    }

    // Next
    html += `<button class="cert-page-btn cert-page-next ${p === totalPages ? 'disabled' : ''}"
                onclick="certGoPage(${p + 1})">
                <i class="fa-solid fa-chevron-right"></i>
             </button>`;

    container.innerHTML = html;
}

function certGoPage(page) {
    const filtered   = getFilteredCerts();
    const totalPages = Math.ceil(filtered.length / getPerPage()) || 1;
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderCertCards();
    const sec = document.getElementById('certificados');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Filter tabs ───────────────────────────────────────────────────────────────

function setCertFilter(tab) {
    const idx = TABS_ORDER.findIndex(t => t.tab === tab);
    if (idx === -1) return;
    currentFilter   = tab;
    currentTabIndex = idx;
    currentPage     = 1;

    // Desktop tabs
    document.querySelectorAll('.cert-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.tab === tab)
    );

    // Mobile display
    updateMobileTabDisplay();

    renderCertCards();
}

function initCertTabs() {
    document.querySelectorAll('.cert-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            setCertFilter(this.dataset.tab);
        });
    });
}

// ── Mobile tab navigation ─────────────────────────────────────────────────────

function certTabNav(direction) {
    const newIdx = currentTabIndex + direction;
    if (newIdx >= 0 && newIdx < TABS_ORDER.length) {
        setCertFilter(TABS_ORDER[newIdx].tab);
    }
}

function updateMobileTabDisplay() {
    const tabData = TABS_ORDER[currentTabIndex];

    const display = document.getElementById('cert-mobile-tab-display');
    if (display) {
        display.innerHTML = `
            <i class="${tabData.icono}"></i>
            <span>${tabData.label}</span>
            <span class="cert-mobile-tab-count">${tabData.count}</span>
        `;
    }

    const prevBtn = document.getElementById('cert-mobile-prev');
    const nextBtn = document.getElementById('cert-mobile-next');
    if (prevBtn) prevBtn.disabled = currentTabIndex === 0;
    if (nextBtn) nextBtn.disabled = currentTabIndex === TABS_ORDER.length - 1;

    const dotsRow = document.getElementById('cert-tab-dots-row');
    if (dotsRow) {
        dotsRow.innerHTML = TABS_ORDER.map((t, i) =>
            `<span class="cert-tab-dot ${i === currentTabIndex ? 'active' : ''}"
                   onclick="setCertFilter('${t.tab}')"></span>`
        ).join('');
    }
}

// ── Modal ─────────────────────────────────────────────────────────────────────

let certActual = null;

function abrirCertificado(certId) {
    const cert = CERTIFICADOS.find(c => c.id === certId);
    if (!cert) return;
    certActual = cert;

    const prov = PROVEEDORES[cert.proveedor];
    const cat  = CATEGORIAS_CERT[cert.categoria];

    // Provider badge header
    const provBadge = document.getElementById('modal-cert-prov-badge');
    provBadge.innerHTML = `<i class="${prov.icono}"></i>`;
    provBadge.style.setProperty('--prov-color', prov.color);
    provBadge.dataset.prov = cert.proveedor;

    // Visual
    const imgEl         = document.getElementById('modal-cert-img');
    const badgeEl       = document.getElementById('modal-cert-badge');
    const fullscreenBtn = document.getElementById('modal-cert-fullscreen-btn');

    if (cert.imagen) {
        imgEl.src = cert.imagen;
        imgEl.style.display = 'block';
        badgeEl.style.display = 'none';
        fullscreenBtn.style.display = 'flex';
    } else {
        imgEl.style.display = 'none';
        badgeEl.style.display = 'flex';
        badgeEl.dataset.prov = cert.proveedor;
        document.getElementById('modal-cert-badge-icon').className = prov.icono;
        document.getElementById('modal-cert-badge-prov').textContent = prov.nombre;
        document.getElementById('modal-cert-badge-titulo').textContent = cert.titulo;
        document.getElementById('modal-cert-badge-fecha').textContent = cert.fecha;
        fullscreenBtn.style.display = 'none';
    }

    // Info
    document.getElementById('modal-cert-prov-label').textContent = prov.nombre;
    document.getElementById('modal-cert-titulo').textContent      = cert.titulo;
    document.getElementById('modal-cert-fecha').textContent       = cert.fecha;
    document.getElementById('modal-cert-cat').textContent         = cat.label;
    document.getElementById('modal-cert-credid').textContent      = cert.credId;
    document.getElementById('modal-cert-verify').href             = cert.url || (prov.urlBase + cert.credId);

    document.getElementById('modal-cert').classList.add('activo');
    document.body.style.overflow = 'hidden';
}

function cerrarCertificado() {
    document.getElementById('modal-cert').classList.remove('activo');
    document.body.style.overflow = '';
    certActual = null;
}

function certFullscreen() {
    if (!certActual || !certActual.imagen) return;
    const lb    = document.getElementById('galeria-lightbox');
    const lbImg = document.getElementById('lightbox-imagen');
    const counter = document.getElementById('lightbox-counter-text');
    lbImg.src = certActual.imagen;
    if (counter) counter.textContent = '';
    lb.querySelector('.lightbox-prev').style.display = 'none';
    lb.querySelector('.lightbox-next').style.display = 'none';
    lb.classList.add('activo');
}

// ── Stats counter animation ───────────────────────────────────────────────────

function animarContadores() {
    document.querySelectorAll('.cert-stat-num').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        let start = 0;
        const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / 1200, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        };
        requestAnimationFrame(step);
    });
}

// ── Keyboard ──────────────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('modal-cert').classList.contains('activo')) {
        cerrarCertificado();
    }
});

// ── Init ──────────────────────────────────────────────────────────────────────

function initCertificados() {
    renderCertCards();
    initCertTabs();
    updateMobileTabDisplay();

    // Counter animation on intersection
    const statsEl = document.querySelector('.cert-stats');
    if (statsEl && 'IntersectionObserver' in window) {
        let animated = false;
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !animated) {
                animated = true;
                animarContadores();
            }
        }, { threshold: 0.4 }).observe(statsEl);
    }
}
