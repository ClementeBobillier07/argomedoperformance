// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://argomedoperformance.cl',
  trailingSlash: 'ignore',
  // URLs del sitio actual (WordPress) → URLs nuevas, para no perder SEO.
  // En Vercel se sirven como 301 reales (Fase 5).
  redirects: {
    '/argomedo': '/argomedo/equipo/',
    '/argomedo/calidad-seguridad-y-profesionalismo': '/argomedo/historia/',
    '/showroom': '/showroom/sala-de-reunion/',
    '/showroom-2': '/showroom/sala-de-reunion/',
    '/showroom-2/sala-de-reunion': '/showroom/sala-de-reunion/',
    '/showroom-2/autos-en-venta': '/showroom/autos-en-venta/',
    '/contacto/formulario': '/contacto/',
    '/vehiculos/lamborghini-gallardo-lp560-4-new-look': '/showroom/autos-en-venta/lamborghini-gallardo-lp560-4/',
    '/servicios/mecanica': '/servicios/#mecanica',
    '/servicios/repuestos': '/servicios/#repuestos',
    '/servicios/importacion': '/servicios/#importacion',
  },
});
