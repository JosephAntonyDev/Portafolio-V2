// ============================================
// MENÚ DE NAVEGACIÓN
// ============================================

let menuVisible = false;

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
