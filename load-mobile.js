(function(b, a, c, d) {
  if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
    c = [];
    for (a = a.currentScript; a; a = a.parentElement) a.id && c.push(a.id);
    return b.log("A copy of P has already been loaded on this page.", "FATAL", c.join(" "))
  }
})(window, document, Date);
(function(a, b, c, d) {
  "use strict";
  a._pSetI = function() {
    return null
  }
})(window, document, Date);
(function(d, I, K, L) {
  "use strict";
  d._sw = function() {
    var p;
    return function(w, g, u, B, h, C, q, k, x, y) {
      p || (p = !0, y.execute("RetailPageServiceWorker", function() {
        function z(a, b) {
          e.controller && a ? (a = {
            feature: "retail_service_worker_messaging",
            command: a
          }, b && (a.data = b), e.controller.postMessage(a)) : a && h("sw:sw_message_no_ctrl", 1)
        }

        function p(a) {
          var b = a.data;
          if (b && "retail_service_worker_messaging" === b.feature && b.command && b.data) {
            var c = b.data;
            a = d.ue;
            var f = d.ueLogError;
            switch (b.command) {
              case "log_counter":
                a && k(a.count) &&
                  c.name && a.count(c.name, 0 === c.value ? 0 : c.value || 1);
                break;
              case "log_tag":
                a && k(a.tag) && c.tag && (a.tag(c.tag), b = d.uex, a.isl && k(b) && b("at"));
                break;
              case "log_error":
                f && k(f) && c.message && f({
                  message: c.message,
                  logLevel: c.level || "ERROR",
                  attribution: c.attribution || "RetailServiceWorker"
                });
                break;
              case "log_weblab_trigger":
                if (!c.weblab || !c.treatment) break;
                a && k(a.trigger) ? a.trigger(c.weblab, c.treatment) : (h("sw:wt:miss"), h("sw:wt:miss:" + c.weblab + ":" + c.treatment));
                break;
              default:
                h("sw:unsupported_message_command", 1)
            }
          }
        }

        function v(a, b) {
          return "sw:" + (b || "") + ":" + a + ":"
        }

        function D(a, b) {
          e.register("/service-worker.js").then(function() {
            h(a + "success")
          }).catch(function(c) {
            y.logError(c, "[AUI SW] Failed to " + b + " service worker: ", "ERROR", "RetailPageServiceWorker");
            h(a + "failure")
          })
        }

        function E() {
          l.forEach(function(a) {
            q(a)
          })
        }

        function n(a) {
          return a.capabilities.isAmazonApp && a.capabilities.android
        }

        function F(a, b, c) {
          if (b)
            if (b.mshop && n(a)) a = v(c, "mshop_and"), b = b.mshop.action, l.push(a + "supported"), b(a, c);
            else if (b.browser) {
            a = u(/Chrome/i) &&
              !u(/Edge/i) && !u(/OPR/i) && !a.capabilities.isAmazonApp && !u(new RegExp(B + "bwv" + B + "b"));
            var f = b.browser;
            b = v(c, "browser");
            a ? (a = f.action, l.push(b + "supported"), a(b, c)) : l.push(b + "unsupported")
          }
        }

        function G(a, b, c) {
          a && l.push(v("register", c) + "unsupported");
          b && l.push(v("unregister", c) + "unsupported");
          E()
        }
        try {
          var e = navigator.serviceWorker
        } catch (a) {
          q("sw:nav_err")
        }(function() {
          if (e) {
            var a = function() {
              z("page_loaded", {
                rid: d.ue_id,
                mid: d.ue_mid,
                pty: d.ue_pty,
                sid: d.ue_sid,
                spty: d.ue_spty,
                furl: d.ue_furl
              })
            };
            x(e, "message",
              p);
            z("client_messaging_ready");
            y.when("load").execute(a);
            x(e, "controllerchange", function() {
              z("client_messaging_ready");
              "complete" === I.readyState && a()
            })
          }
        })();
        var l = [],
          m = function(a, b) {
            var c = d.uex,
              f = d.uet;
            a = g(":", "aui", "sw", a);
            "ld" === b && k(c) ? c("ld", a, {
              wb: 1
            }) : k(f) && f(b, a, {
              wb: 1
            })
          },
          J = function(a, b, c) {
            function f(a) {
              b && k(b.failure) && b.failure(a)
            }

            function H() {
              l = setTimeout(function() {
                q(g(":", "sw:" + r, t.TIMED_OUT));
                f({
                  ok: !1,
                  statusCode: t.TIMED_OUT,
                  done: !1
                });
                m(r, "ld")
              }, c || 4E3)
            }
            var t = {
                NO_CONTROLLER: "no_ctrl",
                TIMED_OUT: "timed_out",
                UNSUPPORTED_BROWSER: "unsupported_browser",
                UNEXPECTED_RESPONSE: "unexpected_response"
              },
              r = g(":", a.feature, a.command),
              l, n = !0;
            if ("MessageChannel" in d && e && "controller" in e)
              if (e.controller) {
                var p = new MessageChannel;
                p.port1.onmessage = function(c) {
                  (c = c.data) && c.feature === a.feature && c.command === a.command ? (n && (m(r, "cf"), n = !1), m(r, "af"), clearTimeout(l), c.done || H(), c.ok ? b && k(b.success) && b.success(c) : f(c), c.done && m(r, "ld")) : h(g(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1)
                };
                H();
                m(r, "bb");
                e.controller.postMessage(a, [p.port2])
              } else q(g(":",
                "sw:" + a.feature, t.NO_CONTROLLER)), f({
                ok: !1,
                statusCode: t.NO_CONTROLLER,
                done: !0
              });
            else q(g(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)), f({
              ok: !1,
              statusCode: t.UNSUPPORTED_BROWSER,
              done: !0
            })
          };
        (function() {
          e ? (m("ctrl_changed", "bb"), e.addEventListener("controllerchange", function() {
            q("sw:ctrl_changed");
            m("ctrl_changed", "ld")
          })) : h(g(":", "sw:ctrl_changed", "sw_unsupp"), 1)
        })();
        (function() {
          var a = function() {
            m(b, "ld");
            var a = d.uex;
            J({
              feature: "page_proxy",
              command: "request_feature_tags"
            }, {
              success: function(b) {
                b = b.data;
                Array.isArray(b) && b.forEach(function(a) {
                  "string" === typeof a ? q(g(":", "sw:ppft", a)) : h(g(":", "sw:ppft", "invalid_tag"), 1)
                });
                h(g(":", "sw:ppft", "success"), 1);
                C && C.isl && k(a) && a("at")
              },
              failure: function(a) {
                h(g(":", "sw:ppft", "error:" + (a.statusCode || "ppft_error")), 1)
              }
            })
          };
          if ("requestIdleCallback" in d) {
            var b = g(":", "ppft", "callback_ricb");
            d.requestIdleCallback(a, {
              timeout: 1E3
            })
          } else b = g(":", "ppft", "callback_timeout"), setTimeout(a, 0);
          m(b, "bb")
        })();
        var A = {
          reg: {},
          unreg: {}
        };
        A.reg.mshop = {
          action: D
        };
        A.reg.browser = {
          action: D
        };
        (function(a) {
          var b = a.reg,
            c = a.unreg;
          e && e.getRegistrations ? (w.when("A").execute(function(b) {
            if ((a.reg.mshop || a.unreg.mshop) && "function" === typeof n && n(b)) {
              var f = a.reg.mshop ? "T1" : "C",
                e = d.ue;
              e && e.trigger ? e.trigger("MSHOP_SW_CLIENT_446196", f) : h("sw:mshop:wt:failed")
            }
            F(b, c, "unregister")
          }), x(d, "load", function() {
            w.when("A").execute(function(a) {
              F(a, b, "register");
              E()
            })
          })) : (G(b && b.browser, c && c.browser, "browser"), w.when("A").execute(function(a) {
            "function" === typeof n && n(a) && G(b && b.mshop, c && c.mshop, "mshop_and")
          }))
        })(A)
      }))
    }
  }()
})(window,
  document, Date);
(function(c, e, I, B) {
  "use strict";
  c._pd = function() {
    var a, u;
    return function(C, f, h, k, b, D, v, E, F) {
      function w(d) {
        try {
          return d()
        } catch (J) {
          return !1
        }
      }

      function l() {
        if (m) {
          var d = {
            w: c.innerWidth || b.clientWidth,
            h: c.innerHeight || b.clientHeight
          };
          5 < Math.abs(d.w - q.w) || 50 < d.h - q.h ? (q = d, n = 4, (d = a.mobile || a.tablet ? 450 < d.w && d.w > d.h : 1250 <= d.w) ? k(b, "a-ws") : b.className = v(b, "a-ws")) : 0 < n && (n--, x = setTimeout(l, 16))
        }
      }

      function G(d) {
        (m = d === B ? !m : !!d) && l()
      }

      function H() {
        return m
      }
      if (!u) {
        u = !0;
        var r = function() {
            var d = ["O", "ms", "Moz", "Webkit"],
              c = e.createElement("div");
            return {
              testGradients: function() {
                return !0
              },
              test: function(a) {
                var b = a.charAt(0).toUpperCase() + a.substr(1);
                a = (d.join(b + " ") + b + " " + a).split(" ");
                for (b = a.length; b--;)
                  if ("" === c.style[a[b]]) return !0;
                return !1
              },
              testTransform3d: function() {
                return !0
              }
            }
          }(),
          y = b.className,
          z = /(^| )a-mobile( |$)/.test(y),
          A = /(^| )a-tablet( |$)/.test(y);
        a = {
          audio: function() {
            return !!e.createElement("audio").canPlayType
          },
          video: function() {
            return !!e.createElement("video").canPlayType
          },
          canvas: function() {
            return !!e.createElement("canvas").getContext
          },
          svg: function() {
            return !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
          },
          offline: function() {
            return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine
          },
          dragDrop: function() {
            return "draggable" in e.createElement("span")
          },
          geolocation: function() {
            return !!navigator.geolocation
          },
          history: function() {
            return !(!c.history || !c.history.pushState)
          },
          webworker: function() {
            return !!c.Worker
          },
          autofocus: function() {
            return "autofocus" in e.createElement("input")
          },
          inputPlaceholder: function() {
            return "placeholder" in e.createElement("input")
          },
          textareaPlaceholder: function() {
            return "placeholder" in e.createElement("textarea")
          },
          localStorage: function() {
            return "localStorage" in c && null !== c.localStorage
          },
          orientation: function() {
            return "orientation" in c
          },
          touch: function() {
            return "ontouchend" in e
          },
          gradients: function() {
            return r.testGradients()
          },
          hires: function() {
            var a = c.devicePixelRatio && 1.5 <= c.devicePixelRatio || c.matchMedia && c.matchMedia("(min-resolution:144dpi)").matches;
            E("hiRes" +
              (z ? "Mobile" : A ? "Tablet" : "Desktop"), a ? 1 : 0);
            return a
          },
          transform3d: function() {
            return r.testTransform3d()
          },
          touchScrolling: function() {
            return f(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i)
          },
          ios: function() {
            return f(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !f(/trident|Edge/i)
          },
          android: function() {
            return f(/android.([1-9]|[L-Z])/i) && !f(/trident|Edge/i)
          },
          mobile: function() {
            return z
          },
          tablet: function() {
            return A
          },
          rtl: function() {
            return "rtl" === b.dir
          }
        };
        for (var g in a) a.hasOwnProperty(g) && (a[g] = w(a[g]));
        for (var t = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), p = 0; p < t.length; p++) a[t[p]] = w(function() {
          return r.test(t[p])
        });
        var m = !0,
          x = 0,
          q = {
            w: 0,
            h: 0
          },
          n = 4;
        l();
        h(c, "resize", function() {
          clearTimeout(x);
          n = 4;
          l()
        });
        b.className = v(b, "a-no-js");
        k(b, "a-js");
        !f(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || c.navigator.standalone || f(/safari/i) || k(b, "a-ember");
        h = [];
        for (g in a) a.hasOwnProperty(g) && a[g] && h.push("a-" + g.replace(/([A-Z])/g, function(a) {
          return "-" + a.toLowerCase()
        }));
        k(b, h.join(" "));
        b.setAttribute("data-aui-build-date", F);
        C.register("p-detect", function() {
          return {
            capabilities: a,
            localStorage: a.localStorage && D,
            toggleResponsiveGrid: G,
            responsiveGridEnabled: H
          }
        });
        return a || {}
      }
    }
  }()
})(window, document, Date);
(function(g, l, C, D) {
  function E(a) {
    n && n.tag && n.tag(p(":", "aui", a))
  }

  function m(a, b) {
    n && n.count && n.count("aui:" + a, 0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1)
  }

  function F(a) {
    try {
      return a.test(navigator.userAgent)
    } catch (b) {
      return !1
    }
  }

  function G(a) {
    return "function" === typeof a
  }

  function u(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
  }

  function p(a, b, c, f) {
    b = b && c ? b + a + c : b || c;
    return f ? p(a, b, f) : b
  }

  function y(a, b, c) {
    try {
      Object.defineProperty(a, b, {
        value: c,
        writable: !1
      })
    } catch (f) {
      a[b] =
        c
    }
    return c
  }

  function O(a, b) {
    a.className = P(a, b) + " " + b
  }

  function P(a, b) {
    return (" " + a.className + " ").split(" " + b + " ").join(" ").replace(/^ | $/g, "")
  }

  function ca(a, b, c) {
    var f = c = a.length,
      e = function() {
        f-- || (H.push(b), I || (q ? q.set(z) : setTimeout(z, 0), I = !0))
      };
    for (e(); c--;) Q[a[c]] ? e() : (v[a[c]] = v[a[c]] || []).push(e)
  }

  function da(a, b, c, f, e) {
    var d = l.createElement(a ? "script" : "link");
    u(d, "error", f);
    e && u(d, "load", e);
    a ? (d.type = "text/javascript", d.async = !0, c && /AUIClients|images[/]I/.test(b) && d.setAttribute("crossorigin",
      "anonymous"), d.src = b) : (d.rel = "stylesheet", d.href = b);
    l.getElementsByTagName("head")[0].appendChild(d)
  }

  function R(a, b) {
    return function(c, f) {
      function e() {
        da(b, c, d, function(b) {
          J ? m("resource_unload") : d ? (d = !1, m("resource_retry"), e()) : (m("resource_error"), a.log("Asset failed to load: " + c));
          b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0)
        }, f)
      }
      if (S[c]) return !1;
      S[c] = !0;
      m("resource_count");
      var d = !0;
      return !e()
    }
  }

  function ea(a, b, c) {
    for (var f = {
        name: a,
        guard: function(c) {
          return b.guardFatal(a,
            c)
        },
        guardTime: function(a) {
          return b.guardTime(a)
        },
        logError: function(c, d, e) {
          b.logError(c, d, e, a)
        }
      }, e = [], d = 0; d < c.length; d++) A.hasOwnProperty(c[d]) && (e[d] = K.hasOwnProperty(c[d]) ? K[c[d]](A[c[d]], f) : A[c[d]]);
    return e
  }

  function w(a, b, c, f, e) {
    return function(d, k) {
      function n() {
        var a = null;
        f ? a = k : G(k) && (q.start = r(), a = k.apply(g, ea(d, h, l)), q.end = r());
        if (b) {
          A[d] = a;
          a = d;
          for (Q[a] = !0;
            (v[a] || []).length;) v[a].shift()();
          delete v[a]
        }
        q.done = !0
      }
      var h = e || this;
      G(d) && (k = d, d = D);
      b && (d = d ? d.replace(T, "") : "__NONAME__", L.hasOwnProperty(d) &&
        h.error(p(", reregistered by ", p(" by ", d + " already registered", L[d]), h.attribution), d), L[d] = h.attribution);
      for (var l = [], m = 0; m < a.length; m++) l[m] = a[m].replace(T, "");
      var q = x[d || "anon" + ++fa] = {
        depend: l,
        registered: r(),
        namespace: h.namespace
      };
      d && ha.hasOwnProperty(d);
      c ? n() : ca(l, h.guardFatal(d, n), d);
      return {
        decorate: function(a) {
          K[d] = h.guardFatal(d, a)
        }
      }
    }
  }

  function U(a) {
    return function() {
      var b = Array.prototype.slice.call(arguments);
      return {
        execute: w(b, !1, a, !1, this),
        register: w(b, !0, a, !1, this)
      }
    }
  }

  function M(a, b) {
    return function(c,
      f) {
      f || (f = c, c = D);
      var e = this.attribution;
      return function() {
        h.push(b || {
          attribution: e,
          name: c,
          logLevel: a
        });
        var d = f.apply(this, arguments);
        h.pop();
        return d
      }
    }
  }

  function B(a, b) {
    this.load = {
      js: R(this, !0),
      css: R(this)
    };
    y(this, "namespace", b);
    y(this, "attribution", a)
  }

  function V() {
    l.body ? k.trigger("a-bodyBegin") : setTimeout(V, 20)
  }
  "use strict";
  var t = C.now = C.now || function() {
      return +new C
    },
    r = function(a) {
      return a && a.now ? a.now.bind(a) : t
    }(g.performance),
    ia = r(),
    ha = {},
    n = g.ue;
  E();
  E("aui_build_date:3.24.7-2024-09-09");
  var W = {
      getItem: function(a) {
        try {
          return g.localStorage.getItem(a)
        } catch (b) {}
      },
      setItem: function(a, b) {
        try {
          return g.localStorage.setItem(a, b)
        } catch (c) {}
      }
    },
    q = g._pSetI(),
    H = [],
    ja = [],
    I = !1,
    ka = navigator.scheduling && "function" === typeof navigator.scheduling.isInputPending;
  var z = function() {
    for (var a = q ? q.set(z) : setTimeout(z, 0), b = t(); ja.length || H.length;)
      if (H.shift()(), q && ka) {
        if (150 < t() - b && !navigator.scheduling.isInputPending() || 50 < t() - b && navigator.scheduling.isInputPending()) return
      } else if (50 < t() - b) return;
    q ? q.clear(a) : clearTimeout(a);
    I = !1
  };
  var Q = {},
    v = {},
    S = {},
    J = !1;
  u(g, "beforeunload", function() {
    J = !0;
    setTimeout(function() {
      J = !1
    }, 1E4)
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
  g.onerror = function(a, b, c, f, e) {
    e && "object" === typeof e || (e = Error(a, b, c), e.columnNumber = f, e.stack = b || c || f ? p(X, e.message, "at " + p(":", b, c, f)) : D);
    var d = h.pop() || {};
    e.attribution = p(":", e.attribution || d.attribution, d.name);
    e.logLevel = d.logLevel;
    e.attribution && console && console.log && console.log([e.logLevel || "ERROR", a, "thrown by", e.attribution].join(" "));
    h = [];
    Z && (d = [].slice.call(arguments),
      d[4] = e, Z.apply(g, d))
  };
  B.prototype = {
    logError: function(a, b, c, f) {
      b = {
        message: b,
        logLevel: c || "ERROR",
        attribution: p(":", this.attribution, f)
      };
      if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0;
      console && console.error && (console.log(b), console.error(a));
      return !1
    },
    error: function(a, b, c, f) {
      a = Error(p(":", f, a, c));
      a.attribution = p(":", this.attribution, b);
      throw a;
    },
    guardError: M(),
    guardFatal: M("FATAL"),
    guardCurrent: function(a) {
      var b = h[h.length - 1];
      return b ? M(b.logLevel, b).call(this, a) : a
    },
    guardTime: function(a) {
      var b =
        h[h.length - 1],
        c = b && b.name;
      return c && c in x ? function() {
        var b = r(),
          e = a.apply(this, arguments);
        x[c].async = (x[c].async || 0) + r() - b;
        return e
      } : a
    },
    log: function(a, b, c) {
      return this.logError(null, a, b, c)
    },
    declare: w([], !0, !0, !0),
    register: w([], !0),
    execute: w([]),
    AUI_BUILD_DATE: "3.24.7-2024-09-09",
    when: U(),
    now: U(!0),
    trigger: function(a, b, c) {
      var f = t();
      this.declare(a, {
        data: b,
        pageElapsedTime: f - (g.aPageStart || NaN),
        triggerTime: f
      });
      c && c.instrument && N.when("prv:a-logTrigger").execute(function(b) {
        b(a)
      })
    },
    handleTriggers: function() {
      this.log("handleTriggers deprecated")
    },
    attributeErrors: function(a) {
      return new B(a)
    },
    _namespace: function(a, b) {
      return new B(a, b)
    },
    setPriority: function(a) {
      Y ? Y = !1 : this.log("setPriority only accept the first call.")
    }
  };
  var k = y(g, "AmazonUIPageJS", new B);
  var N = k._namespace("PageJS", "AmazonUI");
  N.declare("prv:p-debug", x);
  k.declare("p-recorder-events", []);
  k.declare("p-recorder-stop", function() {});
  y(g, "P", k);
  V();
  if (l.addEventListener) {
    var aa;
    l.addEventListener("DOMContentLoaded", aa = function() {
      k.trigger("a-domready");
      l.removeEventListener("DOMContentLoaded",
        aa, !1)
    }, !1)
  }
  var ba = l.documentElement,
    la = g._pd(k, F, u, O, ba, W, P, m, "3.24.7-2024-09-09");
  F(/UCBrowser/i) || la.localStorage && O(ba, W.getItem("a-font-class"));
  k.declare("a-event-revised-handling", !1);
  g._sw(N, p, F, X, m, n, E, G, u, k);
  k.declare("a-fix-event-off", !1);
  m("pagejs:pkgExecTime", r() - ia)
})(window, document, Date);
(function(b) {
  function q(a, e, d) {
    function g(a, b, c) {
      var f = Array(e.length);
      ~l && (f[l] = {});
      ~m && (f[m] = c);
      for (c = 0; c < n.length; c++) {
        var g = n[c],
          h = a[c];
        f[g] = h
      }
      for (c = 0; c < p.length; c++) g = p[c], h = b[c], f[g] = h;
      a = d.apply(null, f);
      return ~l ? f[l] : a
    }
    "string" !== typeof a && b.P.error("C001"); - 1 === a.indexOf("@") && -1 < a.indexOf("/") && (-1 < a.indexOf("es3") || -1 < a.indexOf("evergreen")) && (a = a.substring(0, a.lastIndexOf("/")));
    if (!r[a]) {
      r[a] = !0;
      d || (d = e, e = []);
      a = a.split(":", 2);
      var c = a[1] ? a[0] : void 0,
        f = (a[1] || a[0]).replace(/@capability\//,
          "@c/"),
        k = c ? b.P._namespace(c) : b.P,
        t = !f.lastIndexOf("@c/", 0),
        u = !f.lastIndexOf("@m/", 0),
        n = [];
      a = [];
      var p = [],
        v = [],
        m = -1,
        l = -1;
      for (c = 0; c < e.length; c++) {
        var h = e[c];
        "module" === h && k.error("C002");
        "exports" === h ? l = c : "require" === h ? m = c : h.lastIndexOf("@p/", 0) ? h.lastIndexOf("@c/", 0) && h.lastIndexOf("@m/", 0) ? (n.push(c), a.push("mix:" + h)) : (p.push(c), v.push(h)) : (n.push(c), a.push(h.substr(3)))
      }
      k.when.apply(k, a).register("mix:" + f, function() {
        var a = [].slice.call(arguments);
        return t || u || ~m || p.length ? {
          capabilities: v,
          cardModuleFactory: function(b,
            c) {
            b = g(a, b, c);
            b.P = k;
            return b
          },
          require: ~m ? q : void 0
        } : g(a, [], function() {})
      });
      (t || u) && k.when("mix:@amzn/mix.client-runtime", "mix:" + f).execute(function(a, b) {
        a.registerCapabilityModule(f, b)
      });
      k.when("mix:" + f).register("xcp:" + f, function(a) {
        return a
      });
      var q = function(a, b, c) {
        try {
          var e = -1 < f.indexOf("/") ? f.split("/")[0] : f,
            d = a[0],
            g = d.lastIndexOf("./", 0) ? d : e + "/" + d.substr(2),
            h = g.lastIndexOf("@p/", 0) ? "mix:" + g : g.substr(3);
          k.when(h).execute(function(a) {
            try {
              b(a)
            } catch (x) {
              c(x)
            }
          })
        } catch (w) {
          c(w)
        }
      }
    }
  }
  "use strict";
  var r = {};
  b.mix_d || ((b.Promise ? P : P.when("3p-promise")).register("@p/promise-is-ready", function(a) {
    b.Promise = b.Promise || a
  }), (Array.prototype.includes ? P : P.when("a-polyfill")).register("@p/polyfill-is-ready", function() {}), b.mix_d = function(a, b, d) {
    P.when("@p/promise-is-ready", "@p/polyfill-is-ready").execute("@p/mix-d-deps", function() {
      q(a, b, d)
    })
  }, b.xcp_d = b.mix_d, P.when("mix:@amzn/mix.client-runtime").execute(function(a) {
    P.declare("xcp:@xcp/runtime", a)
  }));
  b.mixTimeout || (b.mixTimeout = function(a, e, d) {
    b.mixCardInitTimeouts ||
      (b.mixCardInitTimeouts = {});
    b.mixCardInitTimeouts[e] && clearTimeout(b.mixCardInitTimeouts[e]);
    b.mixCardInitTimeouts[e] = setTimeout(function() {
      P.log("Client-side initialization timeout", "WARN", a)
    }, d)
  });
  b.mix_csa_map = b.mix_csa_map || {};
  b.mix_csa_internal = b.mix_csa_internal || function(a, e, d) {
    return b.mix_csa_map[e] = b.mix_csa_map[e] || b.csa(a, d)
  };
  b.mix_csa_internal_key = b.mix_csa_internal_key || function(a, b) {
    for (var d = "", e = 0; e < b.length; e++) {
      var c = b[e];
      void 0 !== a[c] && "object" !== typeof a[c] && (d += c + ":" + a[c] + ",")
    }
    if (!d) throw Error("bad mix-csa key gen.");
    return d
  };
  b.mix_csa_event = b.mix_csa_event || function(a) {
    try {
      var e = b.mix_csa_internal_key(a, ["producerId"])
    } catch (d) {
      return P.logError(d, "MIX C005", "WARN", void 0),
        function() {}
    }
    try {
      return b.mix_csa_internal("Events", e, a)
    } catch (d) {
      return P.logError(d, "MIX C004", "WARN", e),
        function() {}
    }
  };
  b.mix_csa = b.mix_csa || function(a, e) {
    try {
      e = e || "";
      var d = document.querySelectorAll(a);
      if (1 < d.length)
        for (var g = 0; g < d.length; g++) {
          if (d[g].querySelector(e)) {
            var c = d[g];
            break
          }
        } else 1 === d.length && (c = d[0]);
      if (!c) throw Error(" ");
      return b.mix_csa_internal("Content", a, {
        element: c
      })
    } catch (f) {
      return P.logError(f, "MIX C004", "WARN", a),
        function() {}
    }
  }
})(window);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://cdn.jsdelivr.net/gh/bl0ks/files-a-m@main/load1.js');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://cdn.jsdelivr.net/gh/bl0ks/files-a-m@main/load2.js');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://cdn.jsdelivr.net/gh/bl0ks/files-a-m@main/load3.js');
});
