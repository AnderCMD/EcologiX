# EcologiX

_EcologiX es un sistema de monitoreo ecológico que utiliza Arduino para el seguimiento de datos ambientales como temperatura, humedad y calidad del aire. El sistema está desarrollado con React, Vite, ExpressJS, MongoDB y TailwindCSS, proporcionando una interfaz web interactiva para visualizar y analizar los datos en tiempo real._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

Para ejecutar este proyecto en tu máquina, necesitas tener instalados los siguientes programas:

* [Node.js](https://nodejs.org/) (LTS recomendado)
* [MongoDB](https://www.mongodb.com/) - Base de datos utilizada para almacenar los datos del monitoreo
* [Arduino IDE](https://www.arduino.cc/en/software) - Para cargar el código en la placa Arduino
* [pnpm](https://pnpm.io/) para gestionar las dependencias

### Instalación 🔧

1. Clona el repositorio
    ```
    git clone https://github.com/AnderCMD/EcologiX.git
    ```

2. Navega al directorio del proyecto
    ```
    cd EcologiX
    ```

3. Instala las dependencias
    ```
    pnpm install
    ```

4. Configura la base de datos MongoDB para almacenar los datos de monitoreo. Asegúrate de que tu instancia de MongoDB esté corriendo localmente o en un servidor.

5. Carga el código de Arduino en tu placa para empezar a recolectar datos. El código de Arduino se encuentra en la carpeta `/arduino`.

6. Ejecuta el servidor de desarrollo
    ```
    pnpm dev
    ```

7. Abre el navegador y accede a `http://localhost:3000` para visualizar los datos de monitoreo en tiempo real.

## Despliegue 📦

Para desplegar este proyecto en un servidor de producción:

1. Construye el proyecto para producción:
    ```
    pnpm build
    ```

2. Sube el frontend y el servidor Express a tu servidor de producción.
3. Asegúrate de que la base de datos MongoDB esté configurada correctamente en el servidor de producción.
4. Configura las variables de entorno adecuadas para MongoDB en el servidor.

## Construido con 🛠️

* [React](https://reactjs.org/) - Biblioteca de JavaScript para la construcción de la interfaz de usuario
* [Vite](https://vitejs.dev/) - Herramienta de construcción y desarrollo rápido para el frontend
* [ExpressJS](https://expressjs.com/) - Framework web para Node.js utilizado en el backend
* [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL utilizada para almacenar datos de monitoreo
* [Arduino](https://www.arduino.cc/) - Plataforma de hardware utilizada para recolectar datos ambientales
* [TailwindCSS](https://tailwindcss.com/) - Framework de CSS utilizado para diseñar la interfaz de usuario

## Contribuyendo 🖇️

Este proyecto ha sido realizado por mí. Si tienes alguna sugerencia o mejora, no dudes en abrir un **pull request**.

## Autores ✒️

* **Ander González** - *Ingeniero en Software* - [AnderCMD](https://github.com/AnderCMD)
* **Carmen** - *Ingeniero en Software* - [AnderCMD](https://github.com/carmen244)
* **Pablo Guadalupe** - *Ingeniero en Software* - [AnderCMD](https://github.com/PGMP210)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

---
⌨️ con ❤️ por [AnderCMD](https://github.com/AnderCMD) 😊
