// Script de navegación para la demo del Sistema Alfa Chile
// Este archivo maneja la navegación entre todas las pantallas de la aplicación

// Función para navegar a una página
function navigateTo(page) {
    window.location.href = page;
}

// Función para volver atrás
function goBack() {
    window.history.back();
}

// Configuración de navegación del sidebar de Producción
const produccionMenu = {
    'ordenes': 'mockup-produccion.html',
    'lineas': 'mockup-produccion-lineas.html',
    'incidencias': 'mockup-produccion-incidencias.html',
    'materias-primas': 'mockup-produccion-materias-primas.html',
    'nueva-orden': 'mockup-produccion-nueva-orden.html',
    'detalle': 'mockup-produccion-detalle.html',
    'editar': 'mockup-produccion-editar.html'
};

// Configuración de navegación del sidebar de Calidad
const calidadMenu = {
    'inspecciones': 'mockup-calidad.html',
    'control': 'mockup-calidad-control.html',
    'no-conformidades': 'mockup-calidad-no-conformidades.html',
    'nueva-inspeccion': 'mockup-calidad-nueva-inspeccion.html',
    'detalle': 'mockup-calidad-detalle.html',
    'detalle-nc': 'mockup-calidad-detalle-nc.html',
    'registro-resultados': 'mockup-calidad-registro-resultados.html'
};

// Configuración de navegación del sidebar de Laboratorio
const laboratorioMenu = {
    'solicitudes': 'mockup-laboratorio.html',
    'nueva-solicitud': 'mockup-laboratorio-nueva-solicitud.html',
    'detalle-solicitud': 'mockup-laboratorio-detalle-solicitud.html',
    'registro-resultados': 'mockup-laboratorio-registro-resultados.html'
};

// Páginas principales
const mainPages = {
    'dashboard': 'mockup-dashboard.html',
    'login': 'mockup-login.html',
    'produccion': 'mockup-produccion.html',
    'calidad': 'mockup-calidad.html',
    'laboratorio': 'mockup-laboratorio.html'
};

// Función para establecer el ítem activo del sidebar
function setActiveSidebarItem(itemId) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === itemId) {
            item.classList.add('active');
        }
    });
}

// Función para agregar efectos de hover a las tarjetas
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.stat-card, .panel, .order-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efectos visuales
    addCardHoverEffects();
    
    // Animación de entrada para el contenido principal
    const mainContent = document.querySelector('.main-content, .container');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(10px)';
        setTimeout(function() {
            mainContent.style.transition = 'all 0.4s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Mensaje de bienvenida en consola (para desarrollo)
    console.log('%c🏭 Sistema Alfa Chile - Demo Interactiva', 'color: #3B82F6; font-size: 16px; font-weight: bold;');
    console.log('%cDesarrollado por AloyTech', 'color: #64748b; font-size: 12px;');
});

// Función para simular carga de datos (para hacer la demo más realista)
function showLoadingState(element) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<div style="text-align: center; padding: 40px; color: #64748b;">⏳ Cargando datos...</div>';
    
    setTimeout(function() {
        element.innerHTML = originalContent;
    }, 500);
}

// Función para mostrar notificaciones toast (opcional, para mejora futura)
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(function() {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
