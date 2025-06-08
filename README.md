# 🚀 CI/CD con Vite, React, GitHub Actions y Render

Este proyecto implementa una solución de Integración Continua (CI) y Entrega Continua (CD) utilizando:

✅ **Vite** como herramienta de construcción rápida para React  
✅ **Vitest** como herramienta de pruebas unitarias para React
✅ **Slack** para notificaciones automáticas de CI/CD  
✅ **Gmail** para notificaciones por correo electrónico  
✅ **GitHub Actions** para ejecutar pruebas automáticas  
✅ **Render** para desplegar automáticamente el sitio web  

## ⚙️ ¿Qué hace el workflow?

### 🔁 Integración Continua (CI)

Cada vez que haces un **push** o un **pull request** en la rama `main`:

1. Se instala Node.js.
2. Se ejecutan las pruebas configuradas en `setupTest.js`.
3. Si alguna prueba falla:
   - El proceso se detiene.

### 🚀 Entrega Continua (CD)

Si las pruebas pasan:

1. Se realiza la build del proyecto con Vite.
2. Se despliega automáticamente en **Render**.

## 🌐 Sitio en Producción

👉 Puedes ver el sitio desplegado en:  
https://repo-ic-cd-1.onrender.com/

## 📜 Requisitos para desarrollo local

- **Node.js** >= 18

### Pasos para configurar el entorno local:

1. Clona el repositorio:

2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Para ejecutar las pruebas(opcional):
   ```bash
   npm test
   ```

4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Para construir el proyecto:
   ```bash
   npm run build
   ```

¡Y listo! Ahora puedes trabajar en el proyecto localmente.