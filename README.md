# 🏭 Sistema Alfa Chile - Demo Interactiva

## 📋 Descripción

Esta es una demo interactiva completamente funcional del **Sistema de Gestión Integrada** desarrollado por AloyTech para Alfa Chile. La demo incluye navegación entre todas las pantallas de los módulos de Producción, Calidad y Laboratorio.

## 🚀 Cómo Usar la Demo

### Inicio Rápido

1. **Abrir la demo**: Simplemente abre el archivo `index.html` en tu navegador
   - La pantalla de carga aparecerá automáticamente
   - Después de 2 segundos, serás redirigido al login

2. **Iniciar Sesión**:
   - Ingresa cualquier usuario y contraseña (la validación es solo para demo)
   - Haz clic en "Iniciar Sesión"
   - Serás redirigido automáticamente al Dashboard

3. **Explorar la Demo**:
   - Desde el Dashboard, haz clic en cualquiera de las 3 tarjetas principales:
     - 🏭 **Producción** (tarjeta azul)
     - ✅ **Calidad** (tarjeta verde)
     - 🔬 **Laboratorio** (tarjeta morada)

## 📱 Estructura de la Demo

### 🏠 Pantallas Generales (2 pantallas)
- ✅ **index.html** - Pantalla de carga inicial
- ✅ **mockup-login.html** - Login del sistema

### 📊 Dashboard Principal
- ✅ **mockup-dashboard.html** - Dashboard con acceso a todos los módulos

### 🏭 Módulo de Producción (7 pantallas)

**Navegación desde el Dashboard** → Haz clic en la tarjeta azul "Órdenes Activas"

#### Pantallas disponibles:
1. **mockup-produccion.html** - Lista de Órdenes de Producción
   - Ver órdenes activas, pausadas y completadas
   - Botón "Nueva Orden" → Crear nueva orden
   - Botón "Ver" 👁️ → Ver detalles de la orden
   - Botón "Editar" ✏️ → Editar orden

2. **mockup-produccion-detalle.html** - Detalle de Orden
   - Información completa de una orden de producción

3. **mockup-produccion-editar.html** - Editar Orden
   - Formulario para modificar una orden existente

4. **mockup-produccion-nueva-orden.html** - Nueva Orden
   - Formulario para crear una nueva orden de producción

5. **mockup-produccion-lineas.html** - Líneas de Producción
   - Estado de las líneas de producción

6. **mockup-produccion-incidencias.html** - Incidencias
   - Reporte y seguimiento de incidencias

7. **mockup-produccion-materias-primas.html** - Materias Primas
   - Gestión de inventario de materias primas

**Menú lateral (Sidebar):**
- 📋 Órdenes de Producción
- ⚙️ Líneas de Producción
- 🚨 Incidencias
- 📦 Materias Primas
- ← Volver al Dashboard

### ✅ Módulo de Calidad (6 pantallas)

**Navegación desde el Dashboard** → Haz clic en la tarjeta verde "Inspecciones Pendientes"

#### Pantallas disponibles:
1. **mockup-calidad.html** - Lista de Inspecciones
   - Ver inspecciones pendientes, en curso, aprobadas y rechazadas
   - Botón "Nueva Inspección" → Crear nueva inspección
   - Botón "Iniciar" ▶️ → Registrar resultados
   - Botón "Ver" 👁️ → Ver detalles

2. **mockup-calidad-detalle.html** - Detalle de Inspección
   - Información completa de una inspección

3. **mockup-calidad-nueva-inspeccion.html** - Nueva Inspección
   - Formulario para crear una nueva inspección

4. **mockup-calidad-registro-resultados.html** - Registro de Resultados
   - Formulario para registrar resultados de inspección

5. **mockup-calidad-no-conformidades.html** - No Conformidades
   - Lista de no conformidades detectadas

6. **mockup-calidad-detalle-nc.html** - Detalle de No Conformidad
   - Información detallada de una no conformidad

7. **mockup-calidad-control.html** - Control de Calidad
   - Panel de control de calidad general

**Menú lateral (Sidebar):**
- 📋 Inspecciones
- 📝 Control de Calidad
- ⚠️ No Conformidades
- 📜 Certificados
- 📊 Indicadores KPI
- ← Volver al Dashboard

### 🔬 Módulo de Laboratorio (4 pantallas)

**Navegación desde el Dashboard** → Haz clic en la tarjeta morada "Análisis en Curso"

#### Pantallas disponibles:
1. **mockup-laboratorio.html** - Solicitudes de Análisis
   - Ver solicitudes nuevas, en análisis y completadas
   - Botón "Nueva Solicitud" → Crear nueva solicitud
   - Botón "Aceptar" ✓ → Iniciar análisis
   - Botón "Ver" 👁️ → Ver detalles

2. **mockup-laboratorio-detalle-solicitud.html** - Detalle de Solicitud
   - Información completa de una solicitud de análisis

3. **mockup-laboratorio-nueva-solicitud.html** - Nueva Solicitud
   - Formulario para crear una nueva solicitud de análisis

4. **mockup-laboratorio-registro-resultados.html** - Registro de Resultados
   - Formulario para registrar resultados de análisis

**Menú lateral (Sidebar):**
- 📋 Solicitudes de Análisis
- 🧪 Análisis en Proceso
- 📊 Resultados
- 🧬 Gestión de Muestras
- ⚙️ Equipos y Calibración
- 🧴 Reactivos
- ← Volver al Dashboard

## 🎨 Características de la Demo

### Navegación Interactiva
- ✅ Navegación completa entre todas las pantallas
- ✅ Botones funcionales que redirigen a pantallas específicas
- ✅ Breadcrumbs (migas de pan) actualizados
- ✅ Menús laterales (sidebars) con navegación activa

### Efectos Visuales
- ✅ Animaciones de entrada suaves
- ✅ Efectos hover en tarjetas y botones
- ✅ Transiciones fluidas entre pantallas
- ✅ Loading states y feedback visual

### Diseño Responsivo
- ✅ Colores diferenciados por módulo:
  - 🔵 Azul para Producción
  - 🟢 Verde para Calidad
  - 🟣 Morado para Laboratorio
- ✅ Iconos descriptivos
- ✅ Layout limpio y profesional

## 🔄 Flujos de Navegación Principales

### Flujo 1: Gestión de Órdenes de Producción
```
Dashboard → Producción → Lista de Órdenes
  ↓
  → Ver Detalle (👁️)
  → Editar Orden (✏️)
  → Nueva Orden (➕)
  ↓
  ← Volver al Dashboard
```

### Flujo 2: Inspecciones de Calidad
```
Dashboard → Calidad → Lista de Inspecciones
  ↓
  → Iniciar Inspección (▶️) → Registro de Resultados
  → Ver Detalle (👁️)
  → Nueva Inspección (➕)
  → No Conformidades (⚠️)
  ↓
  ← Volver al Dashboard
```

### Flujo 3: Análisis de Laboratorio
```
Dashboard → Laboratorio → Solicitudes
  ↓
  → Aceptar Solicitud (✓) → Registro de Resultados
  → Ver Detalle (👁️)
  → Nueva Solicitud (➕)
  ↓
  ← Volver al Dashboard
```

## 💡 Tips para la Presentación al Cliente

1. **Inicio Impactante**: Comienza desde `index.html` para mostrar la pantalla de carga profesional

2. **Navegación Fluida**: Demuestra cómo se navega fácilmente entre módulos usando:
   - Las tarjetas del dashboard
   - El menú lateral (sidebar)
   - Los breadcrumbs
   - El botón "Volver al Dashboard"

3. **Funcionalidad Destacada**: Muestra los botones de acción:
   - "Nueva Orden/Inspección/Solicitud" (color azul/verde/morado)
   - Botones de ver, editar, iniciar en las tablas
   - Tabs para filtrar información

4. **Cerrar Sesión**: Puedes hacer logout desde cualquier pantalla usando el botón rojo "Cerrar Sesión"

## 🛠️ Archivos Técnicos

- **navigation.js** - Script de navegación y efectos interactivos
- **styles.css** - Estilos adicionales y animaciones
- **mockup-*.html** - Todas las pantallas de la aplicación

## 📞 Soporte

Esta demo fue desarrollada por **AloyTech** para **Alfa Chile**.

---

## 🎯 Checklist de la Demo

- [x] 19 pantallas HTML completamente funcionales
- [x] Navegación integrada entre todos los módulos
- [x] Efectos visuales y animaciones
- [x] Diseño profesional y consistente
- [x] Flujos de trabajo completos
- [x] Breadcrumbs y menús de navegación
- [x] Botones de acción funcionales

**¡La demo está lista para presentar al cliente! 🚀**
