/* Pavel Šoral · Portfolio
   A small single-page app with no dependencies and no build step.
   Content lives in content/content.js (window.PORTFOLIO). */
(() => {
  "use strict";

  const DATA = window.PORTFOLIO;
  const CFG = DATA.config;
  const ICONS = "assets/icons.svg";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  // ---------------------------------------------------------------- state
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
  };
  const LANGS = ["en", "sk"];
  const urlLang = new URLSearchParams(location.search).get("lang");
  let lang = LANGS.includes(urlLang) ? urlLang
    : LANGS.includes(store.get("lang")) ? store.get("lang")
    : (navigator.language || "").toLowerCase().startsWith("sk") ? "sk" : CFG.defaultLanguage || "en";
  let theme = store.get("theme") || CFG.defaultTheme || "dark";

  // flatten pages, remember their section
  const PAGES = [];
  DATA.sections.forEach((s) => s.pages.forEach((p) => PAGES.push(Object.assign({ section: s }, p))));
  const byId = new Map(PAGES.map((p) => [p.id, p]));

  // ---------------------------------------------------------------- helpers
  const t = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] != null ? v[lang] : v.en);
  const ui = (k) => t(DATA.ui[k]);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const T = (v) => esc(t(v));
  const icon = (name, cls = "") => `<svg class="icon ${cls}" aria-hidden="true" focusable="false"><use href="${ICONS}#i-${name}"></use></svg>`;
  const $ = (sel, root = document) => root.querySelector(sel);

  function driveEmbed(url) {
    if (!url) return null;
    let m = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
    if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;
    m = url.match(/drive\.google\.com\/drive\/folders\/([^/?#]+)/);
    if (m) return `https://drive.google.com/embeddedfolderview?id=${m[1]}#grid`;
    return null;
  }
  const resolveLink = (c) => (c ? c.url || (c.link ? CFG.links[c.link] : null) || null : null);

  /** Attributes for any outbound link. Google Drive files and folders open in the built-in viewer. */
  function linkAttrs(url, title) {
    const emb = driveEmbed(url);
    let a = `href="${esc(url)}" target="_blank" rel="noopener"`;
    if (emb) a += ` data-viewer="${esc(emb)}" data-viewer-title="${esc(title || "")}"`;
    return a;
  }

  function imgTag(im, extra = "") {
    if (!im) return "";
    return `<img src="${esc(im.src)}" width="${im.w}" height="${im.h}" alt="${esc(im.alt || "")}" loading="lazy" decoding="async" ${extra}>`;
  }

  function ctaButton(c) {
    const url = resolveLink(c);
    if (!url) return "";
    return `<a class="button suggested" ${linkAttrs(url, t(c.label))}>${icon("cursor", "cursor-icon")}<span>${T(c.label)}</span></a>`;
  }

  // ---------------------------------------------------------------- block renderers
  const R = {};

  R.stats = (b) => `
    <div class="stats cols-${b.cols || 3}${b.size === "hero" ? " stats-hero" : ""}${b.compact ? " compact" : ""}">
      ${b.items.map((s) => `
        <div class="stat card${s.wide ? " wide" : ""}">
          <div class="stat-value" data-count>${T(s.value)}</div>
          <div class="stat-label">${T(s.label)}</div>
          ${s.sub ? `<div class="stat-sub">${T(s.sub)}</div>` : ""}
        </div>`).join("")}
    </div>`;

  const rowHTML = (r) => `
    <li class="row">
      ${r.icon ? icon(r.icon) : ""}
      <span class="row-text"><span class="row-title">${T(r.title)}</span>${r.sub ? `<span class="row-sub">${T(r.sub)}</span>` : ""}</span>
      ${r.suffix ? `<span class="row-suffix">${T(r.suffix)}</span>` : ""}
    </li>`;

  R.rows = (b) => `
    <div class="group">
      ${b.title ? `<h2 class="group-title">${T(b.title)}</h2>` : ""}
      <ul class="boxed-list">${b.items.map(rowHTML).join("")}</ul>
      ${b.foot ? `<p class="group-foot">${T(b.foot)}</p>` : ""}
    </div>`;

  R.steps = (b) => `<div class="steps">${b.items.map((r) => `<ul class="boxed-list">${rowHTML(r)}</ul>`).join("")}</div>`;

  R.note = (b) => `<p class="note">${T(b.text)}</p>`;

  R.banner = (b) => `<div class="banner">${icon(b.icon || "star")}<p>${T(b.text)}</p></div>`;

  R.cards = (b) => `
    <div class="cards cols-${b.cols || 3}">
      ${b.items.map((c) => {
        const fit = c.fit || b.fit;
        const url = c.url || (c.link ? CFG.links[c.link] : null);
        const thumb = `<div class="thumb${fit === "contain" ? (b.fit === "contain" ? " soft contain" : " contain") : ""}${b.play ? " has-play" : ""}" style="--ar:${b.aspect || "16 / 9"}">${imgTag(c.img)}${b.play ? `<span class="play-badge" aria-hidden="true">${icon("play")}</span>` : ""}</div>`;
        const body = `<div class="body"><span class="title">${T(c.title)}</span>${c.caption ? `<span class="caption">${url ? icon(b.play ? "play" : "cursor", "cursor-icon") : ""}${T(c.caption)}</span>` : ""}</div>`;
        return url ? `<a class="media-card card" ${linkAttrs(url, t(c.title))}>${thumb}${body}</a>`
                     : `<div class="media-card card">${thumb}${body}</div>`;
      }).join("")}
    </div>`;

  R.covers = (b) => `
    <div class="covers cols-${b.cols || 4}" style="--ar:${b.aspect || 0.7}">
      ${b.items.map((c) => c.url
        ? `<a class="cover" ${linkAttrs(c.url, t(c.title) || (c.img && c.img.alt))} title="${esc(c.title || "")}">${imgTag(c.img)}</a>`
        : `<div class="cover">${imgTag(c.img)}</div>`).join("")}
    </div>`;

  const paperStack = (front, back) => `
    <div class="paper-stack">
      ${back ? `<div class="paper back">${imgTag(back)}</div>` : ""}
      <div class="paper">${imgTag(front)}</div>
    </div>`;

  R.stacks = (b) => `
    <div class="stacks">
      ${b.items.map((s) => `
        <div class="stack-item">
          ${paperStack(s.front, s.back)}
          <div><div class="stack-title">${T(s.title)}</div><div class="stack-caption">${T(s.caption)}</div></div>
        </div>`).join("")}
    </div>`;

  R.image = (b) => `
    <figure class="figure">
      <div class="frame${b.paper ? " paper-frame" : ""}">${imgTag(b.img)}</div>
      ${b.title || b.caption ? `<figcaption class="figure-head">${b.title ? `<span class="stack-title">${T(b.title)}</span>` : ""}${b.caption ? `<span class="figure-caption">${T(b.caption)}</span>` : ""}</figcaption>` : ""}
    </figure>`;

  R.tiles = (b) => `
    <div class="group">
      ${b.title ? `<h2 class="group-title">${T(b.title)}</h2>` : ""}
      <div class="tiles">${b.items.map((x) => `<div class="tile card"><span class="tile-icon">${icon(x.icon)}</span><span class="tile-label">${T(x.label)}</span></div>`).join("")}</div>
    </div>`;

  R.phones = (b) => `
    <div class="phones">
      <div class="photo">${imgTag(b.photo)}</div>
      <div class="phone-row">
        ${b.items.map((p) => `<div class="phone"><div class="phone-frame">${imgTag(p.img)}</div><div><div class="phone-title">${T(p.title)}</div><div class="phone-caption">${T(p.caption)}</div></div></div>`).join("")}
      </div>
    </div>`;

  R.launches = (b) => `
    <div class="launches">
      ${b.items.map((l) => `
        <div class="launch card">
          ${paperStack(l.img)}
          <div>
            <h2>${T(l.title)}</h2>
            <p class="note">${T(l.note)}</p>
            <ul class="launch-stats">
              ${l.stats.map((s) => `<li><span class="stat-value" data-count>${T(s.value)}</span><span>${T(s.label)}</span></li>`).join("")}
            </ul>
          </div>
        </div>`).join("")}
    </div>`;

  R.columns = (b) => `<div class="steps">${b.items.map(block).join("")}</div>`;

  const MONTHS = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    sk: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
  };
  const fmtNum = (n) => (lang === "sk" ? String(n).replace(".", ",") : String(n));

  R.barchart = (b) => {
    const n = b.values.length;
    const months = b.values.map((_, i) => {
      const m = (b.start.month - 1 + i) % 12;
      return { m, y: b.start.year + Math.floor((b.start.month - 1 + i) / 12) };
    });
    const latestYear = months[n - 1].y;
    const years = [];
    months.forEach((mm, i) => {
      const last = years[years.length - 1];
      if (last && last.y === mm.y) last.span++; else years.push({ y: mm.y, start: i, span: 1 });
    });
    const label = (i) => `${MONTHS[lang][months[i].m]} ${months[i].y}: ${b.values[i]}`;
    return `
      <div class="chart" data-chart>
        <div class="chart-head"><h2 class="chart-title">${T(b.title)}</h2><p class="chart-sub">${T(b.sub)}</p></div>
        <div class="bar-chart" style="--cols:${n}">
          <div class="y-axis" aria-hidden="true">${b.ticks.map((v) => `<span style="bottom:${(v / b.max) * 100}%">${v}</span>`).join("")}</div>
          <div class="plot">
            ${b.ticks.map((v) => `<div class="gridline" style="bottom:${(v / b.max) * 100}%"></div>`).join("")}
            <div class="baseline"></div>
            <div class="bars">
              ${b.values.map((v, i) => {
                const past = months[i].y !== latestYear;
                const h = `${(v / b.max) * 100}%`;
                return `<div class="bar-slot" tabindex="0" role="img" aria-label="${esc(label(i))}" data-tip="${esc(label(i))}" style="--h:${h};--i:${i}">
                  <div class="bar${past ? " past" : ""}"></div>
                  ${b.labels.includes(i) ? `<span class="bar-value${past ? " past" : ""}" aria-hidden="true">${v}</span>` : ""}
                </div>`;
              }).join("")}
            </div>
          </div>
          <div class="x-axis" aria-hidden="true">${months.map((mm) => `<span>${MONTHS.en[mm.m][0]}</span>`).join("")}</div>
          <div class="years" aria-hidden="true">${years.map((y) => `<span class="${y.y === latestYear ? "current" : ""}" style="grid-column:${y.start + 1} / span ${y.span}">${y.y}</span>`).join("")}</div>
        </div>
        <table class="sr-only"><caption>${T(b.title)}</caption><tbody>${b.values.map((v, i) => `<tr><th>${MONTHS[lang][months[i].m]} ${months[i].y}</th><td>${v}</td></tr>`).join("")}</tbody></table>
      </div>`;
  };

  R.hbars = (b) => `
    <div class="chart" data-chart>
      <div class="chart-head"><h2 class="chart-title">${T(b.title)}</h2><p class="chart-sub">${T(b.sub)}</p></div>
      <ul class="hbars">
        ${b.items.map((x, i) => `
          <li class="hbar" style="--w:${(x.value / b.max) * 100}%;--i:${i}">
            <span class="hbar-label">${T(x.label)}</span>
            <span class="hbar-track" aria-hidden="true"><span class="hbar-fill" style="display:block"></span></span>
            <span class="hbar-value">${T(x.display)}</span>
            ${x.note ? `<span class="hbar-note">${T(x.note)}</span>` : ""}
          </li>`).join("")}
      </ul>
    </div>`;

  function block(b) {
    const fn = R[b.type];
    return fn ? fn(b) : "";
  }

  // ---------------------------------------------------------------- block renderers (one portfolio slide = one block)
  function headHTML(p) {
    return `
      <div class="page-head">
        <h2 class="block-title">${T(p.title)}</h2>
        ${p.subtitle ? `<p class="subtitle">${T(p.subtitle)}</p>` : ""}
        ${p.intro ? `<p class="intro">${T(p.intro)}</p>` : ""}
        ${p.chips ? `<div class="chips">${p.chips.map((c) => `<span class="chip">${T(c)}</span>`).join("")}</div>` : ""}
      </div>`;
  }

  function renderHero(p) {
    return `
      <div class="hero">
        <div class="avatar">${imgTag(p.avatar, 'loading="eager" fetchpriority="high"')}</div>
        <div><h1 tabindex="-1">${T(p.title)}</h1></div>
        <p class="role">${T(p.role)}</p>
        <p class="intro">${T(p.intro)}</p>
        <div class="actions">
          ${p.actions.map((a) => `<a class="button ${a.kind === "suggested" ? "suggested" : ""}" href="#${a.goto}">${a.icon ? icon(a.icon) : ""}<span>${T(a.label)}</span></a>`).join("")}
        </div>
      </div>`;
  }

  function renderContact(p) {
    const rows = [];
    rows.push(`<li class="row">${icon("mail")}<span class="row-text"><span class="row-title">${esc(ui("email"))}</span>
      <a class="row-sub" href="mailto:${esc(CFG.email)}">${esc(CFG.email)}</a></span>
      <button class="copy-button" type="button" data-copy="${esc(CFG.email)}">${icon("copy")}<span>${esc(ui("copy"))}</span></button></li>`);
    if (CFG.phone) rows.push(`<li class="row">${icon("phone")}<span class="row-text"><span class="row-title">${esc(ui("phone"))}</span>
      <a class="row-sub" href="tel:${esc(CFG.phone.replace(/\s/g, ""))}">${esc(CFG.phone)}</a></span></li>`);
    if (CFG.linkedin) rows.push(`<li class="row"><a class="row-link" href="${esc(CFG.linkedin)}" target="_blank" rel="noopener">${icon("person")}<span class="row-text"><span class="row-title">LinkedIn</span><span class="row-sub">${esc(CFG.name)}</span></span>${icon("cursor", "cursor-icon")}</a></li>`);
    rows.push(`<li class="row">${icon("location")}<span class="row-text"><span class="row-title">${esc(ui("location"))}</span><span class="row-sub">${T(CFG.location)}</span></span></li>`);
    return `
      <div class="contact-card">
        <div class="contact-intro">
          <div class="avatar avatar-sm">${imgTag(p.avatar)}</div>
          <div>
            <h2 class="block-title">${T(p.title)}</h2>
            <p class="intro">${T(p.intro)}</p>
          </div>
        </div>
        <ul class="boxed-list contact-list">${rows.join("")}</ul>
      </div>`;
  }

  function renderGeneric(p) {
    if (p.layout === "split") {
      return `
        <div class="layout-split${p.flip ? " flip" : ""}">
          <div class="col-aside">
            ${headHTML(p)}
            ${(p.aside || []).map(block).join("")}
            ${resolveLink(p.cta) ? `<div>${ctaButton(p.cta)}</div>` : ""}
          </div>
          <div class="col-main">${(p.main || []).map(block).join("")}</div>
        </div>`;
    }
    return `
      <div class="head-row">${headHTML(p)}${resolveLink(p.cta) ? ctaButton(p.cta) : ""}</div>
      <div class="stack-body">${(p.main || []).map(block).join("")}</div>`;
  }

  const renderBlock = (p) => (p.type === "hero" ? renderHero(p) : renderGeneric(p));

  // ---------------------------------------------------------------- sections (one menu item = one scrollable page)
  const CONTACT = DATA.sections.find((s) => s.id === "contact");
  const CONTACT_PAGE = CONTACT ? CONTACT.pages[0] : null;
  const SECTIONS = DATA.sections.filter((s) => s !== CONTACT);
  const sectionById = new Map(SECTIONS.map((s) => [s.id, s]));
  const blockId = (id) => `b-${id}`;

  function subnavHTML(sec) {
    if (sec.pages.length < 2 || sec.pages[0].type === "hero") return "";
    return `
      <nav class="subnav" aria-label="${esc(ui("pagesIn"))}">
        <div class="wrap"><ul>${sec.pages.map((q) => `<li><a href="#${q.id}" data-spy="${q.id}">${T(q.nav || q.title)}</a></li>`).join("")}</ul></div>
      </nav>`;
  }

  function pagerHTML(sec) {
    const i = SECTIONS.indexOf(sec);
    const prev = SECTIONS[i - 1], next = SECTIONS[i + 1];
    return `
      <nav class="pager wrap" aria-label="${esc(ui("sections"))}">
        <div class="pager-nav">
          ${prev ? `<a class="pager-link prev" href="#${prev.id}" rel="prev"><span class="pager-dir">${icon("prev")}${esc(ui("prev"))}</span><span class="pager-title">${T(prev.title)}</span></a>` : "<span></span>"}
          ${next ? `<a class="pager-link next" href="#${next.id}" rel="next"><span class="pager-dir">${esc(ui("next"))}${icon("next")}</span><span class="pager-title">${T(next.title)}</span></a>` : ""}
        </div>
      </nav>`;
  }

  function sectionHTML(sec, enter) {
    const isHome = sec.pages[0].type === "hero";
    return `
      ${isHome ? "" : `<h1 class="sr-only" tabindex="-1">${T(sec.title)}</h1>`}
      ${subnavHTML(sec)}
      <div class="blocks">
        ${sec.pages.map((p, k) => `
          <section class="block wrap${enter && k === 0 ? " enter" : ""}${p.type === "hero" ? " block-hero" : ""}" id="${blockId(p.id)}" aria-label="${esc(t(p.nav || p.title))}">
            ${renderBlock(p)}
          </section>`).join("")}
      </div>
      ${pagerHTML(sec)}
      ${CONTACT_PAGE ? `<section class="contact-band" id="${blockId("contact")}"><div class="wrap">${renderContact(CONTACT_PAGE)}</div></section>` : ""}`;
  }

  // ---------------------------------------------------------------- shell
  function shellHTML() {
    const home = SECTIONS[0];
    return `
      <a class="skip-link" href="#main" data-skip>${esc(ui("skip"))}</a>
      <header class="headerbar">
        <div class="wrap">
          <a class="brand" href="#${home.id}"><img src="${esc(byId.get("home").avatar.src)}" alt="" width="34" height="34"><span>${esc(CFG.name)}</span></a>
          <nav class="switcher" aria-label="${esc(ui("sections"))}">
            ${DATA.sections.map((s) => `<a href="#${s === CONTACT ? "contact" : s.id}" data-section="${s.id}">${T(s.title)}</a>`).join("")}
          </nav>
          <div class="header-end">
            <div class="lang-toggle" role="group" aria-label="${esc(ui("language"))}">
              ${LANGS.map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("")}
            </div>
            <button class="icon-button" type="button" data-theme-toggle></button>
            <button class="icon-button menu-button" type="button" data-menu aria-expanded="false" aria-controls="sheet" aria-label="${esc(ui("menu"))}">${icon("menu", "icon-lg")}</button>
          </div>
        </div>
      </header>
      <div class="sheet-scrim" hidden data-sheet-close></div>
      <aside class="sheet" id="sheet" hidden aria-label="${esc(ui("sections"))}">
        <div class="sheet-head"><h2>${esc(ui("sections"))}</h2><button class="icon-button" type="button" data-sheet-close aria-label="${esc(ui("close"))}">${icon("close", "icon-lg")}</button></div>
        <nav>
          ${SECTIONS.map((s) => `<div><h3><a href="#${s.id}" data-sheet-section="${s.id}">${T(s.title)}</a></h3><ul>${s.pages.map((q) => `<li><a href="#${q.id}" data-page-link="${q.id}">${T(q.nav || q.title)}</a></li>`).join("")}</ul></div>`).join("")}
          ${CONTACT ? `<div><h3><a href="#contact" data-page-link="contact">${T(CONTACT.title)}</a></h3></div>` : ""}
        </nav>
      </aside>
      <main id="main" tabindex="-1"></main>
      <footer class="footer">
        <div class="wrap">
          <span>© ${new Date().getFullYear()} ${esc(CFG.name)} · ${esc(ui("credit"))}</span>
          ${CFG.repo ? `<a href="${esc(CFG.repo)}" target="_blank" rel="noopener">${icon("github")}${esc(ui("source"))}</a>` : ""}
        </div>
      </footer>
      <dialog class="viewer" id="viewer" aria-label="${esc(ui("viewer"))}">
        <div class="viewer-bar">
          <span class="viewer-title"></span>
          <a class="button" target="_blank" rel="noopener" data-viewer-open>${icon("external")}<span>${esc(ui("openTab"))}</span></a>
          <button class="icon-button" type="button" data-viewer-close aria-label="${esc(ui("close"))}">${icon("close", "icon-lg")}</button>
        </div>
        <iframe title="${esc(ui("viewer"))}" allow="autoplay"></iframe>
        <p class="viewer-note">${esc(ui("viewerNote"))}</p>
      </dialog>
      <div class="tooltip" role="tooltip" hidden></div>`;
  }

  // ---------------------------------------------------------------- routing & render
  let current = null;   // current section

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = $("[data-theme-toggle]");
    if (btn) {
      const toLight = theme === "dark";
      btn.innerHTML = icon(toLight ? "sun" : "moon", "icon-lg");
      btn.setAttribute("aria-label", ui(toLight ? "theme" : "themeDark"));
      btn.title = ui(toLight ? "theme" : "themeDark");
    }
  }

  /** #section → that page from the top; #block → its section, scrolled to the block; #contact → contact block here. */
  function resolveHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (sectionById.has(id)) return { sec: sectionById.get(id), target: null };
    if (id === "contact") return { sec: current || SECTIONS[0], target: "contact" };
    const p = byId.get(id);
    if (p && p.section !== CONTACT) return { sec: p.section, target: p.type === "hero" ? null : id };
    return { sec: SECTIONS[0], target: null };
  }

  const scrollBehavior = () => (REDUCED.matches ? "auto" : "smooth");

  function scrollToBlock(id, smooth) {
    const el = document.getElementById(blockId(id));
    if (!el) return;
    el.scrollIntoView({ behavior: smooth ? scrollBehavior() : "auto", block: "start" });
    const h = $(".block-title", el) || el;
    h.setAttribute("tabindex", "-1");
    h.focus({ preventScroll: true });
  }

  function render(fromNav, keepScroll) {
    const { sec, target } = resolveHash();
    const changed = current !== sec;
    current = sec;
    document.documentElement.lang = lang;
    document.title = sec === SECTIONS[0] ? `${CFG.name} · Portfolio` : `${t(sec.title)} · ${CFG.name}`;

    document.querySelectorAll(".switcher a").forEach((a) => {
      const on = target === "contact" ? a.dataset.section === "contact" : a.dataset.section === sec.id;
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.querySelectorAll("[data-sheet-section]").forEach((a) => {
      if (a.dataset.sheetSection === sec.id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });

    const main = $("#main");
    if (changed) {
      main.innerHTML = sectionHTML(sec, true);
      animateIn(main);
      spy(main);
    }
    if (keepScroll) return;
    if (target) {
      requestAnimationFrame(() => scrollToBlock(target, !changed));
    } else if (changed || fromNav) {
      window.scrollTo({ top: 0, behavior: changed ? "auto" : scrollBehavior() });
      if (fromNav) { const h1 = $("h1", main); if (h1) h1.focus({ preventScroll: true }); }
    }
  }

  // scrollspy: highlight the subnav chip of the block in view
  let spyObs = null;
  function spy(root) {
    if (spyObs) spyObs.disconnect();
    const links = new Map([...root.querySelectorAll("[data-spy]")].map((a) => [a.dataset.spy, a]));
    if (!links.size || !("IntersectionObserver" in window)) return;
    const visible = new Map();
    spyObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => visible.set(en.target.id.slice(2), en.isIntersecting ? en.intersectionRatio : 0));
      let best = null, ratio = 0;
      links.forEach((_, id) => { const r = visible.get(id) || 0; if (r > ratio) { ratio = r; best = id; } });
      if (!best) return;
      links.forEach((a, id) => { if (id === best) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      const a = links.get(best);
      const ul = a.closest("ul");
      if (ul) ul.scrollTo({ left: a.offsetLeft - ul.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
    }, { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
    links.forEach((_, id) => { const el = document.getElementById(blockId(id)); if (el) spyObs.observe(el); });
  }

  // ---------------------------------------------------------------- animation
  function parseNumber(str) {
    const all = str.match(/\d[\d\s .,]*\d|\d/g);
    if (!all || all.length !== 1) return null;
    const tok = all[0].replace(/[\s .,]+$/, "");
    const lastSep = Math.max(tok.lastIndexOf("."), tok.lastIndexOf(","));
    let decimals = 0, decChar = ".", group = "";
    if (lastSep > -1) {
      const after = tok.length - lastSep - 1;
      if (after === 3 && /^\d{1,3}([.,\s ]\d{3})+$/.test(tok)) group = tok.match(/[.,\s ]/)[0];
      else { decimals = after; decChar = tok[lastSep]; }
    }
    const spaceGroup = tok.match(/\d[\s ]\d{3}/);
    if (!group && spaceGroup) group = tok.match(/[\s ]/)[0];
    const value = parseFloat(tok.replace(/[\s ]/g, "").replace(group === "," || group === "." ? new RegExp("\\" + group, "g") : /$^/, "").replace(",", "."));
    if (!isFinite(value)) return null;
    return {
      value, decimals,
      format(n) {
        let s = n.toFixed(decimals);
        let [int, frac] = s.split(".");
        if (group) int = int.replace(/\B(?=(\d{3})+(?!\d))/g, group);
        s = frac ? int + decChar + frac : int;
        return str.replace(all[0].replace(/[\s .,]+$/, ""), s);
      },
    };
  }

  function countUp(el) {
    const final = el.textContent;
    const p = parseNumber(final);
    if (!p || p.value === 0) return;
    const dur = 900, t0 = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      el.textContent = k < 1 ? p.format(p.value * e) : final;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  let observer = null;
  function animateIn(root) {
    if (REDUCED.matches || !("IntersectionObserver" in window)) return;
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        observer.unobserve(en.target);
        if (en.target.hasAttribute("data-count")) countUp(en.target);
        else en.target.classList.add("is-animating");
      });
    }, { threshold: 0.25 });
    root.querySelectorAll("[data-count], [data-chart]").forEach((el) => observer.observe(el));
  }

  // ---------------------------------------------------------------- interactions
  function openSheet(open) {
    const sheet = $("#sheet"), scrim = $(".sheet-scrim"), btn = $("[data-menu]");
    sheet.hidden = !open; scrim.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    if (open) { const a = $("a[aria-current]", sheet) || $("a", sheet); if (a) a.focus(); }
  }

  function openViewer(src, href, title) {
    const dlg = $("#viewer");
    $(".viewer-title", dlg).textContent = title || ui("viewer");
    $("[data-viewer-open]", dlg).href = href;
    $("iframe", dlg).src = src;
    if (typeof dlg.showModal === "function") dlg.showModal(); else window.open(href, "_blank", "noopener");
  }

  function bind() {
    document.addEventListener("click", (e) => {
      const lb = e.target.closest("[data-lang]");
      if (lb) {
        lang = lb.dataset.lang; store.set("lang", lang);
        boot(false);
        return;
      }
      if (e.target.closest("[data-theme-toggle]")) {
        theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); applyTheme();
        return;
      }
      if (e.target.closest("[data-menu]")) { openSheet(true); return; }
      if (e.target.closest("[data-sheet-close]")) { openSheet(false); return; }
      if (e.target.closest("[data-page-link], [data-sheet-section]") && !$("#sheet").hidden) { openSheet(false); }
      // clicking a link to where we already are still scrolls there
      const same = e.target.closest('a[href^="#"]');
      if (same && same.getAttribute("href") === location.hash && !same.hasAttribute("data-skip")) { e.preventDefault(); render(true); return; }
      if (e.target.closest("[data-skip]")) { e.preventDefault(); $("#main").focus(); return; }

      const v = e.target.closest("[data-viewer]");
      if (v && !(e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) {
        e.preventDefault();
        openViewer(v.dataset.viewer, v.getAttribute("href"), v.dataset.viewerTitle);
        return;
      }
      if (e.target.closest("[data-viewer-close]")) { $("#viewer").close(); return; }

      const cp = e.target.closest("[data-copy]");
      if (cp) {
        const label = $("span", cp);
        const done = () => { label.textContent = ui("copied"); setTimeout(() => { label.textContent = ui("copy"); }, 1600); };
        const fallback = () => {
          const sel = window.getSelection(), r = document.createRange();
          const target = cp.parentElement.querySelector(".row-sub");
          r.selectNodeContents(target); sel.removeAllRanges(); sel.addRange(r);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(cp.dataset.copy).then(done, fallback);
        else fallback();
      }
    });


    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#sheet").hidden) { openSheet(false); return; }
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      if ($("#viewer").open || !$("#sheet").hidden) return;
      if (e.target.closest("input, textarea, select, [contenteditable]")) return;
      const i = SECTIONS.indexOf(current);
      if (e.key === "ArrowRight" && SECTIONS[i + 1]) location.hash = SECTIONS[i + 1].id;
      if (e.key === "ArrowLeft" && SECTIONS[i - 1]) location.hash = SECTIONS[i - 1].id;
    });

    // chart tooltip
    const tip = $(".tooltip");
    const show = (el) => {
      const r = el.getBoundingClientRect();
      const bar = el.querySelector(".bar");
      const top = bar ? bar.getBoundingClientRect().top : r.top;
      tip.textContent = el.dataset.tip; tip.hidden = false;
      tip.style.left = `${Math.min(window.innerWidth - 80, Math.max(80, r.left + r.width / 2))}px`;
      tip.style.top = `${top}px`;
    };
    const hide = () => { tip.hidden = true; };
    document.addEventListener("pointerover", (e) => { const s = e.target.closest("[data-tip]"); if (s) show(s); });
    document.addEventListener("pointerout", (e) => { if (e.target.closest("[data-tip]")) hide(); });
    document.addEventListener("focusin", (e) => { const s = e.target.closest("[data-tip]"); if (s) show(s); else hide(); });
    window.addEventListener("scroll", hide, { passive: true });

    window.addEventListener("hashchange", () => render(true));
  }

  function bindShell() {
    const dlg = $("#viewer");
    dlg.addEventListener("close", () => { $("iframe", dlg).src = "about:blank"; });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }

  function boot(first) {
    const y = window.scrollY;
    document.getElementById("app").innerHTML = shellHTML();
    bindShell();
    applyTheme();
    current = null;
    render(false, !first);
    if (!first) window.scrollTo(0, y);
    if (first) bind();
  }

  applyTheme();
  boot(true);
})();
