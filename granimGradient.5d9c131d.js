parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    U9P6: [
      function (require, module, exports) {
        var define;
        var t;
        !(function () {
          var e = {};
          function i(t) {
            if (void 0 === t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          }
          function n(t, e) {
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = e);
          }
          var r,
            s,
            a,
            o,
            u,
            h,
            l,
            f,
            p,
            c = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
            d = { duration: 0.5, overwrite: !1, delay: 0 },
            _ = 1e8,
            m = 1e-8,
            g = 2 * Math.PI,
            y = g / 4,
            v = 0,
            x = Math.sqrt,
            w = Math.cos,
            b = Math.sin,
            T = function (t) {
              return 'string' == typeof t;
            },
            E = function (t) {
              return 'function' == typeof t;
            },
            M = function (t) {
              return 'number' == typeof t;
            },
            k = function (t) {
              return void 0 === t;
            },
            P = function (t) {
              return 'object' == typeof t;
            },
            C = function (t) {
              return !1 !== t;
            },
            O = function () {
              return 'undefined' != typeof window;
            },
            S = function (t) {
              return E(t) || T(t);
            },
            A = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
            D = Array.isArray,
            z = /(?:-?\.?\d|\.)+/gi,
            L = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            F = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            B = /[+-]=-?[.\d]+/,
            I = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            U = /[\d.+\-=]+(?:e[-+]\d*)*/i,
            H = {},
            Y = {},
            X = function (t) {
              return (Y = dt(t, H)) && We;
            },
            N = function (t, e) {
              return console.warn(
                'Invalid property',
                t,
                'set to',
                e,
                'Missing plugin? gsap.registerPlugin()',
              );
            },
            V = function (t, e) {
              return !e && console.warn(t);
            },
            q = function (t, e) {
              return (t && (H[t] = e) && Y && (Y[t] = e)) || H;
            },
            G = function () {
              return 0;
            },
            j = {},
            W = [],
            Q = {},
            Z = {},
            $ = {},
            J = 30,
            K = [],
            tt = '',
            et = function (t) {
              var e,
                i,
                n = t[0];
              if ((P(n) || E(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
                for (i = K.length; i-- && !K[i].targetTest(n); );
                e = K[i];
              }
              for (i = t.length; i--; )
                (t[i] && (t[i]._gsap || (t[i]._gsap = new xe(t[i], e)))) || t.splice(i, 1);
              return t;
            },
            it = function (t) {
              return t._gsap || et(Ht(t))[0]._gsap;
            },
            nt = function (t, e, i) {
              return (i = t[e]) && E(i)
                ? t[e]()
                : (k(i) && t.getAttribute && t.getAttribute(e)) || i;
            },
            rt = function (t, e) {
              return (t = t.split(',')).forEach(e) || t;
            },
            st = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
            },
            at = function (t, e) {
              for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
              return n < i;
            },
            ot = function (t, e, i) {
              var n,
                r = M(t[1]),
                s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                a = t[s];
              if ((r && (a.duration = t[1]), (a.parent = i), e)) {
                for (n = a; i && !('immediateRender' in n); )
                  (n = i.vars.defaults || {}), (i = C(i.vars.inherit) && i.parent);
                (a.immediateRender = C(n.immediateRender)),
                  e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
              }
              return a;
            },
            ut = function () {
              var t,
                e,
                i = W.length,
                n = W.slice(0);
              for (Q = {}, W.length = 0, t = 0; t < i; t++)
                (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
            },
            ht = function (t, e, i, n) {
              W.length && ut(), t.render(e, i, n), W.length && ut();
            },
            lt = function (t) {
              var e = parseFloat(t);
              return (e || 0 === e) && (t + '').match(I).length < 2 ? e : T(t) ? t.trim() : t;
            },
            ft = function (t) {
              return t;
            },
            pt = function (t, e) {
              for (var i in e) i in t || (t[i] = e[i]);
              return t;
            },
            ct = function (t, e) {
              for (var i in e) i in t || 'duration' === i || 'ease' === i || (t[i] = e[i]);
            },
            dt = function (t, e) {
              for (var i in e) t[i] = e[i];
              return t;
            },
            _t = function t(e, i) {
              for (var n in i)
                '__proto__' !== n &&
                  'constructor' !== n &&
                  'prototype' !== n &&
                  (e[n] = P(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
              return e;
            },
            mt = function (t, e) {
              var i,
                n = {};
              for (i in t) i in e || (n[i] = t[i]);
              return n;
            },
            gt = function (t) {
              var e = t.parent || s,
                i = t.keyframes ? ct : pt;
              if (C(t.inherit)) for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
              return t;
            },
            yt = function (t, e, i, n) {
              void 0 === i && (i = '_first'), void 0 === n && (n = '_last');
              var r = e._prev,
                s = e._next;
              r ? (r._next = s) : t[i] === e && (t[i] = s),
                s ? (s._prev = r) : t[n] === e && (t[n] = r),
                (e._next = e._prev = e.parent = null);
            },
            vt = function (t, e) {
              t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
            },
            xt = function (t, e) {
              if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
              return t;
            },
            wt = function t(e) {
              return !e || (e._ts && t(e.parent));
            },
            bt = function (t) {
              return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
            },
            Tt = function (t, e) {
              var i = Math.floor((t /= e));
              return t && i === t ? i - 1 : i;
            },
            Et = function (t, e) {
              return (
                (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
              );
            },
            Mt = function (t) {
              return (t._end = st(t._start + (t._tDur / Math.abs(t._ts || t._rts || m) || 0)));
            },
            kt = function (t, e) {
              var i = t._dp;
              return (
                i &&
                  i.smoothChildTiming &&
                  t._ts &&
                  ((t._start = st(
                    i._time -
                      (t._ts > 0
                        ? e / t._ts
                        : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
                  )),
                  Mt(t),
                  i._dirty || xt(i, t)),
                t
              );
            },
            Pt = function (t, e) {
              var i;
              if (
                ((e._time || (e._initted && !e._dur)) &&
                  ((i = Et(t.rawTime(), e)),
                  (!e._dur || Ft(0, e.totalDuration(), i) - e._tTime > m) && e.render(i, !0)),
                xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
              ) {
                if (t._dur < t.duration())
                  for (i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
                t._zTime = -m;
              }
            },
            Ct = function (t, e, i, n) {
              return (
                e.parent && vt(e),
                (e._start = st(i + e._delay)),
                (e._end = st(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                (function (t, e, i, n, r) {
                  void 0 === i && (i = '_first'), void 0 === n && (n = '_last');
                  var s,
                    a = t[n];
                  if (r) for (s = e[r]; a && a[r] > s; ) a = a._prev;
                  a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[i]), (t[i] = e)),
                    e._next ? (e._next._prev = e) : (t[n] = e),
                    (e._prev = a),
                    (e.parent = e._dp = t);
                })(t, e, '_first', '_last', t._sort ? '_start' : 0),
                (t._recent = e),
                n || Pt(t, e),
                t
              );
            },
            Ot = function (t, e) {
              return (H.ScrollTrigger || N('scrollTrigger', e)) && H.ScrollTrigger.create(e, t);
            },
            St = function (t, e, i, n) {
              return (
                ke(t, e),
                t._initted
                  ? !i &&
                    t._pt &&
                    ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                    l !== oe.frame
                    ? (W.push(t), (t._lazy = [e, n]), 1)
                    : void 0
                  : 1
              );
            },
            At = function (t, e, i, n) {
              var r = t._repeat,
                s = st(e) || 0,
                a = t._tTime / t._tDur;
              return (
                a && !n && (t._time *= s / t._dur),
                (t._dur = s),
                (t._tDur = r ? (r < 0 ? 1e10 : st(s * (r + 1) + t._rDelay * r)) : s),
                a && !n ? kt(t, (t._tTime = t._tDur * a)) : t.parent && Mt(t),
                i || xt(t.parent, t),
                t
              );
            },
            Dt = function (t) {
              return t instanceof be ? xt(t) : At(t, t._dur);
            },
            zt = { _start: 0, endTime: G },
            Lt = function t(e, i) {
              var n,
                r,
                s = e.labels,
                a = e._recent || zt,
                o = e.duration() >= _ ? a.endTime(!1) : e._dur;
              return T(i) && (isNaN(i) || i in s)
                ? '<' === (n = i.charAt(0)) || '>' === n
                  ? ('<' === n ? a._start : a.endTime(a._repeat >= 0)) +
                    (parseFloat(i.substr(1)) || 0)
                  : (n = i.indexOf('=')) < 0
                  ? (i in s || (s[i] = o), s[i])
                  : ((r = +(i.charAt(n - 1) + i.substr(n + 1))),
                    n > 1 ? t(e, i.substr(0, n - 1)) + r : o + r)
                : null == i
                ? o
                : +i;
            },
            Rt = function (t, e) {
              return t || 0 === t ? e(t) : e;
            },
            Ft = function (t, e, i) {
              return i < t ? t : i > e ? e : i;
            },
            Bt = function (t) {
              if ('string' != typeof t) return '';
              var e = U.exec(t);
              return e ? t.substr(e.index + e[0].length) : '';
            },
            It = [].slice,
            Ut = function (t, e) {
              return (
                t &&
                P(t) &&
                'length' in t &&
                ((!e && !t.length) || (t.length - 1 in t && P(t[0]))) &&
                !t.nodeType &&
                t !== a
              );
            },
            Ht = function (t, e) {
              return !T(t) || e || (!o && ue())
                ? D(t)
                  ? (function (t, e, i) {
                      return (
                        void 0 === i && (i = []),
                        t.forEach(function (t) {
                          var n;
                          return (T(t) && !e) || Ut(t, 1)
                            ? (n = i).push.apply(n, Ht(t))
                            : i.push(t);
                        }) || i
                      );
                    })(t, e)
                  : Ut(t)
                  ? It.call(t, 0)
                  : t
                  ? [t]
                  : []
                : It.call(u.querySelectorAll(t), 0);
            },
            Yt = function (t) {
              return t.sort(function () {
                return 0.5 - Math.random();
              });
            },
            Xt = function (t) {
              if (E(t)) return t;
              var e = P(t) ? t : { each: t },
                i = _e(e.ease),
                n = e.from || 0,
                r = parseFloat(e.base) || 0,
                s = {},
                a = n > 0 && n < 1,
                o = isNaN(n) || a,
                u = e.axis,
                h = n,
                l = n;
              return (
                T(n)
                  ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                  : !a && o && ((h = n[0]), (l = n[1])),
                function (t, a, f) {
                  var p,
                    c,
                    d,
                    m,
                    g,
                    y,
                    v,
                    w,
                    b,
                    T = (f || e).length,
                    E = s[T];
                  if (!E) {
                    if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, _])[1])) {
                      for (v = -_; v < (v = f[b++].getBoundingClientRect().left) && b < T; );
                      b--;
                    }
                    for (
                      E = s[T] = [],
                        p = o ? Math.min(b, T) * h - 0.5 : n % b,
                        c = o ? (T * l) / b - 0.5 : (n / b) | 0,
                        v = 0,
                        w = _,
                        y = 0;
                      y < T;
                      y++
                    )
                      (d = (y % b) - p),
                        (m = c - ((y / b) | 0)),
                        (E[y] = g = u ? Math.abs('y' === u ? m : d) : x(d * d + m * m)),
                        g > v && (v = g),
                        g < w && (w = g);
                    'random' === n && Yt(E),
                      (E.max = v - w),
                      (E.min = w),
                      (E.v = T =
                        (parseFloat(e.amount) ||
                          parseFloat(e.each) *
                            (b > T ? T - 1 : u ? ('y' === u ? T / b : b) : Math.max(b, T / b)) ||
                          0) * ('edges' === n ? -1 : 1)),
                      (E.b = T < 0 ? r - T : r),
                      (E.u = Bt(e.amount || e.each) || 0),
                      (i = i && T < 0 ? ce(i) : i);
                  }
                  return (T = (E[t] - E.min) / E.max || 0), st(E.b + (i ? i(T) : T) * E.v) + E.u;
                }
              );
            },
            Nt = function (t) {
              var e = t < 1 ? Math.pow(10, (t + '').length - 2) : 1;
              return function (i) {
                var n = Math.round(parseFloat(i) / t) * t * e;
                return (n - (n % 1)) / e + (M(i) ? 0 : Bt(i));
              };
            },
            Vt = function (t, e) {
              var i,
                n,
                r = D(t);
              return (
                !r &&
                  P(t) &&
                  ((i = r = t.radius || _),
                  t.values
                    ? ((t = Ht(t.values)), (n = !M(t[0])) && (i *= i))
                    : (t = Nt(t.increment))),
                Rt(
                  e,
                  r
                    ? E(t)
                      ? function (e) {
                          return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                        }
                      : function (e) {
                          for (
                            var r,
                              s,
                              a = parseFloat(n ? e.x : e),
                              o = parseFloat(n ? e.y : 0),
                              u = _,
                              h = 0,
                              l = t.length;
                            l--;

                          )
                            (r = n
                              ? (r = t[l].x - a) * r + (s = t[l].y - o) * s
                              : Math.abs(t[l] - a)) < u && ((u = r), (h = l));
                          return (
                            (h = !i || u <= i ? t[h] : e), n || h === e || M(e) ? h : h + Bt(e)
                          );
                        }
                    : Nt(t),
                )
              );
            },
            qt = function (t, e, i, n) {
              return Rt(D(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
                return D(t)
                  ? t[~~(Math.random() * t.length)]
                  : (i = i || 1e-5) &&
                      (n = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
                      Math.floor(
                        Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) * i * n,
                      ) / n;
              });
            },
            Gt = function (t, e, i) {
              return Rt(i, function (i) {
                return t[~~e(i)];
              });
            },
            jt = function (t) {
              for (var e, i, n, r, s = 0, a = ''; ~(e = t.indexOf('random(', s)); )
                (n = t.indexOf(')', e)),
                  (r = '[' === t.charAt(e + 7)),
                  (i = t.substr(e + 7, n - e - 7).match(r ? I : z)),
                  (a += t.substr(s, e - s) + qt(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
                  (s = n + 1);
              return a + t.substr(s, t.length - s);
            },
            Wt = function (t, e, i, n, r) {
              var s = e - t,
                a = n - i;
              return Rt(r, function (e) {
                return i + (((e - t) / s) * a || 0);
              });
            },
            Qt = function (t, e, i) {
              var n,
                r,
                s,
                a = t.labels,
                o = _;
              for (n in a)
                (r = a[n] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && ((s = n), (o = r));
              return s;
            },
            Zt = function (t, e, i) {
              var n,
                r,
                s = t.vars,
                a = s[e];
              if (a)
                return (
                  (n = s[e + 'Params']),
                  (r = s.callbackScope || t),
                  i && W.length && ut(),
                  n ? a.apply(r, n) : a.call(r)
                );
            },
            $t = function (t) {
              return vt(t), t.progress() < 1 && Zt(t, 'onInterrupt'), t;
            },
            Jt = 255,
            Kt = {
              aqua: [0, Jt, Jt],
              lime: [0, Jt, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, Jt],
              navy: [0, 0, 128],
              white: [Jt, Jt, Jt],
              olive: [128, 128, 0],
              yellow: [Jt, Jt, 0],
              orange: [Jt, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [Jt, 0, 0],
              pink: [Jt, 192, 203],
              cyan: [0, Jt, Jt],
              transparent: [Jt, Jt, Jt, 0],
            },
            te = function (t, e, i) {
              return (
                ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) *
                  Jt +
                  0.5) |
                0
              );
            },
            ee = function (t, e, i) {
              var n,
                r,
                s,
                a,
                o,
                u,
                h,
                l,
                f,
                p,
                c = t ? (M(t) ? [t >> 16, (t >> 8) & Jt, t & Jt] : 0) : Kt.black;
              if (!c) {
                if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), Kt[t])) c = Kt[t];
                else if ('#' === t.charAt(0)) {
                  if (
                    (t.length < 6 &&
                      ((n = t.charAt(1)),
                      (r = t.charAt(2)),
                      (s = t.charAt(3)),
                      (t =
                        '#' +
                        n +
                        n +
                        r +
                        r +
                        s +
                        s +
                        (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                    9 === t.length)
                  )
                    return [
                      (c = parseInt(t.substr(1, 6), 16)) >> 16,
                      (c >> 8) & Jt,
                      c & Jt,
                      parseInt(t.substr(7), 16) / 255,
                    ];
                  c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Jt, t & Jt];
                } else if ('hsl' === t.substr(0, 3))
                  if (((c = p = t.match(z)), e)) {
                    if (~t.indexOf('='))
                      return (c = t.match(L)), i && c.length < 4 && (c[3] = 1), c;
                  } else
                    (a = (+c[0] % 360) / 360),
                      (o = +c[1] / 100),
                      (n = 2 * (u = +c[2] / 100) - (r = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                      c.length > 3 && (c[3] *= 1),
                      (c[0] = te(a + 1 / 3, n, r)),
                      (c[1] = te(a, n, r)),
                      (c[2] = te(a - 1 / 3, n, r));
                else c = t.match(z) || Kt.transparent;
                c = c.map(Number);
              }
              return (
                e &&
                  !p &&
                  ((n = c[0] / Jt),
                  (r = c[1] / Jt),
                  (s = c[2] / Jt),
                  (u = ((h = Math.max(n, r, s)) + (l = Math.min(n, r, s))) / 2),
                  h === l
                    ? (a = o = 0)
                    : ((f = h - l),
                      (o = u > 0.5 ? f / (2 - h - l) : f / (h + l)),
                      (a =
                        h === n
                          ? (r - s) / f + (r < s ? 6 : 0)
                          : h === r
                          ? (s - n) / f + 2
                          : (n - r) / f + 4),
                      (a *= 60)),
                  (c[0] = ~~(a + 0.5)),
                  (c[1] = ~~(100 * o + 0.5)),
                  (c[2] = ~~(100 * u + 0.5))),
                i && c.length < 4 && (c[3] = 1),
                c
              );
            },
            ie = function (t) {
              var e = [],
                i = [],
                n = -1;
              return (
                t.split(re).forEach(function (t) {
                  var r = t.match(R) || [];
                  e.push.apply(e, r), i.push((n += r.length + 1));
                }),
                (e.c = i),
                e
              );
            },
            ne = function (t, e, i) {
              var n,
                r,
                s,
                a,
                o = '',
                u = (t + o).match(re),
                h = e ? 'hsla(' : 'rgba(',
                l = 0;
              if (!u) return t;
              if (
                ((u = u.map(function (t) {
                  return (
                    (t = ee(t, e, 1)) &&
                    h + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')'
                  );
                })),
                i && ((s = ie(t)), (n = i.c).join(o) !== s.c.join(o)))
              )
                for (a = (r = t.replace(re, '1').split(R)).length - 1; l < a; l++)
                  o +=
                    r[l] +
                    (~n.indexOf(l)
                      ? u.shift() || h + '0,0,0,0)'
                      : (s.length ? s : u.length ? u : i).shift());
              if (!r) for (a = (r = t.split(re)).length - 1; l < a; l++) o += r[l] + u[l];
              return o + r[a];
            },
            re = (function () {
              var t,
                e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
              for (t in Kt) e += '|' + t + '\\b';
              return new RegExp(e + ')', 'gi');
            })(),
            se = /hsl[a]?\(/,
            ae = function (t) {
              var e,
                i = t.join(' ');
              if (((re.lastIndex = 0), re.test(i)))
                return (e = se.test(i)), (t[1] = ne(t[1], e)), (t[0] = ne(t[0], e, ie(t[1]))), !0;
            },
            oe = (function () {
              var t,
                e,
                i,
                n,
                r,
                s,
                l = Date.now,
                f = 500,
                c = 33,
                d = l(),
                _ = d,
                g = 1e3 / 240,
                y = g,
                v = [],
                x = function i(a) {
                  var o,
                    u,
                    h,
                    p,
                    m = l() - _,
                    x = !0 === a;
                  if (
                    (m > f && (d += m - c),
                    ((o = (h = (_ += m) - d) - y) > 0 || x) &&
                      ((p = ++n.frame),
                      (r = h - 1e3 * n.time),
                      (n.time = h /= 1e3),
                      (y += o + (o >= g ? 4 : g - o)),
                      (u = 1)),
                    x || (t = e(i)),
                    u)
                  )
                    for (s = 0; s < v.length; s++) v[s](h, r, p, a);
                };
              return (n = {
                time: 0,
                frame: 0,
                tick: function () {
                  x(!0);
                },
                deltaRatio: function (t) {
                  return r / (1e3 / (t || 60));
                },
                wake: function () {
                  h &&
                    (!o &&
                      O() &&
                      ((a = o = window),
                      (u = a.document || {}),
                      (H.gsap = We),
                      (a.gsapVersions || (a.gsapVersions = [])).push(We.version),
                      X(Y || a.GreenSockGlobals || (!a.gsap && a) || {}),
                      (i = a.requestAnimationFrame)),
                    t && n.sleep(),
                    (e =
                      i ||
                      function (t) {
                        return setTimeout(t, (y - 1e3 * n.time + 1) | 0);
                      }),
                    (p = 1),
                    x(2));
                },
                sleep: function () {
                  (i ? a.cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = G);
                },
                lagSmoothing: function (t, e) {
                  (f = t || 1 / m), (c = Math.min(e, f, 0));
                },
                fps: function (t) {
                  (g = 1e3 / (t || 240)), (y = 1e3 * n.time + g);
                },
                add: function (t) {
                  v.indexOf(t) < 0 && v.push(t), ue();
                },
                remove: function (t) {
                  var e;
                  ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
                },
                _listeners: v,
              });
            })(),
            ue = function () {
              return !p && oe.wake();
            },
            he = {},
            le = /^[\d.\-M][\d.\-,\s]/,
            fe = /["']/g,
            pe = function (t) {
              for (
                var e,
                  i,
                  n,
                  r = {},
                  s = t.substr(1, t.length - 3).split(':'),
                  a = s[0],
                  o = 1,
                  u = s.length;
                o < u;
                o++
              )
                (i = s[o]),
                  (e = o !== u - 1 ? i.lastIndexOf(',') : i.length),
                  (n = i.substr(0, e)),
                  (r[a] = isNaN(n) ? n.replace(fe, '').trim() : +n),
                  (a = i.substr(e + 1).trim());
              return r;
            },
            ce = function (t) {
              return function (e) {
                return 1 - t(1 - e);
              };
            },
            de = function t(e, i) {
              for (var n, r = e._first; r; )
                r instanceof be
                  ? t(r, i)
                  : !r.vars.yoyoEase ||
                    (r._yoyo && r._repeat) ||
                    r._yoyo === i ||
                    (r.timeline
                      ? t(r.timeline, i)
                      : ((n = r._ease), (r._ease = r._yEase), (r._yEase = n), (r._yoyo = i))),
                  (r = r._next);
            },
            _e = function (t, e) {
              return (
                (t &&
                  (E(t)
                    ? t
                    : he[t] ||
                      (function (t) {
                        var e = (t + '').split('('),
                          i = he[e[0]];
                        return i && e.length > 1 && i.config
                          ? i.config.apply(
                              null,
                              ~t.indexOf('{')
                                ? [pe(e[1])]
                                : (function (t) {
                                    var e = t.indexOf('(') + 1,
                                      i = t.indexOf(')'),
                                      n = t.indexOf('(', e);
                                    return t.substring(e, ~n && n < i ? t.indexOf(')', i + 1) : i);
                                  })(t)
                                    .split(',')
                                    .map(lt),
                            )
                          : he._CE && le.test(t)
                          ? he._CE('', t)
                          : i;
                      })(t))) ||
                e
              );
            },
            me = function (t, e, i, n) {
              void 0 === i &&
                (i = function (t) {
                  return 1 - e(1 - t);
                }),
                void 0 === n &&
                  (n = function (t) {
                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                  });
              var r,
                s = { easeIn: e, easeOut: i, easeInOut: n };
              return (
                rt(t, function (t) {
                  for (var e in ((he[t] = H[t] = s), (he[(r = t.toLowerCase())] = i), s))
                    he[r + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = he[
                      t + '.' + e
                    ] = s[e];
                }),
                s
              );
            },
            ge = function (t) {
              return function (e) {
                return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
              };
            },
            ye = function t(e, i, n) {
              var r = i >= 1 ? i : 1,
                s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
                a = (s / g) * (Math.asin(1 / r) || 0),
                o = function (t) {
                  return 1 === t ? 1 : r * Math.pow(2, -10 * t) * b((t - a) * s) + 1;
                },
                u =
                  'out' === e
                    ? o
                    : 'in' === e
                    ? function (t) {
                        return 1 - o(1 - t);
                      }
                    : ge(o);
              return (
                (s = g / s),
                (u.config = function (i, n) {
                  return t(e, i, n);
                }),
                u
              );
            },
            ve = function t(e, i) {
              void 0 === i && (i = 1.70158);
              var n = function (t) {
                  return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
                },
                r =
                  'out' === e
                    ? n
                    : 'in' === e
                    ? function (t) {
                        return 1 - n(1 - t);
                      }
                    : ge(n);
              return (
                (r.config = function (i) {
                  return t(e, i);
                }),
                r
              );
            };
          rt('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
            var i = e < 5 ? e + 1 : e;
            me(
              t + ',Power' + (i - 1),
              e
                ? function (t) {
                    return Math.pow(t, i);
                  }
                : function (t) {
                    return t;
                  },
              function (t) {
                return 1 - Math.pow(1 - t, i);
              },
              function (t) {
                return t < 0.5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
              },
            );
          }),
            (he.Linear.easeNone = he.none = he.Linear.easeIn),
            me('Elastic', ye('in'), ye('out'), ye()),
            (function (t, e) {
              var i = function (i) {
                return i < 0.36363636363636365
                  ? t * i * i
                  : i < 0.7272727272727273
                  ? t * Math.pow(i - 1.5 / e, 2) + 0.75
                  : i < 0.9090909090909092
                  ? t * (i -= 2.25 / e) * i + 0.9375
                  : t * Math.pow(i - 2.625 / e, 2) + 0.984375;
              };
              me(
                'Bounce',
                function (t) {
                  return 1 - i(1 - t);
                },
                i,
              );
            })(7.5625, 2.75),
            me('Expo', function (t) {
              return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            me('Circ', function (t) {
              return -(x(1 - t * t) - 1);
            }),
            me('Sine', function (t) {
              return 1 === t ? 1 : 1 - w(t * y);
            }),
            me('Back', ve('in'), ve('out'), ve()),
            (he.SteppedEase =
              he.steps =
              H.SteppedEase =
                {
                  config: function (t, e) {
                    void 0 === t && (t = 1);
                    var i = 1 / t,
                      n = t + (e ? 0 : 1),
                      r = e ? 1 : 0,
                      s = 1 - m;
                    return function (t) {
                      return (((n * Ft(0, s, t)) | 0) + r) * i;
                    };
                  },
                }),
            (d.ease = he['quad.out']),
            rt('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
              return (tt += t + ',' + t + 'Params,');
            });
          var xe = function (t, e) {
              (this.id = v++),
                (t._gsap = this),
                (this.target = t),
                (this.harness = e),
                (this.get = e ? e.get : nt),
                (this.set = e ? e.getSetter : Re);
            },
            we = (function () {
              function t(t, e) {
                var i = t.parent || s;
                (this.vars = t),
                  (this._delay = +t.delay || 0),
                  (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                    ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                  (this._ts = 1),
                  At(this, +t.duration, 1, 1),
                  (this.data = t.data),
                  p || oe.wake(),
                  i && Ct(i, this, e || 0 === e ? e : i._time, 1),
                  t.reversed && this.reverse(),
                  t.paused && this.paused(!0);
              }
              var e = t.prototype;
              return (
                (e.delay = function (t) {
                  return t || 0 === t
                    ? (this.parent &&
                        this.parent.smoothChildTiming &&
                        this.startTime(this._start + t - this._delay),
                      (this._delay = t),
                      this)
                    : this._delay;
                }),
                (e.duration = function (t) {
                  return arguments.length
                    ? this.totalDuration(
                        this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                      )
                    : this.totalDuration() && this._dur;
                }),
                (e.totalDuration = function (t) {
                  return arguments.length
                    ? ((this._dirty = 0),
                      At(
                        this,
                        this._repeat < 0
                          ? t
                          : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                      ))
                    : this._tDur;
                }),
                (e.totalTime = function (t, e) {
                  if ((ue(), !arguments.length)) return this._tTime;
                  var i = this._dp;
                  if (i && i.smoothChildTiming && this._ts) {
                    for (kt(this, t), !i._dp || i.parent || Pt(i, this); i.parent; )
                      i.parent._time !==
                        i._start +
                          (i._ts >= 0
                            ? i._tTime / i._ts
                            : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                        (i = i.parent);
                    !this.parent &&
                      this._dp.autoRemoveChildren &&
                      ((this._ts > 0 && t < this._tDur) ||
                        (this._ts < 0 && t > 0) ||
                        (!this._tDur && !t)) &&
                      Ct(this._dp, this, this._start - this._delay);
                  }
                  return (
                    (this._tTime !== t ||
                      (!this._dur && !e) ||
                      (this._initted && Math.abs(this._zTime) === m) ||
                      (!t && !this._initted && (this.add || this._ptLookup))) &&
                      (this._ts || (this._pTime = t), ht(this, t, e)),
                    this
                  );
                }),
                (e.time = function (t, e) {
                  return arguments.length
                    ? this.totalTime(
                        Math.min(this.totalDuration(), t + bt(this)) % this._dur ||
                          (t ? this._dur : 0),
                        e,
                      )
                    : this._time;
                }),
                (e.totalProgress = function (t, e) {
                  return arguments.length
                    ? this.totalTime(this.totalDuration() * t, e)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio;
                }),
                (e.progress = function (t, e) {
                  return arguments.length
                    ? this.totalTime(
                        this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                          bt(this),
                        e,
                      )
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio;
                }),
                (e.iteration = function (t, e) {
                  var i = this.duration() + this._rDelay;
                  return arguments.length
                    ? this.totalTime(this._time + (t - 1) * i, e)
                    : this._repeat
                    ? Tt(this._tTime, i) + 1
                    : 1;
                }),
                (e.timeScale = function (t) {
                  if (!arguments.length) return this._rts === -m ? 0 : this._rts;
                  if (this._rts === t) return this;
                  var e = this.parent && this._ts ? Et(this.parent._time, this) : this._tTime;
                  return (
                    (this._rts = +t || 0),
                    (this._ts = this._ps || t === -m ? 0 : this._rts),
                    (function (t) {
                      for (var e = t.parent; e && e.parent; )
                        (e._dirty = 1), e.totalDuration(), (e = e.parent);
                      return t;
                    })(this.totalTime(Ft(-this._delay, this._tDur, e), !0))
                  );
                }),
                (e.paused = function (t) {
                  return arguments.length
                    ? (this._ps !== t &&
                        ((this._ps = t),
                        t
                          ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                            (this._ts = this._act = 0))
                          : (ue(),
                            (this._ts = this._rts),
                            this.totalTime(
                              this.parent && !this.parent.smoothChildTiming
                                ? this.rawTime()
                                : this._tTime || this._pTime,
                              1 === this.progress() &&
                                (this._tTime -= m) &&
                                Math.abs(this._zTime) !== m,
                            ))),
                      this)
                    : this._ps;
                }),
                (e.startTime = function (t) {
                  if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Ct(e, this, t - this._delay), this;
                  }
                  return this._start;
                }),
                (e.endTime = function (t) {
                  return (
                    this._start +
                    (C(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                  );
                }),
                (e.rawTime = function (t) {
                  var e = this.parent || this._dp;
                  return e
                    ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                      ? this._tTime % (this._dur + this._rDelay)
                      : this._ts
                      ? Et(e.rawTime(t), this)
                      : this._tTime
                    : this._tTime;
                }),
                (e.globalTime = function (t) {
                  for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                    (i = e._start + i / (e._ts || 1)), (e = e._dp);
                  return i;
                }),
                (e.repeat = function (t) {
                  return arguments.length
                    ? ((this._repeat = t === 1 / 0 ? -2 : t), Dt(this))
                    : -2 === this._repeat
                    ? 1 / 0
                    : this._repeat;
                }),
                (e.repeatDelay = function (t) {
                  return arguments.length ? ((this._rDelay = t), Dt(this)) : this._rDelay;
                }),
                (e.yoyo = function (t) {
                  return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                (e.seek = function (t, e) {
                  return this.totalTime(Lt(this, t), C(e));
                }),
                (e.restart = function (t, e) {
                  return this.play().totalTime(t ? -this._delay : 0, C(e));
                }),
                (e.play = function (t, e) {
                  return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                }),
                (e.reverse = function (t, e) {
                  return (
                    null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
                  );
                }),
                (e.pause = function (t, e) {
                  return null != t && this.seek(t, e), this.paused(!0);
                }),
                (e.resume = function () {
                  return this.paused(!1);
                }),
                (e.reversed = function (t) {
                  return arguments.length
                    ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -m : 0)), this)
                    : this._rts < 0;
                }),
                (e.invalidate = function () {
                  return (this._initted = this._act = 0), (this._zTime = -m), this;
                }),
                (e.isActive = function () {
                  var t,
                    e = this.parent || this._dp,
                    i = this._start;
                  return !(
                    e &&
                    !(
                      this._ts &&
                      this._initted &&
                      e.isActive() &&
                      (t = e.rawTime(!0)) >= i &&
                      t < this.endTime(!0) - m
                    )
                  );
                }),
                (e.eventCallback = function (t, e, i) {
                  var n = this.vars;
                  return arguments.length > 1
                    ? (e
                        ? ((n[t] = e),
                          i && (n[t + 'Params'] = i),
                          'onUpdate' === t && (this._onUpdate = e))
                        : delete n[t],
                      this)
                    : n[t];
                }),
                (e.then = function (t) {
                  var e = this;
                  return new Promise(function (i) {
                    var n = E(t) ? t : ft,
                      r = function () {
                        var t = e.then;
                        (e.then = null),
                          E(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                          i(n),
                          (e.then = t);
                      };
                    (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                    (!e._tTime && e._ts < 0)
                      ? r()
                      : (e._prom = r);
                  });
                }),
                (e.kill = function () {
                  $t(this);
                }),
                t
              );
            })();
          pt(we.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -m,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
          var be = (function (t) {
            function e(e, n) {
              var r;
              return (
                void 0 === e && (e = {}),
                ((r = t.call(this, e, n) || this).labels = {}),
                (r.smoothChildTiming = !!e.smoothChildTiming),
                (r.autoRemoveChildren = !!e.autoRemoveChildren),
                (r._sort = C(e.sortChildren)),
                r.parent && Pt(r.parent, i(r)),
                e.scrollTrigger && Ot(i(r), e.scrollTrigger),
                r
              );
            }
            n(e, t);
            var r = e.prototype;
            return (
              (r.to = function (t, e, i) {
                return new Se(t, ot(arguments, 0, this), Lt(this, M(e) ? arguments[3] : i)), this;
              }),
              (r.from = function (t, e, i) {
                return new Se(t, ot(arguments, 1, this), Lt(this, M(e) ? arguments[3] : i)), this;
              }),
              (r.fromTo = function (t, e, i, n) {
                return new Se(t, ot(arguments, 2, this), Lt(this, M(e) ? arguments[4] : n)), this;
              }),
              (r.set = function (t, e, i) {
                return (
                  (e.duration = 0),
                  (e.parent = this),
                  gt(e).repeatDelay || (e.repeat = 0),
                  (e.immediateRender = !!e.immediateRender),
                  new Se(t, e, Lt(this, i), 1),
                  this
                );
              }),
              (r.call = function (t, e, i) {
                return Ct(this, Se.delayedCall(0, t, e), Lt(this, i));
              }),
              (r.staggerTo = function (t, e, i, n, r, s, a) {
                return (
                  (i.duration = e),
                  (i.stagger = i.stagger || n),
                  (i.onComplete = s),
                  (i.onCompleteParams = a),
                  (i.parent = this),
                  new Se(t, i, Lt(this, r)),
                  this
                );
              }),
              (r.staggerFrom = function (t, e, i, n, r, s, a) {
                return (
                  (i.runBackwards = 1),
                  (gt(i).immediateRender = C(i.immediateRender)),
                  this.staggerTo(t, e, i, n, r, s, a)
                );
              }),
              (r.staggerFromTo = function (t, e, i, n, r, s, a, o) {
                return (
                  (n.startAt = i),
                  (gt(n).immediateRender = C(n.immediateRender)),
                  this.staggerTo(t, e, n, r, s, a, o)
                );
              }),
              (r.render = function (t, e, i) {
                var n,
                  r,
                  a,
                  o,
                  u,
                  h,
                  l,
                  f,
                  p,
                  c,
                  d,
                  _,
                  g = this._time,
                  y = this._dirty ? this.totalDuration() : this._tDur,
                  v = this._dur,
                  x = this !== s && t > y - m && t >= 0 ? y : t < m ? 0 : t,
                  w = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (x !== this._tTime || i || w) {
                  if (
                    (g !== this._time && v && ((x += this._time - g), (t += this._time - g)),
                    (n = x),
                    (p = this._start),
                    (h = !(f = this._ts)),
                    w && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
                    this._repeat)
                  ) {
                    if (((d = this._yoyo), (u = v + this._rDelay), this._repeat < -1 && t < 0))
                      return this.totalTime(100 * u + t, e, i);
                    if (
                      ((n = st(x % u)),
                      x === y
                        ? ((o = this._repeat), (n = v))
                        : ((o = ~~(x / u)) && o === x / u && ((n = v), o--), n > v && (n = v)),
                      (c = Tt(this._tTime, u)),
                      !g && this._tTime && c !== o && (c = o),
                      d && 1 & o && ((n = v - n), (_ = 1)),
                      o !== c && !this._lock)
                    ) {
                      var b = d && 1 & c,
                        T = b === (d && 1 & o);
                      if (
                        (o < c && (b = !b),
                        (g = b ? 0 : v),
                        (this._lock = 1),
                        (this.render(g || (_ ? 0 : st(o * u)), e, !v)._lock = 0),
                        !e && this.parent && Zt(this, 'onRepeat'),
                        this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                        g !== this._time || h !== !this._ts)
                      )
                        return this;
                      if (
                        ((v = this._dur),
                        (y = this._tDur),
                        T &&
                          ((this._lock = 2),
                          (g = b ? v : -1e-4),
                          this.render(g, !0),
                          this.vars.repeatRefresh && !_ && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !h)
                      )
                        return this;
                      de(this, _);
                    }
                  }
                  if (
                    (this._hasPause &&
                      !this._forcing &&
                      this._lock < 2 &&
                      (l = (function (t, e, i) {
                        var n;
                        if (i > e)
                          for (n = t._first; n && n._start <= i; ) {
                            if (!n._dur && 'isPause' === n.data && n._start > e) return n;
                            n = n._next;
                          }
                        else
                          for (n = t._last; n && n._start >= i; ) {
                            if (!n._dur && 'isPause' === n.data && n._start < e) return n;
                            n = n._prev;
                          }
                      })(this, st(g), st(n))) &&
                      (x -= n - (n = l._start)),
                    (this._tTime = x),
                    (this._time = n),
                    (this._act = !f),
                    this._initted ||
                      ((this._onUpdate = this.vars.onUpdate),
                      (this._initted = 1),
                      (this._zTime = t),
                      (g = 0)),
                    !g && (n || (!v && t >= 0)) && !e && Zt(this, 'onStart'),
                    n >= g && t >= 0)
                  )
                    for (r = this._first; r; ) {
                      if (((a = r._next), (r._act || n >= r._start) && r._ts && l !== r)) {
                        if (r.parent !== this) return this.render(t, e, i);
                        if (
                          (r.render(
                            r._ts > 0
                              ? (n - r._start) * r._ts
                              : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts,
                            e,
                            i,
                          ),
                          n !== this._time || (!this._ts && !h))
                        ) {
                          (l = 0), a && (x += this._zTime = -m);
                          break;
                        }
                      }
                      r = a;
                    }
                  else {
                    r = this._last;
                    for (var E = t < 0 ? t : n; r; ) {
                      if (((a = r._prev), (r._act || E <= r._end) && r._ts && l !== r)) {
                        if (r.parent !== this) return this.render(t, e, i);
                        if (
                          (r.render(
                            r._ts > 0
                              ? (E - r._start) * r._ts
                              : (r._dirty ? r.totalDuration() : r._tDur) + (E - r._start) * r._ts,
                            e,
                            i,
                          ),
                          n !== this._time || (!this._ts && !h))
                        ) {
                          (l = 0), a && (x += this._zTime = E ? -m : m);
                          break;
                        }
                      }
                      r = a;
                    }
                  }
                  if (
                    l &&
                    !e &&
                    (this.pause(), (l.render(n >= g ? 0 : -m)._zTime = n >= g ? 1 : -1), this._ts)
                  )
                    return (this._start = p), Mt(this), this.render(t, e, i);
                  this._onUpdate && !e && Zt(this, 'onUpdate', !0),
                    ((x === y && y >= this.totalDuration()) || (!x && g)) &&
                      ((p !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                        this._lock ||
                        ((t || !v) &&
                          ((x === y && this._ts > 0) || (!x && this._ts < 0)) &&
                          vt(this, 1),
                        e ||
                          (t < 0 && !g) ||
                          (!x && !g) ||
                          (Zt(this, x === y ? 'onComplete' : 'onReverseComplete', !0),
                          this._prom && !(x < y && this.timeScale() > 0) && this._prom())));
                }
                return this;
              }),
              (r.add = function (t, e) {
                var i = this;
                if ((M(e) || (e = Lt(this, e)), !(t instanceof we))) {
                  if (D(t))
                    return (
                      t.forEach(function (t) {
                        return i.add(t, e);
                      }),
                      this
                    );
                  if (T(t)) return this.addLabel(t, e);
                  if (!E(t)) return this;
                  t = Se.delayedCall(0, t);
                }
                return this !== t ? Ct(this, t, e) : this;
              }),
              (r.getChildren = function (t, e, i, n) {
                void 0 === t && (t = !0),
                  void 0 === e && (e = !0),
                  void 0 === i && (i = !0),
                  void 0 === n && (n = -_);
                for (var r = [], s = this._first; s; )
                  s._start >= n &&
                    (s instanceof Se
                      ? e && r.push(s)
                      : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))),
                    (s = s._next);
                return r;
              }),
              (r.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                  if (e[i].vars.id === t) return e[i];
              }),
              (r.remove = function (t) {
                return T(t)
                  ? this.removeLabel(t)
                  : E(t)
                  ? this.killTweensOf(t)
                  : (yt(this, t), t === this._recent && (this._recent = this._last), xt(this));
              }),
              (r.totalTime = function (e, i) {
                return arguments.length
                  ? ((this._forcing = 1),
                    !this._dp &&
                      this._ts &&
                      (this._start = st(
                        oe.time -
                          (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts),
                      )),
                    t.prototype.totalTime.call(this, e, i),
                    (this._forcing = 0),
                    this)
                  : this._tTime;
              }),
              (r.addLabel = function (t, e) {
                return (this.labels[t] = Lt(this, e)), this;
              }),
              (r.removeLabel = function (t) {
                return delete this.labels[t], this;
              }),
              (r.addPause = function (t, e, i) {
                var n = Se.delayedCall(0, e || G, i);
                return (n.data = 'isPause'), (this._hasPause = 1), Ct(this, n, Lt(this, t));
              }),
              (r.removePause = function (t) {
                var e = this._first;
                for (t = Lt(this, t); e; )
                  e._start === t && 'isPause' === e.data && vt(e), (e = e._next);
              }),
              (r.killTweensOf = function (t, e, i) {
                for (var n = this.getTweensOf(t, i), r = n.length; r--; )
                  Te !== n[r] && n[r].kill(t, e);
                return this;
              }),
              (r.getTweensOf = function (t, e) {
                for (var i, n = [], r = Ht(t), s = this._first, a = M(e); s; )
                  s instanceof Se
                    ? at(s._targets, r) &&
                      (a
                        ? (!Te || (s._initted && s._ts)) &&
                          s.globalTime(0) <= e &&
                          s.globalTime(s.totalDuration()) > e
                        : !e || s.isActive()) &&
                      n.push(s)
                    : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
                    (s = s._next);
                return n;
              }),
              (r.tweenTo = function (t, e) {
                e = e || {};
                var i = this,
                  n = Lt(i, t),
                  r = e,
                  s = r.startAt,
                  a = r.onStart,
                  o = r.onStartParams,
                  u = r.immediateRender,
                  h = Se.to(
                    i,
                    pt(
                      {
                        ease: 'none',
                        lazy: !1,
                        immediateRender: !1,
                        time: n,
                        overwrite: 'auto',
                        duration:
                          e.duration ||
                          Math.abs((n - (s && 'time' in s ? s.time : i._time)) / i.timeScale()) ||
                          m,
                        onStart: function () {
                          i.pause();
                          var t = e.duration || Math.abs((n - i._time) / i.timeScale());
                          h._dur !== t && At(h, t, 0, 1).render(h._time, !0, !0),
                            a && a.apply(h, o || []);
                        },
                      },
                      e,
                    ),
                  );
                return u ? h.render(0) : h;
              }),
              (r.tweenFromTo = function (t, e, i) {
                return this.tweenTo(e, pt({ startAt: { time: Lt(this, t) } }, i));
              }),
              (r.recent = function () {
                return this._recent;
              }),
              (r.nextLabel = function (t) {
                return void 0 === t && (t = this._time), Qt(this, Lt(this, t));
              }),
              (r.previousLabel = function (t) {
                return void 0 === t && (t = this._time), Qt(this, Lt(this, t), 1);
              }),
              (r.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + m);
              }),
              (r.shiftChildren = function (t, e, i) {
                void 0 === i && (i = 0);
                for (var n, r = this._first, s = this.labels; r; )
                  r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
                if (e) for (n in s) s[n] >= i && (s[n] += t);
                return xt(this);
              }),
              (r.invalidate = function () {
                var e = this._first;
                for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
                return t.prototype.invalidate.call(this);
              }),
              (r.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
                return (
                  this._dp && (this._time = this._tTime = this._pTime = 0),
                  t && (this.labels = {}),
                  xt(this)
                );
              }),
              (r.totalDuration = function (t) {
                var e,
                  i,
                  n,
                  r = 0,
                  a = this._last,
                  o = _;
                if (arguments.length)
                  return this.timeScale(
                    (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                      (this.reversed() ? -t : t),
                  );
                if (this._dirty) {
                  for (n = this.parent; a; )
                    (e = a._prev),
                      a._dirty && a.totalDuration(),
                      (i = a._start) > o && this._sort && a._ts && !this._lock
                        ? ((this._lock = 1), (Ct(this, a, i - a._delay, 1)._lock = 0))
                        : (o = i),
                      i < 0 &&
                        a._ts &&
                        ((r -= i),
                        ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                          ((this._start += i / this._ts), (this._time -= i), (this._tTime -= i)),
                        this.shiftChildren(-i, !1, -1 / 0),
                        (o = 0)),
                      a._end > r && a._ts && (r = a._end),
                      (a = e);
                  At(this, this === s && this._time > r ? this._time : r, 1, 1), (this._dirty = 0);
                }
                return this._tDur;
              }),
              (e.updateRoot = function (t) {
                if ((s._ts && (ht(s, Et(t, s)), (l = oe.frame)), oe.frame >= J)) {
                  J += c.autoSleep || 120;
                  var e = s._first;
                  if ((!e || !e._ts) && c.autoSleep && oe._listeners.length < 2) {
                    for (; e && !e._ts; ) e = e._next;
                    e || oe.sleep();
                  }
                }
              }),
              e
            );
          })(we);
          pt(be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
          var Te,
            Ee = function (t, e, i, n, r, s, a, o, u) {
              E(n) && (n = n(r || 0, t, s));
              var h,
                l = t[e],
                f =
                  'get' !== i
                    ? i
                    : E(l)
                    ? u
                      ? t[e.indexOf('set') || !E(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](
                          u,
                        )
                      : t[e]()
                    : l,
                p = E(l) ? (u ? ze : De) : Ae;
              if (
                (T(n) &&
                  (~n.indexOf('random(') && (n = jt(n)),
                  '=' === n.charAt(1) &&
                    (n =
                      parseFloat(f) +
                      parseFloat(n.substr(2)) * ('-' === n.charAt(0) ? -1 : 1) +
                      (Bt(f) || 0))),
                f !== n)
              )
                return isNaN(f * n)
                  ? (!l && !(e in t) && N(e, n),
                    function (t, e, i, n, r, s, a) {
                      var o,
                        u,
                        h,
                        l,
                        f,
                        p,
                        c,
                        d,
                        _ = new Ve(this._pt, t, e, 0, 1, Ie, null, r),
                        m = 0,
                        g = 0;
                      for (
                        _.b = i,
                          _.e = n,
                          i += '',
                          (c = ~(n += '').indexOf('random(')) && (n = jt(n)),
                          s && (s((d = [i, n]), t, e), (i = d[0]), (n = d[1])),
                          u = i.match(F) || [];
                        (o = F.exec(n));

                      )
                        (l = o[0]),
                          (f = n.substring(m, o.index)),
                          h ? (h = (h + 1) % 5) : 'rgba(' === f.substr(-5) && (h = 1),
                          l !== u[g++] &&
                            ((p = parseFloat(u[g - 1]) || 0),
                            (_._pt = {
                              _next: _._pt,
                              p: f || 1 === g ? f : ',',
                              s: p,
                              c:
                                '=' === l.charAt(1)
                                  ? parseFloat(l.substr(2)) * ('-' === l.charAt(0) ? -1 : 1)
                                  : parseFloat(l) - p,
                              m: h && h < 4 ? Math.round : 0,
                            }),
                            (m = F.lastIndex));
                      return (
                        (_.c = m < n.length ? n.substring(m, n.length) : ''),
                        (_.fp = a),
                        (B.test(n) || c) && (_.e = 0),
                        (this._pt = _),
                        _
                      );
                    }.call(this, t, e, f, n, p, o || c.stringFilter, u))
                  : ((h = new Ve(
                      this._pt,
                      t,
                      e,
                      +f || 0,
                      n - (f || 0),
                      'boolean' == typeof l ? Be : Fe,
                      0,
                      p,
                    )),
                    u && (h.fp = u),
                    a && h.modifier(a, this, t),
                    (this._pt = h));
            },
            Me = function (t, e, i, n, r, s) {
              var a, o, u, h;
              if (
                Z[t] &&
                !1 !==
                  (a = new Z[t]()).init(
                    r,
                    a.rawVars
                      ? e[t]
                      : (function (t, e, i, n, r) {
                          if (
                            (E(t) && (t = Pe(t, r, e, i, n)),
                            !P(t) || (t.style && t.nodeType) || D(t) || A(t))
                          )
                            return T(t) ? Pe(t, r, e, i, n) : t;
                          var s,
                            a = {};
                          for (s in t) a[s] = Pe(t[s], r, e, i, n);
                          return a;
                        })(e[t], n, r, s, i),
                    i,
                    n,
                    s,
                  ) &&
                ((i._pt = o = new Ve(i._pt, r, t, 0, 1, a.render, a, 0, a.priority)), i !== f)
              )
                for (u = i._ptLookup[i._targets.indexOf(r)], h = a._props.length; h--; )
                  u[a._props[h]] = o;
              return a;
            },
            ke = function t(e, i) {
              var n,
                a,
                o,
                u,
                h,
                l,
                f,
                p,
                c,
                _,
                g,
                y,
                v,
                x = e.vars,
                w = x.ease,
                b = x.startAt,
                T = x.immediateRender,
                E = x.lazy,
                M = x.onUpdate,
                k = x.onUpdateParams,
                P = x.callbackScope,
                O = x.runBackwards,
                S = x.yoyoEase,
                A = x.keyframes,
                D = x.autoRevert,
                z = e._dur,
                L = e._startAt,
                R = e._targets,
                F = e.parent,
                B = F && 'nested' === F.data ? F.parent._targets : R,
                I = 'auto' === e._overwrite && !r,
                U = e.timeline;
              if (
                (U && (!A || !w) && (w = 'none'),
                (e._ease = _e(w, d.ease)),
                (e._yEase = S ? ce(_e(!0 === S ? w : S, d.ease)) : 0),
                S && e._yoyo && !e._repeat && ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
                !U)
              ) {
                if (
                  ((y = (p = R[0] ? it(R[0]).harness : 0) && x[p.prop]),
                  (n = mt(x, j)),
                  L && L.render(-1, !0).kill(),
                  b)
                ) {
                  if (
                    (vt(
                      (e._startAt = Se.set(
                        R,
                        pt(
                          {
                            data: 'isStart',
                            overwrite: !1,
                            parent: F,
                            immediateRender: !0,
                            lazy: C(E),
                            startAt: null,
                            delay: 0,
                            onUpdate: M,
                            onUpdateParams: k,
                            callbackScope: P,
                            stagger: 0,
                          },
                          b,
                        ),
                      )),
                    ),
                    T)
                  )
                    if (i > 0) D || (e._startAt = 0);
                    else if (z && !(i < 0 && L)) return void (i && (e._zTime = i));
                } else if (O && z)
                  if (L) !D && (e._startAt = 0);
                  else if (
                    (i && (T = !1),
                    (o = pt(
                      {
                        overwrite: !1,
                        data: 'isFromStart',
                        lazy: T && C(E),
                        immediateRender: T,
                        stagger: 0,
                        parent: F,
                      },
                      n,
                    )),
                    y && (o[p.prop] = y),
                    vt((e._startAt = Se.set(R, o))),
                    T)
                  ) {
                    if (!i) return;
                  } else t(e._startAt, m);
                for (e._pt = 0, E = (z && C(E)) || (E && !z), a = 0; a < R.length; a++) {
                  if (
                    ((f = (h = R[a])._gsap || et(R)[a]._gsap),
                    (e._ptLookup[a] = _ = {}),
                    Q[f.id] && W.length && ut(),
                    (g = B === R ? a : B.indexOf(h)),
                    p &&
                      !1 !== (c = new p()).init(h, y || n, e, g, B) &&
                      ((e._pt = u = new Ve(e._pt, h, c.name, 0, 1, c.render, c, 0, c.priority)),
                      c._props.forEach(function (t) {
                        _[t] = u;
                      }),
                      c.priority && (l = 1)),
                    !p || y)
                  )
                    for (o in n)
                      Z[o] && (c = Me(o, n, e, g, h, B))
                        ? c.priority && (l = 1)
                        : (_[o] = u = Ee.call(e, h, o, 'get', n[o], g, B, 0, x.stringFilter));
                  e._op && e._op[a] && e.kill(h, e._op[a]),
                    I &&
                      e._pt &&
                      ((Te = e), s.killTweensOf(h, _, e.globalTime(0)), (v = !e.parent), (Te = 0)),
                    e._pt && E && (Q[f.id] = 1);
                }
                l && Ne(e), e._onInit && e._onInit(e);
              }
              (e._from = !U && !!x.runBackwards),
                (e._onUpdate = M),
                (e._initted = (!e._op || e._pt) && !v);
            },
            Pe = function (t, e, i, n, r) {
              return E(t) ? t.call(e, i, n, r) : T(t) && ~t.indexOf('random(') ? jt(t) : t;
            },
            Ce = tt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
            Oe = (Ce + ',id,stagger,delay,duration,paused,scrollTrigger').split(','),
            Se = (function (t) {
              function e(e, n, a, o) {
                var u;
                'number' == typeof n && ((a.duration = n), (n = a), (a = null));
                var h,
                  l,
                  f,
                  p,
                  d,
                  _,
                  g,
                  y,
                  v = (u = t.call(this, o ? n : gt(n), a) || this).vars,
                  x = v.duration,
                  w = v.delay,
                  b = v.immediateRender,
                  T = v.stagger,
                  E = v.overwrite,
                  k = v.keyframes,
                  O = v.defaults,
                  z = v.scrollTrigger,
                  L = v.yoyoEase,
                  R = u.parent,
                  F = (D(e) || A(e) ? M(e[0]) : 'length' in n) ? [e] : Ht(e);
                if (
                  ((u._targets = F.length
                    ? et(F)
                    : V(
                        'GSAP target ' + e + ' not found. https://greensock.com',
                        !c.nullTargetWarn,
                      ) || []),
                  (u._ptLookup = []),
                  (u._overwrite = E),
                  k || T || S(x) || S(w))
                ) {
                  if (
                    ((n = u.vars),
                    (h = u.timeline = new be({ data: 'nested', defaults: O || {} })).kill(),
                    (h.parent = h._dp = i(u)),
                    (h._start = 0),
                    k)
                  )
                    pt(h.vars.defaults, { ease: 'none' }),
                      k.forEach(function (t) {
                        return h.to(F, t, '>');
                      });
                  else {
                    if (((p = F.length), (g = T ? Xt(T) : G), P(T)))
                      for (d in T) ~Ce.indexOf(d) && (y || (y = {}), (y[d] = T[d]));
                    for (l = 0; l < p; l++) {
                      for (d in ((f = {}), n)) Oe.indexOf(d) < 0 && (f[d] = n[d]);
                      (f.stagger = 0),
                        L && (f.yoyoEase = L),
                        y && dt(f, y),
                        (_ = F[l]),
                        (f.duration = +Pe(x, i(u), l, _, F)),
                        (f.delay = (+Pe(w, i(u), l, _, F) || 0) - u._delay),
                        !T &&
                          1 === p &&
                          f.delay &&
                          ((u._delay = w = f.delay), (u._start += w), (f.delay = 0)),
                        h.to(_, f, g(l, _, F));
                    }
                    h.duration() ? (x = w = 0) : (u.timeline = 0);
                  }
                  x || u.duration((x = h.duration()));
                } else u.timeline = 0;
                return (
                  !0 !== E || r || ((Te = i(u)), s.killTweensOf(F), (Te = 0)),
                  R && Pt(R, i(u)),
                  (b ||
                    (!x &&
                      !k &&
                      u._start === st(R._time) &&
                      C(b) &&
                      wt(i(u)) &&
                      'nested' !== R.data)) &&
                    ((u._tTime = -m), u.render(Math.max(0, -w))),
                  z && Ot(i(u), z),
                  u
                );
              }
              n(e, t);
              var a = e.prototype;
              return (
                (a.render = function (t, e, i) {
                  var n,
                    r,
                    s,
                    a,
                    o,
                    u,
                    h,
                    l,
                    f,
                    p = this._time,
                    c = this._tDur,
                    d = this._dur,
                    _ = t > c - m && t >= 0 ? c : t < m ? 0 : t;
                  if (d) {
                    if (
                      _ !== this._tTime ||
                      !t ||
                      i ||
                      (!this._initted && this._tTime) ||
                      (this._startAt && this._zTime < 0 != t < 0)
                    ) {
                      if (((n = _), (l = this.timeline), this._repeat)) {
                        if (((a = d + this._rDelay), this._repeat < -1 && t < 0))
                          return this.totalTime(100 * a + t, e, i);
                        if (
                          ((n = st(_ % a)),
                          _ === c
                            ? ((s = this._repeat), (n = d))
                            : ((s = ~~(_ / a)) && s === _ / a && ((n = d), s--), n > d && (n = d)),
                          (u = this._yoyo && 1 & s) && ((f = this._yEase), (n = d - n)),
                          (o = Tt(this._tTime, a)),
                          n === p && !i && this._initted)
                        )
                          return this;
                        s !== o &&
                          (l && this._yEase && de(l, u),
                          !this.vars.repeatRefresh ||
                            u ||
                            this._lock ||
                            ((this._lock = i = 1),
                            (this.render(st(a * s), !0).invalidate()._lock = 0)));
                      }
                      if (!this._initted) {
                        if (St(this, t < 0 ? t : n, i, e)) return (this._tTime = 0), this;
                        if (d !== this._dur) return this.render(t, e, i);
                      }
                      for (
                        this._tTime = _,
                          this._time = n,
                          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                          this.ratio = h = (f || this._ease)(n / d),
                          this._from && (this.ratio = h = 1 - h),
                          n && !p && !e && Zt(this, 'onStart'),
                          r = this._pt;
                        r;

                      )
                        r.r(h, r.d), (r = r._next);
                      (l && l.render(t < 0 ? t : !n && u ? -m : l._dur * h, e, i)) ||
                        (this._startAt && (this._zTime = t)),
                        this._onUpdate &&
                          !e &&
                          (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                          Zt(this, 'onUpdate')),
                        this._repeat &&
                          s !== o &&
                          this.vars.onRepeat &&
                          !e &&
                          this.parent &&
                          Zt(this, 'onRepeat'),
                        (_ !== this._tDur && _) ||
                          this._tTime !== _ ||
                          (t < 0 &&
                            this._startAt &&
                            !this._onUpdate &&
                            this._startAt.render(t, !0, !0),
                          (t || !d) &&
                            ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
                            vt(this, 1),
                          e ||
                            (t < 0 && !p) ||
                            (!_ && !p) ||
                            (Zt(this, _ === c ? 'onComplete' : 'onReverseComplete', !0),
                            this._prom && !(_ < c && this.timeScale() > 0) && this._prom()));
                    }
                  } else
                    !(function (t, e, i, n) {
                      var r,
                        s,
                        a,
                        o = t.ratio,
                        u =
                          e < 0 ||
                          (!e &&
                            ((!t._start &&
                              (function t(e) {
                                var i = e.parent;
                                return (
                                  i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                                );
                              })(t)) ||
                              ((t._ts < 0 || t._dp._ts < 0) &&
                                'isFromStart' !== t.data &&
                                'isStart' !== t.data)))
                            ? 0
                            : 1,
                        h = t._rDelay,
                        l = 0;
                      if (
                        (h &&
                          t._repeat &&
                          ((l = Ft(0, t._tDur, e)),
                          (s = Tt(l, h)),
                          (a = Tt(t._tTime, h)),
                          t._yoyo && 1 & s && (u = 1 - u),
                          s !== a &&
                            ((o = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
                        u !== o || n || t._zTime === m || (!e && t._zTime))
                      ) {
                        if (!t._initted && St(t, e, n, i)) return;
                        for (
                          a = t._zTime,
                            t._zTime = e || (i ? m : 0),
                            i || (i = e && !a),
                            t.ratio = u,
                            t._from && (u = 1 - u),
                            t._time = 0,
                            t._tTime = l,
                            i || Zt(t, 'onStart'),
                            r = t._pt;
                          r;

                        )
                          r.r(u, r.d), (r = r._next);
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                          t._onUpdate && !i && Zt(t, 'onUpdate'),
                          l && t._repeat && !i && t.parent && Zt(t, 'onRepeat'),
                          (e >= t._tDur || e < 0) &&
                            t.ratio === u &&
                            (u && vt(t, 1),
                            i ||
                              (Zt(t, u ? 'onComplete' : 'onReverseComplete', !0),
                              t._prom && t._prom()));
                      } else t._zTime || (t._zTime = e);
                    })(this, t, e, i);
                  return this;
                }),
                (a.targets = function () {
                  return this._targets;
                }),
                (a.invalidate = function () {
                  return (
                    (this._pt =
                      this._op =
                      this._startAt =
                      this._onUpdate =
                      this._lazy =
                      this.ratio =
                        0),
                    (this._ptLookup = []),
                    this.timeline && this.timeline.invalidate(),
                    t.prototype.invalidate.call(this)
                  );
                }),
                (a.kill = function (t, e) {
                  if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
                    return (this._lazy = this._pt = 0), this.parent ? $t(this) : this;
                  if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return (
                      this.timeline.killTweensOf(t, e, Te && !0 !== Te.vars.overwrite)._first ||
                        $t(this),
                      this.parent &&
                        i !== this.timeline.totalDuration() &&
                        At(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                      this
                    );
                  }
                  var n,
                    r,
                    s,
                    a,
                    o,
                    u,
                    h,
                    l = this._targets,
                    f = t ? Ht(t) : l,
                    p = this._ptLookup,
                    c = this._pt;
                  if (
                    (!e || 'all' === e) &&
                    (function (t, e) {
                      for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
                      return i < 0;
                    })(l, f)
                  )
                    return 'all' === e && (this._pt = 0), $t(this);
                  for (
                    n = this._op = this._op || [],
                      'all' !== e &&
                        (T(e) &&
                          ((o = {}),
                          rt(e, function (t) {
                            return (o[t] = 1);
                          }),
                          (e = o)),
                        (e = (function (t, e) {
                          var i,
                            n,
                            r,
                            s,
                            a = t[0] ? it(t[0]).harness : 0,
                            o = a && a.aliases;
                          if (!o) return e;
                          for (n in ((i = dt({}, e)), o))
                            if ((n in i))
                              for (r = (s = o[n].split(',')).length; r--; ) i[s[r]] = i[n];
                          return i;
                        })(l, e))),
                      h = l.length;
                    h--;

                  )
                    if (~f.indexOf(l[h]))
                      for (o in ((r = p[h]),
                      'all' === e
                        ? ((n[h] = e), (a = r), (s = {}))
                        : ((s = n[h] = n[h] || {}), (a = e)),
                      a))
                        (u = r && r[o]) &&
                          (('kill' in u.d && !0 !== u.d.kill(o)) || yt(this, u, '_pt'),
                          delete r[o]),
                          'all' !== s && (s[o] = 1);
                  return this._initted && !this._pt && c && $t(this), this;
                }),
                (e.to = function (t, i) {
                  return new e(t, i, arguments[2]);
                }),
                (e.from = function (t, i) {
                  return new e(t, ot(arguments, 1));
                }),
                (e.delayedCall = function (t, i, n, r) {
                  return new e(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: r,
                  });
                }),
                (e.fromTo = function (t, i, n) {
                  return new e(t, ot(arguments, 2));
                }),
                (e.set = function (t, i) {
                  return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
                }),
                (e.killTweensOf = function (t, e, i) {
                  return s.killTweensOf(t, e, i);
                }),
                e
              );
            })(we);
          pt(Se.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            rt('staggerTo,staggerFrom,staggerFromTo', function (t) {
              Se[t] = function () {
                var e = new be(),
                  i = It.call(arguments, 0);
                return i.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, i);
              };
            });
          var Ae = function (t, e, i) {
              return (t[e] = i);
            },
            De = function (t, e, i) {
              return t[e](i);
            },
            ze = function (t, e, i, n) {
              return t[e](n.fp, i);
            },
            Le = function (t, e, i) {
              return t.setAttribute(e, i);
            },
            Re = function (t, e) {
              return E(t[e]) ? De : k(t[e]) && t.setAttribute ? Le : Ae;
            },
            Fe = function (t, e) {
              return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
            },
            Be = function (t, e) {
              return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            Ie = function (t, e) {
              var i = e._pt,
                n = '';
              if (!t && e.b) n = e.b;
              else if (1 === t && e.e) n = e.e;
              else {
                for (; i; )
                  (n =
                    i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n),
                    (i = i._next);
                n += e.c;
              }
              e.set(e.t, e.p, n, e);
            },
            Ue = function (t, e) {
              for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
            },
            He = function (t, e, i, n) {
              for (var r, s = this._pt; s; )
                (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
            },
            Ye = function (t) {
              for (var e, i, n = this._pt; n; )
                (i = n._next),
                  (n.p === t && !n.op) || n.op === t ? yt(this, n, '_pt') : n.dep || (e = 1),
                  (n = i);
              return !e;
            },
            Xe = function (t, e, i, n) {
              n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
            },
            Ne = function (t) {
              for (var e, i, n, r, s = t._pt; s; ) {
                for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
                (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
                  (s._next = i) ? (i._prev = s) : (r = s),
                  (s = e);
              }
              t._pt = n;
            },
            Ve = (function () {
              function t(t, e, i, n, r, s, a, o, u) {
                (this.t = e),
                  (this.s = n),
                  (this.c = r),
                  (this.p = i),
                  (this.r = s || Fe),
                  (this.d = a || this),
                  (this.set = o || Ae),
                  (this.pr = u || 0),
                  (this._next = t),
                  t && (t._prev = this);
              }
              return (
                (t.prototype.modifier = function (t, e, i) {
                  (this.mSet = this.mSet || this.set),
                    (this.set = Xe),
                    (this.m = t),
                    (this.mt = i),
                    (this.tween = e);
                }),
                t
              );
            })();
          rt(
            tt +
              'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
            function (t) {
              return (j[t] = 1);
            },
          ),
            (H.TweenMax = H.TweenLite = Se),
            (H.TimelineLite = H.TimelineMax = be),
            (s = new be({
              sortChildren: !1,
              defaults: d,
              autoRemoveChildren: !0,
              id: 'root',
              smoothChildTiming: !0,
            })),
            (c.stringFilter = ae);
          var qe = {
            registerPlugin: function () {
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
              e.forEach(function (t) {
                return (function (t) {
                  var e = (t = (!t.name && t.default) || t).name,
                    i = E(t),
                    n =
                      e && !i && t.init
                        ? function () {
                            this._props = [];
                          }
                        : t,
                    r = { init: G, render: Ue, add: Ee, kill: Ye, modifier: He, rawVars: 0 },
                    s = { targetTest: 0, get: 0, getSetter: Re, aliases: {}, register: 0 };
                  if ((ue(), t !== n)) {
                    if (Z[e]) return;
                    pt(n, pt(mt(t, r), s)),
                      dt(n.prototype, dt(r, mt(t, s))),
                      (Z[(n.prop = e)] = n),
                      t.targetTest && (K.push(n), (j[e] = 1)),
                      (e =
                        ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
                  }
                  q(e, n), t.register && t.register(We, n, Ve);
                })(t);
              });
            },
            timeline: function (t) {
              return new be(t);
            },
            getTweensOf: function (t, e) {
              return s.getTweensOf(t, e);
            },
            getProperty: function (t, e, i, n) {
              T(t) && (t = Ht(t)[0]);
              var r = it(t || {}).get,
                s = i ? ft : lt;
              return (
                'native' === i && (i = ''),
                t
                  ? e
                    ? s(((Z[e] && Z[e].get) || r)(t, e, i, n))
                    : function (e, i, n) {
                        return s(((Z[e] && Z[e].get) || r)(t, e, i, n));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, i) {
              if ((t = Ht(t)).length > 1) {
                var n = t.map(function (t) {
                    return We.quickSetter(t, e, i);
                  }),
                  r = n.length;
                return function (t) {
                  for (var e = r; e--; ) n[e](t);
                };
              }
              t = t[0] || {};
              var s = Z[e],
                a = it(t),
                o = (a.harness && (a.harness.aliases || {})[e]) || e,
                u = s
                  ? function (e) {
                      var n = new s();
                      (f._pt = 0),
                        n.init(t, i ? e + i : e, f, 0, [t]),
                        n.render(1, n),
                        f._pt && Ue(1, f);
                    }
                  : a.set(t, o);
              return s
                ? u
                : function (e) {
                    return u(t, o, i ? e + i : e, a, 1);
                  };
            },
            isTweening: function (t) {
              return s.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return t && t.ease && (t.ease = _e(t.ease, d.ease)), _t(d, t || {});
            },
            config: function (t) {
              return _t(c, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                i = t.effect,
                n = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
              (n || '').split(',').forEach(function (t) {
                return t && !Z[t] && !H[t] && V(e + ' effect requires ' + t + ' plugin.');
              }),
                ($[e] = function (t, e, n) {
                  return i(Ht(t), pt(e || {}, r), n);
                }),
                s &&
                  (be.prototype[e] = function (t, i, n) {
                    return this.add($[e](t, P(i) ? i : (n = i) && {}, this), n);
                  });
            },
            registerEase: function (t, e) {
              he[t] = _e(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? _e(t, e) : he;
            },
            getById: function (t) {
              return s.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var i,
                n,
                r = new be(t);
              for (
                r.smoothChildTiming = C(t.smoothChildTiming),
                  s.remove(r),
                  r._dp = 0,
                  r._time = r._tTime = s._time,
                  i = s._first;
                i;

              )
                (n = i._next),
                  (!e && !i._dur && i instanceof Se && i.vars.onComplete === i._targets[0]) ||
                    Ct(r, i, i._start - i._delay),
                  (i = n);
              return Ct(s, r, 0), r;
            },
            utils: {
              wrap: function t(e, i, n) {
                var r = i - e;
                return D(e)
                  ? Gt(e, t(0, e.length), i)
                  : Rt(n, function (t) {
                      return ((r + ((t - e) % r)) % r) + e;
                    });
              },
              wrapYoyo: function t(e, i, n) {
                var r = i - e,
                  s = 2 * r;
                return D(e)
                  ? Gt(e, t(0, e.length - 1), i)
                  : Rt(n, function (t) {
                      return e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t);
                    });
              },
              distribute: Xt,
              random: qt,
              snap: Vt,
              normalize: function (t, e, i) {
                return Wt(t, e, 0, 1, i);
              },
              getUnit: Bt,
              clamp: function (t, e, i) {
                return Rt(i, function (i) {
                  return Ft(t, e, i);
                });
              },
              splitColor: ee,
              toArray: Ht,
              mapRange: Wt,
              pipe: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                  e[i] = arguments[i];
                return function (t) {
                  return e.reduce(function (t, e) {
                    return e(t);
                  }, t);
                };
              },
              unitize: function (t, e) {
                return function (i) {
                  return t(parseFloat(i)) + (e || Bt(i));
                };
              },
              interpolate: function t(e, i, n, r) {
                var s = isNaN(e + i)
                  ? 0
                  : function (t) {
                      return (1 - t) * e + t * i;
                    };
                if (!s) {
                  var a,
                    o,
                    u,
                    h,
                    l,
                    f = T(e),
                    p = {};
                  if ((!0 === n && (r = 1) && (n = null), f)) (e = { p: e }), (i = { p: i });
                  else if (D(e) && !D(i)) {
                    for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
                      u.push(t(e[o - 1], e[o]));
                    h--,
                      (s = function (t) {
                        t *= h;
                        var e = Math.min(l, ~~t);
                        return u[e](t - e);
                      }),
                      (n = i);
                  } else r || (e = dt(D(e) ? [] : {}, e));
                  if (!u) {
                    for (a in i) Ee.call(p, e, a, 'get', i[a]);
                    s = function (t) {
                      return Ue(t, p) || (f ? e.p : e);
                    };
                  }
                }
                return Rt(n, s);
              },
              shuffle: Yt,
            },
            install: X,
            effects: $,
            ticker: oe,
            updateRoot: be.updateRoot,
            plugins: Z,
            globalTimeline: s,
            core: {
              PropTween: Ve,
              globals: q,
              Tween: Se,
              Timeline: be,
              Animation: we,
              getCache: it,
              _removeLinkedListItem: yt,
              suppressOverwrites: function (t) {
                return (r = t);
              },
            },
          };
          rt('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
            return (qe[t] = Se[t]);
          }),
            oe.add(be.updateRoot),
            (f = qe.to({}, { duration: 0 }));
          var Ge = function (t, e) {
              for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
              return i;
            },
            je = function (t, e) {
              return {
                name: t,
                rawVars: 1,
                init: function (t, i, n) {
                  n._onInit = function (t) {
                    var n, r;
                    if (
                      (T(i) &&
                        ((n = {}),
                        rt(i, function (t) {
                          return (n[t] = 1);
                        }),
                        (i = n)),
                      e)
                    ) {
                      for (r in ((n = {}), i)) n[r] = e(i[r]);
                      i = n;
                    }
                    !(function (t, e) {
                      var i,
                        n,
                        r,
                        s = t._targets;
                      for (i in e)
                        for (n = s.length; n--; )
                          (r = t._ptLookup[n][i]) &&
                            (r = r.d) &&
                            (r._pt && (r = Ge(r, i)),
                            r && r.modifier && r.modifier(e[i], t, s[n], i));
                    })(t, i);
                  };
                },
              };
            },
            We =
              qe.registerPlugin(
                {
                  name: 'attr',
                  init: function (t, e, i, n, r) {
                    var s, a;
                    for (s in e)
                      (a = this.add(
                        t,
                        'setAttribute',
                        (t.getAttribute(s) || 0) + '',
                        e[s],
                        n,
                        r,
                        0,
                        0,
                        s,
                      )) && (a.op = s),
                        this._props.push(s);
                  },
                },
                {
                  name: 'endArray',
                  init: function (t, e) {
                    for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
                  },
                },
                je('roundProps', Nt),
                je('modifiers'),
                je('snap', Vt),
              ) || qe;
          (Se.version = be.version = We.version = '3.6.0'), (h = 1), O() && ue();
          he.Power0,
            he.Power1,
            he.Power2,
            he.Power3,
            he.Power4,
            he.Linear,
            he.Quad,
            he.Cubic,
            he.Quart,
            he.Quint,
            he.Strong,
            he.Elastic,
            he.Back,
            he.SteppedEase,
            he.Bounce,
            he.Sine,
            he.Expo,
            he.Circ;
          var Qe,
            Ze,
            $e,
            Je,
            Ke,
            ti,
            ei,
            ii,
            ni = {},
            ri = 180 / Math.PI,
            si = Math.PI / 180,
            ai = Math.atan2,
            oi = /([A-Z])/g,
            ui = /(?:left|right|width|margin|padding|x)/i,
            hi = /[\s,\(]\S/,
            li = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
            fi = function (t, e) {
              return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            pi = function (t, e) {
              return e.set(
                e.t,
                e.p,
                1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
                e,
              );
            },
            ci = function (t, e) {
              return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
            },
            di = function (t, e) {
              var i = e.s + e.c * t;
              e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
            },
            _i = function (t, e) {
              return e.set(e.t, e.p, t ? e.e : e.b, e);
            },
            mi = function (t, e) {
              return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
            },
            gi = function (t, e, i) {
              return (t.style[e] = i);
            },
            yi = function (t, e, i) {
              return t.style.setProperty(e, i);
            },
            vi = function (t, e, i) {
              return (t._gsap[e] = i);
            },
            xi = function (t, e, i) {
              return (t._gsap.scaleX = t._gsap.scaleY = i);
            },
            wi = function (t, e, i, n, r) {
              var s = t._gsap;
              (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
            },
            bi = function (t, e, i, n, r) {
              var s = t._gsap;
              (s[e] = i), s.renderTransform(r, s);
            },
            Ti = 'transform',
            Ei = Ti + 'Origin',
            Mi = function (t, e) {
              var i = Ze.createElementNS
                ? Ze.createElementNS(
                    (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                    t,
                  )
                : Ze.createElement(t);
              return i.style ? i : Ze.createElement(t);
            },
            ki = function t(e, i, n) {
              var r = getComputedStyle(e);
              return (
                r[i] ||
                r.getPropertyValue(i.replace(oi, '-$1').toLowerCase()) ||
                r.getPropertyValue(i) ||
                (!n && t(e, Ci(i) || i, 1)) ||
                ''
              );
            },
            Pi = 'O,Moz,ms,Ms,Webkit'.split(','),
            Ci = function (t, e, i) {
              var n = (e || Ke).style,
                r = 5;
              if (t in n && !i) return t;
              for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Pi[r] + t in n); );
              return r < 0 ? null : (3 === r ? 'ms' : r >= 0 ? Pi[r] : '') + t;
            },
            Oi = function () {
              'undefined' != typeof window &&
                window.document &&
                ((Qe = window),
                (Ze = Qe.document),
                ($e = Ze.documentElement),
                (Ke = Mi('div') || { style: {} }),
                (ti = Mi('div')),
                (Ti = Ci(Ti)),
                (Ei = Ti + 'Origin'),
                (Ke.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
                (ii = !!Ci('perspective')),
                (Je = 1));
            },
            Si = function t(e) {
              var i,
                n = Mi(
                  'svg',
                  (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
                    'http://www.w3.org/2000/svg',
                ),
                r = this.parentNode,
                s = this.nextSibling,
                a = this.style.cssText;
              if (($e.appendChild(n), n.appendChild(this), (this.style.display = 'block'), e))
                try {
                  (i = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                } catch (o) {}
              else this._gsapBBox && (i = this._gsapBBox());
              return (
                r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
                $e.removeChild(n),
                (this.style.cssText = a),
                i
              );
            },
            Ai = function (t, e) {
              for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
            },
            Di = function (t) {
              var e;
              try {
                e = t.getBBox();
              } catch (i) {
                e = Si.call(t, !0);
              }
              return (
                (e && (e.width || e.height)) || t.getBBox === Si || (e = Si.call(t, !0)),
                !e || e.width || e.x || e.y
                  ? e
                  : {
                      x: +Ai(t, ['x', 'cx', 'x1']) || 0,
                      y: +Ai(t, ['y', 'cy', 'y1']) || 0,
                      width: 0,
                      height: 0,
                    }
              );
            },
            zi = function (t) {
              return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Di(t));
            },
            Li = function (t, e) {
              if (e) {
                var i = t.style;
                e in ni && e !== Ei && (e = Ti),
                  i.removeProperty
                    ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e),
                      i.removeProperty(e.replace(oi, '-$1').toLowerCase()))
                    : i.removeAttribute(e);
              }
            },
            Ri = function (t, e, i, n, r, s) {
              var a = new Ve(t._pt, e, i, 0, 1, s ? mi : _i);
              return (t._pt = a), (a.b = n), (a.e = r), t._props.push(i), a;
            },
            Fi = { deg: 1, rad: 1, turn: 1 },
            Bi = function t(e, i, n, r) {
              var s,
                a,
                o,
                u,
                h = parseFloat(n) || 0,
                l = (n + '').trim().substr((h + '').length) || 'px',
                f = Ke.style,
                p = ui.test(i),
                c = 'svg' === e.tagName.toLowerCase(),
                d = (c ? 'client' : 'offset') + (p ? 'Width' : 'Height'),
                _ = 'px' === r,
                m = '%' === r;
              return r === l || !h || Fi[r] || Fi[l]
                ? h
                : ('px' !== l && !_ && (h = t(e, i, n, 'px')),
                  (u = e.getCTM && zi(e)),
                  (!m && '%' !== l) || (!ni[i] && !~i.indexOf('adius'))
                    ? ((f[p ? 'width' : 'height'] = 100 + (_ ? l : r)),
                      (a =
                        ~i.indexOf('adius') || ('em' === r && e.appendChild && !c)
                          ? e
                          : e.parentNode),
                      u && (a = (e.ownerSVGElement || {}).parentNode),
                      (a && a !== Ze && a.appendChild) || (a = Ze.body),
                      (o = a._gsap) && m && o.width && p && o.time === oe.time
                        ? st((h / o.width) * 100)
                        : ((m || '%' === l) && (f.position = ki(e, 'position')),
                          a === e && (f.position = 'static'),
                          a.appendChild(Ke),
                          (s = Ke[d]),
                          a.removeChild(Ke),
                          (f.position = 'absolute'),
                          p && m && (((o = it(a)).time = oe.time), (o.width = a[d])),
                          st(_ ? (s * h) / 100 : s && h ? (100 / s) * h : 0)))
                    : ((s = u ? e.getBBox()[p ? 'width' : 'height'] : e[d]),
                      st(m ? (h / s) * 100 : (h / 100) * s)));
            },
            Ii = function (t, e, i, n) {
              var r;
              return (
                Je || Oi(),
                e in li && 'transform' !== e && ~(e = li[e]).indexOf(',') && (e = e.split(',')[0]),
                ni[e] && 'transform' !== e
                  ? ((r = Zi(t, n)),
                    (r = 'transformOrigin' !== e ? r[e] : $i(ki(t, Ei)) + ' ' + r.zOrigin + 'px'))
                  : (!(r = t.style[e]) || 'auto' === r || n || ~(r + '').indexOf('calc(')) &&
                    (r =
                      (Ni[e] && Ni[e](t, e, i)) ||
                      ki(t, e) ||
                      nt(t, e) ||
                      ('opacity' === e ? 1 : 0)),
                i && !~(r + '').trim().indexOf(' ') ? Bi(t, e, r, i) + i : r
              );
            },
            Ui = function (t, e, i, n) {
              if (!i || 'none' === i) {
                var r = Ci(e, t, 1),
                  s = r && ki(t, r, 1);
                s && s !== i
                  ? ((e = r), (i = s))
                  : 'borderColor' === e && (i = ki(t, 'borderTopColor'));
              }
              var a,
                o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                m,
                g,
                y,
                v = new Ve(this._pt, t.style, e, 0, 1, Ie),
                x = 0,
                w = 0;
              if (
                ((v.b = i),
                (v.e = n),
                (i += ''),
                'auto' == (n += '') && ((t.style[e] = n), (n = ki(t, e) || n), (t.style[e] = i)),
                ae((a = [i, n])),
                (n = a[1]),
                (u = (i = a[0]).match(R) || []),
                (n.match(R) || []).length)
              ) {
                for (; (o = R.exec(n)); )
                  (p = o[0]),
                    (_ = n.substring(x, o.index)),
                    l
                      ? (l = (l + 1) % 5)
                      : ('rgba(' !== _.substr(-5) && 'hsla(' !== _.substr(-5)) || (l = 1),
                    p !== (f = u[w++] || '') &&
                      ((h = parseFloat(f) || 0),
                      (g = f.substr((h + '').length)),
                      (y = '=' === p.charAt(1) ? +(p.charAt(0) + '1') : 0) && (p = p.substr(2)),
                      (d = parseFloat(p)),
                      (m = p.substr((d + '').length)),
                      (x = R.lastIndex - m.length),
                      m || ((m = m || c.units[e] || g), x === n.length && ((n += m), (v.e += m))),
                      g !== m && (h = Bi(t, e, f, m) || 0),
                      (v._pt = {
                        _next: v._pt,
                        p: _ || 1 === w ? _ : ',',
                        s: h,
                        c: y ? y * d : d - h,
                        m: (l && l < 4) || 'zIndex' === e ? Math.round : 0,
                      }));
                v.c = x < n.length ? n.substring(x, n.length) : '';
              } else v.r = 'display' === e && 'none' === n ? mi : _i;
              return B.test(n) && (v.e = 0), (this._pt = v), v;
            },
            Hi = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
            Yi = function (t) {
              var e = t.split(' '),
                i = e[0],
                n = e[1] || '50%';
              return (
                ('top' !== i && 'bottom' !== i && 'left' !== n && 'right' !== n) ||
                  ((t = i), (i = n), (n = t)),
                (e[0] = Hi[i] || i),
                (e[1] = Hi[n] || n),
                e.join(' ')
              );
            },
            Xi = function (t, e) {
              if (e.tween && e.tween._time === e.tween._dur) {
                var i,
                  n,
                  r,
                  s = e.t,
                  a = s.style,
                  o = e.u,
                  u = s._gsap;
                if ('all' === o || !0 === o) (a.cssText = ''), (n = 1);
                else
                  for (r = (o = o.split(',')).length; --r > -1; )
                    (i = o[r]),
                      ni[i] && ((n = 1), (i = 'transformOrigin' === i ? Ei : Ti)),
                      Li(s, i);
                n &&
                  (Li(s, Ti),
                  u && (u.svg && s.removeAttribute('transform'), Zi(s, 1), (u.uncache = 1)));
              }
            },
            Ni = {
              clearProps: function (t, e, i, n, r) {
                if ('isFromStart' !== r.data) {
                  var s = (t._pt = new Ve(t._pt, e, i, 0, 0, Xi));
                  return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
                }
              },
            },
            Vi = [1, 0, 0, 1, 0, 0],
            qi = {},
            Gi = function (t) {
              return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
            },
            ji = function (t) {
              var e = ki(t, Ti);
              return Gi(e) ? Vi : e.substr(7).match(L).map(st);
            },
            Wi = function (t, e) {
              var i,
                n,
                r,
                s,
                a = t._gsap || it(t),
                o = t.style,
                u = ji(t);
              return a.svg && t.getAttribute('transform')
                ? '1,0,0,1,0,0' ===
                  (u = [
                    (r = t.transform.baseVal.consolidate().matrix).a,
                    r.b,
                    r.c,
                    r.d,
                    r.e,
                    r.f,
                  ]).join(',')
                  ? Vi
                  : u
                : (u !== Vi ||
                    t.offsetParent ||
                    t === $e ||
                    a.svg ||
                    ((r = o.display),
                    (o.display = 'block'),
                    ((i = t.parentNode) && t.offsetParent) ||
                      ((s = 1), (n = t.nextSibling), $e.appendChild(t)),
                    (u = ji(t)),
                    r ? (o.display = r) : Li(t, 'display'),
                    s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : $e.removeChild(t))),
                  e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
            },
            Qi = function (t, e, i, n, r, s) {
              var a,
                o,
                u,
                h = t._gsap,
                l = r || Wi(t, !0),
                f = h.xOrigin || 0,
                p = h.yOrigin || 0,
                c = h.xOffset || 0,
                d = h.yOffset || 0,
                _ = l[0],
                m = l[1],
                g = l[2],
                y = l[3],
                v = l[4],
                x = l[5],
                w = e.split(' '),
                b = parseFloat(w[0]) || 0,
                T = parseFloat(w[1]) || 0;
              i
                ? l !== Vi &&
                  (o = _ * y - m * g) &&
                  ((u = b * (-m / o) + T * (_ / o) - (_ * x - m * v) / o),
                  (b = b * (y / o) + T * (-g / o) + (g * x - y * v) / o),
                  (T = u))
                : ((b = (a = Di(t)).x + (~w[0].indexOf('%') ? (b / 100) * a.width : b)),
                  (T = a.y + (~(w[1] || w[0]).indexOf('%') ? (T / 100) * a.height : T))),
                n || (!1 !== n && h.smooth)
                  ? ((v = b - f),
                    (x = T - p),
                    (h.xOffset = c + (v * _ + x * g) - v),
                    (h.yOffset = d + (v * m + x * y) - x))
                  : (h.xOffset = h.yOffset = 0),
                (h.xOrigin = b),
                (h.yOrigin = T),
                (h.smooth = !!n),
                (h.origin = e),
                (h.originIsAbsolute = !!i),
                (t.style[Ei] = '0px 0px'),
                s &&
                  (Ri(s, h, 'xOrigin', f, b),
                  Ri(s, h, 'yOrigin', p, T),
                  Ri(s, h, 'xOffset', c, h.xOffset),
                  Ri(s, h, 'yOffset', d, h.yOffset)),
                t.setAttribute('data-svg-origin', b + ' ' + T);
            },
            Zi = function (t, e) {
              var i = t._gsap || new xe(t);
              if ('x' in i && !e && !i.uncache) return i;
              var n,
                r,
                s,
                a,
                o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                m,
                g,
                y,
                v,
                x,
                w,
                b,
                T,
                E,
                M,
                k,
                P,
                C,
                O,
                S,
                A,
                D,
                z,
                L,
                R,
                F = t.style,
                B = i.scaleX < 0,
                I = ki(t, Ei) || '0';
              return (
                (n = r = s = u = h = l = f = p = d = 0),
                (a = o = 1),
                (i.svg = !(!t.getCTM || !zi(t))),
                (g = Wi(t, i.svg)),
                i.svg &&
                  ((P = !i.uncache && t.getAttribute('data-svg-origin')),
                  Qi(t, P || I, !!P || i.originIsAbsolute, !1 !== i.smooth, g)),
                (_ = i.xOrigin || 0),
                (m = i.yOrigin || 0),
                g !== Vi &&
                  ((w = g[0]),
                  (b = g[1]),
                  (T = g[2]),
                  (E = g[3]),
                  (n = M = g[4]),
                  (r = k = g[5]),
                  6 === g.length
                    ? ((a = Math.sqrt(w * w + b * b)),
                      (o = Math.sqrt(E * E + T * T)),
                      (u = w || b ? ai(b, w) * ri : 0),
                      (f = T || E ? ai(T, E) * ri + u : 0) && (o *= Math.cos(f * si)),
                      i.svg && ((n -= _ - (_ * w + m * T)), (r -= m - (_ * b + m * E))))
                    : ((R = g[6]),
                      (z = g[7]),
                      (S = g[8]),
                      (A = g[9]),
                      (D = g[10]),
                      (L = g[11]),
                      (n = g[12]),
                      (r = g[13]),
                      (s = g[14]),
                      (h = (y = ai(R, D)) * ri),
                      y &&
                        ((P = M * (v = Math.cos(-y)) + S * (x = Math.sin(-y))),
                        (C = k * v + A * x),
                        (O = R * v + D * x),
                        (S = M * -x + S * v),
                        (A = k * -x + A * v),
                        (D = R * -x + D * v),
                        (L = z * -x + L * v),
                        (M = P),
                        (k = C),
                        (R = O)),
                      (l = (y = ai(-T, D)) * ri),
                      y &&
                        ((v = Math.cos(-y)),
                        (L = E * (x = Math.sin(-y)) + L * v),
                        (w = P = w * v - S * x),
                        (b = C = b * v - A * x),
                        (T = O = T * v - D * x)),
                      (u = (y = ai(b, w)) * ri),
                      y &&
                        ((P = w * (v = Math.cos(y)) + b * (x = Math.sin(y))),
                        (C = M * v + k * x),
                        (b = b * v - w * x),
                        (k = k * v - M * x),
                        (w = P),
                        (M = C)),
                      h && Math.abs(h) + Math.abs(u) > 359.9 && ((h = u = 0), (l = 180 - l)),
                      (a = st(Math.sqrt(w * w + b * b + T * T))),
                      (o = st(Math.sqrt(k * k + R * R))),
                      (y = ai(M, k)),
                      (f = Math.abs(y) > 2e-4 ? y * ri : 0),
                      (d = L ? 1 / (L < 0 ? -L : L) : 0)),
                  i.svg &&
                    ((P = t.getAttribute('transform')),
                    (i.forceCSS = t.setAttribute('transform', '') || !Gi(ki(t, Ti))),
                    P && t.setAttribute('transform', P))),
                Math.abs(f) > 90 &&
                  Math.abs(f) < 270 &&
                  (B
                    ? ((a *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
                    : ((o *= -1), (f += f <= 0 ? 180 : -180))),
                (i.x =
                  n -
                  ((i.xPercent =
                    n &&
                    (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                    ? (t.offsetWidth * i.xPercent) / 100
                    : 0) +
                  'px'),
                (i.y =
                  r -
                  ((i.yPercent =
                    r &&
                    (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
                    ? (t.offsetHeight * i.yPercent) / 100
                    : 0) +
                  'px'),
                (i.z = s + 'px'),
                (i.scaleX = st(a)),
                (i.scaleY = st(o)),
                (i.rotation = st(u) + 'deg'),
                (i.rotationX = st(h) + 'deg'),
                (i.rotationY = st(l) + 'deg'),
                (i.skewX = f + 'deg'),
                (i.skewY = p + 'deg'),
                (i.transformPerspective = d + 'px'),
                (i.zOrigin = parseFloat(I.split(' ')[2]) || 0) && (F[Ei] = $i(I)),
                (i.xOffset = i.yOffset = 0),
                (i.force3D = c.force3D),
                (i.renderTransform = i.svg ? sn : ii ? rn : Ki),
                (i.uncache = 0),
                i
              );
            },
            $i = function (t) {
              return (t = t.split(' '))[0] + ' ' + t[1];
            },
            Ji = function (t, e, i) {
              var n = Bt(e);
              return st(parseFloat(e) + parseFloat(Bi(t, 'x', i + 'px', n))) + n;
            },
            Ki = function (t, e) {
              (e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), rn(t, e);
            },
            tn = '0deg',
            en = '0px',
            nn = ') ',
            rn = function (t, e) {
              var i = e || this,
                n = i.xPercent,
                r = i.yPercent,
                s = i.x,
                a = i.y,
                o = i.z,
                u = i.rotation,
                h = i.rotationY,
                l = i.rotationX,
                f = i.skewX,
                p = i.skewY,
                c = i.scaleX,
                d = i.scaleY,
                _ = i.transformPerspective,
                m = i.force3D,
                g = i.target,
                y = i.zOrigin,
                v = '',
                x = ('auto' === m && t && 1 !== t) || !0 === m;
              if (y && (l !== tn || h !== tn)) {
                var w,
                  b = parseFloat(h) * si,
                  T = Math.sin(b),
                  E = Math.cos(b);
                (b = parseFloat(l) * si),
                  (w = Math.cos(b)),
                  (s = Ji(g, s, T * w * -y)),
                  (a = Ji(g, a, -Math.sin(b) * -y)),
                  (o = Ji(g, o, E * w * -y + y));
              }
              _ !== en && (v += 'perspective(' + _ + nn),
                (n || r) && (v += 'translate(' + n + '%, ' + r + '%) '),
                (x || s !== en || a !== en || o !== en) &&
                  (v +=
                    o !== en || x
                      ? 'translate3d(' + s + ', ' + a + ', ' + o + ') '
                      : 'translate(' + s + ', ' + a + nn),
                u !== tn && (v += 'rotate(' + u + nn),
                h !== tn && (v += 'rotateY(' + h + nn),
                l !== tn && (v += 'rotateX(' + l + nn),
                (f === tn && p === tn) || (v += 'skew(' + f + ', ' + p + nn),
                (1 === c && 1 === d) || (v += 'scale(' + c + ', ' + d + nn),
                (g.style[Ti] = v || 'translate(0, 0)');
            },
            sn = function (t, e) {
              var i,
                n,
                r,
                s,
                a,
                o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                p = o.rotation,
                c = o.skewX,
                d = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                y = o.xOrigin,
                v = o.yOrigin,
                x = o.xOffset,
                w = o.yOffset,
                b = o.forceCSS,
                T = parseFloat(l),
                E = parseFloat(f);
              (p = parseFloat(p)),
                (c = parseFloat(c)),
                (d = parseFloat(d)) && ((c += d = parseFloat(d)), (p += d)),
                p || c
                  ? ((p *= si),
                    (c *= si),
                    (i = Math.cos(p) * _),
                    (n = Math.sin(p) * _),
                    (r = Math.sin(p - c) * -m),
                    (s = Math.cos(p - c) * m),
                    c &&
                      ((d *= si),
                      (a = Math.tan(c - d)),
                      (r *= a = Math.sqrt(1 + a * a)),
                      (s *= a),
                      d && ((a = Math.tan(d)), (i *= a = Math.sqrt(1 + a * a)), (n *= a))),
                    (i = st(i)),
                    (n = st(n)),
                    (r = st(r)),
                    (s = st(s)))
                  : ((i = _), (s = m), (n = r = 0)),
                ((T && !~(l + '').indexOf('px')) || (E && !~(f + '').indexOf('px'))) &&
                  ((T = Bi(g, 'x', l, 'px')), (E = Bi(g, 'y', f, 'px'))),
                (y || v || x || w) &&
                  ((T = st(T + y - (y * i + v * r) + x)), (E = st(E + v - (y * n + v * s) + w))),
                (u || h) &&
                  ((a = g.getBBox()),
                  (T = st(T + (u / 100) * a.width)),
                  (E = st(E + (h / 100) * a.height))),
                (a = 'matrix(' + i + ',' + n + ',' + r + ',' + s + ',' + T + ',' + E + ')'),
                g.setAttribute('transform', a),
                b && (g.style[Ti] = a);
            },
            an = function (t, e, i, n, r, s) {
              var a,
                o,
                u = T(r),
                h = parseFloat(r) * (u && ~r.indexOf('rad') ? ri : 1),
                l = s ? h * s : h - n,
                f = n + l + 'deg';
              return (
                u &&
                  ('short' === (a = r.split('_')[1]) &&
                    (l %= 360) != l % 180 &&
                    (l += l < 0 ? 360 : -360),
                  'cw' === a && l < 0
                    ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                    : 'ccw' === a && l > 0 && (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
                (t._pt = o = new Ve(t._pt, e, i, n, l, pi)),
                (o.e = f),
                (o.u = 'deg'),
                t._props.push(i),
                o
              );
            },
            on = function (t, e, i) {
              var n,
                r,
                s,
                a,
                o,
                u,
                h,
                l = ti.style,
                f = i._gsap;
              for (r in ((l.cssText =
                getComputedStyle(i).cssText + ';position:absolute;display:block;'),
              (l[Ti] = e),
              Ze.body.appendChild(ti),
              (n = Zi(ti, 1)),
              ni))
                (s = f[r]) !== (a = n[r]) &&
                  'perspective,force3D,transformOrigin,svgOrigin'.indexOf(r) < 0 &&
                  ((o = Bt(s) !== (h = Bt(a)) ? Bi(i, r, s, h) : parseFloat(s)),
                  (u = parseFloat(a)),
                  (t._pt = new Ve(t._pt, f, r, o, u - o, fi)),
                  (t._pt.u = h || 0),
                  t._props.push(r));
              Ze.body.removeChild(ti);
            };
          rt('padding,margin,Width,Radius', function (t, e) {
            var i = 'Top',
              n = 'Right',
              r = 'Bottom',
              s = 'Left',
              a = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(function (i) {
                return e < 2 ? t + i : 'border' + i + t;
              });
            Ni[e > 1 ? 'border' + t : t] = function (t, e, i, n, r) {
              var s, o;
              if (arguments.length < 4)
                return (
                  (s = a.map(function (e) {
                    return Ii(t, e, i);
                  })),
                  5 === (o = s.join(' ')).split(s[0]).length ? s[0] : o
                );
              (s = (n + '').split(' ')),
                (o = {}),
                a.forEach(function (t, e) {
                  return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, o, r);
            };
          });
          var un = {
            name: 'css',
            register: Oi,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, i, n, r) {
              var s,
                a,
                o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                m,
                g,
                y,
                v,
                x,
                w = this._props,
                b = t.style,
                T = i.vars.startAt;
              for (f in (Je || Oi(), e))
                if ('autoRound' !== f && ((a = e[f]), !Z[f] || !Me(f, e, i, n, t, r)))
                  if (
                    ((h = typeof a),
                    (l = Ni[f]),
                    'function' === h && (h = typeof (a = a.call(i, n, t, r))),
                    'string' === h && ~a.indexOf('random(') && (a = jt(a)),
                    l)
                  )
                    l(this, t, f, a, i) && (x = 1);
                  else if ('--' === f.substr(0, 2))
                    (s = (getComputedStyle(t).getPropertyValue(f) + '').trim()),
                      (a += ''),
                      (p = Bt(s)),
                      (d = Bt(a)) ? p !== d && (s = Bi(t, f, s, d) + d) : p && (a += p),
                      this.add(b, 'setProperty', s, a, n, r, 0, 0, f);
                  else if ('undefined' !== h) {
                    if (
                      (T && f in T
                        ? ((s = 'function' == typeof T[f] ? T[f].call(i, n, t, r) : T[f]),
                          f in c.units && !Bt(s) && (s += c.units[f]),
                          '=' === (s + '').charAt(1) && (s = Ii(t, f)))
                        : (s = Ii(t, f)),
                      (u = parseFloat(s)),
                      (_ = 'string' === h && '=' === a.charAt(1) ? +(a.charAt(0) + '1') : 0) &&
                        (a = a.substr(2)),
                      (o = parseFloat(a)),
                      f in li &&
                        ('autoAlpha' === f &&
                          (1 === u && 'hidden' === Ii(t, 'visibility') && o && (u = 0),
                          Ri(
                            this,
                            b,
                            'visibility',
                            u ? 'inherit' : 'hidden',
                            o ? 'inherit' : 'hidden',
                            !o,
                          )),
                        'scale' !== f &&
                          'transform' !== f &&
                          ~(f = li[f]).indexOf(',') &&
                          (f = f.split(',')[0])),
                      (m = f in ni))
                    )
                      if (
                        (g ||
                          (((y = t._gsap).renderTransform && !e.parseTransform) ||
                            Zi(t, e.parseTransform),
                          (v = !1 !== e.smoothOrigin && y.smooth),
                          ((g = this._pt =
                            new Ve(this._pt, b, Ti, 0, 1, y.renderTransform, y, 0, -1)).dep = 1)),
                        'scale' === f)
                      )
                        (this._pt = new Ve(
                          this._pt,
                          y,
                          'scaleY',
                          y.scaleY,
                          _ ? _ * o : o - y.scaleY,
                        )),
                          w.push('scaleY', f),
                          (f += 'X');
                      else {
                        if ('transformOrigin' === f) {
                          (a = Yi(a)),
                            y.svg
                              ? Qi(t, a, 0, v, 0, this)
                              : ((d = parseFloat(a.split(' ')[2]) || 0) !== y.zOrigin &&
                                  Ri(this, y, 'zOrigin', y.zOrigin, d),
                                Ri(this, b, f, $i(s), $i(a)));
                          continue;
                        }
                        if ('svgOrigin' === f) {
                          Qi(t, a, 1, v, 0, this);
                          continue;
                        }
                        if (f in qi) {
                          an(this, y, f, u, a, _);
                          continue;
                        }
                        if ('smoothOrigin' === f) {
                          Ri(this, y, 'smooth', y.smooth, a);
                          continue;
                        }
                        if ('force3D' === f) {
                          y[f] = a;
                          continue;
                        }
                        if ('transform' === f) {
                          on(this, a, t);
                          continue;
                        }
                      }
                    else f in b || (f = Ci(f) || f);
                    if (m || ((o || 0 === o) && (u || 0 === u) && !hi.test(a) && f in b))
                      o || (o = 0),
                        (p = (s + '').substr((u + '').length)) !==
                          (d = Bt(a) || (f in c.units ? c.units[f] : p)) && (u = Bi(t, f, s, d)),
                        (this._pt = new Ve(
                          this._pt,
                          m ? y : b,
                          f,
                          u,
                          _ ? _ * o : o - u,
                          m || ('px' !== d && 'zIndex' !== f) || !1 === e.autoRound ? fi : di,
                        )),
                        (this._pt.u = d || 0),
                        p !== d && ((this._pt.b = s), (this._pt.r = ci));
                    else if (f in b) Ui.call(this, t, f, s, a);
                    else {
                      if (!(f in t)) {
                        N(f, a);
                        continue;
                      }
                      this.add(t, f, t[f], a, n, r);
                    }
                    w.push(f);
                  }
              x && Ne(this);
            },
            get: Ii,
            aliases: li,
            getSetter: function (t, e, i) {
              var n = li[e];
              return (
                n && n.indexOf(',') < 0 && (e = n),
                e in ni && e !== Ei && (t._gsap.x || Ii(t, 'x'))
                  ? i && ei === i
                    ? 'scale' === e
                      ? xi
                      : vi
                    : (ei = i || {}) && ('scale' === e ? wi : bi)
                  : t.style && !k(t.style[e])
                  ? gi
                  : ~e.indexOf('-')
                  ? yi
                  : Re(t, e)
              );
            },
            core: { _removeProperty: Li, _getMatrix: Wi },
          };
          (We.utils.checkPrefix = Ci),
            (function (t, e, i, n) {
              var r = rt(
                'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' +
                  e +
                  ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
                function (t) {
                  ni[t] = 1;
                },
              );
              rt(e, function (t) {
                (c.units[t] = 'deg'), (qi[t] = 1);
              }),
                (li[r[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + e),
                rt(
                  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
                  function (t) {
                    var e = t.split(':');
                    li[e[1]] = r[e[0]];
                  },
                );
            })(0, 'rotation,rotationX,rotationY,skewX,skewY'),
            rt(
              'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
              function (t) {
                c.units[t] = 'px';
              },
            ),
            We.registerPlugin(un);
          var hn = We.registerPlugin(un) || We,
            ln = hn.core.Tween,
            fn = (function () {
              function t(t) {
                (this.pointerElement = t),
                  (this.defaultStyle = { width: 20, height: 20, radius: 100 });
              }
              return (
                (t.prototype.onUpdate = function (t, e) {
                  hn.to(this.pointerElement, {
                    x: t - this.defaultStyle.width / 2,
                    y: e - this.defaultStyle.height / 2,
                    duration: 0.05,
                  });
                }),
                (t.prototype.init = function () {
                  hn.to(this.pointerElement, {
                    width: this.defaultStyle.width,
                    height: this.defaultStyle.height,
                    borderRadius: this.defaultStyle.radius,
                    duration: 0.15,
                  });
                }),
                t
              );
            })(),
            pn = (function () {
              function t(t, e) {
                var i = this;
                (this.changePointerOnDown = function () {
                  hn.to(i.pointerElement, { background: 'rgba(0,0,0,0.5)', scale: 0.92 });
                }),
                  (this.resetPointer = function () {
                    hn.to(i.pointerElement, {
                      background: i.pointerBackground,
                      scale: 1,
                      onComplete: function () {
                        ln.set(i.pointerElement, { clearProps: 'background' });
                      },
                    });
                  }),
                  (this.pointerElement = t),
                  (this.targetElement = e),
                  (this.horizontalGridPosition = []),
                  (this.lineHeight = 0),
                  this.initEventListener();
              }
              return (
                (t.prototype.onUpdate = function (t, e) {
                  var i = this.pointerElement.offsetWidth,
                    n = Math.max.apply(
                      Math,
                      this.horizontalGridPosition.filter(function (t) {
                        return e > t;
                      }),
                    ),
                    r = t - i / 2,
                    s = Math.min.apply(Math, this.horizontalGridPosition),
                    a = Math.max.apply(Math, this.horizontalGridPosition),
                    o =
                      n +
                      (e > n + this.lineHeight - this.lineHeight / 4
                        ? this.lineHeight / 4
                        : e < n + this.lineHeight / 4
                        ? -this.lineHeight / 4
                        : 0);
                  e >= s && e <= a && n > 0
                    ? hn.to(this.pointerElement, { x: r, y: o, duration: 0.15 })
                    : hn.to(this.pointerElement, {
                        x: t - i / 2,
                        y: e - this.lineHeight / 2,
                        duration: 0.15,
                      });
                }),
                (t.prototype.init = function () {
                  var t = this.targetElement.getBoundingClientRect(),
                    e = t.top,
                    i = t.height,
                    n = window.getComputedStyle(this.targetElement),
                    r = window.getComputedStyle(this.pointerElement),
                    s = parseInt(n.lineHeight, 10) || 16,
                    a = parseFloat(n.paddingTop),
                    o = parseFloat(n.paddingBottom);
                  (this.horizontalGridPosition = Array.from({
                    length: Math.round((i - o - a) / s),
                  }).map(function (t, i) {
                    return e + a + s + i * s;
                  })),
                    this.horizontalGridPosition.push(e + a),
                    (this.lineHeight = s),
                    (this.pointerBackground = r.backgroundColor),
                    hn.to(this.pointerElement, {
                      width: this.lineHeight / 10,
                      height: this.lineHeight,
                      borderRadius: 10,
                      duration: 0.15,
                    });
                }),
                (t.prototype.initEventListener = function () {
                  this.targetElement.addEventListener('mousedown', this.changePointerOnDown),
                    this.targetElement.addEventListener('mouseup', this.resetPointer);
                }),
                (t.prototype.removeEventListener = function () {
                  this.targetElement.removeEventListener('mousedown', this.changePointerOnDown),
                    this.targetElement.removeEventListener('mouseup', this.resetPointer);
                }),
                (t.prototype.onReset = function () {
                  this.removeEventListener(), this.resetPointer();
                }),
                t
              );
            })(),
            cn = (function () {
              function t() {
                this.specularLayer = null;
              }
              return (
                (t.prototype.init = function () {
                  var t = document.createElement('div');
                  Object.assign(t.style, {
                    position: 'fixed',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    borderRadius: 0,
                    zIndex: 99999999,
                  }),
                    (this.specularLayer = t),
                    document.body.appendChild(this.specularLayer);
                }),
                (t.prototype.destroy = function () {
                  this.specularLayer.parentElement.removeChild(this.specularLayer);
                }),
                (t.prototype.update = function (t) {
                  t(this.specularLayer);
                }),
                t
              );
            })(),
            dn = (function () {
              function t(t, e) {
                (this.specularLayer = new cn()),
                  (this.highlightStyle = null),
                  (this.cssHighlightClass = 'pointer-highlight-type'),
                  (this.pointerElement = t),
                  (this.targetElement = e);
              }
              return (
                (t.prototype.onUpdate = function (t, e) {
                  var i = this.targetElementValues,
                    n = i.top,
                    r = i.left,
                    s = i.width,
                    a = i.height,
                    o = r - (r - t + s / 2) / 6,
                    u = n - (n - e + a / 2) / 8;
                  hn.to(this.pointerElement, { x: o, y: u, duration: 0.15 }),
                    this.specularLayer.update(function (i) {
                      hn.to(i, {
                        x: o,
                        y: u,
                        duration: 0.15,
                        backgroundImage:
                          'radial-gradient(circle at ' +
                          Math.abs(r - t) +
                          'px ' +
                          Math.abs(n - e) +
                          'px, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 60%)',
                      });
                    }),
                    hn.to(this.targetElement, {
                      x: -(r - t + s / 2) / 18,
                      y: -(n - e + a / 2) / 20,
                      duration: 0.15,
                    });
                }),
                (t.prototype.init = function () {
                  var t = this.targetElement.getBoundingClientRect(),
                    e = t.width,
                    i = t.height,
                    n = t.top,
                    r = t.left,
                    s = parseFloat(window.getComputedStyle(this.targetElement).borderRadius),
                    a = parseFloat(window.getComputedStyle(this.targetElement).zIndex);
                  (this.targetElementValues = { top: n, left: r, width: e, height: i, zIndex: a }),
                    this.specularLayer.init(),
                    this.createHighlighStyle(),
                    this.pointerElement.classList.add(this.cssHighlightClass),
                    hn.to(this.pointerElement, {
                      y: n,
                      x: r,
                      width: e,
                      height: i,
                      borderRadius: s,
                      duration: 0.15,
                    }),
                    this.specularLayer.update(function (t) {
                      hn.to(t, {
                        y: n,
                        x: r,
                        width: e,
                        height: i,
                        borderRadius: s,
                        duration: 0.15,
                      });
                    });
                }),
                (t.prototype.onReset = function () {
                  this.specularLayer.destroy(),
                    this.removeHighlighStyle(),
                    this.pointerElement.classList.remove(this.cssHighlightClass),
                    hn.to(this.targetElement, { x: 0, y: 0, duration: 0.15 });
                }),
                (t.prototype.removeHighlighStyle = function () {
                  this.highlightStyle.parentElement.removeChild(this.highlightStyle);
                }),
                (t.prototype.createHighlighStyle = function () {
                  var t = document.createElement('style');
                  (t.innerHTML =
                    '\n            .' +
                    this.cssHighlightClass +
                    ' {\n                z-index: ' +
                    (this.targetElementValues.zIndex - 1) +
                    ';\n                background-color: rgba(0,0,0,0.07);\n            }\n        '),
                    (this.highlightStyle = t),
                    document.head.appendChild(this.highlightStyle);
                }),
                t
              );
            })(),
            _n = (function () {
              function t(t, e) {
                (this.specularLayer = new cn()),
                  (this.cssLiftClass = 'pointer-lift-type'),
                  (this.liftStyle = null),
                  (this.pointerElement = t),
                  (this.targetElement = e);
              }
              return (
                (t.prototype.init = function () {
                  var t = this.targetElement.getBoundingClientRect(),
                    e = t.width,
                    i = t.height,
                    n = t.top,
                    r = t.left,
                    s = window.getComputedStyle(this.targetElement),
                    a = parseFloat(s.borderRadius),
                    o = parseFloat(s.zIndex),
                    u = s.backgroundColor;
                  (this.targetElementValues = { top: n, left: r, width: e, height: i, zIndex: o }),
                    this.addLiftStyle(),
                    this.specularLayer.init(),
                    this.pointerElement.classList.add(this.cssLiftClass),
                    hn.to(this.pointerElement, {
                      y: n - 0.075 * i,
                      x: r - 0.075 * e,
                      width: 1.15 * e,
                      height: 1.15 * i,
                      borderRadius: a,
                      duration: 0.15,
                      filter: 'drop-shadow(0 -3px 12px ' + u + ') drop-shadow(0 3px 6px black)',
                    }),
                    this.specularLayer.update(function (t) {
                      hn.to(t, {
                        y: n - 0.075 * i,
                        x: r - 0.075 * e,
                        width: 1.15 * e,
                        height: 1.15 * i,
                        borderRadius: a,
                        duration: 0.15,
                      });
                    }),
                    hn.to(this.targetElement, { scale: 1.15, duration: 0.15 });
                }),
                (t.prototype.onUpdate = function (t, e) {
                  var i = this.targetElementValues,
                    n = i.top,
                    r = i.left,
                    s = i.width,
                    a = i.height,
                    o = -(r - 0.075 * s - t + (1.15 * s) / 2) / 10,
                    u = -(n - 0.075 * a - e + (1.15 * a) / 2) / 12,
                    h = r - 0.075 * s + o,
                    l = n - 0.075 * a + u;
                  hn.to(this.pointerElement, { x: h, y: l, duration: 0.15 }),
                    this.specularLayer.update(function (i) {
                      hn.to(i, {
                        x: h,
                        y: l,
                        duration: 0.15,
                        backgroundImage:
                          'radial-gradient(circle at ' +
                          Math.abs(r - t) +
                          'px ' +
                          Math.abs(n - e) +
                          'px, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 60%)',
                      });
                    }),
                    hn.to(this.targetElement, { x: o, y: u, duration: 0.15 });
                }),
                (t.prototype.onReset = function () {
                  this.removeLiftStyle(),
                    this.specularLayer.destroy(),
                    this.pointerElement.classList.remove(this.cssLiftClass),
                    hn.to(this.pointerElement, { duration: 0.15, filter: 'none' }),
                    hn.to(this.targetElement, { scale: 1, x: 0, y: 0, duration: 0.15 });
                }),
                (t.prototype.removeLiftStyle = function () {
                  this.liftStyle.parentElement.removeChild(this.liftStyle);
                }),
                (t.prototype.addLiftStyle = function () {
                  var t = document.createElement('style');
                  (t.innerHTML =
                    '\n            .' +
                    this.cssLiftClass +
                    ' {\n                background-color: rgba(0,0,0,0.05);\n                z-index: ' +
                    (this.targetElementValues.zIndex - 1) +
                    ';\n            }\n        '),
                    (this.liftStyle = t),
                    document.head.appendChild(this.liftStyle);
                }),
                t
              );
            })(),
            mn = new Map();
          function gn(t) {
            return mn.has(t)
              ? mn.get(t)
              : (console.warn(
                  'MorphingPointer: could not get pointer with type ' +
                    t +
                    ', try to change pointer type',
                ),
                mn.get('default'));
          }
          mn.set('default', fn), mn.set('content', pn), mn.set('highlight', dn), mn.set('lift', _n);
          var yn = (function () {
            function t() {
              (this.pointerElement = (function () {
                if (document.querySelector('.iPad-like-pointer'))
                  return (
                    console.warn('MorphingPointer: pointer element has already created'),
                    document.querySelector('.iPad-like-pointer')
                  );
                var t = document.createElement('div'),
                  e = document.createElement('style');
                return (
                  t.classList.add('iPad-like-pointer'),
                  (e.innerText =
                    '\n        body, [data-pointer-type] {\n             cursor: none;\n        }\n\n        .iPad-like-pointer {\n            position: fixed;\n            pointer-events: none;\n            top: 0;\n            left: 0;\n            width: 20px;\n            height: 20px;\n            border-radius: 100px;\n            background-color: rgba(0,0,0,0.23);\n            z-index: 99999999;\n            transition: background-color 150ms ease;\n        }\n    '),
                  document.head.appendChild(e),
                  document.body.appendChild(t),
                  t
                );
              })()),
                this.setDefaultPointer(),
                (this.pointerPosition = { x: 0, y: 0 });
            }
            return (
              (t.prototype.init = function () {
                this.initEventListeners(), this.initPointerPositionUpdates();
              }),
              (t.prototype.setSelectedPointer = function (t, e) {
                var i = gn(t);
                (this.pointer = new i(this.pointerElement, e)), this.pointer.init();
              }),
              (t.prototype.setDefaultPointer = function () {
                var t = gn('default');
                (this.pointer = new t(this.pointerElement)), this.pointer.init();
              }),
              (t.prototype.updatePointerPosition = function (t, e) {
                this.pointer.onUpdate(t, e);
              }),
              (t.prototype.initPointerPositionUpdates = function () {
                var t = this;
                requestAnimationFrame(function e() {
                  var i = t.pointerPosition,
                    n = i.x,
                    r = i.y;
                  t.updatePointerPosition(n, r), requestAnimationFrame(e);
                });
              }),
              (t.prototype.initEventListeners = function () {
                var t = this;
                Array.from(document.querySelectorAll('[data-pointer-type]')).forEach(function (e) {
                  e.addEventListener('mouseenter', function (e) {
                    var i = e.currentTarget,
                      n = i.dataset.pointerType;
                    t.setSelectedPointer(n, i);
                  }),
                    e.addEventListener('mouseleave', function () {
                      t.pointer.onReset(), t.setDefaultPointer();
                    });
                }),
                  window.addEventListener('mousemove', function (e) {
                    (t.pointerPosition.x = e.clientX), (t.pointerPosition.y = e.clientY);
                  });
              }),
              t
            );
          })();
          (e.addPointer = function (t, e) {
            mn.has(t)
              ? console.warn(
                  'MorphingPointer: could not add custom pointer with type ' +
                    t +
                    ', try to change custom pointer type',
                )
              : mn.set(t, e);
          }),
            (e.initMorphingPointer = function () {
              new yn().init();
            }),
            'object' == typeof exports && 'undefined' != typeof module
              ? (module.exports = e)
              : 'function' == typeof t &&
                t.amd &&
                t(function () {
                  return e;
                });
        })();
      },
      {},
    ],
    LOjb: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t) {
          var s,
            i,
            e,
            a = t - this.previousTimeStamp > 100,
            n = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
          (null === this.previousTimeStamp || a) && (this.previousTimeStamp = t),
            (this.progress = this.progress + (t - this.previousTimeStamp)),
            (s = ((this.progress / this.activetransitionSpeed) * 100).toFixed(2)),
            (this.previousTimeStamp = t),
            this.refreshColorsAndPos(s),
            s < 100
              ? (this.animation = requestAnimationFrame(this.animateColors.bind(this)))
              : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || n
              ? (this.isChangingState &&
                  ((this.activetransitionSpeed =
                    this.states[this.activeState].transitionSpeed || 5e3),
                  (this.isChangingState = !1)),
                (this.previousTimeStamp = null),
                (this.progress = 0),
                this.channelsIndex++,
                (i = !1),
                this.channelsIndex === this.states[this.activeState].gradients.length - 1
                  ? (i = !0)
                  : this.channelsIndex === this.states[this.activeState].gradients.length &&
                    (this.channelsIndex = 0),
                (e =
                  void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1]
                    ? this.states[this.activeState].gradients[0]
                    : this.states[this.activeState].gradients[this.channelsIndex + 1]),
                this.setColors(),
                (this.animation = requestAnimationFrame(this.animateColors.bind(this))),
                this.callbacks.onGradientChange &&
                  this.callbacks.onGradientChange({
                    isLooping: i,
                    colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
                    colorsTo: e,
                    activeState: this.activeState,
                  }),
                this.canvas.dispatchEvent(
                  this.events.gradientChange({
                    isLooping: i,
                    colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
                    colorsTo: e,
                    activeState: this.activeState,
                  }),
                ))
              : (cancelAnimationFrame(this.animation),
                this.callbacks.onEnd && this.callbacks.onEnd(),
                this.canvas.dispatchEvent(new CustomEvent('granim:end')));
        };
      },
      {},
    ],
    eh8V: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t) {
          this.context.clearRect(0, 0, this.x1, this.y1),
            (this.context.globalCompositeOperation = this.image.blendingMode = t),
            this.validateInput('blendingMode'),
            this.isPaused && this.refreshColorsAndPos();
        };
      },
      {},
    ],
    LuND: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t) {
          this.context.clearRect(0, 0, this.x1, this.y1),
            (this.direction = t),
            this.validateInput('direction'),
            this.isPaused && this.refreshColorsAndPos();
        };
      },
      {},
    ],
    s1SW: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t) {
          var s = this;
          this.activeState !== t &&
            (this.isPaused || ((this.isPaused = !0), this.pause()),
            (this.channelsIndex = -1),
            (this.activetransitionSpeed = this.stateTransitionSpeed),
            (this.activeColorsDiff = []),
            (this.activeColorsPosDiff = []),
            (this.activeColors = this.getCurrentColors()),
            (this.activeColorsPos = this.getCurrentColorsPos()),
            (this.progress = 0),
            (this.previousTimeStamp = null),
            (this.isChangingState = !0),
            this.states[t].gradients[0].forEach(function (t, i, o) {
              var e = s.convertColorToRgba(s.getColor(t)),
                r = s.getColorPos(t, i),
                a = s.getColorDiff(s.activeColors[i], e),
                h = s.getColorPosDiff(s.activeColorsPos[i], r);
              s.activeColorsDiff.push(a), s.activeColorsPosDiff.push(h);
            }),
            (this.activeState = t),
            this.play());
        };
      },
      {},
    ],
    sWdS: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          this.isPaused ? (this.isPaused = !1) : cancelAnimationFrame(this.animation),
            (this.isCleared = !0),
            this.context.clearRect(0, 0, this.x1, this.y1);
        };
      },
      {},
    ],
    k85H: [
      function (require, module, exports) {
        'use strict';
        var r,
          e = {
            hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
            rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
            rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
            hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
            hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/,
          };
        function a(a) {
          for (var t = Object.keys(e), n = 0; n < t.length; n++)
            if ((r = e[t[n]].exec(a))) return t[n];
          return !1;
        }
        function t(r) {
          r = r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (r, e, a, t) {
            return e + e + a + a + t + t;
          });
          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
          return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), 1] : null;
        }
        function n(r, e, a) {
          return (
            a < 0 && (a += 1),
            a > 1 && (a -= 1),
            a < 1 / 6
              ? r + 6 * (e - r) * a
              : a < 0.5
              ? e
              : a < 2 / 3
              ? r + (e - r) * (2 / 3 - a) * 6
              : r
          );
        }
        function s(r, e, a, t) {
          var s, d, u, p, c;
          return (
            0 === e
              ? (s = d = u = a)
              : ((s = n((c = 2 * a - (p = a < 0.5 ? a * (1 + e) : a + e - a * e)), p, r + 1 / 3)),
                (d = n(c, p, r)),
                (u = n(c, p, r - 1 / 3))),
            [Math.round(255 * s), Math.round(255 * d), Math.round(255 * u), t]
          );
        }
        module.exports = function (e) {
          switch (a(e)) {
            default:
              this.triggerError('colorType');
            case 'hexa':
              return t(e);
            case 'rgba':
              return [parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), parseFloat(r[4])];
            case 'rgb':
              return [parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), 1];
            case 'hsla':
              return s(
                parseInt(r[1], 10) / 360,
                parseInt(r[2], 10) / 100,
                parseInt(r[3], 10) / 100,
                parseFloat(r[4]),
              );
            case 'hsl':
              return s(
                parseInt(r[1], 10) / 360,
                parseInt(r[2], 10) / 100,
                parseInt(r[3], 10) / 100,
                1,
              );
          }
        };
      },
      {},
    ],
    gUCy: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          this.onResize('removeListeners'), this.onScroll('removeListeners'), this.clear();
        };
      },
      {},
    ],
    wtPU: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          function t(t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
          }
          'function' != typeof window.CustomEvent &&
            ((t.prototype = window.Event.prototype), (window.CustomEvent = t));
        };
      },
      {},
    ],
    DOWZ: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (o) {
          return 'string' == typeof o
            ? o
            : 'object' == typeof o && o.color
            ? o.color
            : void this.triggerError('gradient.color');
        };
      },
      {},
    ],
    PeW4: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (r, t) {
          for (var u = 0, e = []; u < 4; u++) e.push(t[u] - r[u]);
          return e;
        };
      },
      {},
    ],
    sKHW: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t, e) {
          return 'object' == typeof t && t.pos
            ? t.pos
            : parseFloat(e ? ((1 / (this.gradientLength - 1)) * e).toFixed(2) : 0);
        };
      },
      {},
    ],
    HHxU: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (t, e) {
          return e - t;
        };
      },
      {},
    ],
    iDv6: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var r,
            t,
            o = [];
          for (r = 0; r < this.currentColors.length; r++)
            for (o.push([]), t = 0; t < 4; t++) o[r].push(this.currentColors[r][t]);
          return o;
        };
      },
      {},
    ],
    mfcm: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var r,
            o = [];
          for (r = 0; r < this.currentColorsPos.length; r++) o.push(this.currentColorsPos[r]);
          return o;
        };
      },
      {},
    ],
    keJ0: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          (this.x1 = this.canvas.offsetWidth), (this.y1 = this.canvas.offsetHeight);
        };
      },
      {},
    ],
    xJC4: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (e) {
          if (e instanceof HTMLCanvasElement) this.canvas = e;
          else {
            if ('string' != typeof e)
              throw new Error('The element you used is neither a String, nor a HTMLCanvasElement');
            this.canvas = document.querySelector(e);
          }
          if (!this.canvas) throw new Error('`' + e + '` could not be found in the DOM');
        };
      },
      {},
    ],
    qAre: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var t,
            r,
            n = null,
            u = this.getCurrentColors().map(function (t) {
              return Math.max(t[0], t[1], t[2]);
            });
          for (r = 0; r < u.length; r++)
            (n = null === n ? u[r] : n + u[r]), r === u.length - 1 && (t = Math.round(n / (r + 1)));
          return t >= 128 ? 'light' : 'dark';
        };
      },
      {},
    ],
    z6GW: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var t = this.setDirection(),
            i = document.querySelector(this.elToSetClassOn).classList,
            s = 0;
          for (
            this.context.clearRect(0, 0, this.x1, this.y1),
              this.image &&
                this.context.drawImage(
                  this.imageNode,
                  this.imagePosition.x,
                  this.imagePosition.y,
                  this.imagePosition.width,
                  this.imagePosition.height,
                );
            s < this.currentColors.length;
            s++
          )
            t.addColorStop(
              this.currentColorsPos[s],
              'rgba(' +
                this.currentColors[s][0] +
                ', ' +
                this.currentColors[s][1] +
                ', ' +
                this.currentColors[s][2] +
                ', ' +
                this.currentColors[s][3] +
                ')',
            );
          this.name &&
            ('light' === this.getLightness()
              ? (i.remove(this.name + '-dark'), i.add(this.name + '-light'))
              : (i.remove(this.name + '-light'), i.add(this.name + '-dark'))),
            (this.context.fillStyle = t),
            this.context.fillRect(0, 0, this.x1, this.y1);
        };
      },
      {},
    ],
    qvCT: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (e) {
          'removeListeners' !== e
            ? window.addEventListener('resize', this.setSizeAttributesNameSpace)
            : window.removeEventListener('resize', this.setSizeAttributesNameSpace);
        };
      },
      {},
    ],
    EgWt: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (e) {
          'removeListeners' !== e
            ? (window.addEventListener('scroll', this.pauseWhenNotInViewNameSpace),
              this.pauseWhenNotInViewNameSpace())
            : window.removeEventListener('scroll', this.pauseWhenNotInViewNameSpace);
        };
      },
      {},
    ],
    E3th: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (i) {
          var s = 'isPausedBecauseNotInView' === i;
          this.isCleared ||
            (s || (this.isPaused = !0),
            cancelAnimationFrame(this.animation),
            (this.animating = !1));
        };
      },
      {},
    ],
    qCl9: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var e = this;
          this.scrollDebounceTimeout && clearTimeout(this.scrollDebounceTimeout),
            (this.scrollDebounceTimeout = setTimeout(function () {
              var i = e.canvas.getBoundingClientRect();
              if (
                ((e.isCanvasInWindowView = !(
                  i.bottom < 0 ||
                  i.right < 0 ||
                  i.left > window.innerWidth ||
                  i.top > window.innerHeight
                )),
                e.isCanvasInWindowView)
              ) {
                if (!e.isPaused || e.firstScrollInit) {
                  if (e.image && !e.isImgLoaded) return;
                  (e.isPausedBecauseNotInView = !1),
                    e.play('isPlayedBecauseInView'),
                    (e.firstScrollInit = !1);
                }
              } else !e.image && e.firstScrollInit && (e.refreshColorsAndPos(), (e.firstScrollInit = !1)), e.isPaused || e.isPausedBecauseNotInView || ((e.isPausedBecauseNotInView = !0), e.pause('isPausedBecauseNotInView'));
            }, this.scrollDebounceThreshold));
        };
      },
      {},
    ],
    LNIJ: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (i) {
          'isPlayedBecauseInView' === i || (this.isPaused = !1),
            (this.isCleared = !1),
            this.animating ||
              ((this.animation = requestAnimationFrame(this.animateColors.bind(this))),
              (this.animating = !0));
        };
      },
      {},
    ],
    XJE0: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var i = this;
          function e() {
            var e;
            for (e = 0; e < 2; e++) t(e ? 'y' : 'x');
            function t(e) {
              var t,
                o = i[e + '1'],
                a = i['x' === e ? 'imgOriginalWidth' : 'imgOriginalHeight'],
                s = 'x' === e ? i.image.position[0] : i.image.position[1];
              switch (s) {
                case 'center':
                  (t = a > o ? -(a - o) / 2 : (o - a) / 2),
                    (i.imagePosition[e] = t),
                    (i.imagePosition['x' === e ? 'width' : 'height'] = a);
                  break;
                case 'top':
                  (i.imagePosition.y = 0), (i.imagePosition.height = a);
                  break;
                case 'bottom':
                  (i.imagePosition.y = o - a), (i.imagePosition.height = a);
                  break;
                case 'right':
                  (i.imagePosition.x = o - a), (i.imagePosition.width = a);
                  break;
                case 'left':
                  (i.imagePosition.x = 0), (i.imagePosition.width = a);
              }
              if (i.image.stretchMode)
                switch ((s = 'x' === e ? i.image.stretchMode[0] : i.image.stretchMode[1])) {
                  case 'none':
                    break;
                  case 'stretch':
                    (i.imagePosition[e] = 0), (i.imagePosition['x' === e ? 'width' : 'height'] = o);
                    break;
                  case 'stretch-if-bigger':
                    if (a < o) break;
                    (i.imagePosition[e] = 0), (i.imagePosition['x' === e ? 'width' : 'height'] = o);
                    break;
                  case 'stretch-if-smaller':
                    if (a > o) break;
                    (i.imagePosition[e] = 0), (i.imagePosition['x' === e ? 'width' : 'height'] = o);
                }
            }
          }
          this.imagePosition || (this.imagePosition = { x: 0, y: 0, width: 0, height: 0 }),
            this.image.blendingMode &&
              (this.context.globalCompositeOperation = this.image.blendingMode),
            this.imageNode
              ? e()
              : ((this.imageNode = new Image()),
                (this.imageNode.onerror = function () {
                  throw new Error('Granim: The image source is invalid.');
                }),
                (this.imageNode.onload = function () {
                  (i.imgOriginalWidth = i.imageNode.width),
                    (i.imgOriginalHeight = i.imageNode.height),
                    e(),
                    i.refreshColorsAndPos(),
                    (i.isPausedWhenNotInView && !i.isCanvasInWindowView) ||
                      (i.animation = requestAnimationFrame(i.animateColors.bind(i))),
                    (i.isImgLoaded = !0);
                }),
                (this.imageNode.src = this.image.source));
        };
      },
      {},
    ],
    jQYv: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (o) {
          var t, s, i, r;
          for (i = 0; i < this.activeColors.length; i++) {
            for (r = 0; r < 4; r++)
              (t =
                this.activeColors[i][r] +
                (3 !== r
                  ? Math.ceil((this.activeColorsDiff[i][r] / 100) * o)
                  : Math.round((this.activeColorsDiff[i][r] / 100) * o * 100) / 100)) <= 255 &&
                t >= 0 &&
                (this.currentColors[i][r] = t);
            (s = parseFloat(
              (this.activeColorsPos[i] + (this.activeColorsPosDiff[i] / 100) * o).toFixed(4),
            )) <= 1 &&
              s >= 0 &&
              (this.currentColorsPos[i] = s);
          }
          this.makeGradient();
        };
      },
      {},
    ],
    D0fp: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var s,
            t,
            e,
            o,
            i = this;
          if (
            (this.channels[this.activeState] || (this.channels[this.activeState] = []),
            void 0 !== this.channels[this.activeState][this.channelsIndex])
          )
            return (
              (this.activeColors = this.channels[this.activeState][this.channelsIndex].colors),
              (this.activeColorsDiff =
                this.channels[this.activeState][this.channelsIndex].colorsDiff),
              (this.activeColorsPos =
                this.channels[this.activeState][this.channelsIndex].colorsPos),
              void (this.activeColorsPosDiff =
                this.channels[this.activeState][this.channelsIndex].colorsPosDiff)
            );
          this.channels[this.activeState].push([{}]),
            (this.channels[this.activeState][this.channelsIndex].colors = []),
            (this.channels[this.activeState][this.channelsIndex].colorsDiff = []),
            (this.channels[this.activeState][this.channelsIndex].colorsPos = []),
            (this.channels[this.activeState][this.channelsIndex].colorsPosDiff = []),
            (this.activeColors = []),
            (this.activeColorsDiff = []),
            (this.activeColorsPos = []),
            (this.activeColorsPosDiff = []),
            this.states[this.activeState].gradients[this.channelsIndex].forEach(function (n, a) {
              var h = i.getColorPos(n, a),
                c = ((n = i.getColor(n)), i.convertColorToRgba(n)),
                l = i.channels[i.activeState];
              l[i.channelsIndex].colors.push(c),
                i.activeColors.push(c),
                l[i.channelsIndex].colorsPos.push(h),
                i.activeColorsPos.push(h),
                i.isCurrentColorsSet ||
                  (i.currentColors.push(i.convertColorToRgba(n)), i.currentColorsPos.push(h)),
                i.channelsIndex === i.states[i.activeState].gradients.length - 1
                  ? ((s = i.getColorDiff(l[i.channelsIndex].colors[a], l[0].colors[a])),
                    (t = i.getColorPosDiff(l[i.channelsIndex].colorsPos[a], l[0].colorsPos[a])))
                  : ((e = i.convertColorToRgba(
                      i.getColor(i.states[i.activeState].gradients[i.channelsIndex + 1][a]),
                    )),
                    (o = i.getColorPos(
                      i.states[i.activeState].gradients[i.channelsIndex + 1][a],
                      a,
                    )),
                    (s = i.getColorDiff(l[i.channelsIndex].colors[a], e)),
                    (t = i.getColorPosDiff(l[i.channelsIndex].colorsPos[a], o))),
                l[i.channelsIndex].colorsDiff.push(s),
                i.activeColorsDiff.push(s),
                l[i.channelsIndex].colorsPosDiff.push(t),
                i.activeColorsPosDiff.push(t);
            }),
            (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3),
            (this.isCurrentColorsSet = !0);
        };
      },
      {},
    ],
    q1cE: [
      function (require, module, exports) {
        'use strict';
        function t(t, i) {
          return t.indexOf('%') > -1
            ? (i / 100) * parseInt(t.split('%')[0], 10)
            : parseInt(t.split('px')[0], 10);
        }
        module.exports = function () {
          var i = this.context;
          switch (this.direction) {
            case 'diagonal':
              return i.createLinearGradient(0, 0, this.x1, this.y1);
            case 'left-right':
              return i.createLinearGradient(0, 0, this.x1, 0);
            case 'top-bottom':
              return i.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);
            case 'radial':
              return i.createRadialGradient(
                this.x1 / 2,
                this.y1 / 2,
                this.x1 / 2,
                this.x1 / 2,
                this.y1 / 2,
                0,
              );
            case 'custom':
              return i.createLinearGradient(
                t(this.customDirection.x0, this.x1),
                t(this.customDirection.y0, this.y1),
                t(this.customDirection.x1, this.x1),
                t(this.customDirection.y1, this.y1),
              );
          }
        };
      },
      {},
    ],
    mOcA: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          this.getDimensions(),
            this.canvas.setAttribute('width', this.x1),
            this.canvas.setAttribute('height', this.y1),
            this.image && this.prepareImage(),
            this.refreshColorsAndPos();
        };
      },
      {},
    ],
    wzg8: [
      function (require, module, exports) {
        'use strict';
        module.exports = function (r) {
          throw new Error(
            'Granim: Input error on "' +
              r +
              '" option.\nCheck the API https://sarcadass.github.io/granim.js/api.html.',
          );
        };
      },
      {},
    ],
    cn3D: [
      function (require, module, exports) {
        'use strict';
        function i(i) {
          for (var t, e = !0, r = 0; e && r < i.length; ) {
            if ('string' != typeof (t = i[r])) e = !1;
            else {
              var o,
                s = null;
              -1 !== t.indexOf('px') && (s = 'px'),
                -1 !== t.indexOf('%') && (s = '%'),
                (o = t.split(s).filter(function (i) {
                  return i.length > 0;
                })),
                (!s || o.length > 2 || !o[0] || o[1] || !/^-?\d+\.?\d*$/.test(o[0])) && (e = !1);
            }
            r++;
          }
          return e;
        }
        module.exports = function (t) {
          var e = ['none', 'stretch', 'stretch-if-smaller', 'stretch-if-bigger'];
          switch (t) {
            case 'image':
              (Array.isArray(this.image.position) &&
                2 === this.image.position.length &&
                -1 !== ['left', 'center', 'right'].indexOf(this.image.position[0]) &&
                -1 !== ['top', 'center', 'bottom'].indexOf(this.image.position[1])) ||
                this.triggerError('image.position'),
                this.image.stretchMode &&
                  ((Array.isArray(this.image.stretchMode) &&
                    2 === this.image.stretchMode.length &&
                    -1 !== e.indexOf(this.image.stretchMode[0]) &&
                    -1 !== e.indexOf(this.image.stretchMode[1])) ||
                    this.triggerError('image.stretchMode'));
              break;
            case 'blendingMode':
              -1 ===
                [
                  'multiply',
                  'screen',
                  'normal',
                  'overlay',
                  'darken',
                  'lighten',
                  'lighter',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                ].indexOf(this.image.blendingMode) &&
                (this.clear(), this.triggerError('blendingMode'));
              break;
            case 'direction':
              -1 ===
              ['diagonal', 'left-right', 'top-bottom', 'radial', 'custom'].indexOf(this.direction)
                ? this.triggerError('direction')
                : 'custom' === this.direction &&
                  (i([
                    this.customDirection.x0,
                    this.customDirection.x1,
                    this.customDirection.y0,
                    this.customDirection.y1,
                  ]) ||
                    this.triggerError('customDirection'));
          }
        };
      },
      {},
    ],
    LNaC: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          this.getElement(e.element),
            (this.x1 = 0),
            (this.y1 = 0),
            (this.name = e.name || !1),
            (this.elToSetClassOn = e.elToSetClassOn || 'body'),
            (this.direction = e.direction || 'diagonal'),
            (this.customDirection = e.customDirection || {}),
            this.validateInput('direction'),
            (this.isPausedWhenNotInView = e.isPausedWhenNotInView || !1),
            (this.states = e.states),
            (this.stateTransitionSpeed = e.stateTransitionSpeed || 1e3),
            (this.previousTimeStamp = null),
            (this.progress = 0),
            (this.isPaused = !1),
            (this.isCleared = !1),
            (this.isPausedBecauseNotInView = !1),
            (this.context = this.canvas.getContext('2d')),
            (this.channels = {}),
            (this.channelsIndex = 0),
            (this.activeState = e.defaultStateName || 'default-state'),
            (this.isChangingState = !1),
            (this.currentColors = []),
            (this.currentColorsPos = []),
            (this.activetransitionSpeed = null),
            this.eventPolyfill(),
            (this.scrollDebounceThreshold = e.scrollDebounceThreshold || 300),
            (this.scrollDebounceTimeout = null),
            (this.isImgLoaded = !1),
            (this.isCanvasInWindowView = !1),
            (this.firstScrollInit = !0),
            (this.animating = !1),
            (this.gradientLength = this.states[this.activeState].gradients[0].length),
            e.image &&
              e.image.source &&
              (this.image = {
                source: e.image.source,
                position: e.image.position || ['center', 'center'],
                stretchMode: e.image.stretchMode || !1,
                blendingMode: e.image.blendingMode || !1,
              }),
            (this.events = {
              start: new CustomEvent('granim:start'),
              end: new CustomEvent('granim:end'),
              gradientChange: function (e) {
                return new CustomEvent('granim:gradientChange', {
                  detail: {
                    isLooping: e.isLooping,
                    colorsFrom: e.colorsFrom,
                    colorsTo: e.colorsTo,
                    activeState: e.activeState,
                  },
                  bubbles: !1,
                  cancelable: !1,
                });
              },
            }),
            (this.callbacks = {
              onStart: 'function' == typeof e.onStart && e.onStart,
              onGradientChange: 'function' == typeof e.onGradientChange && e.onGradientChange,
              onEnd: 'function' == typeof e.onEnd && e.onEnd,
            }),
            this.getDimensions(),
            this.canvas.setAttribute('width', this.x1),
            this.canvas.setAttribute('height', this.y1),
            this.setColors(),
            this.image && (this.validateInput('image'), this.prepareImage()),
            (this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this)),
            (this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this)),
            this.onResize(),
            this.isPausedWhenNotInView
              ? this.onScroll()
              : this.image ||
                (this.refreshColorsAndPos(),
                (this.animation = requestAnimationFrame(this.animateColors.bind(this))),
                (this.animating = !0)),
            this.callbacks.onStart && this.callbacks.onStart(),
            this.canvas.dispatchEvent(this.events.start);
        }
        (e.prototype.animateColors = require('./animateColors.js')),
          (e.prototype.changeBlendingMode = require('./changeBlendingMode.js')),
          (e.prototype.changeDirection = require('./changeDirection.js')),
          (e.prototype.changeState = require('./changeState.js')),
          (e.prototype.clear = require('./clear.js')),
          (e.prototype.convertColorToRgba = require('./convertColorToRgba.js')),
          (e.prototype.destroy = require('./destroy.js')),
          (e.prototype.eventPolyfill = require('./eventPolyfill.js')),
          (e.prototype.getColor = require('./getColor.js')),
          (e.prototype.getColorDiff = require('./getColorDiff.js')),
          (e.prototype.getColorPos = require('./getColorPos.js')),
          (e.prototype.getColorPosDiff = require('./getColorPosDiff.js')),
          (e.prototype.getCurrentColors = require('./getCurrentColors.js')),
          (e.prototype.getCurrentColorsPos = require('./getCurrentColorsPos.js')),
          (e.prototype.getDimensions = require('./getDimensions.js')),
          (e.prototype.getElement = require('./getElement.js')),
          (e.prototype.getLightness = require('./getLightness.js')),
          (e.prototype.makeGradient = require('./makeGradient.js')),
          (e.prototype.onResize = require('./onResize.js')),
          (e.prototype.onScroll = require('./onScroll.js')),
          (e.prototype.pause = require('./pause.js')),
          (e.prototype.pauseWhenNotInView = require('./pauseWhenNotInView.js')),
          (e.prototype.play = require('./play.js')),
          (e.prototype.prepareImage = require('./prepareImage.js')),
          (e.prototype.refreshColorsAndPos = require('./refreshColorsAndPos.js')),
          (e.prototype.setColors = require('./setColors.js')),
          (e.prototype.setDirection = require('./setDirection.js')),
          (e.prototype.setSizeAttributes = require('./setSizeAttributes.js')),
          (e.prototype.triggerError = require('./triggerError.js')),
          (e.prototype.validateInput = require('./validateInput.js')),
          (module.exports = e);
      },
      {
        './animateColors.js': 'LOjb',
        './changeBlendingMode.js': 'eh8V',
        './changeDirection.js': 'LuND',
        './changeState.js': 's1SW',
        './clear.js': 'sWdS',
        './convertColorToRgba.js': 'k85H',
        './destroy.js': 'gUCy',
        './eventPolyfill.js': 'wtPU',
        './getColor.js': 'DOWZ',
        './getColorDiff.js': 'PeW4',
        './getColorPos.js': 'sKHW',
        './getColorPosDiff.js': 'HHxU',
        './getCurrentColors.js': 'iDv6',
        './getCurrentColorsPos.js': 'mfcm',
        './getDimensions.js': 'keJ0',
        './getElement.js': 'xJC4',
        './getLightness.js': 'qAre',
        './makeGradient.js': 'z6GW',
        './onResize.js': 'qvCT',
        './onScroll.js': 'EgWt',
        './pause.js': 'E3th',
        './pauseWhenNotInView.js': 'qCl9',
        './play.js': 'LNIJ',
        './prepareImage.js': 'XJE0',
        './refreshColorsAndPos.js': 'jQYv',
        './setColors.js': 'D0fp',
        './setDirection.js': 'q1cE',
        './setSizeAttributes.js': 'mOcA',
        './triggerError.js': 'wzg8',
        './validateInput.js': 'cn3D',
      },
    ],
    KI3S: [
      function (require, module, exports) {
        module.exports = require('./lib/Granim.js');
      },
      { './lib/Granim.js': 'LNaC' },
    ],
    tMhk: [
      function (require, module, exports) {
        'use strict';
        var e = require('morphing-pointer'),
          t = r(require('granim'));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (0, e.initMorphingPointer)();
        var i = new t.default({
          element: '#canvas-basic',
          direction: 'left-right',
          isPausedWhenNotInView: !0,
          stateTransitionSpeed: 300,
          states: {
            'default-state': {
              gradients: [
                ['rgb(53, 43, 70)', 'rgb(33, 31, 80)'],
                ['#f9c9f9', '#0575E6'],
                ['#0575E6', '#f9c9f9'],
                ['rgb(33, 31, 80)', 'rgb(53, 43, 70)'],
              ],
            },
          },
        });
      },
      { 'morphing-pointer': 'U9P6', granim: 'KI3S' },
    ],
  },
  {},
  ['tMhk'],
  null,
);
//# sourceMappingURL=./granimGradient.5d9c131d.js.map
