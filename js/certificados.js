// ============================================
// CERTIFICADOS - Funcionalidad de filtros y modal
// ============================================

// Datos de certificados (puedes agregar mas o cargar desde JSON)
const certificadosData = {
  'aws-foundations': {
    titulo: 'AWS Academy Cloud Foundations',
    institucion: 'Amazon Web Services',
    icon: 'fa-brands fa-aws',
    iconBg: 'linear-gradient(135deg, #ff9900 0%, #ff6600 100%)',
    imagen: './img/certificados/aws-foundations.png',
    pdf: './docs/certificados/aws-foundations.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'aws-architecting': {
    titulo: 'AWS Academy Cloud Architecting',
    institucion: 'Amazon Web Services',
    icon: 'fa-brands fa-aws',
    iconBg: 'linear-gradient(135deg, #ff9900 0%, #ff6600 100%)',
    imagen: './img/certificados/aws-architecting.png',
    pdf: './docs/certificados/aws-architecting.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'aws-developing': {
    titulo: 'AWS Academy Cloud Developing',
    institucion: 'Amazon Web Services',
    icon: 'fa-brands fa-aws',
    iconBg: 'linear-gradient(135deg, #ff9900 0%, #ff6600 100%)',
    imagen: './img/certificados/aws-developing.png',
    pdf: './docs/certificados/aws-developing.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'aws-genai': {
    titulo: 'AWS Generative AI Foundations',
    institucion: 'Amazon Web Services',
    icon: 'fa-brands fa-aws',
    iconBg: 'linear-gradient(135deg, #ff9900 0%, #ff6600 100%)',
    imagen: './img/certificados/aws-genai.png',
    pdf: './docs/certificados/aws-genai.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'cisco-networking': {
    titulo: 'Networking Basics',
    institucion: 'Cisco Networking Academy',
    icon: 'fa-solid fa-network-wired',
    iconBg: 'linear-gradient(135deg, #049fd9 0%, #0277a6 100%)',
    imagen: './img/certificados/cisco-networking.png',
    pdf: './docs/certificados/cisco-networking.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'cisco-os-basics': {
    titulo: 'Operating Systems Basics',
    institucion: 'Cisco Networking Academy',
    icon: 'fa-solid fa-desktop',
    iconBg: 'linear-gradient(135deg, #049fd9 0%, #0277a6 100%)',
    imagen: './img/certificados/cisco-os-basics.png',
    pdf: './docs/certificados/cisco-os-basics.pdf',
    verificar: 'https://www.credly.com/badges/'
  },
  'cisco-os-support': {
    titulo: 'Operating Systems Support',
    institucion: 'Cisco Networking Academy',
    icon: 'fa-solid fa-screwdriver-wrench',
    iconBg: 'linear-gradient(135deg, #049fd9 0%, #0277a6 100%)',
    imagen: './img/certificados/cisco-os-support.png',
    pdf: './docs/certificados/cisco-os-support.pdf',
    verificar: 'https://www.credly.com/badges/'
  }
};

// Inicializar filtros de certificados
function initCertificadosFiltros() {
  const filtros = document.querySelectorAll('.filtro-btn');
  const cards = document.querySelectorAll('.certificado-card');

  filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
      // Quitar clase active de todos los filtros
      filtros.forEach(f => f.classList.remove('active'));
      // Agregar clase active al filtro clickeado
      filtro.classList.add('active');

      const categoria = filtro.dataset.filter;

      cards.forEach(card => {
        if (categoria === 'todos' || card.dataset.category === categoria) {
          card.style.display = 'block';
          // Re-trigger animation
          card.style.animation = 'none';
          card.offsetHeight; // Trigger reflow
          card.style.animation = null;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Abrir modal de certificado
function abrirCertificado(certId) {
  const cert = certificadosData[certId];
  if (!cert) return;

  const modal = document.getElementById('modal-certificado');
  const iconEl = document.getElementById('modal-cert-icon');
  const logoEl = document.querySelector('.modal-certificado-logo');
  const institucionEl = document.getElementById('modal-cert-institucion');
  const tituloEl = document.getElementById('modal-cert-titulo');
  const imagenEl = document.getElementById('modal-cert-imagen');
  const descargarEl = document.getElementById('modal-cert-descargar');
  const verificarEl = document.getElementById('modal-cert-verificar');

  // Actualizar contenido
  iconEl.className = cert.icon;
  logoEl.style.background = cert.iconBg;
  institucionEl.textContent = cert.institucion;
  tituloEl.textContent = cert.titulo;
  imagenEl.src = cert.imagen;
  imagenEl.alt = cert.titulo;
  descargarEl.href = cert.pdf;
  verificarEl.href = cert.verificar;

  // Mostrar modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal de certificado
function cerrarModalCertificado() {
  const modal = document.getElementById('modal-certificado');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-certificado');
  if (e.target === modal) {
    cerrarModalCertificado();
  }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModalCertificado();
  }
});

// Inicializar cuando el DOM este listo
document.addEventListener('DOMContentLoaded', () => {
  // Se inicializara desde app.js despues de cargar las secciones
});
