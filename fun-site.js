/* FrameUpNow site-wide scripts. Moved out of Webflow Footer Code (FOOTER-CODE-v4.html).
   Each block is copied unchanged and wrapped in try/catch, so one failing block
   cannot stop the others - the same isolation they had as separate <script> tags. */

/* ---- LiveChat: defer init ---- */
try {
  window._lc = window._lc || {};
  window._lc.asyncInit = true;
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- LiveChat: widget setup ---- */
try {
  window._lc = window._lc || {};
  window.__lc = window.__lc || {};
  window.__lc.license = 19169140;
  window.__lc.integration_name = "manual_onboarding";
  window.__lc.product_name = "livechat";

  (function(n, t, c) {
    function i(n) {
      return e.h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = {
      _q: [],
      _h: null,
      _v: "2.0",
      on: function() { i(["on", c.call(arguments)]) },
      once: function() { i(["once", c.call(arguments)]) },
      off: function() { i(["off", c.call(arguments)]) },
      get: function() {
        if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
        return i(["get", c.call(arguments)]);
      },
      call: function() { i(["call", c.call(arguments)]) },
      init: function() {
        var n = t.createElement("script");
        n.async = true;
        n.type = "text/javascript";
        n.src = "https://cdn.livechatinc.com/tracking.js";
        t.head.appendChild(n);
      }
    };
    !n._lc.asyncInit && e.init();
    n.LiveChatWidget = n.LiveChatWidget || e;
  })(window, document, [].slice);
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- LiveChat: load on first interaction ---- */
try {
(function () {
  var loaded = false;
  var events = ["pointerdown", "click", "keydown", "touchstart"];
  function load(e) {
    if (e && e.isTrusted === false) return;
    if (loaded) return;
    loaded = true;
    events.forEach(function (name) { window.removeEventListener(name, load); });
    if (window.LiveChatWidget && typeof window.LiveChatWidget.init === "function") {
      window.LiveChatWidget.init();
    }
  }
  events.forEach(function (name) {
    window.addEventListener(name, load, { once: true, passive: true });
  });
})();
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- Navbar search: dropdown width ---- */
try {
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".nav_search-field");
    const filterComponent = document.querySelector(".search_filter-component");
    if (!input || !filterComponent) return;
    filterComponent.style.width = "0%";
    filterComponent.style.transition = "width 0.3s ease";
    input.addEventListener("input", function () {
      filterComponent.style.width = input.value.trim() === "" ? "0%" : "100%";
    });
  });
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- Strip .html from internal links ---- */
try {
    document.querySelectorAll("a").forEach(function(link){
      const hrefExists = link.hasAttribute('href')
      const href = link.getAttribute('href')
      if (hrefExists && href.startsWith('/') && href.endsWith(".html")) {
        const replacedHref = link.getAttribute("href").replace(".html", "")
        link.setAttribute("href", replacedHref)
      }
     })
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- accessiBe: load on first interaction ---- */
try {
(function () {
  var loaded = false;
  var events = ["pointerdown", "click", "keydown", "touchstart", "scroll"];

  function load(e) {
    if (e && e.isTrusted === false) return;
    if (loaded) return;
    loaded = true;
    events.forEach(function (n) { window.removeEventListener(n, load); });

    var s = document.createElement("script");
    var h = document.querySelector("head") || document.body;
    s.src = "https://acsbapp.com/apps/app/dist/js/app.js";
    s.async = true;
    s.onload = function () { if (window.acsbJS) acsbJS.init(); };
    h.appendChild(s);
  }

  events.forEach(function (n) {
    window.addEventListener(n, load, { once: true, passive: true });
  });

  setTimeout(load, 5000);
})();
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- Footer titles: tidy spaces ---- */
try {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".footer_title").forEach(function (t) {
      t.textContent = t.textContent.replace(/ /g, " ").trim();
    });
  });
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- ADU plans: link and redirect to aduplans.com ---- */
try {
  (function () {
    var RE = /^\/affordable-homes-adus\/.*-(\d{5})$/;
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll('a[href^="/affordable-homes-adus/"]').forEach(function (a) {
        var m = RE.exec(a.getAttribute("href").replace(/\/$/, ""));
        if (!m) return;
        a.setAttribute("href", "https://aduplans.com/plans/" + m[1]);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      });
    });
    var here = RE.exec(window.location.pathname.replace(/\/$/, ""));
    if (here) window.location.replace("https://aduplans.com/plans/" + here[1]);
  })();
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- See FrameUpNow in Action carousel ---- */
try {
(function () {
  /* To change the carousel photos, edit ONLY the SLIDES list below. */
  var HEADING = "See FrameUpNow";
  var HEADING_ACCENT = "in Action";
  var SUBTEXT = "See our cold-formed steel frames taking shape on real projects";

  var SLIDES = [
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53fdb8d5af1009d19fb_01-steel-panels-delivered.avif", cap: "Steel panels delivered to site" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e5401c1de4a9a112f04a_02-engineered-labeled-panels.avif", cap: "Every part engineered and labeled" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53f57561396c9768bd3_03-floor-joists-on-slab.avif", cap: "Floor joists set on the slab" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53fc731ad0a0e43e8a1_04-first-walls-going-up.avif", cap: "First walls going up" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53dce54a13438e9c3c1_05-fastening-the-frame.avif", cap: "Fastening the frame" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53faef18e38a3485c98_06-crew-raising-walls.avif", cap: "Raising a wall panel" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53f366c30a76f19afbc_07-second-storey-framing.avif", cap: "Second storey framing" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53f59f044d37d628add_08-full-frame-skeleton.avif", cap: "The full steel skeleton" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53ffac28241f4e9859e_09-inside-the-frame.avif", cap: "Inside the frame" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53f7dac54c7e2a4b58c_10-sunlit-interior-frame.avif", cap: "Light through a finished frame" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53fecd621ee54027f3f_11-frame-with-sheathing.avif", cap: "Sheathing goes on" },
    { src: "https://cdn.prod.website-files.com/6675d091e37687eeb4fdd0e5/6a91e53fce54a13438e9c484_12-completed-steel-frame.avif", cap: "A completed cold-formed steel frame" }
  ];

  var AUTOPLAY_MS = 5000;

  var ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="15 18 9 12 15 6"></polyline></svg>';

  function build(host) {
    if (host.getAttribute("data-fun-car-ready")) return;
    host.setAttribute("data-fun-car-ready", "1");
    host.className = (host.className + " fun-car").trim();
    host.setAttribute("aria-roledescription", "carousel");
    host.setAttribute("aria-label", HEADING + " " + HEADING_ACCENT);

    var slidesHtml = SLIDES.map(function (s, i) {
      return '<li class="fun-car__slide" role="group" aria-roledescription="slide" ' +
             'aria-label="' + (i + 1) + ' of ' + SLIDES.length + '">' +
               '<figure class="fun-car__fig">' +
                 '<div class="fun-car__imgwrap">' +
                   '<img class="fun-car__img" src="' + s.src + '" alt="' + s.cap + '" ' +
                        'loading="' + (i < 3 ? "eager" : "lazy") + '" decoding="async">' +
                 '</div>' +
                 '<figcaption class="fun-car__cap">' + s.cap + '</figcaption>' +
               '</figure>' +
             '</li>';
    }).join("");

    host.innerHTML =
      '<div class="fun-car__inner">' +
        '<h2 class="fun-car__title">' + HEADING + ' <em>' + HEADING_ACCENT + '</em></h2>' +
        '<p class="fun-car__sub">' + SUBTEXT + '</p>' +
        '<div class="fun-car__viewport">' +
          '<button type="button" class="fun-car__arrow fun-car__arrow--prev" aria-label="Previous photos">' + ARROW + '</button>' +
          '<ul class="fun-car__track" tabindex="0">' + slidesHtml + '</ul>' +
          '<button type="button" class="fun-car__arrow fun-car__arrow--next" aria-label="Next photos">' +
            ARROW.replace("15 18 9 12 15 6", "9 18 15 12 9 6") + '</button>' +
        '</div>' +
        '<div class="fun-car__dots" aria-label="Choose a photo"></div>' +
      '</div>';

    var track = host.querySelector(".fun-car__track");
    var prev = host.querySelector(".fun-car__arrow--prev");
    var next = host.querySelector(".fun-car__arrow--next");
    var dots = host.querySelector(".fun-car__dots");
    var items = [].slice.call(track.children);
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function step() {
      if (items.length < 2) return track.clientWidth || 1;
      return (items[1].offsetLeft - items[0].offsetLeft) || 1;
    }
    function perView() { return Math.max(1, Math.round(track.clientWidth / step())); }
    function pageCount() { return Math.max(1, items.length - perView() + 1); }
    function current() {
      return Math.max(0, Math.min(pageCount() - 1, Math.round(track.scrollLeft / step())));
    }
    function goTo(i, instant) {
      var t = Math.max(0, Math.min(pageCount() - 1, i));
      var left = items[t] ? items[t].offsetLeft - items[0].offsetLeft : 0;
      if (instant || reduce) {
        var was = track.style.scrollBehavior;
        track.style.scrollBehavior = "auto";
        track.scrollLeft = left;
        track.style.scrollBehavior = was;
      } else {
        track.scrollTo({ left: left, behavior: "smooth" });
      }
    }
    function renderDots() {
      var n = pageCount();
      if (dots.children.length !== n) {
        dots.innerHTML = "";
        for (var i = 0; i < n; i++) {
          var d = document.createElement("button");
          d.type = "button";
          d.className = "fun-car__dot";
          d.setAttribute("aria-label", "Go to photo " + (i + 1));
          (function (idx) {
            d.addEventListener("click", function () { stop(); goTo(idx); });
          })(i);
          dots.appendChild(d);
        }
      }
      var c = current();
      [].forEach.call(dots.children, function (d, i) {
        d.setAttribute("aria-current", i === c ? "true" : "false");
      });
    }
    function sync() {
      renderDots();
      var c = current();
      prev.disabled = c <= 0;
      next.disabled = c >= pageCount() - 1;
    }

    prev.addEventListener("click", function () { stop(); goTo(current() - 1); });
    next.addEventListener("click", function () { stop(); goTo(current() + 1); });

    var raf = null;
    track.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = null; sync(); });
    }, { passive: true });

    var rt = null;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { dots.innerHTML = ""; sync(); }, 150);
    });

    var timer = null, stopped = false;
    function tick() {
      if (document.hidden) return;
      var c = current();
      goTo(c >= pageCount() - 1 ? 0 : c + 1);
    }
    function start() {
      if (stopped || reduce || !AUTOPLAY_MS) return;
      clearInterval(timer);
      timer = setInterval(tick, AUTOPLAY_MS);
    }
    function pause() { clearInterval(timer); }
    function stop() { stopped = true; pause(); }

    host.addEventListener("mouseenter", pause);
    host.addEventListener("mouseleave", start);
    host.addEventListener("focusin", pause);
    host.addEventListener("focusout", start);
    track.addEventListener("touchstart", stop, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pause(); else start();
    });

    sync();
    start();
    window.addEventListener("load", function () { dots.innerHTML = ""; sync(); });
  }

  function init() {
    var hosts = document.querySelectorAll("[data-fun-carousel]");
    for (var i = 0; i < hosts.length; i++) build(hosts[i]);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- Schema rescue + duplicate navbar hide ---- */
try {
(function () {
  function rescueSchema() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var strays = [], n;
    while (n = walker.nextNode()) {
      var t = n.textContent.trim();
      if (t.length < 60) continue;
      if (t.indexOf('"@context"') === -1) continue;
      if (t.indexOf("schema.org") === -1) continue;
      if (t.charAt(0) !== "{" && t.charAt(0) !== "[") continue;
      var p = n.parentElement;
      if (!p || /SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CODE|PRE/.test(p.tagName)) continue;
      strays.push(n);
    }
    strays.forEach(function (node) {
      var text = node.textContent.trim();
      try { JSON.parse(text); } catch (e) { return; }
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.textContent = text;
      document.head.appendChild(s);
      node.parentNode.removeChild(node);
    });
  }

  function dedupeNavbar() {
    var navs = document.querySelectorAll(".navbar_component");
    if (navs.length < 2) return;
    for (var i = 1; i < navs.length; i++) {
      navs[i].style.display = "none";
      navs[i].setAttribute("aria-hidden", "true");
    }
  }

  function run() {
    try { rescueSchema(); } catch (e) {}
    try { dedupeNavbar(); } catch (e) {}
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", run);
  else run();

  window.addEventListener("load", dedupeNavbar);
})();
} catch (e) { setTimeout(function () { throw e; }); }

/* ---- ADU plans: link and redirect to aduplans.com ---- */
try {
/* FrameUpNow - navbar product search, loaded on demand.
   The 621-product list used to be built into the navbar of every page
   (76-92% of each page's HTML). It now lives on /search-data and is
   fetched the first time someone clicks or types in the search box.
   Matching is the same as before: case-insensitive phrase match on the
   product name, same order, same "no results" message, Enter does nothing. */
(function () {
  var DATA = "/search-data";
  var input = document.querySelector(".nav_search-field");
  var wrap = document.querySelector(".search_filter-wrapper");
  if (!input || !wrap) return;
  /* old built-in lists still in the navbar -> leave everything to Finsweet */
  if (wrap.querySelector(".product_filter-item")) return;
  var form = input.closest("form");
  var empty = wrap.querySelector(".nav_empty-state");
  var items = null, started = false, base = new URL(DATA, location.origin).href;

  /* Enter must not submit the form (it would send a Webflow form entry) */
  document.addEventListener("submit", function (e) {
    if (form && e.target === form) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);

  function getDoc(url) {
    return fetch(url, { credentials: "same-origin" })
      .then(function (r) { return r.text(); })
      .then(function (t) { return new DOMParser().parseFromString(t, "text/html"); });
  }
  function part(doc, i) {
    var list = doc.querySelectorAll(".product_filter-list")[i];
    if (!list) return { found: [], next: null };
    var nx = list.querySelector(".w-pagination-next");
    var href = nx && nx.getAttribute("href");
    return {
      found: [].slice.call(list.querySelectorAll(".product_filter-item")),
      next: href ? new URL(href, base).href : null
    };
  }
  /* page 1 of a list, then follow its pagination for the rest */
  function loadList(doc, i) {
    var first = part(doc, i), out = { first: first.found, rest: [] };
    function more(next) {
      if (!next) return Promise.resolve(out);
      return getDoc(next).then(function (d) { var p = part(d, i); out.rest.push.apply(out.rest, p.found); return more(p.next); });
    }
    return more(first.next);
  }
  function build(all) {
    var list = document.createElement("div");
    list.className = "product_filter-list w-dyn-list";
    var holder = document.createElement("div");
    holder.className = "w-dyn-items";
    holder.setAttribute("role", "list");
    all.forEach(function (it) {
      var node = document.importNode(it, true);
      node.querySelectorAll("[fs-cmsfilter-field]").forEach(function (f) { f.removeAttribute("fs-cmsfilter-field"); });
      var nameEl = it.querySelector('[fs-cmsfilter-field="name"]');
      node._n = (nameEl ? nameEl.textContent : node.textContent).toLowerCase().trim();
      /* same rewrite the footer applies to aduplans plans: link straight to aduplans.com */
      node.querySelectorAll('a[href^="/affordable-homes-adus/"]').forEach(function (a) {
        var m = /^\/affordable-homes-adus\/.*-(\d{5})$/.exec(a.getAttribute("href").replace(/\/$/, ""));
        if (!m) return;
        a.setAttribute("href", "https://aduplans.com/plans/" + m[1]);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      });
      holder.appendChild(node);
    });
    list.appendChild(holder);
    wrap.appendChild(list);
    items = [].slice.call(holder.children);
  }
  function apply() {
    if (!items) return;
    var q = input.value.toLowerCase().trim(), shown = 0;
    items.forEach(function (it) {
      var ok = !q || it._n.indexOf(q) > -1;
      it.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    if (empty) {
      empty.style.opacity = "1";
      empty.style.display = q && shown === 0 ? "flex" : "none";
    }
  }
  function start() {
    if (started) return;
    started = true;
    getDoc(DATA).then(function (doc) {
      var n = doc.querySelectorAll(".product_filter-list").length, jobs = [];
      for (var i = 0; i < n; i++) jobs.push(loadList(doc, i));
      return Promise.all(jobs);
    }).then(function (lists) {
      /* same order Finsweet produced: page 1 of every list, then the rest */
      var all = [], seen = {};
      function add(it) {
        var a = it.querySelector("a"), k = a ? a.getAttribute("href") : Math.random();
        if (!seen[k]) { seen[k] = 1; all.push(it); }
      }
      lists.forEach(function (l) { l.first.forEach(add); });
      lists.forEach(function (l) { l.rest.forEach(add); });
      build(all);
      apply();
    }).catch(function () { started = false; });
  }
  input.addEventListener("focus", start);
  input.addEventListener("pointerdown", start);
  input.addEventListener("input", function () { start(); apply(); });
})();
} catch (e) { setTimeout(function () { throw e; }); }
