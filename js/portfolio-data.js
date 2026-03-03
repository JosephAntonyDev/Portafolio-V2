// ============================================
// DATOS DE PROYECTOS DEL PORTAFOLIO
// ============================================

const proyectosData = {
    notaria178: {
        nombre: "Notaría 178",
        titulo: "Notaría 178",
        resumen: "Plataforma web para gestión operativa y administrativa de notaría con VPN segura y control de acceso.",
        descripcion: "Plataforma web robusta para la gestión operativa y administrativa de una notaría. Incluye arquitectura de red segura con servidor local configurado con la VPN Tailscale, permitiendo acceso remoto cifrado desde otras sucursales. Sistema avanzado de doble gestión para usuarios y empleados con estricto control de acceso y autenticación.",
        imagen: "./img/portafolio/notaria.png",
        categoria: "web",
        tecnologias: ["Go", "PostgreSQL", "Tailscale VPN", "Docker", "JWT", "Linux", "React", "Redis", "WebSockets"],
        features: [
            "Gestión operativa y administrativa integral",
            "Servidor local con VPN Tailscale cifrada",
            "Sistema de doble gestión usuarios/empleados",
            "Control de acceso y autenticación avanzado",
            "Acceso remoto seguro entre sucursales"
        ],
        badges: [],
        estado: { texto: "En curso", icono: "fa-solid fa-briefcase", clase: "en-curso" },
        placeholderClases: "proyecto-placeholder notaria-placeholder",
        github: "https://github.com/JosephAntonyDev/Notaria178_API",
        demo: "#"
    },
    vixel: {
        nombre: "Vixel",
        titulo: "Vixel",
        resumen: "Plataforma descentralizada de juegos, torneos y streaming en Blockchain Vara.",
        descripcion: "Plataforma descentralizada revolucionaria que combina juegos, torneos competitivos y streaming en vivo, todo impulsado por tecnología Blockchain en la red Vara. Este proyecto ganó el 1er lugar a nivel Nacional y 2do lugar Internacional en competencias de desarrollo blockchain.",
        imagen: "./img/portafolio/vixel.png",
        categoria: "web",
        tecnologias: ["Rust", "Blockchain", "Vara Network", "React", "Node.js", "WebSockets", "TypeScript", "Web3"],
        features: [
            "Sistema de torneos con smart contracts",
            "Streaming en vivo integrado",
            "Wallet de criptomonedas nativa",
            "Sistema de recompensas tokenizado",
            "Matchmaking inteligente para jugadores"
        ],
        badges: [
            { icono: "fa-solid fa-trophy", texto: "1er Lugar Nacional", clase: "" },
            { icono: "fa-solid fa-globe", texto: "2do Lugar Internacional", clase: "internacional" }
        ],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/JosephAntonyDev/Vixel-Torn",
        demo: "#"
    },
    vaultdoc: {
        nombre: "VaultDoc-VD",
        titulo: "VaultDoc-VD",
        resumen: "Plataforma segura para gestión de archivos gubernamentales con análisis de vulnerabilidades.",
        descripcion: "Plataforma de seguridad empresarial diseñada para la gestión segura de archivos gubernamentales. Incluye análisis de vulnerabilidades en tiempo real, encriptación de extremo a extremo y auditoría completa de accesos.",
        imagen: "./img/portafolio/VaultDoc.png",
        categoria: "web",
        tecnologias: ["Go", "PostgreSQL", "JWT", "Docker", "Redis", "Microservices", "gRPC", "Angular"],
        features: [
            "Encriptación AES-256 de archivos",
            "Análisis de vulnerabilidades automatizado",
            "Sistema de permisos granular",
            "Auditoría y logs de seguridad",
            "API RESTful documentada"
        ],
        badges: [
            { icono: "fa-solid fa-landmark", texto: "Proyecto Gubernamental", clase: "gobierno" }
        ],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/AnabelenScript/VaultDoc-VD",
        demo: "#"
    },
    geova: {
        nombre: "GEOVA",
        titulo: "GEOVA",
        resumen: "Sistema inteligente de medición y análisis para proyectos de ingeniería civil con IoT.",
        descripcion: "Sistema inteligente de medición y análisis para proyectos de ingeniería civil. Utiliza sensores IoT con Raspberry Pi y ESP32 para recopilar datos en tiempo real, procesarlos con Python y visualizarlos en dashboards interactivos.",
        imagen: "./img/portafolio/GEOVA.png",
        categoria: "web",
        tecnologias: ["Go", "Python", "Raspberry Pi", "ESP32", "FastAPI", "PostgreSQL", "RabbitMQ", "Angular", "Docker", "WebSockets"],
        features: [
            "Monitoreo en tiempo real con IoT",
            "Dashboard de visualización de datos",
            "Alertas automáticas configurables",
            "Exportación de reportes PDF",
            "API para integración externa"
        ],
        badges: [],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/AnabelenScript/Geova_Frontend",
        demo: "#"
    },
    frimeet: {
        nombre: "Frimeet",
        titulo: "Frimeet",
        resumen: "Plataforma de recomendaciones con APIs REST y bases de datos relacionales y no relacionales.",
        descripcion: "Plataforma de recomendaciones inteligente que combina APIs REST robustas con bases de datos relacionales (PostgreSQL) y no relacionales (MongoDB). El sistema utiliza algoritmos de Machine Learning para personalizar las sugerencias.",
        imagen: "./img/portafolio/Frimeet.png",
        categoria: "web",
        tecnologias: ["Node.js", "MongoDB", "PostgreSQL", "Python", "Express", "Machine Learning", "React + vite"],
        features: [
            "Motor de recomendaciones con ML",
            "Sistema de caché con Redis",
            "Autenticación OAuth 2.0",
            "Base de datos híbrida",
            "API REST documentada con Swagger"
        ],
        badges: [],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/AlleksDev/Frimeet",
        demo: "#"
    },
    readingclub: {
        nombre: "Reading Club",
        titulo: "Reading Club",
        resumen: "Plataforma de libros y clubs de lectura para comunidades de lectores.",
        descripcion: "Plataforma social para amantes de la lectura donde pueden crear y unirse a clubs de lectura, compartir reseñas, organizar sesiones de discusión y descubrir nuevos libros basados en sus intereses.",
        imagen: "./img/portafolio/ReadingClub.png",
        categoria: "web",
        tecnologias: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
        features: [
            "Creación de clubs de lectura",
            "Chat en tiempo real para discusiones",
            "Sistema de reseñas y calificaciones",
            "Recomendaciones personalizadas",
            "Calendario de eventos de lectura"
        ],
        badges: [],
        estado: { texto: "En desarrollo", icono: "fa-solid fa-code", clase: "" },
        placeholderClases: "",
        github: "https://github.com/JosephAntonyDev",
        demo: "#"
    },
    animtop: {
        nombre: "AnimTop",
        titulo: "AnimTop",
        resumen: "App web para visualizar diferentes tops de animes, estrenos y tendencias.",
        descripcion: "Aplicación web interactiva para explorar los mejores animes, estrenos de temporada y tendencias. Consume APIs externas para mostrar información actualizada con una interfaz moderna y atractiva.",
        imagen: "./img/portafolio/AnimTop2.png",
        categoria: "web",
        tecnologias: ["JavaScript", "API REST", "CSS3", "HTML5", "Fetch API", "Angular"],
        features: [
            "Top animes por popularidad y rating",
            "Calendario de estrenos por temporada",
            "Búsqueda avanzada con filtros",
            "Información detallada de cada anime",
            "Diseño responsive y moderno"
        ],
        badges: [],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/JosephAntonyDev",
        demo: "#"
    },
    game2d: {
        nombre: "Videojuego 2D Educativo",
        titulo: "Videojuego 2D Educativo",
        resumen: "Juego educativo sobre formación del cuerpo humano para el Museo Chiapas de Ciencia y Tecnología.",
        descripcion: "Juego educativo desarrollado para el Museo Chiapas de Ciencia y Tecnología. Enseña la formación del cuerpo humano de manera interactiva y divertida, diseñado especialmente para niños y jóvenes visitantes del museo.",
        imagen: "./img/portafolio/Game2D.jpg",
        categoria: "web",
        tecnologias: ["Pygame", "Python", "2D Graphics", "Game Design", "UI/UX", "Figma"],
        features: [
            "Mecánicas de juego intuitivas",
            "Contenido educativo validado",
            "Múltiples niveles de dificultad",
            "Gráficos 2D optimizados",
            "Sistema de logros y progreso"
        ],
        badges: [],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/JosephAntonyDev/Human_formation-Game",
        demo: "#"
    },
    encriptador: {
        nombre: "Encriptador de Texto",
        titulo: "Encriptador de Texto",
        resumen: "Herramienta de encriptación y desencriptación de texto desarrollada en Alura Oracle.",
        descripcion: "Herramienta web de encriptación y desencriptación de texto desarrollada como parte del programa Oracle Next Education (ONE) de Alura. Permite codificar mensajes de forma segura utilizando algoritmos personalizados.",
        imagen: "./img/portafolio/encriptador.png",
        categoria: "web",
        tecnologias: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
        features: [
            "Encriptación de mensajes de texto",
            "Desencriptación instantánea",
            "Copiar al portapapeles",
            "Interfaz intuitiva y limpia",
            "100% responsive"
        ],
        badges: [],
        estado: null,
        placeholderClases: "",
        github: "https://github.com/JosephAntonyDev/Challenge_oracle_grupo7",
        demo: "https://josephantonydev.github.io/Challenge_oracle_grupo7/"
    },
    splitmeet: {
        nombre: "SplitMeet",
        titulo: "SplitMeet",
        resumen: "App nativa Android con Kotlin, Jetpack Compose y arquitectura MVVM. Inyección de dependencias con Hilt.",
        descripcion: "Aplicación móvil nativa Android desarrollada desde cero con Kotlin y Jetpack Compose. Diseñada bajo arquitectura MVVM, aplicando principios SOLID y patrones de diseño (Factory, Repository). Integra inyección de dependencias con Hilt, manejo de estados reactivos con MutableStateFlow y consumo de APIs en tiempo real mediante Retrofit, OkHttpClient y WebSockets.",
        imagen: "./img/portafolio/movil/splitmeet/splitmeet.jpeg",
        categoria: "android",
        tecnologias: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "Retrofit", "WebSockets", "Gradle", "OkHttpClient"],
        features: [
            "Arquitectura MVVM con principios SOLID",
            "Inyección de dependencias con Dagger Hilt",
            "Estados reactivos con MutableStateFlow",
            "Consumo de APIs con Retrofit y OkHttpClient",
            "Comunicación en tiempo real con WebSockets"
        ],
        galeria: [
            "./img/portafolio/movil/splitmeet/splitmeet.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet0.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet1.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet2.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet3.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet4.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet5.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet6.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet7.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet8.jpeg",
            "./img/portafolio/movil/splitmeet/splitmeet9.jpeg"
        ],
        badges: [],
        estado: null,
        placeholderClases: "proyecto-placeholder android-placeholder",
        github: "https://github.com/JosephAntonyDev/Splitmeet-API.git",
        demo: "#"
    },
    wirechef: {
        nombre: "WireChef API",
        titulo: "WireChef API",
        resumen: "Backend en Go para gestión de restaurante con WebSockets en tiempo real e inyección de dependencias con Google Wire.",
        descripcion: "Backend robusto para gestión de usuarios, productos y órdenes en restaurante, con notificaciones en tiempo real por WebSocket y composición de dependencias con Google Wire. Arquitectura organizada por features (user, product, order) con capas domain, app, infra. Incluye endpoints REST completos para CRUD de usuarios, productos y órdenes, filtros avanzados y comunicación bidireccional con roles chef/waiter vía WebSocket.",
        imagen: "./img/portafolio/movil/wirechef/wirechef.jpeg",
        categoria: "android",
        tecnologias: ["Go", "Gin", "PostgreSQL", "Gorilla WebSocket", "Google Wire", "REST API", "Docker"],
        features: [
            "Arquitectura por features con capas domain/app/infra",
            "Inyección de dependencias con Google Wire",
            "WebSocket en tiempo real para chef y waiter",
            "CRUD completo de usuarios, productos y órdenes",
            "Filtros avanzados por categoría, estado y mesa"
        ],
        galeria: [
            "./img/portafolio/movil/wirechef/wirechef.jpeg",
            "./img/portafolio/movil/wirechef/wirechef1.jpeg",
            "./img/portafolio/movil/wirechef/wirechef2.jpeg"
        ],
        badges: [],
        estado: null,
        placeholderClases: "proyecto-placeholder android-placeholder",
        github: "https://github.com/JosephAntonyDev/WireChef-API",
        demo: "#"
    },
    todosuper: {
        nombre: "TodoSuper",
        titulo: "TodoSuper",
        resumen: "App Android nativa de gestión de tareas con Kotlin, Jetpack Compose y Clean Architecture consumiendo Todoist API.",
        descripcion: "Aplicación Android nativa de gestión de tareas desarrollada con Kotlin y Jetpack Compose. Implementa Clean Architecture y patrón MVVM, integrando la API REST de Todoist para sincronización de tareas. Proyecto académico para Programación Móvil I enfocado en poner en práctica arquitecturas y buenas prácticas de desarrollo móvil.",
        imagen: "./img/portafolio/movil/todosuper/todosuperclaro.jpeg",
        categoria: "android",
        tecnologias: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Todoist API", "Retrofit", "Gradle"],
        features: [
            "Clean Architecture con separación de capas",
            "Patrón MVVM con estados reactivos",
            "Integración con Todoist REST API",
            "Gestión completa de tareas (CRUD)",
            "Interfaz moderna con Jetpack Compose"
        ],
        galeria: [
            "./img/portafolio/movil/todosuper/todosuperclaro.jpeg",
            "./img/portafolio/movil/todosuper/todosuper.jpeg"
        ],
        badges: [],
        estado: null,
        placeholderClases: "proyecto-placeholder android-placeholder",
        github: "https://github.com/JosephAntonyDev/TodoSuper",
        demo: "#"
    }
};
