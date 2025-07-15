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

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        alert('💡 Escribe algo para buscar cursos');
        return;
    }
    
    alert(`🔍 Buscando: "${searchTerm}"\n\n📚 Encontramos cursos relacionados!`);
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('searchInput').addEventListener('focus', function() {
    this.parentElement.style.transform = 'translateY(-1px)';
});

document.getElementById('searchInput').addEventListener('blur', function() {
    this.parentElement.style.transform = 'translateY(0)';
});
// Para la edad //
// Variable para controlar si ya se hizo la selección
        let ageSelected = false;
        let selectedAge = null;

        // Verificar si hay una selección guardada al cargar la página
        window.addEventListener('DOMContentLoaded', function() {
            const savedAge = getSavedAge();
            if (savedAge) {
                restoreSelection(savedAge);
            }
        });

        function registerAge(ageGroup) {
            // Marcar como seleccionado
            ageSelected = true;
            selectedAge = ageGroup;
            
            // Mostrar alerta inmediatamente
            let alertMessage = '';
            if (ageGroup === 'menor15') {
                alertMessage = '¡Genial! 🎒\nHemos personalizado tu experiencia para estudiantes jóvenes';
            } else {
                alertMessage = '¡Excelente! 🎓\nTu experiencia está optimizada para estudiantes avanzados y profesionales';
            }
            alert(alertMessage);
            
            // Guardar la selección
            saveAge(ageGroup);
            
            // Actualizar la interfaz
            updateInterface(ageGroup);
            
            // Mostrar mensaje de confirmación
            showConfirmation(ageGroup);
            
            console.log(`Usuario registrado con edad: ${ageGroup}`);
        }

        function updateInterface(selectedAgeGroup) {
            const option1 = document.getElementById('option1');
            const option2 = document.getElementById('option2');
            
            // Remover selección previa
            option1.classList.remove('selected');
            option2.classList.remove('selected');
            
            // Agregar selección actual
            if (selectedAgeGroup === 'menor15') {
                option1.classList.add('selected');
            } else {
                option2.classList.add('selected');
            }
        }

        function showConfirmation(ageGroup) {
            const confirmationMessage = document.getElementById('confirmationMessage');
            const confirmationTitle = document.getElementById('confirmationTitle');
            const confirmationText = document.getElementById('confirmationText');
            
            let message = '';
            if (ageGroup === 'menor15') {
                confirmationTitle.textContent = '¡Genial! 🎒';
                confirmationText.textContent = 'Hemos personalizado tu experiencia para estudiantes jóvenes';
            } else {
                confirmationTitle.textContent = '¡Excelente! 🎓';
                confirmationText.textContent = 'Tu experiencia está optimizada para estudiantes avanzados y profesionales';
            }
            
            confirmationMessage.classList.add('show');
        }

        // Funciones para guardar y recuperar la selección
        function saveAge(ageGroup) {
            // Guardar en una variable global o simular guardado
            window.userAge = ageGroup;
            
            // Si quieres usar localStorage (funciona en navegadores):
            // localStorage.setItem('userAge', ageGroup);
        }

        function getSavedAge() {
            // Recuperar de la variable global
            return window.userAge || null;
            
            // Si usas localStorage:
            // return localStorage.getItem('userAge');
        }

        function restoreSelection(ageGroup) {
            ageSelected = true;
            selectedAge = ageGroup;
            updateInterface(ageGroup);
            showConfirmation(ageGroup);
        }

        // Función opcional para resetear la selección (solo para pruebas)
        function resetSelection() {
            ageSelected = false;
            selectedAge = null;
            window.userAge = null;
            
            const option1 = document.getElementById('option1');
            const option2 = document.getElementById('option2');
            const confirmationMessage = document.getElementById('confirmationMessage');
            
            option1.classList.remove('selected');
            option2.classList.remove('selected');
            confirmationMessage.classList.remove('show');
        }
