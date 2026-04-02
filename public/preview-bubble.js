(function () {
  "use strict";

  /* ─── Constants ─── */
  var WHATSAPP_URL = "https://wa.me/358466109064";
  var EMAIL_URL = "mailto:yassin@elfennir.com";
  var BRAND_URL = "https://elfennir.com";
  var PRIMARY = "#ff6b00";
  var SECONDARY = "#ff8c00";
  var DARK = "#1a1a2e";
  var DARK_ALT = "#16213e";

  var FLAGS = { en: "\u{1F1EC}\u{1F1E7}", fi: "\u{1F1EB}\u{1F1EE}", sv: "\u{1F1F8}\u{1F1EA}", es: "\u{1F1EA}\u{1F1F8}", de: "\u{1F1E9}\u{1F1EA}", fr: "\u{1F1EB}\u{1F1F7}" };

  var TRANSLATIONS = {
    en: {
      message: "\u{1F44B} This is a preview! Like what you see? Say YES and I'll build your complete website with all your business details. I work with you until you're 100% satisfied!",
      whatsapp: "WhatsApp",
      email: "Email",
      powered: "Powered by El Fennir AI Agency"
    },
    fi: {
      message: "\u{1F44B} T\u00e4m\u00e4 on esikatselu! Pid\u00e4tk\u00f6 n\u00e4kem\u00e4st\u00e4si? Sano KYLL\u00c4 ja rakennan sinulle t\u00e4ydellisen verkkosivuston kaikilla yrityksesi tiedoilla. Teen t\u00f6it\u00e4 kunnes olet 100% tyytyv\u00e4inen!",
      whatsapp: "WhatsApp",
      email: "S\u00e4hk\u00f6posti",
      powered: "Powered by El Fennir AI Agency"
    },
    sv: {
      message: "\u{1F44B} Detta \u00e4r en f\u00f6rhandsvisning! Gillar du vad du ser? S\u00e4g JA och jag bygger din kompletta webbplats med alla dina f\u00f6retagsdetaljer. Jag arbetar tills du \u00e4r 100% n\u00f6jd!",
      whatsapp: "WhatsApp",
      email: "E-post",
      powered: "Powered by El Fennir AI Agency"
    },
    es: {
      message: "\u{1F44B} \u00a1Esta es una vista previa! \u00bfTe gusta lo que ves? Di S\u00cd y construir\u00e9 tu sitio web completo con todos los detalles de tu empresa. \u00a1Trabajo contigo hasta que est\u00e9s 100% satisfecho!",
      whatsapp: "WhatsApp",
      email: "Correo",
      powered: "Powered by El Fennir AI Agency"
    },
    de: {
      message: "\u{1F44B} Dies ist eine Vorschau! Gef\u00e4llt dir was du siehst? Sag JA und ich erstelle deine komplette Website mit allen Gesch\u00e4ftsdetails. Ich arbeite bis du 100% zufrieden bist!",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      powered: "Powered by El Fennir AI Agency"
    },
    fr: {
      message: "\u{1F44B} Ceci est un aper\u00e7u ! Vous aimez ce que vous voyez ? Dites OUI et je construirai votre site web complet avec tous les d\u00e9tails de votre entreprise. Je travaille jusqu'\u00e0 ce que vous soyez 100% satisfait !",
      whatsapp: "WhatsApp",
      email: "E-mail",
      powered: "Powered by El Fennir AI Agency"
    }
  };

  var LANGS = ["en", "fi", "sv", "es", "de", "fr"];

  /* ─── State ─── */
  var currentLang = "en";
  var isExpanded = true;

  /* ─── Inject Styles ─── */
  var style = document.createElement("style");
  style.textContent = [
    "@keyframes efPulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.5);opacity:0}}",
    "@keyframes efDot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}",
    "@keyframes efFadeIn{from{opacity:0;transform:scale(.8) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}",
    "@keyframes efFadeOut{from{opacity:1;transform:scale(1) translateY(0)}to{opacity:0;transform:scale(.8) translateY(20px)}}",
    "@keyframes efBubbleIn{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}",
    "#ef-preview-wrap{position:fixed;bottom:24px;right:24px;z-index:99999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}",
    "#ef-preview-wrap *{box-sizing:border-box;margin:0;padding:0}",
    "#ef-preview-panel{width:360px;max-width:calc(100vw - 48px);border-radius:16px;overflow:hidden;",
    "  background:linear-gradient(135deg," + DARK + "ee," + DARK_ALT + "ee);",
    "  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);",
    "  border:1px solid " + PRIMARY + "40;",
    "  box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 40px " + PRIMARY + "15;",
    "  animation:efFadeIn .35s ease-out}",
    "#ef-preview-panel.ef-closing{animation:efFadeOut .25s ease-in forwards}",
    ".ef-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;",
    "  background:linear-gradient(90deg," + PRIMARY + "," + SECONDARY + ")}",
    ".ef-header-left{display:flex;align-items:center;gap:8px}",
    ".ef-dot{width:10px;height:10px;border-radius:50%;background:#4ade80;animation:efDot 2s infinite}",
    ".ef-header-title{color:#fff;font-weight:600;font-size:14px;letter-spacing:.3px}",
    ".ef-close-btn{background:none;border:none;color:rgba(255,255,255,.8);cursor:pointer;padding:4px;border-radius:50%;transition:all .2s;display:flex;align-items:center;justify-content:center}",
    ".ef-close-btn:hover{color:#fff;background:rgba(255,255,255,.1)}",
    ".ef-langs{display:flex;align-items:center;gap:4px;padding:12px 16px 4px}",
    ".ef-lang-btn{padding:3px 6px;border-radius:4px;font-size:11px;border:none;cursor:pointer;transition:all .2s;background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);font-weight:400}",
    ".ef-lang-btn.active{background:" + PRIMARY + ";color:#fff;font-weight:600}",
    ".ef-message{padding:12px 16px;color:rgba(255,255,255,.92);font-size:14px;line-height:1.6;transition:opacity .2s}",
    ".ef-actions{display:flex;gap:8px;padding:0 16px 12px}",
    ".ef-action-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;text-decoration:none;transition:all .2s;border:none;cursor:pointer}",
    ".ef-action-btn:hover{filter:brightness(1.1);transform:scale(1.02)}",
    ".ef-action-btn:active{transform:scale(.98)}",
    ".ef-wa{background:#25D366}",
    ".ef-em{background:linear-gradient(135deg," + PRIMARY + "," + SECONDARY + ")}",
    ".ef-footer{padding:8px 16px;text-align:center;border-top:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.2)}",
    ".ef-footer a{color:rgba(255,255,255,.35);font-size:11px;text-decoration:none;transition:color .2s}",
    ".ef-footer a:hover{color:" + PRIMARY + "}",
    "#ef-mini-btn{width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;position:relative;",
    "  background:linear-gradient(135deg," + PRIMARY + "," + SECONDARY + ");",
    "  box-shadow:0 4px 20px " + PRIMARY + "60;",
    "  animation:efBubbleIn .35s ease-out;transition:transform .2s}",
    "#ef-mini-btn:hover{transform:scale(1.1)}",
    "#ef-mini-btn:active{transform:scale(.9)}",
    ".ef-pulse-ring{position:absolute;inset:0;border-radius:50%;border:2px solid " + PRIMARY + ";animation:efPulse 1.5s ease-out infinite;pointer-events:none}"
  ].join("\n");
  document.head.appendChild(style);

  /* ─── SVGs ─── */
  var SVG_WA = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var SVG_EMAIL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>';
  var SVG_CLOSE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var SVG_CHAT = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';

  /* ─── Build DOM ─── */
  var wrap = document.createElement("div");
  wrap.id = "ef-preview-wrap";
  document.body.appendChild(wrap);

  function getTranslation() {
    return TRANSLATIONS[currentLang];
  }

  function buildLangButtons() {
    var html = "";
    for (var i = 0; i < LANGS.length; i++) {
      var l = LANGS[i];
      var cls = l === currentLang ? "ef-lang-btn active" : "ef-lang-btn";
      html += '<button class="' + cls + '" data-lang="' + l + '">' + FLAGS[l] + " " + l.toUpperCase() + "</button>";
    }
    return html;
  }

  function renderExpanded() {
    var t = getTranslation();
    wrap.innerHTML =
      '<div id="ef-preview-panel">' +
        '<div class="ef-header">' +
          '<div class="ef-header-left">' +
            '<div class="ef-dot"></div>' +
            '<span class="ef-header-title">El Fennir</span>' +
          "</div>" +
          '<button class="ef-close-btn" id="ef-close" aria-label="Close">' + SVG_CLOSE + "</button>" +
        "</div>" +
        '<div class="ef-langs">' + buildLangButtons() + "</div>" +
        '<div class="ef-message">' + t.message + "</div>" +
        '<div class="ef-actions">' +
          '<a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener noreferrer" class="ef-action-btn ef-wa">' + SVG_WA + " " + t.whatsapp + "</a>" +
          '<a href="' + EMAIL_URL + '" class="ef-action-btn ef-em">' + SVG_EMAIL + " " + t.email + "</a>" +
        "</div>" +
        '<div class="ef-footer"><a href="' + BRAND_URL + '" target="_blank" rel="noopener noreferrer">' + t.powered + " &middot; elfennir.com</a></div>" +
      "</div>";

    document.getElementById("ef-close").addEventListener("click", function () {
      var panel = document.getElementById("ef-preview-panel");
      panel.classList.add("ef-closing");
      setTimeout(function () {
        isExpanded = false;
        renderMinimized();
      }, 250);
    });

    var langBtns = wrap.querySelectorAll(".ef-lang-btn");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        currentLang = this.getAttribute("data-lang");
        renderExpanded();
      });
    }
  }

  function renderMinimized() {
    wrap.innerHTML =
      '<button id="ef-mini-btn" aria-label="Open preview bubble">' +
        SVG_CHAT +
        '<div class="ef-pulse-ring"></div>' +
      "</button>";

    document.getElementById("ef-mini-btn").addEventListener("click", function () {
      isExpanded = true;
      renderExpanded();
    });
  }

  /* ─── Init ─── */
  renderExpanded();
})();
