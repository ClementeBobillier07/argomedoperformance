> **Actualización 30-09:** se reemplazó por la Home real, con fondo blanco y solo fotos originales. La página `/sistema` y las fotos con IA se eliminaron.

# Fase 1: sistema visual

Preview: `/sistema` (la raíz `/` redirige ahí mientras no exista la Home definitiva).

## Qué incluye
- **Tokens** (`src/styles/tokens.css`): sitio oscuro `#0A0A0B`, grises tipo Apple y amarillo `#FFEC00` **solo como acento** (foco, punto de página activa, números de sección, hover).
- **Tipografía:** Geist (display y texto) + Geist Mono (etiquetas y cifras), autoalojadas, con tracking según tamaño.
- **Navbar:** fija; transparente sobre el hero, vidrio con blur al hacer scroll, se esconde al bajar y vuelve al subir. En móvil abre un menú a pantalla completa con teléfono, WhatsApp y dirección.
- **Hero:** 4 fotos en crossfade lento con zoom sutil (se pausa fuera de pantalla y respeta *reduced motion*), H1 con keywords, 2 CTAs, marcas en blanco e indicador de foto.
- **Componentes:** botones (primario, vidrio, contorno), link con flecha, tarjeta de auto, carrusel con scroll-snap, sección a pantalla completa con texto sobre foto y fila de datos (Loam), comparador antes/después, formulario con etiquetas flotantes (16 px, sin zoom en iOS), cita de prensa, footer completo con botones de Maps/Waze y WhatsApp flotante (se oculta sobre el hero).
- **SEO base:** `lang="es-CL"`, title/description por página, canonical, Open Graph, schema.org `AutoRepair` con dirección, geo, teléfono y fecha de fundación.
- **Fotos:** Real-ESRGAN ×4 → `assets/fotos-hd/` y AVIF/WebP responsivos generados por Astro.
- **Logos:** escudo reconstruido desde el PNG (color y blanco). Marcas: Porsche y BMW desde Simple Icons (SVG); Hummer, Shelby, Corvette y Mercedes-Benz vectorizados desde la tira del sitio actual.

## Pendiente de Argomedo
1. **Número de WhatsApp** (celular). Hoy apunta al fijo como placeholder, en `src/data/site.ts`.
2. **Logo en vector** (SVG/AI/PDF) para reemplazar el escudo reconstruido.
3. **Fotos del inventario actual** para el hero y “Autos en venta”.
4. Confirmar “más de 55 años” (fundada en julio de 1970).

## Notas técnicas
- Las URLs nuevas son más limpias (`/argomedo/historia/`, `/showroom/…`, `/contacto/`). En la Fase 5 se agregan **redirecciones 301** desde las URLs antiguas para no perder SEO.
- Los logos de Hummer, Shelby, Corvette y Mercedes-Benz son trazados desde un PNG pequeño. Sirven para el tamaño del hero, pero conviene reemplazarlos por SVG oficiales.
