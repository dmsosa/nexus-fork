# Nuestra Comunidad — Landing Page

Landing page hecha con **React + TypeScript + Vite**, con `react-router-dom` para las rutas,
`react-bootstrap` / `bootstrap` para estilos, `react-icons` para iconos y `react-hook-form`
para el formulario de contacto.

## Rutas

- `/` — Home (hero + presentación + CTA para unirse)
- `/about` — Quiénes somos (grid de miembros + CTA "únete tú también")
- `/contact` — Formulario para solicitar acceso al repositorio privado

## Estructura

```
src/
  layouts/MainLayout.tsx   Header + <Outlet> dentro de <main> + Footer
  components/Header.tsx
  components/Footer.tsx
  components/MemberCard.tsx
  pages/Home.tsx
  pages/About.tsx
  pages/Contact.tsx
  siteConfig.ts            Enlaces editables (WhatsApp, Slack, GitHub, LinkedIn, email)
  styles/
    _variables.scss        Colores, tipografía, radios, transiciones
    _base.scss             Reset/estilos base del body
    _hero.scss             Estilos del hero (fondo, overlay, contenido)
    _components.scss       member-photo, section-title, join-card
    main.scss              Punto de entrada: importa los partials y sobrescribe
                            las variables CSS de Bootstrap (--bs-primary, etc.)
```

Los estilos usan **SASS/SCSS** (`sass` como dependencia de desarrollo). Para cambiar la
paleta de color o la tipografía, edita `src/styles/_variables.scss`; se propaga
automáticamente a todos los partials y a Bootstrap.

## Cómo poner tu logo

1. Copia tu archivo de logo a `src/assets/images/logo.png`.
2. Abre `src/components/Header.tsx` y:
   - Borra el `<div>` placeholder circular.
   - Descomenta la línea `<img src="/src/assets/images/logo.png" ... />`.

## Cómo poner el fondo del hero

1. Copia tu imagen a `src/assets/images/hero.jpg`.
2. Abre `src/index.css`, en la clase `.hero`:
   - Borra o comenta `background-color: #1e1b4b;`.
   - Descomenta `background-image: url('/src/assets/images/hero.jpg');`.

## Enlaces a editar (`src/siteConfig.ts`)

- `whatsappUrl`: enlace provisional de invitación al grupo/chat de WhatsApp.
- `solicitudGitUrl`: a dónde va la solicitud de acceso al repo privado (por defecto un
  `mailto:`, pero puedes cambiarlo por un Google Form, Typeform, etc.).
- `email`: correo de contacto de la comunidad.

## Fotos del equipo (página "Quiénes somos")

Edita el array `miembros` en `src/pages/About.tsx` y en la sección de vista previa de
`src/pages/Home.tsx`, añadiendo el nombre, rol y la ruta/URL de la foto de cada persona.
Si no se indica foto, se muestra una imagen de marcador de posición.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```
