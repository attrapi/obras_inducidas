// Catálogo jerárquico de fuentes de datos del sistema.
//
// El menú "Proyectos" del header se construye automáticamente a partir de
// este objeto. Para agregar una nueva fuente solo hay que pegar su URL
// publicada de Google Sheets en el campo `url`. Las entradas con `url: null`
// aparecen deshabilitadas en gris hasta que se cablee la URL real.
//
// Adapters disponibles (definidos en index.html):
//   - 'estandar': esquema de obras inducidas (Tramo II legacy).
//   - 'inah'   : esquema arqueológico (UTM 14N + agrupamiento V1/V2/V3
//                como polígono cerrado).
//
// Importante: las hojas publicadas de Google Sheets tardan unos minutos en
// propagar cambios. Quien actualice los datos debe saberlo.

window.DATA_SOURCES = {
  'queretaro-irapuato': {
    label: 'Querétaro - Irapuato',
    children: {
      'inah': {
        label: 'INAH',
        children: {
          'tramo-i': {
            label: 'Tramo I',
            adapter: 'inah',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqfqQIjo_aM3wNqz-nmldSGpAvc7pJV8vkoqQlGx3xZA4HrP8VXAHpeNLE2HVCxw/pub?gid=1971587044&single=true&output=csv'
          },
          'tramo-ii': {
            label: 'Tramo II',
            adapter: 'inah',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhwnRP-DRPHYKwlPe02Oh90in0PfT7I3VOailAYFVhGVXCEPvsahIypOpljdc7gg/pub?gid=1567286198&single=true&output=csv'
          },
          'tramo-iii': { label: 'Tramo III', adapter: 'inah', url: null },
          'tramo-iv':  { label: 'Tramo IV',  adapter: 'inah', url: null }
        }
      },
      'tramo-i':   { label: 'Tramo I',   adapter: 'estandar', url: null },
      'tramo-ii':  {
        label: 'Tramo II',
        adapter: 'estandar',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToUBW-L08hKrlZ-fsOXtQSK29vYgxGJui17azAADydkjCmXlP0v2k7GjP5Sf_2pw/pub?gid=2026999666&single=true&output=csv'
      },
      'tramo-iii': { label: 'Tramo III', adapter: 'estandar', url: null }
    }
  },
  'saltillo-monterrey': {
    label: 'Saltillo - Monterrey',
    children: {
      // pendiente integrar: Seg 13-14 + INAH datasets 1 y 2
    }
  },
  'monterrey-nuevo-laredo': {
    label: 'Monterrey - Nuevo Laredo',
    children: {
      // pendiente definir submenús
    }
  }
};
