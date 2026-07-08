/* ============================================================
   CLUB DE LA SIERRA — Contenido editable del sitio (pitch)
   ------------------------------------------------------------
   Edita SOLO este archivo para cambiar textos, cifras, logos,
   clientes, torneos, etc. No necesitas tocar el resto del código.
   Cada texto tiene versión en español (es) e inglés (en).
   ============================================================ */

const DATA = {
  // ---- Marca / cabecera -------------------------------------
  brand: {
    name: "Club de la Sierra",
    tagline: {
      es: "Las mejores conexiones nacen en la cancha",
      en: "The best connections are born on the court",
    },
    // Reemplaza por la ruta de tu logo, ej: "assets/logo.png"
    logo: "",
  },

  // ---- Hero (portada) ---------------------------------------
  hero: {
    kicker: { es: "Club De La Sierra", en: "Club De La Sierra" },
    title: {
      es: "Donde las mejores conexiones nacen en la cancha.",
      en: "Where the best connections are born on the court.",
    },
    subtitle: {
      es: "Más que un club deportivo, somos una comunidad que utiliza el deporte como punto de encuentro para conectar personas, impulsar ideas y generar un impacto positivo que trascienda la cancha.",
      en: "More than a sports club, we are a community that uses sport as a meeting point to connect people, spark ideas and create a positive impact that goes beyond the court.",
    },
    ctaPrimary: { es: "Conoce la propuesta", en: "See the proposal" },
    ctaSecondary: { es: "Vive la experiencia", en: "Experience it" },
  },

  // ---- Cifras destacadas (edítalas con tus datos reales) ----
  // 'estimate:true' muestra la etiqueta "estimado".
  stats: [
    { value: "2015", label: { es: "Año de fundación", en: "Founded" } },
    { value: "+500", label: { es: "Miembros activos", en: "Active members" }, estimate: true },
    { value: "+40", label: { es: "Torneos realizados", en: "Tournaments held" }, estimate: true },
    { value: "+15", label: { es: "Alianzas formadas", en: "Partnerships formed" }, estimate: true },
  ],

  // ---- Misión / Visión / Filosofía --------------------------
  purpose: {
    mission: {
      title: { es: "Misión", en: "Mission" },
      text: {
        es: "Impulsar el desarrollo personal, profesional y social de nuestra comunidad a través del deporte, creando un espacio donde competir, crecer y conectar sea una sola experiencia.",
        en: "To drive the personal, professional and social growth of our community through sport, creating a space where competing, growing and connecting become one experience.",
      },
    },
    vision: {
      title: { es: "Visión", en: "Vision" },
      text: {
        es: "Ser el club de referencia en Santa Cruz para el deporte y el networking de alto valor, reconocido por la calidad de su comunidad y sus alianzas.",
        en: "To be Santa Cruz's leading club for sport and high-value networking, recognized for the quality of its community and partnerships.",
      },
    },
    philosophy: {
      title: { es: "Filosofía", en: "Philosophy" },
      text: {
        es: "Creemos que las mejores relaciones — de negocios y de vida — nacen del esfuerzo compartido. El deporte une, disciplina y abre puertas.",
        en: "We believe the best relationships — in business and in life — are born from shared effort. Sport unites, disciplines and opens doors.",
      },
    },
  },

  // ---- Línea de tiempo / logros -----------------------------
  timeline: [
    { year: "2015", title: { es: "Nace el club", en: "The club is born" },
      text: { es: "Un grupo de socios fundadores da vida al Club de la Sierra.", en: "A group of founding members brings the Club de la Sierra to life." } },
    { year: "2017", title: { es: "Primer gran torneo", en: "First major tournament" },
      text: { es: "Organizamos nuestro primer torneo abierto con gran convocatoria.", en: "We hosted our first open tournament with strong turnout." } },
    { year: "2019", title: { es: "Primeras alianzas", en: "First partnerships" },
      text: { es: "Firmamos convenios con marcas y empresas locales.", en: "We signed agreements with local brands and companies." } },
    { year: "2022", title: { es: "Expansión de la comunidad", en: "Community expansion" },
      text: { es: "Superamos los cientos de miembros activos y nuevas disciplinas.", en: "We surpassed hundreds of active members and added new disciplines." } },
    { year: "2025", title: { es: "Hub de networking", en: "Networking hub" },
      text: { es: "El club se consolida como punto de encuentro para emprendedores.", en: "The club consolidates as a meeting point for entrepreneurs." } },
  ],

  // ---- Torneos ----------------------------------------------
  tournaments: [
    { name: { es: "Copa Sierra Abierta", en: "Sierra Open Cup" }, meta: { es: "Anual · +120 participantes", en: "Annual · 120+ players" } },
    { name: { es: "Torneo de Verano", en: "Summer Tournament" }, meta: { es: "Temporada alta", en: "High season" } },
    { name: { es: "Interclubes", en: "Interclub Series" }, meta: { es: "Competencia regional", en: "Regional competition" } },
    { name: { es: "Torneo Corporativo", en: "Corporate Cup" }, meta: { es: "Empresas aliadas", en: "Partner companies" } },
  ],

  // ---- Alianzas (logos: pon rutas en assets/ o deja vacío) --
  partners: [
    { name: "CAINCO", logo: "", note: { es: "Alianza objetivo", en: "Target partnership" } },
    { name: "Marca Aliada 1", logo: "" },
    { name: "Marca Aliada 2", logo: "" },
    { name: "Marca Aliada 3", logo: "" },
  ],

  // ---- Eventos ----------------------------------------------
  events: [
    { title: { es: "Networking & Deporte", en: "Networking & Sport" },
      text: { es: "Jornadas donde emprendedores compiten y conectan.", en: "Days where entrepreneurs compete and connect." } },
    { title: { es: "Clínicas y entrenamientos", en: "Clinics & training" },
      text: { es: "Sesiones con profesionales invitados.", en: "Sessions with guest professionals." } },
    { title: { es: "Eventos corporativos", en: "Corporate events" },
      text: { es: "Espacios para que las empresas activen su marca.", en: "Spaces for companies to activate their brand." } },
  ],

  // ---- Clientes / personas importantes ----------------------
  clients: [
    { name: "Nombre Apellido", role: { es: "Empresario", en: "Entrepreneur" } },
    { name: "Nombre Apellido", role: { es: "Directivo", en: "Executive" } },
    { name: "Nombre Apellido", role: { es: "Líder gremial", en: "Business leader" } },
    { name: "Nombre Apellido", role: { es: "Deportista destacado", en: "Featured athlete" } },
  ],

  // ---- Objetivos y metas ------------------------------------
  goals: {
    short: {
      title: { es: "Objetivos a corto plazo", en: "Short-term goals" },
      items: {
        es: [
          "Cerrar la alianza con CAINCO para eventos en el club.",
          "Atraer a jóvenes emprendedores como nuevos miembros.",
          "Lanzar 3 eventos de networking deportivo este año.",
        ],
        en: [
          "Close the CAINCO partnership for events at the club.",
          "Attract young entrepreneurs as new members.",
          "Launch 3 sport-networking events this year.",
        ],
      },
    },
    long: {
      title: { es: "Objetivos a largo plazo", en: "Long-term goals" },
      items: {
        es: [
          "Ser el hub de networking deportivo #1 de Santa Cruz.",
          "Consolidar +30 alianzas estratégicas activas.",
          "Duplicar la comunidad de miembros en 5 años.",
        ],
        en: [
          "Become Santa Cruz's #1 sport-networking hub.",
          "Consolidate 30+ active strategic partnerships.",
          "Double the member community within 5 years.",
        ],
      },
    },
  },

  // ---- Proyección de crecimiento (ESTIMACIÓN editable) ------
  // Reemplaza 'history' con tus cifras reales por año.
  // El sitio calcula la proyección automáticamente.
  projection: {
    metricLabel: { es: "Miembros activos", en: "Active members" },
    history: [
      { year: 2015, value: 60 },
      { year: 2017, value: 140 },
      { year: 2019, value: 260 },
      { year: 2022, value: 400 },
      { year: 2025, value: 520 },
    ],
    // Años futuros a proyectar (se calculan por tendencia):
    projectYears: [2027, 2029, 2031],
  },

  // ---- Propuesta de alianza (destacada, ej. CAINCO) ---------
  proposal: {
    title: { es: "Una alianza a la medida de CAINCO", en: "A partnership tailored for CAINCO" },
    text: {
      es: "Proponemos que los eventos de CAINCO — especialmente los de sus miembros más jóvenes y emprendedores — se realicen en el Club de la Sierra, uniendo deporte y networking en un mismo espacio.",
      en: "We propose that CAINCO's events — especially those for its younger, entrepreneurial members — take place at Club de la Sierra, uniting sport and networking in one space.",
    },
    benefits: {
      es: [
        "Espacio deportivo y social exclusivo para tus eventos.",
        "Acceso a una comunidad de emprendedores y empresarios.",
        "Activación de marca en torneos y jornadas.",
        "Networking real a través del deporte.",
      ],
      en: [
        "Exclusive sport and social venue for your events.",
        "Access to a community of entrepreneurs and executives.",
        "Brand activation across tournaments and events.",
        "Real networking through sport.",
      ],
    },
  },

  // ---- Contacto ---------------------------------------------
  contact: {
    text: { es: "¿Construimos una alianza?", en: "Shall we build a partnership?" },
    email: "contacto@clubdelasierra.com",
    phone: "+591 700 00000",
    location: { es: "Santa Cruz de la Sierra, Bolivia", en: "Santa Cruz de la Sierra, Bolivia" },
  },
};
