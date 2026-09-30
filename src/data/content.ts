// Contenido del sitio (textos del sitio actual, pulidos para SEO). Solo fotos originales.
import type { ImageMetadata } from 'astro';

import lambo1 from '../../assets/fotos-originales/biblioteca/2013-08/20130827_114447.jpg';
import lambo2 from '../../assets/fotos-originales/biblioteca/2013-08/20130827_114328-1.jpg';
import lambo3 from '../../assets/fotos-originales/biblioteca/2013-08/20130827_114634.jpg';
import lambo4 from '../../assets/fotos-originales/biblioteca/2013-08/20130827_114720.jpg';
import lambo5 from '../../assets/fotos-originales/biblioteca/2013-08/20130827_114738.jpg';

import traverso from '../../assets/fotos-originales/biblioteca/2011-09/traverso.jpg';
import gt500 from '../../assets/fotos-originales/biblioteca/2011-09/gt500.jpg';
import motmust from '../../assets/fotos-originales/biblioteca/2011-09/motmust.jpg';
import chasis from '../../assets/fotos-originales/biblioteca/2011-09/Chasis2.jpg';
import corvette66 from '../../assets/fotos-originales/biblioteca/2011-09/Fot-1.jpg';
import fotoA from '../../assets/fotos-originales/biblioteca/2011-09/Foto-a.jpg';
import fotoB from '../../assets/fotos-originales/biblioteca/2011-09/foto-b.jpg';

import mecanica from '../../assets/fotos-originales/biblioteca/2011-09/36.jpg';
import repuestos from '../../assets/fotos-originales/biblioteca/2011-09/26.jpg';
import importacion from '../../assets/fotos-originales/biblioteca/2011-09/importacion_argomedo.jpg';

export interface Photo { src: ImageMetadata; alt: string }

export interface Car {
  slug: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  mileage: string;
  price: string;
  status: 'Disponible' | 'Reservado' | 'Vendido';
  description: string;
  photos: Photo[];
}

export const cars: Car[] = [
  {
    slug: 'lamborghini-gallardo-lp560-4',
    brand: 'Lamborghini',
    model: 'Gallardo LP560-4 New Look',
    year: '2010',
    color: 'Blanco',
    mileage: '0 millas',
    price: 'A consultar',
    status: 'Disponible',
    description: 'Lamborghini Gallardo LP560-4 New Look, 0 millas, color blanco. Disponible en nuestro showroom de Recoleta.',
    photos: [
      { src: lambo1, alt: 'Lamborghini Gallardo LP560-4 blanco, vista frontal tres cuartos' },
      { src: lambo2, alt: 'Lamborghini Gallardo LP560-4 blanco, vista frontal' },
      { src: lambo3, alt: 'Lamborghini Gallardo LP560-4 blanco, vista trasera' },
      { src: lambo4, alt: 'Lamborghini Gallardo LP560-4 blanco en el showroom' },
      { src: lambo5, alt: 'Lamborghini Gallardo LP560-4 blanco, detalle frontal' },
    ],
  },
];

export const carName = (c: Car) => `${c.brand} ${c.model}`;

// Hitos en orden cronológico
export const hitos = [
  {
    year: '1981',
    title: 'Porsche 930 Turbo 1978',
    text: 'Reparado y restaurado por Argomedo Performance. Su motor fue presentado en el reportaje televisivo “Mundo 83” de Hernán Olguín, en Canal 13. Trabajo encomendado por el Sr. Ricardo Kobler.',
    photos: [
      { src: fotoA, alt: 'Porsche 930 Turbo de 1978 restaurado por Argomedo Performance' },
      { src: fotoB, alt: 'Equipo de Argomedo Performance junto al motor del Porsche 930 Turbo, 1981' },
    ],
  },
  {
    year: '1985',
    title: 'Corvette 1966 Big Block 427 Convertible',
    text: 'Restauración completa por encargo del Sr. Arie Mark Meyer. Fue exportado a Nueva York y expuesto en shows y concursos de elegancia, donde obtuvo el premio a la mejor restauración, mención “Calidad en obra de mano”.',
    photos: [
      { src: chasis, alt: 'Chasis del Corvette 1966 durante su restauración' },
      { src: corvette66, alt: 'Corvette 1966 Big Block 427 Convertible rojo restaurado' },
    ],
  },
  {
    year: '1990',
    title: 'Shelby GT500 1967',
    text: 'Restaurado y preparado por Argomedo Performance. Cronometrado a 256 km/h con un carburador central Holley de 750 CFM.',
    photos: [
      { src: gt500, alt: 'Shelby GT500 1967 rojo con franjas blancas' },
      { src: motmust, alt: 'Motor del Shelby GT500 1967 preparado por Argomedo Performance' },
    ],
  },
  {
    year: '2001',
    title: 'Porsche 930 de don Fabio Traverso',
    text: 'Preparado en nuestro taller. El más rápido indiscutido del Club Sport Vitacura en 2001 y 2002. La foto fue tomada al final de la recta principal del Autódromo Las Vizcachas.',
    photos: [{ src: traverso, alt: 'Porsche 930 de Fabio Traverso con llamarada de escape en el Autódromo Las Vizcachas' }],
  },
];

export const prensa = [
  { medio: 'Revista Sábado · El Mercurio', titulo: '«Mecánica (popular) de lujo»', pdf: '/prensa/reportaje_argomedo_sabado.pdf', peso: '0,4 MB' },
  { medio: 'Las Últimas Noticias', titulo: '«Vivió en una media agua y ahora le saca lustre a estos bólidos»', pdf: '/prensa/reportaje_argomedo_lun.pdf', peso: '0,4 MB' },
  { medio: 'La Segunda', titulo: '«El “secreto” que atrae a empresarios de elite a una “picada” en Recoleta»', pdf: '/prensa/reportaje_argomedo_lasegunda.pdf', peso: '3,5 MB' },
];

export const servicios = [
  {
    id: 'mecanica',
    title: 'Mecánica',
    lead: 'Mantención, reparación y preparación de alto rendimiento.',
    text: 'Diagnóstico y mecánica de precisión para autos de lujo, deportivos y clásicos, en nuestro taller mecánico y taller de fabricación de partes y piezas.',
    photo: { src: mecanica, alt: 'Mecánico de Argomedo Performance trabajando en un auto de competición' },
    motivo: 'mecanica',
  },
  {
    id: 'repuestos',
    title: 'Repuestos',
    lead: 'Repuestos y accesorios de las mejores marcas.',
    text: 'Importamos directamente repuestos y accesorios originales para tu automóvil, con la asesoría de nuestro equipo técnico.',
    photo: { src: repuestos, alt: 'Rueda y frenos de un auto de competición en el taller' },
    motivo: 'repuestos',
  },
  {
    id: 'importacion',
    title: 'Importación',
    lead: 'Importación directa, sin intermediarios.',
    text: 'Gestionamos la importación de autos, repuestos y accesorios de las grandes marcas, directamente para ti.',
    photo: { src: importacion, alt: 'Aston Martin en el elevador del taller de Argomedo Performance' },
    motivo: 'importacion',
  },
];

// Opciones del formulario (mismas del sitio actual)
export const motivos = [
  { value: 'cotizacion', label: 'Cotización' },
  { value: 'importacion', label: 'Servicio de importación' },
  { value: 'repuestos', label: 'Servicio de repuestos' },
  { value: 'pintura', label: 'Servicio de pintura' },
  { value: 'mecanica', label: 'Servicio de mecánica' },
  { value: 'reunion', label: 'Agendar una reunión' },
];
