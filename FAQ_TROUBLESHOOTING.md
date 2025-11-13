# ❓ FAQ y Troubleshooting - Demo Alfa Chile

## 🔧 Preguntas Frecuentes

### ¿Cómo inicio la demo?
Simplemente abre el archivo `index.html` con cualquier navegador web moderno (Chrome, Firefox, Safari, Edge).

### ¿Necesito instalar algo?
No, la demo es 100% HTML/CSS/JavaScript y funciona directamente en el navegador. No requiere instalación ni servidor.

### ¿Qué navegadores son compatibles?
- ✅ Google Chrome (recomendado)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ⚠️ Internet Explorer NO es compatible

### ¿Funciona sin internet?
Sí, completamente. La demo funciona offline ya que todos los archivos son locales.

### ¿Puedo usar la demo en una tablet o móvil?
La demo está optimizada para escritorio, pero funciona en tablets. En móviles, algunos elementos pueden verse pequeños.

### ¿Los datos son reales?
No, todos los datos mostrados son ficticios y solo para propósitos de demostración.

### ¿Puedo modificar los mockups?
Sí, todos los archivos son HTML estándar y pueden ser editados con cualquier editor de texto.

## 🐛 Problemas Comunes y Soluciones

### Problema: Al hacer clic en un botón no pasa nada

**Posibles causas:**
1. JavaScript deshabilitado en el navegador
2. Extensiones de navegador bloqueando scripts
3. Archivo corrupto

**Solución:**
```
1. Verifica que JavaScript esté habilitado:
   - Chrome: chrome://settings/content/javascript
   - Firefox: about:config → javascript.enabled
   
2. Desactiva temporalmente extensiones bloqueadoras
   
3. Intenta en modo incógnito/privado
```

### Problema: La pantalla se ve rota o sin estilos

**Posible causa:** Archivos CSS no cargados

**Solución:**
```
1. Verifica que todos los archivos estén en la misma carpeta
2. No renombres los archivos
3. Abre las herramientas de desarrollador (F12) 
   y revisa la consola por errores
```

### Problema: Los botones de navegación me llevan a página no encontrada

**Posible causa:** Archivos faltantes o nombres incorrectos

**Solución:**
```
Asegúrate de que TODOS estos archivos existan:
- index.html
- mockup-login.html
- mockup-dashboard.html
- mockup-produccion.html (y todos los de producción)
- mockup-calidad.html (y todos los de calidad)
- mockup-laboratorio.html (y todos los de laboratorio)
- navigation.js
- styles.css
```

### Problema: La demo se ve diferente en mi navegador

**Posible causa:** Navegador antiguo o no compatible

**Solución:**
```
1. Actualiza tu navegador a la última versión
2. Usa Google Chrome si tienes problemas
3. Limpia la caché del navegador:
   - Chrome: Ctrl+Shift+Del
   - Firefox: Ctrl+Shift+Del
   - Safari: Cmd+Option+E
```

### Problema: No puedo volver al dashboard

**Solución:**
```
Opciones para volver:
1. Usa el botón "← Volver al Dashboard" en el sidebar
2. Haz clic en "Dashboard" en los breadcrumbs
3. Recarga la página y haz login nuevamente
4. Escribe manualmente: mockup-dashboard.html en la URL
```

## 💡 Tips para una Presentación Exitosa

### Antes de la Reunión

✅ **Prueba la demo completa** al menos una vez
   - Navega por todos los módulos
   - Haz clic en todos los botones principales
   - Verifica que todo funcione

✅ **Cierra pestañas innecesarias**
   - Solo ten abierta la demo
   - Evita distracciones

✅ **Ajusta el zoom del navegador**
   - Ctrl + 0 (cero) para zoom 100%
   - O usa Ctrl + Plus/Minus para ajustar

✅ **Prepara un backup**
   - Ten la demo en una USB
   - O súbela a Google Drive/Dropbox
   - Por si hay problemas con tu laptop

### Durante la Presentación

✅ **Inicia desde index.html**
   - Da buena impresión profesional
   - Muestra el flujo completo

✅ **Mantén el cursor visible**
   - Mueve el mouse despacio
   - Señala elementos importantes

✅ **Usa el modo presentación del navegador**
   - F11 para pantalla completa
   - Sal con F11 o ESC

✅ **Ten abierto el README.md**
   - Para consultar flujos si lo necesitas
   - En otra ventana (Alt+Tab para cambiar)

### Si Algo Sale Mal

✅ **Mantén la calma**
   - F5 para recargar la página
   - Ctrl+Shift+R para forzar recarga

✅ **Ten explicación preparada**
   - "Esto es una demo, el sistema real será más robusto"
   - "Permítame mostrárselo de otra manera"

✅ **Usa los mockups estáticos**
   - Si la navegación falla, muestra las pantallas una por una
   - Explica cómo funcionaría la navegación

## 🎯 Checklist Pre-Presentación

```
□ Probé toda la demo y funciona
□ Tengo backup en USB o la nube
□ Laptop cargada (o conectada)
□ Navegador actualizado
□ JavaScript habilitado
□ Modo "No molestar" activado
□ Notificaciones desactivadas
□ Zoom del navegador al 100%
□ Internet desconectado (opcional, para evitar notificaciones)
□ README.md abierto en otra ventana
□ Agua a mano (para ti)
□ ¡Confianza al 100%!
```

## 📞 Soporte Técnico Rápido

### Si necesitas ayuda urgente:

1. **Revisa la consola del navegador** (F12):
   - Errores en rojo = problema
   - Copia el mensaje de error

2. **Verifica la estructura de archivos**:
   ```
   Demo Alfa Chile/
   ├── index.html
   ├── mockup-login.html
   ├── mockup-dashboard.html
   ├── mockup-produccion.html
   ├── (todos los demás mockup-*.html)
   ├── navigation.js
   ├── styles.css
   ├── README.md
   ├── GUIA_PRESENTACION.md
   └── MAPA_NAVEGACION.md
   ```

3. **Re-descarga los archivos** si algo falta

## 🚨 Escenarios de Emergencia

### Escenario 1: La laptop no enciende
**Plan B:** Usa otra laptop
- Ten la demo en la nube (Google Drive, Dropbox)
- Descárgala y abre index.html

### Escenario 2: No hay proyector/pantalla
**Plan B:** Presentación en la laptop del cliente
- Comparte la carpeta completa
- Abre en su navegador

### Escenario 3: Sin electricidad
**Plan B:** Presentación en modo manual
- Imprime capturas de las pantallas principales
- Explica la navegación de forma verbal

### Escenario 4: Cliente quiere explorar solo
**Plan B:** Déjalo navegar
- Entrega la GUIA_PRESENTACION.md
- Mantente disponible para preguntas

## ✨ Trucos Profesionales

### Para Impresionar

1. **Memoriza las rutas rápidas:**
   - Dashboard → Producción → Nueva Orden (3 clics)
   - Dashboard → Calidad → Iniciar Inspección (3 clics)
   - Dashboard → Laboratorio → Nueva Solicitud (3 clics)

2. **Usa atajos de teclado:**
   - Ctrl+T → Nueva pestaña (por si necesitas comparar)
   - Ctrl+W → Cerrar pestaña
   - Ctrl+Tab → Cambiar entre pestañas
   - F5 → Recargar
   - F11 → Pantalla completa

3. **Cuenta una historia:**
   - No solo muestres, narra un día en la vida de María/Carlos/Ana
   - Usa los nombres de los usuarios en los mockups
   - Conecta emocionalmente

## 📚 Recursos Adicionales

- `README.md` - Documentación completa
- `GUIA_PRESENTACION.md` - Script de presentación
- `MAPA_NAVEGACION.md` - Mapa visual completo
- `navigation.js` - Funciones de navegación
- `styles.css` - Estilos y animaciones

---

## 🎉 ¡Estás Listo!

Si llegaste hasta aquí y revisaste todo, estás más que preparado para una presentación exitosa. 

**Recuerda:** La demo es solo una herramienta. Tu conocimiento, confianza y capacidad de conectar con el cliente es lo que cerrará el trato.

### ¡Mucha suerte! 🚀

---

*Demo desarrollada por AloyTech para Alfa Chile*
*Noviembre 2025*
