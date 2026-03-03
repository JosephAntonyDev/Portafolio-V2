// ============================================
// FORMULARIO DE CONTACTO
// ============================================

function initContactForm() {
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
}
