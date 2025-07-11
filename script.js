// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.curso-card, .noticia-card, .recurso-card, .stat-item, .contacto-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    });
}

// Activar contador cuando la sección de estadísticas sea visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Efecto parallax sutil en el hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Funcionalidad para "Leer más"
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aquí podrías agregar funcionalidad para mostrar el contenido completo
            // Por ejemplo, abrir un modal o expandir el contenido
            const article = this.closest('.noticia-card');
            const title = article.querySelector('h3').textContent;
            
            // Mostrar alerta por ahora (se puede reemplazar con modal)
            alert(`Funcionalidad "Leer más" para: ${title}\n\nEsta funcionalidad se puede expandir para mostrar el contenido completo en un modal o nueva página.`);
        });
    });
});

// Validación y mejora de accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    // Agregar atributos ARIA para mejor accesibilidad
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.setAttribute('aria-label', 'Menú de navegación');
        mobileMenu.setAttribute('aria-expanded', 'false');
        
        mobileMenu.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Mejorar navegación por teclado
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Función para detectar si el usuario prefiere reducir las animaciones
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Aplicar configuraciones de accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    if (prefersReducedMotion()) {
        // Desactivar animaciones si el usuario prefiere movimiento reducido
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
});

// Función para manejar errores de carga de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Mostrar placeholder o imagen por defecto en caso de error
            this.style.display = 'none';
        });
    });
});

// Sistema de notificaciones simple
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Ejemplo de uso de notificaciones
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar notificación de bienvenida después de cargar la página
    setTimeout(() => {
        showNotification('¡Bienvenido a la Comunidad Educativa del Pabellón 16B!', 'success');
    }, 1000);
});

// Función para copiar enlaces al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Enlace copiado al portapapeles', 'success');
    }).catch(function(err) {
        console.error('Error al copiar: ', err);
        showNotification('Error al copiar el enlace', 'error');
    });
}

// Agregar funcionalidad de compartir
document.addEventListener('DOMContentLoaded', function() {
    // Agregar botones de compartir si el navegador lo soporta
    if (navigator.share) {
        const shareButton = document.createElement('button');
        shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Compartir';
        shareButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000; background: #e74c3c; color: white; padding: 12px 18px; border: none; border-radius: 25px; font-weight: 600; box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4); cursor: pointer;';
        
        shareButton.addEventListener('click', function() {
            navigator.share({
                title: 'Comunidad Educativa - Pabellón 16B',
                text: 'Conoce los cursos y actividades de la Comunidad Educativa',
                url: window.location.href
            });
        });
        
        document.body.appendChild(shareButton);
    }
});

// Lazy loading para imágenes (si se agregan en el futuro)
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Funcionalidad específica para páginas internas

// FAQ (Preguntas Frecuentes)
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todas las FAQ
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abrir la seleccionada si no estaba activa
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Filtros de noticias
document.addEventListener('DOMContentLoaded', function() {
    const filtroButtons = document.querySelectorAll('.filtro-btn');
    const noticiaItems = document.querySelectorAll('.noticia-item');
    
    filtroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            
            // Actualizar botones activos
            filtroButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar noticias
            noticiaItems.forEach(item => {
                const itemCategoria = item.querySelector('.noticia-categoria');
                if (categoria === 'todas' || 
                    (itemCategoria && itemCategoria.textContent.toLowerCase().includes(categoria))) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Navegación activa
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Animaciones de entrada para elementos de las páginas internas
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos a animar
    const elementsToAnimate = document.querySelectorAll(`
        .curso-card, 
        .noticia-item, 
        .recurso-card, 
        .ubicacion-card,
        .documento-item,
        .enlace-externo,
        .info-card,
        .contacto-item
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Funcionalidad para copiar enlaces
function copyPageUrl() {
    navigator.clipboard.writeText(window.location.href).then(function() {
        showNotification('URL copiada al portapapeles', 'success');
    }).catch(function(err) {
        console.error('Error al copiar: ', err);
        showNotification('Error al copiar la URL', 'error');
    });
}

// Búsqueda en tiempo real (para futuras implementaciones)
function setupSearch() {
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll('.curso-card, .noticia-item, .recurso-card');
            
            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// Scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Lazy loading mejorado para imágenes
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Funcionalidad para modales (para futuras implementaciones)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event listeners para cerrar modales
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target.closest('.modal').id);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Funcionalidad para tooltips
document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #2c3e50;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

// Actualización de estadísticas en tiempo real (simulado)
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number, .estadistica-numero');
    
    statNumbers.forEach(stat => {
        const currentValue = parseInt(stat.textContent.replace(/\D/g, ''));
        // Simular pequeños incrementos ocasionales
        if (Math.random() < 0.1) { // 10% de probabilidad
            const newValue = currentValue + 1;
            stat.textContent = stat.textContent.replace(/\d+/, newValue);
        }
    });
}

// Actualizar estadísticas cada 30 segundos
setInterval(updateStats, 30000);

// Analytics básico (para futuras implementaciones)
function trackPageView(page) {
    console.log(`Página visitada: ${page} - ${new Date().toISOString()}`);
    // Aquí se podría integrar con Google Analytics u otra plataforma
}

function trackEvent(category, action, label) {
    console.log(`Evento: ${category} - ${action} - ${label} - ${new Date().toISOString()}`);
    // Aquí se podría integrar con Google Analytics u otra plataforma
}

// Trackear visitas a páginas
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    trackPageView(currentPage);
});

// Trackear clicks en enlaces importantes
document.addEventListener('DOMContentLoaded', function() {
    const importantLinks = document.querySelectorAll('.btn, .recurso-link, .nav-link');
    
    importantLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim();
            const linkHref = this.getAttribute('href');
            trackEvent('Navigation', 'Click', `${linkText} -> ${linkHref}`);
        });
    });
});

console.log('🎓 Comunidad Educativa - Pabellón 16B | Sitio web cargado correctamente');
console.log('🎓 Sitio web de Comunidad Educativa - Funcionalidades adicionales cargadas correctamente');
