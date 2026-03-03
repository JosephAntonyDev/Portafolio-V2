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
