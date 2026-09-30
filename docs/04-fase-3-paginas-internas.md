# Fase 3: páginas internas

Mismo mapa del sitio actual, con URLs más limpias. Las URLs antiguas redirigen a las nuevas (`astro.config.mjs`).

| Página | URL nueva | URL antigua |
|---|---|---|
| Home | `/` | `/` |
| Equipo | `/argomedo/equipo/` | `/argomedo/equipo/` |
| Historia | `/argomedo/historia/` | `/argomedo/calidad-seguridad-y-profesionalismo/` |
| En la prensa | `/argomedo/en-la-prensa/` | `/argomedo/en-la-prensa/` |
| Servicios | `/servicios/` (#mecanica, #repuestos, #importacion) | `/servicios/`, `/servicios/mecanica/`… |
| Sala de reunión | `/showroom/sala-de-reunion/` | `/showroom-2/sala-de-reunion/` |
| Autos en venta | `/showroom/autos-en-venta/` | `/showroom-2/autos-en-venta/` |
| Ficha de auto | `/showroom/autos-en-venta/lamborghini-gallardo-lp560-4/` | `/vehiculos/lamborghini-gallardo-lp560-4-new-look/` |
| Contáctenos | `/contacto/` | `/contacto/formulario/` |
| Ubicación | `/contacto/ubicacion/` | `/contacto/ubicacion/` |

## Qué incluye
- **Subnav sticky** en Argomedo, Showroom y Contacto, igual que las subsecciones del sitio actual.
- **Visor de fotos** (hitos y ficha del auto): se desliza en el teléfono y se maneja con el teclado.
- **Historia:** línea de tiempo con los 4 hitos en orden cronológico (1981, 1985, 1990, 2001).
- **Prensa:** los 3 reportajes en PDF, servidos desde el mismo sitio.
- **Servicios:** cada servicio lleva al formulario con el motivo ya elegido (`/contacto/?motivo=…`).
- **Autos en venta:** los datos están en `src/data/content.ts`. Agregar un auto = agregar un objeto y sus fotos.
- **Ficha de auto:** especificaciones, galería, “Consultar por este auto” (formulario con el auto precargado) y WhatsApp con mensaje. Schema.org `Car` para SEO.
- **Contáctenos:** mismos campos y opciones del formulario actual, con validación en línea y errores claros. Por ahora abre el correo con el mensaje listo (y ofrece WhatsApp). En la Fase 5 se conecta a un servicio de formularios.
- **Ubicación:** mapa de Google embebido y botones de Google Maps y Waze.

## Pendiente
- Conectar el formulario a un servicio de envío (Fase 5).
- Número de WhatsApp real, fotos del inventario actual y logo en vector (ver docs/03).
