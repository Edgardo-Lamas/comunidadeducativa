// 🎨 DEMO: Cambiador de Paleta de Colores Dinámico
// Este archivo demuestra cómo cambiar la paleta de colores en tiempo real

// Paletas predefinidas
const paletas = {
    original: {
        name: "Azul Educativo (Original)",
        colors: {
            '--primary-color': '#3498db',
            '--primary-dark': '#2c3e50',
            '--secondary-color': '#e74c3c',
            '--accent-color': '#f39c12',
            '--success-color': '#27ae60'
        }
    },
    verde: {
        name: "Verde Ecológico",
        colors: {
            '--primary-color': '#27ae60',
            '--primary-dark': '#1e3932',
            '--secondary-color': '#e74c3c',
            '--accent-color': '#2ecc71',
            '--success-color': '#27ae60'
        }
    },
    morado: {
        name: "Morado Profesional",
        colors: {
            '--primary-color': '#9b59b6',
            '--primary-dark': '#2c1810',
            '--secondary-color': '#e74c3c',
            '--accent-color': '#8e44ad',
            '--success-color': '#27ae60'
        }
    },
    naranja: {
        name: "Naranja Cálido",
        colors: {
            '--primary-color': '#e67e22',
            '--primary-dark': '#2c3e50',
            '--secondary-color': '#c0392b',
            '--accent-color': '#f39c12',
            '--success-color': '#27ae60'
        }
    }
};

// Función para cambiar la paleta de colores
function cambiarPaleta(nombrePaleta) {
    const paleta = paletas[nombrePaleta];
    if (!paleta) {
        console.error('Paleta no encontrada:', nombrePaleta);
        return;
    }

    const root = document.documentElement;
    
    // Aplicar cada color de la paleta
    Object.entries(paleta.colors).forEach(([variable, valor]) => {
        root.style.setProperty(variable, valor);
    });

    console.log(`🎨 Paleta cambiada a: ${paleta.name}`);
}

// Función para crear un selector de paletas (DEMO)
function crearSelectorPaletas() {
    // Solo ejecutar si estamos en modo demo/desarrollo
    if (window.location.search.includes('demo=colores')) {
        const selector = document.createElement('div');
        selector.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 9999;
            font-family: Arial, sans-serif;
            min-width: 200px;
        `;
        
        selector.innerHTML = `
            <h4 style="margin: 0 0 10px 0; color: #333;">🎨 Demo Paletas</h4>
            <select id="paletaSelector" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <option value="original">Azul Educativo</option>
                <option value="verde">Verde Ecológico</option>
                <option value="morado">Morado Profesional</option>
                <option value="naranja">Naranja Cálido</option>
            </select>
            <button onclick="aplicarPaletaSeleccionada()" style="width: 100%; padding: 8px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Aplicar Paleta
            </button>
            <p style="font-size: 12px; color: #666; margin: 10px 0 0 0;">
                💡 Agrega ?demo=colores a la URL para ver este selector
            </p>
        `;
        
        document.body.appendChild(selector);
    }
}

// Función para aplicar la paleta seleccionada
function aplicarPaletaSeleccionada() {
    const selector = document.getElementById('paletaSelector');
    if (selector) {
        cambiarPaleta(selector.value);
    }
}

// Funciones de utilidad para desarrolladores
const ColorUtils = {
    // Obtener el valor actual de una variable CSS
    obtenerColor: (variable) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable);
    },
    
    // Establecer un color específico
    establecerColor: (variable, valor) => {
        document.documentElement.style.setProperty(variable, valor);
    },
    
    // Listar todas las paletas disponibles
    listarPaletas: () => {
        console.table(Object.keys(paletas));
    },
    
    // Exportar la paleta actual
    exportarPaletaActual: () => {
        const root = document.documentElement;
        const variables = [
            '--primary-color',
            '--primary-dark', 
            '--secondary-color',
            '--accent-color',
            '--success-color'
        ];
        
        const paletaActual = {};
        variables.forEach(variable => {
            paletaActual[variable] = getComputedStyle(root).getPropertyValue(variable).trim();
        });
        
        console.log('🎨 Paleta actual:', paletaActual);
        return paletaActual;
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    crearSelectorPaletas();
    
    // Hacer las funciones disponibles globalmente para pruebas
    window.cambiarPaleta = cambiarPaleta;
    window.aplicarPaletaSeleccionada = aplicarPaletaSeleccionada;
    window.ColorUtils = ColorUtils;
});

// Instrucciones para usar en la consola del navegador:
console.log(`
🎨 INSTRUCCIONES PARA CAMBIAR COLORES:

1. Cambiar paleta completa:
   cambiarPaleta('verde')
   cambiarPaleta('morado')
   cambiarPaleta('naranja')
   cambiarPaleta('original')

2. Cambiar color específico:
   ColorUtils.establecerColor('--primary-color', '#ff6b6b')

3. Ver color actual:
   ColorUtils.obtenerColor('--primary-color')

4. Ver todas las paletas:
   ColorUtils.listarPaletas()

5. Exportar paleta actual:
   ColorUtils.exportarPaletaActual()

6. Para ver el selector visual, agrega ?demo=colores a la URL
`);
