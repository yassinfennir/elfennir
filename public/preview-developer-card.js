(function () {
  "use strict";

  var CARD_DISMISSED_KEY = "ef-dev-card-dismissed";
  var SHOW_DELAY_MS = 5000;
  var WA_TEXT_URL = "https://wa.me/358466109064";
  var WA_VIDEO_URL = "https://wa.me/358466109064?text=Hallo%20Yassin%2C%20ich%20m%C3%B6chte%20einen%20Video-Anruf%20vereinbaren.";
  var EMAIL_URL = "mailto:yassin@elfennir.com";

  if (sessionStorage.getItem(CARD_DISMISSED_KEY)) return;

  var style = document.createElement("style");
  style.textContent = [
    "@keyframes efDevSlideIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}",
    "@keyframes efDevSlideOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(40px)}}",
    "#ef-dev-card{position:fixed;bottom:100px;right:24px;z-index:99997;width:300px;background:#fff;border-radius:16px;",
    "  box-shadow:0 8px 32px rgba(0,0,0,.15),0 2px 8px rgba(0,0,0,.08);",
    "  border:1px solid #f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;",
    "  animation:efDevSlideIn .4s ease-out;overflow:hidden}",
    "#ef-dev-card.ef-dev-closing{animation:efDevSlideOut .3s ease-in forwards}",
    ".ef-dev-header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0}",
    ".ef-dev-profile{display:flex;align-items:center;gap:12px}",
    ".ef-dev-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#ff6b00,#ff8c00);",
    "  display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px;flex-shrink:0;",
    "  box-shadow:0 2px 8px rgba(255,107,0,.3)}",
    ".ef-dev-info h4{font-size:15px;font-weight:700;color:#1a1a2e;margin:0 0 2px;line-height:1.2}",
    ".ef-dev-info p{font-size:12px;color:#64748b;margin:0;line-height:1.3}",
    ".ef-dev-close{position:absolute;top:10px;right:10px;width:24px;height:24px;border-radius:50%;border:none;",
    "  background:rgba(0,0,0,.06);cursor:pointer;display:flex;align-items:center;justify-content:center;",
    "  color:#94a3b8;transition:all .2s;font-size:14px;line-height:1;padding:0}",
    ".ef-dev-close:hover{background:rgba(0,0,0,.1);color:#475569}",
    ".ef-dev-langs{padding:8px 16px 0;font-size:12px;color:#64748b}",
    ".ef-dev-actions{display:flex;flex-direction:column;gap:8px;padding:12px 16px}",
    ".ef-dev-btn{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;border-radius:10px;",
    "  font-size:13px;font-weight:600;text-decoration:none;transition:all .2s;border:none;cursor:pointer;width:100%}",
    ".ef-dev-btn:hover{transform:translateY(-1px);filter:brightness(1.05)}",
    ".ef-dev-btn-video{background:linear-gradient(135deg,#ff6b00,#ff8c00);color:#fff;box-shadow:0 2px 8px rgba(255,107,0,.25)}",
    ".ef-dev-btn-chat{background:#25D366;color:#fff;box-shadow:0 2px 8px rgba(37,211,102,.25)}",
    ".ef-dev-btn-email{background:#f1f5f9;color:#334155;border:1px solid #e2e8f0}",
    ".ef-dev-btn-email:hover{background:#e2e8f0}",
    ".ef-dev-response{text-align:center;padding:0 16px 14px;font-size:11px;color:#94a3b8;font-weight:500}",
    ".ef-dev-response span{color:#ff6b00}",
    "@media(max-width:480px){#ef-dev-card{width:calc(100vw - 32px);right:16px;bottom:90px}}"
  ].join("\n");
  document.head.appendChild(style);

  function showCard() {
    if (sessionStorage.getItem(CARD_DISMISSED_KEY)) return;

    var card = document.createElement("div");
    card.id = "ef-dev-card";
    card.innerHTML =
      '<div class="ef-dev-header">' +
        '<div class="ef-dev-profile">' +
          '<div class="ef-dev-avatar">YE</div>' +
          '<div class="ef-dev-info">' +
            '<h4>Yassin El Fennir</h4>' +
            '<p>Ihr pers\u00f6nlicher Webentwickler</p>' +
          '</div>' +
        '</div>' +
        '<button class="ef-dev-close" id="ef-dev-close" aria-label="Schliessen">\u00d7</button>' +
      '</div>' +
      '<div class="ef-dev-langs">\ud83c\udde9\ud83c\uddea Deutsch \u00b7 \ud83c\uddec\ud83c\udde7 English \u00b7 \ud83c\uddea\ud83c\uddf8 Espa\u00f1ol \u00b7 \ud83c\uddf2\ud83c\udde6 \u0627\u0644\u0639\u0631\u0628\u064a\u0629</div>' +
      '<div class="ef-dev-actions">' +
        '<a href="' + WA_VIDEO_URL + '" target="_blank" rel="noopener" class="ef-dev-btn ef-dev-btn-video">\ud83d\udcf9 Video-Anruf</a>' +
        '<a href="' + WA_TEXT_URL + '" target="_blank" rel="noopener" class="ef-dev-btn ef-dev-btn-chat">\ud83d\udcac Chat</a>' +
        '<a href="' + EMAIL_URL + '" class="ef-dev-btn ef-dev-btn-email">\ud83d\udce7 E-Mail</a>' +
      '</div>' +
      '<div class="ef-dev-response">Antwort in unter <span>2 Stunden</span></div>';

    document.body.appendChild(card);

    document.getElementById("ef-dev-close").addEventListener("click", function () {
      card.classList.add("ef-dev-closing");
      sessionStorage.setItem(CARD_DISMISSED_KEY, "1");
      setTimeout(function () {
        if (card.parentNode) card.parentNode.removeChild(card);
      }, 300);
    });
  }

  setTimeout(showCard, SHOW_DELAY_MS);
})();
