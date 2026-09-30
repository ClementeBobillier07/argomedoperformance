# Plan de trabajo: rediseño de argomedoperformance.cl

> Estado: **borrador para discutir**. No hay código escrito todavía.
> Base: [análisis del sitio actual](01-analisis-sitio-actual.md) · [inventario de fotos](../assets/fotos-originales/README.md)

## 1. Objetivo

Rediseñar la UI (y la UX básica) del sitio de Argomedo Performance para que se vea **moderno, exclusivo, profesional y 100 % responsive**, con un lenguaje tipo Apple, **sin cambiar el flujo**: se mantienen las mismas páginas, el mismo orden de secciones, los mismos links entre páginas y los mismos textos (salvo correcciones evidentes).

**Qué cambia:** estética, tipografía, color, layout, tratamiento de las fotos, navegación fija, animaciones, CTAs, formularios y comportamiento en celular.
**Qué no cambia:** mapa del sitio, jerarquía de páginas, secciones de cada página y hacia dónde lleva cada botón.

## 2. Dirección de diseño

**“Showroom de noche”.** El sitio es oscuro y fotográfico, como entrar al showroom con las luces bajas y los autos iluminados. El amarillo aparece solo como el brillo del escudo.

| Tomamos de… | Qué |
|---|---|
| **Apple** | Tipografía grande con tracking negativo, mucho aire, materiales translúcidos (blur), movimiento suave y con propósito, un CTA principal claro por sección, jerarquía gris sobre negro |
| **Spyker** | Navbar fija y transparente con logo centrado, menú a pantalla completa con foto, composición editorial asimétrica, etiquetas pequeñas en mayúscula espaciada |
| **Loam House** | Secciones con foto a pantalla completa, degradado y texto encima; número de sección; fila de datos al pie (“1970 · 1.800 m² · 3 generaciones”); reveal de texto al hacer scroll |

### 2.1 Color (propuesta)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0A0A0B` | Fondo general (casi negro, no negro puro) |
| `--surface` | `#141416` / `#1C1C1F` | Tarjetas, formulario, footer |
| `--text` | `#F5F5F7` | Texto principal |
| `--text-2` | `#A1A1A6` | Texto secundario y pies de foto |
| `--hairline` | `rgba(255,255,255,.08)` | Líneas divisorias |
| `--accent` | `#FFEC00` (original) **o** una versión más profunda `#F2C800` | **Solo detalles**: punto activo de la navbar, subrayado al hover, etiquetas pequeñas, foco del teclado, número de sección, borde del CTA al hover |

> Regla: el amarillo nunca va como fondo de un bloque grande (hoy el footer y “Importación directa” son amarillos). Ocupa como máximo ~2 % de la pantalla.

### 2.2 Tipografía (propuesta; se elige una)

- **A. Apple puro (recomendada):** *Inter Tight / Inter* (o *Geist*) para todo. Titulares de 56–120 px con peso 500–600 y tracking −2 a −4 %. Etiquetas de 11–12 px en mayúscula con tracking +12 %.
- **B. Racing / Spyker:** titulares en grotesca **condensada mayúscula** (p. ej. *Barlow Condensed* o *Oswald*) y cuerpo en Inter. Más “motor”, menos Apple.
- **C. Lujo editorial / Loam:** serif display (*Cormorant* o *Playfair*) con la segunda línea en cursiva, y cuerpo en Inter. Más “residencial”, menos automotriz.

### 2.3 Tratamiento de fotos
- Degradado oscuro en la zona del texto (abajo o a la izquierda) para asegurar contraste AA.
- Gradación uniforme de color (bajar un poco la saturación del verde y del azul, y negros más profundos) para que las fotos de 2011 y 2013 se vean como una sola sesión.
- Formatos AVIF/WebP con `srcset` y carga diferida (lazy loading).

## 3. Página por página (mismo orden y mismos links)

### Navbar (todas las páginas)
- Fija arriba. **Transparente sobre el hero** y, al hacer scroll, pasa a **negro translúcido con blur** (`backdrop-filter: blur(20px)`). Se esconde al bajar y reaparece al subir.
- Desktop: escudo en blanco a la izquierda; Inicio · Argomedo · Servicios · Showroom · Contáctenos al centro; CTA “Agendar visita” en píldora a la derecha.
- Móvil: escudo + hamburguesa. El menú se abre a **pantalla completa**, con links grandes, foto, teléfono, WhatsApp y dirección (estilo Spyker).
- Las subnavs (Equipo/Historia/Prensa, Sala/Autos, Formulario/Ubicación) pasan a ser una **barra segmentada sticky** bajo la navbar, al estilo de las páginas de producto de Apple.

### Inicio
| # | Hoy | Rediseño |
|---|---|---|
| 1 | Banner de 960 px | **Hero a pantalla completa** (100svh) con los autos grandes en crossfade lento y leve zoom (Ken Burns). Encima: etiqueta “RECOLETA · DESDE 1970”, un titular corto, subtítulo y 2 CTAs (“Ver showroom” / “Contáctenos”). Abajo, una **fila de logos de marcas en blanco** con opacidad 70 % |
| 2 | Intro “Una empresa, un equipo…” | Bloque de texto grande centrado (Apple) con reveal línea por línea, más el link “Conoce nuestro equipo →” |
| 3 | Carrusel “Últimos autos en venta” + botón “Ver Showroom” | Carrusel horizontal con **scroll-snap** (se desliza con el dedo) y tarjetas grandes (foto, modelo, año, “Consultar”), más un CTA “Ver showroom” |
| 4 | “¿Qué necesitas?” + Productos + Equipo + Prensa + Consultas | Grilla editorial asimétrica (Spyker): 1 foto grande (Servicios) y 2 medianas (Productos, Equipo) con el texto sobre la foto, más 2 links secundarios (Prensa, Consultas) como filas con flecha |
| 5 | Instalaciones + Visítanos + Cómo llegar + Importación directa | **Sección a pantalla completa** tipo Loam: foto de instalaciones de fondo, número “04”, “Visítanos: negocios, compra, venta”, fila de datos y CTAs “Cómo llegar” y “Importación directa” (este último con borde amarillo como detalle) |
| 6 | Marcas | Se sube al hero (punto 1). Aquí queda opcionalmente un marquee lento de logos |
| 7 | Footer amarillo | Footer oscuro de 4 columnas: logo · contacto (tel y mail clicables) · dirección con mapa mini · menú completo, más © con el año automático |

### Argomedo
- **Equipo:** foto del equipo a ancho completo con el texto encima, y los 3 párrafos debajo en columna estrecha.
- **Historia:** un **timeline vertical** con los 4 hitos (año grande, foto, texto). Las fotos de época van en formato pequeño, con tratamiento de “archivo” y borde fino. El slider actual pasa a ser un mosaico. Se agrega un bloque manifiesto: **“Garantía profesional.”** en tipografía gigante (como el de Spyker).
- **Prensa:** 3 tarjetas-cita grandes (medio + titular entre comillas + “Leer artículo (PDF) →”).

### Servicios
- Hero con el titular “Ingeniería automotriz y mecánica de alta calidad”.
- 3 tarjetas grandes (Mecánica · Repuestos · Importación) que llevan al **formulario con el motivo preseleccionado**.
- Instalaciones: galería de 3 fotos y “Cómo llegar →”.

### Showroom
- **Sala de reunión:** foto a pantalla completa con “Como en casa” encima y las 3 frases debajo.
- **Autos en venta:** grilla de tarjetas grandes (2 columnas en desktop, 1 en móvil).
- **Ficha de vehículo:** foto hero, ficha técnica en filas (color, km, año), CTA principal “Consultar por este auto” (abre el formulario con el auto precargado) y CTA secundario de WhatsApp, más una galería con **lightbox que se desliza** en móvil.

### Contáctenos
- **Formulario:** los mismos campos y opciones, con etiquetas flotantes, validación en línea, estado de envío y confirmación, dentro de una tarjeta oscura (Loam). Al lado van el teléfono, el email y la dirección, todos clicables.
- **Ubicación:** mapa oscuro embebido con botones “Abrir en Google Maps” y “Abrir en Waze”.

## 4. Riesgo principal: las fotos

1. **Resolución:** la sesión buena (2011) está a 790 px. Un hero de desktop necesita ≥ 2400 px. Opciones:
   - a) **Upscale con IA** (×3, tipo Real-ESRGAN) de ~10 fotos elegidas para el hero y las secciones a pantalla completa. Con degradado, oscurecido y grano sutil se ve bien. *Lo puedo hacer yo.*
   - b) Usar en el hero solo las fotos grandes (Maserati MC, Lamborghini Spyder), que son de celular y tienen una composición menos cuidada.
   - c) **Nueva sesión de fotos** del showroom actual. Es lo ideal a mediano plazo.
2. **“Los autos que tienen actualmente”:** ninguna foto es de 2026. Para mostrar el inventario de hoy, Argomedo tendría que enviar fotos nuevas. Mientras tanto, armo el hero con las mejores fotos existentes y dejo la estructura lista para reemplazarlas.
3. **Logos de marcas:** hoy son un PNG de 592×66. Hay que rehacerlos como SVG monocromo en blanco y confirmar la lista (hoy: Porsche, BMW, Hummer, Shelby, Corvette y Mercedes-Benz; ¿agregamos Lamborghini, Maserati o Ferrari?).
4. **Logo Argomedo:** solo existe en PNG de 128–190 px. Hay que **vectorizar el escudo** en SVG (versión color y versión monocromo blanca para la navbar).

## 5. Stack técnico (propuesta)

- **Astro** (sitio estático, muy rápido, HTML semántico) con CSS propio basado en tokens y JS mínimo.
- **GSAP + ScrollTrigger** para el reveal de texto, el parallax suave y el crossfade del hero. **Lenis** para el scroll suave solo en desktop. Se respeta `prefers-reduced-motion`.
- Optimización de imágenes con `astro:assets` (AVIF/WebP y `srcset` automático).
- Contenido (autos, servicios, hitos, prensa) en archivos Markdown/JSON, **fácil de editar mandándome un mensaje desde el teléfono**.
- Formulario: servicio externo (Formspree o Netlify Forms) que envía un email a info@argomedoperformance.cl.
- **Previews:** cada push genera una URL de preview que se abre en el celular (Vercel o Netlify conectado al repo, o GitHub Pages).

> Alternativa: si Argomedo necesita seguir editando desde el admin de WordPress, al final se puede portar el diseño aprobado a un tema de WordPress nuevo. Se decide en la fase 5.

## 6. Fases

| Fase | Entregable | Skills |
|---|---|---|
| **0. Análisis** ✅ | Este documento, el análisis, las fotos descargadas y las capturas | — |
| **1. Fundaciones** | *Style tile*: una página HTML con colores, tipografías, botones, navbar, tarjeta de auto y 3 fotos tratadas (y upscaleadas), para aprobar desde el celular | `design-system`, `apple-design`, `frontend-design` |
| **2. Home** | Home completa y responsive con navbar, hero, secciones, footer y animaciones base | `frontend-design`, `animate`, `mobile-native` |
| **3. Páginas internas** | Argomedo (3), Servicios, Showroom (2) + plantilla de ficha, Contacto (2) | `frontend-design`, `ui-ux-pro-max` |
| **4. Pulido** | Movimiento fino, accesibilidad (contraste, teclado, lector de pantalla), Lighthouse ≥ 90, SEO (metadatos, Open Graph, schema.org `AutoRepair`), prueba en iPhone y Android | `animate`, `apple-design`, `mobile-native`, `ui-ux-pro-max` |
| **5. Entrega** | Decisión de hosting/CMS, dominio y lista de contenidos pendientes para Argomedo | — |

Cada fase termina con una **URL de preview** para revisarla en el celular y aprobarla antes de pasar a la siguiente.

## 7. Correcciones de contenido incluidas (sin cambiar el flujo)
- “LAMBORHINI” → “Lamborghini”.
- “Más de 30 años” → “Más de 55 años” (fundada en 1970). *Confirmar.*
- © con el año automático.
- Se elimina el lorem ipsum de Importación y se ocultan las páginas de ejemplo, la Tienda vacía y el link a Testimonios (404).
- Teléfono y email clicables, y los títulos pasan a ser texto real en lugar de imágenes.

## 8. Decisiones que necesito de ti

1. **“Más oscura”:** ¿te refieres a que **el sitio sea oscuro** (mi propuesta) o a que **el amarillo sea más oscuro**? ¿O ambas?
2. **Tipografía:** A (Apple puro, recomendada), B (condensada racing) o C (serif editorial).
3. **Fotos del hero:** ¿apruebas el upscale con IA como solución provisional? ¿Puede Argomedo enviarnos fotos de los autos que tienen hoy?
4. **Marcas en el hero:** ¿cuáles van? ¿Se mantiene Hummer?
5. **Copy:** ¿lo dejamos 100 % igual (solo corrigiendo errores) o me permites pulir levemente los titulares, manteniendo el sentido?
6. **Extras de UX:** ¿agregamos un botón de WhatsApp flotante y botones de Waze/Maps? (Son links nuevos, pero no cambian el flujo.)
7. **Stack y preview:** ¿Astro estático con preview en Vercel/Netlify (tendrías que conectar la cuenta una vez) o prefieres otra cosa?
