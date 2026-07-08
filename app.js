/* ============================================================
   Club de la Sierra — lógica de la página (i18n + render + chart)
   ============================================================ */

// Textos de interfaz (etiquetas de secciones) en ES / EN
const UI = {
  "nav.club":      { es: "El Club", en: "The Club" },
  "nav.history":   { es: "Historia", en: "History" },
  "nav.partners":  { es: "Alianzas", en: "Partners" },
  "nav.goals":     { es: "Objetivos", en: "Goals" },
  "nav.growth":    { es: "Crecimiento", en: "Growth" },
  "nav.proposal":  { es: "Propuesta", en: "Proposal" },

  "sec.clubKicker":    { es: "Quiénes somos", en: "Who we are" },
  "sec.clubTitle":     { es: "Nuestra esencia", en: "Our essence" },

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

  // Propósito
  const purpose = $("#purpose"); purpose.innerHTML = "";
  const icons = { mission: "🎯", vision: "🔭", philosophy: "💡" };
  ["mission", "vision", "philosophy"].forEach((k) => {
    const p = DATA.purpose[k];
    purpose.appendChild(el("div", "card", `<div class="ico">${icons[k]}</div><h3>${t(p.title)}</h3><p class="muted">${t(p.text)}</p>`));
  });

  // Timeline
  const tl = $("#timeline"); tl.innerHTML = "";
  DATA.timeline.forEach((i) => {
    tl.appendChild(el("div", "tl-item", `<div class="tl-year">${i.year}</div><h3>${t(i.title)}</h3><p class="muted">${t(i.text)}</p>`));
  });

  // Torneos
  const tr = $("#tournaments"); tr.innerHTML = "";
  DATA.tournaments.forEach((x) => {
    tr.appendChild(el("div", "card", `<div class="ico">🏆</div><h3 style="font-size:18px">${t(x.name)}</h3><p class="muted">${t(x.meta)}</p>`));
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
  const eIcons = ["🤝", "🎾", "🎤"];
  DATA.events.forEach((e, i) => {
    ev.appendChild(el("div", "card", `<div class="ico">${eIcons[i % eIcons.length]}</div><h3 style="font-size:19px">${t(e.title)}</h3><p class="muted">${t(e.text)}</p>`));
  });

  // Clientes
  const cl = $("#clients"); cl.innerHTML = "";
  DATA.clients.forEach((c) => {
    const initials = c.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    cl.appendChild(el("div", "person", `<div class="av">${initials}</div><div class="nm">${c.name}</div><div class="ro">${t(c.role)}</div>`));
  });

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
    s += `<line x1="${pad.l}" y1="${gy}" x2="${W - pad.r}" y2="${gy}" stroke="#2e5a44" stroke-width="1" opacity=".4"/>`;
    s += `<text x="${pad.l - 8}" y="${gy + 4}" fill="#9fbcaa" font-size="11" text-anchor="end">${Math.round(gv)}</text>`;
  }
  // eje X (años)
  all.forEach((d) => {
    s += `<text x="${x(d.year)}" y="${H - 12}" fill="#9fbcaa" font-size="11" text-anchor="middle">${d.year}</text>`;
  });
  // línea histórica
  const histPts = history.map((d) => `${x(d.year)},${y(d.value)}`).join(" ");
  s += `<polyline points="${histPts}" fill="none" stroke="#3ea675" stroke-width="3"/>`;
  // línea proyectada (desde último histórico)
  const link = [history[history.length - 1], ...projected].map((d) => `${x(d.year)},${y(d.value)}`).join(" ");
  s += `<polyline points="${link}" fill="none" stroke="#d8b26a" stroke-width="3" stroke-dasharray="7 6"/>`;
  // puntos
  history.forEach((d) => { s += `<circle cx="${x(d.year)}" cy="${y(d.value)}" r="4.5" fill="#3ea675"/>`; });
  projected.forEach((d) => {
    s += `<circle cx="${x(d.year)}" cy="${y(d.value)}" r="4.5" fill="#d8b26a"/>`;
    s += `<text x="${x(d.year)}" y="${y(d.value) - 10}" fill="#e8cf9b" font-size="11" font-weight="700" text-anchor="middle">${d.value}</text>`;
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
});
