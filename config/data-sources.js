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
          'tramo-iii': {
            label: 'Tramo III',
            adapter: 'inah',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhlO7-OWXxKz4oatI5djSc9t2fHHsf1EMtPKLL-LVU5QQ9xEBODGSa-yHFyJxKQw/pub?gid=24093312&single=true&output=csv'
          },
          'tramo-iv': {
            label: 'Tramo IV',
            adapter: 'inah',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQaE_bz537rfB1AmX7VB6SoW-kQxXUNg6re3JFE9yq0jjQM2hnGiWeLEqCjdIlwIg/pub?gid=1701037126&single=true&output=csv'
          }
        }
      },
      'tramo-i': {
        label: 'Tramo I',
        adapter: 'estandar',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ599M1WRyy0A29IEGvluqc14k0jcObel0BP3RQ-z3w8ryr5FjmzSM1YeCoGauHyA/pub?gid=1935831653&single=true&output=csv'
      },
      'tramo-ii':  {
        label: 'Tramo II',
        adapter: 'estandar',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToUBW-L08hKrlZ-fsOXtQSK29vYgxGJui17azAADydkjCmXlP0v2k7GjP5Sf_2pw/pub?gid=2026999666&single=true&output=csv'
      },
      'tramo-iii': {
        label: 'Tramo III',
        adapter: 'estandar',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT4nPjWU5T9qxIkM29K-d1o_QWTra5GCeI6bVJqZD7Qe6OQUrW4ZGR9MuCTUHucUQ/pub?gid=1261822212&single=true&output=csv'
      }
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
