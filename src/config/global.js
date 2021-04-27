export const global = {
  componenteFormativo:
    'Procedibilidad destinada a reducir riesgos biológicos dentro de una producción pecuaria sostenible',
  descripcionCurso:
    'La producción pecuaria es considerada como la combinación de actividades que se realizan dentro de cualquier explotación de animales domésticos, cuya finalidad es producir carne, leche, huevos, pieles, lana, semoviente para cría, engorde, pie de cría, subproductos, etc. Además de ello, debe ser sostenible y contribuir en preservar el medioambiente, donde el hombre es quien obtiene beneficios económicos por su desarrollo y comercialización.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Componentes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Sistemas de producción pecuaria',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Buenas prácticas pecuarias',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Plan de producción',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Parámetros técnicos',
          hash: 't_1_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.5',
          titulo: 'Programación de actividades pecuarias',
          hash: 't_1_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.6',
          titulo: 'Comunicación',
          hash: 't_1_6',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.7',
          titulo: 'Manuales de procedimiento',
          hash: 't_1_7',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.8',
          titulo: 'Legislación laboral',
          hash: 't_1_8',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.8.1',
          titulo: 'Recursos humanos',
          hash: 't_1_8_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.8.2',
          titulo: 'Normativa',
          hash: 't_1_8_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.8.3',
          titulo: 'Bienestar animal',
          hash: 't_1_8_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.9',
          titulo: 'Comportamiento animal',
          hash: 't_1_9',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.10',
          titulo: 'Especie',
          hash: 't_1_10',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.10.1',
          titulo: 'Etapas de desarrollo',
          hash: 't_1_10_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.10.2',
          titulo: 'Técnicas de manejo',
          hash: 't_1_10_2',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Procedibilidad destinada a reducir riesgos biológicos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Normas de seguridad y salud en el trabajo',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.1.1',
          titulo: 'Elementos de protección personal y medidas de protección',
          hash: 't_2_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.1.2',
          titulo: 'Clases de riesgo',
          hash: 't_2_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Bioseguridad',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2.1',
          titulo: 'Programa',
          hash: 't_2_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2.3',
          titulo: 'Protocolo',
          hash: 't_2_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2.4',
          titulo: 'Buenas prácticas',
          hash: 't_2_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Insumos',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3.1',
          titulo: 'Ficha técnica',
          hash: 't_2_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3.2',
          titulo: 'Protocolo',
          hash: 't_2_3_2',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura. ',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Daniel Alberto Beltrán Martínez',
      cargo: 'Experto temático',
      centro: 'Centro de Desarrollo Agroindustrial y Empresarial',
      regional: 'Regional Cundinamarca',
    },
    {
      nombre: 'Andrés Felipe Velandia Espitia',
      cargo: 'Diseñador instruccional',
      centro: 'Centro de Diseño y Metrología.',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Anzola, H., Pedarza, A. E., Lezzaca. M. E y Obando, H. (2007). Buenas prácticas de bioseguridad en centros productores de embriones y semen. Conceptos básicos para su aplicación en Colombia. ICA. ',
    link:
      'https://www.ica.gov.co/getattachment/50212a1b-889c-4119-9133-c37b9c3382e2/Public%20l ',
  },
  {
    referencia:
      'Decreto 1443 de 2014. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Diario Oficial No. 49.229. 31 de julio de 2014.',
    link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1443_2014.htm',
  },
  {
    referencia:
      'Ggavatt Cueramaro Bovinos Productores de Leche (2019). Parámetros productivos. ',
    link:
      'https://noticiasdecarne.blogspot.com/2019/10/parametros-reproductivos-en-bovinos-de_4.html',
  },
  {
    referencia:
      'González, X. (2019). La formalidad laboral en el sector agropecuario, una tarea que está pendiente en Colombia. Agronegocios.',
    link:
      'https://www.agronegocios.co/agricultura/la-formalidad-laboral-en-el-agro-una-tarea-que-esta-pendiente-en-colombia-2920191 ',
  },
  {
    referencia:
      'Instituto Colombiano Agropecuario (ICA). (2020a). Producción pecuaria en Colombia aporta a la economía del país. [Video]. YouTube.',
    link: 'https://www.youtube.com/watch?v=i73d9--psjc',
  },
  {
    referencia:
      'Instituto Colombiano Agropecuario (ICA). (2020b). Normatividad relacionada con las buenas prácticas ganaderas',
    link:
      'https://cloud.educaplay.com/recursos/138/4418593/imagen_1_1554399342.jpg',
  },
  {
    referencia:
      'Instituto Colombiano Agropecuario (ICA). (s.f.). Buenas Prácticas Ganaderas. Consultado el 11 de noviembre de 2020 en',
    link:
      'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg.aspx',
  },
  {
    referencia:
      'Mamani, P., Guidi, A. y Espinoza, J. (2007). PPC Plan de Producción y Costos. Fundación PROINPA.',
    link:
      'https://www.proinpa.org/tic/pdf/Metodologias%20participativas/Metodologias%20de%20mercado/pdf68.pdf',
  },
  {
    referencia:
      'Ministerio de Salud y Protección Social. (2017). Programa de elementos de protección personal, uso y mantenimiento. ',
    link:
      'Https://www.minsalud.gov.co/ministerio/institucional/procesos%20y%20procedimientos/gths02.pdf',
  },
  {
    referencia: 'Ministerio del Trabajo. (2020). Códigos',
    link:
      'Http://www.mintrabajo.gov.co/web/guest/normatividad/leyes-y-decretos-ley/codigos',
  },
  {
    referencia:
      'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2020). Producción pecuaria en América Latina y el Caribe',
    link: 'http://www.fao.org/americas/prioridades/produccion-pecuaria/es/ ',
  },
  {
    referencia:
      'SafetYA. (2019). Clases de riesgo para cotización en la ARL según la actividad económica.',
    link: 'https://safetya.co/clases-de-riesgo-cotizacion-arl/',
  },
  {
    referencia:
      'Uribe, F., Zuluaga, A. F., Valencia, L., Murgueitio, E. y Ochoa, L. (2011). Buenas prácticas ganaderas. Manual 3, Proyecto Ganadería Colombiana Sostenible. GEF, BANCO MUNDIAL, FEDEGÁN, CIPAV, FONDO ACCION, TNC',
    link: 'http://www.cipav.org.co/pdf/3.Buenas.Practicas.Ganaderas.pdf',
  },
]

export const glosario = [
  {
    termino: 'Bioseguridad',
    significado:
      'conjunto de prácticas o medidas sanitarias y preventivas orientadas a prevenir el contacto de los animales con microorganismos patógenos y que, utilizadas en forma permanente, buscan evitar la entrada y salida de agentes infectocontagiosos.',
  },
  {
    termino: 'Buenas Prácticas de Bioseguridad (BPB)',
    significado:
      'son los principios básicos y prácticas generales de higiene y sanidad en la producción, almacenamiento, transporte y distribución de material seminal y embriones, con el objeto de garantizar que estén en condiciones sanitarias adecuadas y se disminuya cualquier riesgo inherente a su producción.',
  },
  {
    termino: 'Desinfección',
    significado:
      'es el tratamiento físico-químico aplicado a las superficies limpias, con el fin de destruir los microorganismos que pueden ocasionar contaminación y reducir sustancialmente el número de otros microorganismos indeseables, sin que dicho tratamiento afecte adversamente las características y calidad del producto u objeto del proceso.',
  },
  {
    termino: 'Insumo pecuario',
    significado:
      'es todo producto químico, biológico o de origen biotecnológico utilizado para promover la producción animal.',
  },
  {
    termino: 'Limpieza',
    significado:
      'es el proceso o la operación de eliminación de suciedades y materiales extraños o indeseables.',
  },
  {
    termino: 'Diseño',
    significado:
      'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
  },
  {
    termino: 'Manejo',
    significado:
      'considera todas aquellas prácticas que promueven la productividad, bienestar general y salud de los animales, e incluye el manejo de subproductos y residuos.',
  },
  {
    termino: 'Peligro',
    significado:
      'un agente biológico, químico o físico que pueda comprometer la seguridad y/o la salud de las animales o bien la integridad de los embriones y semen producidos.',
  },
  {
    termino: 'Semoviente',
    significado:
      'término aplicado especialmente al ganado, para indicar que se mueve por sí mismo.',
  },
  {
    termino: 'Visitantes',
    significado:
      'Personas que no efectúan rutinariamente labores en el centro productor de material genético.',
  },
]

export const complementario = [
  {
    texto:
      'CIPAV. (2011). Buenas prácticas ganaderas. Manual 3, Proyecto Ganadería Colombiana Sostenible.',
    tipo: 'Manual',
    link: 'http://www.cipav.org.co/pdf/3.Buenas.Practicas.Ganaderas.pdf',
  },
  {
    texto: 'Fundación PROINPA. (2007). PPC Plan de Producción y Costos.',
    tipo: 'Guía',
    link:
      'https://www.proinpa.org/tic/pdf/Metodologias%20participativas/Metodologias%20de%20mercado/pdf68.pdf ',
  },
  {
    texto: 'Ministerio del Trabajo. (2020). Códigos.',
    tipo: 'Página web',
    link:
      'Http://www.mintrabajo.gov.co/web/guest/normatividad/leyes-y-decretos-ley/codigos ',
  },
]
