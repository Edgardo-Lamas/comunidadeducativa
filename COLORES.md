# 🎨 Guía de Paleta de Colores - Comunidad Educativa

## 📋 Descripción

El sitio web utiliza **variables CSS (custom properties)** para gestionar toda la paleta de colores. Esto permite cambiar el esquema de colores completo modificando solo unas pocas líneas de código.

## 🔧 Cómo Cambiar los Colores

### 1. Ubicación de las Variables
Las variables de color se encuentran en `styles.css` en las líneas **2-40**, dentro de la sección `:root`.

### 2. Variables Principales
```css
:root {
    /* Colores principales */
    --primary-color: #3498db;      /* Azul principal */
    --primary-dark: #2c3e50;       /* Azul oscuro */
    --secondary-color: #e74c3c;    /* Rojo secundario */
    --accent-color: #f39c12;       /* Naranja de acento */
    --success-color: #27ae60;      /* Verde de éxito */
    /* ... más variables ... */
}
```

## 🎨 Paletas de Colores Predefinidas

### Paleta Actual (Azul Educativo)
- **Principal:** #3498db (Azul cielo)
- **Oscuro:** #2c3e50 (Azul marino)
- **Acento:** #f39c12 (Naranja)
- **Éxito:** #27ae60 (Verde)

### Paleta Verde Ecológica
```css
--primary-color: #27ae60;
--primary-dark: #1e3932;
--accent-color: #2ecc71;
--secondary-color: #e74c3c;
```

### Paleta Morada Profesional
```css
--primary-color: #9b59b6;
--primary-dark: #2c1810;
--accent-color: #8e44ad;
--secondary-color: #e74c3c;
```

### Paleta Naranja Cálida
```css
--primary-color: #e67e22;
--primary-dark: #2c3e50;
--accent-color: #f39c12;
--secondary-color: #c0392b;
```

## 🚀 Pasos para Cambiar la Paleta

1. **Abrir el archivo:** `styles.css`
2. **Ir a la sección:** `:root` (líneas 2-40)
3. **Modificar valores:** Cambiar los códigos hexadecimales
4. **Guardar archivo:** Los cambios se aplican automáticamente
5. **Verificar resultado:** Revisar el sitio web

## ✅ Ventajas del Sistema de Variables

- **✨ Cambios rápidos:** Modifica toda la paleta desde un solo lugar
- **🔄 Consistencia:** Garantiza colores uniformes en todo el sitio
- **📱 Responsive:** Los colores se mantienen consistentes en todos los dispositivos
- **🎯 Mantenimiento:** Facilita futuras actualizaciones y personalizaciones
- **🔧 Escalabilidad:** Fácil agregar nuevos colores o temas

## 📝 Variables Disponibles

### Colores Principales
- `--primary-color` - Color principal del sitio
- `--primary-dark` - Versión oscura del color principal
- `--secondary-color` - Color secundario
- `--accent-color` - Color de acento para destacar elementos

### Colores de Estado
- `--success-color` - Verde para estados de éxito
- `--warning-color` - Amarillo para advertencias
- `--danger-color` - Rojo para errores
- `--info-color` - Azul para información

### Colores de Texto
- `--text-primary` - Texto principal (#333)
- `--text-secondary` - Texto secundario (#666)
- `--text-muted` - Texto atenuado (#999)
- `--text-white` - Texto blanco

### Colores de Fondo
- `--bg-white` - Fondo blanco
- `--bg-light` - Fondo claro
- `--bg-dark` - Fondo oscuro
- `--bg-gradient-primary` - Gradiente principal
- `--bg-gradient-secondary` - Gradiente secundario

## 🎯 Recomendaciones

1. **Contraste:** Asegurar buen contraste entre texto y fondo
2. **Accesibilidad:** Verificar que los colores sean accesibles
3. **Coherencia:** Mantener una paleta cohesiva y profesional
4. **Pruebas:** Revisar todos los elementos del sitio después de cambios

## 📞 Soporte

Si necesitas ayuda para implementar una nueva paleta de colores, contacta al desarrollador del sitio.

---
*Documentación actualizada: Julio 2025*
*Sitio: Comunidad Educativa Pabellón 16B - Unidad 9*
