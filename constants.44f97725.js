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
    MuPq: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.textarea =
            exports.submit =
            exports.email =
            exports.number =
            exports.name =
            exports.langChange =
            exports.aboutSite =
            exports.tAuthor =
            exports.sAuthor =
            exports.fAuthor =
            exports.designer =
            exports.creatDr =
            exports.artDr =
            exports.menuHelp =
            exports.menuHome =
            exports.menuAbout =
            exports.menu =
            exports.footerTitle =
            exports.AUTHORSCLOSE =
            exports.OPENEL =
            exports.HIDEEL =
            exports.countryChangeThird =
            exports.countryChangeSecond =
            exports.countryChangeFirst =
            exports.actionBtn =
            exports.searchPhotos =
            exports.search =
            exports.getRefs =
            exports.HREF =
            exports.API_URL =
            exports.API_KEY =
              void 0);
        const e = '22714133-87c7cc427dfc460d08f350db1';
        exports.API_KEY = e;
        const t = 'https://pixabay.com/api/';
        exports.API_URL = t;
        let o = document.URL.split('?');
        if (((exports.HREF = o), o[1])) {
          let e = decodeURI(o[1].split('=')[1]).trim();
          (o[1] = e.split('#')[0]), (o[2] = o[1].split('+').join(' '));
        }
        const r = () => ({
          searchBox: document.querySelector('#search'),
          searchButton: document.querySelector('#searchPhotos'),
          gallerySection: document.querySelector('.gallery'),
          nextBtn: document.querySelector('.sl-next'),
        });
        exports.getRefs = r;
        const s = document.querySelector('#search');
        exports.search = s;
        const c = document.querySelector('#searchPhotos');
        exports.searchPhotos = c;
        const n = document.querySelector('.nav-btn-js');
        exports.actionBtn = n;
        const u = document.querySelector('.first-country-change');
        exports.countryChangeFirst = u;
        const p = document.querySelector('.second-country-change');
        exports.countryChangeSecond = p;
        const x = document.querySelector('.third-country-change');
        exports.countryChangeThird = x;
        const a = document.querySelector('#authors-hide');
        exports.HIDEEL = a;
        const m = document.querySelector('#authors-open');
        exports.OPENEL = m;
        const l = document.querySelector('.authors');
        exports.AUTHORSCLOSE = l;
        const d = document.querySelector('#footer-title');
        exports.footerTitle = d;
        const h = document.querySelector('#menu');
        exports.menu = h;
        const y = document.querySelector('#menuAbout');
        exports.menuAbout = y;
        const S = document.querySelector('#menuHome');
        exports.menuHome = S;
        const i = document.querySelector('#menuHelp');
        exports.menuHelp = i;
        const q = document.querySelector('#artDir');
        exports.artDr = q;
        const g = document.querySelector('#creatDir');
        exports.creatDr = g;
        const b = document.querySelector('#Design');
        exports.designer = b;
        const A = document.querySelector('#FirsAuthor');
        exports.fAuthor = A;
        const E = document.querySelector('#SecAuthor');
        exports.sAuthor = E;
        const L = document.querySelector('#ThrAuthor');
        exports.tAuthor = L;
        const f = document.querySelector('#aboutSite');
        exports.aboutSite = f;
        const H = document.querySelector('#langChange');
        exports.langChange = H;
        const C = document.querySelector('#nameLabel');
        exports.name = C;
        const P = document.querySelector('#numberLabel');
        exports.number = P;
        const R = document.querySelector('#emailLabel');
        exports.email = R;
        const D = document.querySelector('#submit');
        exports.submit = D;
        const I = document.querySelector('#textareaLabel');
        exports.textarea = I;
      },
      {},
    ],
  },
  {},
  ['MuPq'],
  null,
);
//# sourceMappingURL=./constants.44f97725.js.map
