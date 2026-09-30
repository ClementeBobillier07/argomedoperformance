# Argomedo Performance: rediseño web

Rediseño de UI/UX de [argomedoperformance.cl](https://argomedoperformance.cl/), manteniendo el flujo y la estructura del sitio actual.

## Documentos
- [`docs/01-analisis-sitio-actual.md`](docs/01-analisis-sitio-actual.md): mapa del sitio, textos, problemas y referentes
- [`docs/02-plan-de-trabajo.md`](docs/02-plan-de-trabajo.md): plan de trabajo aprobado y decisiones
- [`docs/03-fase-1-sistema-visual.md`](docs/03-fase-1-sistema-visual.md): qué incluye la Fase 1 y qué falta
- [`docs/capturas-sitio-actual/`](docs/capturas-sitio-actual/): capturas del sitio actual

## Assets
- `assets/fotos-originales/`: todas las fotos del sitio en su resolución original, con inventario
- `assets/fotos-hd/`: fotos mejoradas con IA (Real-ESRGAN ×4, máx. 2560 px) que usa el sitio
- `assets/prensa/`: PDFs de los reportajes de prensa
- `public/brand/`, `public/marcas/`: escudo Argomedo y logos de marcas en blanco

## Desarrollo
Astro (sitio estático) con Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- `src/styles/tokens.css`: tokens de diseño (color, tipografía, espaciado, movimiento)
- `src/data/site.ts`: datos del negocio (teléfono, dirección, menú, marcas)
- `src/components/`: Nav, Hero, CarCard, PhotoSection, Footer, WhatsAppButton
- `src/pages/sistema.astro`: style tile de la Fase 1 (`/sistema`)

## Preview
Conecta el repo a Vercel (detecta Astro solo). Cada push a una rama genera una URL de preview.
