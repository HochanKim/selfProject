"use strict";
var PortOne = (() => {
  var hi = Object.create;
  var oe = Object.defineProperty;
  var Li = Object.getOwnPropertyDescriptor;
  var ki = Object.getOwnPropertyNames;
  var Mi = Object.getPrototypeOf,
    Vi = Object.prototype.hasOwnProperty;
  var R = (i, e) => oe(i, "name", { value: e, configurable: !0 });
  var Gi = (i, e) => () => (
      e || i((e = { exports: {} }).exports, e), e.exports
    ),
    ve = (i, e) => {
      for (var r in e) oe(i, r, { get: e[r], enumerable: !0 });
    },
    ni = (i, e, r, o) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let p of ki(e))
          !Vi.call(i, p) &&
            p !== r &&
            oe(i, p, {
              get: () => e[p],
              enumerable: !(o = Li(e, p)) || o.enumerable,
            });
      return i;
    };
  var Fi = (i, e, r) => (
      (r = i != null ? hi(Mi(i)) : {}),
      ni(
        e || !i || !i.__esModule
          ? oe(r, "default", { value: i, enumerable: !0 })
          : r,
        i
      )
    ),
    xi = (i) => ni(oe({}, "__esModule", { value: !0 }), i);
  var ai = Gi((ae, Ce) => {
    (function (i, e) {
      "use strict";
      var r = "1.0.35",
        o = "",
        p = "?",
        N = "function",
        c = "undefined",
        d = "object",
        l = "string",
        E = "major",
        t = "model",
        s = "name",
        n = "type",
        a = "vendor",
        _ = "version",
        S = "architecture",
        ie = "console",
        I = "mobile",
        T = "tablet",
        L = "smarttv",
        Z = "wearable",
        fe = "embedded",
        Pe = 350,
        Re = "Amazon",
        re = "Apple",
        je = "ASUS",
        Je = "BlackBerry",
        z = "Browser",
        ce = "Chrome",
        Bi = "Edge",
        Ee = "Firefox",
        le = "Google",
        qe = "Huawei",
        ue = "LG",
        Oe = "Microsoft",
        We = "Motorola",
        de = "Opera",
        Se = "Samsung",
        Ze = "Sharp",
        Ne = "Sony",
        Cr = "Viera",
        Ye = "Xiaomi",
        we = "Zebra",
        ze = "Facebook",
        Xe = "Chromium OS",
        Qe = "Mac OS",
        Di = R(function (A, f) {
          var C = {};
          for (var O in A)
            f[O] && f[O].length % 2 === 0
              ? (C[O] = f[O].concat(A[O]))
              : (C[O] = A[O]);
          return C;
        }, "extend"),
        me = R(function (A) {
          for (var f = {}, C = 0; C < A.length; C++)
            f[A[C].toUpperCase()] = A[C];
          return f;
        }, "enumerize"),
        $e = R(function (A, f) {
          return typeof A === l ? ne(f).indexOf(ne(A)) !== -1 : !1;
        }, "has"),
        ne = R(function (A) {
          return A.toLowerCase();
        }, "lowerize"),
        vi = R(function (A) {
          return typeof A === l ? A.replace(/[^\d\.]/g, o).split(".")[0] : e;
        }, "majorize"),
        Ke = R(function (A, f) {
          if (typeof A === l)
            return (
              (A = A.replace(/^\s\s*/, o)),
              typeof f === c ? A : A.substring(0, Pe)
            );
        }, "trim"),
        te = R(function (A, f) {
          for (var C = 0, O, j, F, U, y, x; C < f.length && !y; ) {
            var De = f[C],
              ri = f[C + 1];
            for (O = j = 0; O < De.length && !y && De[O]; )
              if (((y = De[O++].exec(A)), y))
                for (F = 0; F < ri.length; F++)
                  (x = y[++j]),
                    (U = ri[F]),
                    typeof U === d && U.length > 0
                      ? U.length === 2
                        ? typeof U[1] == N
                          ? (this[U[0]] = U[1].call(this, x))
                          : (this[U[0]] = U[1])
                        : U.length === 3
                        ? typeof U[1] === N && !(U[1].exec && U[1].test)
                          ? (this[U[0]] = x ? U[1].call(this, x, U[2]) : e)
                          : (this[U[0]] = x ? x.replace(U[1], U[2]) : e)
                        : U.length === 4 &&
                          (this[U[0]] = x
                            ? U[3].call(this, x.replace(U[1], U[2]))
                            : e)
                      : (this[U] = x || e);
            C += 2;
          }
        }, "rgxMapper"),
        Be = R(function (A, f) {
          for (var C in f)
            if (typeof f[C] === d && f[C].length > 0) {
              for (var O = 0; O < f[C].length; O++)
                if ($e(f[C][O], A)) return C === p ? e : C;
            } else if ($e(f[C], A)) return C === p ? e : C;
          return A;
        }, "strMapper"),
        bi = {
          "1.0": "/8",
          1.2: "/1",
          1.3: "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/",
        },
        ei = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        ii = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [_, [s, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [_, [s, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [s, _],
            [/opios[\/ ]+([\w\.]+)/i],
            [_, [s, de + " Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [_, [s, de]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [s, _],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [_, [s, "UC" + z]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
            [_, [s, "WeChat(Win) Desktop"]],
            [/micromessenger\/([\w\.]+)/i],
            [_, [s, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [_, [s, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [_, [s, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [_, [s, "Yandex"]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[s, /(.+)/, "$1 Secure " + z], _],
            [/\bfocus\/([\w\.]+)/i],
            [_, [s, Ee + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [_, [s, de + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [_, [s, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [_, [s, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [_, [s, de + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [_, [s, "MIUI " + z]],
            [/fxios\/([-\w\.]+)/i],
            [_, [s, Ee]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[s, "360 " + z]],
            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
            [[s, /(.+)/, "$1 " + z], _],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[s, /_/g, " "], _],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [s, _],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
            [s],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[s, ze], _],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i,
            ],
            [s, _],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [_, [s, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [_, [s, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [_, [s, ce + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[s, ce + " WebView"], _],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [_, [s, "Android " + z]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [s, _],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [_, [s, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [_, s],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [s, [_, Be, bi]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [s, _],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[s, "Netscape"], _],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [_, [s, Ee + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
              /panasonic;(viera)/i,
            ],
            [s, _],
            [/(cobalt)\/([\w\.]+)/i],
            [s, [_, /master.|lts./, ""]],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[S, "amd64"]],
            [/(ia32(?=;))/i],
            [[S, ne]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[S, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[S, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[S, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[S, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[S, /ower/, o, ne]],
            [/(sun4\w)[;\)]/i],
            [[S, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[S, ne]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [t, [a, Se], [n, T]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [t, [a, Se], [n, I]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [t, [a, re], [n, I]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [t, [a, re], [n, T]],
            [/(macintosh);/i],
            [t, [a, re]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [t, [a, Ze], [n, I]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [t, [a, qe], [n, T]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [t, [a, qe], [n, I]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [t, /_/g, " "],
              [a, Ye],
              [n, I],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [t, /_/g, " "],
              [a, Ye],
              [n, T],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [t, [a, "OPPO"], [n, I]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [t, [a, "Vivo"], [n, I]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [t, [a, "Realme"], [n, I]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [t, [a, We], [n, I]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [t, [a, We], [n, T]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [t, [a, ue], [n, T]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [t, [a, ue], [n, I]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [t, [a, "Lenovo"], [n, T]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [t, /_/g, " "],
              [a, "Nokia"],
              [n, I],
            ],
            [/(pixel c)\b/i],
            [t, [a, le], [n, T]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [t, [a, le], [n, I]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [t, [a, Ne], [n, I]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [t, "Xperia Tablet"],
              [a, Ne],
              [n, T],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [t, [a, "OnePlus"], [n, I]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [t, [a, Re], [n, T]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [t, /(.+)/g, "Fire Phone $1"],
              [a, Re],
              [n, I],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [t, a, [n, T]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [t, [a, Je], [n, I]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [t, [a, je], [n, T]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [t, [a, je], [n, I]],
            [/(nexus 9)/i],
            [t, [a, "HTC"], [n, T]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [a, [t, /_/g, " "], [n, I]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [t, [a, "Acer"], [n, T]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [t, [a, "Meizu"], [n, I]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [a, t, [n, I]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [a, t, [n, T]],
            [/(surface duo)/i],
            [t, [a, Oe], [n, T]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [t, [a, "Fairphone"], [n, I]],
            [/(u304aa)/i],
            [t, [a, "AT&T"], [n, I]],
            [/\bsie-(\w*)/i],
            [t, [a, "Siemens"], [n, I]],
            [/\b(rct\w+) b/i],
            [t, [a, "RCA"], [n, T]],
            [/\b(venue[\d ]{2,7}) b/i],
            [t, [a, "Dell"], [n, T]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [t, [a, "Verizon"], [n, T]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [t, [a, "Barnes & Noble"], [n, T]],
            [/\b(tm\d{3}\w+) b/i],
            [t, [a, "NuVision"], [n, T]],
            [/\b(k88) b/i],
            [t, [a, "ZTE"], [n, T]],
            [/\b(nx\d{3}j) b/i],
            [t, [a, "ZTE"], [n, I]],
            [/\b(gen\d{3}) b.+49h/i],
            [t, [a, "Swiss"], [n, I]],
            [/\b(zur\d{3}) b/i],
            [t, [a, "Swiss"], [n, T]],
            [/\b((zeki)?tb.*\b) b/i],
            [t, [a, "Zeki"], [n, T]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[a, "Dragon Touch"], t, [n, T]],
            [/\b(ns-?\w{0,9}) b/i],
            [t, [a, "Insignia"], [n, T]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [t, [a, "NextBook"], [n, T]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[a, "Voice"], t, [n, I]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[a, "LvTel"], t, [n, I]],
            [/\b(ph-1) /i],
            [t, [a, "Essential"], [n, I]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [t, [a, "Envizen"], [n, T]],
            [/\b(trio[-\w\. ]+) b/i],
            [t, [a, "MachSpeed"], [n, T]],
            [/\btu_(1491) b/i],
            [t, [a, "Rotor"], [n, T]],
            [/(shield[\w ]+) b/i],
            [t, [a, "Nvidia"], [n, T]],
            [/(sprint) (\w+)/i],
            [a, t, [n, I]],
            [/(kin\.[onetw]{3})/i],
            [
              [t, /\./g, " "],
              [a, Oe],
              [n, I],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [t, [a, we], [n, T]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [t, [a, we], [n, I]],
            [/smart-tv.+(samsung)/i],
            [a, [n, L]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [t, /^/, "SmartTV"],
              [a, Se],
              [n, L],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [a, ue],
              [n, L],
            ],
            [/(apple) ?tv/i],
            [a, [t, re + " TV"], [n, L]],
            [/crkey/i],
            [
              [t, ce + "cast"],
              [a, le],
              [n, L],
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [t, [a, Re], [n, L]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [t, [a, Ze], [n, L]],
            [/(bravia[\w ]+)( bui|\))/i],
            [t, [a, Ne], [n, L]],
            [/(mitv-\w{5}) bui/i],
            [t, [a, Ye], [n, L]],
            [/Hbbtv.*(technisat) (.*);/i],
            [a, t, [n, L]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [a, Ke],
              [t, Ke],
              [n, L],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[n, L]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [a, t, [n, ie]],
            [/droid.+; (shield) bui/i],
            [t, [a, "Nvidia"], [n, ie]],
            [/(playstation [345portablevi]+)/i],
            [t, [a, Ne], [n, ie]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [t, [a, Oe], [n, ie]],
            [/((pebble))app/i],
            [a, t, [n, Z]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [t, [a, re], [n, Z]],
            [/droid.+; (glass) \d/i],
            [t, [a, le], [n, Z]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [t, [a, we], [n, Z]],
            [/(quest( 2| pro)?)/i],
            [t, [a, ze], [n, Z]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [a, [n, fe]],
            [/(aeobc)\b/i],
            [t, [a, Re], [n, fe]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [t, [n, I]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [t, [n, T]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[n, T]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[n, I]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [t, [a, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [_, [s, Bi + "HTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [_, [s, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [s, _],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [_, s],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [s, _],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [s, [_, Be, ei]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [s, "Windows"],
              [_, Be, ei],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /ios;fbsv\/([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [_, /_/g, "."],
              [s, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [s, Qe],
              [_, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [_, s],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [s, _],
            [/\(bb(10);/i],
            [_, [s, Je]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [_, [s, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [_, [s, Ee + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [_, [s, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [_, [s, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [_, [s, ce + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[s, Xe], _],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [s, _],
            [/(sunos) ?([\w\.\d]*)/i],
            [[s, "Solaris"], _],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [s, _],
          ],
        },
        k = R(function (A, f) {
          if ((typeof A === d && ((f = A), (A = e)), !(this instanceof k)))
            return new k(A, f).getResult();
          var C = typeof i !== c && i.navigator ? i.navigator : e,
            O = A || (C && C.userAgent ? C.userAgent : o),
            j = C && C.userAgentData ? C.userAgentData : e,
            F = f ? Di(ii, f) : ii,
            U = C && C.userAgent == O;
          return (
            (this.getBrowser = function () {
              var y = {};
              return (
                (y[s] = e),
                (y[_] = e),
                te.call(y, O, F.browser),
                (y[E] = vi(y[_])),
                U &&
                  C &&
                  C.brave &&
                  typeof C.brave.isBrave == N &&
                  (y[s] = "Brave"),
                y
              );
            }),
            (this.getCPU = function () {
              var y = {};
              return (y[S] = e), te.call(y, O, F.cpu), y;
            }),
            (this.getDevice = function () {
              var y = {};
              return (
                (y[a] = e),
                (y[t] = e),
                (y[n] = e),
                te.call(y, O, F.device),
                U && !y[n] && j && j.mobile && (y[n] = I),
                U &&
                  y[t] == "Macintosh" &&
                  C &&
                  typeof C.standalone !== c &&
                  C.maxTouchPoints &&
                  C.maxTouchPoints > 2 &&
                  ((y[t] = "iPad"), (y[n] = T)),
                y
              );
            }),
            (this.getEngine = function () {
              var y = {};
              return (y[s] = e), (y[_] = e), te.call(y, O, F.engine), y;
            }),
            (this.getOS = function () {
              var y = {};
              return (
                (y[s] = e),
                (y[_] = e),
                te.call(y, O, F.os),
                U &&
                  !y[s] &&
                  j &&
                  j.platform != "Unknown" &&
                  (y[s] = j.platform
                    .replace(/chrome os/i, Xe)
                    .replace(/macos/i, Qe)),
                y
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return O;
            }),
            (this.setUA = function (y) {
              return (
                (O = typeof y === l && y.length > Pe ? Ke(y, Pe) : y), this
              );
            }),
            this.setUA(O),
            this
          );
        }, "UAParser");
      (k.VERSION = r),
        (k.BROWSER = me([s, _, E])),
        (k.CPU = me([S])),
        (k.DEVICE = me([t, a, n, ie, I, L, T, Z, fe])),
        (k.ENGINE = k.OS = me([s, _])),
        typeof ae !== c
          ? (typeof Ce !== c && Ce.exports && (ae = Ce.exports = k),
            (ae.UAParser = k))
          : typeof define === N && define.amd
          ? define(function () {
              return k;
            })
          : typeof i !== c && (i.UAParser = k);
      var X = typeof i !== c && (i.jQuery || i.Zepto);
      if (X && !X.ua) {
        var ye = new k();
        (X.ua = ye.getResult()),
          (X.ua.get = function () {
            return ye.getUA();
          }),
          (X.ua.set = function (A) {
            ye.setUA(A);
            var f = ye.getResult();
            for (var C in f) X.ua[C] = f[C];
          });
      }
    })(typeof window == "object" ? window : ae);
  });
  var yr = {};
  ve(yr, {
    default: () => mr,
    errors: () => si,
    loadIssueBillingKeyUI: () => Ki,
    loadIssueBillingKeyUIRequest: () => ee,
    loadPaymentUI: () => Si,
    requestIdentityVerification: () => yi,
    requestIssueBillingKey: () => Ai,
    requestIssueBillingKeyAndPay: () => Ui,
    requestPayment: () => Me,
    slots: () => m,
    updateLoadIssueBillingKeyUIRequest: () => xe,
    updateLoadPaymentUIRequest: () => Ge,
  });
  var He = {};
  ve(He, {
    loadIssueBillingKeyUI: () => Ki,
    loadIssueBillingKeyUIRequest: () => ee,
    loadPaymentUI: () => Si,
    requestIdentityVerification: () => yi,
    requestIssueBillingKey: () => Ai,
    requestIssueBillingKeyAndPay: () => Ui,
    requestPayment: () => Me,
    updateLoadIssueBillingKeyUIRequest: () => xe,
    updateLoadPaymentUIRequest: () => Ge,
  });
  var be;
  var Ir = {
    jsSdkUrl:
      (be = void 0) !== null && be !== void 0
        ? be
        : "https://cdn.portone.io/v2/browser-sdk.js",
  };
  var Hi = {
      BANK_OF_KOREA: "BANK_BANK_OF_KOREA",
      KOREA_DEVELOPMENT_BANK: "BANK_KOREA_DEVELOPMENT_BANK",
      INDUSTRIAL_BANK_OF_KOREA: "BANK_INDUSTRIAL_BANK_OF_KOREA",
      KOOKMIN_BANK: "BANK_KOOKMIN_BANK",
      SUHYUP_BANK: "BANK_SUHYUP_BANK",
      EXPORT_IMPORT_BANK_OF_KOREA: "BANK_EXPORT_IMPORT_BANK_OF_KOREA",
      NH_NONGHYUP_BANK: "BANK_NH_NONGHYUP_BANK",
      LOCAL_NONGHYUP: "BANK_LOCAL_NONGHYUP",
      WOORI_BANK: "BANK_WOORI_BANK",
      SC_BANK_KOREA: "BANK_SC_BANK_KOREA",
      CITI_BANK_KOREA: "BANK_CITI_BANK_KOREA",
      DAEGU_BANK: "BANK_DAEGU_BANK",
      BUSAN_BANK: "BANK_BUSAN_BANK",
      GWANGJU_BANK: "BANK_GWANGJU_BANK",
      JEJU_BANK: "BANK_JEJU_BANK",
      JEONBUK_BANK: "BANK_JEONBUK_BANK",
      KYONGNAM_BANK: "BANK_KYONGNAM_BANK",
      KFCC: "BANK_KFCC",
      SHINHYUP: "BANK_SHINHYUP",
      SAVINGS_BANK_KOREA: "BANK_SAVINGS_BANK_KOREA",
      MORGAN_STANLEY_BANK: "BANK_MORGAN_STANLEY_BANK",
      HSBC_BANK: "BANK_HSBC_BANK",
      DEUTSCHE_BANK: "BANK_DEUTSCHE_BANK",
      JP_MORGAN_CHASE_BANK: "BANK_JP_MORGAN_CHASE_BANK",
      MIZUHO_BANK: "BANK_MIZUHO_BANK",
      MUFG_BANK: "BANK_MUFG_BANK",
      BANK_OF_AMERICA_BANK: "BANK_BANK_OF_AMERICA_BANK",
      BNP_PARIBAS_BANK: "BANK_BNP_PARIBAS_BANK",
      ICBC: "BANK_ICBC",
      BANK_OF_CHINA: "BANK_BANK_OF_CHINA",
      NATIONAL_FORESTRY_COOPERATIVE_FEDERATION:
        "BANK_NATIONAL_FORESTRY_COOPERATIVE_FEDERATION",
      UNITED_OVERSEAS_BANK: "BANK_UNITED_OVERSEAS_BANK",
      BANK_OF_COMMUNICATIONS: "BANK_BANK_OF_COMMUNICATIONS",
      CHINA_CONSTRUCTION_BANK: "BANK_CHINA_CONSTRUCTION_BANK",
      EPOST: "BANK_EPOST",
      KODIT: "BANK_KODIT",
      KIBO: "BANK_KIBO",
      HANA_BANK: "BANK_HANA_BANK",
      SHINHAN_BANK: "BANK_SHINHAN_BANK",
      K_BANK: "BANK_K_BANK",
      KAKAO_BANK: "BANK_KAKAO_BANK",
      TOSS_BANK: "BANK_TOSS_BANK",
      KCIS: "BANK_KCIS",
      DAISHIN_SAVINGS_BANK: "BANK_DAISHIN_SAVINGS_BANK",
      SBI_SAVINGS_BANK: "BANK_SBI_SAVINGS_BANK",
      HK_SAVINGS_BANK: "BANK_HK_SAVINGS_BANK",
      WELCOME_SAVINGS_BANK: "BANK_WELCOME_SAVINGS_BANK",
      SHINHAN_SAVINGS_BANK: "BANK_SHINHAN_SAVINGS_BANK",
      KYOBO_SECURITIES: "BANK_KYOBO_SECURITIES",
      DAISHIN_SECURITIES: "BANK_DAISHIN_SECURITIES",
      MERITZ_SECURITIES: "BANK_MERITZ_SECURITIES",
      MIRAE_ASSET_SECURITIES: "BANK_MIRAE_ASSET_SECURITIES",
      BOOKOOK_SECURITIES: "BANK_BOOKOOK_SECURITIES",
      SAMSUNG_SECURITIES: "BANK_SAMSUNG_SECURITIES",
      SHINYOUNG_SECURITIES: "BANK_SHINYOUNG_SECURITIES",
      SHINHAN_FINANCIAL_INVESTMENT: "BANK_SHINHAN_FINANCIAL_INVESTMENT",
      YUANTA_SECURITIES: "BANK_YUANTA_SECURITIES",
      EUGENE_INVESTMENT_SECURITIES: "BANK_EUGENE_INVESTMENT_SECURITIES",
      KAKAO_PAY_SECURITIES: "BANK_KAKAO_PAY_SECURITIES",
      TOSS_SECURITIES: "BANK_TOSS_SECURITIES",
      KOREA_FOSS_SECURITIES: "BANK_KOREA_FOSS_SECURITIES",
      HANA_FINANCIAL_INVESTMENT: "BANK_HANA_FINANCIAL_INVESTMENT",
      HI_INVESTMENT_SECURITIES: "BANK_HI_INVESTMENT_SECURITIES",
      KOREA_INVESTMENT_SECURITIES: "BANK_KOREA_INVESTMENT_SECURITIES",
      HANWHA_INVESTMENT_SECURITIES: "BANK_HANWHA_INVESTMENT_SECURITIES",
      HYUNDAI_MOTOR_SECURITIES: "BANK_HYUNDAI_MOTOR_SECURITIES",
      DB_FINANCIAL_INVESTMENT: "BANK_DB_FINANCIAL_INVESTMENT",
      KB_SECURITIES: "BANK_KB_SECURITIES",
      KTB_INVESTMENT_SECURITIES: "BANK_KTB_INVESTMENT_SECURITIES",
      NH_INVESTMENT_SECURITIES: "BANK_NH_INVESTMENT_SECURITIES",
      SK_SECURITIES: "BANK_SK_SECURITIES",
      SCI: "BANK_SGI",
      KIWOOM_SECURITIES: "BANK_KIWOOM_SECURITIES",
      EBEST_INVESTMENT_SECURITIES: "BANK_EBEST_INVESTMENT_SECURITIES",
      CAPE_INVESTMENT_CERTIFICATE: "BANK_CAPE_INVESTMENT_CERTIFICATE",
    },
    ji = { MOBILE: "MOBILE" },
    Ji = {
      CARD: "CARD",
      MOBILE: "MOBILE",
      EASY_PAY: "EASY_PAY",
      PAYPAL: "PAYPAL",
    },
    qi = {
      KOREA_DEVELOPMENT_BANK: "CARD_COMPANY_KOREA_DEVELOPMENT_BANK",
      KFCC: "CARD_COMPANY_KFCC",
      SHINHYUP: "CARD_COMPANY_SHINHYUP",
      EPOST: "CARD_COMPANY_EPOST",
      SAVINGS_BANK_KOREA: "CARD_COMPANY_SAVINGS_BANK_KOREA",
      KAKAO_BANK: "CARD_COMPANY_KAKAO_BANK",
      WOORI_CARD: "CARD_COMPANY_WOORI_CARD",
      BC_CARD: "CARD_COMPANY_BC_CARD",
      GWANGJU_CARD: "CARD_COMPANY_GWANGJU_CARD",
      SAMSUNG_CARD: "CARD_COMPANY_SAMSUNG_CARD",
      SHINHAN_CARD: "CARD_COMPANY_SHINHAN_CARD",
      HYUNDAI_CARD: "CARD_COMPANY_HYUNDAI_CARD",
      LOTTE_CARD: "CARD_COMPANY_LOTTE_CARD",
      SUHYUP_CARD: "CARD_COMPANY_SUHYUP_CARD",
      CITI_CARD: "CARD_COMPANY_CITI_CARD",
      NH_CARD: "CARD_COMPANY_NH_CARD",
      JEONBUK_CARD: "CARD_COMPANY_JEONBUK_CARD",
      JEJU_CARD: "CARD_COMPANY_JEJU_CARD",
      HANA_CARD: "CARD_COMPANY_HANA_CARD",
      KOOKMIN_CARD: "CARD_COMPANY_KOOKMIN_CARD",
      K_BANK: "CARD_COMPANY_K_BANK",
      TOSS_BANK: "CARD_COMPANY_TOSS_BANK",
      MIRAE_ASSET_SECURITIES: "CARD_COMPANY_MIRAE_ASSET_SECURITIES",
    },
    Wi = {
      SKT: "CARRIER_SKT",
      KT: "CARRIER_KT",
      LGU: "CARRIER_LGU",
      HELLO: "CARRIER_HELLO",
      KCT: "CARRIER_KCT",
      SK7: "CARRIER_SK7",
    },
    Zi = {
      AF: "COUNTRY_AF",
      AX: "COUNTRY_AX",
      AL: "COUNTRY_AL",
      DZ: "COUNTRY_DZ",
      AS: "COUNTRY_AS",
      AD: "COUNTRY_AD",
      AO: "COUNTRY_AO",
      AI: "COUNTRY_AI",
      AQ: "COUNTRY_AQ",
      AG: "COUNTRY_AG",
      AR: "COUNTRY_AR",
      AM: "COUNTRY_AM",
      AW: "COUNTRY_AW",
      AU: "COUNTRY_AU",
      AT: "COUNTRY_AT",
      AZ: "COUNTRY_AZ",
      BH: "COUNTRY_BH",
      BS: "COUNTRY_BS",
      BD: "COUNTRY_BD",
      BB: "COUNTRY_BB",
      BY: "COUNTRY_BY",
      BE: "COUNTRY_BE",
      BZ: "COUNTRY_BZ",
      BJ: "COUNTRY_BJ",
      BM: "COUNTRY_BM",
      BT: "COUNTRY_BT",
      BO: "COUNTRY_BO",
      BQ: "COUNTRY_BQ",
      BA: "COUNTRY_BA",
      BW: "COUNTRY_BW",
      BV: "COUNTRY_BV",
      BR: "COUNTRY_BR",
      IO: "COUNTRY_IO",
      BN: "COUNTRY_BN",
      BG: "COUNTRY_BG",
      BF: "COUNTRY_BF",
      BI: "COUNTRY_BI",
      KH: "COUNTRY_KH",
      CM: "COUNTRY_CM",
      CA: "COUNTRY_CA",
      CV: "COUNTRY_CV",
      KY: "COUNTRY_KY",
      CF: "COUNTRY_CF",
      TD: "COUNTRY_TD",
      CL: "COUNTRY_CL",
      CN: "COUNTRY_CN",
      CX: "COUNTRY_CX",
      CC: "COUNTRY_CC",
      CO: "COUNTRY_CO",
      KM: "COUNTRY_KM",
      CG: "COUNTRY_CG",
      CD: "COUNTRY_CD",
      CK: "COUNTRY_CK",
      CR: "COUNTRY_CR",
      CI: "COUNTRY_CI",
      HR: "COUNTRY_HR",
      CU: "COUNTRY_CU",
      CW: "COUNTRY_CW",
      CY: "COUNTRY_CY",
      CZ: "COUNTRY_CZ",
      DK: "COUNTRY_DK",
      DJ: "COUNTRY_DJ",
      DM: "COUNTRY_DM",
      DO: "COUNTRY_DO",
      EC: "COUNTRY_EC",
      EG: "COUNTRY_EG",
      SV: "COUNTRY_SV",
      GQ: "COUNTRY_GQ",
      ER: "COUNTRY_ER",
      EE: "COUNTRY_EE",
      ET: "COUNTRY_ET",
      FK: "COUNTRY_FK",
      FO: "COUNTRY_FO",
      FJ: "COUNTRY_FJ",
      FI: "COUNTRY_FI",
      FR: "COUNTRY_FR",
      GF: "COUNTRY_GF",
      PF: "COUNTRY_PF",
      TF: "COUNTRY_TF",
      GA: "COUNTRY_GA",
      GM: "COUNTRY_GM",
      GE: "COUNTRY_GE",
      DE: "COUNTRY_DE",
      GH: "COUNTRY_GH",
      GI: "COUNTRY_GI",
      GR: "COUNTRY_GR",
      GL: "COUNTRY_GL",
      GD: "COUNTRY_GD",
      GP: "COUNTRY_GP",
      GU: "COUNTRY_GU",
      GT: "COUNTRY_GT",
      GG: "COUNTRY_GG",
      GN: "COUNTRY_GN",
      GW: "COUNTRY_GW",
      GY: "COUNTRY_GY",
      HT: "COUNTRY_HT",
      HM: "COUNTRY_HM",
      VA: "COUNTRY_VA",
      HN: "COUNTRY_HN",
      HK: "COUNTRY_HK",
      HU: "COUNTRY_HU",
      IS: "COUNTRY_IS",
      IN: "COUNTRY_IN",
      ID: "COUNTRY_ID",
      IR: "COUNTRY_IR",
      IQ: "COUNTRY_IQ",
      IE: "COUNTRY_IE",
      IM: "COUNTRY_IM",
      IL: "COUNTRY_IL",
      IT: "COUNTRY_IT",
      JM: "COUNTRY_JM",
      JP: "COUNTRY_JP",
      JE: "COUNTRY_JE",
      JO: "COUNTRY_JO",
      KZ: "COUNTRY_KZ",
      KE: "COUNTRY_KE",
      KI: "COUNTRY_KI",
      KP: "COUNTRY_KP",
      KR: "COUNTRY_KR",
      KW: "COUNTRY_KW",
      KG: "COUNTRY_KG",
      LA: "COUNTRY_LA",
      LV: "COUNTRY_LV",
      LB: "COUNTRY_LB",
      LS: "COUNTRY_LS",
      LR: "COUNTRY_LR",
      LY: "COUNTRY_LY",
      LI: "COUNTRY_LI",
      LT: "COUNTRY_LT",
      LU: "COUNTRY_LU",
      MO: "COUNTRY_MO",
      MK: "COUNTRY_MK",
      MG: "COUNTRY_MG",
      MW: "COUNTRY_MW",
      MY: "COUNTRY_MY",
      MV: "COUNTRY_MV",
      ML: "COUNTRY_ML",
      MT: "COUNTRY_MT",
      MH: "COUNTRY_MH",
      MQ: "COUNTRY_MQ",
      MR: "COUNTRY_MR",
      MU: "COUNTRY_MU",
      YT: "COUNTRY_YT",
      MX: "COUNTRY_MX",
      FM: "COUNTRY_FM",
      MD: "COUNTRY_MD",
      MC: "COUNTRY_MC",
      MN: "COUNTRY_MN",
      ME: "COUNTRY_ME",
      MS: "COUNTRY_MS",
      MA: "COUNTRY_MA",
      MZ: "COUNTRY_MZ",
      MM: "COUNTRY_MM",
      NA: "COUNTRY_NA",
      NR: "COUNTRY_NR",
      NP: "COUNTRY_NP",
      NL: "COUNTRY_NL",
      NC: "COUNTRY_NC",
      NZ: "COUNTRY_NZ",
      NI: "COUNTRY_NI",
      NE: "COUNTRY_NE",
      NG: "COUNTRY_NG",
      NU: "COUNTRY_NU",
      NF: "COUNTRY_NF",
      MP: "COUNTRY_MP",
      NO: "COUNTRY_NO",
      OM: "COUNTRY_OM",
      PK: "COUNTRY_PK",
      PW: "COUNTRY_PW",
      PS: "COUNTRY_PS",
      PA: "COUNTRY_PA",
      PG: "COUNTRY_PG",
      PY: "COUNTRY_PY",
      PE: "COUNTRY_PE",
      PH: "COUNTRY_PH",
      PN: "COUNTRY_PN",
      PL: "COUNTRY_PL",
      PT: "COUNTRY_PT",
      PR: "COUNTRY_PR",
      QA: "COUNTRY_QA",
      RE: "COUNTRY_RE",
      RO: "COUNTRY_RO",
      RU: "COUNTRY_RU",
      RW: "COUNTRY_RW",
      BL: "COUNTRY_BL",
      SH: "COUNTRY_SH",
      KN: "COUNTRY_KN",
      LC: "COUNTRY_LC",
      MF: "COUNTRY_MF",
      PM: "COUNTRY_PM",
      VC: "COUNTRY_VC",
      WS: "COUNTRY_WS",
      SM: "COUNTRY_SM",
      ST: "COUNTRY_ST",
      SA: "COUNTRY_SA",
      SN: "COUNTRY_SN",
      RS: "COUNTRY_RS",
      SC: "COUNTRY_SC",
      SL: "COUNTRY_SL",
      SG: "COUNTRY_SG",
      SX: "COUNTRY_SX",
      SK: "COUNTRY_SK",
      SI: "COUNTRY_SI",
      SB: "COUNTRY_SB",
      SO: "COUNTRY_SO",
      ZA: "COUNTRY_ZA",
      GS: "COUNTRY_GS",
      SS: "COUNTRY_SS",
      ES: "COUNTRY_ES",
      LK: "COUNTRY_LK",
      SD: "COUNTRY_SD",
      SR: "COUNTRY_SR",
      SJ: "COUNTRY_SJ",
      SZ: "COUNTRY_SZ",
      SE: "COUNTRY_SE",
      CH: "COUNTRY_CH",
      SY: "COUNTRY_SY",
      TW: "COUNTRY_TW",
      TJ: "COUNTRY_TJ",
      TZ: "COUNTRY_TZ",
      TH: "COUNTRY_TH",
      TL: "COUNTRY_TL",
      TG: "COUNTRY_TG",
      TK: "COUNTRY_TK",
      TO: "COUNTRY_TO",
      TT: "COUNTRY_TT",
      TN: "COUNTRY_TN",
      TR: "COUNTRY_TR",
      TM: "COUNTRY_TM",
      TC: "COUNTRY_TC",
      TV: "COUNTRY_TV",
      UG: "COUNTRY_UG",
      UA: "COUNTRY_UA",
      AE: "COUNTRY_AE",
      GB: "COUNTRY_GB",
      US: "COUNTRY_US",
      UM: "COUNTRY_UM",
      UY: "COUNTRY_UY",
      UZ: "COUNTRY_UZ",
      VU: "COUNTRY_VU",
      VE: "COUNTRY_VE",
      VN: "COUNTRY_VN",
      VG: "COUNTRY_VG",
      VI: "COUNTRY_VI",
      WF: "COUNTRY_WF",
      EH: "COUNTRY_EH",
      YE: "COUNTRY_YE",
      ZM: "COUNTRY_ZM",
      ZW: "COUNTRY_ZW",
    },
    zi = {
      KRW: "CURRENCY_KRW",
      USD: "CURRENCY_USD",
      EUR: "CURRENCY_EUR",
      JPY: "CURRENCY_JPY",
      CNY: "CURRENCY_CNY",
      VND: "CURRENCY_VND",
      THB: "CURRENCY_THB",
      SGD: "CURRENCY_SGD",
      AUD: "CURRENCY_AUD",
      HKD: "CURRENCY_HKD",
      AED: "CURRENCY_AED",
      AFN: "CURRENCY_AFN",
      ALL: "CURRENCY_ALL",
      AMD: "CURRENCY_AMD",
      ANG: "CURRENCY_ANG",
      AOA: "CURRENCY_AOA",
      ARS: "CURRENCY_ARS",
      AWG: "CURRENCY_AWG",
      AZN: "CURRENCY_AZN",
      BAM: "CURRENCY_BAM",
      BBD: "CURRENCY_BBD",
      BDT: "CURRENCY_BDT",
      BGN: "CURRENCY_BGN",
      BHD: "CURRENCY_BHD",
      BIF: "CURRENCY_BIF",
      BMD: "CURRENCY_BMD",
      BND: "CURRENCY_BND",
      BOB: "CURRENCY_BOB",
      BOV: "CURRENCY_BOV",
      BRL: "CURRENCY_BRL",
      BSD: "CURRENCY_BSD",
      BTN: "CURRENCY_BTN",
      BWP: "CURRENCY_BWP",
      BYN: "CURRENCY_BYN",
      BZD: "CURRENCY_BZD",
      CAD: "CURRENCY_CAD",
      CDF: "CURRENCY_CDF",
      CHE: "CURRENCY_CHE",
      CHF: "CURRENCY_CHF",
      CHW: "CURRENCY_CHW",
      CLF: "CURRENCY_CLF",
      CLP: "CURRENCY_CLP",
      COP: "CURRENCY_COP",
      COU: "CURRENCY_COU",
      CRC: "CURRENCY_CRC",
      CUC: "CURRENCY_CUC",
      CUP: "CURRENCY_CUP",
      CVE: "CURRENCY_CVE",
      CZK: "CURRENCY_CZK",
      DJF: "CURRENCY_DJF",
      DKK: "CURRENCY_DKK",
      DOP: "CURRENCY_DOP",
      DZD: "CURRENCY_DZD",
      EGP: "CURRENCY_EGP",
      ERN: "CURRENCY_ERN",
      ETB: "CURRENCY_ETB",
      FJD: "CURRENCY_FJD",
      FKP: "CURRENCY_FKP",
      GBP: "CURRENCY_GBP",
      GEL: "CURRENCY_GEL",
      GHS: "CURRENCY_GHS",
      GIP: "CURRENCY_GIP",
      GMD: "CURRENCY_GMD",
      GNF: "CURRENCY_GNF",
      GTQ: "CURRENCY_GTQ",
      GYD: "CURRENCY_GYD",
      HNL: "CURRENCY_HNL",
      HRK: "CURRENCY_HRK",
      HTG: "CURRENCY_HTG",
      HUF: "CURRENCY_HUF",
      IDR: "CURRENCY_IDR",
      ILS: "CURRENCY_ILS",
      INR: "CURRENCY_INR",
      IQD: "CURRENCY_IQD",
      IRR: "CURRENCY_IRR",
      ISK: "CURRENCY_ISK",
      JMD: "CURRENCY_JMD",
      JOD: "CURRENCY_JOD",
      KES: "CURRENCY_KES",
      KGS: "CURRENCY_KGS",
      KHR: "CURRENCY_KHR",
      KMF: "CURRENCY_KMF",
      KPW: "CURRENCY_KPW",
      KWD: "CURRENCY_KWD",
      KYD: "CURRENCY_KYD",
      KZT: "CURRENCY_KZT",
      LAK: "CURRENCY_LAK",
      LBP: "CURRENCY_LBP",
      LKR: "CURRENCY_LKR",
      LRD: "CURRENCY_LRD",
      LSL: "CURRENCY_LSL",
      LYD: "CURRENCY_LYD",
      MAD: "CURRENCY_MAD",
      MDL: "CURRENCY_MDL",
      MGA: "CURRENCY_MGA",
      MKD: "CURRENCY_MKD",
      MMK: "CURRENCY_MMK",
      MNT: "CURRENCY_MNT",
      MOP: "CURRENCY_MOP",
      MRU: "CURRENCY_MRU",
      MUR: "CURRENCY_MUR",
      MVR: "CURRENCY_MVR",
      MWK: "CURRENCY_MWK",
      MXN: "CURRENCY_MXN",
      MXV: "CURRENCY_MXV",
      MZN: "CURRENCY_MZN",
      NAD: "CURRENCY_NAD",
      NGN: "CURRENCY_NGN",
      NIO: "CURRENCY_NIO",
      NOK: "CURRENCY_NOK",
      NPR: "CURRENCY_NPR",
      NZD: "CURRENCY_NZD",
      OMR: "CURRENCY_OMR",
      PAB: "CURRENCY_PAB",
      PEN: "CURRENCY_PEN",
      PGK: "CURRENCY_PGK",
      PHP: "CURRENCY_PHP",
      PKR: "CURRENCY_PKR",
      PLN: "CURRENCY_PLN",
      PYG: "CURRENCY_PYG",
      QAR: "CURRENCY_QAR",
      RON: "CURRENCY_RON",
      RSD: "CURRENCY_RSD",
      RUB: "CURRENCY_RUB",
      RWF: "CURRENCY_RWF",
      SAR: "CURRENCY_SAR",
      SBD: "CURRENCY_SBD",
      SCR: "CURRENCY_SCR",
      SDG: "CURRENCY_SDG",
      SEK: "CURRENCY_SEK",
      SHP: "CURRENCY_SHP",
      SLE: "CURRENCY_SLE",
      SLL: "CURRENCY_SLL",
      SOS: "CURRENCY_SOS",
      SRD: "CURRENCY_SRD",
      SSP: "CURRENCY_SSP",
      STN: "CURRENCY_STN",
      SVC: "CURRENCY_SVC",
      SYP: "CURRENCY_SYP",
      SZL: "CURRENCY_SZL",
      TJS: "CURRENCY_TJS",
      TMT: "CURRENCY_TMT",
      TND: "CURRENCY_TND",
      TOP: "CURRENCY_TOP",
      TRY: "CURRENCY_TRY",
      TTD: "CURRENCY_TTD",
      TWD: "CURRENCY_TWD",
      TZS: "CURRENCY_TZS",
      UAH: "CURRENCY_UAH",
      UGX: "CURRENCY_UGX",
      USN: "CURRENCY_USN",
      UYI: "CURRENCY_UYI",
      UYU: "CURRENCY_UYU",
      UYW: "CURRENCY_UYW",
      UZS: "CURRENCY_UZS",
      VED: "CURRENCY_VED",
      VES: "CURRENCY_VES",
      VUV: "CURRENCY_VUV",
      WST: "CURRENCY_WST",
      XAF: "CURRENCY_XAF",
      XAG: "CURRENCY_XAG",
      XAU: "CURRENCY_XAU",
      XBA: "CURRENCY_XBA",
      XBB: "CURRENCY_XBB",
      XBC: "CURRENCY_XBC",
      XBD: "CURRENCY_XBD",
      XCD: "CURRENCY_XCD",
      XDR: "CURRENCY_XDR",
      XOF: "CURRENCY_XOF",
      XPD: "CURRENCY_XPD",
      XPF: "CURRENCY_XPF",
      XPT: "CURRENCY_XPT",
      XSU: "CURRENCY_XSU",
      XTS: "CURRENCY_XTS",
      XUA: "CURRENCY_XUA",
      XXX: "CURRENCY_XXX",
      YER: "CURRENCY_YER",
      ZAR: "CURRENCY_ZAR",
      ZMW: "CURRENCY_ZMW",
      ZWL: "CURRENCY_ZWL",
    },
    Xi = {
      PAYCO: "EASY_PAY_PROVIDER_PAYCO",
      SAMSUNGPAY: "EASY_PAY_PROVIDER_SAMSUNGPAY",
      SSGPAY: "EASY_PAY_PROVIDER_SSGPAY",
      KAKAOPAY: "EASY_PAY_PROVIDER_KAKAOPAY",
      NAVERPAY: "EASY_PAY_PROVIDER_NAVERPAY",
      CHAI: "EASY_PAY_PROVIDER_CHAI",
      LPAY: "EASY_PAY_PROVIDER_LPAY",
      KPAY: "EASY_PAY_PROVIDER_KPAY",
      TOSSPAY: "EASY_PAY_PROVIDER_TOSSPAY",
      LGPAY: "EASY_PAY_PROVIDER_LGPAY",
      APPLEPAY: "EASY_PAY_PROVIDER_APPLEPAY",
      PINPAY: "EASY_PAY_PROVIDER_PINPAY",
      SKPAY: "EASY_PAY_PROVIDER_SKPAY",
      TOSS_BRANDPAY: "EASY_PAY_PROVIDER_TOSS_BRANDPAY",
      HYPHEN: "EASY_PAY_PROVIDER_HYPHEN",
    },
    Qi = {
      MALE: "GENDER_MALE",
      FEMALE: "GENDER_FEMALE",
      OTHER: "GENDER_OTHER",
    },
    $i = {
      BOOKNLIFE: "GIFT_CERTIFICATE_TYPE_BOOKNLIFE",
      SMART_MUNSANG: "GIFT_CERTIFICATE_TYPE_SMART_MUNSANG",
      CULTURELAND: "GIFT_CERTIFICATE_TYPE_CULTURELAND",
      HAPPYMONEY: "GIFT_CERTIFICATE_TYPE_HAPPYMONEY",
      CULTURE_GIFT: "GIFT_CERTIFICATE_TYPE_CULTURE_GIFT",
    },
    er = { KO_KR: "KO_KR", EN_US: "EN_US", ZH_CN: "ZH_CN" },
    ir = {
      HTML5_INICIS: "PG_PROVIDER_HTML5_INICIS",
      PAYPAL: "PG_PROVIDER_PAYPAL",
      INICIS: "PG_PROVIDER_INICIS",
      DANAL: "PG_PROVIDER_DANAL",
      NICE: "PG_PROVIDER_NICE",
      DANAL_TPAY: "PG_PROVIDER_DANAL_TPAY",
      UPLUS: "PG_PROVIDER_UPLUS",
      NAVERPAY: "PG_PROVIDER_NAVERPAY",
      SETTLE: "PG_PROVIDER_SETTLE",
      KCP: "PG_PROVIDER_KCP",
      MOBILIANS: "PG_PROVIDER_MOBILIANS",
      KAKAOPAY: "PG_PROVIDER_KAKAOPAY",
      NAVERCO: "PG_PROVIDER_NAVERCO",
      KICC: "PG_PROVIDER_KICC",
      EXIMBAY: "PG_PROVIDER_EXIMBAY",
      SMILEPAY: "PG_PROVIDER_SMILEPAY",
      PAYCO: "PG_PROVIDER_PAYCO",
      KCP_BILLING: "PG_PROVIDER_KCP_BILLING",
      ALIPAY: "PG_PROVIDER_ALIPAY",
      CHAI: "PG_PROVIDER_CHAI",
      BLUEWALNUT: "PG_PROVIDER_BLUEWALNUT",
      SMARTRO: "PG_PROVIDER_SMARTRO",
      PAYMENTWALL: "PG_PROVIDER_PAYMENTWALL",
      TOSSPAYMENTS: "PG_PROVIDER_TOSSPAYMENTS",
      KCP_QUICK: "PG_PROVIDER_KCP_QUICK",
      DAOU: "PG_PROVIDER_DAOU",
      GALAXIA: "PG_PROVIDER_GALAXIA",
      TOSSPAY: "PG_PROVIDER_TOSSPAY",
      KCP_DIRECT: "PG_PROVIDER_KCP_DIRECT",
      SETTLE_ACC: "PG_PROVIDER_SETTLE_ACC",
      SETTLE_FIRM: "PG_PROVIDER_SETTLE_FIRM",
      INICIS_UNIFIED: "PG_PROVIDER_INICIS_UNIFIED",
      KSNET: "PG_PROVIDER_KSNET",
      PAYPAL_V2: "PG_PROVIDER_PAYPAL_V2",
      SMARTRO_V2: "PG_PROVIDER_SMARTRO_V2",
      NICE_V2: "PG_PROVIDER_NICE_V2",
      TOSS_BRANDPAY: "PG_PROVIDER_TOSS_BRANDPAY",
      WELCOME: "PG_PROVIDER_WELCOME",
      TOSSPAY_V2: "PG_PROVIDER_TOSSPAY_V2",
      INICIS_V2: "PG_PROVIDER_INICIS_V2",
      KPN: "PG_PROVIDER_KPN",
      KCP_V2: "PG_PROVIDER_KCP_V2",
      HYPHEN: "PG_PROVIDER_HYPHEN",
    },
    q = {
      PAYMENT: "PAYMENT",
      ISSUE_BILLING_KEY: "ISSUE_BILLING_KEY",
      IDENTITY_VERIFICATION: "IDENTITY_VERIFICATION",
      ISSUE_BILLING_KEY_AND_PAY: "ISSUE_BILLING_KEY_AND_PAY",
    },
    rr = {
      IFRAME: "IFRAME",
      POPUP: "POPUP",
      REDIRECTION: "REDIRECTION",
      UI: "UI",
    },
    nr = { PAYPAL_SPB: "PAYPAL_SPB" },
    tr = { PAYPAL_RT: "PAYPAL_RT" },
    K = {
      __proto__: null,
      Bank: Hi,
      BillingKeyAndPayMethod: ji,
      BillingKeyMethod: Ji,
      CardCompany: qi,
      Carrier: Wi,
      Country: Zi,
      Currency: zi,
      EasyPayProvider: Xi,
      Gender: Qi,
      GiftCertificateType: $i,
      IssueBillingKeyUIType: tr,
      Locale: er,
      PaymentUIType: nr,
      PgProvider: ir,
      TransactionType: q,
      WindowType: rr,
    };
  function Q(i) {
    return J(i) && i.__portOneErrorType === "IdentityVerificationError";
  }
  R(Q, "isIdentityVerificationError");
  var D = class extends Error {
    static [Symbol.hasInstance](e) {
      return Q(e);
    }
    constructor({
      code: e,
      message: r,
      identityVerificationId: o,
      identityVerificationTxId: p,
      pgCode: N,
      pgMessage: c,
    }) {
      super(r),
        (this.__portOneErrorType = "IdentityVerificationError"),
        (this.transactionType = q.IDENTITY_VERIFICATION),
        (this.code = e),
        (this.message = r),
        (this.identityVerificationId = o),
        (this.identityVerificationTxId = p),
        (this.pgCode = N),
        (this.pgMessage = c);
    }
  };
  R(D, "IdentityVerificationError");
  function $(i) {
    return J(i) && i.__portOneErrorType === "IssueBillingKeyAndPayError";
  }
  R($, "isIssueBillingKeyAndPayError");
  var V = class extends Error {
    static [Symbol.hasInstance](e) {
      return $(e);
    }
    constructor({
      txId: e,
      paymentId: r,
      billingKey: o,
      code: p,
      message: N,
      pgCode: c,
      pgMessage: d,
    }) {
      super(N),
        (this.__portOneErrorType = "IssueBillingKeyAndPayError"),
        (this.transactionType = q.ISSUE_BILLING_KEY_AND_PAY),
        (this.txId = e),
        (this.paymentId = r),
        (this.billingKey = o),
        (this.code = p),
        (this.message = N),
        (this.pgCode = c),
        (this.pgMessage = d);
    }
  };
  R(V, "IssueBillingKeyAndPayError");
  function v(i) {
    return J(i) && i.__portOneErrorType === "IssueBillingKeyError";
  }
  R(v, "isIssueBillingKeyError");
  var P = class extends Error {
    static [Symbol.hasInstance](e) {
      return v(e);
    }
    constructor({
      code: e,
      message: r,
      billingKey: o,
      pgCode: p,
      pgMessage: N,
    }) {
      super(r),
        (this.__portOneErrorType = "IssueBillingKeyError"),
        (this.transactionType = q.ISSUE_BILLING_KEY),
        (this.code = e),
        (this.message = r),
        (this.billingKey = o),
        (this.pgCode = p),
        (this.pgMessage = N);
    }
  };
  R(P, "IssueBillingKeyError");
  function he(i) {
    return J(i) && i.__portOneErrorType === "ModuleError";
  }
  R(he, "isModuleError");
  var se = class extends Error {
    static [Symbol.hasInstance](e) {
      return he(e);
    }
    constructor({ code: e, message: r }) {
      super(r),
        (this.__portOneErrorType = "ModuleError"),
        (this.code = e),
        (this.message = r);
    }
  };
  R(se, "ModuleError");
  function b(i) {
    return J(i) && i.__portOneErrorType === "PaymentError";
  }
  R(b, "isPaymentError");
  var g = class extends Error {
    static [Symbol.hasInstance](e) {
      return b(e);
    }
    constructor({
      code: e,
      message: r,
      txId: o,
      paymentId: p,
      pgCode: N,
      pgMessage: c,
    }) {
      super(r),
        (this.__portOneErrorType = "PaymentError"),
        (this.transactionType = q.PAYMENT),
        (this.code = e),
        (this.message = r),
        (this.txId = o),
        (this.paymentId = p),
        (this.pgCode = N),
        (this.pgMessage = c);
    }
  };
  R(g, "PaymentError");
  function ti(i) {
    return J(i) && i.__portOneErrorType === "LoadIssueBillingKeyUIError";
  }
  R(ti, "isLoadIssueBillingKeyUIError");
  var B = class extends Error {
    static [Symbol.hasInstance](e) {
      return ti(e);
    }
    constructor({ code: e, message: r }) {
      super(r),
        (this.__portOneErrorType = "LoadIssueBillingKeyUIError"),
        (this.transactionType = q.ISSUE_BILLING_KEY),
        (this.code = e),
        (this.message = r);
    }
  };
  R(B, "LoadIssueBillingKeyUIError");
  function oi(i) {
    return J(i) && i.__portOneErrorType === "LoadPaymentUIError";
  }
  R(oi, "isLoadPaymentUIError");
  var M = class extends Error {
    static [Symbol.hasInstance](e) {
      return oi(e);
    }
    constructor({ code: e, message: r }) {
      super(r),
        (this.__portOneErrorType = "LoadPaymentUIError"),
        (this.transactionType = q.PAYMENT),
        (this.code = e),
        (this.message = r);
    }
  };
  R(M, "LoadPaymentUIError");
  function J(i) {
    return (
      i != null &&
      typeof i == "object" &&
      "__portOneErrorType" in i &&
      typeof i.__portOneErrorType == "string"
    );
  }
  R(J, "isPortOneError");
  var si = {
    __proto__: null,
    IdentityVerificationError: D,
    IssueBillingKeyAndPayError: V,
    IssueBillingKeyError: P,
    LoadIssueBillingKeyUIError: B,
    LoadPaymentUIError: M,
    ModuleError: se,
    PaymentError: g,
    isIdentityVerificationError: Q,
    isIssueBillingKeyAndPayError: $,
    isIssueBillingKeyError: v,
    isLoadIssueBillingKeyUIError: ti,
    isLoadPaymentUIError: oi,
    isModuleError: he,
    isPaymentError: b,
    isPortOneError: J,
  };
  var or = {
      CORE_SERVER: "https://service.iamport.kr",
      CORETELEMETRY_SERVER: "https://coretelemetry.prod.iamport.co",
      CHECKOUT_SERVER: "https://checkout-service.prod.iamport.co",
      DRIVER_SERVE_URL: "https://cdn.portone.io/drivers",
      PAYMENT_BRIDGE_URL: "https://payment-bridge.prod.iamport.co",
      SDK_VERSION: "1.27.0",
      TGS_PUBLIC_URI: "https://tx-gateway-service.prod.iamport.co",
    },
    m = or;
  var u = {
    "loadable-ui/payment/payment-bridge":
      "loadable-ui/payment/payment-bridge-BDPZGIbxqVSq8L3QknMlq5YGq7hjBEzgNSBLYYMq1Gw=.js",
    "pg/danal/identity-verification/popup-impl":
      "pg/danal/identity-verification/popup-impl-wT9pfe-65kpHxoxNvNz7kXg_FCdCUCPvzV5F9DT2DBk=.js",
    "pg/danal/identity-verification/popup":
      "pg/danal/identity-verification/popup-KToLQzxRo6v5M9ZRolwKEyS7dPaaqz7fOslJP8W3A38=.js",
    "pg/danal/identity-verification/redirection":
      "pg/danal/identity-verification/redirection-ul_5Llh0jNUGyRwGRN-biqYjSQBVqchKdGGnyF6Aa4I=.js",
    "pg/hyphen/payment/popup-impl":
      "pg/hyphen/payment/popup-impl-0tEUJE-F5vJhMgnaWRROuzphf2RagKwdpzPtaZ0a4Fo=.js",
    "pg/hyphen/payment/popup":
      "pg/hyphen/payment/popup-NjUXjt1s9ZG1vVmGVSQH5JQw--GDnAtc8i0gyZqHHTg=.js",
    "pg/hyphen/payment/redirection":
      "pg/hyphen/payment/redirection-p3UTZp5z-1U07SdDjzwyeVdemf6ZFtZQUTo6VpIPjp8=.js",
    "pg/inicis-unified/identity-verification/popup-impl":
      "pg/inicis-unified/identity-verification/popup-impl-wT9pfe-65kpHxoxNvNz7kXg_FCdCUCPvzV5F9DT2DBk=.js",
    "pg/inicis-unified/identity-verification/popup":
      "pg/inicis-unified/identity-verification/popup-IF6g2-11oYyXa9bNVgt3GOJDl3LJNwXmGksEG_hv-1g=.js",
    "pg/inicis-unified/identity-verification/redirection":
      "pg/inicis-unified/identity-verification/redirection-L_ywE92LfQkYT_R4bhSnKGrdUsBR2ryXFTWX35MHrQc=.js",
    "pg/inicis-v2/issue-billing-key/iframe-impl":
      "pg/inicis-v2/issue-billing-key/iframe-impl-ZKlYsxRwRkgNDXSmmpR1Ekd1Zdj3byeOsnPyQnEvh7U=.js",
    "pg/inicis-v2/issue-billing-key/iframe":
      "pg/inicis-v2/issue-billing-key/iframe-Cu71m1rY9lz1HOOdHn7oYkeqXlAktjfjpLd5BGKvdnc=.js",
    "pg/inicis-v2/issue-billing-key/redirection":
      "pg/inicis-v2/issue-billing-key/redirection-nlZugfYC_vP4UeQfwHsqQdv4ukLbKNnh30gsKHfNTzI=.js",
    "pg/inicis-v2/issue-billing-key-and-pay/iframe-impl":
      "pg/inicis-v2/issue-billing-key-and-pay/iframe-impl-yyPp3BQBItKv4iFxIfnfb1f8IAHnFAXOKdUY3-PVFgM=.js",
    "pg/inicis-v2/issue-billing-key-and-pay/iframe":
      "pg/inicis-v2/issue-billing-key-and-pay/iframe-vX6oKsAY_ZPpLlMmX-TubYC_XwxRLEMKk_OtuDd9bRk=.js",
    "pg/inicis-v2/issue-billing-key-and-pay/redirection":
      "pg/inicis-v2/issue-billing-key-and-pay/redirection-oErrYDQzKNXvUoiAK9F6tngzjiphj5_sGcOH7SfSadc=.js",
    "pg/inicis-v2/payment/iframe-impl":
      "pg/inicis-v2/payment/iframe-impl-quhnOKhzLHbQpGuxcx_Ny_J_SvyC_l3PZSoLGFo9CrY=.js",
    "pg/inicis-v2/payment/iframe":
      "pg/inicis-v2/payment/iframe-0lVH62yqef7YFiB3AR9mnGcJEZQAf6y9R-Rtjq2_xP8=.js",
    "pg/inicis-v2/payment/redirection":
      "pg/inicis-v2/payment/redirection-p86TlGRrxfnut6IOWSyQ4oXcBVWQL3rhOoVhr2FDh8U=.js",
    "pg/kakaopay/issue-billing-key/iframe-impl":
      "pg/kakaopay/issue-billing-key/iframe-impl-d2v13U4upFfGA85vB_F4xISztJFlG1nb62FGALsOIEY=.js",
    "pg/kakaopay/issue-billing-key/iframe":
      "pg/kakaopay/issue-billing-key/iframe-_xf8iBkQkBn35s67uKwCuT6G3szEnDBaRjSIvKoXxDM=.js",
    "pg/kakaopay/issue-billing-key/redirection":
      "pg/kakaopay/issue-billing-key/redirection-a97lBRhi37KEEIRMMDggDF_j1PkvUSip01T1Y20uTXk=.js",
    "pg/kakaopay/payment/iframe-impl":
      "pg/kakaopay/payment/iframe-impl-rHD1n_Gv2aNfbBJldfhfoz9Wx4CmMPEbFrU1lB6CcXA=.js",
    "pg/kakaopay/payment/iframe":
      "pg/kakaopay/payment/iframe-XF-uOpP9NFFHT8bgdNVaKwOeiPiVTNTQ9lcrJYX0KEM=.js",
    "pg/kakaopay/payment/redirection":
      "pg/kakaopay/payment/redirection--TzcxYxXGBfK77R6iEizyMJ7xfS0jHE5WzZEHhwp-SU=.js",
    "pg/kcp-v2/issue-billing-key/iframe-impl":
      "pg/kcp-v2/issue-billing-key/iframe-impl-2xDVxb1VgXnp6TN4itxFxYDL-cTCUqOM7DtlhC8QKOk=.js",
    "pg/kcp-v2/issue-billing-key/iframe":
      "pg/kcp-v2/issue-billing-key/iframe-OemFPjTgUbFt3JKPRxgwBwScOx7qBJQRMGLDWD3v6cc=.js",
    "pg/kcp-v2/issue-billing-key/redirection":
      "pg/kcp-v2/issue-billing-key/redirection-Gj5mEh_2o1SidjUnKFeBy6Lp14o_QMwkcxMHB78uRpM=.js",
    "pg/kpn/issue-billing-key/iframe-impl":
      "pg/kpn/issue-billing-key/iframe-impl-7mHFNd1SF0NQMxdD9A2f1a3LDtt781Q0vMMOya6bV7Q=.js",
    "pg/kpn/issue-billing-key/iframe":
      "pg/kpn/issue-billing-key/iframe-TugsKkosCDIOp3W0m5fyWVT-qORRbLwVscPUOxAYAoA=.js",
    "pg/kpn/issue-billing-key/redirection":
      "pg/kpn/issue-billing-key/redirection-_U5N57Qcf6FrY0yt90naQ3vGB-GqGePx_WG2CCCBe70=.js",
    "pg/kpn/payment/iframe-impl":
      "pg/kpn/payment/iframe-impl-8NQ1II_XBQ1k9e8mH4tKtfygA4l4AdQknt10SfIx328=.js",
    "pg/kpn/payment/iframe":
      "pg/kpn/payment/iframe-idjjf07nVU5p08Qpdpeoh1AaFkdx_U780At_iZjHweQ=.js",
    "pg/kpn/payment/redirection":
      "pg/kpn/payment/redirection-6h5z2KULnrgCLkGZsxFRItm2J3wHB2-1mYgCwP_JdPc=.js",
    "pg/ksnet/payment/iframe-impl":
      "pg/ksnet/payment/iframe-impl-A_1IOVDLlYTCoh9KYyXyEavAxtPqrVl5MC0WN3mvqkg=.js",
    "pg/ksnet/payment/iframe":
      "pg/ksnet/payment/iframe-u_bsm0AOwSEBOtS9oRp3vl5tf69LLwuBViR21QZz6Ek=.js",
    "pg/ksnet/payment/redirection":
      "pg/ksnet/payment/redirection-tZarULlso-qW5677MOoUJxJu0zWbApoLjksKCUFfJzY=.js",
    "pg/naverpay/issue-billing-key/popup-impl":
      "pg/naverpay/issue-billing-key/popup-impl-1pyC_FOASXH2KWETslFMdhFwGBjrZ9hslu4-bMLMboc=.js",
    "pg/naverpay/issue-billing-key/popup":
      "pg/naverpay/issue-billing-key/popup-d1xxirzmYShn2-crPjS_-qOcNXJ48zZ1grfo_btbSuo=.js",
    "pg/naverpay/issue-billing-key/redirection":
      "pg/naverpay/issue-billing-key/redirection-yMN2ZlAU3NqXkcxcHI_oJg4Kk_H5QadiacN6J6tPMBo=.js",
    "pg/naverpay/payment/popup-impl":
      "pg/naverpay/payment/popup-impl-WNgQ2fB7SfvPvM3Z9zddbNsQ74kxLB7Jh2NazDm0QQk=.js",
    "pg/naverpay/payment/popup":
      "pg/naverpay/payment/popup--JDWyvp9ux8K_TGgHNGRsA1XEDiFAmENBmQIQ5t55gY=.js",
    "pg/naverpay/payment/redirection":
      "pg/naverpay/payment/redirection-K1b-7NYpN0ENwWdd9JjYLJAsR2BOtQXWIvzUL_oGbE4=.js",
    "pg/nice-v2/issue-billing-key/iframe-impl":
      "pg/nice-v2/issue-billing-key/iframe-impl-2gR_rOIbGoDw_FHY09uV6OGGjHdI6PrARBG3G646ZVc=.js",
    "pg/nice-v2/issue-billing-key/iframe":
      "pg/nice-v2/issue-billing-key/iframe-fj2Gw-iK2DtNgJ3Ya3ENb_Au5PHier0iQyTZRuIgEMc=.js",
    "pg/nice-v2/issue-billing-key/redirection":
      "pg/nice-v2/issue-billing-key/redirection-wIMBrNhCo4CM2AMs2Wdn65aGrj7Wrb97FIJRo9h05C8=.js",
    "pg/nice-v2/payment/iframe-impl":
      "pg/nice-v2/payment/iframe-impl-NVvFSJxUOJ4259pEJX5qxpO1J3NVuxPfjevRY5dN81M=.js",
    "pg/nice-v2/payment/iframe":
      "pg/nice-v2/payment/iframe-XbEzhoayC1A6kMLnOUD6avoNH3Cjm1ncncKFtBq2TLg=.js",
    "pg/nice-v2/payment/redirection":
      "pg/nice-v2/payment/redirection-lwe2DstU50_oOIMLzUAUNwVtsSWTbi3hHK5oyRVSfpY=.js",
    "pg/paypal-v2/issue-billing-key/ui":
      "pg/paypal-v2/issue-billing-key/ui-FnpjNjNntHtUcCLpH1FTHWSa1qMfNZ4aVFr0akfNwwY=.js",
    "pg/paypal-v2/payment/ui":
      "pg/paypal-v2/payment/ui-f--KPq4OhFPQpAY-rXsFWqxV1H9hl6Ode68MWSPm9E0=.js",
    "pg/smartro-v2/issue-billing-key/iframe-impl":
      "pg/smartro-v2/issue-billing-key/iframe-impl-aePR_uaWCtASeUEc9sJRGzB4tn6ZBxo532Ki7leYC80=.js",
    "pg/smartro-v2/issue-billing-key/iframe":
      "pg/smartro-v2/issue-billing-key/iframe-AS6aBP0u9Q7kuM8UtdHLt57s2kh0Lo3ith1u-PE4iwM=.js",
    "pg/smartro-v2/issue-billing-key/redirection":
      "pg/smartro-v2/issue-billing-key/redirection-QjqbOL_5Wjhl8oPsM3RmCSjM9_uI6NCyz9NSC8-qQ-c=.js",
    "pg/smartro-v2/payment/iframe-impl":
      "pg/smartro-v2/payment/iframe-impl-JaG2FIMmO8zUY__NGr-GMzN_y-rtUfX_Ig9S4NIsRJU=.js",
    "pg/smartro-v2/payment/iframe":
      "pg/smartro-v2/payment/iframe-3evFvZ3ZSvnkKdqocCzp4hhlVNwI2RjK-wrHIJ7EIvM=.js",
    "pg/smartro-v2/payment/redirection":
      "pg/smartro-v2/payment/redirection-3fh8p9HHkREknh17gP9RLDXRCgtbrsgl9qeUCPP8GRA=.js",
    "pg/toss-brandpay/module/toss-brandpay":
      "pg/toss-brandpay/module/toss-brandpay-u4-dkeQezPRop0AumN52yookbwER5hBHd2mee_1nzDg=.js",
    "pg/toss-brandpay/payment/iframe-impl":
      "pg/toss-brandpay/payment/iframe-impl-qODMckUNUmv1vvsi6eB_GSEWsF-4q-3j9uFeC2-RB88=.js",
    "pg/toss-brandpay/payment/iframe":
      "pg/toss-brandpay/payment/iframe-Sun9vhiHdqUf5VqFSsTky3S31B40Gqa10BrB3GxIiZ0=.js",
    "pg/toss-brandpay/payment/ui":
      "pg/toss-brandpay/payment/ui-Dk2rtEpvm8-5Pig_hK612Ln1wlriIiJna7xo1sXMLgg=.js",
    "pg/tosspay-v2/issue-billing-key/popup-impl":
      "pg/tosspay-v2/issue-billing-key/popup-impl-IGcWPagTa9i-488iuzuDvJVlAN8yJggLPUXN50UsvBk=.js",
    "pg/tosspay-v2/issue-billing-key/popup":
      "pg/tosspay-v2/issue-billing-key/popup-CRA7FLg5vvs8_jdxJUn8jbFCOp2hobD3lV5gBEfMZmQ=.js",
    "pg/tosspay-v2/issue-billing-key/redirection":
      "pg/tosspay-v2/issue-billing-key/redirection-yVs97m9oTetrvyn8SrSeAVpPUANxJp1tYZpwN0b-5LA=.js",
    "pg/tosspay-v2/payment/popup-impl":
      "pg/tosspay-v2/payment/popup-impl-mjTZvPTJ7lLe95IwitF22GMP_B2E5HXubYy8F8yorzw=.js",
    "pg/tosspay-v2/payment/popup":
      "pg/tosspay-v2/payment/popup-MUgNrZJFDvfvQDTiShnxJqW6Kdf8n_Fdzr21nTncmnI=.js",
    "pg/tosspay-v2/payment/redirection":
      "pg/tosspay-v2/payment/redirection-513Jwiv2hq6G2aG1fwbeVaa7gNygSOlmYNOBM3zMDD8=.js",
    "pg/tosspayments/issue-billing-key/iframe-impl":
      "pg/tosspayments/issue-billing-key/iframe-impl-HdZBgWrRzUusoolAmdyIrGzrGuQacolZRimE59f-fUg=.js",
    "pg/tosspayments/issue-billing-key/iframe":
      "pg/tosspayments/issue-billing-key/iframe-0LefUmsAGq7aQUcQ2TAbkpi0Q5vOS2NuzXZDhfyH1LE=.js",
    "pg/tosspayments/issue-billing-key/redirection":
      "pg/tosspayments/issue-billing-key/redirection-PnDt2Z4WjFmhG39FzJ8NVLxljWq3pL9xD1LPnEICVIc=.js",
    "pg/tosspayments/payment/iframe-impl":
      "pg/tosspayments/payment/iframe-impl-j0Iz1e-qJoeyugvRfpHfs2kh-LkJLSTTHtW-u3ppneA=.js",
    "pg/tosspayments/payment/iframe":
      "pg/tosspayments/payment/iframe-L06GocBVfDSo34nlj8Dn-1O8w8BY-fayK6GkFFwo26k=.js",
    "pg/tosspayments/payment/redirection":
      "pg/tosspayments/payment/redirection-kI3C1mumsRwNgXalS2a7GyEuF1OjmypTmOnJCC5W8us=.js",
    "pg/welcome/issue-billing-key/iframe-impl":
      "pg/welcome/issue-billing-key/iframe-impl-6AHl6jlrOYY5VJdRDv4EklDcAzNpXWR7imMNe5m-Qj8=.js",
    "pg/welcome/issue-billing-key/iframe":
      "pg/welcome/issue-billing-key/iframe-DGt0RxQUYD8xrGVCHv0LWpGmDduuo3TwHOzW0TsHNf0=.js",
    "pg/welcome/issue-billing-key/redirection":
      "pg/welcome/issue-billing-key/redirection-Tw4_Y5p_IgmXlZs5onpRvrXnBnPwrCiV0VlJEFtQqa0=.js",
    "pg/welcome/issue-billing-key-and-pay/iframe-impl":
      "pg/welcome/issue-billing-key-and-pay/iframe-impl-5XVCQVnVMT5rRYbISqQ8CHXwPiKXp5sf_2_gTiBgMs4=.js",
    "pg/welcome/issue-billing-key-and-pay/iframe":
      "pg/welcome/issue-billing-key-and-pay/iframe-tDuDVqfE-g3tqEp8QxUvf775UzIhT5KBwh3GZGalXLg=.js",
    "pg/welcome/issue-billing-key-and-pay/redirection":
      "pg/welcome/issue-billing-key-and-pay/redirection-HNgro477iJX7mJ411KhCCQ8D8ka4jUERXRZeNNunX3M=.js",
    "pg/welcome/payment/iframe-impl":
      "pg/welcome/payment/iframe-impl-8ZNq8hunAKuevpyYpvX-rqe_gro_gyitalVEvzube9g=.js",
    "pg/welcome/payment/iframe":
      "pg/welcome/payment/iframe--0gxcrXVx_e3UdNkrZMXj-F6M8WdzBDGh6cr8Nfb61E=.js",
    "pg/welcome/payment/redirection":
      "pg/welcome/payment/redirection-fmo-X2YyXBOQ4aA-s9DDe-Py75QqwUVhjuK07QFd6Ns=.js",
    "pg/kcp-v2/payment/card-direct/iframe-impl":
      "pg/kcp-v2/payment/card-direct/iframe-impl-WtchuL3xe5Y6snwg8KIg4A5k0gnb01hwvKwTj3Vd3G8=.js",
    "pg/kcp-v2/payment/card-direct/iframe":
      "pg/kcp-v2/payment/card-direct/iframe-UHYAZLMxje4WjUs1Cn67ncgbmv3iHpdAQnDCb0dF5Fo=.js",
    "pg/kcp-v2/payment/card-direct/redirection":
      "pg/kcp-v2/payment/card-direct/redirection-ZWedrd08m6Y7wW6y0wf31NMXIPqYoEFRvwCv_reW3jQ=.js",
    "pg/kcp-v2/payment/general/iframe-impl":
      "pg/kcp-v2/payment/general/iframe-impl-ljgvS-PHWxfXnZz_QOy7FyNyw3u1UC3oXLOttQoTR14=.js",
    "pg/kcp-v2/payment/general/iframe":
      "pg/kcp-v2/payment/general/iframe-v1FmRDY4KH7beXhYV_CXkLpxlu4xlXISxOVOomPD0tY=.js",
    "pg/kcp-v2/payment/general/redirection":
      "pg/kcp-v2/payment/general/redirection-LOUgZwoWm7vBu7tHIoDZBQ2Q5j46dsdPAGmWidlIn2I=.js",
    "pg/ksnet/payment/general/iframe-impl":
      "pg/ksnet/payment/general/iframe-impl-X3ZwqIdoc_fHqPv3qyhsIkDZ5zgXBxj4snPMZ5HLoXo=.js",
    "pg/ksnet/payment/general/iframe":
      "pg/ksnet/payment/general/iframe-SabUPiNX1MSoelNxnsTHI3ktvgfDv0vg3ha3UkHnvEs=.js",
    "pg/ksnet/payment/general/redirection":
      "pg/ksnet/payment/general/redirection-i6QuwaQn07_rWtBb4knAzP_E4d1cukPLtcjSLQD4yg8=.js",
    "pg/ksnet/payment/isp-card-direct/iframe-impl":
      "pg/ksnet/payment/isp-card-direct/iframe-impl-wvbktIRNemdgTzzTxwM3lWYMo6KzuQuC_YYDyc5XQ98=.js",
    "pg/ksnet/payment/isp-card-direct/iframe":
      "pg/ksnet/payment/isp-card-direct/iframe-RBdKPVLUcQGL7_T4SLsGXy8ZxIRTDL-bprbK3E9IsiY=.js",
    "pg/ksnet/payment/isp-card-direct/redirection":
      "pg/ksnet/payment/isp-card-direct/redirection-G2c8NKoF0UJYv05J_p9qcOKXZh4kwWo0IZQNaZUIN_E=.js",
    "pg/ksnet/payment/kb-card-direct/popup-impl":
      "pg/ksnet/payment/kb-card-direct/popup-impl-eRrFx43oviBFMgU7KyQx-pXqYH-Y6qQVFSBGfdIgvQ4=.js",
    "pg/ksnet/payment/kb-card-direct/popup":
      "pg/ksnet/payment/kb-card-direct/popup-DQdQui-8lqIhHBqBM0oRVuzEx-CzY78HHa4BO3pU-nw=.js",
    "pg/ksnet/payment/kb-card-direct/redirection":
      "pg/ksnet/payment/kb-card-direct/redirection-pfMZuKfEuoFa2v5GwiZs1Iab8JzoRvPw0jDCSyVFdek=.js",
    "pg/ksnet/payment/mpi-card-direct/iframe-impl":
      "pg/ksnet/payment/mpi-card-direct/iframe-impl-x3-hRZp7jgbN9ziUqzQaCU-NiVruMP63-cUKj-kQNJo=.js",
    "pg/ksnet/payment/mpi-card-direct/iframe":
      "pg/ksnet/payment/mpi-card-direct/iframe-3NBhfIdqeNqm_dlUr4SlZCsrxYwvQsTlpjG2xOIcLnE=.js",
    "pg/ksnet/payment/mpi-card-direct/redirection":
      "pg/ksnet/payment/mpi-card-direct/redirection-nTVlvTzjfmx49E9GjOeihhvvGN2xuyjjgBFVwS1yo3E=.js",
    "pg/danal/identity-verification/popup-def":
      "pg/danal/identity-verification/popup-def-gTHg6wfflM9ezplkC3iLzDKkfT5me-V9AjKNrWslI3M=.json",
    "pg/hyphen/payment/popup-def":
      "pg/hyphen/payment/popup-def-Wo-tc2W6YUbX1Y7QIwS2-i4kbx5pJWFfx33kaqQq9OQ=.json",
    "pg/inicis-unified/identity-verification/popup-def":
      "pg/inicis-unified/identity-verification/popup-def-Kw1523ZJa0GouW4OQ9z8zqrpb0QQhgnC136QdvssI-g=.json",
    "pg/inicis-v2/issue-billing-key/iframe-def":
      "pg/inicis-v2/issue-billing-key/iframe-def-BW3RcVr211I-vguq0r24fRo_-clgMoNewSTGzFL1mfA=.json",
    "pg/inicis-v2/issue-billing-key-and-pay/iframe-def":
      "pg/inicis-v2/issue-billing-key-and-pay/iframe-def-eHoxL6Izd3CsXozygFLIJXZyajJBlsLh2X5cfonePOk=.json",
    "pg/inicis-v2/payment/iframe-def":
      "pg/inicis-v2/payment/iframe-def-q08iit9YOlnnKEgbLom4dSVxrBhlHrZJ6vB992RnYKM=.json",
    "pg/kakaopay/issue-billing-key/iframe-def":
      "pg/kakaopay/issue-billing-key/iframe-def-mYoMKg_4h2FkBV7STHaLLDzFze_IRaeki9kxc4QRhrY=.json",
    "pg/kakaopay/payment/iframe-def":
      "pg/kakaopay/payment/iframe-def-EqOVEOUL_lkYkL-G-wQr5cJbgTLsqNiJLn5T52UJFuw=.json",
    "pg/kcp-v2/issue-billing-key/iframe-def":
      "pg/kcp-v2/issue-billing-key/iframe-def-OnDjxn2H40J-szOF6tpuH48dcAapI8R9vvPt7pKg22s=.json",
    "pg/kpn/issue-billing-key/iframe-def":
      "pg/kpn/issue-billing-key/iframe-def-H3fXNThInyh268bAUFRZBAynP-liBrIy8YHJKxpfTFA=.json",
    "pg/kpn/payment/iframe-def":
      "pg/kpn/payment/iframe-def-4NoEHU5kOo5FlR5cATb-XnM-lrEcT1DRZzTSeuaTi3I=.json",
    "pg/ksnet/payment/iframe-def":
      "pg/ksnet/payment/iframe-def-RlSlP5KSDLsByzfhBnsTa3J6rzwmWWfTS_MQyXdvfng=.json",
    "pg/naverpay/issue-billing-key/popup-def":
      "pg/naverpay/issue-billing-key/popup-def-_h7zM6MUZUrhGtAUNU8uE9DTns4D-s0gwTJLRIL1ZVw=.json",
    "pg/naverpay/payment/popup-def":
      "pg/naverpay/payment/popup-def-9E5yQOvY1190JOFtFtWB8pcZTkDlPVHEAfjW1IZi55M=.json",
    "pg/nice-v2/issue-billing-key/iframe-def":
      "pg/nice-v2/issue-billing-key/iframe-def-KFToGQDTWE-KE4wNzXWbO4mupIusMkrAXpn7u5KB9vk=.json",
    "pg/nice-v2/payment/iframe-def":
      "pg/nice-v2/payment/iframe-def-iT0VpK3QZFc8FQIwE212iuZE4NKYvrLKSF6KHnbKTUE=.json",
    "pg/smartro-v2/issue-billing-key/iframe-def":
      "pg/smartro-v2/issue-billing-key/iframe-def-NfZFQlTvai4mIzlHgFGSYZiMaNGIXl_42jbeODY3fOM=.json",
    "pg/smartro-v2/payment/iframe-def":
      "pg/smartro-v2/payment/iframe-def-adBgEYexSHmbuH-Q0XdUknQ-uc9Ajv2i5nLBlv8ZA-Q=.json",
    "pg/toss-brandpay/payment/iframe-def":
      "pg/toss-brandpay/payment/iframe-def-NOX0k0GLibou6vyp_yYsrPvkYrK_i0VnqDGS4LeckSI=.json",
    "pg/tosspay-v2/issue-billing-key/popup-def":
      "pg/tosspay-v2/issue-billing-key/popup-def-U4WclKBy3eqHUmKFjoKTc1t70L4qluGfRpQQ_OEyP8U=.json",
    "pg/tosspay-v2/payment/popup-def":
      "pg/tosspay-v2/payment/popup-def-puBnrhWEQl4BVMYcwNaCYci3R7dQfkZbk19NVi0_vKc=.json",
    "pg/tosspayments/issue-billing-key/iframe-def":
      "pg/tosspayments/issue-billing-key/iframe-def-N6mur1kYW5RqFch9tQnN4vnfuMJoJgNDNnMwHMfWtYc=.json",
    "pg/tosspayments/payment/iframe-def":
      "pg/tosspayments/payment/iframe-def-CKdIsr0hMZcuXqPIajm9l186epC6igQtxn_RPaSmkEc=.json",
    "pg/welcome/issue-billing-key/iframe-def":
      "pg/welcome/issue-billing-key/iframe-def-GV-SyI_o3CuKfuVvXrC00dwwv_WhAq1Kwm399TVen_w=.json",
    "pg/welcome/issue-billing-key-and-pay/iframe-def":
      "pg/welcome/issue-billing-key-and-pay/iframe-def-a7HiBXK26kBv5hqs1GlgWtKEWVGNX9wM2eklFBmFfww=.json",
    "pg/welcome/payment/iframe-def":
      "pg/welcome/payment/iframe-def-5ahv7gVJyOeaHAnyQQgZJEuzHYE1RLwMdQPMYYcSBCQ=.json",
    "pg/kcp-v2/payment/card-direct/iframe-def":
      "pg/kcp-v2/payment/card-direct/iframe-def-Wa-UFNIyYoGbOT_W2sg_rfzizON3UxDk3kAYh1FFGKA=.json",
    "pg/kcp-v2/payment/general/iframe-def":
      "pg/kcp-v2/payment/general/iframe-def-yUOhzjZfyc5-qjQl-v_3CyZRvaipWjNG6lMNr6kAWSQ=.json",
    "pg/ksnet/payment/general/iframe-def":
      "pg/ksnet/payment/general/iframe-def-RlSlP5KSDLsByzfhBnsTa3J6rzwmWWfTS_MQyXdvfng=.json",
    "pg/ksnet/payment/isp-card-direct/iframe-def":
      "pg/ksnet/payment/isp-card-direct/iframe-def-jy0Me_9YxmwJgkMuEpaMEzOSjZphuihIEYVZu8hugdQ=.json",
    "pg/ksnet/payment/kb-card-direct/popup-def":
      "pg/ksnet/payment/kb-card-direct/popup-def-2NhSQlRoY_1QWRtMCEzrKjmaxYg6oR-D_t8taZeg6s0=.json",
    "pg/ksnet/payment/mpi-card-direct/iframe-def":
      "pg/ksnet/payment/mpi-card-direct/iframe-def-ikssTAGvocGeY365nvSoB3WDwr3Crc3boN43PBuwPZ8=.json",
  };
  var Y = {},
    h = R((i) => {
      if ("moduleType" in i) {
        let e = R(
            (p) =>
              p.replace("PG_PROVIDER_", "").replace(/_/g, "-").toLowerCase(),
            "fmt"
          ),
          { pgProvider: r, moduleType: o } = i;
        return `pg/${e(r)}/module/${o}`;
      }
      if ("pgProvider" in i) {
        let e = R(
            (c) =>
              c.replace("PG_PROVIDER_", "").replace(/_/g, "-").toLowerCase(),
            "fmt"
          ),
          {
            pgProvider: r,
            transactionType: o,
            windowType: p,
            pgModuleType: N,
          } = i;
        return `pg/${e(r)}/${e(o)}/${(N ? `${e(N)}/` : "") + e(p)}`;
      } else {
        let e = R((p) => p.replace(/_/g, "-").toLowerCase(), "fmt"),
          { transactionType: r, uiType: o } = i;
        return `loadable-ui/${e(r)}/${e(o)}`;
      }
    }, "getDriverIdentifier"),
    H = R((i) => {
      let e = u[i];
      if (!e)
        throw new Error(
          `\uC870\uAC74\uC5D0 \uB9DE\uB294 \uB4DC\uB77C\uC774\uBC84(${i})\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`
        );
      return new Promise(async (r, o) => {
        await w(), ar();
        let p = document.createElement("script");
        (p.async = !0),
          (p.src = `${m.DRIVER_SERVE_URL}/${e}`),
          p.addEventListener("load", () => r()),
          p.addEventListener("error", () =>
            o(
              new Error(
                `\uAE30\uB2A5 \uC2E4\uD589\uC744 \uC704\uD55C \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB529\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. (\uB4DC\uB77C\uC774\uBC84 ID: ${i})`
              )
            )
          ),
          document.body.appendChild(p);
      });
    }, "loadDriver");
  function ar() {
    window.__PORTONE__ = {
      registerDriver(i, e) {
        Y[i] = e;
      },
    };
  }
  R(ar, "setupDriverHooks");
  async function w() {
    await Promise.all(
      Object.values(Y)
        .filter(Boolean)
        .map((i) => i.onBeforeCleanup?.({ slots: m, driverManifest: u }))
    );
    for (let i of Object.keys(Y)) {
      let e = `${m.DRIVER_SERVE_URL}/${u[i]}`,
        r = document.querySelector(`script[src="${e}"]`);
      r && r.parentNode?.removeChild(r), delete Y[i];
    }
  }
  R(w, "cleanupDriver");
  var pi = Fi(ai(), 1);
  function G() {
    let { device: i, os: e } = (0, pi.UAParser)(navigator.userAgent),
      { type: r } = i,
      o =
        r === "mobile" || r === "tablet"
          ? "PLATFORM_TYPE_MOBILE"
          : "PLATFORM_TYPE_PC",
      p = e.name === "Mac OS" && navigator.maxTouchPoints > 1;
    return { platformType: o, isIpad: p };
  }
  R(G, "getDeviceInfo");
  async function Le(i) {
    let {
      pgProvider: e,
      identityVerificationId: r,
      storeId: o,
      identityVerificationTxId: p,
      windowType: N,
      message: c,
    } = i;
    try {
      let d = await fetch(
        `${m.CHECKOUT_SERVER}/api/identity-verification-fail/${e}/v2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identityVerificationId: r,
            storeId: o,
            identityVerificationTxId: p,
            windowType: N,
            message: c,
            redirectUrl: i.redirectUrl,
            responseType: "json",
          }),
        }
      );
      if (!d.ok) {
        let E = await d.text(),
          t = "UnknownError",
          s = `\uBCF8\uC778\uC778\uC99D \uC2E4\uD328 \uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${E}`;
        try {
          let n = JSON.parse(E);
          (t = n.code), (s = n.message);
        } catch {}
        throw new D({
          code: t,
          message: s,
          identityVerificationId: r,
          identityVerificationTxId: p,
        });
      }
      let l = await d.json();
      return {
        transactionType: "IDENTITY_VERIFICATION",
        identityVerificationTxId: l.identityVerificationTxId ?? p,
        identityVerificationId: l.identityVerificationId ?? r,
        code: l.code ?? "UnknownError",
        message: l.message ?? c,
      };
    } catch (d) {
      if (Q(d)) throw d;
      let { code: l, message: E } = d.response?.data || {
        code: "UnknownError",
        message: d.message,
      };
      throw new D({
        code: l,
        message: E,
        identityVerificationId: r,
        identityVerificationTxId: p,
      });
    }
  }
  R(Le, "failIdentityVerification");
  var Te = {};
  ve(Te, {
    ActionType: () => _i,
    FailureType: () => Ri,
    IdentityVerificationStatus: () => ci,
    IssueBillingKeyStatus: () => Ei,
    ModuleType: () => li,
    PaymentStatus: () => di,
    PlatformType: () => Ni,
  });
  var pr = {
      LOAD_UI: "LOAD_UI",
      REQUEST_IDENTITY_VERIFICATION: "REQUEST_IDENTITY_VERIFICATION",
      REQUEST_ISSUE_BILLING_KEY: "REQUEST_ISSUE_BILLING_KEY",
      REQUEST_ISSUE_BILLING_KEY_AND_PAY: "REQUEST_ISSUE_BILLING_KEY_AND_PAY",
      REQUEST_PAY: "REQUEST_PAY",
    },
    _i = pr;
  var _r = {
      UNSPECIFIED: "FAILURE_TYPE_UNSPECIFIED",
      INITIALIZE_FAILED_NO_CANDIDATE_CHANNEL:
        "FAILURE_TYPE_INITIALIZE_FAILED_NO_CANDIDATE_CHANNEL",
      INITIALIZE_FAILED_FETCHING_CHANNELS_FAILED:
        "FAILURE_TYPE_INITIALIZE_FAILED_FETCHING_CHANNELS_FAILED",
      PREPARE_FAILED_NO_SATISFIED_CHANNEL:
        "FAILURE_TYPE_PREPARE_FAILED_NO_SATISFIED_CHANNEL",
      PREPARE_FAILED_TGS_PREPARE_FAILED:
        "FAILURE_TYPE_PREPARE_FAILED_TGS_PREPARE_FAILED",
      STORE_VALIDATION_FAILED: "FAILURE_TYPE_STORE_VALIDATION_FAILED",
      CHANNEL_VALIDATION_FAILED: "FAILURE_TYPE_CHANNEL_VALIDATION_FAILED",
      CONFIRM_PROCESS_FAILED: "FAILURE_TYPE_CONFIRM_PROCESS_FAILED",
      AUTHENTICATION_FAILED: "FAILURE_TYPE_AUTHENTICATION_FAILED",
      FORGERY_CHECK_FAILED: "FAILURE_TYPE_FORGERY_CHECK_FAILED",
      APPROVE_FAILED_TGS_APPROVE_FAILED:
        "FAILURE_TYPE_APPROVE_FAILED_TGS_APPROVE_FAILED",
      ISSUE_VIRTUAL_ACCOUNT_FAILED: "FAILURE_TYPE_ISSUE_VIRTUAL_ACCOUNT_FAILED",
      STOPPED: "FAILURE_TYPE_STOPPED",
      BILLING_KEY_TGS_PAY_FAILED: "FAILURE_TYPE_BILLING_KEY_TGS_PAY_FAILED",
      INSTANT_TGS_PAY_FAILED: "FAILURE_TYPE_INSTANT_TGS_PAY_FAILED",
    },
    Ri = _r;
  var Rr = {
      STATUS_UNSPECIFIED: "STATUS_UNSPECIFIED",
      STATUS_PREPARED: "STATUS_PREPARED",
      STATUS_FAILED: "STATUS_FAILED",
      STATUS_VERIFIED: "STATUS_VERIFIED",
    },
    ci = Rr;
  var cr = {
      STATUS_UNSPECIFIED: "STATUS_UNSPECIFIED",
      STATUS_PREPARED: "STATUS_PREPARED",
      STATUS_FAILED: "STATUS_FAILED",
      STATUS_APPROVED: "STATUS_APPROVED",
    },
    Ei = cr;
  var li = { "toss-brandpay": "Tosspayments Brandpay SDK" };
  var Er = {
      STATUS_UNSPECIFIED: "STATUS_UNSPECIFIED",
      STATUS_INITIALIZED: "STATUS_INITIALIZED",
      STATUS_PREPARED: "STATUS_PREPARED",
      STATUS_FAILED: "STATUS_FAILED",
      STATUS_STOPPED: "STATUS_STOPPED",
      STATUS_APPROVED: "STATUS_APPROVED",
      STATUS_PARTIAL_CANCELLED: "STATUS_PARTIAL_CANCELLED",
      STATUS_CANCELLED: "STATUS_CANCELLED",
      STATUS_VIRTUAL_ACCOUNT_ISSUED: "STATUS_VIRTUAL_ACCOUNT_ISSUED",
    },
    di = Er;
  var Ni = { PC: "PLATFORM_TYPE_PC", MOBILE: "PLATFORM_TYPE_MOBILE" };
  async function mi(i, e, r) {
    try {
      let o = new URL(
        `${m.CHECKOUT_SERVER}/api/identity-verification-status/v2`
      );
      o.searchParams.append("storeId", i),
        o.searchParams.append("identityVerificationId", e),
        o.searchParams.append("identityVerificationTxId", r);
      let p = await fetch(o);
      if (!p.ok) {
        let N = await p.text(),
          c = "UnknownError",
          d = `\uBCF8\uC778\uC778\uC99D \uACB0\uACFC \uD655\uC778 \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${N}`;
        try {
          let l = JSON.parse(N);
          (c = l.code), (d = l.message);
        } catch {}
        throw new D({
          code: c,
          message: d,
          identityVerificationId: e,
          identityVerificationTxId: r,
        });
      }
      return p.json();
    } catch (o) {
      throw Q(o)
        ? o
        : new D({
            code: "UnknownError",
            message:
              o.message || "본인인증 결과 확인 과정에서 문제가 발생하였습니다.",
            identityVerificationId: e,
            identityVerificationTxId: r,
          });
    }
  }
  R(mi, "checkIdentityVerificationStatus");
  async function yi(i) {
    if (!i)
      throw new D({
        code: "BadRequest",
        message: "본인인증 요청 파라메터가 누락되었습니다.",
      });
    try {
      let e = await fetch(
        `${m.CHECKOUT_SERVER}/api/identity-verification-prepare/v2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: i,
            sdkVersion: m.SDK_VERSION,
            deviceInfo: G(),
          }),
        }
      );
      if (!e.ok) {
        let p = await e.text(),
          { code: N, message: c } = (() => {
            try {
              return JSON.parse(p);
            } catch {
              return {
                code: "UnknownError",
                message: `\uBCF8\uC778\uC778\uC99D \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${p}`,
              };
            }
          })();
        throw new D({ code: N, message: c });
      }
      let r = await e.json();
      if (!r)
        throw new Error(
          "본인인증 창 호출에 필요한 데이터가 전달되지 않았습니다."
        );
      let o = h({
        pgProvider: r.pgProvider,
        transactionType: r.transactionType,
        windowType: r.windowType,
        pgModuleType: r.pgModuleType,
      });
      return (
        await H(o),
        await Y[o].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: r,
        }),
        await new Promise((p, N) => {
          Y[o].onAfterPrepare?.(
            { slots: m, driverManifest: u, prepareResponse: r },
            {
              onTransactionFail: async (c, d) => {
                if (
                  c === K.TransactionType.IDENTITY_VERIFICATION &&
                  !("txId" in d) &&
                  !("billingKey" in d)
                ) {
                  let l = await Le(d);
                  p(l);
                } else
                  p({
                    transactionType: "IDENTITY_VERIFICATION",
                    identityVerificationId: r.identityVerificationId,
                    identityVerificationTxId: r.identityVerificationTxId,
                    code: "UnknownError",
                    message: "올바르지 않은 본인인증 결과가 반환되었습니다.",
                  });
              },
              onTransactionOver: async (c, d) => {
                await w(),
                  c === K.TransactionType.IDENTITY_VERIFICATION &&
                  "identityVerificationTxId" in d
                    ? p(d)
                    : N(
                        new D({
                          code: "UnknownError",
                          message:
                            "올바르지 않은 본인인증 결과가 반환되었습니다.",
                        })
                      );
              },
              onForceClose: async () => {
                let c = {
                  transactionType: "IDENTITY_VERIFICATION",
                  identityVerificationId: r.identityVerificationId,
                  identityVerificationTxId: r.identityVerificationTxId,
                };
                try {
                  let d = await mi(
                      r.storeId,
                      r.identityVerificationId,
                      r.identityVerificationTxId
                    ),
                    { status: l } = d;
                  switch (l) {
                    case "STATUS_VERIFIED": {
                      p(c);
                      break;
                    }
                    case "STATUS_FAILED": {
                      let { failure: E } = d,
                        { code: t, message: s } = (() => {
                          if (E) {
                            let { pgCode: n, pgMessage: a } = E;
                            if (a)
                              return {
                                code: "PG_PROVIDER_ERROR",
                                message: n ? `[${n}] ${a}` : a,
                              };
                          }
                          return {
                            code: "PORTONE_ERROR",
                            message: E?.message || "본인인증에 실패하였습니다.",
                          };
                        })();
                      p({ ...c, code: t, message: s });
                      break;
                    }
                    case "STATUS_PREPARED": {
                      let E = await Le({
                        pgProvider: r.pgProvider,
                        storeId: r.storeId,
                        identityVerificationId: r.identityVerificationId,
                        identityVerificationTxId: r.identityVerificationTxId,
                        windowType: "POPUP",
                        redirectUrl: r.redirectUrl,
                        message: "사용자가 본인인증을 취소하였습니다.",
                      });
                      p(E);
                      break;
                    }
                    default: {
                      p({
                        ...c,
                        code: "UnknownError",
                        message:
                          "해당 본인인증 건의 상태 오류로 인해 요청을 처리할 수 없습니다.",
                      });
                      break;
                    }
                  }
                } catch (d) {
                  p({
                    ...c,
                    code: d.code || "UnknownError",
                    message: `\uBCF8\uC778\uC778\uC99D \uD31D\uC5C5 \uC885\uB8CC \uD6C4 \uC11C\uBC84\uC640 \uD1B5\uC2E0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${d.message}`,
                  });
                }
              },
            }
          );
        })
      );
    } catch (e) {
      throw (
        (await w(),
        e instanceof D
          ? e
          : new D({
              code: "UnknownError",
              message: `\uBCF8\uC778\uC778\uC99D \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(yi, "requestIdentityVerification");
  var W = {},
    Ci = R((i) => {
      if ("moduleType" in i) {
        let e = R(
            (p) =>
              p.replace("PG_PROVIDER_", "").replace(/_/g, "-").toLowerCase(),
            "fmt"
          ),
          { pgProvider: r, moduleType: o } = i;
        return `pg/${e(r)}/module/${o}`;
      }
      if ("pgProvider" in i) {
        let e = R(
            (c) =>
              c.replace("PG_PROVIDER_", "").replace(/_/g, "-").toLowerCase(),
            "fmt"
          ),
          {
            pgProvider: r,
            transactionType: o,
            windowType: p,
            pgModuleType: N,
          } = i;
        return `pg/${e(r)}/${e(o)}/${(N ? `${e(N)}/` : "") + e(p)}`;
      } else {
        let e = R((p) => p.replace(/_/g, "-").toLowerCase(), "fmt"),
          { transactionType: r, uiType: o } = i;
        return `loadable-ui/${e(r)}/${e(o)}`;
      }
    }, "getDriverIdentifier"),
    Ti = R((i) => {
      let e = u[i];
      if (!e)
        throw new Error(
          `\uC870\uAC74\uC5D0 \uB9DE\uB294 \uB4DC\uB77C\uC774\uBC84(${i})\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`
        );
      return new Promise(async (r, o) => {
        await ke(), lr();
        let p = document.createElement("script");
        (p.async = !0),
          (p.src = `${m.DRIVER_SERVE_URL}/${e}`),
          p.addEventListener("load", () => r()),
          p.addEventListener("error", () =>
            o(
              new Error(
                `\uAE30\uB2A5 \uC2E4\uD589\uC744 \uC704\uD55C \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB529\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. (\uB4DC\uB77C\uC774\uBC84 ID: ${i})`
              )
            )
          ),
          document.body.appendChild(p);
      });
    }, "loadDriver");
  function lr() {
    window.__PORTONE__ = {
      registerDriver(i, e) {
        W[i] = e;
      },
    };
  }
  R(lr, "setupDriverHooks");
  async function ke() {
    await Promise.all(
      Object.values(W)
        .filter(Boolean)
        .map((i) => i.onBeforeCleanup?.({ slots: m, driverManifest: u }))
    );
    for (let i of Object.keys(W)) {
      let e = `${m.DRIVER_SERVE_URL}/${u[i]}`,
        r = document.querySelector(`script[src="${e}"]`);
      r && r.parentNode?.removeChild(r), delete W[i];
    }
  }
  R(ke, "cleanupDriver");
  async function pe(i) {
    let {
      pgProvider: e,
      billingKey: r,
      windowType: o,
      pgCode: p,
      pgMessage: N,
      message: c,
    } = i;
    try {
      let d = await fetch(`${m.CHECKOUT_SERVER}/api/issue-fail/${e}/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billingKey: r,
          portOneBillingKey: r,
          windowType: o,
          pgCode: p,
          pgMessage: N,
          message: c,
          responseType: "json",
        }),
      });
      if (!d.ok) {
        let t = await d.text(),
          s = "UnknownError",
          n = `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uC2E4\uD328 \uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${t}`;
        try {
          let a = JSON.parse(t);
          (s = a.code), (n = a.message);
        } catch {}
        throw new P({ code: s, message: n, billingKey: r });
      }
      let l = await d.json();
      return {
        transactionType: "ISSUE_BILLING_KEY",
        billingKey: l.billingKey,
        code: l.code,
        message: l.message,
      };
    } catch (d) {
      if (v(d)) throw d;
      let { code: l, message: E } = d.response?.data || {
        code: "UnknownError",
        message: d.message,
      };
      throw new P({ code: l, message: E, billingKey: r });
    }
  }
  R(pe, "failIssueBillingKey");
  async function Ii(i) {
    try {
      let e = new URL(`${m.CHECKOUT_SERVER}/api/issue-status/v2`);
      e.searchParams.append("billingKey", i);
      let r = await fetch(e);
      if (!r.ok) {
        let o = await r.text(),
          p = "UnknownError",
          N = `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uACB0\uACFC \uD655\uC778 \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${o}`;
        try {
          let c = JSON.parse(o);
          (p = c.code), (N = c.message);
        } catch {}
        throw new P({ code: p, message: N, billingKey: i });
      }
      return r.json();
    } catch (e) {
      throw v(e)
        ? e
        : new P({
            code: "UnknownError",
            message:
              e.message ||
              "빌링키 발급 결과 확인 과정에서 문제가 발생하였습니다.",
            billingKey: i,
          });
    }
  }
  R(Ii, "checkIssueBillingKeyStatus");
  async function Ie(i, e = !1) {
    let r = await fetch(`${m.CHECKOUT_SERVER}/api/issue-prepare/v2`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: i,
        sdkVersion: m.SDK_VERSION,
        deviceInfo: G(),
      }),
    });
    if (!r.ok) {
      let c = await r.text(),
        { code: d, message: l } = (() => {
          try {
            return JSON.parse(c);
          } catch {
            return {
              code: "UnknownError",
              message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${c}`,
            };
          }
        })();
      throw new P({ code: d, message: l });
    }
    let o = await r.json();
    if (!o)
      throw new P({
        code: "UnknownError",
        message:
          "결제 창 호출에 필요한 데이터를 전달하는 과정에서 알 수 없는 문제가 발생하였습니다.",
      });
    let p = Ci({
      pgProvider: o.pgProvider,
      transactionType: o.transactionType,
      windowType: o.windowType,
      pgModuleType: o.pgModuleType,
    });
    await Ti(p),
      e ||
        (await W[p].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: o,
        }));
    let N = new Promise((c, d) => {
      W[p].onAfterPrepare?.(
        { slots: m, driverManifest: u, prepareResponse: o },
        {
          onTransactionFail: async (l, E) => {
            if (
              l === K.TransactionType.ISSUE_BILLING_KEY &&
              "billingKey" in E
            ) {
              let t = await pe(E);
              c(t);
            } else
              c({
                transactionType: "ISSUE_BILLING_KEY",
                billingKey: o.billingKey,
                code: "UnknownError",
                message: "올바르지 않은 빌링키 발급 결과가 반환되었습니다.",
              });
          },
          onTransactionOver: async (l, E) => {
            await ke(),
              l === K.TransactionType.ISSUE_BILLING_KEY &&
              "billingKey" in E &&
              !("paymentId" in E)
                ? c(E)
                : d(
                    new P({
                      code: "UnknownError",
                      message:
                        "올바르지 않은 빌링키 발급 결과가 반환되었습니다.",
                    })
                  );
          },
          onForceClose: async () => {
            let l = {
              transactionType: "ISSUE_BILLING_KEY",
              billingKey: o.billingKey,
            };
            try {
              let E = await Ii(o.billingKey),
                { status: t } = E;
              switch (t) {
                case "STATUS_APPROVED": {
                  c(l);
                  break;
                }
                case "STATUS_FAILED": {
                  let { failure: s } = E,
                    { code: n, message: a } = (() => {
                      if (s) {
                        let { pgCode: _, pgMessage: S } = s;
                        if (S)
                          return {
                            code: "PG_PROVIDER_ERROR",
                            message: _ ? `[${_}] ${S}` : S,
                          };
                      }
                      return {
                        code: "PORTONE_ERROR",
                        message: s?.message || "빌링키 발급에 실패하였습니다.",
                      };
                    })();
                  c({ ...l, code: n, message: a });
                  break;
                }
                case "STATUS_PREPARED": {
                  let s = await pe({
                    pgProvider: o.pgProvider,
                    billingKey: o.billingKey,
                    windowType: "POPUP",
                    message: "사용자가 빌링키 발급을 취소하였습니다.",
                  });
                  c(s);
                  break;
                }
                default: {
                  c({
                    ...l,
                    code: "UnknownError",
                    message:
                      "해당 빌링키 발급 건의 상태 오류로 인해 요청을 처리할 수 없습니다.",
                  });
                  break;
                }
              }
            } catch (E) {
              c({
                ...l,
                code: E.code || "UnknownError",
                message: `\uBE4C\uB9C1\uD0A4 \uD31D\uC5C5 \uC885\uB8CC \uD6C4 \uC11C\uBC84\uC640 \uD1B5\uC2E0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${E.message}`,
              });
            }
          },
        }
      );
    });
    return { prepareResponse: o, issueBillingKeyResult: N };
  }
  R(Ie, "prepareIssueBillingKey");
  async function Ai(i) {
    if (!i)
      throw new P({
        code: "BadRequest",
        message: "빌링키 발급 요청 파라메터가 누락되었습니다.",
      });
    try {
      let { prepareResponse: e, issueBillingKeyResult: r } = await Ie(i);
      return await r;
    } catch (e) {
      throw (
        (await w(),
        v(e)
          ? e
          : new P({
              code: "UnknownError",
              message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(Ai, "requestIssueBillingKey");
  async function gi(i) {
    let {
      pgProvider: e,
      txId: r,
      paymentId: o,
      billingKey: p,
      windowType: N,
      pgCode: c,
      pgMessage: d,
      message: l,
    } = i;
    try {
      let E = await fetch(
        `${m.CHECKOUT_SERVER}/api/issue-billing-key-and-pay-fail/${e}/v2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            txId: r,
            paymentId: o,
            billingKey: p,
            windowType: N,
            pgCode: c,
            pgMessage: d,
            message: l,
            responseType: "json",
          }),
        }
      );
      if (!E.ok) {
        let s = await E.text(),
          n = "UnknownError",
          a = `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uBC0F \uACB0\uC81C \uC2E4\uD328 \uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${s}`;
        try {
          let _ = JSON.parse(s);
          (n = _.code), (a = _.message);
        } catch {}
        throw new V({
          txId: r,
          paymentId: o,
          billingKey: p,
          code: n,
          message: a,
        });
      }
      let t = await E.json();
      return {
        transactionType: "ISSUE_BILLING_KEY_AND_PAY",
        txId: t.txId ?? r,
        paymentId: t.paymentId ?? o,
        billingKey: t.billingKey ?? p,
        code: t.code ?? "UnknownError",
        message: t.message ?? l,
      };
    } catch (E) {
      if ($(E)) throw E;
      let { code: t, message: s } = E.response?.data || {
        code: "UnknownError",
        message: E.message,
      };
      throw new V({
        txId: r,
        paymentId: o,
        billingKey: p,
        code: t,
        message: s,
      });
    }
  }
  R(gi, "failIssueBillingKeyAndPay");
  async function Ui(i) {
    if (!i)
      throw new V({
        code: "BadRequest",
        message: "빌링키 발급 및 결제 요청 파라메터가 누락되었습니다.",
      });
    try {
      let e = await fetch(
        `${m.CHECKOUT_SERVER}/api/issue-billing-key-and-pay-prepare/v2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: {
              ...i,
              actionType: Te.ActionType.REQUEST_ISSUE_BILLING_KEY_AND_PAY,
            },
            deviceInfo: G(),
            sdkVersion: m.SDK_VERSION,
          }),
        }
      );
      if (!e.ok) {
        let s = await e.text(),
          { code: n, message: a } = (() => {
            try {
              return JSON.parse(s);
            } catch {
              return {
                code: "UnknownError",
                message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uBC0F \uACB0\uC81C \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${s}`,
              };
            }
          })();
        throw new V({ code: n, message: a });
      }
      let r = await e.json();
      if (!r)
        throw new Error(
          "빌링키 발급 및 결제 창 호출에 필요한 데이터가 전달되지 않았습니다."
        );
      let {
          txId: o,
          paymentId: p,
          billingKey: N,
          pgProvider: c,
          transactionType: d,
          windowType: l,
          pgModuleType: E,
        } = r,
        t = h({
          pgProvider: c,
          transactionType: d,
          windowType: l,
          pgModuleType: E,
        });
      return (
        await H(t),
        await Y[t].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: r,
        }),
        await new Promise((s, n) => {
          Y[t].onAfterPrepare?.(
            { slots: m, driverManifest: u, prepareResponse: r },
            {
              onTransactionFail: async (a, _) => {
                if (
                  a === K.TransactionType.ISSUE_BILLING_KEY_AND_PAY &&
                  "txId" in _ &&
                  "paymentId" in _ &&
                  "billingKey" in _
                ) {
                  let S = await gi(_);
                  s(S);
                } else
                  s({
                    transactionType: "ISSUE_BILLING_KEY_AND_PAY",
                    txId: o,
                    paymentId: p,
                    billingKey: N,
                    code: "UnknownError",
                    message:
                      "올바르지 않은 빌링키 발급 및 결제 결과가 반환되었습니다.",
                  });
              },
              onTransactionOver: async (a, _) => {
                await w(),
                  a === K.TransactionType.ISSUE_BILLING_KEY_AND_PAY &&
                  "txId" in _ &&
                  "paymentId" in _ &&
                  "billingKey" in _
                    ? s(_)
                    : n(
                        new V({
                          code: "UnknownError",
                          message:
                            "올바르지 않은 빌링키 발급 및 결제 결과가 반환되었습니다.",
                        })
                      );
              },
              onForceClose: async () => {
                s({
                  ...{
                    transactionType: "ISSUE_BILLING_KEY_AND_PAY",
                    txId: o,
                    paymentId: p,
                    billingKey: N,
                  },
                  code: "UnknownError",
                  message:
                    "V2 requestIssueBillingKeyAndPay()에 onForceClose() 구현 필요",
                });
              },
            }
          );
        })
      );
    } catch (e) {
      throw (
        (await w(),
        $(e)
          ? e
          : new V({
              code: "UnknownError",
              message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uBC0F \uACB0\uC81C \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(Ui, "requestIssueBillingKeyAndPay");
  async function _e(i) {
    let {
      pgProvider: e,
      storeId: r,
      txId: o,
      paymentId: p,
      windowType: N,
      pgCode: c,
      pgMessage: d,
      message: l,
    } = i;
    try {
      let E = await fetch(`${m.CHECKOUT_SERVER}/api/fail/${e}/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId: r,
          txId: o,
          paymentId: p,
          windowType: N,
          pgCode: c,
          pgMessage: d,
          message: l,
          responseType: "json",
        }),
      });
      if (!E.ok) {
        let n = await E.text(),
          a = "UnknownError",
          _ = `\uACB0\uC81C \uC2E4\uD328 \uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${n}`;
        try {
          let S = JSON.parse(n);
          (a = S.code), (_ = S.message);
        } catch {}
        throw new g({ code: a, message: _, txId: o, paymentId: p });
      }
      let t = await E.json();
      return {
        transactionType: "PAYMENT",
        txId: t.txId,
        paymentId: t.paymentId,
        code: t.code,
        message: t.message,
      };
    } catch (E) {
      if (b(E)) throw E;
      let { code: t, message: s } = E.response?.data || {
        code: "UnknownError",
        message: E.message,
      };
      throw new g({ code: t, message: s, txId: o, paymentId: p });
    }
  }
  R(_e, "failPayment");
  async function fi(i, e, r) {
    try {
      let o = new URL(`${m.CHECKOUT_SERVER}/api/status/v2`);
      o.searchParams.append("storeId", i),
        o.searchParams.append("paymentId", e),
        o.searchParams.append("txId", r);
      let p = await fetch(o);
      if (!p.ok) {
        let N = await p.text(),
          c = "UnknownError",
          d = `\uACB0\uC81C \uACB0\uACFC \uD655\uC778 \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${N}`;
        try {
          let l = JSON.parse(N);
          (c = l.code), (d = l.message);
        } catch {}
        throw new g({ code: c, message: d, txId: r, paymentId: e });
      }
      return p.json();
    } catch (o) {
      throw b(o)
        ? o
        : new g({
            code: "UnknownError",
            message:
              o.message || "결제 결과 확인 과정에서 문제가 발생하였습니다.",
            txId: r,
            paymentId: e,
          });
    }
  }
  R(fi, "checkPaymentStatus");
  async function Ae(i, e = !1) {
    let r = await fetch(`${m.CHECKOUT_SERVER}/api/prepare/v2`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: i,
        sdkVersion: m.SDK_VERSION,
        deviceInfo: G(),
      }),
    });
    if (!r.ok) {
      let c = await r.text(),
        { code: d, message: l } = (() => {
          try {
            return JSON.parse(c);
          } catch {
            return {
              code: "UnknownError",
              message: `\uACB0\uC81C \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${c}`,
            };
          }
        })();
      throw new g({ code: d, message: l });
    }
    let o = await r.json();
    if (!o)
      throw new g({
        code: "UnknownError",
        message:
          "결제 창 호출에 필요한 데이터를 전달하는 과정에서 알 수 없는 문제가 발생하였습니다.",
      });
    let p = h({
      pgProvider: o.pgProvider,
      transactionType: o.transactionType,
      windowType: o.windowType,
      pgModuleType: o.pgModuleType,
    });
    await H(p),
      e ||
        (await Y[p].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: o,
        }));
    let N = new Promise((c, d) => {
      Y[p].onAfterPrepare?.(
        { slots: m, driverManifest: u, prepareResponse: o },
        {
          onTransactionFail: async (l, E) => {
            if (
              l === K.TransactionType.PAYMENT &&
              !("billingKey" in E) &&
              !("identityVerificationTxId" in E)
            ) {
              let t = await _e(E);
              c(t);
            } else
              c({
                transactionType: "PAYMENT",
                txId: o.txId,
                paymentId: o.paymentId,
                code: "UnknownError",
                message: "올바르지 않은 결제 결과가 반환되었습니다.",
              });
          },
          onTransactionOver: async (l, E) => {
            await w(),
              l === K.TransactionType.PAYMENT &&
              "txId" in E &&
              !("billingKey" in E)
                ? c(E)
                : d(
                    new g({
                      code: "UnknownError",
                      message: "올바르지 않은 결제 결과가 반환되었습니다.",
                    })
                  );
          },
          onForceClose: async () => {
            let l = {
              transactionType: "PAYMENT",
              txId: o.txId,
              paymentId: o.paymentId,
            };
            try {
              let E = await fi(o.storeId, o.paymentId, o.txId),
                { status: t } = E;
              switch (t) {
                case "STATUS_APPROVED":
                case "STATUS_VIRTUAL_ACCOUNT_ISSUED": {
                  c(l);
                  break;
                }
                case "STATUS_FAILED": {
                  let { failure: s } = E,
                    { code: n, message: a } = (() => {
                      if (s) {
                        let { pgCode: _, pgMessage: S } = s;
                        if (S)
                          return {
                            code: "PG_PROVIDER_ERROR",
                            message: _ ? `[${_}] ${S}` : S,
                          };
                      }
                      return {
                        code: "PORTONE_ERROR",
                        message: s?.message || "결제에 실패하였습니다.",
                      };
                    })();
                  c({ ...l, code: n, message: a });
                  break;
                }
                case "STATUS_PREPARED": {
                  let s = await _e({
                    ...o,
                    windowType: "POPUP",
                    message: "사용자가 결제를 취소하였습니다.",
                  });
                  c(s);
                  break;
                }
                default: {
                  c({
                    ...l,
                    code: "UnknownError",
                    message:
                      "해당 결제 건의 상태 오류로 인해 요청을 처리할 수 없습니다.",
                  });
                  break;
                }
              }
            } catch (E) {
              c({
                ...l,
                code: E.code || "UnknownError",
                message: `\uACB0\uC81C \uD31D\uC5C5 \uC885\uB8CC \uD6C4 \uC11C\uBC84\uC640 \uD1B5\uC2E0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${E.message}`,
              });
            }
          },
        }
      );
    });
    return { prepareResponse: o, paymentResult: N };
  }
  R(Ae, "preparePayment");
  async function Pi(i) {
    if (!i.channelGroupId) return i;
    let e = await fetch(`${m.CHECKOUT_SERVER}/api/route-payment/v2`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentRequest: i, sdkVersion: m.SDK_VERSION }),
    });
    if (!e.ok) {
      let o = await e.text(),
        p = "UnknownError",
        N = ["스마트라우팅 채널 결정 과정에서 문제가 발생하였습니다.", o.trim()]
          .filter(Boolean)
          .join(" ");
      try {
        let c = JSON.parse(o);
        (p = c.code), (N = c.message);
      } catch {}
      throw new g({ code: p, message: N, paymentId: i.paymentId });
    }
    let { channelKey: r } = await e.json();
    return { ...i, channelKey: r };
  }
  R(Pi, "routePayment");
  async function Me(i) {
    if (!Me)
      throw new g({
        code: "BadRequest",
        message: "결제요청 파라메터가 누락되었습니다.",
      });
    try {
      let e = i.channelGroupId ? await Pi(i) : i,
        { paymentResult: r } = await Ae(e);
      return await r;
    } catch (e) {
      throw (
        (await w(),
        b(e)
          ? e
          : new g({
              code: "UnknownError",
              message: `\uACB0\uC81C \uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(Me, "requestPayment");
  async function ui(i) {
    if (!i)
      throw new g({
        code: "BadRequest",
        message: "결제요청 파라메터가 누락되었습니다.",
      });
    await w();
    try {
      let e = await fetch(`${m.CHECKOUT_SERVER}/api/initialize-payment/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: i,
          sdkVersion: m.SDK_VERSION,
          deviceInfo: G(),
        }),
      });
      if (!e.ok) {
        let p = await e.text(),
          { code: N, message: c } = (() => {
            try {
              return JSON.parse(p);
            } catch {
              return {
                code: "UnknownError",
                message: `\uACB0\uC81C \uCD08\uAE30\uD654\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${p}`,
              };
            }
          })();
        throw new g({ code: N, message: c });
      }
      let r = await e.json(),
        o = h({
          pgProvider: r.pgProvider,
          transactionType: r.transactionType,
          windowType: r.windowType,
          pgModuleType: r.pgModuleType,
        });
      return (
        await H(o),
        await Y[o].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: r,
        }),
        r
      );
    } catch (e) {
      throw (
        (await w(),
        b(e)
          ? e
          : new g({
              code: "UnknownError",
              message: `\uACB0\uC81C \uCD08\uAE30\uD654\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(ui, "initializePayment");
  async function Oi(i) {
    let {
      pgProvider: e,
      pgRawRequest: r,
      storeId: o,
      txId: p,
      paymentId: N,
      windowType: c,
    } = i;
    try {
      let d = await fetch(`${m.CHECKOUT_SERVER}/api/approve/${e}/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...r,
          storeId: o,
          txId: p,
          paymentId: N,
          windowType: c,
          responseType: "json",
        }),
      });
      if (!d.ok) {
        let t = await d.text(),
          s = "UnknownError",
          n = `\uACB0\uC81C \uC2B9\uC778 \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${t}`;
        try {
          let a = JSON.parse(t);
          (s = a.code), (n = a.message);
        } catch {}
        throw new g({ code: s, message: n });
      }
      let l = await d.json();
      return {
        transactionType: "PAYMENT",
        txId: l.txId,
        paymentId: l.paymentId,
        code: l.code,
        message: l.message,
      };
    } catch (d) {
      if (b(d)) throw d;
      let { code: l, message: E } = d || {
        code: "UnknownError",
        message: d.message,
      };
      throw new g({ code: l, message: E, txId: p, paymentId: N });
    }
  }
  R(Oi, "approvePayment");
  async function ge(i) {
    let e = new URL("/api/client-credentials/v2", m.CHECKOUT_SERVER);
    e.search = new URLSearchParams(i).toString();
    try {
      let r = await fetch(e.toString(), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!r.ok) {
        let o = await r.text(),
          { code: p, message: N } = (() => {
            try {
              return JSON.parse(o);
            } catch {
              throw new Error(o);
            }
          })();
        throw new Error(`${p}: ${N}`);
      }
      return await r.json();
    } catch (r) {
      throw new Error(
        `credential \uC870\uD68C \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${r.message}`
      );
    }
  }
  R(ge, "getClientCredentials");
  var Ue = { payment: {} },
    dr = {
      ...Object.fromEntries(
        Object.values(K.PgProvider).map((i) => [i.substring(12), []])
      ),
      PAYPAL_V2: ["PAYPAL_SPB"],
    };
  async function Si(i, e) {
    let { uiType: r } = i;
    Ge(i);
    try {
      let { storeId: o, channelKey: p } = i;
      if (!o)
        throw new B({
          code: "BadRequest",
          message: "storeId 파라미터는 필수 입력입니다.",
        });
      if (!p)
        throw new B({
          code: "BadRequest",
          message: "channelKey 파라미터는 필수 입력입니다.",
        });
      let N = { storeId: i.storeId, channelKey: i.channelKey },
        d = (await ge(N)).pgProvider,
        l = dr[d.substring(12)] || [];
      if (l.length === 0)
        throw new M({
          code: "UnknownError",
          message: `\uD574\uB2F9 PG\uC0AC(${d})\uB294 UI \uB85C\uB529\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`,
        });
      if (!l.includes(r))
        throw new M({
          code: "UnknownError",
          message: `\uD574\uB2F9 PG\uC0AC(${r})\uC758 UI \uD0C0\uC785\uC740 ${l.join(
            ", "
          )}\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4.`,
        });
      let E =
        (await ui({
          ...Ue.payment[r],
          payMethod: Ve(r),
          actionType: "LOAD_UI",
        })) ?? void 0;
      if (!E)
        throw new M({
          code: "UnknownError",
          message: "결제 UI를 로드하기 위한 사전 요청에 실패하였습니다.",
        });
      let t = h({
        pgProvider: E.pgProvider,
        transactionType: E.transactionType,
        windowType: E.windowType,
      });
      if (!Y[t]?.onLoadPaymentUI)
        throw new M({
          code: "UnknownError",
          message:
            "결제 UI 로딩을 지원하지 않는 PG사이거나, 모듈 로딩 과정에서 오류가 발생하였습니다.",
        });
      Y[t].onLoadPaymentUI?.(
        {
          slots: m,
          driverManifest: u,
          paymentRequest: { ...Ue.payment[r], payMethod: Ve(r) },
          initializeOrPrepareResponse: E,
        },
        {
          onPreparePayment: async () => {
            try {
              let { prepareResponse: s } = await Ae(
                { ...Ue.payment[r], payMethod: Ve(r) },
                !0
              );
              return s;
            } catch (s) {
              e.onPaymentFail(s);
            }
          },
          onApprovePayment: async (s) => {
            try {
              let n = await Oi(s);
              e.onPaymentSuccess(n);
            } catch (n) {
              b(n)
                ? e.onPaymentFail(n)
                : new g({
                    code: "UnknownError",
                    txId: n.txId,
                    paymentId: n.paymentId,
                    message: n.message,
                  });
            }
          },
          onFailPayment: async (s) => {
            try {
              let n = await _e({
                ...s,
                windowType: "POPUP",
                message: "사용자가 결제를 취소하였습니다.",
              });
              e.onPaymentFail(
                new g({
                  code: n.code,
                  txId: n.txId,
                  paymentId: n.paymentId,
                  message: n.message ?? "",
                })
              );
            } catch (n) {
              b(n)
                ? e.onPaymentFail(n)
                : e.onPaymentFail(
                    new g({
                      code: "UnknownError",
                      txId: n.txId,
                      paymentId: n.paymentId,
                      message: n.message,
                    })
                  );
            }
          },
          onTransactionOver: () => {
            e.onPaymentFail(
              new g({
                code: "UnknownError",
                txId: "",
                paymentId: "",
                message: "NotImplemented",
              })
            );
          },
        }
      );
    } catch (o) {
      throw (
        (await w(),
        o instanceof M
          ? o
          : new M({
              code: "UnknownError",
              message: `\uACB0\uC81C UI \uB85C\uB529\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${o.message}`,
            }))
      );
    }
  }
  R(Si, "loadPaymentUI");
  function Ge(i) {
    let { uiType: e } = i;
    if (!e)
      throw new M({
        code: "BadRequest",
        message: "UI 타입은 필수 입력입니다.",
      });
    if (!Object.keys(K.PaymentUIType).includes(e))
      throw new M({
        code: "BadRequest",
        message: `\uC694\uCCAD\uD558\uC2E0 UI \uD0C0\uC785(${e})\uC740 \uC77C\uBC18\uACB0\uC81C\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`,
      });
    Ue.payment[e] = i;
  }
  R(Ge, "updateLoadPaymentUIRequest");
  function Ve(i) {
    switch (i) {
      case "PAYPAL_SPB":
        return "PAYPAL";
    }
  }
  R(Ve, "payMethodByUIType");
  async function Yi(i) {
    if (!i)
      throw new P({
        code: "BadRequest",
        message: "빌링키 발급 요청 파라메터가 누락되었습니다.",
      });
    await w();
    try {
      let e = await fetch(
        `${m.CHECKOUT_SERVER}/api/initialize-issue-billing-key/v2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: i,
            sdkVersion: m.SDK_VERSION,
            deviceInfo: G(),
          }),
        }
      );
      if (!e.ok) {
        let p = await e.text(),
          { code: N, message: c } = (() => {
            try {
              return JSON.parse(p);
            } catch {
              return {
                code: "UnknownError",
                message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uCD08\uAE30\uD654\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${p}`,
              };
            }
          })();
        throw new P({ code: N, message: c });
      }
      let r = await e.json(),
        o = h({
          pgProvider: r.pgProvider,
          transactionType: r.transactionType,
          windowType: r.windowType,
          pgModuleType: r.pgModuleType,
        });
      return (
        await H(o),
        await Y[o].onAfterInitialize?.({
          slots: m,
          driverManifest: u,
          initializeOrPrepareResponse: r,
        }),
        r
      );
    } catch (e) {
      throw (
        (await w(),
        v(e)
          ? e
          : new P({
              code: "UnknownError",
              message: `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uCD08\uAE30\uD654\uC5D0 \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${e.message}`,
            }))
      );
    }
  }
  R(Yi, "initializeIssueBillingKey");
  async function wi(i) {
    let {
      pgProvider: e,
      storeId: r,
      txId: o,
      issueId: p,
      billingKey: N,
      pgRawRequest: c,
      windowType: d,
    } = i;
    try {
      let l = await fetch(`${m.CHECKOUT_SERVER}/api/issue-approve/${e}/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId: r,
          txId: o,
          issueId: p,
          billingKey: N,
          windowType: d,
          responseType: "json",
          ...c,
        }),
      });
      if (!l.ok) {
        let s = await l.text(),
          n = "UnknownError",
          a = `\uBE4C\uB9C1\uD0A4 \uBC1C\uAE09 \uC2B9\uC778 \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. ${s}`;
        try {
          let _ = JSON.parse(s);
          (n = _.code), (a = _.message);
        } catch {}
        throw new P({ code: n, message: a, billingKey: N });
      }
      let E = await l.json();
      return {
        transactionType: "ISSUE_BILLING_KEY",
        billingKey: E.billingKey,
        code: E.code,
        message: E.message,
      };
    } catch (l) {
      if (v(l)) throw l;
      let { code: E, message: t } = l.response?.data || {
        code: "UnknownError",
        message: l.message,
      };
      throw new P({ code: E, message: t, billingKey: N });
    }
  }
  R(wi, "approveIssueBillingKey");
  var ee = { issueBillingKey: {} },
    Nr = {
      ...Object.fromEntries(
        Object.values(K.PgProvider).map((i) => [i.substring(12), []])
      ),
      PAYPAL_V2: ["PAYPAL_RT"],
    };
  async function Ki(i, e) {
    let { uiType: r } = i;
    xe(i);
    try {
      let { storeId: o, channelKey: p } = i;
      if (!o)
        throw new B({
          code: "BadRequest",
          message: "storeId 파라미터는 필수 입력입니다.",
        });
      if (!p)
        throw new B({
          code: "BadRequest",
          message: "channelKey 파라미터는 필수 입력입니다.",
        });
      let N = { storeId: i.storeId, channelKey: i.channelKey },
        d = (await ge(N)).pgProvider,
        l = Nr[d.substring(12)] || [];
      if (l.length === 0)
        throw new B({
          code: "BadRequest",
          message: `\uD574\uB2F9 PG\uC0AC(${d})\uB294 UI \uB85C\uB529\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`,
        });
      if (!l.includes(r))
        throw new B({
          code: "BadRequest",
          message: `\uD574\uB2F9 PG\uC0AC(${r})\uC758 UI \uD0C0\uC785\uC740 ${l.join(
            ", "
          )}\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4.`,
        });
      let E =
        (await Yi({
          ...ee.issueBillingKey[r],
          billingKeyMethod: Fe(r),
          actionType: "LOAD_UI",
        })) ?? void 0;
      if (!E)
        throw new B({
          code: "BadRequest",
          message: "빌링키 발급 UI를 로드하기 위한 사전 요청에 실패하였습니다.",
        });
      let t = h({
        pgProvider: E.pgProvider,
        transactionType: E.transactionType,
        windowType: E.windowType,
      });
      if (!Y[t]?.onLoadIssueBillingKeyUI)
        throw new B({
          code: "UnknownError",
          message:
            "빌링키 발급 UI 로딩을 지원하지 않는 PG사이거나, 모듈 로딩 과정에서 오류가 발생하였습니다.",
        });
      Y[t].onLoadIssueBillingKeyUI?.(
        {
          slots: m,
          driverManifest: u,
          issueBillingKeyRequest: {
            ...ee.issueBillingKey[r],
            billingKeyMethod: Fe(r),
          },
          initializeOrPrepareResponse: E,
        },
        {
          onPrepareIssueBillingKey: async () => {
            try {
              let { prepareResponse: s } = await Ie(
                { ...ee.issueBillingKey[r], billingKeyMethod: Fe(r) },
                !0
              );
              return s;
            } catch (s) {
              e.onIssueBillingKeyFail(s);
            }
          },
          onApproveIssueBillingKey: async (s) => {
            try {
              let n = await wi(s);
              e.onIssueBillingKeySuccess(n);
            } catch (n) {
              v(n)
                ? e.onIssueBillingKeyFail(n)
                : e.onIssueBillingKeyFail(
                    new P({
                      code: "UnknownError",
                      message: n.message,
                      billingKey: n.billingKey,
                    })
                  );
            }
          },
          onFailIssueBillingKey: async (s) => {
            try {
              let n = await pe(s);
              e.onIssueBillingKeyFail(
                new P({
                  code: n.code,
                  message: n.message ?? "",
                  billingKey: n.billingKey,
                })
              );
            } catch (n) {
              v(n)
                ? e.onIssueBillingKeyFail(n)
                : e.onIssueBillingKeyFail(
                    new P({
                      code: "UnknownError",
                      message: n.message,
                      billingKey: n.billingKey,
                    })
                  );
            }
          },
          onTransactionOver: () => {
            e.onIssueBillingKeyFail(
              new P({
                code: "UnknownError",
                message: "NotImplemented",
                billingKey: "",
              })
            );
          },
        }
      );
    } catch (o) {
      throw (
        (await w(),
        o instanceof B
          ? o
          : new B({
              code: "UnknownError",
              message: `\uACB0\uC81C UI \uB85C\uB529\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. ${o.message}`,
            }))
      );
    }
  }
  R(Ki, "loadIssueBillingKeyUI");
  function xe(i) {
    let { uiType: e } = i;
    if (!e)
      throw new B({
        code: "BadRequest",
        message: "UI 타입은 필수 입력입니다.",
      });
    if (!Object.keys(K.IssueBillingKeyUIType).includes(e))
      throw new B({
        code: "BadRequest",
        message: `\uC694\uCCAD\uD558\uC2E0 UI \uD0C0\uC785(${e})\uC740 \uBE4C\uB9C1\uD0A4 \uBC1C\uAE09\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`,
      });
    ee.issueBillingKey[e] = i;
  }
  R(xe, "updateLoadIssueBillingKeyUIRequest");
  function Fe(i) {
    switch (i) {
      case "PAYPAL_RT":
        return "PAYPAL";
    }
  }
  R(Fe, "billingKeyMethodByUIType");
  var mr = He;
  return xi(yr);
})();
window.PortOne = PortOne;

var Payments = (function (exports) {
  function createRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  async function requestPay(orderName, totalAmount, callback) {
    const result = await PortOne.requestPayment({
      storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94",
      paymentId: createRandomString(12),
      orderName: orderName,
      totalAmount: totalAmount,
      currency: "KRW",
      channelKey: "channel-key-01764171-b249-4c16-9d18-e9174fa8e611",
      payMethod: "EASY_PAY",
      easyPay: {
        easyPayProvider: "KAKAOPAY",
      },
    });
    if (result.code || result.message || result.pgCode) {
      alert("결제가 취소되었습니다.");
    } else {
      callback();
    }
  }

  window.requestPay = requestPay;
})({});
// export default { requestPay };
