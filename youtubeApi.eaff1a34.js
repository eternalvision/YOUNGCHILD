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
    eqdS: [
      function (require, module, exports) {
        var t = 'AIzaSyAOrcr2nI9FoBHSvsUvSD7kBIB_7PDPkJA',
          e = 'PLfXL1l9xwHtzUye_4Ls1tUFzRxHaNtWKt',
          a = 'https://www.googleapis.com/youtube/v3/playlistItems',
          i = { part: 'snippet', key: t, maxResults: 40, playlistId: e };
        function n() {
          $.getJSON(a, i, function (t) {
            l(t.items[0].snippet.resourceId.videoId, t), s(t);
          });
        }
        function s(t) {
          $.each(t.items, function (t, e) {
            var a = e.snippet.thumbnails.medium.url,
              i = e.snippet.title,
              n = e.snippet.description.substring(0, 100),
              s = e.snippet.resourceId.videoId;
            $('main').append(
              `\n\t\t\t\t\t\t\t<article class="item" data-key="${s}">\n\n\t\t\t\t\t\t\t\t<img src="${a}" alt="" class="thumb">\n\t\t\t\t\t\t\t\t<div class="details">\n\t\t\t\t\t\t\t\t\t<h4 data-pointer-type="content" class="details-title">${i}</h4>\n\t\t\t\t\t\t\t\t\t<p data-pointer-type="content" class="details-paragraph">${n}</p>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t`,
            );
          });
        }
        function l(t, e) {
          $('#video').html(
            `\n    \t\t\t<iframe src="https://www.youtube.com/embed/${t}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n    \t\t`,
          );
        }
        n(),
          $('main').on('click', 'article', function () {
            l($(this).attr('data-key'));
          });
      },
      {},
    ],
  },
  {},
  ['eqdS'],
  null,
);
//# sourceMappingURL=./youtubeApi.eaff1a34.js.map
