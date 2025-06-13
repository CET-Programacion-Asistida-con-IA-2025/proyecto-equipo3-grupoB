// Función para mostrar alertas de los tests
function showTestAlert(testType) {
    alert(`¡Test de ${testType} próximamente!`);
}

// Manejo del formulario de comentarios
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const comentario = document.getElementById('comentario').value;
            
            if (nombre && comentario) {
                alert(`¡Gracias ${nombre}! Tu comentario ha sido enviado:\n\n"${comentario}"\n\nNos pondremos en contacto contigo pronto.`);
                
                // Limpiar el formulario
                this.reset();
            }
        });
    }
    
    // Efectos de animación para las secciones
    initializeAnimations();
});

// Función para inicializar las animaciones de entrada
function initializeAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Función para validar el formulario
function validateForm(nombre, comentario) {
    if (!nombre.trim()) {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    
    if (!comentario.trim()) {
        alert('Por favor, ingresa un comentario.');
        return false;
    }
    
    if (comentario.trim().length < 10) {
        alert('El comentario debe tener al menos 10 caracteres.');
        return false;
    }
    
    return true;
}

// Función para agregar efectos de hover adicionales (opcional)
function addHoverEffects() {
    const testCards = document.querySelectorAll('.test-card');
    
    testCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Llamar a efectos adicionales cuando el documento esté listo
document.addEventListener('DOMContentLoaded', addHoverEffects);