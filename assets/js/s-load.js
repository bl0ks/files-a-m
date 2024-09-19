window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
    if (window.ue_ihb === 1) {
      var ue_csm = window,
        ue_hob = +new Date();
      (function (d) {
        var e = (d.ue = d.ue || {}),
          f =
            Date.now ||
            function () {
              return +new Date();
            };
        e.d = function (b) {
          return f() - (b ? 0 : d.ue_t0);
        };
        e.stub = function (b, a) {
          if (!b[a]) {
            var c = [];
            b[a] = function () {
              c.push([c.slice.call(arguments), e.d(), d.ue_id]);
            };
            b[a].replay = function (b) {
              for (var a; (a = c.shift());) b(a[0], a[1], a[2]);
            };
            b[a].isStub = 1;
          }
        };
        e.exec = function (b, a) {
          return function () {
            try {
              return b.apply(this, arguments);
            } catch (c) {
              ueLogError(c, {
                attribution: a || "undefined",
                logLevel: "WARN",
              });
            }
          };
        };
      })(ue_csm);

      var ue_err_chan = "jserr-rw";
      (function (d, e) {
        function h(f, b) {
          if (!(a.ec > a.mxe) && f) {
            a.ter.push(f);
            b = b || {};
            var c = f.logLevel || b.logLevel;
            (c && c !== k && c !== m && c !== n && c !== p) || a.ec++;
            (c && c != k) || a.ecf++;
            b.pageURL = "" + (e.location ? e.location.href : "");
            b.logLevel = c;
            b.attribution = f.attribution || b.attribution;
            a.erl.push({ ex: f, info: b });
          }
        }
        function l(a, b, c, e, g) {
          d.ueLogError(
            {
              m: a,
              f: b,
              l: c,
              c: "" + e,
              err: g,
              fromOnError: 1,
              args: arguments,
            },
            g ? { attribution: g.attribution, logLevel: g.logLevel } : void 0
          );
          return !1;
        }
        var k = "FATAL",
          m = "ERROR",
          n = "WARN",
          p = "DOWNGRADED",
          a = {
            ec: 0,
            ecf: 0,
            pec: 0,
            ts: 0,
            erl: [],
            ter: [],
            buffer: [],
            mxe: 50,
            startTimer: function () {
              a.ts++;
              setInterval(function () {
                d.ue && a.pec < a.ec && d.uex("at");
                a.pec = a.ec;
              }, 1e4);
            },
          };
        l.skipTrace = 1;
        h.skipTrace = 1;
        h.isStub = 1;
        d.ueLogError = h;
        d.ue_err = a;
        e.onerror = l;
      })(ue_csm, window);

      var ue_id = "9YA1BSP048PJJJN9F603",
        ue_url = "/ap/uedata",
        ue_navtiming = 1,
        ue_mid = "ATVPDKIKX0DER",
        ue_sid = "146-1660480-2929262",
        ue_sn = "www.amazon.com",
        ue_furl = "fls-na.amazon.com",
        ue_surl =
          "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod",
        ue_int = 0,
        ue_fcsn = 1,
        ue_urt = 3,
        ue_rpl_ns = "cel-rpl",
        ue_ddq = 1,
        ue_fpf =
          "//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:146-1660480-2929262:9YA1BSP048PJJJN9F603$uedata=s:",
        ue_sbuimp = 1,
        ue_ibft = 0,
        ue_sswmts = 0,
        ue_jsmtf = 0,
        ue_fnt = 0,
        ue_lpsi = 6000,
        ue_no_counters = 0,
        ue_lob = "0",
        ue_sjslob = 0,
        ue_swi = 1;
      var ue_viz = function () {
        (function (b, f, d) {
          function g() {
            return (!(p in d) || 0 < d[p]) && (!(q in d) || 0 < d[q]);
          }
          function h(c) {
            if (b.ue.viz.length < w && !r) {
              var a = c.type;
              c = c.originalEvent;
              (/^focus./.test(a) &&
                c &&
                (c.toElement || c.fromElement || c.relatedTarget)) ||
                ((a = g()
                  ? f[s] || ("blur" == a || "focusout" == a ? t : u)
                  : t),
                  b.ue.viz.push(a + ":" + (+new Date() - b.ue.t0)),
                  a == u && (b.ue.isl && x("at"), (r = 1)));
            }
          }
          for (
            var r = 0,
            x = b.uex,
            a,
            k,
            l,
            s,
            v = ["", "webkit", "o", "ms", "moz"],
            e = 0,
            m = 1,
            u = "visible",
            t = "hidden",
            p = "innerWidth",
            q = "innerHeight",
            w = 20,
            n = 0;
            n < v.length && !e;
            n++
          )
            if (
              ((a = v[n]),
                (k = (a ? a + "H" : "h") + "idden"),
                (e = "boolean" == typeof f[k]))
            )
              (l = a + "visibilitychange"),
                (s = (a ? a + "V" : "v") + "isibilityState");
          h({});
          e && f.addEventListener(l, h, 0);
          m = g() ? 1 : 0;
          d.addEventListener(
            "resize",
            function () {
              var a = g() ? 1 : 0;
              m !== a && ((m = a), h({}));
            },
            { passive: !0 }
          );
          b.ue && e && (b.ue.pageViz = { event: l, propHid: k });
        })(ue_csm, ue_csm.document, ue_csm.window);
      };

      (function (d, h, N) {
        function H(a) {
          return a && a.replace && a.replace(/^\s+|\s+$/g, "");
        }
        function u(a) {
          return "undefined" === typeof a;
        }
        function B(a, b) {
          for (var c in b) b[v](c) && (a[c] = b[c]);
        }
        function I(a) {
          try {
            var b = N.cookie.match(RegExp("(^| )" + a + "=([^;]+)"));
            if (b) return b[2].trim();
          } catch (c) { }
        }
        function O(k, b, c) {
          var q = (x || {}).type;
          if ("device" !== c || (2 !== q && 1 !== q))
            k &&
              ((d.ue_id = a.id = a.rid = k),
                w &&
                (w = w.replace(/((.*?:){2})(\w+)/, function (a, b) {
                  return b + k;
                })),
                D && (e("id", D, k), (D = 0))),
              b &&
              (w &&
                (w = w.replace(/(.*?:)(\w|-)+/, function (a, c) {
                  return c + b;
                })),
                (d.ue_sid = b)),
              c && a.tag("page-source:" + c),
              (d.ue_fpf = w);
        }
        function P() {
          var a = {};
          return function (b) {
            b && (a[b] = 1);
            b = [];
            for (var c in a) a[v](c) && b.push(c);
            return b;
          };
        }
        function y(d, b, c, q) {
          q = q || +new E();
          var g, m;
          if (b || u(c)) {
            if (d)
              for (m in ((g = b ? e("t", b) || e("t", b, {}) : a.t),
                (g[d] = q),
                c))
                c[v](m) && e(m, b, c[m]);
            return q;
          }
        }
        function e(d, b, c) {
          var e = b && b != a.id ? a.sc[b] : a;
          e || (e = a.sc[b] = {});
          "id" === d && c && (Q = 1);
          return (e[d] = c || e[d]);
        }
        function R(d, b, c, e, g) {
          c = "on" + c;
          var m = b[c];
          "function" === typeof m ? d && (a.h[d] = m) : (m = function () { });
          b[c] = function (a) {
            g ? (e(a), m(a)) : (m(a), e(a));
          };
          b[c] && (b[c].isUeh = 1);
        }
        function S(k, b, c, q) {
          function p(b, c) {
            var d = [b],
              f = 0,
              g = {},
              m,
              h;
            c ? (d.push("m=1"), (g[c] = 1)) : (g = a.sc);
            for (h in g)
              if (g[v](h)) {
                var q = e("wb", h),
                  p = e("t", h) || {},
                  n = e("t0", h) || a.t0,
                  l;
                if (c || 2 == q) {
                  q = q ? f++ : "";
                  d.push("sc" + q + "=" + h);
                  for (l in p)
                    u(p[l]) ||
                      null === p[l] ||
                      d.push(l + q + "=" + (p[l] - n));
                  d.push("t" + q + "=" + p[k]);
                  if (e("ctb", h) || e("wb", h)) m = 1;
                }
              }
            !J && m && d.push("ctb=1");
            return d.join("&");
          }
          function m(b, c, f, e, g) {
            if (b) {
              var k = d.ue_err;
              d.ue_url &&
                !e &&
                !g &&
                b &&
                0 < b.length &&
                ((e = new Image()),
                  a.iel.push(e),
                  (e.src = b),
                  a.count && a.count("postbackImageSize", b.length));
              w
                ? (g = h.encodeURIComponent) &&
                b &&
                ((e = new Image()),
                  (b = "" + d.ue_fpf + g(b) + ":" + (+new E() - d.ue_t0)),
                  a.iel.push(e),
                  (e.src = b))
                : a.log && (a.log(b, "uedata", { n: 1 }), a.ielf.push(b));
              k && !k.ts && k.startTimer();
              a.b && ((k = a.b), (a.b = ""), m(k, c, f, 1));
            }
          }
          function A(b) {
            var c = x ? x.type : F,
              d = 2 == c || a.isBFonMshop,
              c = c && !d,
              f = a.bfini;
            if (!Q || a.isBFCache)
              f && 1 < f && ((b += "&bfform=1"), c || (a.isBFT = f - 1)),
                d && ((b += "&bfnt=1"), (a.isBFT = a.isBFT || 1)),
                a.ssw &&
                a.isBFT &&
                (a.isBFonMshop && (a.isNRBF = 0),
                  u(a.isNRBF) &&
                  ((d = a.ssw(a.oid)),
                    d.e || u(d.val) || (a.isNRBF = 1 < d.val ? 0 : 1)),
                  u(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)),
                a.isBFT && !a.isNRBF && (b += "&bft=" + a.isBFT);
            return b;
          }
          if (!a.paused && (b || u(c))) {
            for (var l in c) c[v](l) && e(l, b, c[l]);
            a.isBFonMshop || y("pc", b, c);
            l = "ld" === k && b && e("wb", b);
            var s = e("id", b) || a.id;
            l ||
              s === a.oid ||
              ((D = b),
                ba(s, (e("t", b) || {}).tc || +e("t0", b), +e("t0", b)));
            var s = e("id", b) || a.id,
              t = e("id2", b),
              f = a.url + "?" + k + "&v=" + a.v + "&id=" + s,
              J = e("ctb", b) || e("wb", b),
              z;
            J && (f += "&ctb=" + J);
            t && (f += "&id2=" + t);
            1 < d.ueinit && (f += "&ic=" + d.ueinit);
            if (!(("ld" != k && "ul" != k) || (b && b != s))) {
              if ("ld" == k) {
                try {
                  h[K] && h[K].isUeh && (h[K] = null);
                } catch (I) { }
                if (h.chrome) for (t = 0; t < L.length; t++) T(G, L[t]);
                (t = N.ue_backdetect) && t.ue_back && t.ue_back.value++;
                d._uess && (z = d._uess());
                a.isl = 1;
              }
              a._bf && (f += "&bf=" + a._bf());
              d.ue_navtiming &&
                g &&
                (e("ctb", s, "1"), a.isBFonMshop || y("tc", F, F, M));
              !C ||
                a.isBFonMshop ||
                U ||
                (g &&
                  B(a.t, {
                    na_: g.navigationStart,
                    ul_: g.unloadEventStart,
                    _ul: g.unloadEventEnd,
                    rd_: g.redirectStart,
                    _rd: g.redirectEnd,
                    fe_: g.fetchStart,
                    lk_: g.domainLookupStart,
                    _lk: g.domainLookupEnd,
                    co_: g.connectStart,
                    _co: g.connectEnd,
                    sc_: g.secureConnectionStart,
                    rq_: g.requestStart,
                    rs_: g.responseStart,
                    _rs: g.responseEnd,
                    dl_: g.domLoading,
                    di_: g.domInteractive,
                    de_: g.domContentLoadedEventStart,
                    _de: g.domContentLoadedEventEnd,
                    _dc: g.domComplete,
                    ld_: g.loadEventStart,
                    _ld: g.loadEventEnd,
                    ntd:
                      ("function" !== typeof C.now || u(M)
                        ? 0
                        : new E(M + C.now()) - new E()) + a.t0,
                  }),
                  x &&
                  B(a.t, { ty: x.type + a.t0, rc: x.redirectCount + a.t0 }),
                  (U = 1));
              a.isBFonMshop || B(a.t, { hob: d.ue_hob, hoe: d.ue_hoe });
              a.ifr && (f += "&ifr=1");
            }
            y(k, b, c, q);
            var r, n;
            l || (b && b !== s) || ca(b);
            (c = d.ue_mbl) && c.cnt && !l && (f += c.cnt());
            l ? e("wb", b, 2) : "ld" == k && (a.lid = H(s));
            for (r in a.sc) if (1 == e("wb", r)) break;
            if (l) {
              if (a.s) return;
              f = p(f, null);
            } else
              (c = p(f, null)),
                c != f && ((c = A(c)), (a.b = c)),
                z && (f += z),
                (f = p(f, b || a.id));
            f = A(f);
            if (a.b || l) for (r in a.sc) 2 == e("wb", r) && delete a.sc[r];
            z = 0;
            a._rt && (f += "&rt=" + a._rt());
            c = h.csa;
            if (!l && c)
              for (n in ((r = e("t", b) || {}), (c = c("PageTiming")), r))
                r[v](n) && c("mark", da[n] || n, r[n]);
            l ||
              ((a.s = 0),
                (n = d.ue_err) &&
                0 < n.ec &&
                n.pec < n.ec &&
                ((n.pec = n.ec), (f += "&ec=" + n.ec + "&ecf=" + n.ecf)),
                (z = e("ctb", b)),
                "ld" !== k || b || a.markers
                  ? a.markers && a.isl && !l && b && B(a.markers, e("t", b))
                  : ((a.markers = {}), B(a.markers, e("t", b))),
                e("t", b, {}));
            a.tag &&
              a.tag().length &&
              ((f += "&csmtags=" + a.tag().join("|")), (a.tag = P()));
            n = a.viz || [];
            (r = n.length) && (f += "&viz=" + n.splice(0, r).join("|"));
            u(d.ue_pty) ||
              (f +=
                "&pty=" +
                d.ue_pty +
                "&spty=" +
                d.ue_spty +
                "&pti=" +
                d.ue_pti);
            a.tabid && (f += "&tid=" + a.tabid);
            a.aftb && (f += "&aftb=1");
            !a._ui || (b && b != s) || (f += a._ui());
            f += "&lob=" + (d.ue_lob || "0");
            a.a = f;
            m(
              f,
              k,
              z,
              l,
              b && "string" === typeof b && -1 !== b.indexOf("csa:")
            );
          }
        }
        function ca(a) {
          var b = h.ue_csm_markers || {},
            c;
          for (c in b) b[v](c) && y(c, a, F, b[c]);
        }
        function A(a, b, c) {
          c = c || h;
          if (c[V]) c[V](a, b, !1);
          else if (c[W]) c[W]("on" + a, b);
        }
        function T(a, b, c) {
          c = c || h;
          if (c[X]) c[X](a, b, !1);
          else if (c[Y]) c[Y]("on" + a, b);
        }
        function Z() {
          function a() {
            d.onUl();
          }
          function b(a) {
            return function () {
              c[a] || ((c[a] = 1), S(a));
            };
          }
          var c = {},
            e,
            g;
          d.onLd = b("ld");
          d.onLdEnd = b("ld");
          d.onUl = b("ul");
          e = { stop: b("os") };
          h.chrome ? (A(G, a), L.push(a)) : (e[G] = d.onUl);
          for (g in e) e[v](g) && R(0, h, g, e[g]);
          d.ue_viz && ue_viz();
          A("load", d.onLd);
          y("ue");
        }
        function ba(e, b, c) {
          var g = d.ue_mbl,
            p = h.csa,
            m = p && p("SPA"),
            p = p && p("PageTiming");
          g && g.ajax && g.ajax(b, c);
          m &&
            p &&
            (m("newPage", { requestId: e, transitionType: "soft" }),
              p("mark", "transitionStart", b));
          a.tag("ajax-transition");
        }
        d.ueinit = (d.ueinit || 0) + 1;
        var a = (d.ue = d.ue || {});
        a.t0 = h.aPageStart || d.ue_t0;
        a.id = d.ue_id;
        a.url = d.ue_url;
        a.rid = d.ue_id;
        a.a = "";
        a.b = "";
        a.h = {};
        a.s = 1;
        a.t = {};
        a.sc = {};
        a.iel = [];
        a.ielf = [];
        a.viz = [];
        a.v = "0.297084.0";
        a.paused = !1;
        var v = "hasOwnProperty",
          G = "beforeunload",
          K = "on" + G,
          V = "addEventListener",
          X = "removeEventListener",
          W = "attachEvent",
          Y = "detachEvent",
          da = {
            cf: "criticalFeature",
            af: "aboveTheFold",
            fn: "functional",
            fp: "firstPaint",
            fcp: "firstContentfulPaint",
            bb: "bodyBegin",
            be: "bodyEnd",
            ld: "loaded",
          },
          E = h.Date,
          C = h.performance || h.webkitPerformance,
          g = (C || {}).timing,
          x = (C || {}).navigation,
          M = (g || {}).navigationStart,
          w = d.ue_fpf,
          Q = 0,
          U = 0,
          L = [],
          D = 0,
          F;
        a.oid = H(a.id);
        a.lid = H(a.id);
        a._t0 = a.t0;
        a.tag = P();
        a.ifr = h.top !== h.self || h.frameElement ? 1 : 0;
        a.markers = null;
        a.attach = A;
        a.detach = T;
        if ("000-0000000-8675309" === d.ue_sid) {
          var $ = I("cdn-rid"),
            aa = I("session-id");
          $ && aa && O($, aa, "cdn");
        }
        d.uei = Z;
        d.ueh = R;
        d.ues = e;
        d.uet = y;
        d.uex = S;
        a.reset = O;
        a.pause = function (d) {
          a.paused = d;
        };
        Z();
      })(ue_csm, ue_csm.window, ue_csm.document);

      ue.stub(ue, "log");
      ue.stub(ue, "onunload");
      ue.stub(ue, "onflush");
      (function (b) {
        function g() {
          var a = {
            requestId: b.ue_id || "rid",
            server: b.ue_sn || "sn",
            obfuscatedMarketplaceId: b.ue_mid || "mid",
          };
          b.ue_sjslob && (a.lob = b.ue_lob || "0");
          return a;
        }
        var a = b.ue,
          h = 1 === b.ue_no_counters;
        a.cv = {};
        a.cv.scopes = {};
        a.cv.buffer = [];
        a.count = function (b, f, c) {
          var e = {},
            d = a.cv,
            g = c && 0 === c.c;
          e.counter = b;
          e.value = f;
          e.t = a.d();
          c &&
            c.scope &&
            ((d = a.cv.scopes[c.scope] = a.cv.scopes[c.scope] || {}),
              (e.scope = c.scope));
          if (void 0 === f) return d[b];
          d[b] = f;
          d = 0;
          c && c.bf && (d = 1);
          h ||
            (ue_csm.ue_sclog || !a.clog || 0 !== d || g
              ? a.log && a.log(e, "csmcount", { c: 1, bf: d })
              : a.clog(e, "csmcount", { bf: d }));
          a.cv.buffer.push({ c: b, v: f });
        };
        a.count("baselineCounter2", 1);
        a &&
          a.event &&
          (a.event(g(), "csm", "csm.CSMBaselineEvent.4"),
            a.count("nexusBaselineCounter", 1, { bf: 1 }));
      })(ue_csm);

      (function (g, h, l) {
        if (
          "function" === typeof h.addEventListener &&
          "function" === typeof l.querySelectorAll
        ) {
          var e,
            r = ["mouseenter", "mouseleave"],
            t =
              "click dblclick mousedown mouseover mouseout touchstart keydown keypress MSPointerDown pointerdown focusin"
                .split(" ")
                .concat(r),
            n = !1,
            p = [];
          var u = function (a) {
            for (var b = []; a;) b.push(a), (a = a.parentNode);
            return b;
          };
          var q = function (a, b) {
            var d = -1,
              c;
            for (c = 0; c < b.length; c++)
              if (b[c] === a) {
                d = c;
                break;
              }
            return d;
          };
          var v = function (a, b) {
            a = q(a, b);
            0 <= a && b.splice(a, 1);
          };
          var x = function (a) {
            a = u(a);
            for (var b, d, c = 0; c < a.length; c++)
              if (((d = a[c]), (b = d.nodeName) && b !== l.nodeName)) {
                b = b.toLowerCase();
                if (d.id) return b + "#" + d.id + (f ? ">" + f : "");
                (d = d.getAttribute("class")) &&
                  (b = b + "." + d.split(" ").join("."));
                var f = b + (f ? ">" + f : "");
              }
            return f;
          };
          var y = function (a) {
            return a.replace(/[^\w.:\-]/g, function (a) {
              return "#" === a ? "::" : ">" === a ? ":-" : "_";
            });
          };
          var w = function (a, b) {
            if (g.ue && g.ue.count && g.ueLogError) {
              a = x(a);
              var d = y(a);
              var c =
                "degraded" === b
                  ? "A UX degrading element has entered the viewport: " + a
                  : "A " + b + " was not handled on element: " + a;
              g.ueLogError(
                { m: c, fromOnError: 1 },
                { logLevel: "ERROR", attribution: a, message: c }
              );
              b = ["TNR", "TNR:" + b, "TNR:" + d, "TNR:" + b + ":" + d];
              for (e = 0; e < b.length; e++)
                g.ue.count(b[e], (g.ue.count(b[e]) || 0) + 1);
            }
          };
          var z = function (a) {
            a = a.getBoundingClientRect();
            return (
              a.top < a.bottom &&
              a.left < a.right &&
              0 <= a.bottom &&
              a.top <= h.innerHeight &&
              0 <= a.right &&
              a.left <= h.innerWidth
            );
          };
          var m = function () {
            n ||
              ((n = !0),
                setTimeout(function () {
                  [].forEach.call(
                    l.querySelectorAll("[data-ux-degraded]"),
                    function (a) {
                      z(a)
                        ? 0 > q(a, p) && (p.push(a), w(a, "degraded"))
                        : v(a, p);
                    }
                  );
                  n = !1;
                }, 250));
          };
          h.addEventListener("scroll", m);
          h.addEventListener("resize", m);
          m = function (a) {
            var b = !1,
              d = 0 > q(a, r);
            l.addEventListener(
              a,
              function (c) {
                if (!b) {
                  b = !0;
                  var f = [],
                    e = d ? u(c.target) : [c.target],
                    g,
                    h;
                  for (g = 0; g < e.length; g++) {
                    var k = e[g];
                    k.getAttribute &&
                      ("mouseover" === a &&
                        k === c.target &&
                        ((h = k.getAttribute("data-ux-jq-mouseenter")) ||
                          "" === h) &&
                        f.push(k),
                        ((h = k.getAttribute("data-ux-" + a)) || "" === h) &&
                        f.push(k));
                  }
                  f.length
                    ? ((c.ack = c.acknowledge =
                      function (a) {
                        a = a || c.currentTarget;
                        v(a, f);
                      }),
                      setTimeout(function () {
                        var c;
                        for (c = 0; c < f.length; c++) w(f[c], a);
                        b = !1;
                      }, 250))
                    : (b = !1);
                }
              },
              !0
            );
          };
          for (e = 0; e < t.length; e++) m(t[e]);
        }
      })(ue_csm, window, document);

      var ue_hoe = +new Date();
    }
    window.ueinit = window.ue_ihb;

!(function () {
  function n(n, t) {
    var r = i(n);
    return t && (r = r("instance", t)), r;
  }
  var r = [],
    c = 0,
    i = function (t) {
      return function () {
        var n = c++;
        return (
          r.push([t, [].slice.call(arguments, 0), n, { time: Date.now() }]),
          i(n)
        );
      };
    };
  (n._s = r), (this.csa = n);
})();
csa("Config", {});
if (window.csa) {
  csa("Config", {
    "Events.Namespace": "csa",
    ObfuscatedMarketplaceId: "ATVPDKIKX0DER",
    "Events.SushiEndpoint":
      "https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod",
    "CacheDetection.RequestID": "9YA1BSP048PJJJN9F603",
    "CacheDetection.Callback": window.ue && ue.reset,
    "LCP.elementDedup": 1,
    lob: "0",
  });

  csa("Events")("setEntity", {
    page: {
      requestId: "9YA1BSP048PJJJN9F603",
      meaningful: "interactive",
    },
    session: { id: "146-1660480-2929262" },
  });
}
!(function (r) {
  var e,
    i,
    o = "splice",
    u = r.csa,
    f = {},
    c = {},
    a = r.csa._s,
    s = 0,
    l = 0,
    g = -1,
    h = {},
    v = {},
    d = {},
    n = Object.keys,
    p = function () {};
  function t(n, t) {
    return u(n, t);
  }
  function m(n, t) {
    var r = c[n] || {};
    k(r, t), (c[n] = r), l++, S(U, 0);
  }
  function w(n, t, r) {
    var i = !0;
    return (
      (t = D(t)),
      r &&
        r.buffered &&
        (i = (d[n] || []).every(function (n) {
          return !1 !== t(n);
        })),
      i
        ? (h[n] || (h[n] = []),
          h[n].push(t),
          function () {
            !(function (n, t) {
              var r = h[n];
              r && r[o](r.indexOf(t), 1);
            })(n, t);
          })
        : p
    );
  }
  function b(n, t) {
    if (((t = D(t)), n in v)) return t(v[n]), p;
    return w(n, function (n) {
      return t(n), !1;
    });
  }
  function y(n, t) {
    if ((u("Errors")("logError", n), f.DEBUG)) throw t || n;
  }
  function E() {
    return Math.abs((4294967295 * Math.random()) | 0).toString(36);
  }
  function D(n, t) {
    return function () {
      try {
        return n.apply(this, arguments);
      } catch (n) {
        y(n.message || n, n);
      }
    };
  }
  function S(n, t) {
    return r.setTimeout(D(n), t);
  }
  function U() {
    for (var n = 0; n < a.length; ) {
      var t = a[n],
        r = t[0] in c;
      if (!r && !i) return void (s = a.length);
      r ? (a[o]((s = n), 1), I(t)) : n++;
    }
    g = l;
  }
  function I(n) {
    var t = c[n[0]],
      r = n[1],
      i = r[0];
    if (!t || !t[i]) return y("Undefined function: " + t + "/" + i);
    (e = n[3]), (c[n[2]] = t[i].apply(t, r.slice(1)) || {}), (e = 0);
  }
  function O() {
    (i = 1), U();
  }
  function k(t, r) {
    n(r).forEach(function (n) {
      t[n] = r[n];
    });
  }
  b("$beforeunload", O),
    m("Config", {
      instance: function (n) {
        k(f, n);
      },
    }),
    (u.plugin = D(function (n) {
      n(t);
    })),
    (t.config = f),
    (t.register = m),
    (t.on = w),
    (t.once = b),
    (t.blank = p),
    (t.emit = function (n, t, r) {
      for (var i = h[n] || [], e = 0; e < i.length; )
        !1 === i[e](t) ? i[o](e, 1) : e++;
      (v[n] = t || {}),
        r &&
          r.buffered &&
          (d[n] || (d[n] = []),
          100 <= d[n].length && d[n].shift(),
          d[n].push(t || {}));
    }),
    (t.UUID = function () {
      return [E(), E(), E(), E()].join("-");
    }),
    (t.time = function (n) {
      var t = e ? new Date(e.time) : new Date();
      return "ISO" === n ? t.toISOString() : t.getTime();
    }),
    (t.error = y),
    (t.warn = function (n, t) {
      if ((u("Errors")("logWarn", n), f.DEBUG)) throw t || n;
    }),
    (t.exec = D),
    (t.timeout = S),
    (t.interval = function (n, t) {
      return r.setInterval(D(n), t);
    }),
    ((t.global = r).csa._s.push = function (n) {
      n[0] in c && (!a.length || i)
        ? (I(n), a.length && g !== l && U())
        : a[o](s++, 0, n);
    }),
    U(),
    S(function () {
      S(O, f.SkipMissingPluginsTimeout || 5e3);
    }, 1);
})("undefined" != typeof window ? window : global);
csa.plugin(function (o) {
  var f = "addEventListener",
    e = "requestAnimationFrame",
    t = o.exec,
    r = o.global,
    u = o.on;
  (o.raf = function (n) {
    if (r[e]) return r[e](t(n));
  }),
    (o.on = function (n, e, t, r) {
      if (n && "function" == typeof n[f]) {
        var i = o.exec(t);
        return (
          n[f](e, i, r),
          function () {
            n.removeEventListener(e, i, r);
          }
        );
      }
      return "string" == typeof n ? u(n, e, t, r) : o.blank;
    });
});
csa.plugin(function (o) {
  var t,
    n,
    r = {},
    e = "localStorage",
    c = "sessionStorage",
    a = "local",
    i = "session",
    u = o.exec;
  function s(e, t) {
    var n;
    try {
      (r[t] = !!(n = o.global[e])), (n = n || {});
    } catch (e) {
      r[t] = !(n = {});
    }
    return n;
  }
  function f() {
    (t = t || s(e, a)), (n = n || s(c, i));
  }
  function l(e) {
    return e && e[i] ? n : t;
  }
  (o.store = u(function (e, t, n) {
    f();
    var o = l(n);
    return e ? (t ? void (o[e] = t) : o[e]) : Object.keys(o);
  })),
    (o.storageSupport = u(function () {
      return f(), r;
    })),
    (o.deleteStored = u(function (e, t) {
      f();
      var n = l(t);
      if ("function" == typeof e)
        for (var o in n) n.hasOwnProperty(o) && e(o, n[o]) && delete n[o];
      else delete n[e];
    }));
});
csa.plugin(function (n) {
  n.types = {
    ovl: function (n) {
      var r = [];
      if (n) for (var i in n) n.hasOwnProperty(i) && r.push(n[i]);
      return r;
    },
  };
});
csa.plugin(function (c) {
  var e = c.config,
    n = "Errors";
  function r(n) {
    return function (e) {
      c("Metrics", { producerId: "csa", dimensions: { message: e } })(
        "recordMetric",
        n,
        1
      );
    };
  }
  function o(r) {
    var o,
      t,
      l = c("Events", { producerId: r.producerId, lob: e.lob || "0" }),
      i = ["name", "type", "csm", "adb"],
      u = { url: "pageURL", file: "f", line: "l", column: "c" };
    this.log = function (e) {
      if (
        !(function (e) {
          if (!e) return !0;
          for (var n in e) return !1;
          return !0;
        })(e)
      ) {
        var n = r.logOptions || {
          ent: { page: ["pageType", "subPageType", "requestId"] },
        };
        l(
          "log",
          (function (n) {
            return (
              (o = c.UUID()),
              (t = {
                messageId: o,
                schemaId: r.schemaId || "<ns>.Error.6",
                errorMessage: n.m || null,
                attribution: n.attribution || null,
                logLevel: "FATAL",
                url: null,
                file: null,
                line: null,
                column: null,
                stack: n.s || [],
                context: n.cinfo || {},
                metadata: {},
              }),
              n.logLevel && (t.logLevel = "" + n.logLevel),
              i.forEach(function (e) {
                n[e] && (t.metadata[e] = n[e]);
              }),
              "INFO" === n.logLevel ||
                Object.keys(u).forEach(function (e) {
                  ("number" != typeof n[u[e]] && "string" != typeof n[u[e]]) ||
                    (t[e] = "" + n[u[e]]);
                }),
              t
            );
          })(e),
          n
        );
      }
    };
  }
  e["KillSwitch." + n] ||
    c.register(n, {
      instance: function (e) {
        return new o(e || {});
      },
      logError: r("jsError"),
      logWarn: r("jsWarn"),
    });
});
csa.plugin(function (o) {
  var r,
    e,
    n,
    t,
    a,
    i = "function",
    u = "willDisappear",
    f = "$app.",
    p = "$document.",
    c = "focus",
    s = "blur",
    d = "active",
    l = "resign",
    $ = o.global,
    b = o.exec,
    m = o.config["Transport.AnonymizeRequests"] || !1,
    g = o("Events"),
    h = $.location,
    v = $.document || {},
    y = $.P || {},
    P = (($.performance || {}).navigation || {}).type,
    w = o.on,
    k = o.emit,
    E = v.hidden,
    T = {};
  h &&
    v &&
    (w($, "beforeunload", D),
    w($, "pagehide", D),
    w(
      v,
      "visibilitychange",
      R(p, function () {
        return v.visibilityState || "unknown";
      })
    ),
    w(v, c, R(p + c)),
    w(v, s, R(p + s)),
    y.when &&
      y.when("mash").execute(function (e) {
        e &&
          (w(e, "appPause", R(f + "pause")),
          w(e, "appResume", R(f + "resume")),
          R(f + "deviceready")(),
          $.cordova && $.cordova.platformId && R(f + cordova.platformId)(),
          w(v, d, R(f + d)),
          w(v, l, R(f + l)));
      }),
    (e = $.app || {}),
    (n = b(function () {
      k(f + "willDisappear"), D();
    })),
    (a = typeof (t = e[u]) == i),
    (e[u] = b(function () {
      n(), a && t();
    })),
    $.app || ($.app = e),
    "complete" === v.readyState ? A() : w($, "load", A),
    E ? S() : x(),
    o.on("$app.blur", S),
    o.on("$app.focus", x),
    o.on("$document.blur", S),
    o.on("$document.focus", x),
    o.on("$document.hidden", S),
    o.on("$document.visible", x),
    o.register("SPA", { newPage: I }),
    I({
      transitionType:
        { 0: "hard", 1: "refresh", 2: "back-button" }[P] || "unknown",
    }));
  function I(n, e) {
    var t = !!r,
      a = (e = e || {}).keepPageAttributes;
    t && (k("$beforePageTransition"), k("$pageTransition")),
      t && !a && g("removeEntity", "page"),
      (r = o.UUID()),
      a
        ? (T.id = r)
        : (T = {
            schemaId: "<ns>.PageEntity.2",
            id: r,
            url: m ? h.href.split("?")[0] : h.href,
            server: h.hostname,
            path: h.pathname,
            referrer: m ? v.referrer.split("?")[0] : v.referrer,
            title: v.title,
          }),
      Object.keys(n || {}).forEach(function (e) {
        T[e] = n[e];
      }),
      g("setEntity", { page: T }),
      k("$pageChange", T, { buffered: 1 }),
      t && k("$afterPageTransition");
  }
  function A() {
    k("$load"), k("$ready"), k("$afterload");
  }
  function D() {
    k("$ready"), k("$beforeunload"), k("$unload"), k("$afterunload");
  }
  function S() {
    E || (k("$visible", !1, { buffered: 1 }), (E = !0));
  }
  function x() {
    E && (k("$visible", !0, { buffered: 1 }), (E = !1));
  }
  function R(n, t) {
    return b(function () {
      var e = typeof t == i ? n + t() : n;
      k(e);
    });
  }
});
csa.plugin(function (c) {
  var e = "Events",
    n = "UNKNOWN",
    s = "id",
    a = "all",
    i = "messageId",
    o = "timestamp",
    u = "producerId",
    r = "application",
    f = "obfuscatedMarketplaceId",
    d = "entities",
    l = "schemaId",
    p = "version",
    v = "attributes",
    g = "<ns>",
    b = "lob",
    t = "session",
    h = c.config,
    m = (c.global.location || {}).host,
    I = h[e + ".Namespace"] || "csa_other",
    y = h.Application || "Other" + (m ? ":" + m : ""),
    O = h["Transport.AnonymizeRequests"] || !1,
    E = c("Transport"),
    U = {},
    A = function (e, t) {
      Object.keys(e).forEach(t);
    };
  function N(n, i, o) {
    A(i, function (e) {
      var t = o === a || (o || {})[e];
      e in n || (n[e] = { version: 1, id: i[e][s] || c.UUID() }),
        S(n[e], i[e], t);
    });
  }
  function S(t, n, i) {
    A(n, function (e) {
      !(function (e, t, n) {
        return "string" != typeof t && e !== p
          ? c.error("Attribute is not of type string: " + e)
          : !0 === n || 1 === n || e === s || !!~(n || []).indexOf(e);
      })(e, n[e], i) || (t[e] = n[e]);
    });
  }
  function k(o, e, r) {
    A(e, function (e) {
      var t = o[e];
      if (t[l]) {
        var n = {},
          i = {};
        (n[s] = t[s]),
          (n[u] = t[u] || r[u]),
          (n[l] = t[l]),
          (n[p] = t[p]++),
          (n[v] = i),
          w(n, r),
          S(i, t, 1),
          D(i),
          E("log", n);
      }
    });
  }
  function w(e, t) {
    (e[o] = (function (e) {
      return (
        "number" == typeof e && (e = new Date(e).toISOString()),
        e || c.time("ISO")
      );
    })(e[o])),
      (e[i] = e[i] || c.UUID()),
      (e[r] = y),
      (e[f] = h.ObfuscatedMarketplaceId || n),
      (e[l] = e[l].replace(g, I)),
      t && t[b] && (e[b] = t[b]);
  }
  function D(e) {
    delete e[p], delete e[l], delete e[u];
  }
  function T(o) {
    var r = {};
    (this.log = function (e, t) {
      var n = {},
        i = (t || {}).ent;
      return e
        ? "string" != typeof e[l]
          ? c.error("A valid schema id is required for the event")
          : (w(e, o),
            N(n, U, i),
            N(n, r, i),
            N(n, e[d] || {}, i),
            A(n, function (e) {
              D(n[e]);
            }),
            (e[u] = o[u]),
            (e[d] = n),
            t && t[b] && (e[b] = t[b]),
            void E("log", e, t))
        : c.error("The event cannot be undefined");
    }),
      (this.setEntity = function (e) {
        O && delete e[t], N(r, e, a), k(r, e, o);
      });
  }
  h["KillSwitch." + e] ||
    c.register(e, {
      setEntity: function (e) {
        O && delete e[t],
          c.emit("$entities.set", e, { buffered: 1 }),
          N(U, e, a),
          k(U, e, { producerId: "csa", lob: h[b] || "0" });
      },
      removeEntity: function (e) {
        delete U[e];
      },
      instance: function (e) {
        return new T(e);
      },
    });
});
csa.plugin(function (s) {
  var c,
    g = "Transport",
    l = "post",
    f = "preflight",
    r = "csa.cajun.",
    i = "store",
    a = "deleteStored",
    u = "sendBeacon",
    t = "__merge",
    e = "messageId",
    n = ".FlushInterval",
    o = 0,
    d = s.config[g + ".BufferSize"] || 2e3,
    h = s.config[g + ".RetryDelay"] || 1500,
    p = s.config[g + ".AnonymizeRequests"] || !1,
    v = {},
    y = 0,
    m = [],
    E = s.global,
    R = E.document,
    b = s.timeout,
    k = E.Object.keys,
    w = s.config[g + n] || 5e3,
    I = w,
    O = s.config[g + n + ".BackoffFactor"] || 1,
    S = s.config[g + n + ".BackoffLimit"] || 3e4,
    B = 0;
  function T(n) {
    if (864e5 < s.time() - +new Date(n.timestamp))
      return s.warn("Event is too old: " + n);
    y < d &&
      (n[e] in v || ((v[n[e]] = n), y++),
      "function" == typeof n[t] && n[t](v[n[e]]),
      !B &&
        o &&
        (B = b(
          q,
          (function () {
            var n = I;
            return (I = Math.min(n * O, S)), n;
          })()
        )));
  }
  function q() {
    m.forEach(function (e) {
      var o = [];
      k(v).forEach(function (n) {
        var t = v[n];
        e.accepts(t) && o.push(t);
      }),
        o.length &&
          (e.chunks
            ? e.chunks(o).forEach(function (n) {
                D(e, n);
              })
            : D(e, o));
    }),
      (v = {}),
      (B = 0);
  }
  function D(t, e) {
    function o() {
      s[a](r + n);
    }
    var n = s.UUID();
    s[i](r + n, JSON.stringify(e)),
      [
        function (n, t, e) {
          var o = E.navigator || {},
            r = E.cordova || {};
          if (p) return 0;
          if (!o[u] || !n[l]) return 0;
          n[f] &&
            r &&
            "ios" === r.platformId &&
            !c &&
            ((new Image().src = n[f]().url), (c = 1));
          var i = n[l](t);
          if (!i.type && o[u](i.url, i.body)) return e(), 1;
        },
        function (n, t, e) {
          if (!n[l]) return 0;
          var o = n[l](t),
            r = o.url,
            i = o.body,
            c = o.type,
            f = new XMLHttpRequest(),
            a = 0;
          function u(n, t, e) {
            f.open("POST", n),
              (f.withCredentials = !p),
              e && f.setRequestHeader("Content-Type", e),
              f.send(t);
          }
          return (
            (f.onload = function () {
              f.status < 299
                ? e()
                : s.config[g + ".XHRRetries"] &&
                  a < 3 &&
                  b(function () {
                    u(r, i, c);
                  }, ++a * h);
            }),
            u(r, i, c),
            1
          );
        },
      ].some(function (n) {
        try {
          return n(t, e, o);
        } catch (n) {}
      });
  }
  k &&
    (s.once("$afterload", function () {
      (o = 1),
        (function (e) {
          (s[i]() || []).forEach(function (n) {
            if (!n.indexOf(r))
              try {
                var t = s[i](n);
                s[a](n), JSON.parse(t).forEach(e);
              } catch (n) {
                s.error(n);
              }
          });
        })(T),
        s.on(R, "visibilitychange", q, !1),
        q();
    }),
    s.once("$afterunload", function () {
      (o = 1), q();
    }),
    s.on("$afterPageTransition", function () {
      (y = 0), (I = w);
    }),
    s.register(g, {
      log: T,
      register: function (n) {
        m.push(n);
      },
    }));
});
csa.plugin(function (n) {
  var r = n.config["Events.SushiEndpoint"];
  n("Transport")("register", {
    accepts: function (n) {
      return n.schemaId;
    },
    post: function (n) {
      var t = n.map(function (n) {
        return { data: n };
      });
      return { url: r, body: JSON.stringify({ events: t }) };
    },
    preflight: function () {
      var n,
        t = /\/\/(.*?)\//.exec(r);
      return t && t[1] && (n = "https://" + t[1] + "/ping"), { url: n };
    },
    chunks: function (n) {
      for (var t = []; 500 < n.length; ) t.push(n.splice(0, 500));
      return t.push(n), t;
    },
  });
});
csa.plugin(function (n) {
  var t,
    a,
    o,
    r,
    e = n.config,
    i = "PageViews",
    d = e[i + ".ImpressionMinimumTime"] || 1e3,
    s = "hidden",
    c = "innerHeight",
    l = "innerWidth",
    g = "renderedTo",
    f = g + "Viewed",
    m = g + "Meaningful",
    u = g + "Impressed",
    p = 1,
    v = 2,
    h = 3,
    w = 4,
    y = 5,
    P = "loaded",
    b = 7,
    I = 8,
    T = n.global,
    E = n.on,
    V = n("Events", { producerId: "csa", lob: e.lob || "0" }),
    $ = T.document,
    M = {},
    S = {},
    H = y;
  function K(e) {
    if (!M[b]) {
      var i;
      if (
        ((M[e] = n.time()),
        (e !== h && e !== P) || (t = t || M[e]),
        t && H === w)
      )
        (a = a || M[e]),
          ((i = {})[m] = t - o),
          (i[f] = a - o),
          R("PageView.5", i),
          (r = r || n.timeout(j, d));
      if (
        ((e !== y && e !== p && e !== v) || (clearTimeout(r), (r = 0)),
        (e !== p && e !== v) ||
          R("PageRender.4", {
            transitionType: e === p ? "hard" : "soft",
          }),
        e === b)
      )
        ((i = {})[m] = t - o),
          (i[f] = a - o),
          (i[u] = M[e] - o),
          R("PageImpressed.3", i);
    }
  }
  function R(e, i) {
    S[e] ||
      ((i.schemaId = "<ns>." + e), V("log", i, { ent: "all" }), (S[e] = 1));
  }
  function W() {
    0 === T[c] && 0 === T[l]
      ? ((H = I),
        n("Events")("setEntity", { page: { viewport: "hidden-iframe" } }))
      : (H = $[s] ? y : w),
      K(H);
  }
  function j() {
    K(b), (r = 0);
  }
  function k() {
    var e = o ? v : p;
    (M = {}), (S = {}), (a = t = 0), (o = n.time()), K(e), W();
  }
  function q() {
    var e = $.readyState;
    "interactive" === e && K(h), "complete" === e && K(P);
  }
  e["KillSwitch." + i] ||
    ($ && void 0 !== $[s]
      ? (k(),
        E($, "visibilitychange", W, !1),
        E($, "readystatechange", q, !1),
        E("$afterPageTransition", k),
        E("$timing:loaded", q),
        n.once("$load", q))
      : n.warn("Page visibility not supported"));
});
csa.plugin(function (c) {
  var s = c.config["Interactions.ParentChainLength"] || 35,
    e = "click",
    r = "touches",
    f = "timeStamp",
    o = "length",
    u = "pageX",
    g = "pageY",
    p = "pageXOffset",
    h = "pageYOffset",
    m = 250,
    v = 5,
    d = 200,
    l = 0.5,
    t = { capture: !0, passive: !0 },
    X = c.global,
    Y = c.emit,
    n = c.on,
    x = X.Math.abs,
    a = (X.document || {}).documentElement || {},
    y = { x: 0, y: 0, t: 0, sX: 0, sY: 0 },
    N = { x: 0, y: 0, t: 0, sX: 0, sY: 0 };
  function b(t) {
    if (t.id) return "//*[@id='" + t.id + "']";
    var e = (function (t) {
        var e,
          n = 1;
        for (e = t.previousSibling; e; e = e.previousSibling)
          e.nodeName === t.nodeName && (n += 1);
        return n;
      })(t),
      n = t.nodeName;
    return (
      1 !== e && (n += "[" + e + "]"),
      t.parentNode && (n = b(t.parentNode) + "/" + n),
      n
    );
  }
  function I(t, e, n) {
    var a = c("Content", { target: n }),
      i = {
        schemaId: "<ns>.ContentInteraction.2",
        interaction: t,
        interactionData: e,
        messageId: c.UUID(),
      };
    if (n) {
      var r = b(n);
      r && (i.attribution = r);
      var o = (function (t) {
        for (
          var e = t, n = e.tagName, a = !1, i = t ? t.href : null, r = 0;
          r < s;
          r++
        ) {
          if (!e || !e.parentElement) {
            a = !0;
            break;
          }
          (n = (e = e.parentElement).tagName + "/" + n), (i = i || e.href);
        }
        return a || (n = ".../" + n), { pc: n, hr: i };
      })(n);
      o.pc && (i.interactionData.parentChain = o.pc),
        o.hr && (i.interactionData.href = o.hr);
    }
    a("log", i), Y("$content.interaction", { e: i, w: a });
  }
  function i(t) {
    I(e, { interactionX: "" + t.pageX, interactionY: "" + t.pageY }, t.target);
  }
  function C(t) {
    if (t && t[r] && 1 === t[r][o]) {
      var e = t[r][0];
      N = y = {
        e: t.target,
        x: e[u],
        y: e[g],
        t: t[f],
        sX: X[p],
        sY: X[h],
      };
    }
  }
  function D(t) {
    if (t && t[r] && 1 === t[r][o] && y && N) {
      var e = t[r][0],
        n = t[f],
        a = n - N.t,
        i = { e: t.target, x: e[u], y: e[g], t: n, sX: X[p], sY: X[h] };
      (N = i), d <= a && (y = i);
    }
  }
  function E(t) {
    if (t) {
      var e = x(y.x - N.x),
        n = x(y.y - N.y),
        a = x(y.sX - N.sX),
        i = x(y.sY - N.sY),
        r = t[f] - y.t;
      if ((m < (1e3 * e) / r && v < e) || (m < (1e3 * n) / r && v < n)) {
        var o = n < e;
        (o && a && e * l <= a) ||
          (!o && i && n * l <= i) ||
          I(
            (o ? "horizontal" : "vertical") + "-swipe",
            {
              interactionX: "" + y.x,
              interactionY: "" + y.y,
              endX: "" + N.x,
              endY: "" + N.y,
            },
            y.e
          );
      }
    }
  }
  n(a, e, i, t),
    n(a, "touchstart", C, t),
    n(a, "touchmove", D, t),
    n(a, "touchend", E, t);
});
csa.plugin(function (r) {
  var a,
    o,
    t,
    c,
    e,
    n = "MutationObserver",
    f = "observe",
    u = "disconnect",
    i = "mutObs",
    l = "_csa_flt",
    b = "_csa_llt",
    m = "_csa_mr",
    d = "_csa_mi",
    v = "lastChild",
    p = "length",
    _ = { childList: !0, subtree: !0 },
    g = 10,
    h = 25,
    s = 1e3,
    y = 4,
    O = r.global,
    k = O.document,
    w = k.body || k.documentElement,
    I = Date.now,
    L = [],
    B = [],
    M = [],
    Y = 0,
    $ = 0,
    x = 0,
    A = 1,
    C = [],
    D = [],
    E = 0,
    F = r.blank,
    N = { buffered: 1 },
    S = 0;
  function T(e) {
    r.global.ue_csa_ss_tag || r.emit("$csmTag:" + e, 0, N);
  }
  I && O[n]
    ? (T(i + "Yes"),
      (Y = 0),
      (o = new O[n](j)),
      (t = new O[n](V))[f](w, {
        attributes: !0,
        subtree: !0,
        attributeFilter: ["src"],
        attributeOldValue: !0,
      }),
      (F = r.on(O, "scroll", q, { passive: !0 })),
      r.once("$ready", H),
      A && (G(), (e = r.interval(z, s))),
      r.register("SpeedIndexBuffers", {
        getBuffers: function (e) {
          e && (H(), q(), e(Y, C, L, B, M), o && o[u](), t && t[u](), F());
        },
        registerListener: function (e) {
          a = e;
        },
        replayModuleIsLive: function () {
          r.timeout(H, 0);
        },
      }))
    : T(i + "No");
  function V(e) {
    L.push({ t: I(), m: e });
  }
  function j(e) {
    B.push({ t: I(), m: e }), S || T(i + "Active"), (S = x = 1), a && a();
  }
  function q() {
    x && (M.push({ t: I(), y: $ }), ($ = O.pageYOffset), (x = 0));
  }
  function z() {
    var e = I();
    (!c || s < e - c) && G();
  }
  function G() {
    for (var e = w, t = I(), n = [], u = [], i = 0, s = 0; e; )
      e[l] ? ++i : ((e[l] = t), n.push(e), (s = 1)),
        u[p] < y && u.push(e),
        (e[d] = E),
        (e[b] = t),
        (e = e[v]);
    s &&
      (i < D[p] &&
        (function (e) {
          for (var t = e, n = D[p]; t < n; t++) {
            var u = D[t];
            if (u) {
              if (u[m]) break;
              if (u[d] < E) {
                (u[m] = 1), o[f](u, _);
                break;
              }
            }
          }
        })(i),
      (D = u),
      C.push({ t: t, m: n }),
      ++E,
      (x = s),
      a && a()),
      A && r.timeout(G, s ? g : h),
      (c = t);
  }
  function H() {
    A && ((A = 0), e && O.clearInterval(e), (e = null), G(), o[f](w, _));
  }
});

var ue_csa_ss_tag = false;
csa.plugin(function (b) {
  var a = b.global,
    e = a.uet,
    f = a.uex,
    c = a.ue,
    d = a.Object,
    g = 0,
    h = {
      largestContentfulPaint: "lcp",
      speedIndex: "si",
      atfSpeedIndex: "atfsi",
      visuallyLoaded50: "vl50",
      visuallyLoaded90: "vl90",
      visuallyLoaded100: "vl100",
    },
    l =
      "perfNo perfYes browserQuiteFn browserQuiteUd browserQuiteLd browserQuiteMut mutObsNo mutObsYes mutObsActive startVL endVL".split(
        " "
      );
  b &&
    e &&
    f &&
    d.keys &&
    c &&
    (b.once("$ditched.beforemitigation", function () {
      g = 1;
    }),
    d.keys(h).forEach(function (k) {
      b.on("$timing:" + k, function (b) {
        var a = h[k];
        if (c.isl || g) {
          var d = "csa:" + a;
          e(a, d, void 0, b);
          f("at", d);
        } else e(a, void 0, void 0, b);
      });
    }),
    a.ue_csa_ss_tag ||
      l.forEach(function (a) {
        b.on(
          "$csmTag:" + a,
          function () {
            c.tag && c.tag(a);
            (c.isl || g) && f("at", "csa:" + a);
          },
          { buffered: 1 }
        );
      }));
});

(function (b, a, c, d) {
  if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
    c = [];
    for (a = a.currentScript; a; a = a.parentElement) a.id && c.push(a.id);
    return b.log(
      "A copy of P has already been loaded on this page.",
      "FATAL",
      c.join(" ")
    );
  }
})(window, document, Date);
(function (a, b, c, d) {
  "use strict";
  a._pSetI = function () {
    return null;
  };
})(window, document, Date);
(function (d, G, I, J) {
  "use strict";
  d._sw = (function () {
    var p;
    return function (w, e, u, z, h, A, q, k, x, B) {
      p ||
        ((p = !0),
        B.execute("RetailPageServiceWorker", function () {
          function y(a, b) {
            g.controller && a
              ? ((a = {
                  feature: "retail_service_worker_messaging",
                  command: a,
                }),
                b && (a.data = b),
                g.controller.postMessage(a))
              : a && h("sw:sw_message_no_ctrl", 1);
          }
          function p(a) {
            var b = a.data;
            if (
              b &&
              "retail_service_worker_messaging" === b.feature &&
              b.command &&
              b.data
            ) {
              var c = b.data;
              a = d.ue;
              var f = d.ueLogError;
              switch (b.command) {
                case "log_counter":
                  a &&
                    k(a.count) &&
                    c.name &&
                    a.count(c.name, 0 === c.value ? 0 : c.value || 1);
                  break;
                case "log_tag":
                  a &&
                    k(a.tag) &&
                    c.tag &&
                    (a.tag(c.tag), (b = d.uex), a.isl && k(b) && b("at"));
                  break;
                case "log_error":
                  f &&
                    k(f) &&
                    c.message &&
                    f({
                      message: c.message,
                      logLevel: c.level || "ERROR",
                      attribution: c.attribution || "RetailServiceWorker",
                    });
                  break;
                case "log_weblab_trigger":
                  if (!c.weblab || !c.treatment) break;
                  a && k(a.trigger)
                    ? a.trigger(c.weblab, c.treatment)
                    : (h("sw:wt:miss"),
                      h("sw:wt:miss:" + c.weblab + ":" + c.treatment));
                  break;
                default:
                  h("sw:unsupported_message_command", 1);
              }
            }
          }
          function v(a, b) {
            return "sw:" + (b || "") + ":" + a + ":";
          }
          function C() {
            l.forEach(function (a) {
              q(a);
            });
          }
          function n(a) {
            return a.capabilities.isAmazonApp && a.capabilities.android;
          }
          function D(a, b, c) {
            if (b)
              if (b.mshop && n(a))
                (a = v(c, "mshop_and")),
                  (b = b.mshop.action),
                  l.push(a + "supported"),
                  b(a, c);
              else if (b.browser) {
                a =
                  u(/Chrome/i) &&
                  !u(/Edge/i) &&
                  !u(/OPR/i) &&
                  !a.capabilities.isAmazonApp &&
                  !u(new RegExp(z + "bwv" + z + "b"));
                var f = b.browser;
                b = v(c, "browser");
                a
                  ? ((a = f.action), l.push(b + "supported"), a(b, c))
                  : l.push(b + "unsupported");
              }
          }
          function E(a, b, c) {
            a && l.push(v("register", c) + "unsupported");
            b && l.push(v("unregister", c) + "unsupported");
            C();
          }
          try {
            var g = navigator.serviceWorker;
          } catch (a) {
            q("sw:nav_err");
          }
          (function () {
            if (g) {
              var a = function () {
                y("page_loaded", {
                  rid: d.ue_id,
                  mid: d.ue_mid,
                  pty: d.ue_pty,
                  sid: d.ue_sid,
                  spty: d.ue_spty,
                  furl: d.ue_furl,
                });
              };
              x(g, "message", p);
              y("client_messaging_ready");
              B.when("load").execute(a);
              x(g, "controllerchange", function () {
                y("client_messaging_ready");
                "complete" === G.readyState && a();
              });
            }
          })();
          var l = [],
            m = function (a, b) {
              var c = d.uex,
                f = d.uet;
              a = e(":", "aui", "sw", a);
              "ld" === b && k(c)
                ? c("ld", a, { wb: 1 })
                : k(f) && f(b, a, { wb: 1 });
            },
            H = function (a, b, c) {
              function f(a) {
                b && k(b.failure) && b.failure(a);
              }
              function F() {
                l = setTimeout(function () {
                  q(e(":", "sw:" + r, t.TIMED_OUT));
                  f({ ok: !1, statusCode: t.TIMED_OUT, done: !1 });
                  m(r, "ld");
                }, c || 4e3);
              }
              var t = {
                  NO_CONTROLLER: "no_ctrl",
                  TIMED_OUT: "timed_out",
                  UNSUPPORTED_BROWSER: "unsupported_browser",
                  UNEXPECTED_RESPONSE: "unexpected_response",
                },
                r = e(":", a.feature, a.command),
                l,
                n = !0;
              if ("MessageChannel" in d && g && "controller" in g)
                if (g.controller) {
                  var p = new MessageChannel();
                  p.port1.onmessage = function (c) {
                    (c = c.data) &&
                    c.feature === a.feature &&
                    c.command === a.command
                      ? (n && (m(r, "cf"), (n = !1)),
                        m(r, "af"),
                        clearTimeout(l),
                        c.done || F(),
                        c.ok ? b && k(b.success) && b.success(c) : f(c),
                        c.done && m(r, "ld"))
                      : h(e(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1);
                  };
                  F();
                  m(r, "bb");
                  g.controller.postMessage(a, [p.port2]);
                } else
                  q(e(":", "sw:" + a.feature, t.NO_CONTROLLER)),
                    f({ ok: !1, statusCode: t.NO_CONTROLLER, done: !0 });
              else
                q(e(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)),
                  f({
                    ok: !1,
                    statusCode: t.UNSUPPORTED_BROWSER,
                    done: !0,
                  });
            };
          (function () {
            g
              ? (m("ctrl_changed", "bb"),
                g.addEventListener("controllerchange", function () {
                  q("sw:ctrl_changed");
                  m("ctrl_changed", "ld");
                }))
              : h(e(":", "sw:ctrl_changed", "sw_unsupp"), 1);
          })();
          (function () {
            var a = function () {
              m(b, "ld");
              var a = d.uex;
              H(
                {
                  feature: "page_proxy",
                  command: "request_feature_tags",
                },
                {
                  success: function (b) {
                    b = b.data;
                    Array.isArray(b) &&
                      b.forEach(function (a) {
                        "string" === typeof a
                          ? q(e(":", "sw:ppft", a))
                          : h(e(":", "sw:ppft", "invalid_tag"), 1);
                      });
                    h(e(":", "sw:ppft", "success"), 1);
                    A && A.isl && k(a) && a("at");
                  },
                  failure: function (a) {
                    h(
                      e(
                        ":",
                        "sw:ppft",
                        "error:" + (a.statusCode || "ppft_error")
                      ),
                      1
                    );
                  },
                }
              );
            };
            if ("requestIdleCallback" in d) {
              var b = e(":", "ppft", "callback_ricb");
              d.requestIdleCallback(a, { timeout: 1e3 });
            } else (b = e(":", "ppft", "callback_timeout")), setTimeout(a, 0);
            m(b, "bb");
          })();
          (function (a) {
            var b = a.reg,
              c = a.unreg;
            g && g.getRegistrations
              ? (w.when("A").execute(function (b) {
                  if (
                    (a.reg.mshop || a.unreg.mshop) &&
                    "function" === typeof n &&
                    n(b)
                  ) {
                    var f = a.reg.mshop ? "T1" : "C",
                      e = d.ue;
                    e && e.trigger
                      ? e.trigger("MSHOP_SW_CLIENT_446196", f)
                      : h("sw:mshop:wt:failed");
                  }
                  D(b, c, "unregister");
                }),
                x(d, "load", function () {
                  w.when("A").execute(function (a) {
                    D(a, b, "register");
                    C();
                  });
                }))
              : (E(b && b.browser, c && c.browser, "browser"),
                w.when("A").execute(function (a) {
                  "function" === typeof n &&
                    n(a) &&
                    E(b && b.mshop, c && c.mshop, "mshop_and");
                }));
          })({ reg: {}, unreg: {} });
        }));
    };
  })();
})(window, document, Date);
(function (c, e, I, B) {
  "use strict";
  c._pd = (function () {
    var a, u;
    return function (C, f, h, k, b, D, v, E, F) {
      function w(d) {
        try {
          return d();
        } catch (J) {
          return !1;
        }
      }
      function l() {
        if (m) {
          var d = {
            w: c.innerWidth || b.clientWidth,
            h: c.innerHeight || b.clientHeight,
          };
          5 < Math.abs(d.w - q.w) || 50 < d.h - q.h
            ? ((q = d),
              (n = 4),
              (d = a.mobile || a.tablet ? 450 < d.w && d.w > d.h : 1250 <= d.w)
                ? k(b, "a-ws")
                : (b.className = v(b, "a-ws")))
            : 0 < n && (n--, (x = setTimeout(l, 16)));
        }
      }
      function G(d) {
        (m = d === B ? !m : !!d) && l();
      }
      function H() {
        return m;
      }
      if (!u) {
        u = !0;
        var r = (function () {
            var d = ["O", "ms", "Moz", "Webkit"],
              c = e.createElement("div");
            return {
              testGradients: function () {
                return !0;
              },
              test: function (a) {
                var b = a.charAt(0).toUpperCase() + a.substr(1);
                a = (d.join(b + " ") + b + " " + a).split(" ");
                for (b = a.length; b--; ) if ("" === c.style[a[b]]) return !0;
                return !1;
              },
              testTransform3d: function () {
                return !0;
              },
            };
          })(),
          y = b.className,
          z = /(^| )a-mobile( |$)/.test(y),
          A = /(^| )a-tablet( |$)/.test(y);
        a = {
          audio: function () {
            return !!e.createElement("audio").canPlayType;
          },
          video: function () {
            return !!e.createElement("video").canPlayType;
          },
          canvas: function () {
            return !!e.createElement("canvas").getContext;
          },
          svg: function () {
            return (
              !!e.createElementNS &&
              !!e.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect
            );
          },
          offline: function () {
            return (
              navigator.hasOwnProperty &&
              navigator.hasOwnProperty("onLine") &&
              navigator.onLine
            );
          },
          dragDrop: function () {
            return "draggable" in e.createElement("span");
          },
          geolocation: function () {
            return !!navigator.geolocation;
          },
          history: function () {
            return !(!c.history || !c.history.pushState);
          },
          webworker: function () {
            return !!c.Worker;
          },
          autofocus: function () {
            return "autofocus" in e.createElement("input");
          },
          inputPlaceholder: function () {
            return "placeholder" in e.createElement("input");
          },
          textareaPlaceholder: function () {
            return "placeholder" in e.createElement("textarea");
          },
          localStorage: function () {
            return "localStorage" in c && null !== c.localStorage;
          },
          orientation: function () {
            return "orientation" in c;
          },
          touch: function () {
            return "ontouchend" in e;
          },
          gradients: function () {
            return r.testGradients();
          },
          hires: function () {
            var a =
              (c.devicePixelRatio && 1.5 <= c.devicePixelRatio) ||
              (c.matchMedia && c.matchMedia("(min-resolution:144dpi)").matches);
            E("hiRes" + (z ? "Mobile" : A ? "Tablet" : "Desktop"), a ? 1 : 0);
            return a;
          },
          transform3d: function () {
            return r.testTransform3d();
          },
          touchScrolling: function () {
            return f(
              /Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i
            );
          },
          ios: function () {
            return (
              f(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) &&
              !f(/trident|Edge/i)
            );
          },
          android: function () {
            return f(/android.([1-9]|[L-Z])/i) && !f(/trident|Edge/i);
          },
          mobile: function () {
            return z;
          },
          tablet: function () {
            return A;
          },
          rtl: function () {
            return "rtl" === b.dir;
          },
        };
        for (var g in a) a.hasOwnProperty(g) && (a[g] = w(a[g]));
        for (
          var t =
              "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(
                " "
              ),
            p = 0;
          p < t.length;
          p++
        )
          a[t[p]] = w(function () {
            return r.test(t[p]);
          });
        var m = !0,
          x = 0,
          q = { w: 0, h: 0 },
          n = 4;
        l();
        h(c, "resize", function () {
          clearTimeout(x);
          n = 4;
          l();
        });
        b.className = v(b, "a-no-js");
        k(b, "a-js");
        !f(/OS [1-8](_[0-9]*)+ like Mac OS X/i) ||
          c.navigator.standalone ||
          f(/safari/i) ||
          k(b, "a-ember");
        h = [];
        for (g in a)
          a.hasOwnProperty(g) &&
            a[g] &&
            h.push(
              "a-" +
                g.replace(/([A-Z])/g, function (a) {
                  return "-" + a.toLowerCase();
                })
            );
        k(b, h.join(" "));
        b.setAttribute("data-aui-build-date", F);
        C.register("p-detect", function () {
          return {
            capabilities: a,
            localStorage: a.localStorage && D,
            toggleResponsiveGrid: G,
            responsiveGridEnabled: H,
          };
        });
        return a || {};
      }
    };
  })();
})(window, document, Date);
(function (g, l, C, D) {
  function E(a) {
    n && n.tag && n.tag(p(":", "aui", a));
  }
  function m(a, b) {
    n &&
      n.count &&
      n.count("aui:" + a, 0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1);
  }
  function F(a) {
    try {
      return a.test(navigator.userAgent);
    } catch (b) {
      return !1;
    }
  }
  function G(a) {
    return "function" === typeof a;
  }
  function u(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function p(a, b, c, f) {
    b = b && c ? b + a + c : b || c;
    return f ? p(a, b, f) : b;
  }
  function y(a, b, c) {
    try {
      Object.defineProperty(a, b, { value: c, writable: !1 });
    } catch (f) {
      a[b] = c;
    }
    return c;
  }
  function O(a, b) {
    a.className = P(a, b) + " " + b;
  }
  function P(a, b) {
    return (" " + a.className + " ")
      .split(" " + b + " ")
      .join(" ")
      .replace(/^ | $/g, "");
  }
  function ca(a, b, c) {
    var f = (c = a.length),
      e = function () {
        f-- || (H.push(b), I || (q ? q.set(z) : setTimeout(z, 0), (I = !0)));
      };
    for (e(); c--; ) Q[a[c]] ? e() : (v[a[c]] = v[a[c]] || []).push(e);
  }
  function da(a, b, c, f, e) {
    var d = l.createElement(a ? "script" : "link");
    u(d, "error", f);
    e && u(d, "load", e);
    a
      ? ((d.type = "text/javascript"),
        (d.async = !0),
        c &&
          /AUIClients|images[/]I/.test(b) &&
          d.setAttribute("crossorigin", "anonymous"),
        (d.src = b))
      : ((d.rel = "stylesheet"), (d.href = b));
    l.getElementsByTagName("head")[0].appendChild(d);
  }
  function R(a, b) {
    return function (c, f) {
      function e() {
        da(
          b,
          c,
          d,
          function (b) {
            J
              ? m("resource_unload")
              : d
              ? ((d = !1), m("resource_retry"), e())
              : (m("resource_error"), a.log("Asset failed to load: " + c));
            b && b.stopPropagation
              ? b.stopPropagation()
              : g.event && (g.event.cancelBubble = !0);
          },
          f
        );
      }
      if (S[c]) return !1;
      S[c] = !0;
      m("resource_count");
      var d = !0;
      return !e();
    };
  }
  function ea(a, b, c) {
    for (
      var f = {
          name: a,
          guard: function (c) {
            return b.guardFatal(a, c);
          },
          guardTime: function (a) {
            return b.guardTime(a);
          },
          logError: function (c, d, e) {
            b.logError(c, d, e, a);
          },
        },
        e = [],
        d = 0;
      d < c.length;
      d++
    )
      A.hasOwnProperty(c[d]) &&
        (e[d] = K.hasOwnProperty(c[d]) ? K[c[d]](A[c[d]], f) : A[c[d]]);
    return e;
  }
  function w(a, b, c, f, e) {
    return function (d, k) {
      function n() {
        var a = null;
        f
          ? (a = k)
          : G(k) &&
            ((q.start = r()), (a = k.apply(g, ea(d, h, l))), (q.end = r()));
        if (b) {
          A[d] = a;
          a = d;
          for (Q[a] = !0; (v[a] || []).length; ) v[a].shift()();
          delete v[a];
        }
        q.done = !0;
      }
      var h = e || this;
      G(d) && ((k = d), (d = D));
      b &&
        ((d = d ? d.replace(T, "") : "__NONAME__"),
        L.hasOwnProperty(d) &&
          h.error(
            p(
              ", reregistered by ",
              p(" by ", d + " already registered", L[d]),
              h.attribution
            ),
            d
          ),
        (L[d] = h.attribution));
      for (var l = [], m = 0; m < a.length; m++) l[m] = a[m].replace(T, "");
      var q = (x[d || "anon" + ++fa] = {
        depend: l,
        registered: r(),
        namespace: h.namespace,
      });
      d && ha.hasOwnProperty(d);
      c ? n() : ca(l, h.guardFatal(d, n), d);
      return {
        decorate: function (a) {
          K[d] = h.guardFatal(d, a);
        },
      };
    };
  }
  function U(a) {
    return function () {
      var b = Array.prototype.slice.call(arguments);
      return {
        execute: w(b, !1, a, !1, this),
        register: w(b, !0, a, !1, this),
      };
    };
  }
  function M(a, b) {
    return function (c, f) {
      f || ((f = c), (c = D));
      var e = this.attribution;
      return function () {
        h.push(b || { attribution: e, name: c, logLevel: a });
        var d = f.apply(this, arguments);
        h.pop();
        return d;
      };
    };
  }
  function B(a, b) {
    this.load = { js: R(this, !0), css: R(this) };
    y(this, "namespace", b);
    y(this, "attribution", a);
  }
  function V() {
    l.body ? k.trigger("a-bodyBegin") : setTimeout(V, 20);
  }
  ("use strict");
  var t = (C.now =
      C.now ||
      function () {
        return +new C();
      }),
    r = (function (a) {
      return a && a.now ? a.now.bind(a) : t;
    })(g.performance),
    ia = r(),
    ha = {},
    n = g.ue;
  E();
  E("aui_build_date:3.24.7-2024-09-13");
  var W = {
      getItem: function (a) {
        try {
          return g.localStorage.getItem(a);
        } catch (b) {}
      },
      setItem: function (a, b) {
        try {
          return g.localStorage.setItem(a, b);
        } catch (c) {}
      },
    },
    q = g._pSetI(),
    H = [],
    ja = [],
    I = !1,
    ka =
      navigator.scheduling &&
      "function" === typeof navigator.scheduling.isInputPending;
  var z = function () {
    for (
      var a = q ? q.set(z) : setTimeout(z, 0), b = t();
      ja.length || H.length;

    )
      if ((H.shift()(), q && ka)) {
        if (
          (150 < t() - b && !navigator.scheduling.isInputPending()) ||
          (50 < t() - b && navigator.scheduling.isInputPending())
        )
          return;
      } else if (50 < t() - b) return;
    q ? q.clear(a) : clearTimeout(a);
    I = !1;
  };
  var Q = {},
    v = {},
    S = {},
    J = !1;
  u(g, "beforeunload", function () {
    J = !0;
    setTimeout(function () {
      J = !1;
    }, 1e4);
  });
  var T = /^prv:/,
    L = {},
    A = {},
    K = {},
    x = {},
    fa = 0,
    X = String.fromCharCode(92),
    h = [],
    Y = !0,
    Z = g.onerror;
  g.onerror = function (a, b, c, f, e) {
    (e && "object" === typeof e) ||
      ((e = Error(a, b, c)),
      (e.columnNumber = f),
      (e.stack = b || c || f ? p(X, e.message, "at " + p(":", b, c, f)) : D));
    var d = h.pop() || {};
    e.attribution = p(":", e.attribution || d.attribution, d.name);
    e.logLevel = d.logLevel;
    e.attribution &&
      console &&
      console.log &&
      console.log(
        [e.logLevel || "ERROR", a, "thrown by", e.attribution].join(" ")
      );
    h = [];
    Z && ((d = [].slice.call(arguments)), (d[4] = e), Z.apply(g, d));
  };
  B.prototype = {
    logError: function (a, b, c, f) {
      b = {
        message: b,
        logLevel: c || "ERROR",
        attribution: p(":", this.attribution, f),
      };
      if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0;
      console && console.error && (console.log(b), console.error(a));
      return !1;
    },
    error: function (a, b, c, f) {
      a = Error(p(":", f, a, c));
      a.attribution = p(":", this.attribution, b);
      throw a;
    },
    guardError: M(),
    guardFatal: M("FATAL"),
    guardCurrent: function (a) {
      var b = h[h.length - 1];
      return b ? M(b.logLevel, b).call(this, a) : a;
    },
    guardTime: function (a) {
      var b = h[h.length - 1],
        c = b && b.name;
      return c && c in x
        ? function () {
            var b = r(),
              e = a.apply(this, arguments);
            x[c].async = (x[c].async || 0) + r() - b;
            return e;
          }
        : a;
    },
    log: function (a, b, c) {
      return this.logError(null, a, b, c);
    },
    declare: w([], !0, !0, !0),
    register: w([], !0),
    execute: w([]),
    AUI_BUILD_DATE: "3.24.7-2024-09-13",
    when: U(),
    now: U(!0),
    trigger: function (a, b, c) {
      var f = t();
      this.declare(a, {
        data: b,
        pageElapsedTime: f - (g.aPageStart || NaN),
        triggerTime: f,
      });
      c &&
        c.instrument &&
        N.when("prv:a-logTrigger").execute(function (b) {
          b(a);
        });
    },
    handleTriggers: function () {
      this.log("handleTriggers deprecated");
    },
    attributeErrors: function (a) {
      return new B(a);
    },
    _namespace: function (a, b) {
      return new B(a, b);
    },
    setPriority: function (a) {
      Y ? (Y = !1) : this.log("setPriority only accept the first call.");
    },
  };
  var k = y(g, "AmazonUIPageJS", new B());
  var N = k._namespace("PageJS", "AmazonUI");
  N.declare("prv:p-debug", x);
  k.declare("p-recorder-events", []);
  k.declare("p-recorder-stop", function () {});
  y(g, "P", k);
  V();
  if (l.addEventListener) {
    var aa;
    l.addEventListener(
      "DOMContentLoaded",
      (aa = function () {
        k.trigger("a-domready");
        l.removeEventListener("DOMContentLoaded", aa, !1);
      }),
      !1
    );
  }
  var ba = l.documentElement,
    la = g._pd(k, F, u, O, ba, W, P, m, "3.24.7-2024-09-13");
  F(/UCBrowser/i) || (la.localStorage && O(ba, W.getItem("a-font-class")));
  k.declare("a-event-revised-handling", !1);
  g._sw(N, p, F, X, m, n, E, G, u, k);
  k.declare("a-fix-event-off", !1);
  m("pagejs:pkgExecTime", r() - ia);
})(window, document, Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/61xJcNKKLXL._RC|11Y+5x+kkTL.js,514Z0GBG2eL.js,31quly41aVL.js,31LHsGF3dBL.js,31Wtgpq7ysL.js,51NnTYPBTOL.js,01qkmZhGmAL.js,31FRJRm896L.js,61oSw0Onr2L.js,31NjgZjYhpL.js_.js?AUIClients/AmazonUI#mobile"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/21ZMwVh4T0L._RC|21OJDARBhQL.js,218GJg15I8L.js,31lucpmF4CL.js,2119M3Ks9rL.js,61wR3DrMv+L.js_.js?AUIClients/AuthenticationPortalAssets&y+4wq3ki#mobile.194821-T1.818867-T2.900595-T1"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/01wGDSlxwdL.js?AUIClients/AuthenticationPortalInlineAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/415QPPL10rL.js?AUIClients/CVFAssets&toFmJ2Fj#mobile.1026867-T1"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/8150jbgvn9L.js?AUIClients/SiegeClientSideEncryptionAUI"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/31IwoCo8XiL.js?AUIClients/AmazonUIFormControlsJS#mobile"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/71MFMsTQG0L.js?AUIClients/IdentityWebAuthnAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/51RddlGAZmL.js?AUIClients/IdentityJsCommonAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/71v46YykigL.js?AUIClients/FWCIMAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/A16Ccz05m-L.js?AUIClients/ACICAssets"
);

window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
  (function (c) {
    c &&
      1 === c.ue_jsmtf &&
      "object" === typeof c.P &&
      "function" === typeof c.P.when &&
      c.P.when("mshop-interactions").execute(function (e) {
        "object" === typeof e &&
          "function" === typeof e.addListener &&
          e.addListener(function (b) {
            "object" === typeof b &&
              "ORIGIN" === b.dataSource &&
              "number" === typeof b.clickTime &&
              "object" === typeof b.events &&
              "number" === typeof b.events.pageVisible &&
              (c.ue_jsmtf_interaction = {
                pv: b.events.pageVisible,
                ct: b.clickTime,
              });
          });
      });
  })(ue_csm);
  (function (c, e, b) {
    function m(a) {
      f ||
        ((f = d[a.type].id),
        "undefined" === typeof a.clientX
          ? ((h = a.pageX), (k = a.pageY))
          : ((h = a.clientX), (k = a.clientY)),
        2 != f || (l && (l != h || n != k))
          ? (r(),
            g.isl &&
              e.setTimeout(function () {
                p("at", g.id);
              }, 0))
          : ((l = h), (n = k), (f = 0)));
    }
    function r() {
      for (var a in d) d.hasOwnProperty(a) && g.detach(a, m, d[a].parent);
    }
    function s() {
      for (var a in d) d.hasOwnProperty(a) && g.attach(a, m, d[a].parent);
    }
    function t() {
      var a = "";
      !q && f && ((q = 1), (a += "&ui=" + f));
      return a;
    }
    var g = c.ue,
      p = c.uex,
      q = 0,
      f = 0,
      l,
      n,
      h,
      k,
      d = {
        click: { id: 1, parent: b },
        mousemove: {
          id: 2,
          parent: b,
        },
        scroll: { id: 3, parent: e },
        keydown: { id: 4, parent: b },
      };
    g && p && (s(), (g._ui = t));
  })(ue_csm, window, document);

  (function (l, e) {
    function c(b) {
      b = "";
      var c = a.isBFT ? "b" : "s",
        d = "" + a.oid,
        g = "" + a.lid,
        h = d;
      d != g && 20 == g.length && ((c += "a"), (h += "-" + g));
      a.tabid && (b = a.tabid + "+");
      b += c + "-" + h;
      b != f &&
        100 > b.length &&
        ((f = b),
        a.cookie
          ? a.cookie.updateCsmHit(m, b + ("|" + +new Date()))
          : (e.cookie = "csm-hit=" + b + ("|" + +new Date()) + n + "; path=/"));
    }
    function p() {
      f = 0;
    }
    function d(b) {
      !0 === e[a.pageViz.propHid]
        ? (f = 0)
        : !1 === e[a.pageViz.propHid] && c({ type: "visible" });
    }
    var n = "; expires=" + new Date(+new Date() + 6048e5).toGMTString(),
      m = "tb",
      f,
      a = l.ue || {},
      k = a.pageViz && a.pageViz.event && a.pageViz.propHid;
    a.attach &&
      (a.attach("click", c),
      a.attach("keyup", c),
      k || (a.attach("focus", c), a.attach("blur", p)),
      k && (a.attach(a.pageViz.event, d, e), d({})));
    a.aftb = 1;
  })(ue_csm, ue_csm.document);

  ue_csm.ue.stub(ue, "impression");

  ue.stub(ue, "trigger");

  if (window.ue && uet) {
    uet("bb");
  }
}

(function () {
  function l(a) {
    for (
      var c = b.location.search.substring(1).split("&"), e = 0;
      e < c.length;
      e++
    ) {
      var d = c[e].split("=");
      if (d[0] === a) return d[1];
    }
  }
  window.amzn = window.amzn || {};
  amzn.copilot = amzn.copilot || {};
  var b = window,
    f = document,
    g = b.P || b.AmazonUIPageJS,
    h = f.head || f.getElementsByTagName("head")[0],
    m = 0,
    n = 0;
  amzn.copilot.checkCoPilotSession = function () {
    f.cookie.match("cpidv") &&
      ("undefined" !== typeof jQuery && k(jQuery),
      g &&
        g.when &&
        g.when("jQuery").execute(function (a) {
          k(a);
        }),
      b.amznJQ &&
        b.amznJQ.available &&
        b.amznJQ.available("jQuery", function () {
          k(jQuery);
        }),
      b.jQuery || g || b.amznJQ || q());
  };
  var q = function () {
      m
        ? b.ue &&
          "function" === typeof b.ue.count &&
          b.ue.count("cpJQUnavailable", 1)
        : ((m = 1),
          f.addEventListener
            ? f.addEventListener(
                "DOMContentLoaded",
                amzn.copilot.checkCoPilotSession,
                !1
              )
            : f.attachEvent &&
              f.attachEvent("onreadystatechange", function () {
                "complete" === f.readyState &&
                  amzn.copilot.checkCoPilotSession();
              }));
    },
    k = function (a) {
      if (!n) {
        n = 1;
        amzn.copilot.jQuery = a;
        a = l("debugJS");
        var c = "https:" === b.location.protocol ? 1 : 0,
          e = 1;
        url = "/gp/copilot/handlers/copilot_strings_resources.html";
        window.texas && texas.locations && (url = texas.locations.makeUrl(url));
        g && g.AUI_BUILD_DATE && (e = 0);
        amzn.copilot.jQuery.ajax &&
          amzn.copilot.jQuery.ajax({
            url: url,
            dataType: "json",
            data: { isDebug: a, isSecure: c, includeAUIP: e },
            success: function (a) {
              amzn.copilot.vip = a.serviceEndPoint;
              amzn.copilot.enableMultipleTabSession = a.isFollowMe;
              r(a);
            },
            error: function () {
              b.ue.count("cpLoadResourceError", 1);
            },
          });
      }
    },
    r = function (a) {
      var c = amzn.copilot.jQuery,
        e = function () {
          amzn.copilot.setup(c.extend({ isContinuedSession: !0 }, a));
        };
      a.CSSUrls &&
        c.each(a.CSSUrls[0], function (a, c) {
          var b = f.createElement("link");
          b.type = "text/css";
          b.rel = "stylesheet";
          b.href = c;
          h.appendChild(b);
        });
      a.CSSTag && s(a.CSSTag);
      if (a.JSUrls) {
        var d = l("forceSynchronousJS"),
          b = a.JSUrls[0];
        c.each(b, function (a, c) {
          a === b.length - 1 ? p(c, d, e) : p(c, d);
        });
      }
      a.JSTag &&
        (t(a.JSTag),
        P.when("CSCoPilotPresenterAsset").execute(function () {
          e();
        }));
    },
    t = function (a) {
      var c = f.createElement("div");
      c.innerHTML = a;
      a = 0;
      for (var b = c.children.length; a < b; a++) {
        var d = f.createElement("script");
        d.type = "text/javascript";
        d.innerHTML = c.children[a].innerHTML;
        h.appendChild(d);
      }
    },
    s = function (a) {
      var b = f.createElement("div");
      b.innerHTML = a;
      a = 0;
      for (var e = b.children.length; a < e; a++) h.appendChild(b.children[a]);
    },
    p = function (a, b, e) {
      var d = f.createElement("script");
      d.type = "text/javascript";
      d.src = a;
      d.async = b ? !1 : !0;
      e && (d.onload = e);
      h.appendChild(d);
    };
})();

amzn.copilot.checkCoPilotSession();
