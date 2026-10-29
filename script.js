const PHONE = "918610416199";
const ART = {
  logo:'<svg viewBox="0 0 40 46"><path d="M20 3C20 3 6 19 6 29a14 14 0 0 0 28 0C34 19 20 3 20 3Z"/><path d="M14 30c4-7 8 7 12 0" class="st"/><path d="M27 12l4-6M29 14l5-2"/></svg>',
  dress:'<svg viewBox="0 0 120 140"><path d="M45 10h10q5 14 10 0h10l5 30-10 8 20 78q-30 10-60 0l20-78-10-8z" class="fl"/><path d="M34 112q26 12 52 0" class="st"/><path d="M52 52h16"/></svg>',
  frock:'<svg viewBox="0 0 120 140"><path d="M48 14q12 16 24 0l6 20-8 6q22 32 28 78-38 14-76 0 6-46 28-78l-8-6z" class="fl"/><path d="M52 40l8 6 8-6-8-6z"/><path d="M26 108q34 12 68 0" class="st"/></svg>',
  blouse:'<svg viewBox="0 0 120 140"><path d="M30 24l18-10q12 18 24 0l18 10 12 30-18 8v44H36V62l-18-8z" class="fl"/><circle cx="60" cy="38" r="5"/><circle cx="50" cy="44" r="3"/><circle cx="70" cy="44" r="3"/><path d="M40 98h40" class="st"/></svg>',
  kurti:'<svg viewBox="0 0 120 140"><path d="M44 10h32l6 14 10 12-8 12-4 70H40l-4-70-8-12 10-12z" class="fl"/><path d="M52 10q8 16 16 0"/><path d="M60 24v90"/><circle cx="60" cy="44" r="2"/><circle cx="60" cy="62" r="2"/><path d="M40 106h40" class="st"/></svg>',
  lehenga:'<svg viewBox="0 0 120 140"><path d="M46 8h28l2 26H44z" class="fl"/><path d="M44 34h32l30 96q-46 10-92 0z" class="fl"/><path d="M60 40v84M50 40l-14 80M70 40l14 80"/><path d="M20 118q40 10 80 0" class="st"/></svg>',
  romper:'<svg viewBox="0 0 120 140"><path d="M44 12q16 14 32 0l10 22-8 8v30l8 40H64l-4-24-4 24H34l8-40V42l-8-8z" class="fl"/><circle cx="60" cy="40" r="2"/><circle cx="60" cy="54" r="2"/><path d="M40 100h14M66 100h14" class="st"/></svg>',
  spool:'<svg viewBox="0 0 120 140"><path d="M38 30h44v80H38z" class="fl"/><path d="M32 20h56v10H32zM32 110h56v10H32z"/><path d="M42 48h36M42 66h36M42 84h36" class="st"/><path d="M82 96q22 8 14 30"/><path d="M96 16l-18 80"/></svg>',
  mannequin:'<svg viewBox="0 0 300 375"><circle cx="150" cy="26" r="9"/><path d="M150 35v27"/><path d="M122 62q28 12 56 0l14 44-12 10 38 172q-80 22-160 0l38-172-12-10z" class="fl"/><path d="M96 116q54 12 108 0"/><path d="M70 272q80 22 160 0" class="st"/><circle cx="112" cy="210" r="7" class="fl"/><circle cx="170" cy="236" r="7" class="fl"/><circle cx="130" cy="256" r="5" class="fl"/><circle cx="188" cy="190" r="5" class="fl"/><path d="M150 292v66M114 360h72"/><path d="M246 30q34 46-8 90t8 92" class="st"/><path d="M246 30l8-22"/><circle cx="48" cy="318" r="12"/><circle cx="82" cy="318" r="12"/><path d="M56 308l44-74M74 308l-44-74"/></svg>',
  machine:'<svg viewBox="0 0 300 300"><path d="M36 250V140q0-26 26-26h156q30 0 30 26v110" class="fl"/><path d="M20 250h260v26H20z"/><circle cx="62" cy="190" r="22"/><circle cx="62" cy="190" r="6"/><path d="M110 114V86h34v28"/><path d="M246 140h22v44h-22z"/><path d="M257 184v52"/><path d="M127 86q70-50 130 98" class="st"/><path d="M190 250q30-26 80 0" class="fl"/></svg>',
  tools:'<svg viewBox="0 0 300 260"><circle cx="90" cy="130" r="64" class="fl"/><circle cx="90" cy="130" r="40"/><path d="M90 66v14M90 180v14M26 130h14M140 130h14" class="st"/><circle cx="90" cy="130" r="6"/><path d="M154 130h90"/><circle cx="196" cy="214" r="18"/><circle cx="246" cy="214" r="18"/><path d="M204 198L262 70M238 198L180 70"/><path d="M40 238q80-30 130-10" class="st"/></svg>',
  hoop:'<svg viewBox="0 0 120 140"><circle cx="60" cy="68" r="48"/><circle cx="60" cy="68" r="42" class="st"/><circle cx="60" cy="52" r="9" class="fl"/><circle cx="48" cy="68" r="9" class="fl"/><circle cx="72" cy="68" r="9" class="fl"/><circle cx="60" cy="84" r="9" class="fl"/><circle cx="60" cy="68" r="4"/><path d="M60 92q-4 14 8 20M60 112q-14 4-18-8" /><rect x="52" y="10" width="16" height="10" rx="3"/></svg>'
};
document.querySelectorAll("[data-art]").forEach(el => {
  el.innerHTML = ART[el.dataset.art] || "";
  el.querySelectorAll("path:not(.st),circle:not(.fl)").forEach(p => p.setAttribute("pathLength", "1"));
});

const page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === page) a.classList.add("current");
});
const menu = document.querySelector(".menu"), nav = document.querySelector("nav");
if (menu) menu.addEventListener("click", () => {
  const o = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", o);
});

const wa = document.createElement("a");
wa.className = "wa-float"; wa.target = "_blank"; wa.rel = "noopener";
wa.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent("Hi Nool Drops, I'd like to know about stitching.");
wa.textContent = "Chat on WhatsApp";
document.body.appendChild(wa);

document.querySelectorAll(".chips button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".chips button").forEach(x => x.classList.remove("on"));
  b.classList.add("on");
  document.querySelectorAll(".gallery figure").forEach(f => {
    f.hidden = b.dataset.f !== "all" && f.dataset.cat !== b.dataset.f;
  });
}));

const form = document.getElementById("enquiry");
if (form) form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const msg = `Hi Nool Drops!\nName: ${d.get("name")}\nI need: ${d.get("type")}\n${d.get("msg")}`;
  window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(msg), "_blank");
});
