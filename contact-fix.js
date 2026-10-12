/*!
 * contact-fix.js  |  Abubakar Sadeeq portfolio  (combined: GOOGLE ADS DARK THEME v3 + contact fixes)
 * Part 1 - Dark Google Ads theme: black/navy background, blurred Google Ads visuals
 *          (dashboards, charts, search ads, keywords) behind the sections, frosted-glass cards.
 * Part 2 - Phone/Call -> WhatsApp, corrected phone number, contact form, LinkedIn link.
 * index.html is NOT modified. To go back to the old look, restore the previous contact-fix.js.
 */
(function () {
  "use strict";

  /* ---------- 1. Colours, glass cards, background layers ---------- */
  var THEME = `
:root{
  --bg:#0A0E17;--bg-alt:#0D1220;--surface:#121727;--surface-2:#161C2E;
  --border:rgba(255,255,255,0.10);--border-soft:rgba(255,255,255,0.06);
  --text:#EDEFF5;--text-dim:#A3ACC0;--text-faint:#7C859B;
  --blue:#4285F4;--red:#EA4335;--yellow:#FBBC05;--green:#34A853;
  --blue-soft:rgba(66,133,244,0.16);--red-soft:rgba(234,67,53,0.16);
  --yellow-soft:rgba(251,188,5,0.16);--green-soft:rgba(52,168,83,0.16);
  --shadow:0 20px 50px -20px rgba(0,0,0,0.65);
}
body{background:linear-gradient(180deg,#070A12 0%,#0A0E17 30%,#0B1020 62%,#0A0D15 100%)!important;background-color:#0A0E17!important;}
html{background:#0A0E17;}
body::before{background:
  radial-gradient(ellipse 800px 520px at 8% 0%,rgba(66,133,244,0.20),transparent 62%),
  radial-gradient(ellipse 700px 500px at 100% 18%,rgba(52,168,83,0.12),transparent 62%),
  radial-gradient(ellipse 700px 560px at 92% 88%,rgba(251,188,5,0.10),transparent 62%),
  radial-gradient(ellipse 600px 500px at 0% 80%,rgba(234,67,53,0.10),transparent 62%)!important;}
header.hero{z-index:1;}
section[style*="--bg-alt"]{background:linear-gradient(180deg,rgba(20,30,58,0.55),rgba(10,14,23,0.2))!important;}

/* blurred Google Ads visuals (inverted so they glow on black) */
.nk-bg{position:absolute;inset:0;overflow:hidden;z-index:-1;pointer-events:none;}
.nk-bg svg{position:absolute;width:1100px;max-width:none;height:auto;top:30px;
  filter:blur(5px) invert(.92) hue-rotate(180deg) saturate(1.35);opacity:.55;animation:nkdrift 22s ease-in-out infinite;}
.nk-bg.r svg{right:-230px;-webkit-mask-image:linear-gradient(to left,#000 35%,transparent 80%);mask-image:linear-gradient(to left,#000 35%,transparent 80%);}
.nk-bg.l svg{left:-230px;-webkit-mask-image:linear-gradient(to right,#000 30%,transparent 72%);mask-image:linear-gradient(to right,#000 30%,transparent 72%);}
.nk-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.28;}
@keyframes nkdrift{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-16px) rotate(-.6deg);}}
@media (max-width:768px){
  .nk-bg svg{width:760px;opacity:.42;top:10px;}
  .nk-bg.r svg{right:-340px;}.nk-bg.l svg{left:-340px;}
}

/* frosted-glass cards */
.service-card,.case-wrap,.about-side,.cert-card,.contact-card,.campaign-card,.exp-card,.why-item,.results-band,.hero-tag,.skill-chip,.chip,.tag{
  background:rgba(255,255,255,0.05)!important;
  -webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);
  border:1px solid rgba(255,255,255,0.10)!important;
  box-shadow:0 18px 40px -24px rgba(0,0,0,0.8);
}
.exp-card:hover{background:rgba(255,255,255,0.09)!important;}
.metric-tile{background:rgba(66,133,244,0.10)!important;}
.about-grid .chips span,.chips>*{background:rgba(255,255,255,0.06)!important;}

/* navbar, menus, overlays */
.navbar.scrolled{background:rgba(10,14,23,0.82)!important;box-shadow:0 6px 24px -16px rgba(0,0,0,0.7);}
.mobile-menu{background:#0D1220!important;}
.menu-overlay{background:rgba(5,7,12,0.6)!important;}
.lightbox{background:rgba(4,6,10,0.92)!important;}
.lightbox-close{background:#121727!important;color:#EDEFF5!important;}

/* hero */
.hero h1 .accent,.result-hero-num{background:linear-gradient(100deg,#4285F4,#34A853 60%,#FBBC05)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}
.dash-card{background:rgba(18,23,39,0.9)!important;box-shadow:0 14px 30px -14px rgba(0,0,0,0.7)!important;}
.hero-spark{opacity:0.5!important;}

/* buttons */
.btn-primary,.nav-cta{background:#4285F4;}
.btn-primary:hover,.nav-cta:hover{box-shadow:0 14px 28px -10px rgba(66,133,244,0.55)!important;}
.btn-ghost{background:rgba(255,255,255,0.04)!important;}
.btn-ghost:hover{border-color:#4285F4!important;color:#8AB4F8!important;}

/* case study + CTA + footer */
.case-img-btn{background:#0d1424!important;}
.case-img-btn .zoom-hint{background:rgba(10,14,23,0.85)!important;}
.results-band::before{background:radial-gradient(ellipse 500px 300px at 50% 0%,rgba(66,133,244,0.16),transparent 70%)!important;}
.cta-band{background:linear-gradient(135deg,rgba(18,30,60,0.85),rgba(18,23,39,0.7) 55%,rgba(16,40,30,0.8))!important;
  -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);}
footer{background:rgba(7,10,18,0.75);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}

/* contact form */
body .nk-form-wrap{background:rgba(255,255,255,0.05)!important;border:1px solid rgba(255,255,255,0.12)!important;
  -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 18px 40px -24px rgba(0,0,0,0.8);}
body .nk-form input,body .nk-form textarea{background:rgba(0,0,0,0.35)!important;border:1px solid rgba(255,255,255,0.18)!important;color:#EDEFF5!important;}
body .nk-form input:focus,body .nk-form textarea:focus{border-color:#4285F4!important;box-shadow:0 0 0 3px rgba(66,133,244,0.25)!important;}
body .nk-form button{background:#4285F4!important;}
body .nk-ok{color:#34A853!important}body .nk-err{color:#EA4335!important}
::selection{background:rgba(66,133,244,0.35);}
`;

  /* ---------- 2. Google Ads style artwork (inline SVG, blurred by CSS) ---------- */
  var B = "#1A73E8", R = "#D93025", Y = "#FBBC05", G = "#188038";
  var F = 'font-family="Arial,Helvetica,sans-serif"';

  function line(seed, color, base, amp) {
    var p = [], i, x, y;
    for (i = 0; i <= 24; i++) {
      x = 70 + i * 40;
      y = base - amp * (0.5 + 0.5 * Math.sin(i * 0.7 + seed)) - amp * 0.35 * Math.sin(i * 1.9 + seed * 2);
      p.push(x.toFixed(0) + "," + y.toFixed(0));
    }
    return '<polyline points="' + p.join(" ") + '" fill="none" stroke="' + color + '" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>';
  }
  function svg(inner) {
    return '<svg viewBox="0 0 1100 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + inner + '</svg>';
  }
  function card() {
    return '<rect x="20" y="20" width="1060" height="580" rx="26" fill="#fff" fill-opacity=".85" stroke="#cfd8e6" stroke-width="2"/>';
  }

  var ART = [];

  /* 0 - Google Ads overview: KPI tiles + 4-line performance chart */
  (function () {
    var s = card(), tiles = [[B, "Conv. rate", "15.34%"], [R, "Conversions", "267.99"], [G, "Phone calls", "460"], [Y, "Cost", "$10K"]], i;
    for (i = 0; i < 4; i++) {
      s += '<rect x="' + (55 + i * 250) + '" y="55" width="230" height="100" rx="14" fill="' + tiles[i][0] + '"/>' +
        '<text x="' + (75 + i * 250) + '" y="90" ' + F + ' font-size="19" fill="#fff">' + tiles[i][1] + '</text>' +
        '<text x="' + (75 + i * 250) + '" y="135" ' + F + ' font-size="40" font-weight="700" fill="#fff">' + tiles[i][2] + '</text>';
    }
    for (i = 0; i < 6; i++) s += '<line x1="60" x2="1040" y1="' + (210 + i * 66) + '" y2="' + (210 + i * 66) + '" stroke="#dbe3ef" stroke-width="2"/>';
    s += line(0.3, B, 520, 220) + line(1.4, R, 540, 200) + line(2.2, G, 530, 230) + line(3.1, Y, 545, 190);
    ART.push(svg(s));
  })();

  /* 1 - Search results page with a sponsored ad */
  (function () {
    var s = card();
    s += '<rect x="70" y="60" width="900" height="76" rx="38" fill="#fff" stroke="#b9c6dc" stroke-width="3"/>' +
      '<circle cx="118" cy="97" r="14" fill="none" stroke="' + B + '" stroke-width="5"/><line x1="128" y1="108" x2="142" y2="122" stroke="' + B + '" stroke-width="5" stroke-linecap="round"/>' +
      '<text x="170" y="110" ' + F + ' font-size="30" fill="#334155">google ads expert for lead generation</text>';
    s += '<rect x="70" y="175" width="900" height="165" rx="18" fill="#E8F0FE" stroke="#c4d6fb" stroke-width="2"/>' +
      '<rect x="95" y="198" width="72" height="30" rx="8" fill="' + G + '"/><text x="108" y="220" ' + F + ' font-size="20" font-weight="700" fill="#fff">Ad</text>' +
      '<text x="185" y="221" ' + F + ' font-size="22" fill="#475569">abubakarsadeeq99.github.io</text>' +
      '<text x="95" y="274" ' + F + ' font-size="34" font-weight="700" fill="#1A0DAB">Google Ads Expert | PPC Specialist</text>' +
      '<rect x="95" y="295" width="780" height="14" rx="7" fill="#9fb0c8"/><rect x="95" y="320" width="560" height="14" rx="7" fill="#b9c6dc"/>';
    for (var i = 0; i < 2; i++) {
      var y = 375 + i * 105;
      s += '<rect x="70" y="' + y + '" width="900" height="88" rx="14" fill="#fff" fill-opacity=".9" stroke="#d8e1ee" stroke-width="2"/>' +
        '<rect x="95" y="' + (y + 18) + '" width="420" height="20" rx="10" fill="#7aa4e8"/><rect x="95" y="' + (y + 50) + '" width="700" height="12" rx="6" fill="#c3cfdf"/>';
    }
    ART.push(svg(s));
  })();

  /* 2 - Campaign performance: bar chart + donut */
  (function () {
    var s = card(), cols = [B, R, Y, G], i, h;
    for (i = 0; i < 12; i++) {
      h = 120 + Math.abs(Math.sin(i * 1.3 + 1)) * 280;
      s += '<rect x="' + (70 + i * 52) + '" y="' + (560 - h) + '" width="36" height="' + h + '" rx="8" fill="' + cols[i % 4] + '"/>';
    }
    var c = 2 * Math.PI * 90, segs = [[B, .4], [R, .25], [Y, .2], [G, .15]], off = 0;
    segs.forEach(function (g) {
      s += '<circle cx="860" cy="250" r="90" fill="none" stroke="' + g[0] + '" stroke-width="42" stroke-dasharray="' + (c * g[1]) + ' ' + c + '" stroke-dashoffset="' + (-c * off) + '" transform="rotate(-90 860 250)"/>';
      off += g[1];
    });
    s += '<text x="860" y="262" text-anchor="middle" ' + F + ' font-size="38" font-weight="700" fill="#0F172A">4.8x</text>' +
      '<text x="860" y="470" text-anchor="middle" ' + F + ' font-size="28" fill="#475569">ROAS</text>';
    ART.push(svg(s));
  })();

  /* 3 - KPI chips with sparklines */
  (function () {
    var s = card(), k = [["CPA", "$37", B], ["CTR", "7.2%", R], ["ROAS", "4.8x", G], ["Conv.", "267", Y]], i;
    for (i = 0; i < 4; i++) {
      var x = 60 + (i % 2) * 520, y = 60 + Math.floor(i / 2) * 270, p = [], j;
      s += '<rect x="' + x + '" y="' + y + '" width="480" height="240" rx="20" fill="#fff" stroke="#d3dcea" stroke-width="2"/>' +
        '<text x="' + (x + 28) + '" y="' + (y + 55) + '" ' + F + ' font-size="26" fill="#64748b">' + k[i][0] + '</text>' +
        '<text x="' + (x + 28) + '" y="' + (y + 120) + '" ' + F + ' font-size="64" font-weight="700" fill="' + k[i][2] + '">' + k[i][1] + '</text>';
      for (j = 0; j <= 12; j++) p.push((x + 28 + j * 35) + "," + (y + 210 - (20 + 40 * Math.abs(Math.sin(j * 0.6 + i))) - j * 3));
      s += '<polyline points="' + p.join(" ") + '" fill="none" stroke="' + k[i][2] + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    ART.push(svg(s));
  })();

  /* 4 - Keyword table with bids and quality score */
  (function () {
    var s = card(), kw = ["google ads expert", "ppc specialist", "hire google ads freelancer", "ppc management", "lead generation ads", "performance max agency", "conversion tracking setup"], i;
    s += '<rect x="45" y="45" width="1010" height="56" rx="12" fill="#E8F0FE"/>' +
      '<text x="70" y="82" ' + F + ' font-size="22" font-weight="700" fill="#475569">Keyword</text><text x="560" y="82" ' + F + ' font-size="22" font-weight="700" fill="#475569">Match</text>' +
      '<text x="740" y="82" ' + F + ' font-size="22" font-weight="700" fill="#475569">Quality</text><text x="960" y="82" ' + F + ' font-size="22" font-weight="700" fill="#475569">Bid</text>';
    for (i = 0; i < 7; i++) {
      var y = 130 + i * 62;
      s += '<line x1="45" x2="1055" y1="' + (y + 40) + '" y2="' + (y + 40) + '" stroke="#e2e8f0" stroke-width="2"/>' +
        '<text x="70" y="' + (y + 22) + '" ' + F + ' font-size="24" fill="#1e293b">' + kw[i] + '</text>' +
        '<text x="560" y="' + (y + 22) + '" ' + F + ' font-size="22" fill="#64748b">' + (i % 2 ? "phrase" : "[exact]") + '</text>' +
        '<rect x="740" y="' + (y + 4) + '" width="150" height="16" rx="8" fill="#e2e8f0"/><rect x="740" y="' + (y + 4) + '" width="' + (80 + (i * 37) % 70) + '" height="16" rx="8" fill="' + (i % 3 === 0 ? G : i % 3 === 1 ? B : Y) + '"/>' +
        '<text x="960" y="' + (y + 22) + '" ' + F + ' font-size="24" font-weight="700" fill="#0F172A">$' + (0.8 + i * 0.35).toFixed(2) + '</text>';
    }
    ART.push(svg(s));
  })();

  function decorate() {
    var nodes = document.querySelectorAll("header.hero, section.section-pad"), orbCols = [B, G, Y, R];
    Array.prototype.forEach.call(nodes, function (sec, i) {
      if (sec.querySelector(":scope > .nk-bg")) return;
      var d = document.createElement("div");
      d.className = "nk-bg " + (i % 2 === 0 ? "r" : "l");
      d.innerHTML =
        '<div class="nk-orb" style="width:420px;height:420px;background:' + orbCols[i % 4] + ';' + (i % 2 ? "right" : "left") + ':-120px;top:-60px"></div>' +
        '<div class="nk-orb" style="width:360px;height:360px;background:' + orbCols[(i + 2) % 4] + ';' + (i % 2 ? "left" : "right") + ':-100px;bottom:-80px"></div>' +
        ART[i % ART.length];
      sec.insertBefore(d, sec.firstChild);
    });
  }

  try {
    var themeEl = document.createElement("style");
    themeEl.id = "nk-light-theme";
    themeEl.textContent = THEME;
    document.head.appendChild(themeEl);
    var meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("content", "#0A0E17");
    if (!meta.parentNode) document.head.appendChild(meta);
    decorate();
  } catch (e) {}
})();

/* ===================== Part 2: contact fixes (unchanged) ===================== */

(function () {
  "use strict";

  var WA_NUMBER = "923259896876";
  var WA_DISPLAY = "+92 325 9896876";
  var EMAIL = "abubakarsadeeq6676@gmail.com";
  var WA_MESSAGE = "Hi Abubakar, I found your website and would like to discuss Google Ads.";
  var LINKEDIN_URL = "https://www.linkedin.com/in/abubakarppc";
  var HIDE_FIVERR_UPWORK_BUTTONS = false; // set to true to hide the two empty Fiverr/Upwork buttons
  var ENDPOINT = "https://formsubmit.co/ajax/" + EMAIL;

  function waLink() {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);
  }

  /* 1. Replace every Call (tel:) link with WhatsApp */
  function fixPhoneLinks() {
    var links = document.querySelectorAll('a[href^="tel:"]');
    Array.prototype.forEach.call(links, function (a) {
      a.setAttribute("href", waLink());
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("aria-label", "Chat on WhatsApp " + WA_DISPLAY);
      var walker = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, false);
      var n;
      while ((n = walker.nextNode())) {
        if (/^\s*(phone|call)\s*$/i.test(n.nodeValue)) {
          n.nodeValue = n.nodeValue.replace(/phone|call/i, "WhatsApp");
        }
      }
    });
    return links;
  }

  /* 1b. LinkedIn button -> real profile; Fiverr/Upwork are not linked on purpose */
  function fixSocialLinks() {
    var links = document.querySelectorAll("a");
    Array.prototype.forEach.call(links, function (a) {
      var txt = (a.textContent || "").trim();
      var href = a.getAttribute("href") || "";
      var isPlaceholder = href === "#" || href === "";
      if (/linkedin/i.test(txt) && isPlaceholder) {
        a.setAttribute("href", LINKEDIN_URL);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("title", "Abubakar Sadeeq on LinkedIn");
      } else if (HIDE_FIVERR_UPWORK_BUTTONS && isPlaceholder && /(fiverr|upwork)\s*profile/i.test(txt)) {
        a.style.display = "none";
      }
    });
  }

  /* 2. Correct the displayed number (old one was missing a digit) */
  function fixDisplayedNumber() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode && node.parentNode.nodeName;
        if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        return /\+?92\s?325\s?896\s?876/.test(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }
    }, false);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (t) {
      t.nodeValue = t.nodeValue.replace(/\+?92\s?325\s?896\s?876/g, WA_DISPLAY);
    });
  }

  /* 3. Contact form */
  var CSS =
    ".nk-form-wrap{max-width:640px;margin:32px auto 0;padding:28px;border-radius:16px;" +
    "background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);text-align:left;box-sizing:border-box}" +
    ".nk-form-wrap h3{margin:0 0 6px;font-size:1.25rem;color:inherit}" +
    ".nk-form-wrap p.nk-sub{margin:0 0 18px;opacity:.75;font-size:.95rem}" +
    ".nk-form label{display:block;font-size:.85rem;margin:0 0 6px;opacity:.85}" +
    ".nk-form input,.nk-form textarea{width:100%;box-sizing:border-box;padding:12px 14px;margin:0 0 16px;" +
    "border-radius:10px;border:1px solid rgba(255,255,255,.18);background:rgba(0,0,0,.35);color:inherit;" +
    "font:inherit;font-size:1rem;outline:none}" +
    ".nk-form input:focus,.nk-form textarea:focus{border-color:#4285F4;box-shadow:0 0 0 3px rgba(66,133,244,.25)}" +
    ".nk-form textarea{min-height:130px;resize:vertical}" +
    ".nk-form button{width:100%;padding:14px 18px;border:0;border-radius:10px;background:#4285F4;color:#fff;" +
    "font:inherit;font-weight:600;font-size:1rem;cursor:pointer;transition:filter .2s}" +
    ".nk-form button:hover{filter:brightness(1.1)}" +
    ".nk-form button[disabled]{opacity:.6;cursor:not-allowed}" +
    ".nk-hp{position:absolute!important;left:-9999px!important;height:0;width:0;opacity:0}" +
    ".nk-status{margin-top:14px;font-size:.95rem;min-height:1.2em}" +
    ".nk-ok{color:#34A853}.nk-err{color:#EA4335}";

  function buildForm() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var wrap = document.createElement("div");
    wrap.className = "nk-form-wrap";
    wrap.id = "nk-contact-form";
    wrap.innerHTML =
      "<h3>Send me a message</h3>" +
      '<p class="nk-sub">Tell me about your campaign goals. I reply by email, usually within 24 hours.</p>' +
      '<form class="nk-form" novalidate>' +
      '<label for="nk-name">Your name</label>' +
      '<input id="nk-name" name="name" type="text" required maxlength="100" autocomplete="name">' +
      '<label for="nk-email">Your email</label>' +
      '<input id="nk-email" name="email" type="email" required maxlength="150" autocomplete="email">' +
      '<label for="nk-msg">Message</label>' +
      '<textarea id="nk-msg" name="message" required maxlength="3000"></textarea>' +
      '<input class="nk-hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button type="submit">Send Message</button>' +
      '<div class="nk-status" role="status" aria-live="polite"></div>' +
      "</form>";

    var form = wrap.querySelector("form");
    var status = wrap.querySelector(".nk-status");
    var btn = wrap.querySelector("button");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      status.className = "nk-status";

      if (form._honey.value) return; // bot
      if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.className = "nk-status nk-err";
        status.textContent = "Please enter your name, a valid email and a message.";
        return;
      }

      btn.disabled = true;
      btn.textContent = "Sending...";

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "New website enquiry from " + name,
          _replyto: email,
          _template: "table",
          _captcha: "false"
        })
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (String(d.success) === "true") {
            form.reset();
            status.className = "nk-status nk-ok";
            status.textContent = "Thank you! Your message has been sent. I will get back to you soon.";
          } else {
            throw new Error(d.message || "failed");
          }
        })
        .catch(function () {
          status.className = "nk-status nk-err";
          status.innerHTML =
            'Could not send right now. Please email me directly at <a href="mailto:' + EMAIL +
            "?subject=" + encodeURIComponent("Website enquiry from " + name) +
            "&body=" + encodeURIComponent(message) + '">' + EMAIL + "</a>.";
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = "Send Message";
        });
    });

    return wrap;
  }

  function placeForm(telLinks) {
    if (document.getElementById("nk-contact-form")) return;
    var form = buildForm();
    var anchor = telLinks && telLinks[0] ? telLinks[0].parentElement : null;
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(form, anchor.nextSibling);
      return;
    }
    var section = document.getElementById("contact");
    if (section) { section.appendChild(form); return; }
    var footer = document.querySelector("footer");
    if (footer && footer.parentNode) footer.parentNode.insertBefore(form, footer);
  }

  function init() {
    if (window.__nkContactFixed) return;
    window.__nkContactFixed = true;
    var tels = fixPhoneLinks();
    fixSocialLinks();
    fixDisplayedNumber();
    placeForm(tels);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
