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
    TNS6: [
      function (require, module, exports) {
        'use strict';
        function t(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function e(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports._colorExp =
            exports._getCache =
            exports._getSetter =
            exports._missingPlugin =
            exports._round =
            exports._roundModifier =
            exports._config =
            exports._ticker =
            exports._plugins =
            exports._checkPlugin =
            exports._replaceRandom =
            exports._colorStringFilter =
            exports._sortPropTweensByPriority =
            exports._forEachName =
            exports._removeLinkedListItem =
            exports._setDefaults =
            exports._relExp =
            exports._renderComplexString =
            exports._isUndefined =
            exports._isString =
            exports._numWithUnitExp =
            exports._numExp =
            exports._getProperty =
            exports.shuffle =
            exports.interpolate =
            exports.unitize =
            exports.pipe =
            exports.mapRange =
            exports.selector =
            exports.toArray =
            exports.splitColor =
            exports.clamp =
            exports.getUnit =
            exports.normalize =
            exports.snap =
            exports.random =
            exports.distribute =
            exports.wrapYoyo =
            exports.wrap =
            exports.Circ =
            exports.Expo =
            exports.Sine =
            exports.Bounce =
            exports.SteppedEase =
            exports.Back =
            exports.Elastic =
            exports.Strong =
            exports.Quint =
            exports.Quart =
            exports.Cubic =
            exports.Quad =
            exports.Linear =
            exports.Power4 =
            exports.Power3 =
            exports.Power2 =
            exports.Power1 =
            exports.Power0 =
            exports.default =
            exports.gsap =
            exports.PropTween =
            exports.TweenLite =
            exports.TweenMax =
            exports.Tween =
            exports.TimelineLite =
            exports.TimelineMax =
            exports.Timeline =
            exports.Animation =
            exports.GSCache =
              void 0);
        var r,
          i,
          n,
          s,
          o,
          a,
          u,
          h,
          _,
          p = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
          l = { duration: 0.5, overwrite: !1, delay: 0 },
          f = 1e8,
          c = 1 / f,
          d = 2 * Math.PI,
          m = d / 4,
          g = 0,
          v = Math.sqrt,
          x = Math.cos,
          y = Math.sin,
          T = function (t) {
            return 'string' == typeof t;
          },
          w = function (t) {
            return 'function' == typeof t;
          },
          b = function (t) {
            return 'number' == typeof t;
          },
          k = function (t) {
            return void 0 === t;
          },
          D = function (t) {
            return 'object' == typeof t;
          },
          A = function (t) {
            return !1 !== t;
          },
          C = function () {
            return 'undefined' != typeof window;
          },
          S = function (t) {
            return w(t) || T(t);
          },
          M = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
          P = Array.isArray,
          E = /(?:-?\.?\d|\.)+/gi,
          R = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          O = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          L = /[+-]=-?[.\d]+/,
          F = /[^,'"\[\]\s]+/gi,
          I = /[\d.+\-=]+(?:e[-+]\d*)*/i,
          U = {},
          B = {},
          N = function (t) {
            return (B = pt(t, U)) && dr;
          },
          Q = function (t, e) {
            return console.warn(
              'Invalid property',
              t,
              'set to',
              e,
              'Missing plugin? gsap.registerPlugin()',
            );
          },
          q = function (t, e) {
            return !e && console.warn(t);
          },
          j = function (t, e) {
            return (t && (U[t] = e) && B && (B[t] = e)) || U;
          },
          V = function () {
            return 0;
          },
          G = {},
          W = [],
          Y = {},
          H = {},
          J = {},
          K = 30,
          X = [],
          Z = '',
          $ = function (t) {
            var e,
              r,
              i = t[0];
            if ((D(i) || w(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
              for (r = X.length; r-- && !X[r].targetTest(i); );
              e = X[r];
            }
            for (r = t.length; r--; )
              (t[r] && (t[r]._gsap || (t[r]._gsap = new Ie(t[r], e)))) || t.splice(r, 1);
            return t;
          },
          tt = function (t) {
            return t._gsap || $(Yt(t))[0]._gsap;
          },
          et = function (t, e, r) {
            return (r = t[e]) && w(r) ? t[e]() : (k(r) && t.getAttribute && t.getAttribute(e)) || r;
          },
          rt = function (t, e) {
            return (t = t.split(',')).forEach(e) || t;
          },
          it = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          nt = function (t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
            return i < r;
          },
          st = function () {
            var t,
              e,
              r = W.length,
              i = W.slice(0);
            for (Y = {}, W.length = 0, t = 0; t < r; t++)
              (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          ot = function (t, e, r, i) {
            W.length && st(), t.render(e, r, i), W.length && st();
          },
          at = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + '').match(F).length < 2 ? e : T(t) ? t.trim() : t;
          },
          ut = function (t) {
            return t;
          },
          ht = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          _t = function (t, e) {
            for (var r in e) r in t || 'duration' === r || 'ease' === r || (t[r] = e[r]);
          },
          pt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          lt = function t(e, r) {
            for (var i in r)
              '__proto__' !== i &&
                'constructor' !== i &&
                'prototype' !== i &&
                (e[i] = D(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
            return e;
          },
          ft = function (t, e) {
            var r,
              i = {};
            for (r in t) r in e || (i[r] = t[r]);
            return i;
          },
          ct = function (t) {
            var e = t.parent || i,
              r = t.keyframes ? _t : ht;
            if (A(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          dt = function (t, e) {
            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
            return r < 0;
          },
          mt = function (t, e, r, i, n) {
            void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
            var s,
              o = t[i];
            if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
            return (
              o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[i] = e),
              (e._prev = o),
              (e.parent = e._dp = t),
              e
            );
          },
          gt = function (t, e, r, i) {
            void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
            var n = e._prev,
              s = e._next;
            n ? (n._next = s) : t[r] === e && (t[r] = s),
              s ? (s._prev = n) : t[i] === e && (t[i] = n),
              (e._next = e._prev = e.parent = null);
          },
          vt = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
          },
          xt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
            return t;
          },
          yt = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          Tt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          wt = function (t) {
            return t._repeat ? bt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
          },
          bt = function (t, e) {
            var r = Math.floor((t /= e));
            return t && r === t ? r - 1 : r;
          },
          kt = function (t, e) {
            return (
              (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Dt = function (t) {
            return (t._end = it(t._start + (t._tDur / Math.abs(t._ts || t._rts || c) || 0)));
          },
          At = function (t, e) {
            var r = t._dp;
            return (
              r &&
                r.smoothChildTiming &&
                t._ts &&
                ((t._start = it(
                  r._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
                )),
                Dt(t),
                r._dirty || xt(r, t)),
              t
            );
          },
          Ct = function (t, e) {
            var r;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((r = kt(t.rawTime(), e)),
                (!e._dur || Qt(0, e.totalDuration(), r) - e._tTime > c) && e.render(r, !0)),
              xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              t._zTime = -c;
            }
          },
          St = function (t, e, r, n) {
            return (
              e.parent && vt(e),
              (e._start = it((b(r) ? r : r || t !== i ? Ut(t, r, e) : t._time) + e._delay)),
              (e._end = it(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
              mt(t, e, '_first', '_last', t._sort ? '_start' : 0),
              Rt(e) || (t._recent = e),
              n || Ct(t, e),
              t
            );
          },
          Mt = function (t, e) {
            return (U.ScrollTrigger || Q('scrollTrigger', e)) && U.ScrollTrigger.create(e, t);
          },
          Pt = function (t, e, r, i) {
            return (
              Ge(t, e),
              t._initted
                ? !r &&
                  t._pt &&
                  ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                  u !== we.frame
                  ? (W.push(t), (t._lazy = [e, i]), 1)
                  : void 0
                : 1
            );
          },
          Et = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
          },
          Rt = function (t) {
            var e = t.data;
            return 'isFromStart' === e || 'isStart' === e;
          },
          zt = function (t, e, r, i) {
            var n,
              s,
              o,
              a = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start && Et(t) && (t._initted || !Rt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Rt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              _ = 0;
            if (
              (h &&
                t._repeat &&
                ((_ = Qt(0, t._tDur, e)),
                (s = bt(_, h)),
                (o = bt(t._tTime, h)),
                t._yoyo && 1 & s && (u = 1 - u),
                s !== o && ((a = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== a || i || t._zTime === c || (!e && t._zTime))
            ) {
              if (!t._initted && Pt(t, e, i, r)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (r ? c : 0),
                  r || (r = e && !o),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = _,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !r && _e(t, 'onUpdate'),
                _ && t._repeat && !r && t.parent && _e(t, 'onRepeat'),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && vt(t, 1),
                  r || (_e(t, u ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          },
          Ot = function (t, e, r) {
            var i;
            if (r > e)
              for (i = t._first; i && i._start <= r; ) {
                if (!i._dur && 'isPause' === i.data && i._start > e) return i;
                i = i._next;
              }
            else
              for (i = t._last; i && i._start >= r; ) {
                if (!i._dur && 'isPause' === i.data && i._start < e) return i;
                i = i._prev;
              }
          },
          Lt = function (t, e, r, i) {
            var n = t._repeat,
              s = it(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !i && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = n ? (n < 0 ? 1e10 : it(s * (n + 1) + t._rDelay * n)) : s),
              o && !i ? At(t, (t._tTime = t._tDur * o)) : t.parent && Dt(t),
              r || xt(t.parent, t),
              t
            );
          },
          Ft = function (t) {
            return t instanceof Be ? xt(t) : Lt(t, t._dur);
          },
          It = { _start: 0, endTime: V, totalDuration: V },
          Ut = function t(e, r, i) {
            var n,
              s,
              o,
              a = e.labels,
              u = e._recent || It,
              h = e.duration() >= f ? u.endTime(!1) : e._dur;
            return T(r) && (isNaN(r) || r in a)
              ? ((s = r.charAt(0)),
                (o = '%' === r.substr(-1)),
                (n = r.indexOf('=')),
                '<' === s || '>' === s
                  ? (n >= 0 && (r = r.replace(/=/, '')),
                    ('<' === s ? u._start : u.endTime(u._repeat >= 0)) +
                      (parseFloat(r.substr(1)) || 0) *
                        (o ? (n < 0 ? u : i).totalDuration() / 100 : 1))
                  : n < 0
                  ? (r in a || (a[r] = h), a[r])
                  : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                    o && i && (s = (s / 100) * (P(i) ? i[0] : i).totalDuration()),
                    n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
              : null == r
              ? h
              : +r;
          },
          Bt = function (t, e, r) {
            var i,
              n,
              s = b(e[1]),
              o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
              a = e[o];
            if ((s && (a.duration = e[1]), (a.parent = r), t)) {
              for (i = a, n = r; n && !('immediateRender' in i); )
                (i = n.vars.defaults || {}), (n = A(n.vars.inherit) && n.parent);
              (a.immediateRender = A(i.immediateRender)),
                t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
            }
            return new Ke(e[0], a, e[o + 1]);
          },
          Nt = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          Qt = function (t, e, r) {
            return r < t ? t : r > e ? e : r;
          },
          qt = function (t) {
            if ('string' != typeof t) return '';
            var e = I.exec(t);
            return e ? t.substr(e.index + e[0].length) : '';
          },
          jt = function (t, e, r) {
            return Nt(r, function (r) {
              return Qt(t, e, r);
            });
          },
          Vt = [].slice,
          Gt = function (t, e) {
            return (
              t &&
              D(t) &&
              'length' in t &&
              ((!e && !t.length) || (t.length - 1 in t && D(t[0]))) &&
              !t.nodeType &&
              t !== n
            );
          },
          Wt = function (t, e, r) {
            return (
              void 0 === r && (r = []),
              t.forEach(function (t) {
                var i;
                return (T(t) && !e) || Gt(t, 1) ? (i = r).push.apply(i, Yt(t)) : r.push(t);
              }) || r
            );
          },
          Yt = function (t, e, r) {
            return !T(t) || r || (!s && be())
              ? P(t)
                ? Wt(t, r)
                : Gt(t)
                ? Vt.call(t, 0)
                : t
                ? [t]
                : []
              : Vt.call((e || o).querySelectorAll(t), 0);
          },
          Ht = function (t) {
            return (
              (t = Yt(t)[0] || q('Invalid scope') || {}),
              function (e) {
                var r = t.current || t.nativeElement || t;
                return Yt(
                  e,
                  r.querySelectorAll
                    ? r
                    : r === t
                    ? q('Invalid scope') || o.createElement('div')
                    : t,
                );
              }
            );
          },
          Jt = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          Kt = function (t) {
            if (w(t)) return t;
            var e = D(t) ? t : { each: t },
              r = Re(e.ease),
              i = e.from || 0,
              n = parseFloat(e.base) || 0,
              s = {},
              o = i > 0 && i < 1,
              a = isNaN(i) || o,
              u = e.axis,
              h = i,
              _ = i;
            return (
              T(i)
                ? (h = _ = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !o && a && ((h = i[0]), (_ = i[1])),
              function (t, o, p) {
                var l,
                  c,
                  d,
                  m,
                  g,
                  x,
                  y,
                  T,
                  w,
                  b = (p || e).length,
                  k = s[b];
                if (!k) {
                  if (!(w = 'auto' === e.grid ? 0 : (e.grid || [1, f])[1])) {
                    for (y = -f; y < (y = p[w++].getBoundingClientRect().left) && w < b; );
                    w--;
                  }
                  for (
                    k = s[b] = [],
                      l = a ? Math.min(w, b) * h - 0.5 : i % w,
                      c = a ? (b * _) / w - 0.5 : (i / w) | 0,
                      y = 0,
                      T = f,
                      x = 0;
                    x < b;
                    x++
                  )
                    (d = (x % w) - l),
                      (m = c - ((x / w) | 0)),
                      (k[x] = g = u ? Math.abs('y' === u ? m : d) : v(d * d + m * m)),
                      g > y && (y = g),
                      g < T && (T = g);
                  'random' === i && Jt(k),
                    (k.max = y - T),
                    (k.min = T),
                    (k.v = b =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (w > b ? b - 1 : u ? ('y' === u ? b / w : w) : Math.max(w, b / w)) ||
                        0) * ('edges' === i ? -1 : 1)),
                    (k.b = b < 0 ? n - b : n),
                    (k.u = qt(e.amount || e.each) || 0),
                    (r = r && b < 0 ? Pe(r) : r);
                }
                return (b = (k[t] - k.min) / k.max || 0), it(k.b + (r ? r(b) : b) * k.v) + k.u;
              }
            );
          },
          Xt = function (t) {
            var e = t < 1 ? Math.pow(10, (t + '').length - 2) : 1;
            return function (r) {
              var i = Math.round(parseFloat(r) / t) * t * e;
              return (i - (i % 1)) / e + (b(r) ? 0 : qt(r));
            };
          },
          Zt = function (t, e) {
            var r,
              i,
              n = P(t);
            return (
              !n &&
                D(t) &&
                ((r = n = t.radius || f),
                t.values
                  ? ((t = Yt(t.values)), (i = !b(t[0])) && (r *= r))
                  : (t = Xt(t.increment))),
              Nt(
                e,
                n
                  ? w(t)
                    ? function (e) {
                        return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                      }
                    : function (e) {
                        for (
                          var n,
                            s,
                            o = parseFloat(i ? e.x : e),
                            a = parseFloat(i ? e.y : 0),
                            u = f,
                            h = 0,
                            _ = t.length;
                          _--;

                        )
                          (n = i
                            ? (n = t[_].x - o) * n + (s = t[_].y - a) * s
                            : Math.abs(t[_] - o)) < u && ((u = n), (h = _));
                        return (h = !r || u <= r ? t[h] : e), i || h === e || b(e) ? h : h + qt(e);
                      }
                  : Xt(t),
              )
            );
          },
          $t = function (t, e, r, i) {
            return Nt(P(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
              return P(t)
                ? t[~~(Math.random() * t.length)]
                : (r = r || 1e-5) &&
                    (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                    Math.floor(
                      Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i,
                    ) / i;
            });
          },
          te = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          ee = function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || qt(r));
            };
          },
          re = function (t, e, r) {
            return ae(t, e, 0, 1, r);
          },
          ie = function (t, e, r) {
            return Nt(r, function (r) {
              return t[~~e(r)];
            });
          },
          ne = function t(e, r, i) {
            var n = r - e;
            return P(e)
              ? ie(e, t(0, e.length), r)
              : Nt(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          se = function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return P(e)
              ? ie(e, t(0, e.length - 1), r)
              : Nt(i, function (t) {
                  return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
                });
          },
          oe = function (t) {
            for (var e, r, i, n, s = 0, o = ''; ~(e = t.indexOf('random(', s)); )
              (i = t.indexOf(')', e)),
                (n = '[' === t.charAt(e + 7)),
                (r = t.substr(e + 7, i - e - 7).match(n ? F : E)),
                (o += t.substr(s, e - s) + $t(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
                (s = i + 1);
            return o + t.substr(s, t.length - s);
          },
          ae = function (t, e, r, i, n) {
            var s = e - t,
              o = i - r;
            return Nt(n, function (e) {
              return r + (((e - t) / s) * o || 0);
            });
          },
          ue = function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                u,
                h,
                _,
                p = T(e),
                l = {};
              if ((!0 === i && (n = 1) && (i = null), p)) (e = { p: e }), (r = { p: r });
              else if (P(e) && !P(r)) {
                for (u = [], h = e.length, _ = h - 2, a = 1; a < h; a++) u.push(t(e[a - 1], e[a]));
                h--,
                  (s = function (t) {
                    t *= h;
                    var e = Math.min(_, ~~t);
                    return u[e](t - e);
                  }),
                  (i = r);
              } else n || (e = pt(P(e) ? [] : {}, e));
              if (!u) {
                for (o in r) qe.call(l, e, o, 'get', r[o]);
                s = function (t) {
                  return sr(t, l) || (p ? e.p : e);
                };
              }
            }
            return Nt(i, s);
          },
          he = function (t, e, r) {
            var i,
              n,
              s,
              o = t.labels,
              a = f;
            for (i in o)
              (n = o[i] - e) < 0 == !!r && n && a > (n = Math.abs(n)) && ((s = i), (a = n));
            return s;
          },
          _e = function (t, e, r) {
            var i,
              n,
              s = t.vars,
              o = s[e];
            if (o)
              return (
                (i = s[e + 'Params']),
                (n = s.callbackScope || t),
                r && W.length && st(),
                i ? o.apply(n, i) : o.call(n)
              );
          },
          pe = function (t) {
            return (
              vt(t),
              t.scrollTrigger && t.scrollTrigger.kill(!1),
              t.progress() < 1 && _e(t, 'onInterrupt'),
              t
            );
          },
          le = function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              r = w(t),
              i =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              n = { init: V, render: sr, add: qe, kill: ar, modifier: or, rawVars: 0 },
              s = { targetTest: 0, get: 0, getSetter: er, aliases: {}, register: 0 };
            if ((be(), t !== i)) {
              if (H[e]) return;
              ht(i, ht(ft(t, n), s)),
                pt(i.prototype, pt(n, ft(t, s))),
                (H[(i.prop = e)] = i),
                t.targetTest && (X.push(i), (G[e] = 1)),
                (e = ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
            }
            j(e, i), t.register && t.register(dr, i, _r);
          },
          fe = 255,
          ce = {
            aqua: [0, fe, fe],
            lime: [0, fe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, fe],
            navy: [0, 0, 128],
            white: [fe, fe, fe],
            olive: [128, 128, 0],
            yellow: [fe, fe, 0],
            orange: [fe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [fe, 0, 0],
            pink: [fe, 192, 203],
            cyan: [0, fe, fe],
            transparent: [fe, fe, fe, 0],
          },
          de = function (t, e, r) {
            return (
              ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
                fe +
                0.5) |
              0
            );
          },
          me = function (t, e, r) {
            var i,
              n,
              s,
              o,
              a,
              u,
              h,
              _,
              p,
              l,
              f = t ? (b(t) ? [t >> 16, (t >> 8) & fe, t & fe] : 0) : ce.black;
            if (!f) {
              if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t])) f = ce[t];
              else if ('#' === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((i = t.charAt(1)),
                    (n = t.charAt(2)),
                    (s = t.charAt(3)),
                    (t =
                      '#' +
                      i +
                      i +
                      n +
                      n +
                      s +
                      s +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                  9 === t.length)
                )
                  return [
                    (f = parseInt(t.substr(1, 6), 16)) >> 16,
                    (f >> 8) & fe,
                    f & fe,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & fe, t & fe];
              } else if ('hsl' === t.substr(0, 3))
                if (((f = l = t.match(E)), e)) {
                  if (~t.indexOf('=')) return (f = t.match(R)), r && f.length < 4 && (f[3] = 1), f;
                } else
                  (o = (+f[0] % 360) / 360),
                    (a = +f[1] / 100),
                    (i = 2 * (u = +f[2] / 100) - (n = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = de(o + 1 / 3, i, n)),
                    (f[1] = de(o, i, n)),
                    (f[2] = de(o - 1 / 3, i, n));
              else f = t.match(E) || ce.transparent;
              f = f.map(Number);
            }
            return (
              e &&
                !l &&
                ((i = f[0] / fe),
                (n = f[1] / fe),
                (s = f[2] / fe),
                (u = ((h = Math.max(i, n, s)) + (_ = Math.min(i, n, s))) / 2),
                h === _
                  ? (o = a = 0)
                  : ((p = h - _),
                    (a = u > 0.5 ? p / (2 - h - _) : p / (h + _)),
                    (o =
                      h === i
                        ? (n - s) / p + (n < s ? 6 : 0)
                        : h === n
                        ? (s - i) / p + 2
                        : (i - n) / p + 4),
                    (o *= 60)),
                (f[0] = ~~(o + 0.5)),
                (f[1] = ~~(100 * a + 0.5)),
                (f[2] = ~~(100 * u + 0.5))),
              r && f.length < 4 && (f[3] = 1),
              f
            );
          },
          ge = function (t) {
            var e = [],
              r = [],
              i = -1;
            return (
              t.split(xe).forEach(function (t) {
                var n = t.match(z) || [];
                e.push.apply(e, n), r.push((i += n.length + 1));
              }),
              (e.c = r),
              e
            );
          },
          ve = function (t, e, r) {
            var i,
              n,
              s,
              o,
              a = '',
              u = (t + a).match(xe),
              h = e ? 'hsla(' : 'rgba(',
              _ = 0;
            if (!u) return t;
            if (
              ((u = u.map(function (t) {
                return (
                  (t = me(t, e, 1)) &&
                  h + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')'
                );
              })),
              r && ((s = ge(t)), (i = r.c).join(a) !== s.c.join(a)))
            )
              for (o = (n = t.replace(xe, '1').split(z)).length - 1; _ < o; _++)
                a +=
                  n[_] +
                  (~i.indexOf(_)
                    ? u.shift() || h + '0,0,0,0)'
                    : (s.length ? s : u.length ? u : r).shift());
            if (!n) for (o = (n = t.split(xe)).length - 1; _ < o; _++) a += n[_] + u[_];
            return a + n[o];
          },
          xe = (function () {
            var t,
              e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
            for (t in ce) e += '|' + t + '\\b';
            return new RegExp(e + ')', 'gi');
          })(),
          ye = /hsl[a]?\(/,
          Te = function (t) {
            var e,
              r = t.join(' ');
            if (((xe.lastIndex = 0), xe.test(r)))
              return (e = ye.test(r)), (t[1] = ve(t[1], e)), (t[0] = ve(t[0], e, ge(t[1]))), !0;
          },
          we = (function () {
            var t,
              e,
              r,
              i,
              u,
              h,
              p = Date.now,
              l = 500,
              f = 33,
              d = p(),
              m = d,
              g = 1e3 / 240,
              v = g,
              x = [],
              y = function r(n) {
                var s,
                  o,
                  a,
                  _,
                  c = p() - m,
                  y = !0 === n;
                if (
                  (c > l && (d += c - f),
                  ((s = (a = (m += c) - d) - v) > 0 || y) &&
                    ((_ = ++i.frame),
                    (u = a - 1e3 * i.time),
                    (i.time = a /= 1e3),
                    (v += s + (s >= g ? 4 : g - s)),
                    (o = 1)),
                  y || (t = e(r)),
                  o)
                )
                  for (h = 0; h < x.length; h++) x[h](a, u, _, n);
              };
            return (i = {
              time: 0,
              frame: 0,
              tick: function () {
                y(!0);
              },
              deltaRatio: function (t) {
                return u / (1e3 / (t || 60));
              },
              wake: function () {
                a &&
                  (!s &&
                    C() &&
                    ((n = s = window),
                    (o = n.document || {}),
                    (U.gsap = dr),
                    (n.gsapVersions || (n.gsapVersions = [])).push(dr.version),
                    N(B || n.GreenSockGlobals || (!n.gsap && n) || {}),
                    (r = n.requestAnimationFrame)),
                  t && i.sleep(),
                  (e =
                    r ||
                    function (t) {
                      return setTimeout(t, (v - 1e3 * i.time + 1) | 0);
                    }),
                  (_ = 1),
                  y(2));
              },
              sleep: function () {
                (r ? n.cancelAnimationFrame : clearTimeout)(t), (_ = 0), (e = V);
              },
              lagSmoothing: function (t, e) {
                (l = t || 1 / c), (f = Math.min(e, l, 0));
              },
              fps: function (t) {
                (g = 1e3 / (t || 240)), (v = 1e3 * i.time + g);
              },
              add: function (t) {
                x.indexOf(t) < 0 && x.push(t), be();
              },
              remove: function (t) {
                var e;
                ~(e = x.indexOf(t)) && x.splice(e, 1) && h >= e && h--;
              },
              _listeners: x,
            });
          })(),
          be = function () {
            return !_ && we.wake();
          },
          ke = {},
          De = /^[\d.\-M][\d.\-,\s]/,
          Ae = /["']/g,
          Ce = function (t) {
            for (
              var e,
                r,
                i,
                n = {},
                s = t.substr(1, t.length - 3).split(':'),
                o = s[0],
                a = 1,
                u = s.length;
              a < u;
              a++
            )
              (r = s[a]),
                (e = a !== u - 1 ? r.lastIndexOf(',') : r.length),
                (i = r.substr(0, e)),
                (n[o] = isNaN(i) ? i.replace(Ae, '').trim() : +i),
                (o = r.substr(e + 1).trim());
            return n;
          },
          Se = function (t) {
            var e = t.indexOf('(') + 1,
              r = t.indexOf(')'),
              i = t.indexOf('(', e);
            return t.substring(e, ~i && i < r ? t.indexOf(')', r + 1) : r);
          },
          Me = function (t) {
            var e = (t + '').split('('),
              r = ke[e[0]];
            return r && e.length > 1 && r.config
              ? r.config.apply(null, ~t.indexOf('{') ? [Ce(e[1])] : Se(t).split(',').map(at))
              : ke._CE && De.test(t)
              ? ke._CE('', t)
              : r;
          },
          Pe = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          Ee = function t(e, r) {
            for (var i, n = e._first; n; )
              n instanceof Be
                ? t(n, r)
                : !n.vars.yoyoEase ||
                  (n._yoyo && n._repeat) ||
                  n._yoyo === r ||
                  (n.timeline
                    ? t(n.timeline, r)
                    : ((i = n._ease), (n._ease = n._yEase), (n._yEase = i), (n._yoyo = r))),
                (n = n._next);
          },
          Re = function (t, e) {
            return (t && (w(t) ? t : ke[t] || Me(t))) || e;
          },
          ze = function (t, e, r, i) {
            void 0 === r &&
              (r = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === i &&
                (i = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var n,
              s = { easeIn: e, easeOut: r, easeInOut: i };
            return (
              rt(t, function (t) {
                for (var e in ((ke[t] = U[t] = s), (ke[(n = t.toLowerCase())] = r), s))
                  ke[n + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = ke[
                    t + '.' + e
                  ] = s[e];
              }),
              s
            );
          },
          Oe = function (t) {
            return function (e) {
              return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Le = function t(e, r, i) {
            var n = r >= 1 ? r : 1,
              s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              o = (s / d) * (Math.asin(1 / n) || 0),
              a = function (t) {
                return 1 === t ? 1 : n * Math.pow(2, -10 * t) * y((t - o) * s) + 1;
              },
              u =
                'out' === e
                  ? a
                  : 'in' === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : Oe(a);
            return (
              (s = d / s),
              (u.config = function (r, i) {
                return t(e, r, i);
              }),
              u
            );
          },
          Fe = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
              },
              n =
                'out' === e
                  ? i
                  : 'in' === e
                  ? function (t) {
                      return 1 - i(1 - t);
                    }
                  : Oe(i);
            return (
              (n.config = function (r) {
                return t(e, r);
              }),
              n
            );
          };
        (exports._ticker = we),
          (exports._colorStringFilter = Te),
          (exports._colorExp = xe),
          (exports.splitColor = me),
          (exports.interpolate = ue),
          (exports.mapRange = ae),
          (exports._replaceRandom = oe),
          (exports.wrapYoyo = se),
          (exports.wrap = ne),
          (exports.normalize = re),
          (exports.unitize = ee),
          (exports.pipe = te),
          (exports.random = $t),
          (exports.snap = Zt),
          (exports._roundModifier = Xt),
          (exports.distribute = Kt),
          (exports.shuffle = Jt),
          (exports.selector = Ht),
          (exports.toArray = Yt),
          (exports.clamp = jt),
          (exports.getUnit = qt),
          (exports._removeLinkedListItem = gt),
          (exports._setDefaults = ht),
          (exports._round = it),
          (exports._forEachName = rt),
          (exports._getProperty = et),
          (exports._getCache = tt),
          (exports._plugins = H),
          (exports._missingPlugin = Q),
          (exports._relExp = L),
          (exports._numWithUnitExp = z),
          (exports._numExp = R),
          (exports._isUndefined = k),
          (exports._isString = T),
          (exports._config = p),
          rt('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
            var r = e < 5 ? e + 1 : e;
            ze(
              t + ',Power' + (r - 1),
              e
                ? function (t) {
                    return Math.pow(t, r);
                  }
                : function (t) {
                    return t;
                  },
              function (t) {
                return 1 - Math.pow(1 - t, r);
              },
              function (t) {
                return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
              },
            );
          }),
          (ke.Linear.easeNone = ke.none = ke.Linear.easeIn),
          ze('Elastic', Le('in'), Le('out'), Le()),
          (function (t, e) {
            var r = 1 / e,
              i = function (i) {
                return i < r
                  ? t * i * i
                  : i < 0.7272727272727273
                  ? t * Math.pow(i - 1.5 / e, 2) + 0.75
                  : i < 0.9090909090909092
                  ? t * (i -= 2.25 / e) * i + 0.9375
                  : t * Math.pow(i - 2.625 / e, 2) + 0.984375;
              };
            ze(
              'Bounce',
              function (t) {
                return 1 - i(1 - t);
              },
              i,
            );
          })(7.5625, 2.75),
          ze('Expo', function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          ze('Circ', function (t) {
            return -(v(1 - t * t) - 1);
          }),
          ze('Sine', function (t) {
            return 1 === t ? 1 : 1 - x(t * m);
          }),
          ze('Back', Fe('in'), Fe('out'), Fe()),
          (ke.SteppedEase =
            ke.steps =
            U.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var r = 1 / t,
                    i = t + (e ? 0 : 1),
                    n = e ? 1 : 0,
                    s = 1 - c;
                  return function (t) {
                    return (((i * Qt(0, s, t)) | 0) + n) * r;
                  };
                },
              }),
          (l.ease = ke['quad.out']),
          rt('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
            return (Z += t + ',' + t + 'Params,');
          });
        var Ie = function (t, e) {
          (this.id = g++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : et),
            (this.set = e ? e.getSetter : er);
        };
        exports.GSCache = Ie;
        var Ue = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Lt(this, +t.duration, 1, 1),
              (this.data = t.data),
              _ || we.wake();
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
                ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t)
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Lt(
                    this,
                    this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((be(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (At(this, t), !r._dp || r.parent || Ct(r, this); r.parent; )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  St(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === c) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), ot(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + wt(this)) % (this._dur + this._rDelay) ||
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
                    this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wt(this),
                    e,
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? bt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return this._rts === -c ? 0 : this._rts;
              if (this._rts === t) return this;
              var e = this.parent && this._ts ? kt(this.parent._time, this) : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -c ? 0 : this._rts),
                yt(this.totalTime(Qt(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (be(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== c &&
                            (this._tTime -= c),
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && St(e, this, t - this._delay), this;
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start + (A(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? kt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Ft(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), Ft(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Ut(this, t), A(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, A(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
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
                ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -c : 0)), this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -c), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - c
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + 'Params'] = r),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = w(t) ? t : ut,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      w(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              pe(this);
            }),
            t
          );
        })();
        (exports.Animation = Ue),
          ht(Ue.prototype, {
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
            _zTime: -c,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
        var Be = (function (r) {
          function n(e, n) {
            var s;
            return (
              void 0 === e && (e = {}),
              ((s = r.call(this, e) || this).labels = {}),
              (s.smoothChildTiming = !!e.smoothChildTiming),
              (s.autoRemoveChildren = !!e.autoRemoveChildren),
              (s._sort = A(e.sortChildren)),
              i && St(e.parent || i, t(s), n),
              e.reversed && s.reverse(),
              e.paused && s.paused(!0),
              e.scrollTrigger && Mt(t(s), e.scrollTrigger),
              s
            );
          }
          e(n, r);
          var s = n.prototype;
          return (
            (s.to = function (t, e, r) {
              return Bt(0, arguments, this), this;
            }),
            (s.from = function (t, e, r) {
              return Bt(1, arguments, this), this;
            }),
            (s.fromTo = function (t, e, r, i) {
              return Bt(2, arguments, this), this;
            }),
            (s.set = function (t, e, r) {
              return (
                (e.duration = 0),
                (e.parent = this),
                ct(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Ke(t, e, Ut(this, r), 1),
                this
              );
            }),
            (s.call = function (t, e, r) {
              return St(this, Ke.delayedCall(0, t, e), r);
            }),
            (s.staggerTo = function (t, e, r, i, n, s, o) {
              return (
                (r.duration = e),
                (r.stagger = r.stagger || i),
                (r.onComplete = s),
                (r.onCompleteParams = o),
                (r.parent = this),
                new Ke(t, r, Ut(this, n)),
                this
              );
            }),
            (s.staggerFrom = function (t, e, r, i, n, s, o) {
              return (
                (r.runBackwards = 1),
                (ct(r).immediateRender = A(r.immediateRender)),
                this.staggerTo(t, e, r, i, n, s, o)
              );
            }),
            (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
              return (
                (i.startAt = r),
                (ct(i).immediateRender = A(i.immediateRender)),
                this.staggerTo(t, e, i, n, s, o, a)
              );
            }),
            (s.render = function (t, e, r) {
              var n,
                s,
                o,
                a,
                u,
                h,
                _,
                p,
                l,
                f,
                d,
                m,
                g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                x = this._dur,
                y = this !== i && t > v - c && t >= 0 ? v : t < c ? 0 : t,
                T = this._zTime < 0 != t < 0 && (this._initted || !x);
              if (y !== this._tTime || r || T) {
                if (
                  (g !== this._time && x && ((y += this._time - g), (t += this._time - g)),
                  (n = y),
                  (l = this._start),
                  (h = !(p = this._ts)),
                  T && (x || (g = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (((d = this._yoyo), (u = x + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * u + t, e, r);
                  if (
                    ((n = it(y % u)),
                    y === v
                      ? ((a = this._repeat), (n = x))
                      : ((a = ~~(y / u)) && a === y / u && ((n = x), a--), n > x && (n = x)),
                    (f = bt(this._tTime, u)),
                    !g && this._tTime && f !== a && (f = a),
                    d && 1 & a && ((n = x - n), (m = 1)),
                    a !== f && !this._lock)
                  ) {
                    var w = d && 1 & f,
                      b = w === (d && 1 & a);
                    if (
                      (a < f && (w = !w),
                      (g = w ? 0 : x),
                      (this._lock = 1),
                      (this.render(g || (m ? 0 : it(a * u)), e, !x)._lock = 0),
                      (this._tTime = y),
                      !e && this.parent && _e(this, 'onRepeat'),
                      this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                      (g && g !== this._time) ||
                        h !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((x = this._dur),
                      (v = this._tDur),
                      b &&
                        ((this._lock = 2),
                        (g = w ? x : -1e-4),
                        this.render(g, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !h)
                    )
                      return this;
                    Ee(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (_ = Ot(this, it(g), it(n))) &&
                    (y -= n - (n = _._start)),
                  (this._tTime = y),
                  (this._time = n),
                  (this._act = !p),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (g = 0)),
                  !g && n && !e && (_e(this, 'onStart'), this._tTime !== y))
                )
                  return this;
                if (n >= g && t >= 0)
                  for (s = this._first; s; ) {
                    if (((o = s._next), (s._act || n >= s._start) && s._ts && _ !== s)) {
                      if (s.parent !== this) return this.render(t, e, r);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (n - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts,
                          e,
                          r,
                        ),
                        n !== this._time || (!this._ts && !h))
                      ) {
                        (_ = 0), o && (y += this._zTime = -c);
                        break;
                      }
                    }
                    s = o;
                  }
                else {
                  s = this._last;
                  for (var k = t < 0 ? t : n; s; ) {
                    if (((o = s._prev), (s._act || k <= s._end) && s._ts && _ !== s)) {
                      if (s.parent !== this) return this.render(t, e, r);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (k - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) + (k - s._start) * s._ts,
                          e,
                          r,
                        ),
                        n !== this._time || (!this._ts && !h))
                      ) {
                        (_ = 0), o && (y += this._zTime = k ? -c : c);
                        break;
                      }
                    }
                    s = o;
                  }
                }
                if (
                  _ &&
                  !e &&
                  (this.pause(), (_.render(n >= g ? 0 : -c)._zTime = n >= g ? 1 : -1), this._ts)
                )
                  return (this._start = l), Dt(this), this.render(t, e, r);
                this._onUpdate && !e && _e(this, 'onUpdate', !0),
                  ((y === v && v >= this.totalDuration()) || (!y && g)) &&
                    ((l !== this._start && Math.abs(p) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !x) &&
                        ((y === v && this._ts > 0) || (!y && this._ts < 0)) &&
                        vt(this, 1),
                      e ||
                        (t < 0 && !g) ||
                        (!y && !g && v) ||
                        (_e(this, y === v && t >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                        this._prom && !(y < v && this.timeScale() > 0) && this._prom())));
              }
              return this;
            }),
            (s.add = function (t, e) {
              var r = this;
              if ((b(e) || (e = Ut(this, e, t)), !(t instanceof Ue))) {
                if (P(t))
                  return (
                    t.forEach(function (t) {
                      return r.add(t, e);
                    }),
                    this
                  );
                if (T(t)) return this.addLabel(t, e);
                if (!w(t)) return this;
                t = Ke.delayedCall(0, t);
              }
              return this !== t ? St(this, t, e) : this;
            }),
            (s.getChildren = function (t, e, r, i) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = -f);
              for (var n = [], s = this._first; s; )
                s._start >= i &&
                  (s instanceof Ke
                    ? e && n.push(s)
                    : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))),
                  (s = s._next);
              return n;
            }),
            (s.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t) return e[r];
            }),
            (s.remove = function (t) {
              return T(t)
                ? this.removeLabel(t)
                : w(t)
                ? this.killTweensOf(t)
                : (gt(this, t), t === this._recent && (this._recent = this._last), xt(this));
            }),
            (s.totalTime = function (t, e) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = it(
                      we.time -
                        (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts),
                    )),
                  r.prototype.totalTime.call(this, t, e),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (s.addLabel = function (t, e) {
              return (this.labels[t] = Ut(this, e)), this;
            }),
            (s.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (s.addPause = function (t, e, r) {
              var i = Ke.delayedCall(0, e || V, r);
              return (i.data = 'isPause'), (this._hasPause = 1), St(this, i, Ut(this, t));
            }),
            (s.removePause = function (t) {
              var e = this._first;
              for (t = Ut(this, t); e; )
                e._start === t && 'isPause' === e.data && vt(e), (e = e._next);
            }),
            (s.killTweensOf = function (t, e, r) {
              for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Ne !== i[n] && i[n].kill(t, e);
              return this;
            }),
            (s.getTweensOf = function (t, e) {
              for (var r, i = [], n = Yt(t), s = this._first, o = b(e); s; )
                s instanceof Ke
                  ? nt(s._targets, n) &&
                    (o
                      ? (!Ne || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    i.push(s)
                  : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                  (s = s._next);
              return i;
            }),
            (s.tweenTo = function (t, e) {
              e = e || {};
              var r,
                i = this,
                n = Ut(i, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                u = s.onStartParams,
                h = s.immediateRender,
                _ = Ke.to(
                  i,
                  ht(
                    {
                      ease: e.ease || 'none',
                      lazy: !1,
                      immediateRender: !1,
                      time: n,
                      overwrite: 'auto',
                      duration:
                        e.duration ||
                        Math.abs((n - (o && 'time' in o ? o.time : i._time)) / i.timeScale()) ||
                        c,
                      onStart: function () {
                        if ((i.pause(), !r)) {
                          var t =
                            e.duration ||
                            Math.abs((n - (o && 'time' in o ? o.time : i._time)) / i.timeScale());
                          _._dur !== t && Lt(_, t, 0, 1).render(_._time, !0, !0), (r = 1);
                        }
                        a && a.apply(_, u || []);
                      },
                    },
                    e,
                  ),
                );
              return h ? _.render(0) : _;
            }),
            (s.tweenFromTo = function (t, e, r) {
              return this.tweenTo(e, ht({ startAt: { time: Ut(this, t) } }, r));
            }),
            (s.recent = function () {
              return this._recent;
            }),
            (s.nextLabel = function (t) {
              return void 0 === t && (t = this._time), he(this, Ut(this, t));
            }),
            (s.previousLabel = function (t) {
              return void 0 === t && (t = this._time), he(this, Ut(this, t), 1);
            }),
            (s.currentLabel = function (t) {
              return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + c);
            }),
            (s.shiftChildren = function (t, e, r) {
              void 0 === r && (r = 0);
              for (var i, n = this._first, s = this.labels; n; )
                n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
              if (e) for (i in s) s[i] >= r && (s[i] += t);
              return xt(this);
            }),
            (s.invalidate = function () {
              var t = this._first;
              for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
              return r.prototype.invalidate.call(this);
            }),
            (s.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                xt(this)
              );
            }),
            (s.totalDuration = function (t) {
              var e,
                r,
                n,
                s = 0,
                o = this._last,
                a = f;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -t : t),
                );
              if (this._dirty) {
                for (n = this.parent; o; )
                  (e = o._prev),
                    o._dirty && o.totalDuration(),
                    (r = o._start) > a && this._sort && o._ts && !this._lock
                      ? ((this._lock = 1), (St(this, o, r - o._delay, 1)._lock = 0))
                      : (a = r),
                    r < 0 &&
                      o._ts &&
                      ((s -= r),
                      ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                        ((this._start += r / this._ts), (this._time -= r), (this._tTime -= r)),
                      this.shiftChildren(-r, !1, -Infinity),
                      (a = 0)),
                    o._end > s && o._ts && (s = o._end),
                    (o = e);
                Lt(this, this === i && this._time > s ? this._time : s, 1, 1), (this._dirty = 0);
              }
              return this._tDur;
            }),
            (n.updateRoot = function (t) {
              if ((i._ts && (ot(i, kt(t, i)), (u = we.frame)), we.frame >= K)) {
                K += p.autoSleep || 120;
                var e = i._first;
                if ((!e || !e._ts) && p.autoSleep && we._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || we.sleep();
                }
              }
            }),
            n
          );
        })(Ue);
        (exports.TimelineLite = exports.TimelineMax = exports.Timeline = Be),
          ht(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ne,
          Qe = function (t, e, r, i, n, s, o) {
            var a,
              u,
              h,
              _,
              p,
              l,
              f,
              c,
              d = new _r(this._pt, t, e, 0, 1, nr, null, n),
              m = 0,
              g = 0;
            for (
              d.b = r,
                d.e = i,
                r += '',
                (f = ~(i += '').indexOf('random(')) && (i = oe(i)),
                s && (s((c = [r, i]), t, e), (r = c[0]), (i = c[1])),
                u = r.match(O) || [];
              (a = O.exec(i));

            )
              (_ = a[0]),
                (p = i.substring(m, a.index)),
                h ? (h = (h + 1) % 5) : 'rgba(' === p.substr(-5) && (h = 1),
                _ !== u[g++] &&
                  ((l = parseFloat(u[g - 1]) || 0),
                  (d._pt = {
                    _next: d._pt,
                    p: p || 1 === g ? p : ',',
                    s: l,
                    c:
                      '=' === _.charAt(1)
                        ? parseFloat(_.substr(2)) * ('-' === _.charAt(0) ? -1 : 1)
                        : parseFloat(_) - l,
                    m: h && h < 4 ? Math.round : 0,
                  }),
                  (m = O.lastIndex));
            return (
              (d.c = m < i.length ? i.substring(m, i.length) : ''),
              (d.fp = o),
              (L.test(i) || f) && (d.e = 0),
              (this._pt = d),
              d
            );
          },
          qe = function (t, e, r, i, n, s, o, a, u) {
            w(i) && (i = i(n || 0, t, s));
            var h,
              _ = t[e],
              l =
                'get' !== r
                  ? r
                  : w(_)
                  ? u
                    ? t[e.indexOf('set') || !w(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](u)
                    : t[e]()
                  : _,
              f = w(_) ? (u ? $e : Ze) : Xe;
            if (
              (T(i) &&
                (~i.indexOf('random(') && (i = oe(i)),
                '=' === i.charAt(1) &&
                  ((h =
                    parseFloat(l) +
                    parseFloat(i.substr(2)) * ('-' === i.charAt(0) ? -1 : 1) +
                    (qt(l) || 0)) ||
                    0 === h) &&
                  (i = h)),
              l !== i)
            )
              return isNaN(l * i) || '' === i
                ? (!_ && !(e in t) && Q(e, i), Qe.call(this, t, e, l, i, f, a || p.stringFilter, u))
                : ((h = new _r(
                    this._pt,
                    t,
                    e,
                    +l || 0,
                    i - (l || 0),
                    'boolean' == typeof _ ? ir : rr,
                    0,
                    f,
                  )),
                  u && (h.fp = u),
                  o && h.modifier(o, this, t),
                  (this._pt = h));
          },
          je = function (t, e, r, i, n) {
            if ((w(t) && (t = Ye(t, n, e, r, i)), !D(t) || (t.style && t.nodeType) || P(t) || M(t)))
              return T(t) ? Ye(t, n, e, r, i) : t;
            var s,
              o = {};
            for (s in t) o[s] = Ye(t[s], n, e, r, i);
            return o;
          },
          Ve = function (t, e, r, i, n, s) {
            var o, a, u, _;
            if (
              H[t] &&
              !1 !== (o = new H[t]()).init(n, o.rawVars ? e[t] : je(e[t], i, n, s, r), r, i, s) &&
              ((r._pt = a = new _r(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)), r !== h)
            )
              for (u = r._ptLookup[r._targets.indexOf(n)], _ = o._props.length; _--; )
                u[o._props[_]] = a;
            return o;
          },
          Ge = function t(e, n) {
            var s,
              o,
              a,
              u,
              h,
              _,
              p,
              f,
              d,
              m,
              g,
              v,
              x,
              y = e.vars,
              T = y.ease,
              w = y.startAt,
              b = y.immediateRender,
              k = y.lazy,
              D = y.onUpdate,
              C = y.onUpdateParams,
              S = y.callbackScope,
              M = y.runBackwards,
              P = y.yoyoEase,
              E = y.keyframes,
              R = y.autoRevert,
              z = e._dur,
              O = e._startAt,
              L = e._targets,
              F = e.parent,
              I = F && 'nested' === F.data ? F.parent._targets : L,
              U = 'auto' === e._overwrite && !r,
              B = e.timeline;
            if (
              (B && (!E || !T) && (T = 'none'),
              (e._ease = Re(T, l.ease)),
              (e._yEase = P ? Pe(Re(!0 === P ? T : P, l.ease)) : 0),
              P && e._yoyo && !e._repeat && ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
              (e._from = !B && !!y.runBackwards),
              !B)
            ) {
              if (
                ((v = (f = L[0] ? tt(L[0]).harness : 0) && y[f.prop]),
                (s = ft(y, G)),
                O && O.render(-1, !0).kill(),
                w)
              )
                if (
                  (vt(
                    (e._startAt = Ke.set(
                      L,
                      ht(
                        {
                          data: 'isStart',
                          overwrite: !1,
                          parent: F,
                          immediateRender: !0,
                          lazy: A(k),
                          startAt: null,
                          delay: 0,
                          onUpdate: D,
                          onUpdateParams: C,
                          callbackScope: S,
                          stagger: 0,
                        },
                        w,
                      ),
                    )),
                  ),
                  n < 0 && !b && !R && e._startAt.render(-1, !0),
                  b)
                ) {
                  if ((n > 0 && !R && (e._startAt = 0), z && n <= 0))
                    return void (n && (e._zTime = n));
                } else !1 === R && (e._startAt = 0);
              else if (M && z)
                if (O) !R && (e._startAt = 0);
                else if (
                  (n && (b = !1),
                  (a = ht(
                    {
                      overwrite: !1,
                      data: 'isFromStart',
                      lazy: b && A(k),
                      immediateRender: b,
                      stagger: 0,
                      parent: F,
                    },
                    s,
                  )),
                  v && (a[f.prop] = v),
                  vt((e._startAt = Ke.set(L, a))),
                  n < 0 && e._startAt.render(-1, !0),
                  b)
                ) {
                  if (!n) return;
                } else t(e._startAt, c);
              for (e._pt = 0, k = (z && A(k)) || (k && !z), o = 0; o < L.length; o++) {
                if (
                  ((p = (h = L[o])._gsap || $(L)[o]._gsap),
                  (e._ptLookup[o] = m = {}),
                  Y[p.id] && W.length && st(),
                  (g = I === L ? o : I.indexOf(h)),
                  f &&
                    !1 !== (d = new f()).init(h, v || s, e, g, I) &&
                    ((e._pt = u = new _r(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
                    d._props.forEach(function (t) {
                      m[t] = u;
                    }),
                    d.priority && (_ = 1)),
                  !f || v)
                )
                  for (a in s)
                    H[a] && (d = Ve(a, s, e, g, h, I))
                      ? d.priority && (_ = 1)
                      : (m[a] = u = qe.call(e, h, a, 'get', s[a], g, I, 0, y.stringFilter));
                e._op && e._op[o] && e.kill(h, e._op[o]),
                  U &&
                    e._pt &&
                    ((Ne = e), i.killTweensOf(h, m, e.globalTime(0)), (x = !e.parent), (Ne = 0)),
                  e._pt && k && (Y[p.id] = 1);
              }
              _ && hr(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = D), (e._initted = (!e._op || e._pt) && !x);
          },
          We = function (t, e) {
            var r,
              i,
              n,
              s,
              o = t[0] ? tt(t[0]).harness : 0,
              a = o && o.aliases;
            if (!a) return e;
            for (i in ((r = pt({}, e)), a))
              if (i in r) for (n = (s = a[i].split(',')).length; n--; ) r[s[n]] = r[i];
            return r;
          },
          Ye = function (t, e, r, i, n) {
            return w(t) ? t.call(e, r, i, n) : T(t) && ~t.indexOf('random(') ? oe(t) : t;
          },
          He = Z + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
          Je = (He + ',id,stagger,delay,duration,paused,scrollTrigger').split(',');
        exports._checkPlugin = Ve;
        var Ke = (function (n) {
          function s(e, s, o, a) {
            var u;
            'number' == typeof s && ((o.duration = s), (s = o), (o = null));
            var h,
              _,
              l,
              f,
              d,
              m,
              g,
              v,
              x = (u = n.call(this, a ? s : ct(s)) || this).vars,
              y = x.duration,
              T = x.delay,
              w = x.immediateRender,
              k = x.stagger,
              C = x.overwrite,
              E = x.keyframes,
              R = x.defaults,
              z = x.scrollTrigger,
              O = x.yoyoEase,
              L = s.parent || i,
              F = (P(e) || M(e) ? b(e[0]) : 'length' in s) ? [e] : Yt(e);
            if (
              ((u._targets = F.length
                ? $(F)
                : q('GSAP target ' + e + ' not found. https://greensock.com', !p.nullTargetWarn) ||
                  []),
              (u._ptLookup = []),
              (u._overwrite = C),
              E || k || S(y) || S(T))
            ) {
              if (
                ((s = u.vars),
                (h = u.timeline = new Be({ data: 'nested', defaults: R || {} })).kill(),
                (h.parent = h._dp = t(u)),
                (h._start = 0),
                E)
              )
                ht(h.vars.defaults, { ease: 'none' }),
                  k
                    ? F.forEach(function (t, e) {
                        return E.forEach(function (r, i) {
                          return h.to(t, r, i ? '>' : e * k);
                        });
                      })
                    : E.forEach(function (t) {
                        return h.to(F, t, '>');
                      });
              else {
                if (((f = F.length), (g = k ? Kt(k) : V), D(k)))
                  for (d in k) ~He.indexOf(d) && (v || (v = {}), (v[d] = k[d]));
                for (_ = 0; _ < f; _++) {
                  for (d in ((l = {}), s)) Je.indexOf(d) < 0 && (l[d] = s[d]);
                  (l.stagger = 0),
                    O && (l.yoyoEase = O),
                    v && pt(l, v),
                    (m = F[_]),
                    (l.duration = +Ye(y, t(u), _, m, F)),
                    (l.delay = (+Ye(T, t(u), _, m, F) || 0) - u._delay),
                    !k &&
                      1 === f &&
                      l.delay &&
                      ((u._delay = T = l.delay), (u._start += T), (l.delay = 0)),
                    h.to(m, l, g(_, m, F));
                }
                h.duration() ? (y = T = 0) : (u.timeline = 0);
              }
              y || u.duration((y = h.duration()));
            } else u.timeline = 0;
            return (
              !0 !== C || r || ((Ne = t(u)), i.killTweensOf(F), (Ne = 0)),
              St(L, t(u), o),
              s.reversed && u.reverse(),
              s.paused && u.paused(!0),
              (w ||
                (!y &&
                  !E &&
                  u._start === it(L._time) &&
                  A(w) &&
                  Tt(t(u)) &&
                  'nested' !== L.data)) &&
                ((u._tTime = -c), u.render(Math.max(0, -T))),
              z && Mt(t(u), z),
              u
            );
          }
          e(s, n);
          var o = s.prototype;
          return (
            (o.render = function (t, e, r) {
              var i,
                n,
                s,
                o,
                a,
                u,
                h,
                _,
                p,
                l = this._time,
                f = this._tDur,
                d = this._dur,
                m = t > f - c && t >= 0 ? f : t < c ? 0 : t;
              if (d) {
                if (
                  m !== this._tTime ||
                  !t ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((i = m), (_ = this.timeline), this._repeat)) {
                    if (((o = d + this._rDelay), this._repeat < -1 && t < 0))
                      return this.totalTime(100 * o + t, e, r);
                    if (
                      ((i = it(m % o)),
                      m === f
                        ? ((s = this._repeat), (i = d))
                        : ((s = ~~(m / o)) && s === m / o && ((i = d), s--), i > d && (i = d)),
                      (u = this._yoyo && 1 & s) && ((p = this._yEase), (i = d - i)),
                      (a = bt(this._tTime, o)),
                      i === l && !r && this._initted)
                    )
                      return this;
                    s !== a &&
                      (_ && this._yEase && Ee(_, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(it(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Pt(this, t < 0 ? t : i, r, e)) return (this._tTime = 0), this;
                    if (d !== this._dur) return this.render(t, e, r);
                  }
                  if (
                    ((this._tTime = m),
                    (this._time = i),
                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = h = (p || this._ease)(i / d)),
                    this._from && (this.ratio = h = 1 - h),
                    i && !l && !e && (_e(this, 'onStart'), this._tTime !== m))
                  )
                    return this;
                  for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                  (_ && _.render(t < 0 ? t : !i && u ? -c : _._dur * h, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      _e(this, 'onUpdate')),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      _e(this, 'onRepeat'),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                      (t || !d) &&
                        ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) &&
                        vt(this, 1),
                      e ||
                        (t < 0 && !l) ||
                        (!m && !l) ||
                        (_e(this, m === f ? 'onComplete' : 'onReverseComplete', !0),
                        this._prom && !(m < f && this.timeScale() > 0) && this._prom()));
                }
              } else zt(this, t, e, r);
              return this;
            }),
            (o.targets = function () {
              return this._targets;
            }),
            (o.invalidate = function () {
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
                n.prototype.invalidate.call(this)
              );
            }),
            (o.kill = function (t, e) {
              if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
                return (this._lazy = this._pt = 0), this.parent ? pe(this) : this;
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)._first ||
                    pe(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Lt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var i,
                n,
                s,
                o,
                a,
                u,
                h,
                _ = this._targets,
                p = t ? Yt(t) : _,
                l = this._ptLookup,
                f = this._pt;
              if ((!e || 'all' === e) && dt(_, p)) return 'all' === e && (this._pt = 0), pe(this);
              for (
                i = this._op = this._op || [],
                  'all' !== e &&
                    (T(e) &&
                      ((a = {}),
                      rt(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = We(_, e))),
                  h = _.length;
                h--;

              )
                if (~p.indexOf(_[h]))
                  for (a in ((n = l[h]),
                  'all' === e
                    ? ((i[h] = e), (o = n), (s = {}))
                    : ((s = i[h] = i[h] || {}), (o = e)),
                  o))
                    (u = n && n[a]) &&
                      (('kill' in u.d && !0 !== u.d.kill(a)) || gt(this, u, '_pt'), delete n[a]),
                      'all' !== s && (s[a] = 1);
              return this._initted && !this._pt && f && pe(this), this;
            }),
            (s.to = function (t, e) {
              return new s(t, e, arguments[2]);
            }),
            (s.from = function (t, e) {
              return Bt(1, arguments);
            }),
            (s.delayedCall = function (t, e, r, i) {
              return new s(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (s.fromTo = function (t, e, r) {
              return Bt(2, arguments);
            }),
            (s.set = function (t, e) {
              return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
            }),
            (s.killTweensOf = function (t, e, r) {
              return i.killTweensOf(t, e, r);
            }),
            s
          );
        })(Ue);
        (exports.TweenLite = exports.TweenMax = exports.Tween = Ke),
          ht(Ke.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
          rt('staggerTo,staggerFrom,staggerFromTo', function (t) {
            Ke[t] = function () {
              var e = new Be(),
                r = Vt.call(arguments, 0);
              return r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r);
            };
          });
        var Xe = function (t, e, r) {
            return (t[e] = r);
          },
          Ze = function (t, e, r) {
            return t[e](r);
          },
          $e = function (t, e, r, i) {
            return t[e](i.fp, r);
          },
          tr = function (t, e, r) {
            return t.setAttribute(e, r);
          },
          er = function (t, e) {
            return w(t[e]) ? Ze : k(t[e]) && t.setAttribute ? tr : Xe;
          },
          rr = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          ir = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          nr = function (t, e) {
            var r = e._pt,
              i = '';
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
              for (; r; )
                (i =
                  r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i),
                  (r = r._next);
              i += e.c;
            }
            e.set(e.t, e.p, i, e);
          },
          sr = function (t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          },
          or = function (t, e, r, i) {
            for (var n, s = this._pt; s; ) (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
          },
          ar = function (t) {
            for (var e, r, i = this._pt; i; )
              (r = i._next),
                (i.p === t && !i.op) || i.op === t ? gt(this, i, '_pt') : i.dep || (e = 1),
                (i = r);
            return !e;
          },
          ur = function (t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
          },
          hr = function (t) {
            for (var e, r, i, n, s = t._pt; s; ) {
              for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
              (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
                (s._next = r) ? (r._prev = s) : (n = s),
                (s = e);
            }
            t._pt = i;
          };
        (exports._sortPropTweensByPriority = hr),
          (exports._renderComplexString = nr),
          (exports._getSetter = er);
        var _r = (function () {
          function t(t, e, r, i, n, s, o, a, u) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || rr),
              (this.d = o || this),
              (this.set = a || Xe),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = ur),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
        (exports.PropTween = _r),
          rt(
            Z +
              'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
            function (t) {
              return (G[t] = 1);
            },
          ),
          (U.TweenMax = U.TweenLite = Ke),
          (U.TimelineLite = U.TimelineMax = Be),
          (i = new Be({
            sortChildren: !1,
            defaults: l,
            autoRemoveChildren: !0,
            id: 'root',
            smoothChildTiming: !0,
          })),
          (p.stringFilter = Te);
        var pr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (t) {
              return le(t);
            });
          },
          timeline: function (t) {
            return new Be(t);
          },
          getTweensOf: function (t, e) {
            return i.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, i) {
            T(t) && (t = Yt(t)[0]);
            var n = tt(t || {}).get,
              s = r ? ut : at;
            return (
              'native' === r && (r = ''),
              t
                ? e
                  ? s(((H[e] && H[e].get) || n)(t, e, r, i))
                  : function (e, r, i) {
                      return s(((H[e] && H[e].get) || n)(t, e, r, i));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = Yt(t)).length > 1) {
              var i = t.map(function (t) {
                  return dr.quickSetter(t, e, r);
                }),
                n = i.length;
              return function (t) {
                for (var e = n; e--; ) i[e](t);
              };
            }
            t = t[0] || {};
            var s = H[e],
              o = tt(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var i = new s();
                    (h._pt = 0),
                      i.init(t, r ? e + r : e, h, 0, [t]),
                      i.render(1, i),
                      h._pt && sr(1, h);
                  }
                : o.set(t, a);
            return s
              ? u
              : function (e) {
                  return u(t, a, r ? e + r : e, o, 1);
                };
          },
          isTweening: function (t) {
            return i.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Re(t.ease, l.ease)), lt(l, t || {});
          },
          config: function (t) {
            return lt(p, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || '').split(',').forEach(function (t) {
              return t && !H[t] && !U[t] && q(e + ' effect requires ' + t + ' plugin.');
            }),
              (J[e] = function (t, e, i) {
                return r(Yt(t), ht(e || {}, n), i);
              }),
              s &&
                (Be.prototype[e] = function (t, r, i) {
                  return this.add(J[e](t, D(r) ? r : (i = r) && {}, this), i);
                });
          },
          registerEase: function (t, e) {
            ke[t] = Re(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Re(t, e) : ke;
          },
          getById: function (t) {
            return i.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              n,
              s = new Be(t);
            for (
              s.smoothChildTiming = A(t.smoothChildTiming),
                i.remove(s),
                s._dp = 0,
                s._time = s._tTime = i._time,
                r = i._first;
              r;

            )
              (n = r._next),
                (!e && !r._dur && r instanceof Ke && r.vars.onComplete === r._targets[0]) ||
                  St(s, r, r._start - r._delay),
                (r = n);
            return St(i, s, 0), s;
          },
          utils: {
            wrap: ne,
            wrapYoyo: se,
            distribute: Kt,
            random: $t,
            snap: Zt,
            normalize: re,
            getUnit: qt,
            clamp: jt,
            splitColor: me,
            toArray: Yt,
            selector: Ht,
            mapRange: ae,
            pipe: te,
            unitize: ee,
            interpolate: ue,
            shuffle: Jt,
          },
          install: N,
          effects: J,
          ticker: we,
          updateRoot: Be.updateRoot,
          plugins: H,
          globalTimeline: i,
          core: {
            PropTween: _r,
            globals: j,
            Tween: Ke,
            Timeline: Be,
            Animation: Ue,
            getCache: tt,
            _removeLinkedListItem: gt,
            suppressOverwrites: function (t) {
              return (r = t);
            },
          },
        };
        rt('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
          return (pr[t] = Ke[t]);
        }),
          we.add(Be.updateRoot),
          (h = pr.to({}, { duration: 0 }));
        var lr = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
            return r;
          },
          fr = function (t, e) {
            var r,
              i,
              n,
              s = t._targets;
            for (r in e)
              for (i = s.length; i--; )
                (n = t._ptLookup[i][r]) &&
                  (n = n.d) &&
                  (n._pt && (n = lr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r));
          },
          cr = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, r, i) {
                i._onInit = function (t) {
                  var i, n;
                  if (
                    (T(r) &&
                      ((i = {}),
                      rt(r, function (t) {
                        return (i[t] = 1);
                      }),
                      (r = i)),
                    e)
                  ) {
                    for (n in ((i = {}), r)) i[n] = e(r[n]);
                    r = i;
                  }
                  fr(t, r);
                };
              },
            };
          },
          dr =
            pr.registerPlugin(
              {
                name: 'attr',
                init: function (t, e, r, i, n) {
                  var s, o;
                  for (s in e)
                    (o = this.add(
                      t,
                      'setAttribute',
                      (t.getAttribute(s) || 0) + '',
                      e[s],
                      i,
                      n,
                      0,
                      0,
                      s,
                    )) && (o.op = s),
                      this._props.push(s);
                },
              },
              {
                name: 'endArray',
                init: function (t, e) {
                  for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
                },
              },
              cr('roundProps', Xt),
              cr('modifiers'),
              cr('snap', Zt),
            ) || pr;
        (exports.default = exports.gsap = dr),
          (Ke.version = Be.version = dr.version = '3.7.1'),
          (a = 1),
          C() && be();
        var mr = ke.Power0,
          gr = ke.Power1,
          vr = ke.Power2,
          xr = ke.Power3,
          yr = ke.Power4,
          Tr = ke.Linear,
          wr = ke.Quad,
          br = ke.Cubic,
          kr = ke.Quart,
          Dr = ke.Quint,
          Ar = ke.Strong,
          Cr = ke.Elastic,
          Sr = ke.Back,
          Mr = ke.SteppedEase,
          Pr = ke.Bounce,
          Er = ke.Sine,
          Rr = ke.Expo,
          zr = ke.Circ;
        (exports.Circ = zr),
          (exports.Expo = Rr),
          (exports.Sine = Er),
          (exports.Bounce = Pr),
          (exports.SteppedEase = Mr),
          (exports.Back = Sr),
          (exports.Elastic = Cr),
          (exports.Strong = Ar),
          (exports.Quint = Dr),
          (exports.Quart = kr),
          (exports.Cubic = br),
          (exports.Quad = wr),
          (exports.Linear = Tr),
          (exports.Power4 = yr),
          (exports.Power3 = xr),
          (exports.Power2 = vr),
          (exports.Power1 = gr),
          (exports.Power0 = mr);
      },
      {},
    ],
    bp4Z: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.checkPrefix =
            exports._createElement =
            exports._getBBox =
            exports.default =
            exports.CSSPlugin =
              void 0);
        var t,
          e,
          r,
          n,
          i,
          s,
          o,
          a,
          p = require('./gsap-core.js'),
          u = function () {
            return 'undefined' != typeof window;
          },
          c = {},
          f = 180 / Math.PI,
          l = Math.PI / 180,
          h = Math.atan2,
          g = 1e8,
          d = /([A-Z])/g,
          x = /(?:left|right|width|margin|padding|x)/i,
          m = /[\s,\(]\S/,
          _ = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
          y = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
          },
          v = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e,
            );
          },
          b = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
          },
          w = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          O = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          P = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          M = function (t, e, r) {
            return (t.style[e] = r);
          },
          C = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          B = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          S = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          A = function (t, e, r, n, i) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
          },
          T = function (t, e, r, n, i) {
            var s = t._gsap;
            (s[e] = r), s.renderTransform(i, s);
          },
          E = 'transform',
          F = E + 'Origin',
          Y = function (t, r) {
            var n = e.createElementNS
              ? e.createElementNS(
                  (r || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                  t,
                )
              : e.createElement(t);
            return n.style ? n : e.createElement(t);
          },
          X = function t(e, r, n) {
            var i = getComputedStyle(e);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(d, '-$1').toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && t(e, z(r) || r, 1)) ||
              ''
            );
          },
          k = 'O,Moz,ms,Ms,Webkit'.split(','),
          z = function (t, e, r) {
            var n = (e || i).style,
              s = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(k[s] + t in n); );
            return s < 0 ? null : (3 === s ? 'ms' : s >= 0 ? k[s] : '') + t;
          },
          N = function () {
            u() &&
              window.document &&
              ((t = window),
              (e = t.document),
              (r = e.documentElement),
              (i = Y('div') || { style: {} }),
              (s = Y('div')),
              (E = z(E)),
              (F = E + 'Origin'),
              (i.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
              (a = !!z('perspective')),
              (n = 1));
          },
          U = function t(e) {
            var n,
              i = Y(
                'svg',
                (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
                  'http://www.w3.org/2000/svg',
              ),
              s = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if ((r.appendChild(i), i.appendChild(this), (this.style.display = 'block'), e))
              try {
                (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
              } catch (p) {}
            else this._gsapBBox && (n = this._gsapBBox());
            return (
              s && (o ? s.insertBefore(this, o) : s.appendChild(this)),
              r.removeChild(i),
              (this.style.cssText = a),
              n
            );
          },
          W = function (t, e) {
            for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          I = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = U.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) || t.getBBox === U || (e = U.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +W(t, ['x', 'cx', 'x1']) || 0,
                    y: +W(t, ['y', 'cy', 'y1']) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          V = function (t) {
            return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !I(t));
          },
          q = function (t, e) {
            if (e) {
              var r = t.style;
              e in c && e !== F && (e = E),
                r.removeProperty
                  ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e),
                    r.removeProperty(e.replace(d, '-$1').toLowerCase()))
                  : r.removeAttribute(e);
            }
          },
          D = function (t, e, r, n, i, s) {
            var o = new p.PropTween(t._pt, e, r, 0, 1, s ? P : O);
            return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
          },
          j = { deg: 1, rad: 1, turn: 1 },
          G = function t(r, n, s, o) {
            var a,
              u,
              f,
              l,
              h = parseFloat(s) || 0,
              g = (s + '').trim().substr((h + '').length) || 'px',
              d = i.style,
              m = x.test(n),
              _ = 'svg' === r.tagName.toLowerCase(),
              y = (_ ? 'client' : 'offset') + (m ? 'Width' : 'Height'),
              v = 'px' === o,
              b = '%' === o;
            return o === g || !h || j[o] || j[g]
              ? h
              : ('px' !== g && !v && (h = t(r, n, s, 'px')),
                (l = r.getCTM && V(r)),
                (!b && '%' !== g) || (!c[n] && !~n.indexOf('adius'))
                  ? ((d[m ? 'width' : 'height'] = 100 + (v ? g : o)),
                    (u =
                      ~n.indexOf('adius') || ('em' === o && r.appendChild && !_)
                        ? r
                        : r.parentNode),
                    l && (u = (r.ownerSVGElement || {}).parentNode),
                    (u && u !== e && u.appendChild) || (u = e.body),
                    (f = u._gsap) && b && f.width && m && f.time === p._ticker.time
                      ? (0, p._round)((h / f.width) * 100)
                      : ((b || '%' === g) && (d.position = X(r, 'position')),
                        u === r && (d.position = 'static'),
                        u.appendChild(i),
                        (a = i[y]),
                        u.removeChild(i),
                        (d.position = 'absolute'),
                        m &&
                          b &&
                          (((f = (0, p._getCache)(u)).time = p._ticker.time), (f.width = u[y])),
                        (0, p._round)(v ? (a * h) / 100 : a && h ? (100 / a) * h : 0)))
                  : ((a = l ? r.getBBox()[m ? 'width' : 'height'] : r[y]),
                    (0, p._round)(b ? (h / a) * 100 : (h / 100) * a)));
          },
          R = function (t, e, r, i) {
            var s;
            return (
              n || N(),
              e in _ && 'transform' !== e && ~(e = _[e]).indexOf(',') && (e = e.split(',')[0]),
              c[e] && 'transform' !== e
                ? ((s = it(t, i)),
                  (s =
                    'transformOrigin' !== e
                      ? s[e]
                      : s.svg
                      ? s.origin
                      : st(X(t, F)) + ' ' + s.zOrigin + 'px'))
                : (!(s = t.style[e]) || 'auto' === s || i || ~(s + '').indexOf('calc(')) &&
                  (s =
                    (J[e] && J[e](t, e, r)) ||
                    X(t, e) ||
                    (0, p._getProperty)(t, e) ||
                    ('opacity' === e ? 1 : 0)),
              r && !~(s + '').trim().indexOf(' ') ? G(t, e, s, r) + r : s
            );
          },
          L = function (t, e, r, n) {
            if (!r || 'none' === r) {
              var i = z(e, t, 1),
                s = i && X(t, i, 1);
              s && s !== r
                ? ((e = i), (r = s))
                : 'borderColor' === e && (r = X(t, 'borderTopColor'));
            }
            var o,
              a,
              u,
              c,
              f,
              l,
              h,
              g,
              d,
              x,
              m,
              _,
              y = new p.PropTween(this._pt, t.style, e, 0, 1, p._renderComplexString),
              v = 0,
              b = 0;
            if (
              ((y.b = r),
              (y.e = n),
              (r += ''),
              'auto' === (n += '') && ((t.style[e] = n), (n = X(t, e) || n), (t.style[e] = r)),
              (o = [r, n]),
              (0, p._colorStringFilter)(o),
              (n = o[1]),
              (u = (r = o[0]).match(p._numWithUnitExp) || []),
              (n.match(p._numWithUnitExp) || []).length)
            ) {
              for (; (a = p._numWithUnitExp.exec(n)); )
                (h = a[0]),
                  (d = n.substring(v, a.index)),
                  f
                    ? (f = (f + 1) % 5)
                    : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) || (f = 1),
                  h !== (l = u[b++] || '') &&
                    ((c = parseFloat(l) || 0),
                    (m = l.substr((c + '').length)),
                    (_ = '=' === h.charAt(1) ? +(h.charAt(0) + '1') : 0) && (h = h.substr(2)),
                    (g = parseFloat(h)),
                    (x = h.substr((g + '').length)),
                    (v = p._numWithUnitExp.lastIndex - x.length),
                    x ||
                      ((x = x || p._config.units[e] || m),
                      v === n.length && ((n += x), (y.e += x))),
                    m !== x && (c = G(t, e, l, x) || 0),
                    (y._pt = {
                      _next: y._pt,
                      p: d || 1 === b ? d : ',',
                      s: c,
                      c: _ ? _ * g : g - c,
                      m: (f && f < 4) || 'zIndex' === e ? Math.round : 0,
                    }));
              y.c = v < n.length ? n.substring(v, n.length) : '';
            } else y.r = 'display' === e && 'none' === n ? P : O;
            return p._relExp.test(n) && (y.e = 0), (this._pt = y), y;
          },
          Z = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
          H = function (t) {
            var e = t.split(' '),
              r = e[0],
              n = e[1] || '50%';
            return (
              ('top' !== r && 'bottom' !== r && 'left' !== n && 'right' !== n) ||
                ((t = r), (r = n), (n = t)),
              (e[0] = Z[r] || r),
              (e[1] = Z[n] || n),
              e.join(' ')
            );
          },
          $ = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                n,
                i,
                s = e.t,
                o = s.style,
                a = e.u,
                p = s._gsap;
              if ('all' === a || !0 === a) (o.cssText = ''), (n = 1);
              else
                for (i = (a = a.split(',')).length; --i > -1; )
                  (r = a[i]), c[r] && ((n = 1), (r = 'transformOrigin' === r ? F : E)), q(s, r);
              n &&
                (q(s, E),
                p && (p.svg && s.removeAttribute('transform'), it(s, 1), (p.uncache = 1)));
            }
          },
          J = {
            clearProps: function (t, e, r, n, i) {
              if ('isFromStart' !== i.data) {
                var s = (t._pt = new p.PropTween(t._pt, e, r, 0, 0, $));
                return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
              }
            },
          },
          K = [1, 0, 0, 1, 0, 0],
          Q = {},
          tt = function (t) {
            return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
          },
          et = function (t) {
            var e = X(t, E);
            return tt(e) ? K : e.substr(7).match(p._numExp).map(p._round);
          },
          rt = function (t, e) {
            var n,
              i,
              s,
              o,
              a = t._gsap || (0, p._getCache)(t),
              u = t.style,
              c = et(t);
            return a.svg && t.getAttribute('transform')
              ? '1,0,0,1,0,0' ===
                (c = [
                  (s = t.transform.baseVal.consolidate().matrix).a,
                  s.b,
                  s.c,
                  s.d,
                  s.e,
                  s.f,
                ]).join(',')
                ? K
                : c
              : (c !== K ||
                  t.offsetParent ||
                  t === r ||
                  a.svg ||
                  ((s = u.display),
                  (u.display = 'block'),
                  ((n = t.parentNode) && t.offsetParent) ||
                    ((o = 1), (i = t.nextSibling), r.appendChild(t)),
                  (c = et(t)),
                  s ? (u.display = s) : q(t, 'display'),
                  o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : r.removeChild(t))),
                e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
          },
          nt = function (t, e, r, n, i, s) {
            var o,
              a,
              p,
              u = t._gsap,
              c = i || rt(t, !0),
              f = u.xOrigin || 0,
              l = u.yOrigin || 0,
              h = u.xOffset || 0,
              g = u.yOffset || 0,
              d = c[0],
              x = c[1],
              m = c[2],
              _ = c[3],
              y = c[4],
              v = c[5],
              b = e.split(' '),
              w = parseFloat(b[0]) || 0,
              O = parseFloat(b[1]) || 0;
            r
              ? c !== K &&
                (a = d * _ - x * m) &&
                ((p = w * (-x / a) + O * (d / a) - (d * v - x * y) / a),
                (w = w * (_ / a) + O * (-m / a) + (m * v - _ * y) / a),
                (O = p))
              : ((w = (o = I(t)).x + (~b[0].indexOf('%') ? (w / 100) * o.width : w)),
                (O = o.y + (~(b[1] || b[0]).indexOf('%') ? (O / 100) * o.height : O))),
              n || (!1 !== n && u.smooth)
                ? ((y = w - f),
                  (v = O - l),
                  (u.xOffset = h + (y * d + v * m) - y),
                  (u.yOffset = g + (y * x + v * _) - v))
                : (u.xOffset = u.yOffset = 0),
              (u.xOrigin = w),
              (u.yOrigin = O),
              (u.smooth = !!n),
              (u.origin = e),
              (u.originIsAbsolute = !!r),
              (t.style[F] = '0px 0px'),
              s &&
                (D(s, u, 'xOrigin', f, w),
                D(s, u, 'yOrigin', l, O),
                D(s, u, 'xOffset', h, u.xOffset),
                D(s, u, 'yOffset', g, u.yOffset)),
              t.setAttribute('data-svg-origin', w + ' ' + O);
          },
          it = function (t, e) {
            var r = t._gsap || new p.GSCache(t);
            if ('x' in r && !e && !r.uncache) return r;
            var n,
              i,
              s,
              o,
              u,
              c,
              g,
              d,
              x,
              m,
              _,
              y,
              v,
              b,
              w,
              O,
              P,
              M,
              C,
              B,
              S,
              A,
              T,
              Y,
              k,
              z,
              N,
              U,
              W,
              I,
              q,
              D,
              j = t.style,
              G = r.scaleX < 0,
              R = X(t, F) || '0';
            return (
              (n = i = s = c = g = d = x = m = _ = 0),
              (o = u = 1),
              (r.svg = !(!t.getCTM || !V(t))),
              (b = rt(t, r.svg)),
              r.svg &&
                ((Y = (!r.uncache || '0px 0px' === R) && !e && t.getAttribute('data-svg-origin')),
                nt(t, Y || R, !!Y || r.originIsAbsolute, !1 !== r.smooth, b)),
              (y = r.xOrigin || 0),
              (v = r.yOrigin || 0),
              b !== K &&
                ((M = b[0]),
                (C = b[1]),
                (B = b[2]),
                (S = b[3]),
                (n = A = b[4]),
                (i = T = b[5]),
                6 === b.length
                  ? ((o = Math.sqrt(M * M + C * C)),
                    (u = Math.sqrt(S * S + B * B)),
                    (c = M || C ? h(C, M) * f : 0),
                    (x = B || S ? h(B, S) * f + c : 0) && (u *= Math.abs(Math.cos(x * l))),
                    r.svg && ((n -= y - (y * M + v * B)), (i -= v - (y * C + v * S))))
                  : ((D = b[6]),
                    (I = b[7]),
                    (N = b[8]),
                    (U = b[9]),
                    (W = b[10]),
                    (q = b[11]),
                    (n = b[12]),
                    (i = b[13]),
                    (s = b[14]),
                    (g = (w = h(D, W)) * f),
                    w &&
                      ((Y = A * (O = Math.cos(-w)) + N * (P = Math.sin(-w))),
                      (k = T * O + U * P),
                      (z = D * O + W * P),
                      (N = A * -P + N * O),
                      (U = T * -P + U * O),
                      (W = D * -P + W * O),
                      (q = I * -P + q * O),
                      (A = Y),
                      (T = k),
                      (D = z)),
                    (d = (w = h(-B, W)) * f),
                    w &&
                      ((O = Math.cos(-w)),
                      (q = S * (P = Math.sin(-w)) + q * O),
                      (M = Y = M * O - N * P),
                      (C = k = C * O - U * P),
                      (B = z = B * O - W * P)),
                    (c = (w = h(C, M)) * f),
                    w &&
                      ((Y = M * (O = Math.cos(w)) + C * (P = Math.sin(w))),
                      (k = A * O + T * P),
                      (C = C * O - M * P),
                      (T = T * O - A * P),
                      (M = Y),
                      (A = k)),
                    g && Math.abs(g) + Math.abs(c) > 359.9 && ((g = c = 0), (d = 180 - d)),
                    (o = (0, p._round)(Math.sqrt(M * M + C * C + B * B))),
                    (u = (0, p._round)(Math.sqrt(T * T + D * D))),
                    (w = h(A, T)),
                    (x = Math.abs(w) > 2e-4 ? w * f : 0),
                    (_ = q ? 1 / (q < 0 ? -q : q) : 0)),
                r.svg &&
                  ((Y = t.getAttribute('transform')),
                  (r.forceCSS = t.setAttribute('transform', '') || !tt(X(t, E))),
                  Y && t.setAttribute('transform', Y))),
              Math.abs(x) > 90 &&
                Math.abs(x) < 270 &&
                (G
                  ? ((o *= -1), (x += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180))
                  : ((u *= -1), (x += x <= 0 ? 180 : -180))),
              (r.x =
                n -
                ((r.xPercent =
                  n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                  ? (t.offsetWidth * r.xPercent) / 100
                  : 0) +
                'px'),
              (r.y =
                i -
                ((r.yPercent =
                  i &&
                  (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
                  ? (t.offsetHeight * r.yPercent) / 100
                  : 0) +
                'px'),
              (r.z = s + 'px'),
              (r.scaleX = (0, p._round)(o)),
              (r.scaleY = (0, p._round)(u)),
              (r.rotation = (0, p._round)(c) + 'deg'),
              (r.rotationX = (0, p._round)(g) + 'deg'),
              (r.rotationY = (0, p._round)(d) + 'deg'),
              (r.skewX = x + 'deg'),
              (r.skewY = m + 'deg'),
              (r.transformPerspective = _ + 'px'),
              (r.zOrigin = parseFloat(R.split(' ')[2]) || 0) && (j[F] = st(R)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = p._config.force3D),
              (r.renderTransform = r.svg ? lt : a ? ft : at),
              (r.uncache = 0),
              r
            );
          },
          st = function (t) {
            return (t = t.split(' '))[0] + ' ' + t[1];
          },
          ot = function (t, e, r) {
            var n = (0, p.getUnit)(e);
            return (0, p._round)(parseFloat(e) + parseFloat(G(t, 'x', r + 'px', n))) + n;
          },
          at = function (t, e) {
            (e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), ft(t, e);
          },
          pt = '0deg',
          ut = '0px',
          ct = ') ',
          ft = function (t, e) {
            var r = e || this,
              n = r.xPercent,
              i = r.yPercent,
              s = r.x,
              o = r.y,
              a = r.z,
              p = r.rotation,
              u = r.rotationY,
              c = r.rotationX,
              f = r.skewX,
              h = r.skewY,
              g = r.scaleX,
              d = r.scaleY,
              x = r.transformPerspective,
              m = r.force3D,
              _ = r.target,
              y = r.zOrigin,
              v = '',
              b = ('auto' === m && t && 1 !== t) || !0 === m;
            if (y && (c !== pt || u !== pt)) {
              var w,
                O = parseFloat(u) * l,
                P = Math.sin(O),
                M = Math.cos(O);
              (O = parseFloat(c) * l),
                (w = Math.cos(O)),
                (s = ot(_, s, P * w * -y)),
                (o = ot(_, o, -Math.sin(O) * -y)),
                (a = ot(_, a, M * w * -y + y));
            }
            x !== ut && (v += 'perspective(' + x + ct),
              (n || i) && (v += 'translate(' + n + '%, ' + i + '%) '),
              (b || s !== ut || o !== ut || a !== ut) &&
                (v +=
                  a !== ut || b
                    ? 'translate3d(' + s + ', ' + o + ', ' + a + ') '
                    : 'translate(' + s + ', ' + o + ct),
              p !== pt && (v += 'rotate(' + p + ct),
              u !== pt && (v += 'rotateY(' + u + ct),
              c !== pt && (v += 'rotateX(' + c + ct),
              (f === pt && h === pt) || (v += 'skew(' + f + ', ' + h + ct),
              (1 === g && 1 === d) || (v += 'scale(' + g + ', ' + d + ct),
              (_.style[E] = v || 'translate(0, 0)');
          },
          lt = function (t, e) {
            var r,
              n,
              i,
              s,
              o,
              a = e || this,
              u = a.xPercent,
              c = a.yPercent,
              f = a.x,
              h = a.y,
              g = a.rotation,
              d = a.skewX,
              x = a.skewY,
              m = a.scaleX,
              _ = a.scaleY,
              y = a.target,
              v = a.xOrigin,
              b = a.yOrigin,
              w = a.xOffset,
              O = a.yOffset,
              P = a.forceCSS,
              M = parseFloat(f),
              C = parseFloat(h);
            (g = parseFloat(g)),
              (d = parseFloat(d)),
              (x = parseFloat(x)) && ((d += x = parseFloat(x)), (g += x)),
              g || d
                ? ((g *= l),
                  (d *= l),
                  (r = Math.cos(g) * m),
                  (n = Math.sin(g) * m),
                  (i = Math.sin(g - d) * -_),
                  (s = Math.cos(g - d) * _),
                  d &&
                    ((x *= l),
                    (o = Math.tan(d - x)),
                    (i *= o = Math.sqrt(1 + o * o)),
                    (s *= o),
                    x && ((o = Math.tan(x)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
                  (r = (0, p._round)(r)),
                  (n = (0, p._round)(n)),
                  (i = (0, p._round)(i)),
                  (s = (0, p._round)(s)))
                : ((r = m), (s = _), (n = i = 0)),
              ((M && !~(f + '').indexOf('px')) || (C && !~(h + '').indexOf('px'))) &&
                ((M = G(y, 'x', f, 'px')), (C = G(y, 'y', h, 'px'))),
              (v || b || w || O) &&
                ((M = (0, p._round)(M + v - (v * r + b * i) + w)),
                (C = (0, p._round)(C + b - (v * n + b * s) + O))),
              (u || c) &&
                ((o = y.getBBox()),
                (M = (0, p._round)(M + (u / 100) * o.width)),
                (C = (0, p._round)(C + (c / 100) * o.height))),
              (o = 'matrix(' + r + ',' + n + ',' + i + ',' + s + ',' + M + ',' + C + ')'),
              y.setAttribute('transform', o),
              P && (y.style[E] = o);
          },
          ht = function (t, e, r, n, i, s) {
            var o,
              a,
              u = (0, p._isString)(i),
              c = parseFloat(i) * (u && ~i.indexOf('rad') ? f : 1),
              l = s ? c * s : c - n,
              h = n + l + 'deg';
            return (
              u &&
                ('short' === (o = i.split('_')[1]) &&
                  (l %= 360) !== l % 180 &&
                  (l += l < 0 ? 360 : -360),
                'cw' === o && l < 0
                  ? (l = ((l + 360 * g) % 360) - 360 * ~~(l / 360))
                  : 'ccw' === o && l > 0 && (l = ((l - 360 * g) % 360) - 360 * ~~(l / 360))),
              (t._pt = a = new p.PropTween(t._pt, e, r, n, l, v)),
              (a.e = h),
              (a.u = 'deg'),
              t._props.push(r),
              a
            );
          },
          gt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          dt = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              f,
              l = gt({}, r._gsap),
              h = r.style;
            for (i in (l.svg
              ? ((s = r.getAttribute('transform')),
                r.setAttribute('transform', ''),
                (h[E] = e),
                (n = it(r, 1)),
                q(r, E),
                r.setAttribute('transform', s))
              : ((s = getComputedStyle(r)[E]), (h[E] = e), (n = it(r, 1)), (h[E] = s)),
            c))
              (s = l[i]) !== (o = n[i]) &&
                'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 &&
                ((a =
                  (0, p.getUnit)(s) !== (f = (0, p.getUnit)(o)) ? G(r, i, s, f) : parseFloat(s)),
                (u = parseFloat(o)),
                (t._pt = new p.PropTween(t._pt, n, i, a, u - a, y)),
                (t._pt.u = f || 0),
                t._props.push(i));
            gt(n, l);
          };
        (exports._getBBox = I),
          (exports.checkPrefix = z),
          (exports._createElement = Y),
          (0, p._forEachName)('padding,margin,Width,Radius', function (t, e) {
            var r = 'Top',
              n = 'Right',
              i = 'Bottom',
              s = 'Left',
              o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
                return e < 2 ? t + r : 'border' + r + t;
              });
            J[e > 1 ? 'border' + t : t] = function (t, e, r, n, i) {
              var s, a;
              if (arguments.length < 4)
                return (
                  (s = o.map(function (e) {
                    return R(t, e, r);
                  })),
                  5 === (a = s.join(' ')).split(s[0]).length ? s[0] : a
                );
              (s = (n + '').split(' ')),
                (a = {}),
                o.forEach(function (t, e) {
                  return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, a, i);
            };
          });
        var xt = {
          name: 'css',
          register: N,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, s) {
            var o,
              a,
              u,
              f,
              l,
              h,
              g,
              d,
              x,
              v,
              O,
              P,
              M,
              C,
              B,
              S = this._props,
              A = t.style,
              T = r.vars.startAt;
            for (g in (n || N(), e))
              if (
                'autoRound' !== g &&
                ((a = e[g]), !p._plugins[g] || !(0, p._checkPlugin)(g, e, r, i, t, s))
              )
                if (
                  ((l = typeof a),
                  (h = J[g]),
                  'function' === l && (l = typeof (a = a.call(r, i, t, s))),
                  'string' === l && ~a.indexOf('random(') && (a = (0, p._replaceRandom)(a)),
                  h)
                )
                  h(this, t, g, a, r) && (B = 1);
                else if ('--' === g.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(g) + '').trim()),
                    (a += ''),
                    (p._colorExp.lastIndex = 0),
                    p._colorExp.test(o) || ((d = (0, p.getUnit)(o)), (x = (0, p.getUnit)(a))),
                    x ? d !== x && (o = G(t, g, o, x) + x) : d && (a += d),
                    this.add(A, 'setProperty', o, a, i, s, 0, 0, g),
                    S.push(g);
                else if ('undefined' !== l) {
                  if (
                    (T && g in T
                      ? ((o = 'function' == typeof T[g] ? T[g].call(r, i, t, s) : T[g]),
                        g in p._config.units && !(0, p.getUnit)(o) && (o += p._config.units[g]),
                        '=' === (o + '').charAt(1) && (o = R(t, g)))
                      : (o = R(t, g)),
                    (f = parseFloat(o)),
                    (v = 'string' === l && '=' === a.charAt(1) ? +(a.charAt(0) + '1') : 0) &&
                      (a = a.substr(2)),
                    (u = parseFloat(a)),
                    g in _ &&
                      ('autoAlpha' === g &&
                        (1 === f && 'hidden' === R(t, 'visibility') && u && (f = 0),
                        D(
                          this,
                          A,
                          'visibility',
                          f ? 'inherit' : 'hidden',
                          u ? 'inherit' : 'hidden',
                          !u,
                        )),
                      'scale' !== g &&
                        'transform' !== g &&
                        ~(g = _[g]).indexOf(',') &&
                        (g = g.split(',')[0])),
                    (O = g in c))
                  )
                    if (
                      (P ||
                        (((M = t._gsap).renderTransform && !e.parseTransform) ||
                          it(t, e.parseTransform),
                        (C = !1 !== e.smoothOrigin && M.smooth),
                        ((P = this._pt =
                          new p.PropTween(
                            this._pt,
                            A,
                            E,
                            0,
                            1,
                            M.renderTransform,
                            M,
                            0,
                            -1,
                          )).dep = 1)),
                      'scale' === g)
                    )
                      (this._pt = new p.PropTween(
                        this._pt,
                        M,
                        'scaleY',
                        M.scaleY,
                        (v ? v * u : u - M.scaleY) || 0,
                      )),
                        S.push('scaleY', g),
                        (g += 'X');
                    else {
                      if ('transformOrigin' === g) {
                        (a = H(a)),
                          M.svg
                            ? nt(t, a, 0, C, 0, this)
                            : ((x = parseFloat(a.split(' ')[2]) || 0) !== M.zOrigin &&
                                D(this, M, 'zOrigin', M.zOrigin, x),
                              D(this, A, g, st(o), st(a)));
                        continue;
                      }
                      if ('svgOrigin' === g) {
                        nt(t, a, 1, C, 0, this);
                        continue;
                      }
                      if (g in Q) {
                        ht(this, M, g, f, a, v);
                        continue;
                      }
                      if ('smoothOrigin' === g) {
                        D(this, M, 'smooth', M.smooth, a);
                        continue;
                      }
                      if ('force3D' === g) {
                        M[g] = a;
                        continue;
                      }
                      if ('transform' === g) {
                        dt(this, a, t);
                        continue;
                      }
                    }
                  else g in A || (g = z(g) || g);
                  if (O || ((u || 0 === u) && (f || 0 === f) && !m.test(a) && g in A))
                    u || (u = 0),
                      (d = (o + '').substr((f + '').length)) !==
                        (x =
                          (0, p.getUnit)(a) || (g in p._config.units ? p._config.units[g] : d)) &&
                        (f = G(t, g, o, x)),
                      (this._pt = new p.PropTween(
                        this._pt,
                        O ? M : A,
                        g,
                        f,
                        v ? v * u : u - f,
                        O || ('px' !== x && 'zIndex' !== g) || !1 === e.autoRound ? y : w,
                      )),
                      (this._pt.u = x || 0),
                      d !== x && ((this._pt.b = o), (this._pt.r = b));
                  else if (g in A) L.call(this, t, g, o, a);
                  else {
                    if (!(g in t)) {
                      (0, p._missingPlugin)(g, a);
                      continue;
                    }
                    this.add(t, g, o || t[g], a, i, s);
                  }
                  S.push(g);
                }
            B && (0, p._sortPropTweensByPriority)(this);
          },
          get: R,
          aliases: _,
          getSetter: function (t, e, r) {
            var n = _[e];
            return (
              n && n.indexOf(',') < 0 && (e = n),
              e in c && e !== F && (t._gsap.x || R(t, 'x'))
                ? r && o === r
                  ? 'scale' === e
                    ? S
                    : B
                  : (o = r || {}) && ('scale' === e ? A : T)
                : t.style && !(0, p._isUndefined)(t.style[e])
                ? M
                : ~e.indexOf('-')
                ? C
                : (0, p._getSetter)(t, e)
            );
          },
          core: { _removeProperty: q, _getMatrix: rt },
        };
        (exports.default = exports.CSSPlugin = xt),
          (p.gsap.utils.checkPrefix = z),
          (function (t, e, r, n) {
            var i = (0, p._forEachName)(
              'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' +
                e +
                ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
              function (t) {
                c[t] = 1;
              },
            );
            (0, p._forEachName)(e, function (t) {
              (p._config.units[t] = 'deg'), (Q[t] = 1);
            }),
              (_[i[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + e),
              (0, p._forEachName)(
                '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
                function (t) {
                  var e = t.split(':');
                  _[e[1]] = i[e[0]];
                },
              );
          })(0, 'rotation,rotationX,rotationY,skewX,skewY'),
          (0, p._forEachName)(
            'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
            function (t) {
              p._config.units[t] = 'px';
            },
          ),
          p.gsap.registerPlugin(xt);
      },
      { './gsap-core.js': 'TNS6' },
    ],
    TpQl: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'Power0', {
            enumerable: !0,
            get: function () {
              return e.Power0;
            },
          }),
          Object.defineProperty(exports, 'Power1', {
            enumerable: !0,
            get: function () {
              return e.Power1;
            },
          }),
          Object.defineProperty(exports, 'Power2', {
            enumerable: !0,
            get: function () {
              return e.Power2;
            },
          }),
          Object.defineProperty(exports, 'Power3', {
            enumerable: !0,
            get: function () {
              return e.Power3;
            },
          }),
          Object.defineProperty(exports, 'Power4', {
            enumerable: !0,
            get: function () {
              return e.Power4;
            },
          }),
          Object.defineProperty(exports, 'Linear', {
            enumerable: !0,
            get: function () {
              return e.Linear;
            },
          }),
          Object.defineProperty(exports, 'Quad', {
            enumerable: !0,
            get: function () {
              return e.Quad;
            },
          }),
          Object.defineProperty(exports, 'Cubic', {
            enumerable: !0,
            get: function () {
              return e.Cubic;
            },
          }),
          Object.defineProperty(exports, 'Quart', {
            enumerable: !0,
            get: function () {
              return e.Quart;
            },
          }),
          Object.defineProperty(exports, 'Quint', {
            enumerable: !0,
            get: function () {
              return e.Quint;
            },
          }),
          Object.defineProperty(exports, 'Strong', {
            enumerable: !0,
            get: function () {
              return e.Strong;
            },
          }),
          Object.defineProperty(exports, 'Elastic', {
            enumerable: !0,
            get: function () {
              return e.Elastic;
            },
          }),
          Object.defineProperty(exports, 'Back', {
            enumerable: !0,
            get: function () {
              return e.Back;
            },
          }),
          Object.defineProperty(exports, 'SteppedEase', {
            enumerable: !0,
            get: function () {
              return e.SteppedEase;
            },
          }),
          Object.defineProperty(exports, 'Bounce', {
            enumerable: !0,
            get: function () {
              return e.Bounce;
            },
          }),
          Object.defineProperty(exports, 'Sine', {
            enumerable: !0,
            get: function () {
              return e.Sine;
            },
          }),
          Object.defineProperty(exports, 'Expo', {
            enumerable: !0,
            get: function () {
              return e.Expo;
            },
          }),
          Object.defineProperty(exports, 'Circ', {
            enumerable: !0,
            get: function () {
              return e.Circ;
            },
          }),
          Object.defineProperty(exports, 'TweenLite', {
            enumerable: !0,
            get: function () {
              return e.TweenLite;
            },
          }),
          Object.defineProperty(exports, 'TimelineLite', {
            enumerable: !0,
            get: function () {
              return e.TimelineLite;
            },
          }),
          Object.defineProperty(exports, 'TimelineMax', {
            enumerable: !0,
            get: function () {
              return e.TimelineMax;
            },
          }),
          Object.defineProperty(exports, 'CSSPlugin', {
            enumerable: !0,
            get: function () {
              return r.CSSPlugin;
            },
          }),
          (exports.TweenMax = exports.default = exports.gsap = void 0);
        var e = require('./gsap-core.js'),
          r = require('./CSSPlugin.js'),
          t = e.gsap.registerPlugin(r.CSSPlugin) || e.gsap,
          n = t.core.Tween;
        (exports.TweenMax = n), (exports.default = exports.gsap = t);
      },
      { './gsap-core.js': 'TNS6', './CSSPlugin.js': 'bp4Z' },
    ],
    TgBN: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = exports.ScrollTrigger = void 0);
        var e,
          t,
          r,
          n,
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          f,
          p,
          d,
          h,
          g,
          v,
          m,
          x,
          y,
          b,
          w,
          C,
          T,
          k,
          O,
          E,
          M,
          S = 1,
          P = [],
          _ = [],
          R = Date.now,
          A = R(),
          z = 0,
          B = 1,
          L = function (e) {
            return e;
          },
          I = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          N = function () {
            return 'undefined' != typeof window;
          },
          F = function () {
            return e || (N() && (e = window.gsap) && e.registerPlugin && e);
          },
          D = function (e) {
            return !!~s.indexOf(e);
          },
          W = function (e, t) {
            return ~P.indexOf(e) && P[P.indexOf(e) + 1][t];
          },
          q = function (e, t) {
            var r = t.s,
              n = t.sc,
              o = _.indexOf(e),
              i = n === xe.sc ? 1 : 2;
            return (
              !~o && (o = _.push(e) - 1),
              _[o + i] ||
                (_[o + i] =
                  W(e, r) ||
                  (D(e)
                    ? n
                    : function (t) {
                        return arguments.length ? (e[r] = t) : e[r];
                      }))
            );
          },
          j = function (e) {
            return (
              W(e, 'getBoundingClientRect') ||
              (D(e)
                ? function () {
                    return (lt.width = r.innerWidth), (lt.height = r.innerHeight), lt;
                  }
                : function () {
                    return Ce(e);
                  })
            );
          },
          H = function (e, t, n) {
            var o = n.d,
              i = n.d2,
              s = n.a;
            return (s = W(e, 'getBoundingClientRect'))
              ? function () {
                  return s()[o];
                }
              : function () {
                  return (t ? r['inner' + i] : e['client' + i]) || 0;
                };
          },
          X = function (e, t) {
            return !t || ~P.indexOf(e)
              ? j(e)
              : function () {
                  return lt;
                };
          },
          Y = function (e, t) {
            var n = t.s,
              s = t.d2,
              a = t.d,
              l = t.a;
            return (n = 'scroll' + s) && (l = W(e, n))
              ? l() - j(e)()[a]
              : D(e)
              ? Math.max(o[n], i[n]) - (r['inner' + s] || o['client' + s] || i['client' + s])
              : e[n] - e['offset' + s];
          },
          V = function (e, t) {
            for (var r = 0; r < b.length; r += 3)
              (!t || ~t.indexOf(b[r + 1])) && e(b[r], b[r + 1], b[r + 2]);
          },
          U = function (e) {
            return 'string' == typeof e;
          },
          Z = function (e) {
            return 'function' == typeof e;
          },
          $ = function (e) {
            return 'number' == typeof e;
          },
          G = function (e) {
            return 'object' == typeof e;
          },
          J = function (e) {
            return Z(e) && e();
          },
          K = function (e, t) {
            return function () {
              var r = J(e),
                n = J(t);
              return function () {
                J(r), J(n);
              };
            };
          },
          Q = Math.abs,
          ee = 'scrollLeft',
          te = 'scrollTop',
          re = 'left',
          ne = 'top',
          oe = 'right',
          ie = 'bottom',
          se = 'width',
          ae = 'height',
          le = 'Right',
          ce = 'Left',
          ue = 'Top',
          fe = 'Bottom',
          pe = 'padding',
          de = 'margin',
          he = 'Width',
          ge = 'Height',
          ve = 'px',
          me = {
            s: ee,
            p: re,
            p2: ce,
            os: oe,
            os2: le,
            d: se,
            d2: he,
            a: 'x',
            sc: function (e) {
              return arguments.length
                ? r.scrollTo(e, xe.sc())
                : r.pageXOffset || n[ee] || o[ee] || i[ee] || 0;
            },
          },
          xe = {
            s: te,
            p: ne,
            p2: ue,
            os: ie,
            os2: fe,
            d: ae,
            d2: ge,
            a: 'y',
            op: me,
            sc: function (e) {
              return arguments.length
                ? r.scrollTo(me.sc(), e)
                : r.pageYOffset || n[te] || o[te] || i[te] || 0;
            },
          },
          ye = function (e) {
            return r.getComputedStyle(e);
          },
          be = function (e) {
            var t = ye(e).position;
            e.style.position = 'absolute' === t || 'fixed' === t ? t : 'relative';
          },
          we = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e;
          },
          Ce = function (t, r) {
            var n =
                r &&
                'matrix(1, 0, 0, 1, 0, 0)' !== ye(t)[v] &&
                e
                  .to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              o = t.getBoundingClientRect();
            return n && n.progress(0).kill(), o;
          },
          Te = function (e, t) {
            var r = t.d2;
            return e['offset' + r] || e['client' + r] || 0;
          },
          ke = function (e) {
            var t,
              r = [],
              n = e.labels,
              o = e.duration();
            for (t in n) r.push(n[t] / o);
            return r;
          },
          Oe = function (t) {
            return function (r) {
              return e.utils.snap(ke(t), r);
            };
          },
          Ee = function (e) {
            return function (t, r) {
              var n,
                o = ke(e);
              if (
                (o.sort(function (e, t) {
                  return e - t;
                }),
                r.direction > 0)
              ) {
                for (t -= 1e-4, n = 0; n < o.length; n++) if (o[n] >= t) return o[n];
                return o.pop();
              }
              for (n = o.length, t += 1e-4; n--; ) if (o[n] <= t) return o[n];
              return o[0];
            };
          },
          Me = function (e, t, r, n) {
            return r.split(',').forEach(function (r) {
              return e(t, r, n);
            });
          },
          Se = function (e, t, r) {
            return e.addEventListener(t, r, { passive: !0 });
          },
          Pe = function (e, t, r) {
            return e.removeEventListener(t, r);
          },
          _e = {
            startColor: 'green',
            endColor: 'red',
            indent: 0,
            fontSize: '16px',
            fontWeight: 'normal',
          },
          Re = { toggleActions: 'play', anticipatePin: 0 },
          Ae = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          ze = function (e, t) {
            if (U(e)) {
              var r = e.indexOf('='),
                n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
              ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
                (e =
                  n +
                  (e in Ae
                    ? Ae[e] * t
                    : ~e.indexOf('%')
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          Be = function (e, t, r, o, s, a, l) {
            var c = s.startColor,
              u = s.endColor,
              f = s.fontSize,
              p = s.indent,
              d = s.fontWeight,
              h = n.createElement('div'),
              g = D(r) || 'fixed' === W(r, 'pinType'),
              v = -1 !== e.indexOf('scroller'),
              m = g ? i : r,
              x = -1 !== e.indexOf('start'),
              y = x ? c : u,
              b =
                'border-color:' +
                y +
                ';font-size:' +
                f +
                ';color:' +
                y +
                ';font-weight:' +
                d +
                ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
            return (
              (b += 'position:' + (v && g ? 'fixed;' : 'absolute;')),
              (v || !g) && (b += (o === xe ? oe : ie) + ':' + (a + parseFloat(p)) + 'px;'),
              l && (b += 'box-sizing:border-box;text-align:left;width:' + l.offsetWidth + 'px;'),
              (h._isStart = x),
              h.setAttribute('class', 'gsap-marker-' + e),
              (h.style.cssText = b),
              (h.innerText = t || 0 === t ? e + '-' + t : e),
              m.children[0] ? m.insertBefore(h, m.children[0]) : m.appendChild(h),
              (h._offset = h['offset' + o.op.d2]),
              Le(h, 0, o, x),
              h
            );
          },
          Le = function (t, r, n, o) {
            var i = { display: 'block' },
              s = n[o ? 'os2' : 'p2'],
              a = n[o ? 'p2' : 'os2'];
            (t._isFlipped = o),
              (i[n.a + 'Percent'] = o ? -100 : 0),
              (i[n.a] = o ? '1px' : 0),
              (i['border' + s + he] = 1),
              (i['border' + a + he] = 0),
              (i[n.p] = r + 'px'),
              e.set(t, i);
          },
          Ie = [],
          Ne = {},
          Fe = function () {
            return c || (c = l(Qe));
          },
          De = function () {
            c || ((c = l(Qe)), z || Ve('scrollStart'), (z = R()));
          },
          We = function () {
            return !h && !T && !n.fullscreenElement && a.restart(!0);
          },
          qe = {},
          je = [],
          He = [],
          Xe = function (n) {
            var o,
              i = e.ticker.frame,
              s = [],
              a = 0;
            if (E !== i || S) {
              for ($e(); a < He.length; a += 4)
                (o = r.matchMedia(He[a]).matches) !== He[a + 3] &&
                  ((He[a + 3] = o), o ? s.push(a) : $e(1, He[a]) || (Z(He[a + 2]) && He[a + 2]()));
              for (Ze(), a = 0; a < s.length; a++)
                (o = s[a]), (O = He[o]), (He[o + 2] = He[o + 1](n));
              (O = 0), t && Ge(0, 1), (E = i), Ve('matchMedia');
            }
          },
          Ye = function e() {
            return Pe(dt, 'scrollEnd', e) || Ge(!0);
          },
          Ve = function (e) {
            return (
              (qe[e] &&
                qe[e].map(function (e) {
                  return e();
                })) ||
              je
            );
          },
          Ue = [],
          Ze = function (e) {
            for (var t = 0; t < Ue.length; t += 5)
              (e && Ue[t + 4] !== e) ||
                ((Ue[t].style.cssText = Ue[t + 1]),
                Ue[t].getBBox && Ue[t].setAttribute('transform', Ue[t + 2] || ''),
                (Ue[t + 3].uncache = 1));
          },
          $e = function (e, t) {
            var r;
            for (m = 0; m < Ie.length; m++)
              (r = Ie[m]), (t && r.media !== t) || (e ? r.kill(1) : r.revert());
            t && Ze(t), t || Ve('revert');
          },
          Ge = function (e, t) {
            if (!z || e) {
              M = !0;
              var r = Ve('refreshInit');
              w && dt.sort(),
                t || $e(),
                Ie.forEach(function (e) {
                  return e.refresh();
                }),
                r.forEach(function (e) {
                  return e && e.render && e.render(-1);
                }),
                _.forEach(function (e) {
                  return 'function' == typeof e && (e.rec = 0);
                }),
                a.pause(),
                (M = !1),
                Ve('refresh');
            } else Se(dt, 'scrollEnd', Ye);
          },
          Je = 0,
          Ke = 1,
          Qe = function () {
            if (!M) {
              var e = Ie.length,
                t = R(),
                r = t - A >= 50,
                n = e && Ie[0].scroll();
              if (
                ((Ke = Je > n ? -1 : 1),
                (Je = n),
                r && (z && !g && t - z > 200 && ((z = 0), Ve('scrollEnd')), (p = A), (A = t)),
                Ke < 0)
              ) {
                for (m = e; m-- > 0; ) Ie[m] && Ie[m].update(0, r);
                Ke = 1;
              } else for (m = 0; m < e; m++) Ie[m] && Ie[m].update(0, r);
              c = 0;
            }
          },
          et = [
            re,
            ne,
            ie,
            oe,
            de + fe,
            de + le,
            de + ue,
            de + ce,
            'display',
            'flexShrink',
            'float',
            'zIndex',
            'grid-column-start',
            'grid-column-end',
            'grid-row-start',
            'grid-row-end',
            'grid-area',
            'justify-self',
            'align-self',
            'place-self',
          ],
          tt = et.concat([
            se,
            ae,
            'boxSizing',
            'max' + he,
            'max' + ge,
            'position',
            de,
            pe,
            pe + ue,
            pe + le,
            pe + fe,
            pe + ce,
          ]),
          rt = function (e, t, r) {
            if ((it(r), e.parentNode === t)) {
              var n = t.parentNode;
              n && (n.insertBefore(e, t), n.removeChild(t));
            }
          },
          nt = function (e, t, r, n) {
            if (e.parentNode !== t) {
              for (var o, i = et.length, s = t.style, a = e.style; i--; ) s[(o = et[i])] = r[o];
              (s.position = 'absolute' === r.position ? 'absolute' : 'relative'),
                'inline' === r.display && (s.display = 'inline-block'),
                (a[ie] = a[oe] = 'auto'),
                (s.overflow = 'visible'),
                (s.boxSizing = 'border-box'),
                (s[se] = Te(e, me) + ve),
                (s[ae] = Te(e, xe) + ve),
                (s[pe] = a[de] = a[ne] = a[re] = '0'),
                it(n),
                (a[se] = a['max' + he] = r[se]),
                (a[ae] = a['max' + ge] = r[ae]),
                (a[pe] = r[pe]),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e);
            }
          },
          ot = /([A-Z])/g,
          it = function (t) {
            if (t) {
              var r,
                n,
                o = t.t.style,
                i = t.length,
                s = 0;
              for ((t.t._gsap || e.core.getCache(t.t)).uncache = 1; s < i; s += 2)
                (n = t[s + 1]),
                  (r = t[s]),
                  n ? (o[r] = n) : o[r] && o.removeProperty(r.replace(ot, '-$1').toLowerCase());
            }
          },
          st = function (e) {
            for (var t = tt.length, r = e.style, n = [], o = 0; o < t; o++) n.push(tt[o], r[tt[o]]);
            return (n.t = e), n;
          },
          at = function (e, t, r) {
            for (var n, o = [], i = e.length, s = r ? 8 : 0; s < i; s += 2)
              (n = e[s]), o.push(n, n in t ? t[n] : e[s + 1]);
            return (o.t = e.t), o;
          },
          lt = { left: 0, top: 0 },
          ct = function (e, t, r, n, s, a, l, c, f, p, d, h) {
            if (
              (Z(e) && (e = e(c)),
              U(e) &&
                'max' === e.substr(0, 3) &&
                (e = h + ('=' === e.charAt(4) ? ze('0' + e.substr(3), r) : 0)),
              $(e))
            )
              l && Le(l, r, n, !0);
            else {
              Z(t) && (t = t(c));
              var g,
                v,
                m,
                x = u(t)[0] || i,
                y = Ce(x) || {},
                b = e.split(' ');
              (y && (y.left || y.top)) ||
                'none' !== ye(x).display ||
                ((m = x.style.display),
                (x.style.display = 'block'),
                (y = Ce(x)),
                m ? (x.style.display = m) : x.style.removeProperty('display')),
                (g = ze(b[0], y[n.d])),
                (v = ze(b[1] || '0', r)),
                (e = y[n.p] - f[n.p] - p + g + s - v),
                l && Le(l, v, n, r - v < 20 || (l._isStart && v > 20)),
                (r -= r - v);
            }
            if (a) {
              var w = e + r,
                C = a._isStart;
              (h = 'scroll' + n.d2),
                Le(
                  a,
                  w,
                  n,
                  (C && w > 20) || (!C && (d ? Math.max(i[h], o[h]) : a.parentNode[h]) <= w + 1),
                ),
                d && ((f = Ce(l)), d && (a.style[n.op.p] = f[n.op.p] - n.op.m - a._offset + ve));
            }
            return Math.round(e);
          },
          ut = /(?:webkit|moz|length|cssText|inset)/i,
          ft = function (t, r, n, o) {
            if (t.parentNode !== r) {
              var s,
                a,
                l = t.style;
              if (r === i) {
                for (s in ((t._stOrig = l.cssText), (a = ye(t))))
                  +s ||
                    ut.test(s) ||
                    !a[s] ||
                    'string' != typeof l[s] ||
                    '0' === s ||
                    (l[s] = a[s]);
                (l.top = n), (l.left = o);
              } else l.cssText = t._stOrig;
              (e.core.getCache(t).uncache = 1), r.appendChild(t);
            }
          },
          pt = function (t, r) {
            var n,
              o,
              i = q(t, r),
              s = '_scroll' + r.p2,
              a = function r(a, l, c, u, f) {
                var p = r.tween,
                  d = l.onComplete,
                  h = {};
                return (
                  p && p.kill(),
                  (n = Math.round(c)),
                  (l[s] = a),
                  (l.modifiers = h),
                  (h[s] = function (e) {
                    return (
                      (e = I(i())) !== n && e !== o && Math.abs(e - n) > 2
                        ? (p.kill(), (r.tween = 0))
                        : (e = c + u * p.ratio + f * p.ratio * p.ratio),
                      (o = n),
                      (n = I(e))
                    );
                  }),
                  (l.onComplete = function () {
                    (r.tween = 0), d && d.call(p);
                  }),
                  (p = r.tween = e.to(t, l))
                );
              };
            return (
              (t[s] = i),
              t.addEventListener(
                'wheel',
                function () {
                  return a.tween && a.tween.kill() && (a.tween = 0);
                },
                { passive: !0 },
              ),
              a
            );
          };
        me.op = xe;
        var dt = (function () {
          function c(r, n) {
            t || c.register(e) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
              this.init(r, n);
          }
          return (
            (c.prototype.init = function (t, s) {
              if (((this.progress = this.start = 0), this.vars && this.kill(1), B)) {
                var a,
                  l,
                  d,
                  v,
                  x,
                  y,
                  b,
                  T,
                  E,
                  M,
                  _,
                  A,
                  I,
                  N,
                  F,
                  j,
                  V,
                  J,
                  K,
                  ee,
                  te,
                  re,
                  ne,
                  oe,
                  ie,
                  ke,
                  Me,
                  Ae,
                  Le,
                  Fe,
                  qe,
                  je,
                  He,
                  Xe,
                  Ve,
                  Ue,
                  Ze = (t = we(U(t) || $(t) || t.nodeType ? { trigger: t } : t, Re)).horizontal
                    ? me
                    : xe,
                  $e = t,
                  Ge = $e.onUpdate,
                  Je = $e.toggleClass,
                  Qe = $e.id,
                  et = $e.onToggle,
                  tt = $e.onRefresh,
                  ot = $e.scrub,
                  lt = $e.trigger,
                  ut = $e.pin,
                  dt = $e.pinSpacing,
                  ht = $e.invalidateOnRefresh,
                  gt = $e.anticipatePin,
                  vt = $e.onScrubComplete,
                  mt = $e.onSnapComplete,
                  xt = $e.once,
                  yt = $e.snap,
                  bt = $e.pinReparent,
                  wt = !ot && 0 !== ot,
                  Ct = u(t.scroller || r)[0],
                  Tt = e.core.getCache(Ct),
                  kt = D(Ct),
                  Ot = 'pinType' in t ? 'fixed' === t.pinType : kt || 'fixed' === W(Ct, 'pinType'),
                  Et = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  Mt = wt && t.toggleActions.split(' '),
                  St = 'markers' in t ? t.markers : Re.markers,
                  Pt = kt ? 0 : parseFloat(ye(Ct)['border' + Ze.p2 + he]) || 0,
                  _t = this,
                  Rt =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(_t);
                    },
                  At = H(Ct, kt, Ze),
                  zt = X(Ct, kt),
                  Bt = 0;
                (_t.media = O),
                  (gt *= 45),
                  (_t.scroller = Ct),
                  (_t.scroll = q(Ct, Ze)),
                  (v = _t.scroll()),
                  (_t.vars = t),
                  (s = s || t.animation),
                  'refreshPriority' in t && (w = 1),
                  (Tt.tweenScroll = Tt.tweenScroll || { top: pt(Ct, xe), left: pt(Ct, me) }),
                  (_t.tweenTo = a = Tt.tweenScroll[Ze.p]),
                  s &&
                    ((s.vars.lazy = !1),
                    s._initted ||
                      (!1 !== s.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        s.render(0, !0, !0)),
                    (_t.animation = s.pause()),
                    (s.scrollTrigger = _t),
                    (qe = $(ot) && ot) &&
                      (Fe = e.to(s, {
                        ease: 'power3',
                        duration: qe,
                        onComplete: function () {
                          return vt && vt(_t);
                        },
                      })),
                    (Ae = 0),
                    Qe || (Qe = s.vars.id)),
                  Ie.push(_t),
                  yt &&
                    ((G(yt) && !yt.push) || (yt = { snapTo: yt }),
                    'scrollBehavior' in i.style &&
                      e.set(kt ? [i, o] : Ct, { scrollBehavior: 'auto' }),
                    (d = Z(yt.snapTo)
                      ? yt.snapTo
                      : 'labels' === yt.snapTo
                      ? Oe(s)
                      : 'labelsDirectional' === yt.snapTo
                      ? Ee(s)
                      : e.utils.snap(yt.snapTo)),
                    (je = yt.duration || { min: 0.1, max: 2 }),
                    (je = G(je) ? f(je.min, je.max) : f(je, je)),
                    (He = e
                      .delayedCall(yt.delay || qe / 2 || 0.1, function () {
                        if (Math.abs(_t.getVelocity()) < 10 && !g && Bt !== _t.scroll()) {
                          var t = s && !wt ? s.totalProgress() : _t.progress,
                            r = ((t - Le) / (R() - p)) * 1e3 || 0,
                            n = e.utils.clamp(
                              -_t.progress,
                              1 - _t.progress,
                              (Q(r / 2) * r) / 0.185,
                            ),
                            o = _t.progress + (!1 === yt.inertia ? 0 : n),
                            i = f(0, 1, d(o, _t)),
                            l = _t.scroll(),
                            c = Math.round(y + i * I),
                            u = yt,
                            h = u.onStart,
                            v = u.onInterrupt,
                            m = u.onComplete,
                            x = a.tween;
                          if (l <= b && l >= y && c !== l) {
                            if (x && !x._initted && x.data <= Math.abs(c - l)) return;
                            !1 === yt.inertia && (n = i - _t.progress),
                              a(
                                c,
                                {
                                  duration: je(
                                    Q((0.185 * Math.max(Q(o - t), Q(i - t))) / r / 0.05 || 0),
                                  ),
                                  ease: yt.ease || 'power3',
                                  data: Math.abs(c - l),
                                  onInterrupt: function () {
                                    return He.restart(!0) && v && v(_t);
                                  },
                                  onComplete: function () {
                                    (Bt = _t.scroll()),
                                      (Ae = Le = s && !wt ? s.totalProgress() : _t.progress),
                                      mt && mt(_t),
                                      m && m(_t);
                                  },
                                },
                                l,
                                n * I,
                                c - l - n * I,
                              ),
                              h && h(_t, a.tween);
                          }
                        } else _t.isActive && He.restart(!0);
                      })
                      .pause())),
                  Qe && (Ne[Qe] = _t),
                  (lt = _t.trigger = u(lt || ut)[0]),
                  (ut = !0 === ut ? lt : u(ut)[0]),
                  U(Je) && (Je = { targets: lt, className: Je }),
                  ut &&
                    (!1 === dt ||
                      dt === de ||
                      (dt = !(!dt && 'flex' === ye(ut.parentNode).display) && pe),
                    (_t.pin = ut),
                    !1 !== t.force3D && e.set(ut, { force3D: !0 }),
                    (l = e.core.getCache(ut)).spacer
                      ? (N = l.pinState)
                      : ((l.spacer = V = n.createElement('div')),
                        V.setAttribute('class', 'pin-spacer' + (Qe ? ' pin-spacer-' + Qe : '')),
                        (l.pinState = N = st(ut))),
                    (_t.spacer = V = l.spacer),
                    (Me = ye(ut)),
                    (ne = Me[dt + Ze.os2]),
                    (K = e.getProperty(ut)),
                    (ee = e.quickSetter(ut, Ze.a, ve)),
                    nt(ut, V, Me),
                    (j = st(ut))),
                  St &&
                    ((A = G(St) ? we(St, _e) : _e),
                    (M = Be('scroller-start', Qe, Ct, Ze, A, 0)),
                    (_ = Be('scroller-end', Qe, Ct, Ze, A, 0, M)),
                    (J = M['offset' + Ze.op.d2]),
                    (T = Be('start', Qe, Ct, Ze, A, J)),
                    (E = Be('end', Qe, Ct, Ze, A, J)),
                    Ot ||
                      (P.length && !0 === W(Ct, 'fixedMarkers')) ||
                      (be(kt ? i : Ct),
                      e.set([M, _], { force3D: !0 }),
                      (ie = e.quickSetter(M, Ze.a, ve)),
                      (ke = e.quickSetter(_, Ze.a, ve)))),
                  (_t.revert = function (e) {
                    var t = !1 !== e || !_t.enabled,
                      r = h;
                    t !== _t.isReverted &&
                      (t &&
                        (_t.scroll.rec || (_t.scroll.rec = _t.scroll()),
                        (Ve = Math.max(_t.scroll(), _t.scroll.rec || 0)),
                        (Xe = _t.progress),
                        (Ue = s && s.progress())),
                      T &&
                        [T, E, M, _].forEach(function (e) {
                          return (e.style.display = t ? 'none' : 'block');
                        }),
                      t && (h = 1),
                      _t.update(t),
                      (h = r),
                      ut && (t ? rt(ut, V, N) : (!bt || !_t.isActive) && nt(ut, V, ye(ut), oe)),
                      (_t.isReverted = t));
                  }),
                  (_t.refresh = function (r, n) {
                    if ((!h && _t.enabled) || n)
                      if (ut && r && z) Se(c, 'scrollEnd', Ye);
                      else {
                        (h = 1),
                          Fe && Fe.pause(),
                          ht && s && s.progress(0).invalidate(),
                          _t.isReverted || _t.revert();
                        for (
                          var o,
                            a,
                            l,
                            f,
                            p,
                            d,
                            g,
                            m,
                            w,
                            k,
                            O = At(),
                            S = zt(),
                            P = Y(Ct, Ze),
                            R = 0,
                            A = 0,
                            B = t.end,
                            L = t.endTrigger || lt,
                            D = t.start || (0 !== t.start && lt ? (ut ? '0 0' : '0 100%') : 0),
                            W = t.pinnedContainer && u(t.pinnedContainer)[0],
                            H = (lt && Math.max(0, Ie.indexOf(_t))) || 0,
                            X = H;
                          X--;

                        )
                          (d = Ie[X]).end || d.refresh(0, 1) || (h = 1),
                            !(g = d.pin) ||
                              (g !== lt && g !== ut) ||
                              d.isReverted ||
                              (k || (k = []), k.unshift(d), d.revert());
                        for (
                          y =
                            ct(D, lt, O, Ze, _t.scroll(), T, M, _t, S, Pt, Ot, P) ||
                            (ut ? -0.001 : 0),
                            Z(B) && (B = B(_t)),
                            U(B) &&
                              !B.indexOf('+=') &&
                              (~B.indexOf(' ')
                                ? (B = (U(D) ? D.split(' ')[0] : '') + B)
                                : ((R = ze(B.substr(2), O)), (B = U(D) ? D : y + R), (L = lt))),
                            b =
                              Math.max(
                                y,
                                ct(
                                  B || (L ? '100% 0' : P),
                                  L,
                                  O,
                                  Ze,
                                  _t.scroll() + R,
                                  E,
                                  _,
                                  _t,
                                  S,
                                  Pt,
                                  Ot,
                                  P,
                                ),
                              ) || -0.001,
                            I = b - y || ((y -= 0.01) && 0.001),
                            R = 0,
                            X = H;
                          X--;

                        )
                          (g = (d = Ie[X]).pin) &&
                            d.start - d._pinPush < y &&
                            ((o = d.end - d.start),
                            (g === lt || g === W) && (R += o),
                            g === ut && (A += o));
                        if (
                          ((y += R),
                          (b += R),
                          (_t._pinPush = A),
                          T &&
                            R &&
                            (((o = {})[Ze.a] = '+=' + R),
                            W && (o[Ze.p] = '-=' + _t.scroll()),
                            e.set([T, E], o)),
                          ut)
                        )
                          (o = ye(ut)),
                            (f = Ze === xe),
                            (l = _t.scroll()),
                            (te = parseFloat(K(Ze.a)) + A),
                            !P && b > 1 && ((kt ? i : Ct).style['overflow-' + Ze.a] = 'scroll'),
                            nt(ut, V, o),
                            (j = st(ut)),
                            (a = Ce(ut, !0)),
                            (m = Ot && q(Ct, f ? me : xe)()),
                            dt &&
                              (((oe = [dt + Ze.os2, I + A + ve]).t = V),
                              (X = dt === pe ? Te(ut, Ze) + I + A : 0) && oe.push(Ze.d, X + ve),
                              it(oe),
                              Ot && _t.scroll(Ve)),
                            Ot &&
                              (((p = {
                                top: a.top + (f ? l - y : m) + ve,
                                left: a.left + (f ? m : l - y) + ve,
                                boxSizing: 'border-box',
                                position: 'fixed',
                              })[se] = p['max' + he] =
                                Math.ceil(a.width) + ve),
                              (p[ae] = p['max' + ge] = Math.ceil(a.height) + ve),
                              (p[de] = p[de + ue] = p[de + le] = p[de + fe] = p[de + ce] = '0'),
                              (p[pe] = o[pe]),
                              (p[pe + ue] = o[pe + ue]),
                              (p[pe + le] = o[pe + le]),
                              (p[pe + fe] = o[pe + fe]),
                              (p[pe + ce] = o[pe + ce]),
                              (F = at(N, p, bt))),
                            s
                              ? ((w = s._initted),
                                C(1),
                                s.render(s.duration(), !0, !0),
                                (re = K(Ze.a) - te + I + A),
                                I !== re && F.splice(F.length - 2, 2),
                                s.render(0, !0, !0),
                                w || s.invalidate(),
                                C(0))
                              : (re = I);
                        else if (lt && _t.scroll())
                          for (a = lt.parentNode; a && a !== i; )
                            a._pinOffset && ((y -= a._pinOffset), (b -= a._pinOffset)),
                              (a = a.parentNode);
                        k &&
                          k.forEach(function (e) {
                            return e.revert(!1);
                          }),
                          (_t.start = y),
                          (_t.end = b),
                          (v = x = _t.scroll()) < Ve && _t.scroll(Ve),
                          _t.revert(!1),
                          (h = 0),
                          s &&
                            wt &&
                            s._initted &&
                            s.progress() !== Ue &&
                            s.progress(Ue, !0).render(s.time(), !0, !0),
                          Xe !== _t.progress &&
                            (Fe && s.totalProgress(Xe, !0), (_t.progress = Xe), _t.update()),
                          ut && dt && (V._pinOffset = Math.round(_t.progress * re)),
                          tt && tt(_t);
                      }
                  }),
                  (_t.getVelocity = function () {
                    return ((_t.scroll() - x) / (R() - p)) * 1e3 || 0;
                  }),
                  (_t.update = function (e, t) {
                    var r,
                      n,
                      o,
                      l,
                      c,
                      f = _t.scroll(),
                      d = e ? 0 : (f - y) / I,
                      g = d < 0 ? 0 : d > 1 ? 1 : d || 0,
                      m = _t.progress;
                    if (
                      (t &&
                        ((x = v),
                        (v = f),
                        yt && ((Le = Ae), (Ae = s && !wt ? s.totalProgress() : g))),
                      gt &&
                        !g &&
                        ut &&
                        !h &&
                        !S &&
                        z &&
                        y < f + ((f - x) / (R() - p)) * gt &&
                        (g = 1e-4),
                      g !== m && _t.enabled)
                    ) {
                      if (
                        ((l =
                          (c = (r = _t.isActive = !!g && g < 1) !== (!!m && m < 1)) || !!g != !!m),
                        (_t.direction = g > m ? 1 : -1),
                        (_t.progress = g),
                        wt ||
                          (!Fe || h || S
                            ? s && s.totalProgress(g, !!h)
                            : ((Fe.vars.totalProgress = g), Fe.invalidate().restart())),
                        ut)
                      )
                        if ((e && dt && (V.style[dt + Ze.os2] = ne), Ot)) {
                          if (l) {
                            if (((o = !e && g > m && b + 1 > f && f + 1 >= Y(Ct, Ze)), bt))
                              if (e || (!r && !o)) ft(ut, V);
                              else {
                                var w = Ce(ut, !0),
                                  C = f - y;
                                ft(
                                  ut,
                                  i,
                                  w.top + (Ze === xe ? C : 0) + ve,
                                  w.left + (Ze === xe ? 0 : C) + ve,
                                );
                              }
                            it(r || o ? F : j),
                              (re !== I && g < 1 && r) || ee(te + (1 !== g || o ? 0 : re));
                          }
                        } else ee(te + re * g);
                      yt && !a.tween && !h && !S && He.restart(!0),
                        Je &&
                          (c || (xt && g && (g < 1 || !k))) &&
                          u(Je.targets).forEach(function (e) {
                            return e.classList[r || xt ? 'add' : 'remove'](Je.className);
                          }),
                        Ge && !wt && !e && Ge(_t),
                        l && !h
                          ? ((n = g && !m ? 0 : 1 === g ? 1 : 1 === m ? 2 : 3),
                            wt &&
                              ((o = (!c && 'none' !== Mt[n + 1] && Mt[n + 1]) || Mt[n]),
                              s &&
                                ('complete' === o || 'reset' === o || o in s) &&
                                ('complete' === o
                                  ? s.pause().totalProgress(1)
                                  : 'reset' === o
                                  ? s.restart(!0).pause()
                                  : 'restart' === o
                                  ? s.restart(!0)
                                  : s[o]()),
                              Ge && Ge(_t)),
                            (!c && k) ||
                              (et && c && et(_t),
                              Et[n] && Et[n](_t),
                              xt && (1 === g ? _t.kill(!1, 1) : (Et[n] = 0)),
                              c || (Et[(n = 1 === g ? 1 : 3)] && Et[n](_t))))
                          : wt && Ge && !h && Ge(_t);
                    }
                    ke && (ie(f + (M._isFlipped ? 1 : 0)), ke(f));
                  }),
                  (_t.enable = function (e, t) {
                    _t.enabled ||
                      ((_t.enabled = !0),
                      Se(Ct, 'resize', We),
                      Se(Ct, 'scroll', De),
                      Rt && Se(c, 'refreshInit', Rt),
                      !1 !== e && ((_t.progress = Xe = 0), (v = x = Bt = _t.scroll())),
                      !1 !== t && _t.refresh());
                  }),
                  (_t.getTween = function (e) {
                    return e && a ? a.tween : Fe;
                  }),
                  (_t.disable = function (e, t) {
                    if (
                      _t.enabled &&
                      (!1 !== e && _t.revert(),
                      (_t.enabled = _t.isActive = !1),
                      t || (Fe && Fe.pause()),
                      (Ve = 0),
                      l && (l.uncache = 1),
                      Rt && Pe(c, 'refreshInit', Rt),
                      He && (He.pause(), a.tween && a.tween.kill() && (a.tween = 0)),
                      !kt)
                    ) {
                      for (var r = Ie.length; r--; )
                        if (Ie[r].scroller === Ct && Ie[r] !== _t) return;
                      Pe(Ct, 'resize', We), Pe(Ct, 'scroll', De);
                    }
                  }),
                  (_t.kill = function (e, t) {
                    _t.disable(e, t), Qe && delete Ne[Qe];
                    var r = Ie.indexOf(_t);
                    Ie.splice(r, 1),
                      r === m && Ke > 0 && m--,
                      (r = 0),
                      Ie.forEach(function (e) {
                        return e.scroller === _t.scroller && (r = 1);
                      }),
                      r || (_t.scroll.rec = 0),
                      s && ((s.scrollTrigger = null), e && s.render(-1), t || s.kill()),
                      T &&
                        [T, E, M, _].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      ut &&
                        (l && (l.uncache = 1),
                        (r = 0),
                        Ie.forEach(function (e) {
                          return e.pin === ut && r++;
                        }),
                        r || (l.spacer = 0));
                  }),
                  _t.enable(!1, !1),
                  s && s.add && !I
                    ? e.delayedCall(0.01, function () {
                        return y || b || _t.refresh();
                      }) &&
                      (I = 0.01) &&
                      (y = b = 0)
                    : _t.refresh();
              } else this.update = this.refresh = this.kill = L;
            }),
            (c.register = function (p) {
              if (
                !t &&
                ((e = p || F()),
                N() &&
                  window.document &&
                  ((r = window), (n = document), (o = n.documentElement), (i = n.body)),
                e &&
                  ((u = e.utils.toArray),
                  (f = e.utils.clamp),
                  (C = e.core.suppressOverwrites || L),
                  e.core.globals('ScrollTrigger', c),
                  i))
              ) {
                (l =
                  r.requestAnimationFrame ||
                  function (e) {
                    return setTimeout(e, 16);
                  }),
                  Se(r, 'wheel', De),
                  (s = [r, n, o, i]),
                  Se(n, 'scroll', De);
                var h,
                  m = i.style,
                  w = m.borderTop;
                (m.borderTop = '1px solid #000'),
                  (h = Ce(i)),
                  (xe.m = Math.round(h.top + xe.sc()) || 0),
                  (me.m = Math.round(h.left + me.sc()) || 0),
                  w ? (m.borderTop = w) : m.removeProperty('border-top'),
                  (d = setInterval(Fe, 200)),
                  e.delayedCall(0.5, function () {
                    return (S = 0);
                  }),
                  Se(n, 'touchcancel', L),
                  Se(i, 'touchstart', L),
                  Me(Se, n, 'pointerdown,touchstart,mousedown', function () {
                    return (g = 1);
                  }),
                  Me(Se, n, 'pointerup,touchend,mouseup', function () {
                    return (g = 0);
                  }),
                  (v = e.utils.checkPrefix('transform')),
                  tt.push(v),
                  (t = R()),
                  (a = e.delayedCall(0.2, Ge).pause()),
                  (b = [
                    n,
                    'visibilitychange',
                    function () {
                      var e = r.innerWidth,
                        t = r.innerHeight;
                      n.hidden ? ((x = e), (y = t)) : (x === e && y === t) || We();
                    },
                    n,
                    'DOMContentLoaded',
                    Ge,
                    r,
                    'load',
                    function () {
                      return z || Ge();
                    },
                    r,
                    'resize',
                    We,
                  ]),
                  V(Se);
              }
              return t;
            }),
            (c.defaults = function (e) {
              for (var t in e) Re[t] = e[t];
            }),
            (c.kill = function () {
              (B = 0),
                Ie.slice(0).forEach(function (e) {
                  return e.kill(1);
                });
            }),
            (c.config = function (e) {
              'limitCallbacks' in e && (k = !!e.limitCallbacks);
              var t = e.syncInterval;
              (t && clearInterval(d)) || ((d = t) && setInterval(Fe, t)),
                'autoRefreshEvents' in e &&
                  (V(Pe) || V(Se, e.autoRefreshEvents || 'none'),
                  (T = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
            }),
            (c.scrollerProxy = function (e, t) {
              var n = u(e)[0],
                s = _.indexOf(n),
                a = D(n);
              ~s && _.splice(s, a ? 6 : 2), a ? P.unshift(r, t, i, t, o, t) : P.unshift(n, t);
            }),
            (c.matchMedia = function (e) {
              var t, n, o, i, s;
              for (n in e)
                (o = He.indexOf(n)),
                  (i = e[n]),
                  (O = n),
                  'all' === n
                    ? i()
                    : (t = r.matchMedia(n)) &&
                      (t.matches && (s = i()),
                      ~o
                        ? ((He[o + 1] = K(He[o + 1], i)), (He[o + 2] = K(He[o + 2], s)))
                        : ((o = He.length),
                          He.push(n, i, s),
                          t.addListener ? t.addListener(Xe) : t.addEventListener('change', Xe)),
                      (He[o + 3] = t.matches)),
                  (O = 0);
              return He;
            }),
            (c.clearMatchMedia = function (e) {
              e || (He.length = 0), (e = He.indexOf(e)) >= 0 && He.splice(e, 4);
            }),
            c
          );
        })();
        (exports.default = exports.ScrollTrigger = dt),
          (dt.version = '3.7.1'),
          (dt.saveStyles = function (t) {
            return t
              ? u(t).forEach(function (t) {
                  if (t && t.style) {
                    var r = Ue.indexOf(t);
                    r >= 0 && Ue.splice(r, 5),
                      Ue.push(
                        t,
                        t.style.cssText,
                        t.getBBox && t.getAttribute('transform'),
                        e.core.getCache(t),
                        O,
                      );
                  }
                })
              : Ue;
          }),
          (dt.revert = function (e, t) {
            return $e(!e, t);
          }),
          (dt.create = function (e, t) {
            return new dt(e, t);
          }),
          (dt.refresh = function (e) {
            return e ? We() : Ge(!0);
          }),
          (dt.update = Qe),
          (dt.maxScroll = function (e, t) {
            return Y(e, t ? me : xe);
          }),
          (dt.getScrollFunc = function (e, t) {
            return q(u(e)[0], t ? me : xe);
          }),
          (dt.getById = function (e) {
            return Ne[e];
          }),
          (dt.getAll = function () {
            return Ie.slice(0);
          }),
          (dt.isScrolling = function () {
            return !!z;
          }),
          (dt.addEventListener = function (e, t) {
            var r = qe[e] || (qe[e] = []);
            ~r.indexOf(t) || r.push(t);
          }),
          (dt.removeEventListener = function (e, t) {
            var r = qe[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1);
          }),
          (dt.batch = function (t, r) {
            var n,
              o = [],
              i = {},
              s = r.interval || 0.016,
              a = r.batchMax || 1e9,
              l = function (t, r) {
                var n = [],
                  o = [],
                  i = e
                    .delayedCall(s, function () {
                      r(n, o), (n = []), (o = []);
                    })
                    .pause();
                return function (e) {
                  n.length || i.restart(!0),
                    n.push(e.trigger),
                    o.push(e),
                    a <= n.length && i.progress(1);
                };
              };
            for (n in r)
              i[n] =
                'on' === n.substr(0, 2) && Z(r[n]) && 'onRefreshInit' !== n ? l(0, r[n]) : r[n];
            return (
              Z(a) &&
                ((a = a()),
                Se(dt, 'refresh', function () {
                  return (a = r.batchMax());
                })),
              u(t).forEach(function (e) {
                var t = {};
                for (n in i) t[n] = i[n];
                (t.trigger = e), o.push(dt.create(t));
              }),
              o
            );
          }),
          (dt.sort = function (e) {
            return Ie.sort(
              e ||
                function (e, t) {
                  return (
                    -1e6 * (e.vars.refreshPriority || 0) +
                    e.start -
                    (t.start + -1e6 * (t.vars.refreshPriority || 0))
                  );
                },
            );
          }),
          F() && e.registerPlugin(dt);
      },
      {},
    ],
    CwZM: [
      function (require, module, exports) {
        'use strict';
        var r = require('gsap'),
          g = require('gsap/ScrollTrigger');
        r.gsap.registerPlugin(g.ScrollTrigger),
          r.gsap.to('#home-bg-image', { scrollTrigger: { scrub: 1 }, y: -500 }),
          r.gsap.to('#photo-title', { scrollTrigger: { scrub: 1 }, y: -600 }),
          r.gsap.to('#bg-second', { scrollTrigger: { scrub: 1 }, x: 500 }),
          r.gsap.to('#main-text', { scrollTrigger: { scrub: 1 }, y: -800 }),
          r.gsap.to('#video-frame', { scrollTrigger: { scrub: 1 }, y: -100 }),
          r.gsap.to('#main-second-text', { scrollTrigger: { scrub: 1 }, y: 500 }),
          r.gsap.to('#main-second-logo', { scrollTrigger: { scrub: 1 }, y: -300 }),
          r.gsap.to('#img-first', { scrollTrigger: { scrub: 1 }, y: -1200 }),
          r.gsap.to('#iframe-home', { scrollTrigger: { scrub: 1 }, y: -200 }),
          r.gsap.to('#video-title', { scrollTrigger: { scrub: 1 }, y: -250 });
      },
      { gsap: 'TpQl', 'gsap/ScrollTrigger': 'TgBN' },
    ],
  },
  {},
  ['CwZM'],
  null,
);
//# sourceMappingURL=./gsap.f1cee4f9.js.map
