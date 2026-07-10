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
    // Logo oficial. Versión negra para la barra clara.
    logo: "assets/logo-black.png",
    logoWhite: "assets/logo-white.png",
  },

  // ---- Hero (portada) ---------------------------------------
  hero: {
    // Foto de fondo del hero (ej. "assets/hero.jpg"). Vacío = degradado verde.
    image: "assets/photos/aerea-noche.jpg",
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
      title: { es: "Nuestra Misión", en: "Our Mission" },
      img: "assets/photos/comunidad-mesa.jpg",
      text: {
        es: "Crear experiencias que unan a las personas a través del deporte y las conviertan en relaciones, oportunidades y proyectos que generen un impacto positivo.",
        en: "To create experiences that bring people together through sport and turn them into relationships, opportunities and projects that generate a positive impact.",
      },
    },
    vision: {
      title: { es: "Nuestra Visión", en: "Our Vision" },
      img: "assets/photos/aerea-noche2.jpg",
      text: {
        es: "Construir una comunidad de personas que construyen, donde el deporte sea el punto de encuentro para fortalecer relaciones, impulsar ideas y generar un impacto positivo que trascienda la cancha.",
        en: "To build a community of builders, where sport is the meeting point to strengthen relationships, spark ideas and create a positive impact that goes beyond the court.",
      },
    },
    philosophy: {
      title: { es: "Nuestra Filosofía", en: "Our Philosophy" },
      img: "assets/photos/canchas-noche2.jpg",
      text: {
        es: "El deporte tiene un poder único: reunir a personas que quizá nunca se habrían encontrado. Cuando comparten un desafío, una conversación o una experiencia, surgen relaciones auténticas — y de ellas nacen ideas, alianzas e iniciativas con impacto.",
        en: "Sport has a unique power: it brings together people who might never have met. When they share a challenge, a conversation or an experience, authentic relationships emerge — and from them come ideas, alliances and initiatives with impact.",
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
    { name: { es: "Copa Sierra Abierta", en: "Sierra Open Cup" }, meta: { es: "Anual · +120 participantes", en: "Annual · 120+ players" }, img: "assets/photos/canchas-noche.jpg" },
    { name: { es: "Torneo de Verano", en: "Summer Tournament" }, meta: { es: "Temporada alta", en: "High season" }, img: "assets/photos/cancha-simetrica.jpg" },
    { name: { es: "Interclubes", en: "Interclub Series" }, meta: { es: "Competencia regional", en: "Regional competition" }, img: "assets/photos/aerea-noche.jpg" },
    { name: { es: "Torneo Corporativo", en: "Corporate Cup" }, meta: { es: "Empresas aliadas", en: "Partner companies" }, img: "assets/photos/canchas-noche2.jpg" },
  ],

  // ---- Alianzas (logos: pon rutas en assets/ o deja vacío) --
  partners: [
    { name: "Nacional (COPELME)", logo: "assets/logos/copelme.jpg", desc: { es: "Grupo aliado", en: "Partner group" } },
    { name: "ReplayMe", logo: "assets/logos/replayme.jpg", desc: { es: "Cámaras interactivas en canchas", en: "Interactive court cameras" } },
    { name: "Reva", logo: "assets/logos/reva.jpg", desc: { es: "Reservas online", en: "Online booking" } },
    { name: "Los Tanos", logo: "", desc: { es: "Canchas de pádel y fútbol", en: "Padel & football courts" } },
    { name: "Synergy / SynerX", logo: "", desc: { es: "Construcción del club", en: "Club construction" } },
    { name: "La Cuisine", logo: "", desc: { es: "Materiales inmobiliarios", en: "Building materials" } },
  ],

  // ---- Eventos ----------------------------------------------
  events: [
    { title: { es: "Networking & Deporte", en: "Networking & Sport" },
      text: { es: "Jornadas donde emprendedores compiten y conectan.", en: "Days where entrepreneurs compete and connect." }, img: "assets/photos/comunidad-mesa.jpg" },
    { title: { es: "Clínicas y entrenamientos", en: "Clinics & training" },
      text: { es: "Sesiones con profesionales invitados.", en: "Sessions with guest professionals." }, img: "assets/photos/lounge.jpg" },
    { title: { es: "Eventos corporativos", en: "Corporate events" },
      text: { es: "Espacios para que las empresas activen su marca.", en: "Spaces for companies to activate their brand." }, img: "assets/photos/bar.jpg" },
  ],

  // ---- Clientes / personas importantes ----------------------
  clients: [
    { name: "Nombre Apellido", role: { es: "Empresario", en: "Entrepreneur" } },
    { name: "Nombre Apellido", role: { es: "Directivo", en: "Executive" } },
    { name: "Nombre Apellido", role: { es: "Líder gremial", en: "Business leader" } },
    { name: "Nombre Apellido", role: { es: "Deportista destacado", en: "Featured athlete" } },
  ],

  // ---- El equipo (empleados del club) -----------------------
  // Agrega 'photo: "assets/photos/xxx.jpg"' para foto real; si no, muestra iniciales.
  team: [
    { name: "Nombre Apellido", role: { es: "Gerente General", en: "General Manager" }, photo: "" },
    { name: "Nombre Apellido", role: { es: "Director Deportivo", en: "Sports Director" }, photo: "" },
    { name: "Nombre Apellido", role: { es: "Coordinador de Eventos", en: "Events Coordinator" }, photo: "" },
    { name: "Nombre Apellido", role: { es: "Marketing & Alianzas", en: "Marketing & Partnerships" }, photo: "" },
    { name: "Nombre Apellido", role: { es: "Atención al Socio", en: "Member Services" }, photo: "" },
    { name: "Nombre Apellido", role: { es: "Entrenador Principal", en: "Head Coach" }, photo: "" },
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

  // ---- Galería de instalaciones -----------------------------
  // Cada categoría tiene su portada (img) y una galería de fotos (photos).
  gallery: [
    { img: "assets/photos/aerea-dia.jpg", caption: { es: "El complejo", en: "The complex" }, big: true,
      photos: ["assets/photos/g/aereas-1.jpg","assets/photos/g/aereas-2.jpg","assets/photos/g/aereas-3.jpg","assets/photos/g/aereas-4.jpg"] },
    { img: "assets/photos/canchas-noche.jpg", caption: { es: "Canchas iluminadas", en: "Lit courts" },
      photos: ["assets/photos/g/canchas-noche-1.jpg","assets/photos/g/canchas-noche-2.jpg","assets/photos/g/canchas-noche-3.jpg","assets/photos/g/canchas-noche-4.jpg"] },
    { img: "assets/photos/canchas-dia.jpg", caption: { es: "Pádel & Pickleball", en: "Padel & Pickleball" },
      photos: ["assets/photos/g/canchas-dia-1.jpg","assets/photos/g/canchas-dia-2.jpg","assets/photos/g/canchas-dia-3.jpg","assets/photos/g/canchas-dia-4.jpg"] },
    { img: "assets/photos/comunidad-mesa.jpg", caption: { es: "Espacios para conectar", en: "Spaces to connect" },
      photos: ["assets/photos/g/comunidad-1.jpg","assets/photos/g/comunidad-2.jpg","assets/photos/g/comunidad-3.jpg","assets/photos/g/comunidad-4.jpg"] },
    { img: "assets/photos/lounge.jpg", caption: { es: "Club house", en: "Club house" },
      photos: ["assets/photos/g/lounge-1.jpg","assets/photos/g/lounge-2.jpg","assets/photos/g/lounge-3.jpg","assets/photos/g/lounge-4.jpg"] },
    { img: "assets/photos/gimnasio.jpg", caption: { es: "Gimnasio", en: "Gym" },
      photos: ["assets/photos/g/gimnasio-1.jpg","assets/photos/g/gimnasio-2.jpg","assets/photos/g/gimnasio-3.jpg","assets/photos/g/gimnasio-4.jpg"] },
    { img: "assets/photos/wellness.jpg", caption: { es: "Wellness & relax", en: "Wellness & relax" },
      photos: ["assets/photos/g/wellness-1.jpg","assets/photos/g/wellness-2.jpg","assets/photos/g/wellness-3.jpg","assets/photos/g/wellness-4.jpg"] },
    { img: "assets/photos/bar.jpg", caption: { es: "Bar & cafetería", en: "Bar & café" },
      photos: ["assets/photos/g/bar-1.jpg","assets/photos/g/bar-2.jpg","assets/photos/g/bar-3.jpg","assets/photos/g/bar-4.jpg"] },
  ],

  // ---- Propuesta de alianza (destacada, ej. CAINCO) ---------
  proposal: {
    title: { es: "Una alianza a la medida de tu empresa", en: "A partnership tailored to your company" },
    text: {
      es: "Proponemos que los eventos de tu empresa — especialmente los de sus miembros más jóvenes y emprendedores — se realicen en el Club de la Sierra, uniendo deporte y networking en un mismo espacio.",
      en: "We propose that your company's events — especially those for its younger, entrepreneurial members — take place at Club de la Sierra, uniting sport and networking in one space.",
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
