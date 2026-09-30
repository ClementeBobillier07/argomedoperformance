# Análisis: argomedoperformance.cl (sitio actual)

Revisión del 30-09-2026. Recorrí todas las páginas y links, la API de WordPress, el sitemap y la biblioteca de medios. Las capturas están en [`capturas-sitio-actual/`](capturas-sitio-actual/).

## 1. Tamaño y tecnología

| | |
|---|---|
| Plataforma | WordPress con un tema a medida (“argomedo”) de ~2011. También tiene WooCommerce, Elementor y Contact Form 7 instalados, pero casi no los usa |
| Páginas reales | **13 vistas únicas** (Home + 12 internas) y 1 ficha de vehículo |
| Layout | Ancho fijo de 960 px. **No es responsive**: en un celular se ve la versión de escritorio completa |
| Tipografía | Museo Sans (Typekit) y Helvetica/Arial. Muchos títulos son **imágenes PNG**, no texto |
| Color | Amarillo de marca `#FFEC00` (footer completo y bloque “Importación directa”), grises `#6A6868` / `#939393`, fondo blanco |
| JS | jQuery con jCarousel (carrusel de autos), Nivo Slider (Historia), Fancybox (lightbox de galerías) y Uniform (formulario) |
| Contenido | Páginas de WordPress más dos tipos de contenido propios: `vehiculo` (1 publicado) y `servicio` (3) |

## 2. Mapa del sitio y flujo (esto se mantiene)

```
Navbar principal:  Inicio · Argomedo · Servicios · Showroom · Contáctenos

INICIO (/)
├── Banner (foto showroom panorámica)
├── Intro “Una Empresa, Un Equipo, Pensado en ti” + texto + logo
│     └─ link “Conoce nuestro equipo >” → Argomedo › Equipo
├── “Últimos autos en venta” (carrusel ‹ ›)          → Ficha vehículo
│     └─ botón “Ver Showroom · Galería completa”      → Showroom › Autos en venta
├── “¿Qué necesitas?” (bloque grande)                 → Servicios
│     ├─ Nuestros productos (importación de repuestos) → Servicios
│     ├─ Equipo Argomedo                              → Argomedo › Equipo
│     ├─ “Argomedo en la prensa”                      → Argomedo › Prensa
│     └─ “Consultas: te escuchamos”                   → Contacto › Formulario
├── Instalaciones (foto)                              → Showroom › Sala de reunión
│     ├─ Visítanos (burbuja sala de reuniones): “Negocios, compra, venta”
│     ├─ “Cómo llegar · Ver mapa >”                   → Contacto › Ubicación
│     └─ “Importación directa” (bloque amarillo)      → Contacto › Formulario
├── “Las grandes marcas directamente para ti” (Porsche, BMW, Hummer, Shelby, Corvette, Mercedes-Benz)
└── Footer amarillo: logo · Contacto (fono, email) · Dirección · Menú (Equipo, Historia, En la prensa) · ©

ARGOMEDO (subnav: Equipo · Historia · En la prensa)
├── Equipo: “Un equipo para ti”: 3 párrafos + foto del equipo
├── Historia: “Calidad, Seguridad y Profesionalismo”: historia desde 1970 + slider de 3 fotos
│     └─ Hitos (4): Porsche 930 Traverso · Shelby GT500 1967 · Corvette 1966 · Porsche 930 Turbo 1978
│        cada uno con miniaturas, “Ver galería completa” (lightbox) y texto
└── En la prensa: “El reflejo de nuestro trabajo”: 3 citas con “Ver artículo” (PDF)
      El Mercurio (Revista Sábado) · Las Últimas Noticias · La Segunda

SERVICIOS (sin subnav)
├── “Ingeniería Automotriz y mecánica de alta calidad”
├── Nuestros servicios: Mecánica · Repuestos · Importación (las 3 tarjetas → Formulario)
└── Instalaciones: 1 foto grande + 2 chicas + texto + “Cómo llegar” → Ubicación

SHOWROOM (subnav: Sala de reunión · Autos en venta)
├── Sala de reunión: “Como en casa”: 3 frases + foto
└── Autos en venta: “Automóviles para tu vida. Tecnología y calidad.”: grilla de autos
      └── FICHA VEHÍCULO: título · descripción (color, km) · “CONSULTAR” · foto grande · galería con lightbox

CONTÁCTENOS (subnav: Contáctenos · Ubicación)
├── Formulario: Nombre* · Email* · Teléfono* · Comuna · Razón del contacto* · Comentario* · Enviar
│     Razón: cotización / servicio importación / servicio repuestos / servicio pintura / servicio mecánica / reunión
└── Ubicación: texto + mapa de Google embebido (ruta desde “Ortiz de Rozas”) + “Ver mapa más grande”
```

**Datos de contacto:** +56 2 2303 9270 · info@argomedoperformance.cl · María Eugenia 3454, Recoleta, Santiago.

## 3. Todos los textos del sitio

<details><summary>Ver copy completo (para reutilizarlo tal cual)</summary>

**Home, intro:** “Argomedo Performance es una empresa para los amantes de la mecánica, donde la calidad e ingeniería de punta conviven con la pasión de nuestros clientes. Un equipo pensado en ti, para que seas parte de él.”
**Productos:** “Importación directa de las mejores marcas en repuestos y accesorios para tu automóvil.”
**Equipo (home):** “Calidad, profesionalismo para su seguridad y la de su automóvil.”
**Visítanos:** “Negocios, compra, venta: Te esperamos en nuestra sala de reuniones.”

**Equipo, “Un equipo para ti”:** “Ponemos a tu disposición más de 30 años de experiencia reflejados en nuestro equipo de profesionales, quienes te entregan la mejor calidad y seguridad. / Nuestras instalaciones cuentan con la más alta tecnología y un servicio personalizado, en el cual puedes confiar en todo momento. / Trabajo de alta precisión, donde tu eres parte.”

**Historia, “Calidad, Seguridad y Profesionalismo”:** “Argomedo Performance es una empresa familiar fundada por don Luis Alfredo Argomedo en Julio de 1970. Desde sus inicios se ha ganado el aprecio de los amantes de la mecánica y de todos aquellos que buscan altos estándares de calidad e ingeniería de punta. / Desde sus inicios hasta el día de hoy sus oficinas, taller mecánico y taller de fabricación de partes y piezas, han estado ubicados en Maria Eugenia 3454, Recoleta, Santiago, Chile. / A través de su larga trayectoria Argomedo Performance ha preparado y modificado para lograr alto rendimiento algunos de los automóviles deportivos más representativos de la historia automotriz. / A través de todos estos años la empresa ha sido fiel al espíritu y legado de su fundador: **Garantía profesional.**”

**Hitos:**
1. *Porsche 930*, preparado para don Fabio Traverso. El más rápido indiscutido del Club Sport Vitacura, años 2001 y 2002. Foto tomada al final de la recta principal del Autódromo Las Vizcachas.
2. *Shelby GT500 1967*, restaurado y preparado por Argomedo Performance en 1990. Cronometrado a 256 km/h con un carburador central de 750 CFM/Holley.
3. *Corvette 1966 Big Block 427 Convertible*. Restaurado completamente en 1985. Encargo del Sr. Arie Mark Meyer; fue exportado a New York (EE.UU.) y expuesto en shows y concursos de elegancia. Premio a la mejor restauración, mención “Calidad en obra de mano”.
4. *Porsche 930 Turbo 1978*, reparado y restaurado en 1981. El motor apareció en el reportaje televisivo “Mundo 83” de Hernán Olguín (Canal 13). Trabajo encomendado por el Sr. Ricardo Kobler.

**Prensa, “El reflejo de nuestro trabajo”:** “El prestigio de nuestro trabajo, calidad y profesionalismo no solo se refleja y es agradecido por nuestros clientes. Te ofrecemos una muestra de nuestras apariciones en distintos medios de comunicación, los cuales hablan de lo que hacemos día a día por ti.”
- «Mecánica (popular) de lujo» (Revista Sábado, El Mercurio)
- “Vivió en una media agua y ahora le saca lustre a estos bólidos” (Las Últimas Noticias)
- «El “secreto” que atrae a empresarios de elite a una “picada” en Recoleta» (La Segunda)

**Servicios:** “Ingeniería Automotriz y mecánica de alta calidad.” Servicios: Mecánica, Repuestos, Importación.

**Sala de reunión, “Como en casa”:** “Pensamos en tu tranquilidad, seguridad y futuro. / Nuestra sala de reuniones está equipada con todo lo que necesitas y te ofrecemos nuestro respaldo y experiencia en todas tus decisiones. / Te aseguramos que te sentirás como en casa.”

**Autos en venta:** “Automóviles para tu vida. Tecnología y calidad.” Único auto publicado: Lamborghini Gallardo LP560-4 New Look, 0 millas, blanco, 2010, precio “Consultar” (publicado en 2013).

**Ubicación:** “Desde sus inicios hasta el día de hoy sus oficinas, taller mecánico y taller de fabricación de partes y piezas, han estado ubicados en Maria Eugenia 3454, Recoleta, Santiago, Chile.”
</details>

## 4. Problemas detectados (se corrigen en el rediseño sin tocar el flujo)

**UI / UX**
- No es responsive (960 px fijos). En celular hay que hacer zoom y el footer queda cortado.
- **No hay logo en la cabecera**: el escudo solo aparece en la intro y en el footer.
- Los títulos son imágenes, así que no se pueden leer bien, no sirven para SEO ni para accesibilidad, y se ven pixelados en pantallas retina.
- Las fotos se muestran a 190×125 px, muy por debajo de su potencial.
- Los CTAs son débiles: “Consultar” es un bloque gris sin acción clara, y el teléfono y el email no se pueden tocar para llamar o escribir.
- Las tarjetas de servicio llevan al formulario genérico sin preseleccionar el motivo.
- El carrusel de un solo auto no tiene sentido, y en celular no se puede deslizar.
- El mapa usa una URL antigua de Google Maps (ruta desde “Ortiz de Rozas”) y no ofrece botón de Waze ni de Google Maps.
- El footer solo muestra los links de “Argomedo” y no tiene redes sociales, horario ni WhatsApp.

**Contenido desactualizado o roto**
- El único auto en venta es de 2013 y tiene un error de tipeo: “**LAMBORHINI**”.
- “Más de 30 años de experiencia”, pero la empresa existe desde 1970 (**55+ años**).
- El copyright dice 2023.
- `/servicios/importacion/` tiene **lorem ipsum** publicado.
- Páginas de ejemplo públicas: `/pagina-ejemplo/` y `/pagina-ejemplo-2/` (esta última con el texto de muestra de WordPress).
- `/tienda/`, `/carrito/`, `/mi-cuenta/` y `/finalizar-compra/` de WooCommerce están vacías pero públicas.
- El link “Ver más testimonios” (comentado en el código) lleva a una página 404.
- El formulario ofrece “servicio pintura”, pero no hay servicio de pintura en el sitio.
- La biblioteca de medios incluye 2 fondos de pantalla de muestra de Windows (no se usan).

## 5. Fotos

Descargué **112 imágenes únicas + 6 títulos-imagen + 3 PDFs de prensa** en [`/assets`](../assets/). El inventario completo, con resolución, contenido y dónde aparece cada una, está en [`assets/fotos-originales/README.md`](../assets/fotos-originales/README.md).

**Hallazgo clave: la resolución.** La sesión profesional de 2011, que es la mejor en calidad visual (showroom, detalles, interiores, motores), está a **790×490 px**. Solo 10 fotos superan los 2400 px de ancho (8 del Maserati GranTurismo MC y 2 del Lamborghini Spyder, tomadas con celular en 2013). Esto afecta directamente la idea de un hero a pantalla completa (ver plan, §4).

Además, las fotos son de 2011–2013, así que **no muestran los autos que están hoy en el taller**.

## 6. Referentes

### Spyker (spykercars.com): navegación y efectos
- **Navbar fija y transparente** sobre el contenido: hamburguesa a la izquierda, logo centrado y un ícono a la derecha, con alto de 88 px.
- **Menú a pantalla completa**: links grandes (≈38 px) a la izquierda y una foto a la derecha, con redes sociales abajo.
- Titulares en **condensada mayúscula** (Futura PT Condensed, 56–120 px, tracking +2 px) y cuerpo en grotesca pequeña (Swiss 721, 12–14 px).
- Composición editorial **asimétrica**: fotos de distinto tamaño desfasadas, con mucho aire blanco y pies de foto pequeños y grises.
- Bloques de **video** a ancho completo, un manifiesto en tipografía gigante sobre negro (“NULLA TENACI INVIA EST VIA”) y un mosaico de fotos históricas en “Heritage”.
- Botones rectangulares planos, negros o blancos, con texto de 12–14 px en mayúscula espaciada.
- Hecho en Next.js.

### Loam House (residences.loamhouse.com.au): texto sobre fotos
- **Cada sección es una foto a pantalla completa** con un degradado oscuro y el texto encima.
- Titular en serif enorme (Cormorant, 100–122 px, tracking negativo) con la **segunda línea en cursiva**, un recurso muy elegante.
- Jerarquía con un **número de sección** (“01”, “02”…), una etiqueta pequeña mayúscula espaciada (10 px, +2.6 px), el titular, un párrafo corto y una **fila de datos** al pie (“88 residencias · 86–274 m² · 3 min a la playa”).
- La **navbar fija es translúcida con desenfoque** (`backdrop-filter: blur(18px)`, fondo al 72 %), con anclas a las secciones y 2 CTAs en píldora.
- Utiliza GSAP (ScrollTrigger, SplitText y ScrollSmoother) para el reveal de texto línea por línea y el scroll suave.
- El formulario de contacto va dentro de una tarjeta oscura sobre la foto del hero.
