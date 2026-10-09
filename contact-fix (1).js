/*!
 * contact-fix.js  |  Abubakar Sadeeq portfolio  (combined: LIGHT PROFESSIONAL THEME + contact fixes)
 * Part 1 - Light, professional Google Ads theme (overrides the dark colours only)
 * Part 2 - Phone/Call -> WhatsApp, corrected phone number, contact form, LinkedIn link
 * index.html is NOT modified. To go back to the dark look, restore the old contact-fix.js.
 */
(function () {
  "use strict";
  var THEME =
  ":root{" +
    "--bg:#F6F8FC;--bg-alt:#EDF2FA;--surface:#FFFFFF;--surface-2:#F1F6FE;" +
    "--border:rgba(15,23,42,0.11);--border-soft:rgba(15,23,42,0.07);" +
    "--text:#0F172A;--text-dim:#475569;--text-faint:#64748B;" +
    "--blue:#1A73E8;--red:#D93025;--yellow:#F29900;--green:#188038;" +
    "--blue-soft:rgba(26,115,232,0.10);--red-soft:rgba(217,48,37,0.10);" +
    "--yellow-soft:rgba(242,153,0,0.14);--green-soft:rgba(24,128,56,0.10);" +
    "--shadow:0 18px 40px -22px rgba(15,23,42,0.28);" +
  "}" +
  "body::before{background:" +
    "radial-gradient(ellipse 900px 500px at 12% -5%,rgba(26,115,232,0.10),transparent 60%)," +
    "radial-gradient(ellipse 800px 500px at 100% 8%,rgba(24,128,56,0.06),transparent 60%)," +
    "radial-gradient(ellipse 700px 600px at 90% 85%,rgba(251,188,5,0.07),transparent 60%)!important;}" +
  /* navbar / menus / overlays */
  ".navbar.scrolled{background:rgba(255,255,255,0.88)!important;box-shadow:0 6px 24px -16px rgba(15,23,42,0.25);}" +
  ".mobile-menu{background:#fff!important;}" +
  ".menu-overlay{background:rgba(15,23,42,0.35)!important;}" +
  ".lightbox{background:rgba(15,23,42,0.82)!important;}" +
  ".lightbox-close{background:#fff!important;color:#0F172A!important;}" +
  /* hero */
  ".hero h1 .accent{background:linear-gradient(100deg,#1A73E8,#188038 70%)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}" +
  ".hero-tag{background:#fff!important;box-shadow:0 4px 14px -8px rgba(15,23,42,0.25);}" +
  ".dash-card{background:rgba(255,255,255,0.94)!important;box-shadow:0 14px 30px -14px rgba(15,23,42,0.30)!important;}" +
  ".hero-spark{opacity:0.35!important;}" +
  /* cards get a soft shadow so white-on-light still has depth */
  ".service-card,.case-wrap,.about-side,.cert-card,.contact-card,.campaign-card,.exp-card,.results-band{box-shadow:0 10px 30px -22px rgba(15,23,42,0.25);}" +
  ".btn-primary,.nav-cta{background:#1A73E8;}" +
  ".btn-primary:hover,.nav-cta:hover{box-shadow:0 14px 28px -10px rgba(26,115,232,0.45)!important;}" +
  ".btn-ghost{background:#fff!important;}" +
  ".btn-ghost:hover{border-color:#1A73E8!important;color:#1A73E8!important;}" +
  /* case-study screenshot + results */
  ".case-img-btn,.case-shot,button.case-img{background:#EDF2FA!important;}" +
  ".case-img-btn .zoom-hint{background:rgba(255,255,255,0.92)!important;}" +
  ".results-band::before{background:radial-gradient(ellipse 500px 300px at 50% 0%,rgba(26,115,232,0.12),transparent 70%)!important;}" +
  ".result-hero-num{background:linear-gradient(100deg,#1A73E8,#188038)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;}" +
  /* CTA band + footer */
  ".cta-band{background:linear-gradient(135deg,#E8F0FE,#FFFFFF 60%,#E6F4EA)!important;}" +
  "footer{background:#fff;}" +
  /* contact form injected by the contact fix */
  "body .nk-form-wrap{background:#fff!important;border:1px solid rgba(15,23,42,0.11)!important;box-shadow:0 14px 34px -22px rgba(15,23,42,0.30);}" +
  "body .nk-form input,body .nk-form textarea{background:#F6F8FC!important;border:1px solid rgba(15,23,42,0.18)!important;color:#0F172A!important;}" +
  "body .nk-form input:focus,body .nk-form textarea:focus{border-color:#1A73E8!important;background:#fff!important;box-shadow:0 0 0 3px rgba(26,115,232,0.18)!important;}" +
  "body .nk-form button{background:#1A73E8!important;}" +
  "body .nk-ok{color:#188038!important}body .nk-err{color:#D93025!important}" +
  "::selection{background:rgba(26,115,232,0.22);}";
  try {
    var themeEl = document.createElement("style");
    themeEl.id = "nk-light-theme";
    themeEl.textContent = THEME;
    document.head.appendChild(themeEl);
    var meta = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("content", "#F6F8FC");
    if (!meta.parentNode) document.head.appendChild(meta);
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
