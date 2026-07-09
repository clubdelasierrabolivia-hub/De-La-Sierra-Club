/* ============================================================
   Club de la Sierra — lógica de la página (i18n + render + chart)
   ============================================================ */

// Textos de interfaz (etiquetas de secciones) en ES / EN
const UI = {
  "nav.home":      { es: "Inicio", en: "Home" },
  "nav.club":      { es: "Quiénes somos", en: "About us" },
  "nav.events":    { es: "Eventos", en: "Events" },
  "sub.essence":   { es: "Nuestra esencia", en: "Our essence" },
  "sub.team":      { es: "El equipo", en: "The team" },
  "sub.history":   { es: "Historia", en: "History" },
  "sub.goals":     { es: "Objetivos", en: "Goals" },

  "sec.teamKicker": { es: "Las personas", en: "The people" },
  "sec.teamTitle":  { es: "El equipo del club", en: "The club's team" },
  "sec.teamSub":    { es: "Quienes hacen posible cada experiencia.", en: "The people behind every experience." },
  "nav.facilities":{ es: "Instalaciones", en: "Facilities" },
  "nav.history":   { es: "Historia", en: "History" },
  "nav.partners":  { es: "Alianzas", en: "Partners" },
  "nav.goals":     { es: "Objetivos", en: "Goals" },
  "nav.growth":    { es: "Crecimiento", en: "Growth" },
  "nav.proposal":  { es: "Propuesta", en: "Proposal" },

  "sec.clubKicker":    { es: "Quiénes somos", en: "Who we are" },
  "sec.clubTitle":     { es: "Nuestra esencia", en: "Our essence" },

  "sec.facilKicker":   { es: "El espacio", en: "The space" },
  "sec.facilTitle":    { es: "Instalaciones de primer nivel", en: "First-class facilities" },
  "sec.facilSub":      { es: "Un entorno natural, moderno y sofisticado, diseñado para competir, conectar y crecer.", en: "A natural, modern and sophisticated environment, designed to compete, connect and grow." },

  "sec.historyKicker": { es: "Trayectoria", en: "Track record" },
  "sec.historyTitle":  { es: "Nuestra historia y logros", en: "Our history & milestones" },
  "sec.historySub":    { es: "Cada año, un paso más grande.", en: "Every year, a bigger step." },

  "sec.tournKicker":   { es: "Competencia", en: "Competition" },
  "sec.tournTitle":    { es: "Torneos realizados", en: "Tournaments held" },

  "sec.partnersKicker":{ es: "Confianza", en: "Trust" },
  "sec.partnersTitle": { es: "Alianzas y convenios", en: "Partnerships & agreements" },
  "sec.partnersSub":   { es: "Marcas y organizaciones que crecen con nosotros.", en: "Brands and organizations growing with us." },

  "sec.eventsKicker":  { es: "Experiencias", en: "Experiences" },
  "sec.eventsTitle":   { es: "Eventos que hacemos", en: "Events we host" },

  "sec.clientsKicker": { es: "Comunidad", en: "Community" },
  "sec.clientsTitle":  { es: "Personas que confían en nosotros", en: "People who trust us" },
  "sec.clientsSub":    { es: "Empresarios, líderes y deportistas destacados.", en: "Entrepreneurs, leaders and featured athletes." },

  "sec.goalsKicker":   { es: "Hacia dónde vamos", en: "Where we're headed" },
  "sec.goalsTitle":    { es: "Objetivos y metas", en: "Goals & targets" },

  "sec.growthKicker":  { es: "Datos", en: "Data" },
  "sec.growthTitle":   { es: "Crecimiento y proyección", en: "Growth & projection" },
  "sec.growthSub":     { es: "La tendencia habla por sí sola — y lo mejor está por venir.", en: "The trend speaks for itself — and the best is yet to come." },

  "sec.proposalKicker":{ es: "Propuesta de alianza", en: "Partnership proposal" },

  "chart.real": { es: "Histórico real", en: "Actual history" },
  "chart.proj": { es: "Proyección estimada", en: "Estimated projection" },
  "chart.note": { es: "* Proyección estimada a partir de la tendencia histórica. Cifras ilustrativas, ajustables con datos reales del club.", en: "* Estimated projection based on historical trend. Illustrative figures, adjustable with the club's real data." },

  "cta.talk":   { es: "Conversemos", en: "Let's talk" },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
};

let LANG = localStorage.getItem("lang") || "es";

const t = (obj) => (obj && (obj[LANG] ?? obj.es)) ?? "";
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const $ = (s) => document.querySelector(s);

/* ---------- Render principal ---------- */
function render() {
  // Marca
  const brand = DATA.brand;
  const logoEl = $("#brandLogo");
  logoEl.innerHTML = brand.logo
    ? `<img src="${brand.logo}" alt="${brand.name}"/>`
    : `<span class="dot">S</span><span>${brand.name}</span>`;
  $("#footerName").textContent = brand.name;

  // Foto de fondo del hero (si se define en data.hero.image)
  const heroPhoto = $("#heroPhoto");
  if (heroPhoto && DATA.hero.image) {
    heroPhoto.style.backgroundImage =
      `linear-gradient(180deg,rgba(11,42,30,.25),rgba(11,42,30,.5)), url("${DATA.hero.image}")`;
  }

  // Textos con data-bind (contenido del DATA) y data-i18n (UI)
  document.querySelectorAll("[data-bind]").forEach((n) => {
    const val = n.getAttribute("data-bind").split(".").reduce((o, k) => o?.[k], DATA);
    n.innerHTML = t(val);
  });
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    n.textContent = t(UI[n.getAttribute("data-i18n")]);
  });

  // Stats
  const stats = $("#stats"); stats.innerHTML = "";
  DATA.stats.forEach((s) => {
    const est = s.estimate ? `<span class="tag-est">${LANG === "es" ? "est." : "est."}</span>` : "";
    stats.appendChild(el("div", "stat", `<div class="num">${s.value}${est}</div><div class="lbl">${t(s.label)}</div>`));
  });

  // Propósito (esencia — estilo casual, sin cuadros)
  const purpose = $("#purpose"); purpose.innerHTML = "";
  ["mission", "vision", "philosophy"].forEach((k) => {
    const p = DATA.purpose[k];
    purpose.appendChild(el("div", "essence-item", `<h3>${t(p.title)}</h3><p>${t(p.text)}</p>`));
  });

  // Galería de instalaciones (cada categoría abre su propia galería)
  const gal = $("#gallery");
  if (gal && DATA.gallery) {
    gal.innerHTML = "";
    DATA.gallery.forEach((g, i) => {
      const n = g.photos ? g.photos.length : 0;
      const badge = n ? `<span class="gcount">${n} ${LANG === "es" ? "fotos" : "photos"} ›</span>` : "";
      const tile = el("figure", "gtile" + (g.big ? " gtile-big" : "") + (n ? " gclick" : ""),
        `<img src="${g.img}" alt="${t(g.caption)}" loading="lazy"/><figcaption>${t(g.caption)}${badge}</figcaption>`);
      if (n) tile.setAttribute("data-gindex", i);
      gal.appendChild(tile);
    });
  }

  // Timeline
  const tl = $("#timeline"); tl.innerHTML = "";
  DATA.timeline.forEach((i) => {
    tl.appendChild(el("div", "tl-item", `<div class="tl-year">${i.year}</div><h3>${t(i.title)}</h3><p class="muted">${t(i.text)}</p>`));
  });

  // Torneos
  const tr = $("#tournaments"); tr.innerHTML = "";
  DATA.tournaments.forEach((x) => {
    tr.appendChild(el("article", "photo-card", `<img src="${x.img}" alt="${t(x.name)}" loading="lazy"/><div class="pc-body"><h3>${t(x.name)}</h3><p>${t(x.meta)}</p></div>`));
  });

  // Alianzas
  const pt = $("#partners"); pt.innerHTML = "";
  DATA.partners.forEach((p) => {
    const inner = p.logo ? `<img src="${p.logo}" alt="${p.name}"/>` : p.name;
    const note = p.note ? `<small>${t(p.note)}</small>` : "";
    pt.appendChild(el("div", "logo-box", `${inner}${note}`));
  });

  // Eventos
  const ev = $("#events"); ev.innerHTML = "";
  DATA.events.forEach((e) => {
    ev.appendChild(el("article", "photo-card", `<img src="${e.img}" alt="${t(e.title)}" loading="lazy"/><div class="pc-body"><h3>${t(e.title)}</h3><p>${t(e.text)}</p></div>`));
  });

  // Clientes
  const cl = $("#clients"); cl.innerHTML = "";
  DATA.clients.forEach((c) => {
    const initials = c.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    cl.appendChild(el("div", "person", `<div class="av">${initials}</div><div class="nm">${c.name}</div><div class="ro">${t(c.role)}</div>`));
  });

  // Equipo
  const tm = $("#team");
  if (tm && DATA.team) {
    tm.innerHTML = "";
    DATA.team.forEach((p) => {
      const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
      const av = p.photo ? `<div class="av" style="background-image:url('${p.photo}');background-size:cover"></div>` : `<div class="av">${initials}</div>`;
      tm.appendChild(el("div", "person", `${av}<div class="nm">${p.name}</div><div class="ro">${t(p.role)}</div>`));
    });
  }

  // Objetivos
  const g = $("#goals"); g.innerHTML = "";
  [DATA.goals.short, DATA.goals.long].forEach((blk) => {
    const items = (blk.items[LANG] || blk.items.es).map((i) => `<li>${i}</li>`).join("");
    g.appendChild(el("div", "card", `<h3>${t(blk.title)}</h3><ul>${items}</ul>`));
  });

  // Beneficios propuesta
  const b = $("#benefits"); b.innerHTML = "";
  (DATA.proposal.benefits[LANG] || DATA.proposal.benefits.es).forEach((x) => b.appendChild(el("li", null, x)));

  // Contacto
  const ci = $("#contactInfo");
  ci.innerHTML = `
    <span>✉️ <a href="mailto:${DATA.contact.email}">${DATA.contact.email}</a></span>
    <span>📞 <a href="tel:${DATA.contact.phone.replace(/\s/g, "")}">${DATA.contact.phone}</a></span>
    <span>📍 ${t(DATA.contact.location)}</span>`;

  drawChart();
  drawProjStats();
}

/* ---------- Proyección (regresión lineal simple) ---------- */
function projectValues() {
  const h = DATA.projection.history;
  const n = h.length;
  const sx = h.reduce((a, p) => a + p.year, 0);
  const sy = h.reduce((a, p) => a + p.value, 0);
  const sxy = h.reduce((a, p) => a + p.year * p.value, 0);
  const sxx = h.reduce((a, p) => a + p.year * p.year, 0);
  const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  const intercept = (sy - slope * sx) / n;
  const projected = DATA.projection.projectYears.map((y) => ({
    year: y, value: Math.round(slope * y + intercept), projected: true,
  }));
  return { history: h, projected };
}

function drawProjStats() {
  const { history, projected } = projectValues();
  const last = history[history.length - 1].value;
  const future = projected[projected.length - 1];
  const growth = Math.round(((future.value - last) / last) * 100);
  const box = $("#projStats");
  box.innerHTML = `
    <div class="stat" style="text-align:left;margin-bottom:12px">
      <div class="num">${future.value.toLocaleString()}</div>
      <div class="lbl">${t(DATA.projection.metricLabel)} · ${future.year} (${LANG === "es" ? "proyectado" : "projected"})</div>
    </div>
    <div class="stat" style="text-align:left">
      <div class="num">+${growth}%</div>
      <div class="lbl">${LANG === "es" ? "crecimiento proyectado" : "projected growth"} ${history[history.length - 1].year}–${future.year}</div>
    </div>`;
}

function drawChart() {
  const svg = $("#chart");
  const { history, projected } = projectValues();
  const all = [...history, ...projected];
  const W = 620, H = 320, pad = { l: 46, r: 20, t: 20, b: 34 };
  const years = all.map((d) => d.year);
  const vals = all.map((d) => d.value);
  const minY = Math.min(...years), maxY = Math.max(...years);
  const maxV = Math.max(...vals) * 1.1;
  const x = (yr) => pad.l + ((yr - minY) / (maxY - minY)) * (W - pad.l - pad.r);
  const y = (v) => H - pad.b - (v / maxV) * (H - pad.t - pad.b);

  let s = "";
  // grid + eje Y
  for (let i = 0; i <= 4; i++) {
    const gv = (maxV / 4) * i;
    const gy = y(gv);
    s += `<line x1="${pad.l}" y1="${gy}" x2="${W - pad.r}" y2="${gy}" stroke="#e2e0d6" stroke-width="1"/>`;
    s += `<text x="${pad.l - 8}" y="${gy + 4}" fill="#8a8a80" font-size="11" text-anchor="end">${Math.round(gv)}</text>`;
  }
  // eje X (años)
  all.forEach((d) => {
    s += `<text x="${x(d.year)}" y="${H - 12}" fill="#8a8a80" font-size="11" text-anchor="middle">${d.year}</text>`;
  });
  // línea histórica
  const histPts = history.map((d) => `${x(d.year)},${y(d.value)}`).join(" ");
  s += `<polyline points="${histPts}" fill="none" stroke="#0C5A42" stroke-width="3.5"/>`;
  // línea proyectada (desde último histórico)
  const link = [history[history.length - 1], ...projected].map((d) => `${x(d.year)},${y(d.value)}`).join(" ");
  s += `<polyline points="${link}" fill="none" stroke="#163F7A" stroke-width="3.5" stroke-dasharray="7 6"/>`;
  // puntos
  history.forEach((d) => { s += `<circle cx="${x(d.year)}" cy="${y(d.value)}" r="4.5" fill="#0C5A42"/>`; });
  projected.forEach((d) => {
    s += `<circle cx="${x(d.year)}" cy="${y(d.value)}" r="4.5" fill="#163F7A"/>`;
    s += `<text x="${x(d.year)}" y="${y(d.value) - 10}" fill="#163F7A" font-size="11" font-weight="700" text-anchor="middle">${d.value}</text>`;
  });
  svg.innerHTML = s;
}

/* ---------- Idioma ---------- */
function setLang(l) {
  LANG = l;
  localStorage.setItem("lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === l));
  render();
}
document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ---------- Galería (lightbox por categoría) ---------- */
function openGallery(i) {
  const g = DATA.gallery[i];
  if (!g || !g.photos) return;
  const lb = $("#lightbox");
  lb.querySelector(".lb-title").textContent = t(g.caption);
  lb.querySelector(".lb-grid").innerHTML = g.photos
    .map((p) => `<img src="${p}" alt="${t(g.caption)}" loading="lazy"/>`).join("");
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeGallery() {
  const lb = $("#lightbox");
  if (lb) lb.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("click", (e) => {
  const tile = e.target.closest("[data-gindex]");
  if (tile) { openGallery(+tile.getAttribute("data-gindex")); }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeGallery(); });

/* ---------- Pestañas (tabs) y sub-pestañas ---------- */
const subState = {};

function applySub(name) {
  const subSecs = [...document.querySelectorAll(`.tab-section[data-tab="${name}"][data-subtab]`)];
  if (!subSecs.length) return;
  const subs = [...new Set(subSecs.map((s) => s.getAttribute("data-subtab")))];
  let cur = subState[name];
  if (!subs.includes(cur)) cur = subs[0];
  subState[name] = cur;
  subSecs.forEach((s) => {
    const on = s.getAttribute("data-subtab") === cur;
    s.style.display = on ? "" : "none";
    if (on) s.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
  });
  document.querySelectorAll(`[data-sub][data-subgroup="${name}"]`).forEach((b) =>
    b.classList.toggle("active", b.getAttribute("data-sub") === cur));
}

function showTab(name) {
  const sections = document.querySelectorAll(".tab-section");
  let found = false;
  sections.forEach((s) => {
    const on = s.getAttribute("data-tab") === name;
    if (on) found = true;
    s.classList.toggle("is-active", on);
    if (on) s.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
  });
  if (!found) { name = "inicio"; document.querySelector('.tab-section[data-tab="inicio"]').classList.add("is-active"); }
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("data-tab") === name));
  applySub(name);
  localStorage.setItem("tab", name);
  window.scrollTo(0, 0);
}

function showSub(name, sub) {
  subState[name] = sub;
  applySub(name);
  window.scrollTo(0, 0);
}

document.addEventListener("click", (e) => {
  // Píldoras internas (sub-nav dentro de la sección)
  const pill = e.target.closest("[data-subgroup]");
  if (pill) { e.preventDefault(); showSub(pill.getAttribute("data-subgroup"), pill.getAttribute("data-sub")); return; }
  // Enlaces de pestaña (incluye items del dropdown que llevan data-tab + data-sub)
  const link = e.target.closest("[data-tab]");
  if (!link) return;
  e.preventDefault();
  const tab = link.getAttribute("data-tab");
  const sub = link.getAttribute("data-sub");
  if (sub) subState[tab] = sub;
  showTab(tab);
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === LANG));
  document.documentElement.lang = LANG;
  render();
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  showTab(localStorage.getItem("tab") || "inicio");
  const lb = $("#lightbox");
  if (lb) lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-lb-close]") || !e.target.closest(".lb-inner")) closeGallery();
  });
});
