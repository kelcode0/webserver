# HTTP WebServer - Galería de Superhéroes

Aplicación web simple construida con **Node.js**, **TypeScript** y **Express.js** que sirve una galería de imágenes de superhéroes de DC y Marvel.

## 🚀 Características

- ✅ Servidor HTTP estático con Express.js
- ✅ Desarrollado en TypeScript
- ✅ Configuración mediante variables de entorno
- ✅ Galería de imágenes de superhéroes (DC Comics y Marvel)
- ✅ Interfaz responsiva con Bootstrap
- ✅ Animaciones CSS
- ✅ Hot reload en desarrollo

## 📋 Requisitos Previos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## 🛠️ Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd http-webserver
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   PORT=3000
   PUBLIC_PATH=public
   ```

## 🚀 Scripts Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor en modo desarrollo con recarga automática.

### Construcción

```bash
npm run build
```

Compila el proyecto TypeScript a JavaScript en la carpeta `dist/`.

### Producción

```bash
npm start
```

Construye el proyecto y lo ejecuta en modo producción.

## 📁 Estructura del Proyecto

```
http-webserver/
├── src/
│   ├── app.ts              # Punto de entrada principal
│   ├── config/
│   │   └── envs.ts         # Configuración de variables de entorno
│   └── presentation/
│       ├── index.ts        # Exportaciones del servidor
│       └── server.ts       # Clase del servidor Express
├── public/                 # Archivos estáticos
│   ├── assets/
│   │   └── heroes/         # Imágenes de superhéroes
│   ├── backup/             # Respaldo de archivos
│   └── index.html          # Página principal
├── package.json
├── tsconfig.json
└── README.md
```

## 🦸‍♂️ Galería de Héroes

La aplicación incluye imágenes de los siguientes superhéroes:

### DC Comics

- Superman
- Batman
- Wonder Woman
- The Flash
- Green Lantern
- Martian Manhunter
- Robin
- Arrow

### Marvel

- Iron Man
- Spider-Man
- Captain America
- Thor
- Hulk
- Wolverine
- Daredevil
- Hawkeye
- Cyclops
- Silver Surfer

## ⚙️ Configuración

### Variables de Entorno

| Variable      | Descripción                | Valor por defecto |
| ------------- | -------------------------- | ----------------- |
| `PORT`        | Puerto del servidor        | **Requerido**     |
| `PUBLIC_PATH` | Ruta de archivos estáticos | `public`          |

### Ejemplo de archivo `.env`

```env
PORT=8080
PUBLIC_PATH=public
```

## 🌐 Uso

1. **Iniciar el servidor:**

   ```bash
   npm run dev
   ```

2. **Abrir en el navegador:**

   ```
   http://localhost:3000
   ```

3. La aplicación servirá automáticamente el archivo `index.html` para todas las rutas.

## 🛠️ Tecnologías Utilizadas

### Backend

- **Node.js** - Entorno de ejecución
- **TypeScript** - Lenguaje de programación
- **Express.js** - Framework web
- **dotenv** - Gestión de variables de entorno
- **env-var** - Validación de variables de entorno

### Frontend

- **HTML5** - Estructura
- **Bootstrap 5** - Framework CSS
- **Animate.css** - Animaciones CSS
- **JavaScript** - Lógica del cliente

### Herramientas de Desarrollo

- **ts-node-dev** - Servidor de desarrollo con hot reload
- **TypeScript Compiler** - Compilación
- **rimraf** - Limpieza de archivos

## 📝 Scripts de Desarrollo

```json
{
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

**Tu Nombre**

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
