
pnpm i -D @types/express @types/morgan @types/node
pnpm i -D tsx typescript
pnpm i express socket.io

# Proyecto Real-Time con Node.js, Express y Socket.IO

Este proyecto es una aplicación backend desarrollada con Node.js que utiliza el framework Express para gestionar rutas HTTP y Socket.IO para habilitar la comunicación bidireccional en tiempo real entre el servidor y los clientes conectados. Está escrito en TypeScript para aprovechar las ventajas del tipado estático.

## Contexto y Objetivo

El objetivo principal de este proyecto es servir como base para aplicaciones que requieran interacción instantánea, como por ejemplo:

*   Sistemas de chat en vivo.
*   Notificaciones push en tiempo real.
*   Aplicaciones colaborativas (ej. edición de documentos compartidos).
*   Visualización de datos que se actualizan constantemente.

Utiliza Express para la estructura básica del servidor web y la gestión de APIs REST, mientras que Socket.IO se encarga de la capa de WebSockets para la comunicación en tiempo real. TypeScript añade robustez y mejora la experiencia de desarrollo.

## Tecnologías Utilizadas

*   **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
*   **Express:** Framework web minimalista y flexible para Node.js.
*   **Socket.IO:** Biblioteca para habilitar la comunicación en tiempo real basada en eventos entre el navegador y el servidor.
*   **TypeScript:** Superset de JavaScript que añade tipado estático opcional.
*   **tsx:** Herramienta para ejecutar archivos TypeScript directamente sin compilación previa explícita durante el desarrollo.
*   **pnpm:** Gestor de paquetes rápido y eficiente en el uso de espacio en disco.

## Instalación

1.  **Clonar el repositorio (si aplica):**
    ```bash
    git clone <url-del-repositorio>
    cd <nombre-del-directorio>
    ```

2.  **Instalar dependencias:**
    Se recomienda usar `pnpm` para gestionar las dependencias, tal como se indica en los comandos de instalación iniciales.
    ```bash
    pnpm install
    ```
    *Este comando instalará las dependencias de producción (`express`, `socket.io`) y las de desarrollo (`@types/express`, `@types/morgan`, `@types/node`, `tsx`, `typescript`).*

## Uso

Para ejecutar el servidor en modo de desarrollo (usando `tsx` para recarga automática y ejecución directa de TS):

```bash
pnpm dev
