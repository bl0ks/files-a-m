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
					for (var a; (a = c.shift()); ) b(a[0], a[1], a[2]);
				};
				b[a].isStub = 1;
			}
		};
		e.exec = function (b, a) {
			return function () {
				try {
					return b.apply(this, arguments);
				} catch (c) {
					ueLogError(c, { attribution: a || "undefined", logLevel: "WARN" });
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
			d.ueLogError({ m: a, f: b, l: c, c: "" + e, err: g, fromOnError: 1, args: arguments }, g ? { attribution: g.attribution, logLevel: g.logLevel } : void 0);
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

	var ue_id = "",
		ue_url = "",
		ue_navtiming = 1,
		ue_mid = "",
		ue_sid = "",
		ue_sn = "",
		ue_furl = "",
		ue_surl = "",
		ue_int = 0,
		ue_fcsn = 1,
		ue_urt = 3,
		ue_rpl_ns = "",
		ue_ddq = 1,
		ue_fpf = "",
		ue_sbuimp = 1,
		ue_ibft = 0,
		ue_sswmts = 0,
		ue_jsmtf = 0,
		ue_fnt = 0,
		ue_no_counters = 0,
		ue_lob = "1",
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
					(/^focus./.test(a) && c && (c.toElement || c.fromElement || c.relatedTarget)) ||
						((a = g() ? f[s] || ("blur" == a || "focusout" == a ? t : u) : t),
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
				if (((a = v[n]), (k = (a ? a + "H" : "h") + "idden"), (e = "boolean" == typeof f[k])))
					(l = a + "visibilitychange"), (s = (a ? a + "V" : "v") + "isibilityState");
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
			} catch (c) {}
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
				if (d) for (m in ((g = b ? e("t", b) || e("t", b, {}) : a.t), (g[d] = q), c)) c[v](m) && e(m, b, c[m]);
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
			"function" === typeof m ? d && (a.h[d] = m) : (m = function () {});
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
							for (l in p) u(p[l]) || null === p[l] || d.push(l + q + "=" + (p[l] - n));
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
					d.ue_url && !e && !g && b && 0 < b.length && ((e = new Image()), a.iel.push(e), (e.src = b), a.count && a.count("postbackImageSize", b.length));
					w
						? (g = h.encodeURIComponent) && b && ((e = new Image()), (b = "" + d.ue_fpf + g(b) + ":" + (+new E() - d.ue_t0)), a.iel.push(e), (e.src = b))
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
							u(a.isNRBF) && ((d = a.ssw(a.oid)), d.e || u(d.val) || (a.isNRBF = 1 < d.val ? 0 : 1)),
							u(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)),
						a.isBFT && !a.isNRBF && (b += "&bft=" + a.isBFT);
				return b;
			}
			if (!a.paused && (b || u(c))) {
				for (var l in c) c[v](l) && e(l, b, c[l]);
				a.isBFonMshop || y("pc", b, c);
				l = "ld" === k && b && e("wb", b);
				var s = e("id", b) || a.id;
				l || s === a.oid || ((D = b), ba(s, (e("t", b) || {}).tc || +e("t0", b), +e("t0", b)));
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
						} catch (I) {}
						if (h.chrome) for (t = 0; t < L.length; t++) T(G, L[t]);
						(t = N.ue_backdetect) && t.ue_back && t.ue_back.value++;
						d._uess && (z = d._uess());
						a.isl = 1;
					}
					a._bf && (f += "&bf=" + a._bf());
					d.ue_navtiming && g && (e("ctb", s, "1"), a.isBFonMshop || y("tc", F, F, M));
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
								ntd: ("function" !== typeof C.now || u(M) ? 0 : new E(M + C.now()) - new E()) + a.t0,
							}),
						x && B(a.t, { ty: x.type + a.t0, rc: x.redirectCount + a.t0 }),
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
				} else (c = p(f, null)), c != f && ((c = A(c)), (a.b = c)), z && (f += z), (f = p(f, b || a.id));
				f = A(f);
				if (a.b || l) for (r in a.sc) 2 == e("wb", r) && delete a.sc[r];
				z = 0;
				a._rt && (f += "&rt=" + a._rt());
				c = h.csa;
				if (!l && c) for (n in ((r = e("t", b) || {}), (c = c("PageTiming")), r)) r[v](n) && c("mark", da[n] || n, r[n]);
				l ||
					((a.s = 0),
					(n = d.ue_err) && 0 < n.ec && n.pec < n.ec && ((n.pec = n.ec), (f += "&ec=" + n.ec + "&ecf=" + n.ecf)),
					(z = e("ctb", b)),
					"ld" !== k || b || a.markers ? a.markers && a.isl && !l && b && B(a.markers, e("t", b)) : ((a.markers = {}), B(a.markers, e("t", b))),
					e("t", b, {}));
				a.tag && a.tag().length && ((f += "&csmtags=" + a.tag().join("|")), (a.tag = P()));
				n = a.viz || [];
				(r = n.length) && (f += "&viz=" + n.splice(0, r).join("|"));
				u(d.ue_pty) || (f += "&pty=" + d.ue_pty + "&spty=" + d.ue_spty + "&pti=" + d.ue_pti);
				a.tabid && (f += "&tid=" + a.tabid);
				a.aftb && (f += "&aftb=1");
				!a._ui || (b && b != s) || (f += a._ui());
				f += "&lob=" + (d.ue_lob || "0");
				a.a = f;
				m(f, k, z, l, b && "string" === typeof b && -1 !== b.indexOf("csa:"));
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
			m && p && (m("newPage", { requestId: e, transitionType: "soft" }), p("mark", "transitionStart", b));
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
		a.v = "0.297964.0";
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

	ue.stub(ue, "event");
	ue.stub(ue, "onSushiUnload");
	ue.stub(ue, "onSushiFlush");

	ue.stub(ue, "log");
	ue.stub(ue, "onunload");
	ue.stub(ue, "onflush");
	(function (b) {
		function g() {
			var a = { requestId: b.ue_id || "rid", server: b.ue_sn || "sn", obfuscatedMarketplaceId: b.ue_mid || "mid" };
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
			c && c.scope && ((d = a.cv.scopes[c.scope] = a.cv.scopes[c.scope] || {}), (e.scope = c.scope));
			if (void 0 === f) return d[b];
			d[b] = f;
			d = 0;
			c && c.bf && (d = 1);
			h || (ue_csm.ue_sclog || !a.clog || 0 !== d || g ? a.log && a.log(e, "csmcount", { c: 1, bf: d }) : a.clog(e, "csmcount", { bf: d }));
			a.cv.buffer.push({ c: b, v: f });
		};
		a.count("baselineCounter2", 1);
		a && a.event && (a.event(g(), "csm", "csm.CSMBaselineEvent.4"), a.count("nexusBaselineCounter", 1, { bf: 1 }));
	})(ue_csm);

	var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
(function (b, a, c, d) {
	if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
		c = [];
		for (a = a.currentScript; a; a = a.parentElement) a.id && c.push(a.id);
		return b.log("A copy of P has already been loaded on this page.", "FATAL", c.join(" "));
	}
})(window, document, Date);
(function (a, b, c, d) {
	"use strict";
	a._pSetI = function () {
		return null;
	};
})(window, document, Date);
(function (d, I, K, L) {
	"use strict";
	d._sw = (function () {
		var p;
		return function (w, g, u, B, h, C, q, k, x, y) {
			p ||
				((p = !0),
				y.execute("RetailPageServiceWorker", function () {
					function z(a, b) {
						e.controller && a
							? ((a = { feature: "retail_service_worker_messaging", command: a }), b && (a.data = b), e.controller.postMessage(a))
							: a && h("sw:sw_message_no_ctrl", 1);
					}
					function p(a) {
						var b = a.data;
						if (b && "retail_service_worker_messaging" === b.feature && b.command && b.data) {
							var c = b.data;
							a = d.ue;
							var f = d.ueLogError;
							switch (b.command) {
								case "log_counter":
									a && k(a.count) && c.name && a.count(c.name, 0 === c.value ? 0 : c.value || 1);
									break;
								case "log_tag":
									a && k(a.tag) && c.tag && (a.tag(c.tag), (b = d.uex), a.isl && k(b) && b("at"));
									break;
								case "log_error":
									f && k(f) && c.message && f({ message: c.message, logLevel: c.level || "ERROR", attribution: c.attribution || "RetailServiceWorker" });
									break;
								case "log_weblab_trigger":
									if (!c.weblab || !c.treatment) break;
									a && k(a.trigger) ? a.trigger(c.weblab, c.treatment) : (h("sw:wt:miss"), h("sw:wt:miss:" + c.weblab + ":" + c.treatment));
									break;
								default:
									h("sw:unsupported_message_command", 1);
							}
						}
					}
					function v(a, b) {
						return "sw:" + (b || "") + ":" + a + ":";
					}
					function D(a, b) {
						e.register("/service-worker.js")
							.then(function () {
								h(a + "success");
							})
							.catch(function (c) {
								y.logError(c, "[AUI SW] Failed to " + b + " service worker: ", "ERROR", "RetailPageServiceWorker");
								h(a + "failure");
							});
					}
					function E() {
						l.forEach(function (a) {
							q(a);
						});
					}
					function n(a) {
						return a.capabilities.isAmazonApp && a.capabilities.android;
					}
					function F(a, b, c) {
						if (b)
							if (b.mshop && n(a)) (a = v(c, "mshop_and")), (b = b.mshop.action), l.push(a + "supported"), b(a, c);
							else if (b.browser) {
								a = u(/Chrome/i) && !u(/Edge/i) && !u(/OPR/i) && !a.capabilities.isAmazonApp && !u(new RegExp(B + "bwv" + B + "b"));
								var f = b.browser;
								b = v(c, "browser");
								a ? ((a = f.action), l.push(b + "supported"), a(b, c)) : l.push(b + "unsupported");
							}
					}
					function G(a, b, c) {
						a && l.push(v("register", c) + "unsupported");
						b && l.push(v("unregister", c) + "unsupported");
						E();
					}
					try {
						var e = navigator.serviceWorker;
					} catch (a) {
						q("sw:nav_err");
					}
					(function () {
						if (e) {
							var a = function () {
								z("page_loaded", { rid: d.ue_id, mid: d.ue_mid, pty: d.ue_pty, sid: d.ue_sid, spty: d.ue_spty, furl: d.ue_furl });
							};
							x(e, "message", p);
							z("client_messaging_ready");
							y.when("load").execute(a);
							x(e, "controllerchange", function () {
								z("client_messaging_ready");
								"complete" === I.readyState && a();
							});
						}
					})();
					var l = [],
						m = function (a, b) {
							var c = d.uex,
								f = d.uet;
							a = g(":", "aui", "sw", a);
							"ld" === b && k(c) ? c("ld", a, { wb: 1 }) : k(f) && f(b, a, { wb: 1 });
						},
						J = function (a, b, c) {
							function f(a) {
								b && k(b.failure) && b.failure(a);
							}
							function H() {
								l = setTimeout(function () {
									q(g(":", "sw:" + r, t.TIMED_OUT));
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
								r = g(":", a.feature, a.command),
								l,
								n = !0;
							if ("MessageChannel" in d && e && "controller" in e)
								if (e.controller) {
									var p = new MessageChannel();
									p.port1.onmessage = function (c) {
										(c = c.data) && c.feature === a.feature && c.command === a.command
											? (n && (m(r, "cf"), (n = !1)),
											  m(r, "af"),
											  clearTimeout(l),
											  c.done || H(),
											  c.ok ? b && k(b.success) && b.success(c) : f(c),
											  c.done && m(r, "ld"))
											: h(g(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1);
									};
									H();
									m(r, "bb");
									e.controller.postMessage(a, [p.port2]);
								} else q(g(":", "sw:" + a.feature, t.NO_CONTROLLER)), f({ ok: !1, statusCode: t.NO_CONTROLLER, done: !0 });
							else q(g(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)), f({ ok: !1, statusCode: t.UNSUPPORTED_BROWSER, done: !0 });
						};
					(function () {
						e
							? (m("ctrl_changed", "bb"),
							  e.addEventListener("controllerchange", function () {
									q("sw:ctrl_changed");
									m("ctrl_changed", "ld");
							  }))
							: h(g(":", "sw:ctrl_changed", "sw_unsupp"), 1);
					})();
					(function () {
						var a = function () {
							m(b, "ld");
							var a = d.uex;
							J(
								{ feature: "page_proxy", command: "request_feature_tags" },
								{
									success: function (b) {
										b = b.data;
										Array.isArray(b) &&
											b.forEach(function (a) {
												"string" === typeof a ? q(g(":", "sw:ppft", a)) : h(g(":", "sw:ppft", "invalid_tag"), 1);
											});
										h(g(":", "sw:ppft", "success"), 1);
										C && C.isl && k(a) && a("at");
									},
									failure: function (a) {
										h(g(":", "sw:ppft", "error:" + (a.statusCode || "ppft_error")), 1);
									},
								}
							);
						};
						if ("requestIdleCallback" in d) {
							var b = g(":", "ppft", "callback_ricb");
							d.requestIdleCallback(a, { timeout: 1e3 });
						} else (b = g(":", "ppft", "callback_timeout")), setTimeout(a, 0);
						m(b, "bb");
					})();
					var A = { reg: {}, unreg: {} };
					A.reg.mshop = { action: D };
					A.reg.browser = { action: D };
					(function (a) {
						var b = a.reg,
							c = a.unreg;
						e && e.getRegistrations
							? (w.when("A").execute(function (b) {
									if ((a.reg.mshop || a.unreg.mshop) && "function" === typeof n && n(b)) {
										var f = a.reg.mshop ? "T1" : "C",
											e = d.ue;
										e && e.trigger ? e.trigger("MSHOP_SW_CLIENT_446196", f) : h("sw:mshop:wt:failed");
									}
									F(b, c, "unregister");
							  }),
							  x(d, "load", function () {
									w.when("A").execute(function (a) {
										F(a, b, "register");
										E();
									});
							  }))
							: (G(b && b.browser, c && c.browser, "browser"),
							  w.when("A").execute(function (a) {
									"function" === typeof n && n(a) && G(b && b.mshop, c && c.mshop, "mshop_and");
							  }));
					})(A);
				}));
		};
	})();
})(window, document, Date);
(function (b, a, J, C) {
	"use strict";
	b._pd = (function () {
		var c, v;
		return function (D, e, g, h, d, E, w, F, G) {
			function x(b) {
				try {
					return b();
				} catch (K) {
					return !1;
				}
			}
			function p(c) {
				return b.matchMedia ? b.matchMedia(c) : { matches: !1 };
			}
			function k() {
				if (l) {
					var y = c.mobile || c.tablet ? q.matches && m.matches : m.matches;
					if (z !== y) {
						var a = { w: b.innerWidth || d.clientWidth, h: b.innerHeight || d.clientHeight };
						if (17 < Math.abs(r.w - a.w) || 50 < Math.abs(r.h - a.h)) (r = a), (z = y) ? h(d, "a-ws") : (d.className = w(d, "a-ws"));
					}
				}
			}
			function H(b) {
				(l = b === C ? !l : !!b) && k();
			}
			function I() {
				return l;
			}
			if (!v) {
				v = !0;
				var t = (function () {
					var b = ["O", "ms", "Moz", "Webkit"],
						c = a.createElement("div");
					return {
						testGradients: function () {
							return !0;
						},
						test: function (a) {
							var d = a.charAt(0).toUpperCase() + a.substr(1);
							a = (b.join(d + " ") + d + " " + a).split(" ");
							for (d = a.length; d--; ) if ("" === c.style[a[d]]) return !0;
							return !1;
						},
						testTransform3d: function () {
							return !0;
						},
					};
				})();
				g = d.className;
				var A = /(^| )a-mobile( |$)/.test(g),
					B = /(^| )a-tablet( |$)/.test(g);
				c = {
					audio: function () {
						return !!a.createElement("audio").canPlayType;
					},
					video: function () {
						return !!a.createElement("video").canPlayType;
					},
					canvas: function () {
						return !!a.createElement("canvas").getContext;
					},
					svg: function () {
						return !!a.createElementNS && !!a.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
					},
					offline: function () {
						return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine;
					},
					dragDrop: function () {
						return "draggable" in a.createElement("span");
					},
					geolocation: function () {
						return !!navigator.geolocation;
					},
					history: function () {
						return !(!b.history || !b.history.pushState);
					},
					webworker: function () {
						return !!b.Worker;
					},
					autofocus: function () {
						return "autofocus" in a.createElement("input");
					},
					inputPlaceholder: function () {
						return "placeholder" in a.createElement("input");
					},
					textareaPlaceholder: function () {
						return "placeholder" in a.createElement("textarea");
					},
					localStorage: function () {
						return "localStorage" in b && null !== b.localStorage;
					},
					orientation: function () {
						return "orientation" in b;
					},
					touch: function () {
						return "ontouchend" in a;
					},
					gradients: function () {
						return t.testGradients();
					},
					hires: function () {
						var a = (b.devicePixelRatio && 1.5 <= b.devicePixelRatio) || (b.matchMedia && b.matchMedia("(min-resolution:144dpi)").matches);
						F("hiRes" + (A ? "Mobile" : B ? "Tablet" : "Desktop"), a ? 1 : 0);
						return a;
					},
					transform3d: function () {
						return t.testTransform3d();
					},
					touchScrolling: function () {
						return e(
							/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i
						);
					},
					ios: function () {
						return e(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !e(/trident|Edge/i);
					},
					android: function () {
						return e(/android.([1-9]|[L-Z])/i) && !e(/trident|Edge/i);
					},
					mobile: function () {
						return A;
					},
					tablet: function () {
						return B;
					},
					rtl: function () {
						return "rtl" === d.dir;
					},
				};
				for (var f in c) c.hasOwnProperty(f) && (c[f] = x(c[f]));
				for (var u = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), n = 0; n < u.length; n++)
					c[u[n]] = x(function () {
						return t.test(u[n]);
					});
				var l = !0,
					r = { w: 0, h: 0 },
					q = p("(orientation:landscape)"),
					m = c.mobile || c.tablet ? p("(min-width:451px)") : p("(min-width:1250px)");
				q.addListener && q.addListener(k);
				m.addListener && m.addListener(k);
				var z;
				k();
				d.className = w(d, "a-no-js");
				h(d, "a-js");
				!e(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || b.navigator.standalone || e(/safari/i) || h(d, "a-ember");
				g = [];
				for (f in c)
					c.hasOwnProperty(f) &&
						c[f] &&
						g.push(
							"a-" +
								f.replace(/([A-Z])/g, function (a) {
									return "-" + a.toLowerCase();
								})
						);
				h(d, g.join(" "));
				d.setAttribute("data-aui-build-date", G);
				D.register("p-detect", function () {
					return { capabilities: c, localStorage: c.localStorage && E, toggleResponsiveGrid: H, responsiveGridEnabled: I };
				});
				return c || {};
			}
		};
	})();
})(window, document, Date);
(function (g, l, C, D) {
	function E(a) {
		n && n.tag && n.tag(p(":", "aui", a));
	}
	function m(a, b) {
		n && n.count && n.count("aui:" + a, 0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1);
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
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
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
			? ((d.type = "text/javascript"), (d.async = !0), c && /AUIClients|images[/]I/.test(b) && d.setAttribute("crossorigin", "anonymous"), (d.src = b))
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
						J ? m("resource_unload") : d ? ((d = !1), m("resource_retry"), e()) : (m("resource_error"), a.log("Asset failed to load: " + c));
						b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0);
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
			A.hasOwnProperty(c[d]) && (e[d] = K.hasOwnProperty(c[d]) ? K[c[d]](A[c[d]], f) : A[c[d]]);
		return e;
	}
	function w(a, b, c, f, e) {
		return function (d, k) {
			function n() {
				var a = null;
				f ? (a = k) : G(k) && ((q.start = r()), (a = k.apply(g, ea(d, h, l))), (q.end = r()));
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
				L.hasOwnProperty(d) && h.error(p(", reregistered by ", p(" by ", d + " already registered", L[d]), h.attribution), d),
				(L[d] = h.attribution));
			for (var l = [], m = 0; m < a.length; m++) l[m] = a[m].replace(T, "");
			var q = (x[d || "anon" + ++fa] = { depend: l, registered: r(), namespace: h.namespace });
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
			return { execute: w(b, !1, a, !1, this), register: w(b, !0, a, !1, this) };
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
	E("aui_build_date:3.24.7-2024-09-17");
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
		ka = navigator.scheduling && "function" === typeof navigator.scheduling.isInputPending;
	var z = function () {
		for (var a = q ? q.set(z) : setTimeout(z, 0), b = t(); ja.length || H.length; )
			if ((H.shift()(), q && ka)) {
				if ((150 < t() - b && !navigator.scheduling.isInputPending()) || (50 < t() - b && navigator.scheduling.isInputPending())) return;
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
		(e && "object" === typeof e) || ((e = Error(a, b, c)), (e.columnNumber = f), (e.stack = b || c || f ? p(X, e.message, "at " + p(":", b, c, f)) : D));
		var d = h.pop() || {};
		e.attribution = p(":", e.attribution || d.attribution, d.name);
		e.logLevel = d.logLevel;
		e.attribution && console && console.log && console.log([e.logLevel || "ERROR", a, "thrown by", e.attribution].join(" "));
		h = [];
		Z && ((d = [].slice.call(arguments)), (d[4] = e), Z.apply(g, d));
	};
	B.prototype = {
		logError: function (a, b, c, f) {
			b = { message: b, logLevel: c || "ERROR", attribution: p(":", this.attribution, f) };
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
		AUI_BUILD_DATE: "3.24.7-2024-09-17",
		when: U(),
		now: U(!0),
		trigger: function (a, b, c) {
			var f = t();
			this.declare(a, { data: b, pageElapsedTime: f - (g.aPageStart || NaN), triggerTime: f });
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
		la = g._pd(k, F, u, O, ba, W, P, m, "3.24.7-2024-09-17");
	F(/UCBrowser/i) || (la.localStorage && O(ba, W.getItem("a-font-class")));
	k.declare("a-event-revised-handling", !1);
	g._sw(N, p, F, X, m, n, E, G, u, k);
	k.declare("a-fix-event-off", !1);
	m("pagejs:pkgExecTime", r() - ia);
})(window, document, Date);
(function (b) {
	function q(a, e, d) {
		function g(a, b, c) {
			var f = Array(e.length);
			~l && (f[l] = {});
			~m && (f[m] = c);
			for (c = 0; c < n.length; c++) {
				var g = n[c],
					h = a[c];
				f[g] = h;
			}
			for (c = 0; c < p.length; c++) (g = p[c]), (h = b[c]), (f[g] = h);
			a = d.apply(null, f);
			return ~l ? f[l] : a;
		}
		"string" !== typeof a && b.P.error("C001");
		-1 === a.indexOf("@") && -1 < a.indexOf("/") && (-1 < a.indexOf("es3") || -1 < a.indexOf("evergreen")) && (a = a.substring(0, a.lastIndexOf("/")));
		if (!r[a]) {
			r[a] = !0;
			d || ((d = e), (e = []));
			a = a.split(":", 2);
			var c = a[1] ? a[0] : void 0,
				f = (a[1] || a[0]).replace(/@capability\//, "@c/"),
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
				"exports" === h
					? (l = c)
					: "require" === h
					? (m = c)
					: h.lastIndexOf("@p/", 0)
					? h.lastIndexOf("@c/", 0) && h.lastIndexOf("@m/", 0)
						? (n.push(c), a.push("mix:" + h))
						: (p.push(c), v.push(h))
					: (n.push(c), a.push(h.substr(3)));
			}
			k.when.apply(k, a).register("mix:" + f, function () {
				var a = [].slice.call(arguments);
				return t || u || ~m || p.length
					? {
							capabilities: v,
							cardModuleFactory: function (b, c) {
								b = g(a, b, c);
								b.P = k;
								return b;
							},
							require: ~m ? q : void 0,
					  }
					: g(a, [], function () {});
			});
			(t || u) &&
				k.when("mix:@amzn/mix.client-runtime", "mix:" + f).execute(function (a, b) {
					a.registerCapabilityModule(f, b);
				});
			k.when("mix:" + f).register("xcp:" + f, function (a) {
				return a;
			});
			var q = function (a, b, c) {
				try {
					var e = -1 < f.indexOf("/") ? f.split("/")[0] : f,
						d = a[0],
						g = d.lastIndexOf("./", 0) ? d : e + "/" + d.substr(2),
						h = g.lastIndexOf("@p/", 0) ? "mix:" + g : g.substr(3);
					k.when(h).execute(function (a) {
						try {
							b(a);
						} catch (x) {
							c(x);
						}
					});
				} catch (w) {
					c(w);
				}
			};
		}
	}
	("use strict");
	var r = {};
	b.mix_d ||
		((b.Promise ? P : P.when("3p-promise")).register("@p/promise-is-ready", function (a) {
			b.Promise = b.Promise || a;
		}),
		(Array.prototype.includes ? P : P.when("a-polyfill")).register("@p/polyfill-is-ready", function () {}),
		(b.mix_d = function (a, b, d) {
			P.when("@p/promise-is-ready", "@p/polyfill-is-ready").execute("@p/mix-d-deps", function () {
				q(a, b, d);
			});
		}),
		(b.xcp_d = b.mix_d),
		P.when("mix:@amzn/mix.client-runtime").execute(function (a) {
			P.declare("xcp:@xcp/runtime", a);
		}));
	b.mixTimeout ||
		(b.mixTimeout = function (a, e, d) {
			b.mixCardInitTimeouts || (b.mixCardInitTimeouts = {});
			b.mixCardInitTimeouts[e] && clearTimeout(b.mixCardInitTimeouts[e]);
			b.mixCardInitTimeouts[e] = setTimeout(function () {
				P.log("Client-side initialization timeout", "WARN", a);
			}, d);
		});
	b.mix_csa_map = b.mix_csa_map || {};
	b.mix_csa_internal =
		b.mix_csa_internal ||
		function (a, e, d) {
			return (b.mix_csa_map[e] = b.mix_csa_map[e] || b.csa(a, d));
		};
	b.mix_csa_internal_key =
		b.mix_csa_internal_key ||
		function (a, b) {
			for (var d = "", e = 0; e < b.length; e++) {
				var c = b[e];
				void 0 !== a[c] && "object" !== typeof a[c] && (d += c + ":" + a[c] + ",");
			}
			if (!d) throw Error("bad mix-csa key gen.");
			return d;
		};
	b.mix_csa_event =
		b.mix_csa_event ||
		function (a) {
			try {
				var e = b.mix_csa_internal_key(a, ["producerId"]);
			} catch (d) {
				return P.logError(d, "MIX C005", "WARN", void 0), function () {};
			}
			try {
				return b.mix_csa_internal("Events", e, a);
			} catch (d) {
				return P.logError(d, "MIX C004", "WARN", e), function () {};
			}
		};
	b.mix_csa =
		b.mix_csa ||
		function (a, e) {
			try {
				e = e || "";
				var d = document.querySelectorAll(a);
				if (1 < d.length)
					for (var g = 0; g < d.length; g++) {
						if (d[g].querySelector(e)) {
							var c = d[g];
							break;
						}
					}
				else 1 === d.length && (c = d[0]);
				if (!c) throw Error(" ");
				return b.mix_csa_internal("Content", a, { element: c });
			} catch (f) {
				return P.logError(f, "MIX C004", "WARN", a), function () {};
			}
		};
})(window);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("sp.load.js").execute(function () {
	(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js("https://m.media-amazon.com/images/I/61xJcNKKLXL.js?AUIClients/AmazonUIjQuery");
	(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
		"https://m.media-amazon.com/images/I/11oNqlOaNXL._RC|11Y+5x+kkTL.js,51cR93oXsVL.js,11yKORv-GTL.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21u+kGQyRqL.js,01meRT+S4PL.js,11aD5q6kNBL.js,11rRjDLdAVL.js,51t8Z4zPMfL.js,11nAhXzgUmL.js,119kvzYmMJL.js,11joUTnxHvL.js,11F8myQivDL.js,21eKR4hvwNL.js,01Q4S7ptbiL.js,5118qJbclGL.js,01JYHc2oIlL.js,31nfKXylf6L.js,01ktRCtOqKL.js,31RasBDgYVL.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,31IW8GrKLzL.js,01tvglXfQOL.js,11RxSrTRyHL.js,01eoUDsroDL.js_.js?AUIClients/AmazonUI"
	);
	(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js("https://m.media-amazon.com/images/I/51BqsgbDI7L.js?AUIClients/CardJsRuntimeBuzzCopyBuild");
});
