// Datos del negocio: una sola fuente para navbar, footer, SEO y schema.org
export const site = {
  name: 'Argomedo Performance',
  legalName: 'Argomedo Performance',
  tagline: 'Ingeniería automotriz y mecánica de alto rendimiento desde 1970',
  url: 'https://argomedoperformance.cl',
  founded: 1970,
  founder: 'Luis Alfredo Argomedo',
  phone: '+56 2 2303 9270',
  phoneHref: 'tel:+56223039270',
  email: 'info@argomedoperformance.cl',
  // TODO(Argomedo): confirmar número de WhatsApp (celular). El fijo no sirve para WhatsApp.
  whatsapp: '56223039270',
  whatsappMessage: 'Hola Argomedo Performance, quiero hacer una consulta.',
  address: {
    street: 'María Eugenia 3454',
    locality: 'Recoleta',
    region: 'Región Metropolitana',
    city: 'Santiago',
    country: 'CL',
  },
  geo: { lat: -33.395126, lng: -70.638431 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Argomedo+Performance+Mar%C3%ADa+Eugenia+3454+Recoleta',
  wazeUrl: 'https://waze.com/ul?ll=-33.395126,-70.638431&navigate=yes',
  area: '1.800 m²',
};

export const nav = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Argomedo',
    href: '/argomedo/equipo/',
    children: [
      { label: 'Equipo', href: '/argomedo/equipo/' },
      { label: 'Historia', href: '/argomedo/historia/' },
      { label: 'En la prensa', href: '/argomedo/en-la-prensa/' },
    ],
  },
  { label: 'Servicios', href: '/servicios/' },
  {
    label: 'Showroom',
    href: '/showroom/sala-de-reunion/',
    children: [
      { label: 'Sala de reunión', href: '/showroom/sala-de-reunion/' },
      { label: 'Autos en venta', href: '/showroom/autos-en-venta/' },
    ],
  },
  {
    label: 'Contáctenos',
    href: '/contacto/',
    children: [
      { label: 'Contáctenos', href: '/contacto/' },
      { label: 'Ubicación', href: '/contacto/ubicacion/' },
    ],
  },
];

export const brands = [
  { name: 'Porsche', src: '/marcas/porsche.svg', h: 34 },
  { name: 'BMW', src: '/marcas/bmw.svg', h: 32 },
  { name: 'Hummer', src: '/marcas/hummer.png', h: 14 },
  { name: 'Shelby', src: '/marcas/shelby.png', h: 34 },
  { name: 'Corvette', src: '/marcas/corvette.png', h: 30 },
  { name: 'Mercedes-Benz', src: '/marcas/mercedes.png', h: 34 },
];

export const waLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
