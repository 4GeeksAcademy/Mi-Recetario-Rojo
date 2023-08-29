# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- init with `npm run dev`


# Documentación de la API

- init with `npm run backend`

- `psql -U postgres -h localhost`
- `psql -U postgres -h localhost -c "CREATE DATABASE example;"`
- `psql -U postgres -h localhost -c "DROP DATABASE example;"`

Esta es la documentación de la API de Mi Recetario Rojo. A continuación se describen las rutas disponibles y los endpoints correspondientes.

## Obtener Usuarios

Obtiene una lista de usuarios con sus atributos.

- **URL:** `/usuarios`
- **Método:** GET
- **Parámetros de consulta:** Ninguno
- **Respuesta exitosa:**
  - Código de estado: 200 OK
  - Contenido: Lista de usuarios con sus atributos (id, name y email).

## Crear un Usuario

Crea un nuevo usuario.

- **URL:** `/usuarios`
- **Método:** POST
- **Cuerpo de la solicitud:** Objeto JSON con los atributos del usuario (name, username,email y password).
- **Respuesta exitosa:**
  - Código de estado: 201 Created
  - Contenido: Usuario recién creado con sus atributos.

## Obtener Recetas de un Usuario

Obtiene una lista de recetas de un usuario específico.

- **URL:** `/usuarios/:username/recetas`
- **Método:** GET
- **Parámetros de ruta:**
  - `username` (obligatorio): username del usuario del cual se desean obtener las recetas.
- **Respuesta exitosa:**
  - Código de estado: 200 OK
  - Contenido: Lista de recetas con sus atributos.

## Crear una Receta para un Usuario

Crea una nueva receta para un usuario específico.

- **URL:** `/usuarios/:username/recetas`
- **Método:** POST
- **Parámetros de ruta:**
  - `username` (obligatorio): username del usuario para el cual se creará la receta.
- **Cuerpo de la solicitud:** Objeto JSON con los atributos de la receta (titulo y descripcion).
- **Respuesta exitosa:**
  - Código de estado: 201 Created
  - Contenido: Receta recién creada con sus atributos.

## Actualizar una Receta

Actualiza una receta existente.

- **URL:** `/recetas/:recipeId`
- **Método:** PUT
- **Parámetros de ruta:**
  - `recipeId` (obligatorio): ID de la receta que se desea actualizar.
- **Cuerpo de la solicitud:** Objeto JSON con los atributos de la receta a actualizar.
- **Respuesta exitosa:**
  - Código de estado: 200 OK
  - Contenido: Receta actualizada con sus atributos.

## Eliminar una Receta

Elimina una receta existente.

- **URL:** `/recetas/:recipeId`
- **Método:** DELETE
- **Parámetros de ruta:**
  - `recipeId` (obligatorio): ID de la receta que se desea eliminar.
- **Respuesta exitosa:**
  - Código de estado: 204 No Content