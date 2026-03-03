// ============================================
// UTILIDADES GENERALES
// ============================================

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

// Descargar CV
function descargarCV(){
    const link = document.createElement('a');
    link.href = './files/Jose_Antonio_Pinto_CV.pdf';
    link.download = 'Jose_Antonio_Pinto_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
