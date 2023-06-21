// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5vDjm":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Z4Rq":[function(require,module,exports) {
// 인증키(인코딩)
// 9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D
// var data = {
//     serviceKey: 'UTF-8로 인코딩된 인증키',
//     s_page: 0,
//     s_list: 1,
//     type: 'json',
//     instt_nm: 'UTF-8로 인코딩된 value'
// };
// $.ajax({
//     post: 'get',
//     url: 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api',
//     data: data,
//     dataType: 'jsonp',
//     success: function(data){
//          console.log(data);
//     }
// });
// 2022-05-05
// 데이터가 총 157개로 매우 적음
// API 이용하여 데이터를 얻은 후 json으로 저장 후 사용
// const serviceKey = '9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D';
// var xhr = new XMLHttpRequest();
// var url = 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; 
// queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); 
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         console.log(this.responseText);
//         // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };
// xhr.send('');
var _searchInfoJs = require("./searchInfo.js");
var _mapJs = require("./map.js");
$(document).ready(()=>{
    const searchInfo = new _searchInfoJs.SearchInfo();
    const option = {
        origin: '127.11015314141542,37.39472714688412',
        destination: '127.10824367964793,37.401937080111644'
    };
// const map = new mapData(option);
// initSearchMap();
});

},{"./searchInfo.js":"5q929","./map.js":"5VGc0"}],"5q929":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchInfo", ()=>SearchInfo
);
var _koreaAreaJs = require("./koreaArea.js");
var _dataSearchJs = require("./dataSearch.js");
var _renderJs = require("./render.js");
class SearchInfo {
    constructor(){
        const self = this;
        this._KOREA_AREA = _koreaAreaJs.KOREA_AREA;
        this.$area1 = $('.area1');
        this.$area2 = $('.area2');
        this.$typeCar = $('.typeCar');
        this.$btnSearch = $('.btnSearch');
        this.listArea1 = [];
        this._area, this._typeCar;
        this.render;
        this._onChange = false;
        // 한번만 실행
        this.makeArea1();
        $(".area1").on('change', function() {
            const val = $(this).find('option:selected').attr('value');
            console.log(val);
            if (self.area === val) {
                self.onChange = false;
                return false;
            }
            if (val === 'none') {
                self.area = '';
                self.$btnSearch.prop('disabled', true);
            } else {
                self.area = val;
                self.$btnSearch.prop('disabled', false);
                self.onChange = true;
                $('.typeCar input').prop('disabled', true);
            }
        });
        $('.btnSearch').on('click', ()=>{
            if (!this.onChange) return false;
            const reuslt = _dataSearchJs.getData('area', this.area);
            self.render = new _renderJs.Render(reuslt);
            self.render.getListArea();
            $('.typeCar input').prop('disabled', false);
            $('.typeCar input').prop('checked', false);
            $('#allVhcleCo').prop('checked', true);
            this.onChange = false;
        });
        $('.typeCar input').change(function() {
            const type = $(this).attr('id');
            self.render.getFilter(type);
        });
    }
    get onChange() {
        return this._onChange;
    }
    set onChange(val) {
        this._onChange = val;
    }
    get area() {
        return this._area;
    }
    set area(val) {
        this._area = val;
    }
    get typeCar() {
        return this._typeCar;
    }
    set typeCar(val) {
        this._typeCar = val;
    }
    // 시·도
    makeArea1() {
        const html = `<option value="{{__val__}}">{{__val__}}</option>`;
        const listHTML = [];
        $.each(this._KOREA_AREA, (idx, val)=>{
            const key = Object.keys(val)[0];
            this.listArea1.push(key);
            listHTML.push(html.replaceAll('{{__val__}}', key));
        });
        this.$area1.append(listHTML.join());
    }
}

},{"./koreaArea.js":"hPiQq","./dataSearch.js":"dbhyH","./render.js":"9k0mC","@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}],"hPiQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KOREA_AREA", ()=>KOREA_AREA
);
const KOREA_AREA = [
    {
        "서울특별시": [
            "종로구",
            "중구",
            "용산구",
            "성동구",
            "광진구",
            "동대문구",
            "중랑구",
            "성북구",
            "강북구",
            "도봉구",
            "노원구",
            "은평구",
            "서대문구",
            "마포구",
            "양천구",
            "강서구",
            "구로구",
            "금천구",
            "영등포구",
            "동작구",
            "관악구",
            "서초구",
            "강남구",
            "송파구",
            "강동구"
        ]
    },
    {
        "부산광역시": [
            "중구",
            "서구",
            "동구",
            "영도구",
            "부산진구",
            "동래구",
            "남구",
            "북구",
            "강서구",
            "해운대구",
            "사하구",
            "금정구",
            "연제구",
            "수영구",
            "사상구",
            "기장군"
        ]
    },
    {
        "인천광역시": [
            "중구",
            "동구",
            "남구",
            "연수구",
            "남동구",
            "부평구",
            "계양구",
            "서구",
            "강화군",
            "옹진군"
        ]
    },
    {
        "대구광역시": [
            "중구",
            "동구",
            "서구",
            "남구",
            "북구",
            "수성구",
            "달서구",
            "달성군"
        ]
    },
    {
        "광주광역시": [
            "동구",
            "서구",
            "남구",
            "북구",
            "광산구"
        ]
    },
    {
        "대전광역시": [
            "동구",
            "중구",
            "서구",
            "유성구",
            "대덕구"
        ]
    },
    {
        "울산광역시": [
            "중구",
            "남구",
            "동구",
            "북구",
            "울주군"
        ]
    },
    {
        "세종특별자치시": []
    },
    {
        "경기도": [
            "가평군",
            "고양시",
            "과천시",
            "광명시",
            "광주시",
            "구리시",
            "군포시",
            "김포시",
            "남양주시",
            "동두천시",
            "부천시",
            "성남시",
            "수원시",
            "시흥시",
            "안산시",
            "안성시",
            "안양시",
            "양주시",
            "양평군",
            "여주시",
            "연천군",
            "오산시",
            "용인시",
            "의왕시",
            "의정부시",
            "이천시",
            "파주시",
            "평택시",
            "포천시",
            "하남시",
            "화성시"
        ]
    },
    {
        "강원도": [
            "원주시",
            "춘천시",
            "강릉시",
            "동해시",
            "속초시",
            "삼척시",
            "홍천군",
            "태백시",
            "철원군",
            "횡성군",
            "평창군",
            "영월군",
            "정선군",
            "인제군",
            "고성군",
            "양양군",
            "화천군",
            "양구군"
        ]
    },
    {
        "충청북도": [
            "청주시",
            "충주시",
            "제천시",
            "보은군",
            "옥천군",
            "영동군",
            "증평군",
            "진천군",
            "괴산군",
            "음성군",
            "단양군"
        ]
    },
    {
        "충청남도": [
            "천안시",
            "공주시",
            "보령시",
            "아산시",
            "서산시",
            "논산시",
            "계룡시",
            "당진시",
            "금산군",
            "부여군",
            "서천군",
            "청양군",
            "홍성군",
            "예산군",
            "태안군"
        ]
    },
    {
        "경상북도": [
            "포항시",
            "경주시",
            "김천시",
            "안동시",
            "구미시",
            "영주시",
            "영천시",
            "상주시",
            "문경시",
            "경산시",
            "군위군",
            "의성군",
            "청송군",
            "영양군",
            "영덕군",
            "청도군",
            "고령군",
            "성주군",
            "칠곡군",
            "예천군",
            "봉화군",
            "울진군",
            "울릉군"
        ]
    },
    {
        "경상남도": [
            "창원시",
            "김해시",
            "진주시",
            "양산시",
            "거제시",
            "통영시",
            "사천시",
            "밀양시",
            "함안군",
            "거창군",
            "창녕군",
            "고성군",
            "하동군",
            "합천군",
            "남해군",
            "함양군",
            "산청군",
            "의령군"
        ]
    },
    {
        "전라북도": [
            "전주시",
            "익산시",
            "군산시",
            "정읍시",
            "완주군",
            "김제시",
            "남원시",
            "고창군",
            "부안군",
            "임실군",
            "순창군",
            "진안군",
            "장수군",
            "무주군"
        ]
    },
    {
        "전라남도": [
            "여수시",
            "순천시",
            "목포시",
            "광양시",
            "나주시",
            "무안군",
            "해남군",
            "고흥군",
            "화순군",
            "영암군",
            "영광군",
            "완도군",
            "담양군",
            "장성군",
            "보성군",
            "신안군",
            "장흥군",
            "강진군",
            "함평군",
            "진도군",
            "곡성군",
            "구례군"
        ]
    },
    {
        "제주특별자치도": [
            "제주시",
            "서귀포시"
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}],"1xsgi":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dbhyH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getData", ()=>getData
);
var _callDataJs = require("./callData.js");
// 성능테스트
// https://yceffort.kr/2020/12/measuring-performance-of-javascript-functions
/*
tfcwkerMvmnCnterNm				교통약자이동지원센터명
rdnmadr				소재지도로명주소 // 없는거: 3개(lnmadr는 있음)
lnmadr				소재지지번주소  // 없는거: 20개(rdnmadr는 있음) => 도로명주소, 지번주소 둘 다 없는 경우는 없음
latitude				위도
longitude				경도
carHoldCo				보유차량대수
carHoldKnd				보유차량종류
slopeVhcleCo				슬로프형휠체어차량대수
liftVhcleCo				리프트형휠체어차량대수
rceptPhoneNumber				예약접수전화번호
rceptItnadr				예약접수인터넷주소
appSvcNm				앱서비스명
weekdayRceptOpenHhmm				평일예약접수운영시작시각
weekdayRceptColseHhmm				평일예약접수운영종료시각
wkendRceptOpenHhmm				주말예약접수운영시작시각
wkendRceptCloseHhmm				주말예약접수운영종료시각
weekdayOperOpenHhmm				차량평일운행시작시각
weekdayOperColseHhmm				차량평일운행종료시각
wkendOperOpenHhmm				차량주말운행시작시각
wkendOperCloseHhmm				차량주말운행종료시각
beffatResvePd				사전예약신청기간
useLmtt				차량이용제한사항
insideOpratArea				차량관내운행지역
outsideOpratArea				차량관외운행지역
useTrget				차량이용대상
useCharge				차량이용요금
institutionNm				관리기관명
phoneNumber				관리기관전화번호
referenceDate				데이터기준일자
instt_code				제공기관코드
instt_nm				제공기관기관명
*/ const DATA = _callDataJs.callData;
function getData(key, value1) {
    let KEY = '';
    if (key === 'area') // 도로명주소
    KEY = 'rdnmadr';
    const VAL = value1;
    let result = [];
    if (KEY === 'rdnmadr') DATA.map((value)=>{
        // 도로명주소 없을 때
        if (value[KEY] === '') // 지번주소 확인
        {
            if (value.lnmadr.indexOf(VAL) > -1) result.push(value);
        } else if (value[KEY].indexOf(VAL) > -1) result.push(value);
    });
    return result;
}

},{"./callData.js":"dLjPq","@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}],"dLjPq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "callData", ()=>callData
);
const callData = [
    {
        "tfcwkerMvmnCnterNm": "포항시교통약자이동지원센터",
        "rdnmadr": "경상북도 포항시 남구 희망대로 810",
        "lnmadr": "경상북도 포항시 남구 대도동 313-1",
        "latitude": "36.0083981310",
        "longitude": "129.3628911843",
        "carHoldCo": "30",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "30",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1800-6300",
        "rceptItnadr": "http://phhpcall.phsisul.org",
        "appSvcNm": "포항시 교통약자 이동지원센터",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "16:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "5일전부터 1일전까지",
        "useLmtt": "이용목적에 맞게 이용하여야 함+차량 내에서는 금주, 금연이며, 적재할 수 있는 화물은 휴대 가능한 범위로 제한+이용시간 기준 5분 이내 승차하지 않을 시 회차하여 다음 접수자에게 배차함",
        "insideOpratArea": "포항시 전지역",
        "outsideOpratArea": "경상북도+대구",
        "useTrget": "장애인복지법 시행규칙 제28조제1항에 따른 보행상의 장애인으로서 장애의 정도가 심한 장애인으로 대중교통이 어려운 사람(단 시각장애인은 함께 오는 가족이 있을 때 이용가능)+65세 이상으로 대중교통 이용이 어려운 사람+일시적으로 휠체어를 이용하는 사람으로서 대중교통 이용이 어려운 사람+교통약자와 함께 오는 가족 및 보호자(복합장애인 및 65세 이상, 일시적 이용자는 의사 소견서로 확인승인)+기타 시장이 특별교통수단이 필요하다고 인정하는 사람",
        "useCharge": "포항시내 기본 5km 1100원 추가요금 200원/km 한도 5000원+포항시외 시외버스요금의 2배(편도기준)+대기료 500원/30분(기본대기 시내 30분, 시외 2시간)+도로비용 및 주차요금은 이용자 부담",
        "institutionNm": "포항시시설관리공단",
        "phoneNumber": "054-280-9600",
        "referenceDate": "2020-03-24",
        "insttCode": "B552865"
    },
    {
        "tfcwkerMvmnCnterNm": "완도군 개인택시 지부(위탁)",
        "rdnmadr": "완도군 완도읍 개포로130번길 15",
        "lnmadr": "전라남도 완도군 완도읍 군내리 1233-5",
        "latitude": "34.318879",
        "longitude": "126.7445340567",
        "carHoldCo": "4",
        "carHoldKnd": "승합",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "전남광역콜 앱",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "23:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "23:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "23:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "23:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "장애정도가 심한 장애인,임산부,사고질병 등 일시적 휄체어 이용자,등",
        "useCharge": "500원",
        "institutionNm": "완도군",
        "phoneNumber": "061-550-5580",
        "referenceDate": "2020-01-01",
        "insttCode": "4990000"
    },
    {
        "tfcwkerMvmnCnterNm": "고양시 교통약자이동지원센터",
        "rdnmadr": "경기도 고양시 일산동구 강송로 14",
        "lnmadr": "경기도 고양시 일산동구 백석동 1233",
        "latitude": "37.64247907",
        "longitude": "126.7953758",
        "carHoldCo": "78",
        "carHoldKnd": "승합(중형)+카니발(저상장애인차)",
        "slopeVhcleCo": "76",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1577-5909",
        "rceptItnadr": "x",
        "appSvcNm": "x",
        "weekdayRceptOpenHhmm": "06:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "10:00~ (인접지역 외 광역이동에 한하여 전날 사전예약)",
        "useLmtt": "월 3회이상 즉시차량 배차 후 이용신청 취소시+월 3회이상 차량도착 후 10분 내 미승차시+이용자 및 보호자가 상담원 및 운전원에게 폭언폭행성희롱 신체접촉 등으로 업무를 방해한 경우 등",
        "insideOpratArea": "관내 전지역",
        "outsideOpratArea": "강서구+마포구+서대문구+은평구+영등포구+서울역+계양구+인천국제공항+의정부+파주+양주+김포+부천",
        "useTrget": "①장애인1-2급중 보행상장애표준기준표상의 1-2급 해당자 + ②버스- 지하철 이용이 어려운 만65세이상 노인장기요양등급 1-2급 수급자 + ③교통약자를 동반하는 가족 및 보호자 + ④사고-질병 등 일시적 장애로 휠체어 이용이 불가피하다는 해당 전문의의 진단서를 제출한 사람은 장애등급 발급 기간동안 3개월 내 한시적 이용 가능",
        "useCharge": "기본 10km 1300원 /추가 5km당 100원",
        "institutionNm": "고양도시관리공사",
        "phoneNumber": "031-932-0661",
        "referenceDate": "2021-09-27",
        "insttCode": "3940000"
    },
    {
        "tfcwkerMvmnCnterNm": "경북지체장애인협회 봉화군지회",
        "rdnmadr": "경상북도 봉화군 봉화읍 내성천2길 93",
        "lnmadr": "경상북도 봉화군 봉화읍 내성리 361-1",
        "latitude": "36.89365762",
        "longitude": "128.737331",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-673-4747",
        "rceptItnadr": "없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "7일",
        "useLmtt": "비장애인만 승차하는 경우+주말 차량운행 안함",
        "insideOpratArea": "봉화군 전지역",
        "outsideOpratArea": "경상북도+대구광역시+태백시",
        "useTrget": "중증장애1~2급+재가등급+만65세이상노약자(의사소견서첨부)+임산부",
        "useCharge": "10km 1,000원+10km초과 시 km당 200원 추가+고속도로(유로도로) 통행료는 이용자 부담",
        "institutionNm": "경상북도 봉화군청",
        "phoneNumber": "054-679-6292",
        "referenceDate": "2021-09-28",
        "insttCode": "5240000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)강원도지체장애인협회 평창군지회",
        "rdnmadr": "강원도 평창군 진부면 진벌1길 144-19",
        "lnmadr": "강원도 평창군 진부면 상진부리 245-23",
        "latitude": "37.65292724",
        "longitude": "128.5711924",
        "carHoldCo": "5",
        "carHoldKnd": "그랜드카니발+4세대카니발",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "강원도교통약자광역이동지원센터",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "1. 다음의 경우 해당 배차일로부터 10일간 이용제한    1) 운전원은 이용자가 지정한 출발지에 도착한 후, 3번 이상의 전화로 확인을        할 수 있으며 이후 승차하지 않을 경우(3회 이상)    2) 이용시 사전 연락 없이 목적지 변경 또는 이용신청을 취소한 경우(3회 이상)    3) 지정된 목적지외 다른 장소를 경유하는 경우    4) 신청 등록시 대상자와 승차인원이 다르거나, 증빙서류의 누락 또는 사실과      다른 경우(2",
        "insideOpratArea": "평창군 전역",
        "outsideOpratArea": "강원도 전역",
        "useTrget": "중증장애인+보행상 이동이 불편한 자+65세 이상의 사람으로서 대중교통의 이용이 어려운 사람+임산부+강원도 교통약자 광역이동지원센터(이하 광역센터)에 임시등록이 된 사람(타지 이용객)+제1호부터 제3호까지에 해당하는 이용대상자를 동반하는 보호자 1인(가족, 요양보호사, 활동보조인, 복지시설직원 등)+일시적으로 휠체어를 이용하는 사람+국가유공자",
        "useCharge": "관내(4km까지 1,100원, 추가 1km당 100원추가)+관외(4km까지 1,100원, 추가 1km당 100원추가)+대기료(1시간무료, 30분당 2천원, 수급자 톨비면제)",
        "institutionNm": "평창군청",
        "phoneNumber": "033-330-2356",
        "referenceDate": "2021-09-15",
        "insttCode": "4280000"
    },
    {
        "tfcwkerMvmnCnterNm": "사)충남지체장애인협회 당진시지회",
        "rdnmadr": "충청남도 당진시 백암1길 61",
        "lnmadr": "충청남도 당진시 채운동 170-2",
        "latitude": "36.88724061",
        "longitude": "126.6247065",
        "carHoldCo": "14",
        "carHoldKnd": "카니발,그랜드스타렉스",
        "slopeVhcleCo": "12",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "http://corona19.dangjin.go.kr/",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "당진시 전지역",
        "outsideOpratArea": "서울,대전,인천,충북,경기도",
        "useTrget": "장애등급 1급 또는 2급 장애인, 호흡기, 자폐, 정신, 지적, 1,2급에 해당하는 장애인으로써 대중교통수단의 이용이 어려운 사람 (그외 목발, 휠체어등 보장구를 사용하는 장애인) 제2조제1항에 따른 3급에 해당하는 장애인중 뇌병변 장애 또는 하지에 장애가 있는 지체장애인. 65세 이상자 중 휠체어 또는 보조기구를 이용하는 대중교통수단 등의 이용이 어려운 사람.  일시적으로 휠체어를 이용하는 사람.  차량이용시 이용자1인  보호자1인 이용가능",
        "useCharge": "관내-기본요금 2km : 1.400원      -추가요금 :130원/1km      -관내 최대요금:3,200원관외-km당 260원      -대기료 1시간당 4,000원      -(병원진료시 최대 3시간)      -왕복통행료(편도,왕복)      -주차료 발생시 주차비",
        "institutionNm": "당진시 교통과",
        "phoneNumber": "041-350-4523",
        "referenceDate": "2021-09-23",
        "insttCode": "5680000"
    },
    {
        "tfcwkerMvmnCnterNm": "양평군교통약자이동지원센터",
        "rdnmadr": "경기도 양평군 양평읍 마유산로 9",
        "lnmadr": "경기도 양평군 양평읍 양근리 540-1",
        "latitude": "37.49776189",
        "longitude": "127.4871469",
        "carHoldCo": "27",
        "carHoldKnd": "장애인카니발",
        "slopeVhcleCo": "24",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-8268",
        "rceptItnadr": "http://ypcall.or.kr",
        "appSvcNm": "인터넷예약시스템",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "이용2일전",
        "useLmtt": "관내 1일 4건까지 이용 가능+관외 1달 2건(왕복)까지 이용 가능",
        "insideOpratArea": "양평군 전지역",
        "outsideOpratArea": "경기도 전역+서울특별시+강원도(홍천군+횡성군+원주시)",
        "useTrget": "장애정도가 심한장애인+일시장애+고령자+임산부 등",
        "useCharge": "기본요금 1500원(10km 이내)+추가요금 100원(5km 추가 시)",
        "institutionNm": "경기도 양평군청 교통과",
        "phoneNumber": "031-770-3762",
        "referenceDate": "2021-12-21",
        "insttCode": "4170000"
    },
    {
        "tfcwkerMvmnCnterNm": "군포시 교통약자 이동지원센터",
        "rdnmadr": "경기도 군포시 번영로 407",
        "lnmadr": "경기도 군포시 산본동 1153",
        "latitude": "37.353185",
        "longitude": "126.9257606",
        "carHoldCo": "23",
        "carHoldKnd": "그랜드카니발",
        "slopeVhcleCo": "23",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-4428",
        "rceptItnadr": "https://bokjicall.gunpouc.or.kr",
        "appSvcNm": "군포시 교통약자 이동지원센터",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일전",
        "useLmtt": "복지카드(신분증)등 증빙서의 제시 또는 관련 서류의 제출을 거부한 경우실제 탑승인과 복지카드(신분증) 및 증빙서의 이용 대상자가 다를 경우보호자 없이 탑승 시 안전상의 문제가 발생할 수 있다고 판단되는 경우기타 이에 준하는 상황이 발생하여 운행할 수 없다고 판단하는 경우",
        "insideOpratArea": "안양+의왕",
        "outsideOpratArea": "서울+경기+인천",
        "useTrget": "장애인 : 장애정도가 심한 장애인+고령자 : 노인장기요양 전체 등급으로 노인장기요양인정서를 소지하며 대중교통이용이 어려운 시민+임산부 : 산모수첩을 소지한 임산부 또는 출산 후 6개월까지 시민",
        "useCharge": "10km 1200원",
        "institutionNm": "군포도시공사",
        "phoneNumber": "1899-4428",
        "referenceDate": "2021-12-29",
        "insttCode": "4020000"
    },
    {
        "tfcwkerMvmnCnterNm": "제천시 특별교통수단 이동지원센터",
        "rdnmadr": "충청북도 제천시 내토로 73길 22",
        "lnmadr": "충청북도 제천시 고암동 145-13",
        "latitude": "37.171529",
        "longitude": "128.242342",
        "carHoldCo": "11",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-644-5553",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "22:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "1일",
        "useLmtt": "보호자 동반",
        "insideOpratArea": "관내 전체",
        "outsideOpratArea": "원주+충주+단양+영월",
        "useTrget": "장애정도가 심한 장애인+일시적 휠체어 이용자",
        "useCharge": "일반택시 미터기의 50원",
        "institutionNm": "제천시지체장애인협회",
        "phoneNumber": "043-644-0860",
        "referenceDate": "2021-12-14",
        "insttCode": "4400000"
    },
    {
        "tfcwkerMvmnCnterNm": "영천시교통약자이동지원센터",
        "rdnmadr": "경상북도 영천시 천문로 210-7",
        "lnmadr": "경상북도 영천시 금노동 372-16",
        "latitude": "35.957177",
        "longitude": "128.932791",
        "carHoldCo": "7",
        "carHoldKnd": "승합",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "7",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "http://www.brmcall.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:30",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:30",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일전 예약",
        "useLmtt": "개인목적 영천출발만 가능 병원 통학목적 왕복 가능",
        "insideOpratArea": "영천시 전지역",
        "outsideOpratArea": "경상북도 내+대구광역시",
        "useTrget": "영천시 교통약자의 이동편의 증진에 관한 조례에 따른 교통약자",
        "useCharge": "기본요금(5km까지) 1400원+기본요금 1400원 추가 1km당 200원",
        "institutionNm": "경북지체장애인협회 영천시지회",
        "phoneNumber": "054-337-4422",
        "referenceDate": "2021-12-21",
        "insttCode": "5100000"
    },
    {
        "tfcwkerMvmnCnterNm": "신안군교통약자이동지원센터",
        "rdnmadr": "전남 목포시 수강로3번길 14",
        "lnmadr": "전남 목포시 만호동 3-4",
        "latitude": "34.7841922",
        "longitude": "126.3821013",
        "carHoldCo": "4",
        "carHoldKnd": "창림저상슬로프장애인차(3대)+뉴원카니발장애인차(1대)",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "해당없음",
        "appSvcNm": "전남광역승객용 앱",
        "weekdayRceptOpenHhmm": "10:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "10:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "19:00",
        "beffatResvePd": "이용 1일전",
        "useLmtt": "관외 이용시 1일전 예약",
        "insideOpratArea": "신안군 관내",
        "outsideOpratArea": "전남+광주광역시",
        "useTrget": "장애의 정도가 심한장애인 중 대중교통 이용이 어려운자+65세이상으로 대중교통 이용이 어려운자+일시적 휠체어 이용자+대중교통 이용이 어려운 임산부+이용대상자를 동반하는 보호자",
        "useCharge": "기본요금 2km 500원+추가요금 1km당 100원 ※상한액 : (관내) 시·군내버스요금/(관외) 시외버스 요금",
        "institutionNm": "전라남도 신안군",
        "phoneNumber": "061-240-8158",
        "referenceDate": "2021-12-23",
        "insttCode": "5010000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자 특별교통수단",
        "rdnmadr": "경상남도 통영시 북문2길 43-16",
        "lnmadr": "경상남도 통영시 정량동 162-5",
        "latitude": "34.84996554",
        "longitude": "128.4293738",
        "carHoldCo": "20",
        "carHoldKnd": "그랜드스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "20",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일",
        "useLmtt": "",
        "insideOpratArea": "경상남도",
        "outsideOpratArea": "부산광역시",
        "useTrget": "중증장애1~2급+만65세이상노약자(의사소견서첨부)+임산부",
        "useCharge": "기본요금 1400원+143m당 50원 추가 (단, 시내버스요금의 2배 이내)",
        "institutionNm": "경상남도 통영시",
        "phoneNumber": "055-650-5314",
        "referenceDate": "2022-01-24",
        "insttCode": "5330000"
    },
    {
        "tfcwkerMvmnCnterNm": "동해시교통약자이동지원센터",
        "rdnmadr": "강원도 동해시 송정로 34",
        "lnmadr": "강원도 동해시 송정동 834-1",
        "latitude": "37.49705665",
        "longitude": "129.1266705",
        "carHoldCo": "9",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "8",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "해당없음",
        "appSvcNm": "즉시콜",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "동해시",
        "outsideOpratArea": "강원도 내",
        "useTrget": "보생상 심한 장애인으로 대중교통 이용이 어려운자+65세이상+임산부+일시적 휠체어 이용자로 대중교통 이용이 어려운자 등",
        "useCharge": "기본 4km까지 1,100원+4km 초과부터 km당 100원 추가+관외이동 시 대기료 1시간까지 무료+초과 시 30분 당 2,000원",
        "institutionNm": "강원도 동해시",
        "phoneNumber": "033-521-0995",
        "referenceDate": "2021-10-22",
        "insttCode": "4210000"
    },
    {
        "tfcwkerMvmnCnterNm": "부산광역시 특별교통총괄본부(부산시설공단)",
        "rdnmadr": "부산광역시 연제구 중앙대로1226번길 18, 2층(거제동, 금샘빌딩)",
        "lnmadr": "부산광역시 연제구 거제동 163-10",
        "latitude": "35.19784977",
        "longitude": "129.0800058",
        "carHoldCo": "181",
        "carHoldKnd": "스타렉스+올뉴카니발+카운티+쏠라티",
        "slopeVhcleCo": "172",
        "liftVhcleCo": "9",
        "rceptPhoneNumber": "051-466-8800",
        "rceptItnadr": "http://www.duribal.co.kr/",
        "appSvcNm": "즉시콜",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "(창원지역 한정) 이용희망 전일 예약제(예약시간 09:00~16:00한정), 편도운행(단, 현지 대기시간 1시간 이내일 경우 왕복운행)",
        "useLmtt": "만취 후 이용시+화물 운송 목적+혼자 탑승이 불가능함에도 보호자를 동반하지 아니한 경우+요금을 지불하지 않는 경우+복지카드 또는 의사소견서 제시를 거부할 경우+상담원 및 운전원에게 욕설 폭언 폭행하는 경우+특별교통수단의 기물을 손괴하는 경우",
        "insideOpratArea": "부산광역시 전지역",
        "outsideOpratArea": "김해+양산+창원",
        "useTrget": "중증장애인(기존1~3급)-시각, 신장, 뇌병변, 뇌전증(보호자 동반시), 지체(하지)+일시적 휠체어 탑승조건 상지 지체장애인(추가서류제출필요)+일시적 장애인으로 진단서 첨부된 휠체어이용자+65세이상 휠체어이용자면서 장기요양등급인정서(요양등급1~3급) 제출자+휠체어 탑승 복합 중증장애인+교통약자를 동반하는 가족 또는 보호자",
        "useCharge": "기본요금 5km 1800원+이후요금 422m 102초당 100원 추가+시외운행시 시계외할증 20+유료도로 통행료 이용자 부담",
        "institutionNm": "부산광역시",
        "phoneNumber": "051-888-3994",
        "referenceDate": "2021-10-26",
        "insttCode": "6260000"
    },
    {
        "tfcwkerMvmnCnterNm": "진주시교통약자특별교통수단(일진교통)",
        "rdnmadr": "경상남도 진주시 내동면 독산리 525-1",
        "lnmadr": "",
        "latitude": "35.16988123",
        "longitude": "128.2064406",
        "carHoldCo": "17",
        "carHoldKnd": "카니발휠체어슬로프",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "http://www.15664488.co.kr/",
        "appSvcNm": "즉시콜",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일 전 21:00",
        "useLmtt": "",
        "insideOpratArea": "진주시 전역",
        "outsideOpratArea": "경남 전역+부산지역 병원",
        "useTrget": "장애 정도가 심한 장애인 중 보행상 장애가 있는 사람+65세 이상·임산부·영유아를 동반한 사람·일시적으로 휠체어를 이용하는 사람으로 대중교통수단의 이용이 어려운 사람+동반가족 및 보호자",
        "useCharge": "진주시 관내 : 기본요금 1,100원(2km)+주행 100원(286m)+시간요금 100원(68초)+관외지역 : 시외버스 요금의 2배",
        "institutionNm": "진주시",
        "phoneNumber": "055-749-8724",
        "referenceDate": "2021-10-26",
        "insttCode": "5310000"
    },
    {
        "tfcwkerMvmnCnterNm": "진주시교통약자특별교통수단(동진택시)",
        "rdnmadr": "경상남도 진주시 선학산길 73",
        "lnmadr": "",
        "latitude": "35.18727147",
        "longitude": "128.1119228",
        "carHoldCo": "17",
        "carHoldKnd": "카니발휠체어슬로프",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "http://www.15664488.co.kr/",
        "appSvcNm": "즉시콜",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일 전 21:00",
        "useLmtt": "",
        "insideOpratArea": "진주시 전역",
        "outsideOpratArea": "경남 전역+부산지역 병원",
        "useTrget": "장애 정도가 심한 장애인 중 보행상 장애가 있는 사람+65세 이상·임산부·영유아를 동반한 사람·일시적으로 휠체어를 이용하는 사람으로 대중교통수단의 이용이 어려운 사람+동반가족 및 보호자",
        "useCharge": "진주시 관내 : 기본요금 1,100원(2km)+주행 100원(286m)+시간요금 100원(68초)+관외지역 : 시외버스 요금의 2배",
        "institutionNm": "진주시",
        "phoneNumber": "055-749-8724",
        "referenceDate": "2021-10-26",
        "insttCode": "5310000"
    },
    {
        "tfcwkerMvmnCnterNm": "인천 교통약자 이동지원센터",
        "rdnmadr": "인천광역시 미추홀구 매소홀로 618",
        "lnmadr": "인천광역시 미추홀구 문학동 482",
        "latitude": "37.4365451636",
        "longitude": "126.6864606173",
        "carHoldCo": "169",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "141",
        "liftVhcleCo": "28",
        "rceptPhoneNumber": "1577-0320",
        "rceptItnadr": "www.intis.or.kr",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일",
        "useLmtt": "1일2회 취소+3일3회취소",
        "insideOpratArea": "인천광역시 전지역",
        "outsideOpratArea": "강서구+김포+부천+시흥",
        "useTrget": "보행상 장애를 가진 중증장애인+장애1~2급+3급 뇌병변, 하지지체장애안+휠체어이용자",
        "useCharge": "기본요금 2Km까지 1200원+2Km 초과 10Km까지 1Km당 200원 추가+10Km 초과 시 5Km당 300원",
        "institutionNm": "인천광역시",
        "phoneNumber": "032-440-3802",
        "referenceDate": "2021-10-25",
        "insttCode": "6280000"
    },
    {
        "tfcwkerMvmnCnterNm": "성남시내버스(주) 택시사업부",
        "rdnmadr": "경기도 성남시 중원구 순환로233",
        "lnmadr": "경기도 성남시 중원구 순환로233 4층",
        "latitude": "37.44407384",
        "longitude": "127.1785358",
        "carHoldCo": "80",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "80",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-1158",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "최소1일~7일전",
        "useLmtt": "유해 물품을 소지한 경우+휠체어 고정 장치의 결속을 거부하는 경우+안전벨트(고정벨트) 착용을 거부하는 경우+법정 전염병 환자 및 중병자가 승차하는 경우+안전사고가 발생할 수 있는 교통약자 승객단독으로 승차하는 경우+금지행위에 대하여 사업자 및 종사원의 제지 또는 안내에 따르지 않는 경우+휴대품의 중량 용적규격을 초과하거나 화물운송을 요구 하는 경우",
        "insideOpratArea": "성남시 전지역",
        "outsideOpratArea": "경기+서울+인천",
        "useTrget": "보행상장애인으로서 장애정도가 심한 장애인+기타 휠체어로 이동하는자(의사소견서)",
        "useCharge": "기본요금10km(1500원)+거리요금5km(100원)",
        "institutionNm": "성남시 (대중교통과)",
        "phoneNumber": "031-729-3722",
        "referenceDate": "2021-10-20",
        "insttCode": "3780000"
    },
    {
        "tfcwkerMvmnCnterNm": "전라남도지체장애인협회 보성군지회",
        "rdnmadr": "전라남도 보성군 보성읍 현충로 186",
        "lnmadr": "",
        "latitude": "34.77417491",
        "longitude": "127.0865911",
        "carHoldCo": "5",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "보성군 전역",
        "outsideOpratArea": "광주광역시+인접시군",
        "useTrget": "장애인1~2급+장애인1~2급보호자+65세이상노약자(대중교통이용이 어려운자)",
        "useCharge": "기본요금 2km:500",
        "institutionNm": "보성군",
        "phoneNumber": "061-850-5514",
        "referenceDate": "2021-10-25",
        "insttCode": "4890000"
    },
    {
        "tfcwkerMvmnCnterNm": "군산시 교통약자 이동지원센터",
        "rdnmadr": "전라북도 군산시 소룡2길 51",
        "lnmadr": "전라북도 군산시 소룡동 1554-2",
        "latitude": "35.972906",
        "longitude": "126.6773154",
        "carHoldCo": "24",
        "carHoldKnd": "그랜드 카니발",
        "slopeVhcleCo": "24",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "www.0632270002.com",
        "appSvcNm": "전라북도 광역이동지원센터 승객용 앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "이용일 기준 8일전부터 신청 전일 17시까지",
        "useLmtt": "",
        "insideOpratArea": "군산시 전역",
        "outsideOpratArea": "전라북도 도내",
        "useTrget": "장애인 및 휠체어 이용자 등 교통약자",
        "useCharge": "기본 700원, 추가1km 당 100원",
        "institutionNm": "전라북도 군산시",
        "phoneNumber": "063-454-3783",
        "referenceDate": "2021-10-24",
        "insttCode": "4670000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자이동지원센터",
        "rdnmadr": "충청북도 옥천군 옥천읍 옥천동이로 36-11",
        "lnmadr": "충청북도 옥천군 옥천읍 장야리 224-3",
        "latitude": "36.29910067",
        "longitude": "127.580189",
        "carHoldCo": "6",
        "carHoldKnd": "스타렉스 1, 카니발 5",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "043-731-1026",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "20:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "20:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "0:00",
        "useLmtt": "장애의 정도가 심한 장애인, 만65세 이상 교통약자",
        "insideOpratArea": "관내일원",
        "outsideOpratArea": "대전, 금산, 영동, 보은",
        "useTrget": "장애의 정도가 심한 장애인, 만65세 이상 교통약자",
        "useCharge": "기본요금(5km까지 1,700원), 추가요금(1km 당 200원)",
        "institutionNm": "옥천군청",
        "phoneNumber": "043-730-3538",
        "referenceDate": "2021-10-12",
        "insttCode": "4430000"
    },
    {
        "tfcwkerMvmnCnterNm": "세종누리콜",
        "rdnmadr": "세종특별자치시 연서면 아홉거리길 100",
        "lnmadr": "세종특별자치시 연서면 월하리 948-8",
        "latitude": "36.593688",
        "longitude": "127.283869",
        "carHoldCo": "26",
        "carHoldKnd": "카니발+스타렉스+k5+니로ev",
        "slopeVhcleCo": "19",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1899-9042",
        "rceptItnadr": "https://nuricall.sctc.kr/",
        "appSvcNm": "세종누리콜(승객용)",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "17:00",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "06:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "1~2일",
        "useLmtt": "1. 탑승시 이용자 확인을 위해 장애인등록증(복지카드) 또는 신분증 제시2. 차량 도착 후 10분 이내에 승차(10분 지나면 취소됨)3.안전을 위하여 승차 시 반드시 안전벨트 착용",
        "insideOpratArea": "관내",
        "outsideOpratArea": "천안시, 대전시, 공주시, 청주시",
        "useTrget": "장애인복지법시행규직 제2조 제1항에 따른 장애의 정도가 심한 장애인으로서 대중교통 이용이 어려운 자, 65세 이상 노인으로 노인요양등급 1등급~3등급 판정을 받은 사람, 국가유공자 상이등급 1~3급에 해당하는 자. 영유아 동반 및 임산부는 의료기관에서 대중교통 이용이 어렵다는 증빙서류를 제출한 사람, 일시적으로 휠체어를 이용하는 자로서 의료기관이 발행한 대중교통 이용이 어렵다는 진단서를 제출한 자",
        "useCharge": "기본요금1000원(기본거리:3km)+기본초과 1km당 200원+고속도로 및 유료도로 통행료, 주차료는 이용자부담",
        "institutionNm": "세종특별자치시",
        "phoneNumber": "044-300-5516",
        "referenceDate": "2021-10-15",
        "insttCode": "5690000"
    },
    {
        "tfcwkerMvmnCnterNm": "괴산군 교통약자 이동지원센터(장애인협회)",
        "rdnmadr": "충청북도 괴산군 괴산읍 읍내로3길 11",
        "lnmadr": "",
        "latitude": "36.80617067",
        "longitude": "127.7915432",
        "carHoldCo": "2",
        "carHoldKnd": "스타렉스 1대, 카니발 1대",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-832-7775",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "즉시 가능",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "정도가 심한 장애인 중 거동이 불편한 자+65세 이상 노약자+임산부+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "택시요금의 50",
        "institutionNm": "괴산군",
        "phoneNumber": "043-830-3569",
        "referenceDate": "2021-10-24",
        "insttCode": "4460000"
    },
    {
        "tfcwkerMvmnCnterNm": "괴산군 교통약자 이동지원센터(모범운전자회)",
        "rdnmadr": "충청북도 괴산군 괴산읍 남산길 59",
        "lnmadr": "",
        "latitude": "36.80574942",
        "longitude": "127.8005846",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-834-0008",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:30",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "08:30",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "즉시 가능",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "정도가 심한 장애인 중 거동이 불편한 자+65세 이상 노약자+임산부+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "택시요금의 50",
        "institutionNm": "괴산군",
        "phoneNumber": "043-830-3569",
        "referenceDate": "2021-10-24",
        "insttCode": "4460000"
    },
    {
        "tfcwkerMvmnCnterNm": "전라남도 지체장애인협회 곡성군지회",
        "rdnmadr": "전라남도 곡성군 곡성읍 읍내14길 12-1",
        "lnmadr": "전라남도 곡성군 곡성읍 읍내리 261-12",
        "latitude": "35.2804357552",
        "longitude": "127.2962814546",
        "carHoldCo": "4",
        "carHoldKnd": "특수승합차",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "061-363-8220",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "주말 및 공휴일의 경우 사전예약",
        "useLmtt": "",
        "insideOpratArea": "곡성군 전역",
        "outsideOpratArea": "광주광역시전역+곡성 인접시군+전라북도 남원시",
        "useTrget": "장애의정도가 심한 장애인으로 대중교통이용이 어려운 자+장애인으로서 휠체어를 이용하는 자+65세이상의 사람으로서 대중교통수단의 이용이 어려운 자+임산부로서 대중교통 이용이 어려운 자+일시적으로 휠체어를 이용하는 사람으로서 대중교통이용이 어려운 자+영유아(만0~5세)를 동반하는 가족 및 보호자",
        "useCharge": "기본 2km 500원, 추가 1km당 100원상한액 관내 시군버스요금+관외 시외버스요금, 심야(00:00~04:00)은 2배 적용",
        "institutionNm": "전라남도 곡성군",
        "phoneNumber": "061-360-2671",
        "referenceDate": "2021-10-20",
        "insttCode": "4860000"
    },
    {
        "tfcwkerMvmnCnterNm": "정선군교통약자이동지원센터",
        "rdnmadr": "강원도 정선군 정선읍 녹송2길50",
        "lnmadr": "강원도 정선군 정선읍 애산리432-309",
        "latitude": "37.38230943",
        "longitude": "128.673439",
        "carHoldCo": "5",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "21:59",
        "beffatResvePd": "최소 1일전",
        "useLmtt": "예약당일취소 또는 현장취소가 월 3회 초과 시 1개월 제한+비장애인만 승차하는 경우",
        "insideOpratArea": "정선군전지역",
        "outsideOpratArea": "강원도내 전지역 강원도외는 상급병원방문시 가능",
        "useTrget": "장애의 정도가 심한 장애인 중 보행불편 장애인+임산부+만65세이상 고령자 중 휠체어 이용자+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "관내지역(기본 4㎞)기본요금 1,100원외 1Km당 100원 추가+관외지역 기본요금 1,100원외 1Km당 100원 추가+시설이용료(통행료,주차료등)와 대기료(1시간 무료,30분당 2,000원, 최대 4시간 대기가능)은 이용자 추가 부담",
        "institutionNm": "정선군(정선군장애인연합회)",
        "phoneNumber": "033-563-2401",
        "referenceDate": "2021-10-20",
        "insttCode": "4290000"
    },
    {
        "tfcwkerMvmnCnterNm": "함안군교통약자콜택시(경남지체장애인연합회 함안군지회)",
        "rdnmadr": "경상남도 함안군 가야읍 중앙남길 70",
        "lnmadr": "경상남도 함안군 가야읍 말산리 185-1",
        "latitude": "35.27505859",
        "longitude": "128.4105797",
        "carHoldCo": "8",
        "carHoldKnd": "그랜드스타렉스 및 카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "http://www.15664488.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "0월",
        "useLmtt": "",
        "insideOpratArea": "경상남도",
        "outsideOpratArea": "경상남도",
        "useTrget": "심한장애인 중 보행상장애인 + 일시적으로 대중교통 이용 어려운 사람",
        "useCharge": "시외버스요금의 1.5배+관내는 2,200원",
        "institutionNm": "함안군",
        "phoneNumber": "055-580-2394",
        "referenceDate": "2020-11-27",
        "insttCode": "5400000"
    },
    {
        "tfcwkerMvmnCnterNm": "경북광역이동지원센터",
        "rdnmadr": "경상북도 경산시 화랑로 13",
        "lnmadr": "",
        "latitude": "35.8172121460",
        "longitude": "128.7682761321",
        "carHoldCo": "21",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "21",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "www.brmcall.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "10:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "10:00",
        "wkendRceptCloseHhmm": "17:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "경산시 관내",
        "outsideOpratArea": "경상북도+대구",
        "useTrget": "1급 또는 2급 장애인/중증+65세 이상으로 대중교통의 이용이 어렵고 하지에 장애가 있어 혼자 거동이 어려운 사람(진단서 첨부)+사고,질병등 휠체어 이용으로 대중교통이 어려운 사람 (진단서 첨부)",
        "useCharge": "기본요금 5km까지 1100원+추가요금 1km당 200원+(한도요금 경산에서 대구 2200원)",
        "institutionNm": "경산시청",
        "phoneNumber": "053-810-5235",
        "referenceDate": "2021-06-14",
        "insttCode": "5130000"
    },
    {
        "tfcwkerMvmnCnterNm": "의왕시 교통약자이동지원센터",
        "rdnmadr": "경기도 의왕시 왕소나무길 29-15",
        "lnmadr": "경기도 의왕시 월암동 604",
        "latitude": "37.30274385",
        "longitude": "126.959074",
        "carHoldCo": "11",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "11",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-462-8253",
        "rceptItnadr": "0",
        "appSvcNm": "0",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "2일전",
        "useLmtt": "1. 당일 예약시간 1시간이내 취소할 경우(당일이용및예약제한)2. 등록 대상자와 이용자가 다른경우(승차거부)3. 이용요금을 체납한 경우(납부시 까지 이용제한)4. 운전원에 대한 폭행,폭언 및 차량내에서 소란을 행사할 경우(1개월 이용제한, 재발할 경우 영구적 이용제한)5. 차량 도착후 10분이내에 승차하지 않는 횟수가 월3회 이상인 경우(1개월 이용제한)6.약시간 1시간 이내에 취소한 횟수가 월3회 이상인경우(1개월 이용제한)",
        "insideOpratArea": "안양,과천,군포",
        "outsideOpratArea": "그외지역(서울,경기권)",
        "useTrget": "1. 1급 또는 2급 장애인으로서 버스, 지하철 등 대중교통 이용이 어려운 사람2. 노인장기요양등급 1급,2급3. 65세 이상으로 버스, 지하철 등 대중교통 이용이 어려운 사람(진단서첨부)4. 그 밖에 혼자서 외출이 곤란하여 시장이 특별교통수단이 필요하다고 인정하 는 사람5. 제1호부터 제4호까지의 규정에 해당하는 교통약자를 동반하는 가족 및 보호자6. 관외 운행은 병원치료 목적에 한함",
        "useCharge": "시 인근지역(의왕, 안양, 군포, 과천)기본1500원+인근지역 외 Km당 200원 추가(유료도로 통행료, 주차요금 등은 이용자 부담)",
        "institutionNm": "의왕도시공사",
        "phoneNumber": "031-462-8253",
        "referenceDate": "2020-01-01",
        "insttCode": "B552752"
    },
    {
        "tfcwkerMvmnCnterNm": "나주시 교통약자이동지원센터",
        "rdnmadr": "전라남도 나주시 봉황로 49",
        "lnmadr": "전라남도 나주시 부덕동 452-5",
        "latitude": "34.9879779872",
        "longitude": "126.7286269912",
        "carHoldCo": "10",
        "carHoldKnd": "승합차",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "http://",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "없음",
        "useLmtt": "이용대상자 이외 이용 금지",
        "insideOpratArea": "나주시 전지역",
        "outsideOpratArea": "전라남도+광주광역시( 출발지 또는 목적지가 나주시인 경우)",
        "useTrget": "장애의 정도가 심한 장애인+65세 이상으로 대중교통 이용이 어려운 사람+임산부+일시적 휠체어 이용자+동반자 및 보호자 2인 이내",
        "useCharge": "2km 이내 500원, 1km 초과당 100원",
        "institutionNm": "전라남도 나주시",
        "phoneNumber": "061-339-8832",
        "referenceDate": "2019-07-01",
        "insttCode": "4830000"
    },
    {
        "tfcwkerMvmnCnterNm": "서천군 교통약자 이동지원센터",
        "rdnmadr": "충청남도 서천군 서천읍 충절로81번길 7, 청림주상복합빌딩 1층7호",
        "lnmadr": "충청남도 서천군 서천읍 군사리 649-2",
        "latitude": "36.07484589",
        "longitude": "126.6914382",
        "carHoldCo": "6",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "041-951-0774",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "실시간",
        "useLmtt": "비장애인, 65세미만",
        "insideOpratArea": "서천군 전역",
        "outsideOpratArea": "관외: 충청남도 및 인접시도(서울,인천,대전,세종,경기,충북,전북)",
        "useTrget": ".「장애인복지법 시행규칙」제2조제1항에 따른 제1급 또는 제2급 장애인으로서 버스 등의 이용이 어려운 자· 65세 이상의 사람으로서 버스 등의 이용이 어려운 사람· 교통약자를 동반하는 가족 및 보호자· 임산부 등 대중교통 이용이 어려운 사람",
        "useCharge": "관내: 출발시~2km미만 1300원/출발지~2km 초과시 1300원+1km당 130원(상한액2600원)/추가요금: 대기료 30분당 2000원/관외: 출발지~2km미만 1300원/출발지~2km 초과시 1300원+1km당 260원",
        "institutionNm": "(사)한국지체장애인충남협회서천군지회",
        "phoneNumber": "041-951-0774",
        "referenceDate": "2021-07-12",
        "insttCode": "4580000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)한국지체장애인협회 부여군지회",
        "rdnmadr": "충청남도 부여군 규암면 흥수로 816",
        "lnmadr": "충청남도 부여군 규암면 내리 246-3",
        "latitude": "36.27331322",
        "longitude": "126.8712187",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "041-836-0700",
        "rceptItnadr": "미운영",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "2일",
        "useLmtt": "",
        "insideOpratArea": "부여전역",
        "outsideOpratArea": "대전+충청남도",
        "useTrget": "중증장애1~2급+장애인임산부+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "기본요금 : 2km이내 1,300원추가요금 : km당 130원최대요금 : 2,600원",
        "institutionNm": "부여군청",
        "phoneNumber": "041-830-2278",
        "referenceDate": "2021-07-15",
        "insttCode": "4570000"
    },
    {
        "tfcwkerMvmnCnterNm": "평택시교통약자이동지원센터",
        "rdnmadr": "경기도 평택시 도일유통길 25 (도일동, 평택도시공사 1층)",
        "lnmadr": "경기도 평택시 도일동 1169-5 (평택도시공사 1층)",
        "latitude": "37.03860497",
        "longitude": "127.1006698",
        "carHoldCo": "49",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "49",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-651-4700",
        "rceptItnadr": "http://ggsts.gg.go.kr",
        "appSvcNm": "경기도 광역 이동지원 시스템",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일 전",
        "useLmtt": "이용(승차)거부 : 복지카드(신분증)등 증빙서의 제시 또는 관련 서류의 제출을 거부한 경우+실제 탑승인과 복지카드(신분증) 및 증빙서의 이용 대상자가 다를 경우+보호자 없이 탑승 시 안전상의 문제가 발생할 수 있다고 판단되는 경우+당일(1일) 제한 : 예약시간으로부터 1시간 이내 변경(출발지,목적지,탑승시간) 또는 예약을 취소한 경우+사전연락 없이 차량 도착 후 10분 이내에 미승차한 경우+1개월 제한 : 예약시간으로부터 1시간 이내 변경(출발",
        "insideOpratArea": "평택시 전지역",
        "outsideOpratArea": "서울+경기+인천+충청지역(단, 병원진료, 재활센터, 발달센터 및 복지센터 - 본인 진료목적 한정)+인접지역(시 경계 10km 이내) : 출퇴근 및 등하교 목적 이용가능",
        "useTrget": "보행상의 장애인으로서 장애의 정도가 심한 장애인+국가유공자 상이 1~2급+대중교통 이용이 불가능하다는 종합병원에서 발급한 진단서를 제출한 사람+교통약자를 동반하는 가족 및 보호자 2인 이내 동승가능",
        "useCharge": "기본요금 10km당 1,200원+추가요금 5km당 100원(관·내외 요금 동일)+대기요금 및 유료도로 이용요금 : 무료+유료주차장 이용요금 : 이용자 부담",
        "institutionNm": "평택도시공사",
        "phoneNumber": "031-8053-8800",
        "referenceDate": "2021-07-09",
        "insttCode": "3910000"
    },
    {
        "tfcwkerMvmnCnterNm": "무주군교통약자이동지원센터",
        "rdnmadr": "전라북도 무주군 무주읍 주계로 116",
        "lnmadr": "전라북도 무주군 무주읍 읍내리 210-2",
        "latitude": "36.00671051",
        "longitude": "127.662714",
        "carHoldCo": "4",
        "carHoldKnd": "창림스타렉스슬로프장애인차",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "7일~3일전",
        "useLmtt": "",
        "insideOpratArea": "무주군 전지역",
        "outsideOpratArea": "대한민국",
        "useTrget": "보행이불편한자로서 이용등록된 자",
        "useCharge": "기본요금 700원(2km)+거리요금 100원/1km",
        "institutionNm": "무주군 교통약자이동지원센터",
        "phoneNumber": "063-322-9414",
        "referenceDate": "2021-07-10",
        "insttCode": "4740000"
    },
    {
        "tfcwkerMvmnCnterNm": "순창군 교통약자이동지원센터",
        "rdnmadr": "전라북도 순창군 순창읍 장류로 407-11",
        "lnmadr": "",
        "latitude": "35.3776507270",
        "longitude": "127.1468542993",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "www.0632270002.com",
        "appSvcNm": "전라북도 광역이동지원센터 승객용앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "7일",
        "useLmtt": "·이용신청 없이 운전원과 직접 연락하여 차량을 이용한 경우·무임승차를 한 경우·상담원, 운전원에 대하여 욕설·폭언·폭행·성적 희롱을 한 경우·방뇨, 오물투기 등 의도적으로 차량의 운행을 방해하는 경우·광역이동지원센터에 방문하여 무단으로 소란을 일으키거나 업무를 방해하는 경우·이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우·이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우(기간에 관계없이 2회 적발시)",
        "insideOpratArea": "순창군 전지역",
        "outsideOpratArea": "권역(순창+남원+임실) 및 전국",
        "useTrget": "· 장애의 정도가 “심한 장애인” 중 대중교통 이용이 어려운자 (보행상 장애인)· 65세 이상으로 대중교통 이용이 어려운 자· 대중교통 이용이 어려운 임산부, 일시적 휠체어 이용자",
        "useCharge": "· 권역내요금 : 기본요금 2km 700원+주행요금 km당 100원· 권역외요금 : 기본요금 2km 700원+주행요금 700m당 100원· 통행료 및 주차료 등 : 이용자 부담· 대기료 : 권역외 30분당 2,500원(1시간 무료), 전라북도 외 30분당 2,500원(2시간 무료)",
        "institutionNm": "순창군청",
        "phoneNumber": "063-650-1338",
        "referenceDate": "2021-09-30",
        "insttCode": "4770000"
    },
    {
        "tfcwkerMvmnCnterNm": "의성군교통약자이동지원센터",
        "rdnmadr": "경상북도 의성군 의성읍 잔보들길 130",
        "lnmadr": "경상북도 의성군 의성읍 철파리 418-6",
        "latitude": "36.3594974",
        "longitude": "128.6801537",
        "carHoldCo": "4",
        "carHoldKnd": "그랜드카니발+올뉴카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-833-2979",
        "rceptItnadr": "http://cafe.daum.net/1447--",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "이용고객이차량을예약하고비장애인만승차시키는경우+보호자의 동반탑승은 최초 탑승시 같이 동승하여야하며 중도에 보호자만 개별적으로 승하차하는경우+차량이용후요금납부를 거부하는 경우+상습적으로 차량예약을 취소하는경우",
        "insideOpratArea": "의성군 전지역",
        "outsideOpratArea": "경상북도+대구광역시",
        "useTrget": "1~2급장애인+3급장애인중 65세이상인자또는 대중교통 이용이 어려운자+임산부",
        "useCharge": "의성군관내지역 기본요금 1,300원(5km까지)5km초과시 1km당200원추가 한도5,000원+경상북도와대구광역시 행선지구간별 시외버스요금의 2배(의성,안계버스터미널요금기준)",
        "institutionNm": "경상북도 의성군청",
        "phoneNumber": "054-830-6251",
        "referenceDate": "2021-09-30",
        "insttCode": "5150000"
    },
    {
        "tfcwkerMvmnCnterNm": "대전교통약자이동지원센터",
        "rdnmadr": "대전광역시 중구 대종로373",
        "lnmadr": "대전광역시 중구 부사동 209-1",
        "latitude": "36.3173370007",
        "longitude": "127.4280138234",
        "carHoldCo": "86",
        "carHoldKnd": "특장차(특별교통수단)",
        "slopeVhcleCo": "81",
        "liftVhcleCo": "5",
        "rceptPhoneNumber": "042-612-1010",
        "rceptItnadr": "www.djcall.or.kr",
        "appSvcNm": "대전교통약자이동지원센터",
        "weekdayRceptOpenHhmm": "06:00",
        "weekdayRceptColseHhmm": "11:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "21:30",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "23:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "바로콜방식(야간차량만 당일에 예약)",
        "useLmtt": "1개월의 범위 내에서 이용 제한+차량 도착 후 이용을 취소한 경우가 월 3회 이상인 경우+차량 배차 후 취소한 경우가 월 6회 이상인 경우+상담원, 운전원에게 폭행, 폭언, 성추행, 성희롱 등의 행위를 한 경우+운전에 방해를 준 적이 있는 이용대상자로서 상담원 또는 운전원이 보호자의 동승이 필요하다고 요구 했음에도 동승하지 않은 경우+중도에 보호자만 개별적으로 탑승하거나 하차하는 경우+콜센터에 이용신청 없이 운전원에게 직접 연락하여 차량을 이용",
        "insideOpratArea": "대전 전지역",
        "outsideOpratArea": "공주+논산+계룡+청주+금산+옥천+세종",
        "useTrget": "보행상장애인으로서 장애의 정도가 심한 사람+휠체어를 이용하는 65세 이상 노약자+대전광역시에 주민등록을 둔 임산부(임신 중이거나 출산 후 6개월 미만)+일시적 휠체어 이용자",
        "useCharge": "요금산정방식: 시간거리요금 병산제 / 기본요금 3km 1,000원 / 440m당 100원, 107초당 100원",
        "institutionNm": "대전복지재단",
        "phoneNumber": "042-331-8905",
        "referenceDate": "2021-10-26",
        "insttCode": "6300000"
    },
    {
        "tfcwkerMvmnCnterNm": "경상남도특별교통수단콜센터",
        "rdnmadr": "경상남도 창원시 의창구 우곡로 209(명서동)",
        "lnmadr": "경상남도 창원시 의창구 명서동 209-3",
        "latitude": "35.2396723",
        "longitude": "128.6475949",
        "carHoldCo": "327",
        "carHoldKnd": "스타렉스, 카니발",
        "slopeVhcleCo": "186",
        "liftVhcleCo": "141",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "21:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "21:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일",
        "useLmtt": "",
        "insideOpratArea": "관내",
        "outsideOpratArea": "경남 전역",
        "useTrget": "1~2급+65세 이상 노약자+임산부",
        "useCharge": "관내 시내버스요금의 2배 이내",
        "institutionNm": "경상남도",
        "phoneNumber": "055-211-4385",
        "referenceDate": "2021-09-30",
        "insttCode": "6480000"
    },
    {
        "tfcwkerMvmnCnterNm": "경북광역이동지원센터",
        "rdnmadr": "경상북도 구미시 산책길 33-4",
        "lnmadr": "경상북도 구미시 원평동 468",
        "latitude": "36.123750",
        "longitude": "128.332153",
        "carHoldCo": "17",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "예약안됨",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "이용일3일전~1일전까지",
        "useLmtt": "",
        "insideOpratArea": "구미시전역",
        "outsideOpratArea": "경북 내+대구광역시+김천구미KTX역(병원목적시)",
        "useTrget": "심한장애중 보행상장애인+임산부+65세이상(대중교통이용어렵다는 진단서제출)",
        "useCharge": "기본1,300원추가1km당300원",
        "institutionNm": "구미시청",
        "phoneNumber": "054-480-2906",
        "referenceDate": "2021-10-27",
        "insttCode": "5080000"
    },
    {
        "tfcwkerMvmnCnterNm": "영동군 지체장애인협회",
        "rdnmadr": "충청북도 영동군 영동읍 반곡동길 8",
        "lnmadr": "",
        "latitude": "36.1691321299",
        "longitude": "127.7758461604",
        "carHoldCo": "2",
        "carHoldKnd": "그랜드 스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "043-744-2220",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "연중",
        "useLmtt": "해당없음",
        "insideOpratArea": "관내 전체지역",
        "outsideOpratArea": "대전, 김천 청주, 무주",
        "useTrget": "등록된장애인(보행장애)",
        "useCharge": "요금 기준표 참고",
        "institutionNm": "영동군 지체장애인협회",
        "phoneNumber": "043-744-2220",
        "referenceDate": "2021-10-20",
        "insttCode": "4440000"
    },
    {
        "tfcwkerMvmnCnterNm": "영동군 생활이동지원센터",
        "rdnmadr": "충청북도 영동군 영동읍 반곡동길 8",
        "lnmadr": "",
        "latitude": "36.1691321299",
        "longitude": "127.7758461604",
        "carHoldCo": "1",
        "carHoldKnd": "그랜드 스타렉스",
        "slopeVhcleCo": "1",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-743-7803",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "연중",
        "useLmtt": "해당없음",
        "insideOpratArea": "관내 전체지역",
        "outsideOpratArea": "대전, 김천 청주, 무주",
        "useTrget": "등록된장애인(시각장애)",
        "useCharge": "요금 기준표 참고",
        "institutionNm": "영동군 생활이동지원센터",
        "phoneNumber": "043-743-7803",
        "referenceDate": "2021-10-20",
        "insttCode": "4440000"
    },
    {
        "tfcwkerMvmnCnterNm": "고창군교통약자이동지원센터",
        "rdnmadr": "전라북도 고창군 고창읍 월곡14길 19",
        "lnmadr": "전라북도 고창군 고창읍 월곡리 620",
        "latitude": "35.43762073",
        "longitude": "126.7129638",
        "carHoldCo": "6",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "063-561-2338",
        "rceptItnadr": "0632270002.com",
        "appSvcNm": "전라북도 광역이동지원센터",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "전지역",
        "outsideOpratArea": "전라북도",
        "useTrget": "장애의정도가 심한 장애인 중 대중교통 이용이 어려운 자(보행상 장애인)",
        "useCharge": "일반택시요금의 50",
        "institutionNm": "고창군청",
        "phoneNumber": "063-560-2573",
        "referenceDate": "2020-11-30",
        "insttCode": "4780000"
    },
    {
        "tfcwkerMvmnCnterNm": "장수군 이동지원센터",
        "rdnmadr": "전라북도 장수군 장수읍 신천로 79",
        "lnmadr": "전라북도 장수군 장수읍 노하리 376",
        "latitude": "35.65392867",
        "longitude": "127.517936",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "http://www.0632270002.com/view/index.do",
        "appSvcNm": "전라북도 광역이동지원센터 승객용앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "7일 전",
        "useLmtt": "○ 당일 즉시 이용고객 또는 예약자로서 차량 도착 후 이용 취소한 자 : 당일 이용제한○차량 도착 후 10분 이내에 승차하지 않은 경우가 3회 이상인 자 : 10일 이용제한 ○ 예약시간으로부터 1시간 이내 예약취소가 3회 이상인 자 : 1개월 이용제한○ 이용신청 없이 운전원과 직접 연락하여 차량을 이용한 자 : 1개월 이용제한 ○무임승차가 2회 이상인 자 : 1개월 이용제한 ○ 이용객과 동반할 목적이 아닌 일반인의 동승 및 중도 하차 요구자 :",
        "insideOpratArea": "전 지역",
        "outsideOpratArea": "전국",
        "useTrget": "○ 장애의 정도가 ’’심한 장애인’’ 중 대중교통 이용이 어려운 자(보행상 장애인)○ 65세 이상으로 대중교통 이용이 어려운 자 ○ 대중교통 이용이 어려운 임산부, 일시적 휠체어 이용자○이용대상자를 동반하는 가족 및 보호자",
        "useCharge": "○권역내 - 기본요금 700원(2km) , 주행요금 100원(km당)/ 최대 2,000원 부과○권역외 - 기본요금 700원(2km) , 주행요금 100원(km당) / 최대 시외버스 시외버스 요금 2배 부과",
        "institutionNm": "장수군청",
        "phoneNumber": "063-350-2567",
        "referenceDate": "2021-08-26",
        "insttCode": "4750000"
    },
    {
        "tfcwkerMvmnCnterNm": "해남군교통약자이동지원센터",
        "rdnmadr": "전라남도 해남군 해남읍 중앙1로 40",
        "lnmadr": "전라남도 해남군 해남읍 구교리 423-5",
        "latitude": "34.570990",
        "longitude": "126.6050429693",
        "carHoldCo": "7",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일전",
        "useLmtt": "없음",
        "insideOpratArea": "해남군",
        "outsideOpratArea": "광주광역시+전남전지역",
        "useTrget": "대중교통 이용이 어려운 보행상 장애인",
        "useCharge": "기본요금 2km까지 500원+이후요금1km당 100원 / 시내외 버스요금 상한",
        "institutionNm": "해남군",
        "phoneNumber": "061-530-5369",
        "referenceDate": "2021-08-01",
        "insttCode": "4930000"
    },
    {
        "tfcwkerMvmnCnterNm": "홍성군장애인생활이동지원센터",
        "rdnmadr": "충청남도 홍성군 홍성읍 조양로33번길 17",
        "lnmadr": "충청남도 홍성군 홍성읍 옥암리 62-8",
        "latitude": "36.5977088891",
        "longitude": "126.6558164456",
        "carHoldCo": "9",
        "carHoldKnd": "승합차",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "041-633-6315",
        "rceptItnadr": "-",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "관내:1일전, 관외:3일전",
        "useLmtt": "",
        "insideOpratArea": "홍성군전지역",
        "outsideOpratArea": "충남지역",
        "useTrget": "홍성군등록장애인",
        "useCharge": "차량이용요금표 기준",
        "institutionNm": "홍성군장애인생활이동지원센터",
        "phoneNumber": "041-631-2616",
        "referenceDate": "2021-07-31",
        "insttCode": "4600000"
    },
    {
        "tfcwkerMvmnCnterNm": "서산시교통약자이동지원센터",
        "rdnmadr": "충청남도 서산시 안견로 252, 4층",
        "lnmadr": "충청남도 서산시 동문동 985-1 ,4층",
        "latitude": "36.7780105440",
        "longitude": "126.4554933641",
        "carHoldCo": "981",
        "carHoldKnd": "스타렉스(7대)카니발(2대)",
        "slopeVhcleCo": "9",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "전화예약 및 앱예약",
        "appSvcNm": "충남 광역이동지원센터 이용자용 앱",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "13:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "13:00",
        "beffatResvePd": "관내: 즉시관외: 7~2일전",
        "useLmtt": "1. 폭언, 폭행,성희롱 등으로 피해를 가한 경우2. 가족 또는 보호자인 동반자가 1인을 초과한 경우",
        "insideOpratArea": "서산관내 전부",
        "outsideOpratArea": "충청남도 내 및 서울,인천 경기 대학병원",
        "useTrget": "1. 「장애인복지법 시행규칙」제28조제1항에 따른 보행상의 장애인으로서 (장애의 정도가 심한 장애인) 버스,지하철 등의 이용이 어려운 사람2. 65세 이상의 사람으로서 버스, 지하철 등의 이용이 어려운사람3.임산부4.일시적으로 보장구를 이용하는 등 대중교통수단을 이용하기 어려운사람",
        "useCharge": "1. 관내기본료: 1,400원(2km)/km당 130원(최대 요금: 2,800원)2. 관외km당 260원(대기료 2,000원/30분당)",
        "institutionNm": "서산시교통약자 이동지원센터충남 광역 이동지원센터",
        "phoneNumber": "041-665-1111",
        "referenceDate": "2021-07-19",
        "insttCode": "4530000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자이동지원센터",
        "rdnmadr": "전라남도 순천시 용당둑길 127",
        "lnmadr": "전라남도 순천시 조곡동 666-1",
        "latitude": "34.9602261",
        "longitude": "127.4895347",
        "carHoldCo": "22",
        "carHoldKnd": "그랜드카니발(21), 스타렉스(1)",
        "slopeVhcleCo": "21",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "061-751-8181",
        "rceptItnadr": "-",
        "appSvcNm": "전남광역콜 앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "순천시 일원",
        "outsideOpratArea": "광주, 전남권",
        "useTrget": "1.「장애인복지법 시행규칙」제28조제1항에 따른 보행상의 장애인으로서 같은 규칙 별표 1에 따른 장애의 정도가 심한 장애인으로서 버스·지하철 등의 이용이 어려운 사람2. 65세 이상의 사람으로서 버스 등의 이용이 어려운 사람3.「국가유공자 등 예우 및 지원에 관한 법률 시행령」별표 3에 따른 상이등급에 해당하는 자 중 2급 이상의 상이등급에 해당하는 사람으로서 버스 등의 이용이 어려운 사람4. 임산부, 사고·질병 등으로 인한 일시적 장애로 버스 등의 이용이 어려운 사람5. 제1호부터 제4호까지에 해당하는 사람을 동반하는 가족 및 보호자(2인 이내)",
        "useCharge": "1. 기본요금(2km까지) : 500원2. 이후요금(1km마다) : 100원 ※ 상한액 : (관내) 시내버스 요금, (관외) 시외버스 요금3. 할증요금(00:00~04:00) : 100할증 ※ 상한액 : (관내) 시내버스 요금 2배, (관외) 시외버스 요금 2배",
        "institutionNm": "순천시 교통과",
        "phoneNumber": "061-749-5900",
        "referenceDate": "2021-07-31",
        "insttCode": "4820000"
    },
    {
        "tfcwkerMvmnCnterNm": "강원도교통약자광역이동지원센터",
        "rdnmadr": "강원도 춘천시 중앙로1",
        "lnmadr": "강원도 춘천시 봉의동 15",
        "latitude": "37.88007265",
        "longitude": "127.7279085",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "4",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr/main.do",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "7일",
        "useLmtt": "관외는 병원목적",
        "insideOpratArea": "태백시",
        "outsideOpratArea": "강원도",
        "useTrget": "1. 「장애인복지법 시행규칙」제2조제1항에 따라 제1급 또는 제2급 장애인으로서 버스 등의 이용이 어려운 자 <개정 2013.07.05>2. 65세 이상의 자로서 버스 등의 이용이 어려운 자3. 일시적으로 휠체어를 이용하는 자로서 버스 등의 이용이 어려운 자4. 제1호부터 제3호까지 해당하는 교통약자를 동반하는 가족 및 보호자5. 그 밖에 특별교통수단이 필요하다고 인정되는 사람",
        "useCharge": "1. 관내요금은 「여객자동차 운수사업법 시행령」제3조제2호다목에 따른 일반택시요금의 100분의 50에 해당하는 금액 이하로 한다.2. 관외요금은 해당구간의 시외버스요금의 2배를 초과할 수 없다.",
        "institutionNm": "태백시청",
        "phoneNumber": "033-553-1112",
        "referenceDate": "2021-07-28",
        "insttCode": "4220000"
    },
    {
        "tfcwkerMvmnCnterNm": "과천시교통약자이동지원센터",
        "rdnmadr": "경기도 과천시 문원로 40, 113호",
        "lnmadr": "경기도 과천시 문원동 31-3, 113호",
        "latitude": "37.4288073",
        "longitude": "127.0020100726",
        "carHoldCo": "6",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "02-502-9418",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "이용일자를 기준으로 7일전부터 1일전까지",
        "useLmtt": "-",
        "insideOpratArea": "과천시 전지역",
        "outsideOpratArea": "1,2차병원 및 병원이외목적 : 인접 시·군 지역(과천시청기준 반경15Km이내)  , 3차병원,환승목적 : 서울, 경기",
        "useTrget": "보행상장애인기준표상 심한 정도, 65세 이상 노인장기요양 1~3급, 임산부(임산부수첩), 그외 대중교통이용이 어렵다고 증빙자료를 제출한 장애인, 고령자",
        "useCharge": "유료도로 통행료 및 주차요금은 이용자 부담",
        "institutionNm": "경기도 과천시",
        "phoneNumber": "02-3677-2282",
        "referenceDate": "2021-07-29",
        "insttCode": "3970000"
    },
    {
        "tfcwkerMvmnCnterNm": "정읍시 행복콜택시",
        "rdnmadr": "전라북도 정읍시 수성5로 41-11",
        "lnmadr": "전라북도 정읍시 수성동 1013-7",
        "latitude": "35.58500364",
        "longitude": "126.86068470",
        "carHoldCo": "12",
        "carHoldKnd": "그랜드스타렉스+카니발+창림저상램프장애인차",
        "slopeVhcleCo": "11",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "063-536-9870",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "제한없음",
        "useLmtt": "습관적으로 예약을 취소한 사람 등",
        "insideOpratArea": "전라북도 정읍시",
        "outsideOpratArea": "전라북도+장성군+광주광역시",
        "useTrget": "1~2급 장애인+3급 휠체어이용자",
        "useCharge": "(2km이내)1400원+(148m 또는 35초당)30원+시계외 할증20",
        "institutionNm": "전라북도 정읍시",
        "phoneNumber": "063-539-5922",
        "referenceDate": "2022-02-09",
        "insttCode": "4690000"
    },
    {
        "tfcwkerMvmnCnterNm": "익산시장애인콜택시콜센터",
        "rdnmadr": "전라북도 익산시 번영로1길 20",
        "lnmadr": "전라북도 익산시 목천동 916-4",
        "latitude": "35.919194",
        "longitude": "126.9188748",
        "carHoldCo": "21",
        "carHoldKnd": "승합",
        "slopeVhcleCo": "21",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-853-1334",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "1일",
        "useLmtt": "",
        "insideOpratArea": "전지역",
        "outsideOpratArea": "전라북도 전지역",
        "useTrget": "1-2급등록장애인휠체어이용자+동반보호자",
        "useCharge": "기본운임(2km까지) 1400원",
        "institutionNm": "전라북도 익산시",
        "phoneNumber": "063-859-5565",
        "referenceDate": "2022-03-08",
        "insttCode": "4680000"
    },
    {
        "tfcwkerMvmnCnterNm": "광양시 교통약자이동지원센터",
        "rdnmadr": "전라남도 광양시 광양읍 남등1길 72-4",
        "lnmadr": "",
        "latitude": "34.9754338",
        "longitude": "127.5782601",
        "carHoldCo": "10",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "8",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1899-1100",
        "rceptItnadr": "해당없음",
        "appSvcNm": "즉시콜",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일",
        "useLmtt": "",
        "insideOpratArea": "전라남도 전지역",
        "outsideOpratArea": "전라남도 전지역",
        "useTrget": "장애의 정도가 심한 보행상의 장애인, 노약자, 임산부 등",
        "useCharge": "기본 500원(2km)+거리요금100원(1km)* 상한액: 시내·시외버스 요금",
        "institutionNm": "전라남도 광양시청",
        "phoneNumber": "061-797-2865",
        "referenceDate": "2022-02-10",
        "insttCode": "4840000"
    },
    {
        "tfcwkerMvmnCnterNm": "보령시도로교통과",
        "rdnmadr": "",
        "lnmadr": "충청남도 보령시 명천동 1022",
        "latitude": "36.34508656",
        "longitude": "126.6010488",
        "carHoldCo": "10",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "041-933-3517",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "없음",
        "useLmtt": "없음",
        "insideOpratArea": "보령시",
        "outsideOpratArea": "서울+천안+익산",
        "useTrget": "보행상 장애인 중 심한장애인 및 일시적으로 보행이 어려운 자, 65세 이상 노인 중 보행이 어려운 자",
        "useCharge": "기본요금 2km까지 1600원+이후요금 160m당 130원",
        "institutionNm": "충청남도 보령시청",
        "phoneNumber": "041-930-3961",
        "referenceDate": "2022-04-06",
        "insttCode": "4510000"
    },
    {
        "tfcwkerMvmnCnterNm": "남해군교통약자이동지원센터",
        "rdnmadr": "경상남도 남해군 남해읍 선소로75번길 87-22",
        "lnmadr": "경상남도 남해군 남해읍 차산리 639",
        "latitude": "34.84954976",
        "longitude": "127.9088757",
        "carHoldCo": "7",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "5",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "19:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "19:00",
        "beffatResvePd": "없음",
        "useLmtt": "없음",
        "insideOpratArea": "남해군",
        "outsideOpratArea": "경남전지역+부산",
        "useTrget": "기존 1~2급 장애인, 장애의 정도가 심한 보행상 장애인65세이상 고령자임산부일시적으로 휠체어 이용하는 자",
        "useCharge": "(관내 기본요금) 2km까지 1000원 (관내 2km 초과 시) 기본요금 1000원 외 1km당 50원 추가+최대2000원+(관외) 시외버스요금 1.5배",
        "institutionNm": "경상남도 남해군청",
        "phoneNumber": "055-860-3455",
        "referenceDate": "2022-03-29",
        "insttCode": "5430000"
    },
    {
        "tfcwkerMvmnCnterNm": "남양주시교통약자이동지원센터",
        "rdnmadr": "경기도 남양주시 진건읍 진건오남로 50 덕성빌딩 3층",
        "lnmadr": "경기도 남양주시 진건읍 용정리 794-48 덕성빌딩 3층",
        "latitude": "37.655503",
        "longitude": "127.179231",
        "carHoldCo": "57",
        "carHoldKnd": "올뉴카니발(슬로프형)",
        "slopeVhcleCo": "57",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1666-5525",
        "rceptItnadr": "http://dreamcall.nyj.go.kr/",
        "appSvcNm": "경기도광역이동지원",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "21:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "16:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일전 : 병원+재활+통학(학교) 목적에 한함 1일전 : 일반목적",
        "useLmtt": "",
        "insideOpratArea": "전역",
        "outsideOpratArea": "서울+경기+인천",
        "useTrget": "보행상의 장애인으로서 장애의 정도가 심한 장애인+장애의 정도가 심하지 않은 장애인 중 휠체어 이용자+65세 이상으로 버스+지하철 이용이 어려운 휠체어 이용자 (진단서 등 증빙자료 사전 제출자에 한함)·통학목적(초·중·고등학교)으로 관내 및 인접지역 통행이 어려운 휠체어 이용자+국가유공자 상이등급 1~3급 중 휠체어 이용자+「장애인 복지법 시행규칙」 개정 전(‘19.7.1.) 제2조에 따른 장애인 1~2급+3~6급(휠체어이용자)",
        "useCharge": "(기본요금 관내) 시내버스 현금요금 동일 1500+(기본요금 관외) 직행좌석버스 현금요금 동일 2900+(초과요금 관내) 10km 초과 5km마다 100 (최대 700)+(초과요금 관외) 30km 초과 5km마다 100",
        "institutionNm": "경기도 남양주시청 철도교통과",
        "phoneNumber": "031-590-4717",
        "referenceDate": "2022-03-01",
        "insttCode": "3990000"
    },
    {
        "tfcwkerMvmnCnterNm": "한국교통장애인협회 청도군지회",
        "rdnmadr": "경상북도 청도군 청도읍 월곡2길 15",
        "lnmadr": "경상북도 청도군 청도읍 월곡리 300-12",
        "latitude": "35.62840732",
        "longitude": "128.7591562",
        "carHoldCo": "3",
        "carHoldKnd": "슬로프형(카니발)",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "http://www.brmcall.co.kr/",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "사전 및 당일 가능, 주말운행신청은 평일사전예약, 일요일 미운행",
        "useLmtt": "",
        "insideOpratArea": "관내전역",
        "outsideOpratArea": "경북",
        "useTrget": "중증장애인+고령자중거동불편+임산부",
        "useCharge": "2km까지 1,200원+2km초과 10km까지 1km당300원+10km초과 1km당100원",
        "institutionNm": "청도군 새마을괴",
        "phoneNumber": "054-370-6252",
        "referenceDate": "2020-06-30",
        "insttCode": "5190000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)전남장애인총연합회 강진군지부",
        "rdnmadr": "전라남도 강진군 강진읍 시장길 17-14",
        "lnmadr": "",
        "latitude": "34.64034375",
        "longitude": "126.7741157",
        "carHoldCo": "2",
        "carHoldKnd": "승합",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "0",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "1급,2급장애인, 65세 이상 대중교통 이용불가자",
        "useCharge": "예약접수전화로 문의",
        "institutionNm": "강진군청",
        "phoneNumber": "061-430-3944",
        "referenceDate": "2021-02-22",
        "insttCode": "4920000"
    },
    {
        "tfcwkerMvmnCnterNm": "의정부시 시설관리공단 이동지원센터",
        "rdnmadr": "경기도 의정부시 체육로 90",
        "lnmadr": "경기도 의정부시 녹양동 174-1",
        "latitude": "37.75793498",
        "longitude": "127.0316068",
        "carHoldCo": "39",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "39",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-826-2515",
        "rceptItnadr": "https://www.siseol.or.kr/happycall",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "22:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "장애의 정도가 심한 장애인으로 보행상 장애가 증명된 자 + 장애의 정도가 심한 장애인으로 보행상 장애가 없을시 대중교통 이용제약 여부와 제약기간이 표시된 유효기간 3개월 이내 전문의 진단서 제출 + 상이등급 1급 · 2급 + 장애인 등급제 개편전 1급 · 2급 장애인 중 의정부시 이동지원센터에 등록한 자",
        "useCharge": "10km이내 : 1,500원, 10km초과 5km당 100원",
        "institutionNm": "의정부시",
        "phoneNumber": "031-828-4783",
        "referenceDate": "2021-06-02",
        "insttCode": "3820000"
    },
    {
        "tfcwkerMvmnCnterNm": "수원시교통약자이동지원센터",
        "rdnmadr": "경기도 수원시 권선구 정조로 310",
        "lnmadr": "경기도 수원시 권선구 대황교동 253",
        "latitude": "37.23777723",
        "longitude": "127.018347",
        "carHoldCo": "90",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "90",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-253-5525",
        "rceptItnadr": "https://www.suwonudc.co.kr/swcall/mainPage.do",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "이용일 1일 전 부터 이용당일 2시간 전까지 (단 토일공휴일 및 월요일 예약은 전주 금요일부터 예약 가능)",
        "useLmtt": "1일 4회(편도기준)  단 병원치료 목적에 한하여 왕복1회 추가",
        "insideOpratArea": "수원시 전체",
        "outsideOpratArea": "서울+경기+인천",
        "useTrget": "- 장애정도가 심한 장애인- 장애의 정도가 심하지 않은 장애인 중 종합병원에서 대중교통수단의 이용이 어렵다는 진단서를 제출한 사람- 65세 이상 장기요양인정 1급~3급에 해당하는 사람- 임산부로서 대중교통수단의 이용이 어렵다는 진단서를 제출한 사람- 상이등급 3급 이상에 해당하는 사람- 관내 병원에서 한 달 이상 입원중인 휠체어 이용자 중 입퇴원확인서와 휠체어 이용중이라는 진단서를 제출한 사람- 외국인",
        "useCharge": "관내지역(수원)기본요금 1250원+관외지역 기본요금 1250원외 5Km당 100원  추가+고속도로(유료도로)통행료는 이용자 부담",
        "institutionNm": "수원시",
        "phoneNumber": "031-228-3323",
        "referenceDate": "2021-06-02",
        "insttCode": "3740000"
    },
    {
        "tfcwkerMvmnCnterNm": "시흥시 교통약자이동지원센터(희망네바퀴)",
        "rdnmadr": "",
        "lnmadr": "경기도 시흥시 군자동 67-3",
        "latitude": "37.36380551",
        "longitude": "126.8067298",
        "carHoldCo": "32",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "32",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1522-3650",
        "rceptItnadr": "-",
        "appSvcNm": "-",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "21:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "19:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "19:00",
        "beffatResvePd": "24시간 운영원칙+심야운행시 2일전 사전예약 필수",
        "useLmtt": "다음 제한사항의 각 호에 해당할 경우 동기와 횟수 등을 참작하여 당일 이용제한 및 1개월의 범위 내에서 이용을 제한할 수 있다.+1. 휠체어 1대를 초과하여 승차를 요구할 경우(접었을 경우 2대 가능)+2. 휠체어 이용자 1인을 포함한 4인(비휠체어 이용시 3인) 초과 승차를 요구할 경우+3. 복지카드, 진단서 사본, 진료카드를 제시하지 않는 경우+4. 상담원 및 운전원의 정당한 요구 및 안내에 불응하는 경우+5. 상담원 및 운전원에게 욕설이나",
        "insideOpratArea": "시흥시 전지역",
        "outsideOpratArea": "수도권 전지역",
        "useTrget": "다음 제한사항의 각 호에 해당할 경우 동기와 횟수 등을 참작하여 당일 이용제한 및 1개월의 범위 내에서 이용을 제한할 수 있다.+1. 휠체어 1대를 초과하여 승차를 요구할 경우(접었을 경우 2대 가능)+2. 휠체어 이용자 1인을 포함한 4인(비휠체어 이용시 3인) 초과 승차를 요구할 경우+3. 복지카드, 진단서 사본, 진료카드를 제시하지 않는 경우+4. 상담원 및 운전원의 정당한 요구 및 안내에 불응하는 경우+5. 상담원 및 운전원에게 욕설이나 폭행을 하는 경우+6. 이동지원센터 및 특별교통수단의 기물을 손괴한 경우+7. 특정 차량 및 운전자의 지정을 요구하는 경우+8. 음주 후 이용하는 경우+9. 차량 출발이나 차량 도착 후 이용을 취소한 경우+10. 화물 운송 등의 목적으로 이용하는 경우+11. 이용대상자가 아닌 사람을 부정하게 이용할 수 있도록 돕거나 방치한 경우",
        "useCharge": "기본요금 1,200원(10Km)+ 5Km 초과당 100원 추가+고속도로(유료도로)통행료 및 주차료는 이용자 부담",
        "institutionNm": "시흥도시공사",
        "phoneNumber": "031-488-6910",
        "referenceDate": "2021-06-01",
        "insttCode": "4010000"
    },
    {
        "tfcwkerMvmnCnterNm": "착한수레",
        "rdnmadr": "경기도 안양시 동안구 평촌대로 389",
        "lnmadr": "경기도 안양시 동안구 비산동 1023",
        "latitude": "37.40629131",
        "longitude": "126.9487366",
        "carHoldCo": "38",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "38",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-389-5200",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "1일전",
        "useLmtt": "당일취소 월3회 이상",
        "insideOpratArea": "안양+군포+의왕+과천",
        "outsideOpratArea": "수도권전역",
        "useTrget": "심한 장애인으로서 보행상 장애인  장기요양 1~5급(휠체어 등 이용자)  보행상 장애로 인해 휠체어를 이용하는 만65세 이상 노약자 -일시적 장애(깁스 등)  임산부(산모수첩 소지자)",
        "useCharge": "관내 1,200원+관외 1,200원 외 1km당 100원",
        "institutionNm": "안양도시공사",
        "phoneNumber": "031-389-5363",
        "referenceDate": "2021-11-12",
        "insttCode": "3830000"
    },
    {
        "tfcwkerMvmnCnterNm": "전남지체장애인협회 영암군지회",
        "rdnmadr": "전라남도 영암군 영암읍 영암로 1527",
        "lnmadr": "전라남도 영암군 영암읍 교동리 50-2",
        "latitude": "34.79496124",
        "longitude": "126.6969605",
        "carHoldCo": "6",
        "carHoldKnd": "승합(중형)",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "10:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "10:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "전일",
        "useLmtt": "",
        "insideOpratArea": "영암군",
        "outsideOpratArea": "전라남도+광주",
        "useTrget": "「장애인복지법 시행규칙」제2조제1항에 따른 장애의 정도가 심한 장애인(「장애인복지법 시행규칙」제28조제1항에 따라 보건복지부장관이 정하는 보행상 장애가 있는 사람에 한한다)으로서 대중교통수단의 이용이 어려운 사람, 65세 이상으로서 대중교통수단의 이용이 어려운 사람임산부으로 대중교통수단의 이용이 어려운 사람일시적으로 휠체어를 이용하는 사람으로서 대중교통수단의 이용이 어려운 사람",
        "useCharge": "기본요금(2Km) : 500원, 거리운임(1km) : 100원, 고속도료, 유료도로, 통행료 및 주차료 : 없음, 콜요금 : 없음, 할증요금 : 없음",
        "institutionNm": "전라남도 영암군청",
        "phoneNumber": "061-470-2356",
        "referenceDate": "2021-11-05",
        "insttCode": "4940000"
    },
    {
        "tfcwkerMvmnCnterNm": "포항시교통약자이동지원센터",
        "rdnmadr": "경상북도 포항시 남구 희망대로 810 포항종합운동장 167호",
        "lnmadr": "경상북도 포항시 남구 대도동 313-1번지 167호",
        "latitude": "36.008952",
        "longitude": "129.363876",
        "carHoldCo": "30",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "33",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1800-9300",
        "rceptItnadr": "http://phhpcall.phsisul.org/",
        "appSvcNm": "동행콜",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "20:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "5일",
        "useLmtt": "",
        "insideOpratArea": "포항시",
        "outsideOpratArea": "경상북도+대구광역시",
        "useTrget": "장애정도가 심한 장애인으로서 대중교통 이용이 어려운 사람+65세 이상으로 대중교통 이용이 어려운 사람+일시적으로 휠체어를 이용하는 사람으로서 대중교통 이용이 어려운 사람",
        "useCharge": "관내(포항시내) 기본 5km 1,100원, 추가요금 200원/km, 한도 5,000원+관외(포항시외) 시외버스 요금의 2배(편도기준)+대기료 500원/30분(관외 병원진료 기본대기 2시간 허용)+유료도로비용 및 주차요금은 이용자 부담",
        "institutionNm": "포항시시설관리공단",
        "phoneNumber": "054-280-9601",
        "referenceDate": "2021-11-11",
        "insttCode": "5020000"
    },
    {
        "tfcwkerMvmnCnterNm": "봄내콜이동지원센터",
        "rdnmadr": "강원도 춘천시 동면 소양강로 304-11(장학리)",
        "lnmadr": "강원도 춘천시 동면 장학리 464-1",
        "latitude": "37.91462782",
        "longitude": "127.7482765",
        "carHoldCo": "25",
        "carHoldKnd": "카니발+K5",
        "slopeVhcleCo": "20",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1544-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "강원도 광역 교통약자",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "병원목적(7일)+개인용무(1일)",
        "useLmtt": "시설이용자는 환자의 상태에 따라 등록 및 이용제한",
        "insideOpratArea": "춘천시 전지역",
        "outsideOpratArea": "강원도+서울+경기도",
        "useTrget": "보행상의 장애인으로서 장애의정도가 심한 장애인+만65세이상 대중교통이용이 어려운 휠체어 이용 노인+일시적 휠체어 사용자",
        "useCharge": "4km 당 1,100원+1km 당 100원+고속도로(유료도료)통행료는 이용자부담(기초생활수급자는 면제)",
        "institutionNm": "강원도 춘천시청",
        "phoneNumber": "033-250-4299",
        "referenceDate": "2020-12-16",
        "insttCode": "4180000"
    },
    {
        "tfcwkerMvmnCnterNm": "울릉택시협동조합",
        "rdnmadr": "경상북도 울릉군 울릉읍 봉래길 250",
        "lnmadr": "",
        "latitude": "37.49693638",
        "longitude": "130.8971107",
        "carHoldCo": "1",
        "carHoldKnd": "소렌토",
        "slopeVhcleCo": "1",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-791-2315",
        "rceptItnadr": "-",
        "appSvcNm": "-",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "22:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "1일~7일전",
        "useLmtt": "주말사전예약필수",
        "insideOpratArea": "-",
        "outsideOpratArea": "-",
        "useTrget": "장애인복지법 시행규칙 제2조제1항에 따른 장애인 1급 또는 2급 장애인으로서 대중교통의 이용이 어려운 사람, 일시적으로 휠체어를 이용하는 사람으로서 대중교통의 이용이 어려운 사람, 65세 이상으로 대중교통의 이용이 어려운 t람, 임산부로서 대중교통의 이용이 어려운 사람, 해당하는 교통약자를 동반하는 가족 및 보호자, 그 밖에 특별교통수단이 필요하다고 군수가 인정하는 사람",
        "useCharge": "200",
        "institutionNm": "울릉군",
        "phoneNumber": "054-790-6254",
        "referenceDate": "2020-12-31",
        "insttCode": "5260000"
    },
    {
        "tfcwkerMvmnCnterNm": "광명시 교통약자이동지원센터",
        "rdnmadr": "경기도 광명시 범안로 966",
        "lnmadr": "경기도 광명시 하안동 314번지",
        "latitude": "37.4572752455",
        "longitude": "126.8723344989",
        "carHoldCo": "27",
        "carHoldKnd": "스타렉스 개조차+카니발 개조차",
        "slopeVhcleCo": "24",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "02-2610-2000",
        "rceptItnadr": "http://kmcar.gmuc.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "13:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "휠체어 이용고객 1일전비휠체어 당일예약",
        "useLmtt": "",
        "insideOpratArea": "광명시 전지역",
        "outsideOpratArea": "구로구+금천구+양천구+영등포구+안양 관공서+시흥 관공서+안산 관공서+인천공항+김포공항+서울대형병원 16곳+부천 병원+안양 병원+ 시흥 병원+센터 반경 20km 이내 특수학교 및 대학교",
        "useTrget": "장애1,2급(뇌병변, 지적장애 3급)+장기요양등급 1~3급+일시적인 교통약자",
        "useCharge": "관내지역 1,250원",
        "institutionNm": "광명도시공사",
        "phoneNumber": "02-2610-2000",
        "referenceDate": "2020-12-14",
        "insttCode": "3900000"
    },
    {
        "tfcwkerMvmnCnterNm": "오산시교통약자이동지원센터",
        "rdnmadr": "경기도 오산시 경기동로 15",
        "lnmadr": "경기도 오산시 오산동 49",
        "latitude": "37.156843",
        "longitude": "127.0726163",
        "carHoldCo": "17",
        "carHoldKnd": "그랜드 카니발+그랜드 스타렉스+모닝+올뉴카니발+더뉴카니발",
        "slopeVhcleCo": "15",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-378-7816",
        "rceptItnadr": "해당사항없음",
        "appSvcNm": "해당사항없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "20:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "7일",
        "useLmtt": "예약시간 1시간 이내의 취소 변경(장소 및 시간)+예약시간부터 10분 이내 미탑승+차량동승 신청을 하지 않고 예약자 본인 외에 다른 사람과 차량을 탑승하는 경우+이용 신청일 현재 미납요금이 있는 경우+센터에 연락하지 않고 운전원에게 직접 연락하고 차량을 이용하는 경우(즉시 이용제한)+기타 차량 운행에 방해를 주는 경우(즉시 이용 제한)+상담원에게 성적 수치심을 줄수 있는 농담 인격모독 욕설을 하는 경우(즉시 이용 제한)",
        "insideOpratArea": "오산시",
        "outsideOpratArea": "서울시+경기도+인천공항",
        "useTrget": "장애정도가 심한 장애에 해당하는 사람으로서 <보행상 장애 표준기준표>에 해당하는 사람+국가유공자 상이등급 3급 이상에 해당하는 사람+장기요양보험 수급자(1~3급)+대중교통이용이 어렵다는 진단서를 제출한 사람(상기 대상자를 제외한 장애인 또는 국가유공자+65세 이상+임산부+일시적으로 휠체어를 이용하거나 재활치료를 받는 사람)",
        "useCharge": "관내: 1,300원+관외: 1,300원 + 1km당 100원씩 할증(유료도로 통행료+톨게이트 비용+유료주차장요금 등 현장에서 발생하는 비용은 고객부담)",
        "institutionNm": "경기도 오산시",
        "phoneNumber": "031-8036-7717",
        "referenceDate": "2021-07-01",
        "insttCode": "4000000"
    },
    {
        "tfcwkerMvmnCnterNm": "동두천시 교통약자(특별교통수단) 이동지원센터(동두천모범운전자회)",
        "rdnmadr": "경기도 동두천시 어등로58",
        "lnmadr": "경기도 동두천시 생연동 70-2",
        "latitude": "37.89864229",
        "longitude": "127.0691004",
        "carHoldCo": "14",
        "carHoldKnd": "카니발+스타렉스+봉고3",
        "slopeVhcleCo": "12",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "031-862-1091",
        "rceptItnadr": "없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "동두천시 전지역",
        "outsideOpratArea": "수도권 전지역(병원진료 우선)",
        "useTrget": "「장애인복지법 시행규칙」 제28조제1항에 따른 보행상의 장애인으로서 같은 규칙 별표 1에 따른 장애의 정도가 심한 장애인으로서 버스ㆍ지하철 등의 이용이 어려운 사람+만65세 이상으로 대중교통의 이용이 어려운 자+임산부로서 대중교통의 이용이 어려운 자+일시적으로 휠체어를 이용하는 자로서 대중교통수단의 이용이 어려운 자+제1호부터 제4호까지의 규정에 해당하는 교통약자를 동반하는 가족 및 보호자",
        "useCharge": "관내 (1000원/회)+관외(1km당/100원)",
        "institutionNm": "동두천시청 교통행정과",
        "phoneNumber": "031-860-2290",
        "referenceDate": "2021-06-30",
        "insttCode": "3920000"
    },
    {
        "tfcwkerMvmnCnterNm": "전남지체장애인협회담양군지회",
        "rdnmadr": "전라남도 담양군 담양읍 천변5길 63",
        "lnmadr": "",
        "latitude": "35.31476994",
        "longitude": "126.9766124",
        "carHoldCo": "3",
        "carHoldKnd": "창림저상슬로프장애인차",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "061-381-3100",
        "rceptItnadr": "http://kappd-jn.or.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "1~2급+휠체어 이용자",
        "useCharge": "관내지역 (2km까지) 기본요금 1400원",
        "institutionNm": "전라남도 담양군청",
        "phoneNumber": "061-380-3055",
        "referenceDate": "2021-06-29",
        "insttCode": "4850000"
    },
    {
        "tfcwkerMvmnCnterNm": "강남세움복지관",
        "rdnmadr": "서울특별시 강남구 광평로60길 22",
        "lnmadr": "서울특별시 강남구 수서동 721",
        "latitude": "37.48698084",
        "longitude": "127.106927",
        "carHoldCo": "3",
        "carHoldKnd": "대형승합차",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "02-2184-8707",
        "rceptItnadr": "www.gnseum.org",
        "appSvcNm": "해당사항 없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:30",
        "weekdayOperColseHhmm": "17:21",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "해당사항 없음",
        "useLmtt": "해당사항 없음",
        "insideOpratArea": "강남구 관내",
        "outsideOpratArea": "해당사항 없음",
        "useTrget": "장애인+노약자+임산부",
        "useCharge": "0",
        "institutionNm": "서울특별시 강남구청",
        "phoneNumber": "02-3423-5874",
        "referenceDate": "2022-03-25",
        "insttCode": "3220000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통편의관리소",
        "rdnmadr": "경상남도 창원시 성산구 원이대로 450",
        "lnmadr": "경상남도 창원시 성산구 중앙동 1",
        "latitude": "35.2340071310",
        "longitude": "128.6647353695",
        "carHoldCo": "107",
        "carHoldKnd": "스타렉스100대, 카니발 7대",
        "slopeVhcleCo": "83",
        "liftVhcleCo": "24",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "-",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "1",
        "useLmtt": "당일 즉시 이용자 또는 예약자로서 차량 도착 후 이용 취소차량 도착 후 30분 이내에 승차하지 않은 경우가 3회 이상예약시간으로부터 1시간 이내 예약 취소가 3회 이상이용신청 없이 운전원과 직접 연락하여 치량을 이용무임승차가 2회 이상인 경우교통약자와 동반할 목적이 아닌 일반인의 동승 및 중도 하차 요구치료 목적 이외에 사적인 용무로 경상남도를 벗어난 자상담원, 운전원에 대한 욕설, 폭언,폭행, 성적 희롱 2회 이상의도적으로 특별교통수단 운행을",
        "insideOpratArea": "창원 전역",
        "outsideOpratArea": "밀양시,김해시,진주시통영시,사천시,거제시양산시,창녕군,의령군함안군,고성군,남해군하동군,산청군,함양군거창군,합천군,김해공항부산광역시",
        "useTrget": "창원시를 방문한 교통약자(출발이나 도착하는 곳이 창원시인 경우)장애1급,2급65세이상,임산부(대중교통 이용이 어렵다는 의사소견서 지참 시 이용가능)일시적 휠체어 이용자",
        "useCharge": "기초수급자(1,000원 정액제)시내구간 이용요금(1,500원 정액제-시내버스요금 인상 시 연동 적용)시외구간 이용요금밀양시(6,900원), 김해시(3,800원), 진주시(5,900원), 통영시(9.900원), 사천시(6,300원), 거제시(13,700원), 양산시(5,100원), 창녕군(4,400원), 의령군(4,600원), 함안군(2,700원), 고성군(7,600원), 남해군(11,000원), 하동군(11,800원), 산청군(10,600원), 함양군(13,700원), 거창군(15,000원), 합천군(10,300원), 김해공항(5,400원), 부산광역시(6,700원)",
        "institutionNm": "창원시",
        "phoneNumber": "055-225-4314",
        "referenceDate": "2020-12-02",
        "insttCode": "B553892"
    },
    {
        "tfcwkerMvmnCnterNm": "태안군 교통약자 이동지원센터",
        "rdnmadr": "충청남도 태안군 태안읍 후곡로 83",
        "lnmadr": "",
        "latitude": "36.7459118611",
        "longitude": "126.3018915186",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "041-673-1040",
        "rceptItnadr": "N",
        "appSvcNm": "N",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "17:20",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "17:50",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "15일",
        "useLmtt": "중증환자",
        "insideOpratArea": "서산시+태안군",
        "outsideOpratArea": "태안군 외 지역",
        "useTrget": "중증장애 1~2급+영유아+노약자",
        "useCharge": "기본요금 1.5km 1,000원+거리요금(140m당) 50원+시간요금(3초) 50원+관외(4시간) 40,000원+관외(8시간) 80,000원",
        "institutionNm": "태안군",
        "phoneNumber": "041-670-2808",
        "referenceDate": "2020-12-01",
        "insttCode": "4620000"
    },
    {
        "tfcwkerMvmnCnterNm": "전남지체장애인협회 화순군지회",
        "rdnmadr": "전라남도 화순군 화순읍 부처샘길 5-11",
        "lnmadr": "",
        "latitude": "35.0677473",
        "longitude": "126.991519",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "https://hwasun.go.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "17:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "연중",
        "useLmtt": "없음",
        "insideOpratArea": "관내 전읍면",
        "outsideOpratArea": "광주광역시+ 나주시",
        "useTrget": "1~2급 지체장애인+1~5급시각장애인",
        "useCharge": "기본요금 500원",
        "institutionNm": "전라남도 화순군",
        "phoneNumber": "061-379-3784",
        "referenceDate": "2020-12-18",
        "insttCode": "4900000"
    },
    {
        "tfcwkerMvmnCnterNm": "영양군교통약자이동지원센터　",
        "rdnmadr": "경상북도 영양군 영양읍 동서대로 90 (종합복지회관 3층)",
        "lnmadr": "",
        "latitude": "36.6619243626",
        "longitude": "129.1186856689",
        "carHoldCo": "3",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "http://www.brmcall.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "5일　",
        "useLmtt": "사항 등을 참작하여 3개월 내에서 이용을 제한",
        "insideOpratArea": "영양군 전지역",
        "outsideOpratArea": "경상북도+대구광역시",
        "useTrget": "심한 장애인 및 65세이상노약자(의사소견첨부) 회원등록자+교통약자를 동반하는 가족 및 보호자(2명내)",
        "useCharge": "관내(시내버스요금)+관외(시외버스요금)+고속도로(유료도로)통행료는 이용자 부담(왕복통행료)",
        "institutionNm": "영양군",
        "phoneNumber": "054-680-6740",
        "referenceDate": "2020-11-12",
        "insttCode": "5170000"
    },
    {
        "tfcwkerMvmnCnterNm": "아산시 특별교통수단이동지원센터",
        "rdnmadr": "충청남도 아산시 시민로457번길 31, 동우빌딩 2층",
        "lnmadr": "충청남도 아산시 온천동 1411",
        "latitude": "36.7887274017",
        "longitude": "126.998424",
        "carHoldCo": "25",
        "carHoldKnd": "승합",
        "slopeVhcleCo": "21",
        "liftVhcleCo": "4",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "21:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "관내 불가 / 관외 최대 2일 전",
        "useLmtt": "장애인(3급 하지장애 외, 4급~), 65세이상 대중교통이용 가능한자",
        "insideOpratArea": "아산시 전역",
        "outsideOpratArea": "충청남도 전역",
        "useTrget": "- 1·2급 장애인, 뇌병변·지체 3급 장애인 중 대중교통 이용이 불편한 자 - 만65세 이상 고령자 중 대중교통 이용이 불편한자-  임산부,일시적 교통약자(대중교통 이용이 불편한자)",
        "useCharge": "기본요금 700원(2km까지), 추가요금 130원(1km당) / 관외 260원(1km) / 관외 대기 30분당 2,000원",
        "institutionNm": "아산장애인단체연합회",
        "phoneNumber": "041-540-1506",
        "referenceDate": "2020-11-03",
        "insttCode": "4520000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자이동지원센터",
        "rdnmadr": "전라북도 부안군 부안읍 오리정로 89",
        "lnmadr": "전라북도 부안군 부안읍 서외리 536-15",
        "latitude": "35.7233599",
        "longitude": "126.7317745",
        "carHoldCo": "5",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-583-1010",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "하루전까지",
        "useLmtt": "",
        "insideOpratArea": "관내(부안군)",
        "outsideOpratArea": "전국",
        "useTrget": "1급 또는 2급+65세이상+국가유공상이자+일시적휠체어",
        "useCharge": "거리요금 148m당 30원",
        "institutionNm": "부안군청",
        "phoneNumber": "063-580-4539",
        "referenceDate": "2021-06-21",
        "insttCode": "4790000"
    },
    {
        "tfcwkerMvmnCnterNm": "장애인콜택시",
        "rdnmadr": "전라북도 완주군 봉동읍 봉동동서로 89",
        "lnmadr": "전라북도 완주군 봉동읍 장기리 285-5",
        "latitude": "35.93733633",
        "longitude": "127.1620975097",
        "carHoldCo": "10",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "http://0632270002.com",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "7일전부터 전일 17시까지",
        "useLmtt": "무단취소3회이상+음주자+폭언+폭행+기타운전방해자",
        "insideOpratArea": "완주군전지역",
        "outsideOpratArea": "전북도내 및 전국",
        "useTrget": "장애의정도가 심한 장애인 중 보행상 장애인, 65세 이상으로 대중교통 이용이 어려운 자, 임산부 및 일시적 휠체어 사용자",
        "useCharge": "기본2km까지1400원, 권역 내 최대 2,000원 요금상한제 적용",
        "institutionNm": "완주군청",
        "phoneNumber": "063-290-2803",
        "referenceDate": "2021-06-18",
        "insttCode": "4720000"
    },
    {
        "tfcwkerMvmnCnterNm": "천안시 교통약자이동지원센터",
        "rdnmadr": "충청남도 천안시 동남구 다가말2길 104",
        "lnmadr": "충청남도 천안시 동남구 다가동 405-6",
        "latitude": "36.7979991",
        "longitude": "127.1431034",
        "carHoldCo": "31",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "31",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "2일전",
        "useLmtt": "1. 이용고객의 차량을 예약하고 비장애인만 승차 시키는 경우2. 장애등급을 허위 고지하여 우선배차를 받는 등 부정 탑승 행위를 한 경우 3. 운전에 방해를 줄 수 있는 고객 탑승 시 보호자가 동승하지 않는 경우4. 교통약자를 위한 보호자의 동반 탑승은 최초 탑승 시부터 최종 목적지까지 같이 동승하여 타고 내려야 하며, 중도에 보호자만 개별적으로 타고 내리는 경우5. 장애인 보조견을 제외한 운전에 방해를 줄 수 있는 애완동물 및 폭발성, 인화성 ",
        "insideOpratArea": "천안시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1000원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 천안시지부",
        "phoneNumber": "041-558-0010",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "공주시 교통약자이동지원센터",
        "rdnmadr": "충청남도 공주시 의당면 의당로 257, 장애인복지센터 203호",
        "lnmadr": "충청남도 공주시 의당면 청룡리 903",
        "latitude": "36.49366156",
        "longitude": "127.1356957",
        "carHoldCo": "10",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "15:00",
        "beffatResvePd": "2일전",
        "useLmtt": "없음",
        "insideOpratArea": "공주시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람",
        "useCharge": "관내 기본요금 1000원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 공주시지부",
        "phoneNumber": "041-852-5858",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "보령시 교통약자이동지원센터",
        "rdnmadr": "충청남도 보령시 주공로8, 대동빌딩 3층 2호",
        "lnmadr": "충청남도 보령시 명천동 1037",
        "latitude": "36.34544473",
        "longitude": "126.6020154",
        "carHoldCo": "9",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "없음",
        "insideOpratArea": "보령시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 일시적장애인",
        "useCharge": "관내 기본요금 1400원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 보령시지부",
        "phoneNumber": "041-933-3517",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "아산시 교통약자이동지원센터",
        "rdnmadr": "충청남도 아산시 시민로457번길 30 (2층)",
        "lnmadr": "충청남도 아산시 온천동 1411",
        "latitude": "36.78898932",
        "longitude": "126.9978278",
        "carHoldCo": "20",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "16",
        "liftVhcleCo": "4",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "2일전",
        "useLmtt": "장애인(3급 하지장애 외, 4급~), 65세이상 대중교통이용 가능한자",
        "insideOpratArea": "아산시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 700원(2km), km당 130원",
        "institutionNm": "아산시장애인연합회",
        "phoneNumber": "041-546-1509",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "서산시 교통약자이동지원센터",
        "rdnmadr": "충청남도 서산시 오산1길 11 (2층)",
        "lnmadr": "충청남도 서산시 오남동 16-5",
        "latitude": "36.74512191",
        "longitude": "126.4852735",
        "carHoldCo": "8",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "8",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "13:00",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "서산시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제7조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1400원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 서산시지부",
        "phoneNumber": "041-665-1111",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "논산시 교통약자이동지원센터",
        "rdnmadr": "충청남도 논산시 해월로 87번길 18",
        "lnmadr": "충청남도 논산시 부창동 274-139",
        "latitude": "36.20032028",
        "longitude": "127.0782185",
        "carHoldCo": "10",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "대중교통이용 가능한 장애의 정도가 심하지 않은 장애인, 65세이상 대중교통이용 가능한자",
        "insideOpratArea": "논산시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람",
        "useCharge": "관내 기본요금 1400원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 논산시지부",
        "phoneNumber": "041-733-0337",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "당진시 교통약자이동지원센터",
        "rdnmadr": "충청남도 당진시 백암1길 61",
        "lnmadr": "충청남도 당진시 채운동 170-2",
        "latitude": "36.88724412",
        "longitude": "126.6247053",
        "carHoldCo": "12",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "11",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "당진시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 일시적장애인",
        "useCharge": "관내 기본요금 1400원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 당진시지부",
        "phoneNumber": "041-358-9787",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "금산군 교통약자 이동지원센터",
        "rdnmadr": "충청남도 금산군 금산읍 인삼로 232",
        "lnmadr": "충청남도 금산군 금산읍 신대리 490-3",
        "latitude": "36.10193265",
        "longitude": "127.5067571",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "금산군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1000원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 금산군지부",
        "phoneNumber": "041-754-9500",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "부여군 교통약자이동지원센터",
        "rdnmadr": "충청남도 부여군 규암면 흥수로 816",
        "lnmadr": "충청남도 부여군 규암면 내리 246-3",
        "latitude": "36.27331322",
        "longitude": "126.8712187",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "부여군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 장애인임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1000원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 부여군지부",
        "phoneNumber": "041-836-2155",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "서천군 교통약자이동지원센터",
        "rdnmadr": "충청남도 서천군 서천읍 충절로81번길 7, 청림주상복합빌딩 1층7호",
        "lnmadr": "충청남도 서천군 서천읍 군사리 649-2",
        "latitude": "36.07485734",
        "longitude": "126.6914297",
        "carHoldCo": "5",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "5",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "없음",
        "insideOpratArea": "서천군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1300원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 서천군지부",
        "phoneNumber": "041-950-4128",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "청양군교통약자이동지원센터",
        "rdnmadr": "충청남도 청양군 청양읍 칠갑산로 87",
        "lnmadr": "충청남도 청양군 청양읍 송방리 293-1",
        "latitude": "36.44939025",
        "longitude": "126.786522",
        "carHoldCo": "3",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "없음",
        "insideOpratArea": "청양군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1300원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 청양군지부",
        "phoneNumber": "041-942-2111",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "홍성군 교통약자이동지원센터",
        "rdnmadr": "충청남도 홍성군 홍성읍 조양로33번길 17",
        "lnmadr": "충청남도 홍성군 홍성읍 옥암리 62-8",
        "latitude": "36.59770889",
        "longitude": "126.6558164",
        "carHoldCo": "2",
        "carHoldKnd": "승합차",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "-",
        "insideOpratArea": "홍성군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람",
        "useCharge": "관내 기본요금 1300원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 홍성군지부",
        "phoneNumber": "041-634-0026",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "예산군 교통약자이동지원센터",
        "rdnmadr": "충청남도 예산군 예산읍 벚꽃로 155번길 10",
        "lnmadr": "충청남도 예산군 예산읍 발연리 85-5, 예산군사랑채 105호",
        "latitude": "36.69471087",
        "longitude": "126.8353696",
        "carHoldCo": "6",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "",
        "insideOpratArea": "예산군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람, 임신부, 일시적장애인",
        "useCharge": "관내 기본요금 1000원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 예산군지부",
        "phoneNumber": "041-335-3330",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "태안군 교통약자 이동지원센터",
        "rdnmadr": "충청남도 태안군 태안읍 후곡로 83",
        "lnmadr": "충청남도 태안군 태안읍 남문리 712-13",
        "latitude": "36.74591186",
        "longitude": "126.3018915",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "중증환자",
        "insideOpratArea": "태안군",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제7조에 해당되는 사람, 임신부, 영유아 동반자",
        "useCharge": "관내 기본요금 1000원(1.5km), 140m당 50원",
        "institutionNm": "충남지체장애인협회 태안군지부",
        "phoneNumber": "041-670-2808",
        "referenceDate": "2021-06-16",
        "insttCode": "6440000"
    },
    {
        "tfcwkerMvmnCnterNm": "사)한국지체장애인협회 함평군지회",
        "rdnmadr": "전라남도 함평군 함평읍 남일길 238-61",
        "lnmadr": "전라남도 함평군 함평읍 대덕리 21-5",
        "latitude": "35.07582913",
        "longitude": "126.512894",
        "carHoldCo": "4",
        "carHoldKnd": "창림저상슬로프장애인차",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "1일",
        "useLmtt": "최초이용시 증빙서류 첨부해 사용자 등록",
        "insideOpratArea": "함평군 일원",
        "outsideOpratArea": "전남 도내, 광주광역시",
        "useTrget": "장애정도가 심한(보행상) 장애인, 65세 이상의 어르신, 일시적 휠체어 이용자(버스 이용이 어려운 사람) 등",
        "useCharge": "기본요금(2㎞까지) : 500원, 1,000원(심야)/추가요금(1㎞당) : 100원, 200원(심야)",
        "institutionNm": "함평군청",
        "phoneNumber": "061-320-1753",
        "referenceDate": "2021-06-15",
        "insttCode": "4960000"
    },
    {
        "tfcwkerMvmnCnterNm": "여주시 교통약자이동지원센터",
        "rdnmadr": "경기도 여주시 여흥로 109번길 17-1(창동)",
        "lnmadr": "경기도 여주시 창동 46",
        "latitude": "37.29737726",
        "longitude": "127.6358905",
        "carHoldCo": "20",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "19",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1522-2796",
        "rceptItnadr": "https://call.yjcmc.or.kr/",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "06:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "14:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "06:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "2일",
        "useLmtt": "차량도착 후 10분 이내 승차 불이행+주말 및 공휴일 예약 24시간 전 취소 불이행+폭언+신체적 접촉+과도한 음주",
        "insideOpratArea": "여주시 전지역",
        "outsideOpratArea": "서울특별시+경기도+음성군+충주시+원주시",
        "useTrget": "장애인+65세 이상, 임산부 및 영유아 동반, 일시적으로 휠체어를 이용하는 사람 중 대중교통 이용이 어려운 사람+교통약자를 동반하는 가족 및 보호자+ 그 밖에 특별교통수단이 필요하다고 인정하는 사람",
        "useCharge": "관내 1,300원(정액제) / 관외 기본 10Km당 1,300원(초과요금 3Km당 100원)+고속도로 통행료(기초생활수급자 통행료 지원), 주차료 이용자 부담+기초생활수급자 50 할인+시계외 및 심야시간(0시~4시) 20 할증",
        "institutionNm": "여주시",
        "phoneNumber": "031-887-2292",
        "referenceDate": "2021-07-16",
        "insttCode": "5700000"
    },
    {
        "tfcwkerMvmnCnterNm": "의왕시 교통약자 이동지원센터",
        "rdnmadr": "경기도 의왕시 왕소나무길 29-15",
        "lnmadr": "경기도 의왕시 월암동 602-2",
        "latitude": "37.30274385",
        "longitude": "126.959074",
        "carHoldCo": "11",
        "carHoldKnd": "그랜드카니발",
        "slopeVhcleCo": "11",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-462-8253",
        "rceptItnadr": "인터넷접수 불가(www.uuc.or.kr)",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "가능",
        "useLmtt": "상담원에 대한 폭언+운전원에 대한 폭언 폭행+안전운전에 방해 되는 행위",
        "insideOpratArea": "의왕+군포+과천+안양",
        "outsideOpratArea": "거주지 제한 폐지",
        "useTrget": "장애정도가 심한 장애인",
        "useCharge": "1200원",
        "institutionNm": "의왕시청 교통행정과",
        "phoneNumber": "031-345-3305",
        "referenceDate": "2021-07-26",
        "insttCode": "4030000"
    },
    {
        "tfcwkerMvmnCnterNm": "구리시 교통약자 이동지원센터",
        "rdnmadr": "경기도 구리시 안골로 40(주차빌딩 3층)",
        "lnmadr": "경기도 구리시 교문동 736-3",
        "latitude": "37.59696327",
        "longitude": "127.1355313",
        "carHoldCo": "18",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "18",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-3659",
        "rceptItnadr": "https://gurihappycall.guriuc.or.kr/",
        "appSvcNm": "구리시 행복콜",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "2일",
        "useLmtt": "1일(당일) 제한 - 요금 체납 시 납부할 때까지 이용 제한 - 탑승 시 신분증(장애인 등록증(복지카드)) 및 진단서 등 증빙서류를 제시하지 못하는 경우 - 신청 대상자와 이용자가 다른 경우(부정 이용자) - 운전원 및 상담원에 대한 폭행, 폭언 등의 불법을 행사 할 경우",
        "insideOpratArea": "구리시 전지역",
        "outsideOpratArea": "서울+인천+경기도",
        "useTrget": "1. 「장애인복지법 시행규칙」 제2조 제1항에 따른 보행상 장애의 정도가 심한 장애인으로서 버스ㆍ지하철 등의 대중교통 이용이 어려운 사람2. 65세 이상 노인ㆍ임산부 및 장애의 정도가 심한 장애인(「보행상 장애 표준기준표」상의 보행상 장애가 없는 사람)으로서 버스ㆍ지하철 등 대중교통 이용이 어려운 사람3. 제1호 및 제2호에 해당하는 교통약자에 준하는 사람으로서 조례로 정하는 사람4. 제1호부터 제3호까지 해당하는 교통약자를 동반하는 가족 및 보호자(2명 이내)",
        "useCharge": "　기본요금 10Km이내 1,200원,  10Km 초과 1Km당 200원 + 고속도로(유료도로)통행료는  이용자 부담, 주차요금 이용자 부담",
        "institutionNm": "구리시",
        "phoneNumber": "031-550-2576",
        "referenceDate": "2021-07-23",
        "insttCode": "3980000"
    },
    {
        "tfcwkerMvmnCnterNm": "제주특별자치도 교통약자 이동지원센터",
        "rdnmadr": "제주특별자치도 제주시 연북로 173",
        "lnmadr": "",
        "latitude": "33.481802",
        "longitude": "126.4999482",
        "carHoldCo": "46",
        "carHoldKnd": "그랜드카니발+그랜드스타렉스+쏠라티",
        "slopeVhcleCo": "45",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1899-6884",
        "rceptItnadr": "http://www.jejuhappycall.com/",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "예약접수 운영안함",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "1ㆍ2급 장애인으로 대중교통 이용이 어려운 자+65세 이상으로서 대중교통 이용이 어려운 자+3급 장애인 중 뇌병변 또는 휠체어를 이용하는 사람으로 대중교통 이용이 어려운자+임산부ㆍ일시적으로 휠체어를 이용하는 자로서 대중교통 이용이 어려운자",
        "useCharge": "기본요금(10km내)500원+거리요금(1km당)100원+요금상한제1000원",
        "institutionNm": "교통정책과",
        "phoneNumber": "064-710-2413",
        "referenceDate": "2021-10-14",
        "insttCode": "6500000"
    },
    {
        "tfcwkerMvmnCnterNm": "경상북도특별교통수단상주시부름콜센터",
        "rdnmadr": "경상북도 상주시 상산로 506",
        "lnmadr": "경상북도 상주시 만산동 212-3",
        "latitude": "36.4359943617",
        "longitude": "128.1572916512",
        "carHoldCo": "10",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "10",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "운행방해+욕설3회시 한달 정지+예약위반 3회시 한달 정지+요금미납 3회시 한달 정지+운행1시간 이내로 취소 3회시 한달 정지",
        "insideOpratArea": "상주시 전지역",
        "outsideOpratArea": "상주시 인접 시군, 전국(병원목적에 한함)",
        "useTrget": "관내 중증장애인 1~2급+중증장애인 3급(지체장애인 또는 휠체어 사용자)+임산부+65세이상노약자(사고, 질병 등으로 대중교통 이용이 어렵거나 휠체어 사용자)+일시적 장애인",
        "useCharge": "5km 기본요금 1,100원+추가 1km당 200원(시계외 동일)",
        "institutionNm": "상주시 교통에너지과",
        "phoneNumber": "054-537-7378",
        "referenceDate": "2020-07-13",
        "insttCode": "5110000"
    },
    {
        "tfcwkerMvmnCnterNm": "청주시교통약자이동지원센터",
        "rdnmadr": "충청북도 청주시 흥덕구 무심서로841",
        "lnmadr": "충청북도 청주시 흥덕구 신봉동 500",
        "latitude": "36.66271754",
        "longitude": "127.4669836",
        "carHoldCo": "51",
        "carHoldKnd": "특장차(스타랙스,카니발)",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "51",
        "rceptPhoneNumber": "1588-8488",
        "rceptItnadr": "http://www.cjsisul.or.kr/reserve/sub.do?menukey=239",
        "appSvcNm": "X",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "22:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "인터넷(3일전),전화(1일전)",
        "useLmtt": "심사를 거쳐 등록된 고객만 이용가능",
        "insideOpratArea": "청주시 전지역",
        "outsideOpratArea": "신탄진,조치원,증평,오송",
        "useTrget": "장애정도가 심한 보행상 장애인(기존1~2급 장애인 포함),만65세이상,요양1~4등급,상이등급1~3등급",
        "useCharge": "기본요금:10km당2000원,추가요금:1km당300원",
        "institutionNm": "청주시 교통정책과",
        "phoneNumber": "043-201-2825",
        "referenceDate": "2020-06-30",
        "insttCode": "5710000"
    },
    {
        "tfcwkerMvmnCnterNm": "한국교통장애인협회영주시지회",
        "rdnmadr": "경상북도 영주시 광복로46번길 15, 1층",
        "lnmadr": "경상북도 영주시 영주동 32-15",
        "latitude": "36.8270932",
        "longitude": "128.6235929",
        "carHoldCo": "6",
        "carHoldKnd": "뉴카니발",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-638-0112",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "2주",
        "useLmtt": "주말예약 접수 받지 않음(시각은 00:00으로 표기함)",
        "insideOpratArea": "영주시 전역",
        "outsideOpratArea": "전국(시외운행은 병원이용)",
        "useTrget": "장애인복지법상 1~2급장애인,65세이상노약자,사고질병등 일시적 장애로 인하여 휠체어를 이용하는사람 및 보호자,임산부 및 영유아를 동반한 자",
        "useCharge": "1. 영주시내: 10KM까지 천원,10KM 초과시 5KM 당 + 천원2. 도내 시외운행 요금:다섯시간 이내 30,000원,다섯시간 이상  50,000원3. 도외 시외운행 요금:다섯시간 이내 50,000원,다섯시간 이상 100,000원",
        "institutionNm": "교통행정과",
        "phoneNumber": "054-639-6824",
        "referenceDate": "2020-07-22",
        "insttCode": "5090000"
    },
    {
        "tfcwkerMvmnCnterNm": "단양군사회복지협의회",
        "rdnmadr": "충청북도 단양군 단양읍 수변로83",
        "lnmadr": "충청북도 단양군 단양읍 별곡리 307",
        "latitude": "36.98284257",
        "longitude": "128.3707522",
        "carHoldCo": "3",
        "carHoldKnd": "오텍그랜드스타렉스",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-422-1700",
        "rceptItnadr": "x",
        "appSvcNm": "x",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "13:00",
        "beffatResvePd": "1일전",
        "useLmtt": "해당없음",
        "insideOpratArea": "단양군 전체",
        "outsideOpratArea": "병원 이용시 제천, 원주 등 관외 운행",
        "useTrget": "만65세이상 고령자+장애의 정도가 심한 장애인+혼자서 외출과 이동이 곤란하다고 인정되는 자+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "관내 기본거리 5km까지 1,500원, 30km까지 추가 1km당 300원/ 30km이후 추가 1km당 600원",
        "institutionNm": "단양군",
        "phoneNumber": "043-420-2492",
        "referenceDate": "2021-04-20",
        "insttCode": "4480000"
    },
    {
        "tfcwkerMvmnCnterNm": "단양군장애인생활이동지원센터",
        "rdnmadr": "충청북도 단양군 단양읍 별곡5길5 (3층)",
        "lnmadr": "충청북도 단양군 단양읍 별곡리 319",
        "latitude": "36.98530043",
        "longitude": "128.3686533",
        "carHoldCo": "2",
        "carHoldKnd": "스타렉스2대",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-421-7788",
        "rceptItnadr": "x",
        "appSvcNm": "x",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "3일 전",
        "useLmtt": "복지카드 미소지자, 등록 장애인이 아닌 경우, 본인 포함 3명까지 탑승 가능",
        "insideOpratArea": "단양군 전체",
        "outsideOpratArea": "전지역",
        "useTrget": "등록장애인",
        "useCharge": "관내 기본거리 10km 1500원, 초과 10km 당 1500원/관외 기본거리 30km 4500원, 초과 1km당 600원",
        "institutionNm": "단양군",
        "phoneNumber": "043-420-2133",
        "referenceDate": "2021-04-20",
        "insttCode": "4480000"
    },
    {
        "tfcwkerMvmnCnterNm": "단양군장애인단체연합회",
        "rdnmadr": "충청북도 단양군 단양읍 별곡5길5 (3층)",
        "lnmadr": "충청북도 단양군 단양읍 별곡리 319",
        "latitude": "36.98530043",
        "longitude": "128.3686533",
        "carHoldCo": "1",
        "carHoldKnd": "스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "043-423-1776",
        "rceptItnadr": "x",
        "appSvcNm": "x",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "시내 1일전+시외 1주일 전",
        "useLmtt": "복지카드미소지자+출발도착지 단양군아닌경우+장애인이 아닌경우+2회 요금미납자",
        "insideOpratArea": "단양군 전체",
        "outsideOpratArea": "전지역",
        "useTrget": "단양군내 거주하는 등록장애인",
        "useCharge": "관내 기본거리 10km 1500원, 초과 10km 당 1500원/관외 기본거리 30km 4500원, 초과 1km당 600원+1일 임대 8시간 90000원+대기료(40분 무료, 20분당 1500원), 주차,톨비 이용자부담",
        "institutionNm": "단양군",
        "phoneNumber": "043-420-2134",
        "referenceDate": "2021-04-20",
        "insttCode": "4480000"
    },
    {
        "tfcwkerMvmnCnterNm": "한국시각장애인연합회 양양군지회",
        "rdnmadr": "강원도 양양군 양양읍 양양로 9-5",
        "lnmadr": "강원도 양양군 양양읍 연창리 203-5",
        "latitude": "38.0778442281",
        "longitude": "128.6274852204",
        "carHoldCo": "2",
        "carHoldKnd": "승합 중형(카니발)",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "강원도 광역 교통약자",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "관외 차량 일주일전 신청",
        "useLmtt": "",
        "insideOpratArea": "양양군 전역",
        "outsideOpratArea": "강원도 및 서울(병원 이용 시)",
        "useTrget": "장애정도가 심한장애인+ 장애정도가 심하지 않은장애인(의사진단서)+만65세이상노약자(의사진단서첨부)+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "기본요금 1,100원(4km) 이후 1km당 100원",
        "institutionNm": "양양군 전략교통과",
        "phoneNumber": "033-670-2256",
        "referenceDate": "2021-07-05",
        "insttCode": "4350000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)한국지체장애인협회 강원도지체장애인협회 양양군지회",
        "rdnmadr": "강원도 양양군 양양읍 양양로 9-5",
        "lnmadr": "강원도 양양군 양양읍 연창리 203-5",
        "latitude": "38.0778442281",
        "longitude": "128.6274852204",
        "carHoldCo": "2",
        "carHoldKnd": "승합 중형(카니발)",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "강원도 광역 교통약자",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "관외 차량 일주일전 신청",
        "useLmtt": "",
        "insideOpratArea": "양양군 전역",
        "outsideOpratArea": "강원도 및 서울(병원 이용 시)",
        "useTrget": "장애정도가 심한장애인+ 장애정도가 심하지 않은장애인(의사진단서)+만65세이상노약자(의사진단서첨부)+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "기본요금 1,100원(4km) 이후 1km당 101원",
        "institutionNm": "양양군 전략교통과",
        "phoneNumber": "033-670-2257",
        "referenceDate": "2021-07-05",
        "insttCode": "4350000"
    },
    {
        "tfcwkerMvmnCnterNm": "남원시 교통약자이동지원센터",
        "rdnmadr": "전라북도 남원시 검멀길 13",
        "lnmadr": "전라북도 남원시 금동 153",
        "latitude": "35.4034185111",
        "longitude": "127.3774079979",
        "carHoldCo": "9",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "9",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "www.0632270002.com",
        "appSvcNm": "전라북도 광역이동지원센터 승객용앱",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "7일",
        "useLmtt": "·이용신청 없이 운전원과 직접 연락하여 차량을 이용한 경우·무임승차를 한 경우·상담원, 운전원에 대하여 욕설·폭언·폭행·성적 희롱을 한 경우·방뇨, 오물투기 등 의도적으로 차량의 운행을 방해하는 경우·광역이동지원센터에 방문하여 무단으로 소란을 일으키거나 업무를 방해하는 경우·이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우·이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우(기간에 관계없이 2회 적발시)",
        "insideOpratArea": "남원시 전지역",
        "outsideOpratArea": "권역(남원+순창+임실) 및 전국",
        "useTrget": "· 장애의 정도가 “심한 장애인” 중 대중교통 이용이 어려운자 (보행상 장애인)· 65세 이상으로 대중교통 이용이 어려운 자· 대중교통 이용이 어려운 임산부, 일시적 휠체어 이용자",
        "useCharge": "· 권역내요금 : 기본요금 2km 700원+주행요금 km당 100원· 권역외요금 : 기본요금 2km 700원+주행요금 700m당 100원· 통행료 및 주차료 등 : 이용자 부담· 대기료 : 권역외 30분당 2,500원(1시간 무료), 전라북도 외 30분당 2,500원(2시간 무료)",
        "institutionNm": "남원시청",
        "phoneNumber": "063-620-6564",
        "referenceDate": "2021-09-09",
        "insttCode": "4700000"
    },
    {
        "tfcwkerMvmnCnterNm": "강릉시교통약자이동지원센터",
        "rdnmadr": "강원도 강릉시 강변로 636-5",
        "lnmadr": "강원도 강릉시 두산동 228-3",
        "latitude": "37.76923243",
        "longitude": "128.9298548",
        "carHoldCo": "16",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "9",
        "liftVhcleCo": "7",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "최소 1일전",
        "useLmtt": "예약당일취소 또는 현장취소가 월 3회 초과 시 1개월 제한+비장애인만 승차하는 경우",
        "insideOpratArea": "강릉시 전지역",
        "outsideOpratArea": "강원도 전지역+강원도 외 지역 상급병원",
        "useTrget": "장애의 정도가 심한 장애인 중 보행불편 장애인+임산부+만65세이상 고령자 중 휠체어 이용자+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "관내지역(기본 4㎞)기본요금 1,100원외 1Km당 100원 추가+관외지역 기본요금 1,100원외 1Km당 100원 추가+시설이용료(통행료,주차료등)와 대기료(1시간 무료,30분당 2,000원, 최대 4시간 대기가능)은 이용자 추가 부담",
        "institutionNm": "강원도강릉시(개인택시강릉시지부위탁운영)",
        "phoneNumber": "033-640-5390",
        "referenceDate": "2021-11-02",
        "insttCode": "4200000"
    },
    {
        "tfcwkerMvmnCnterNm": "부천시교통약자이동지원센터",
        "rdnmadr": "경기도 부천시 석천로 293",
        "lnmadr": "경기도 부천시 중동 1024",
        "latitude": "37.51275697",
        "longitude": "126.7639108",
        "carHoldCo": "75",
        "carHoldKnd": "승합차+버스",
        "slopeVhcleCo": "75",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1588-3815",
        "rceptItnadr": "https://www.best.or.kr/fmcs/25",
        "appSvcNm": "경기도광역이동지원시스템",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "24시간 운영",
        "useLmtt": "정당한 요금을 지불하지 않는 경우+상담원 및 운전원에게 욕설이나 폭행을 하는 경우+이동지원센터 및 특별교통수단의 기물을 손괴한 경우+이용대상자가 아닌 사람을 부정하게 이용할 수 있도록 협조한 경우",
        "insideOpratArea": "전지역",
        "outsideOpratArea": "서울+인천+김포+고양+광명+시흥시",
        "useTrget": "1~2급+등록장애인",
        "useCharge": "1000",
        "institutionNm": "부천도시공사",
        "phoneNumber": "032-625-9403",
        "referenceDate": "2021-10-25",
        "insttCode": "3860000"
    },
    {
        "tfcwkerMvmnCnterNm": "하남시교통약자이동지원센터-나눔콜",
        "rdnmadr": "경기도 하남시 창우로 146",
        "lnmadr": "경기도 하남시 창우동 224-1",
        "latitude": "37.53898563",
        "longitude": "127.2300667863",
        "carHoldCo": "16",
        "carHoldKnd": "스타렉스/카니발",
        "slopeVhcleCo": "13",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1577-0197",
        "rceptItnadr": "미사용",
        "appSvcNm": "하남시교통약자이동지원센터",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "08:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "24:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "24:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "평일, 2일전 아침8시부터~당일2시간전",
        "useLmtt": "도착후 취소시",
        "insideOpratArea": "하남시 전체",
        "outsideOpratArea": "경기.서울 근거리 일대",
        "useTrget": "교통약자",
        "useCharge": "2km 기본 ☞ 1,000원 ( 113m초과  40원  /  27초당 40원 )",
        "institutionNm": "하남시 교통정책과",
        "phoneNumber": "031-790-5016",
        "referenceDate": "2020-05-27",
        "insttCode": "4040000"
    },
    {
        "tfcwkerMvmnCnterNm": "칠곡군 교통약자 이동지원센터",
        "rdnmadr": "경상북도 칠곡군 왜관읍 석전로7길 58",
        "lnmadr": "경상북도 칠곡군 왜관읍 석전리 473",
        "latitude": "36.0066688835",
        "longitude": "128.4082377364",
        "carHoldCo": "7",
        "carHoldKnd": "승합차",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "인터넷 예약 불가",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "14:00",
        "beffatResvePd": "이용일 7일전부터 1일전까지",
        "useLmtt": "-",
        "insideOpratArea": "칠곡군",
        "outsideOpratArea": "경상북도 및 대구광역시(병원 및 관공서 이용)",
        "useTrget": "1. 「장애인복지법 시행규칙」제28조제1항에 따른 보행상의 장애인으로서 같은 규칙 별표 1에 따른 장애의 정도가 심한 장애인으로서 대중교통의 이용이 어려운 사람 2. 사고,질병등일시적장애로휠체어를이용하는사람으로서대중교통의이용이 어려운 사람3. 1호및2호에해당하는교통약자를동반한가족이나보호자4. 그밖에특별교통수단이필요하다고인정하는사람",
        "useCharge": "기본료(2km까지): 1,300원, 2km 초과부터 km당: 200원   ※ 관내는 최대 7,000원, 고속도로 통행료 및 주차료 이용자 부담",
        "institutionNm": "칠곡군청 교통행정과",
        "phoneNumber": "054-979-6564",
        "referenceDate": "2020-07-07",
        "insttCode": "5220000"
    },
    {
        "tfcwkerMvmnCnterNm": "파주시 교통약자이동지원센터",
        "rdnmadr": "경기도 파주시 월롱면 휴암로11",
        "lnmadr": "경기도 파주시 위전리 598-4",
        "latitude": "37.7961277030",
        "longitude": "126.7901986135",
        "carHoldCo": "36",
        "carHoldKnd": "승합(중형)/카니발 저상장애인차/다인승버스",
        "slopeVhcleCo": "35",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "080-699-6199",
        "rceptItnadr": "https://ggsts.gg.go.kr/home.do",
        "appSvcNm": "x",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "0일",
        "useLmtt": "직원에게폭언한경우, 배차 후 취소가 월 3회 이상인경우등",
        "insideOpratArea": "관내 전지역",
        "outsideOpratArea": "서울, 경기, 인천",
        "useTrget": "중증장애인/ 만 65세이상 대중교통이 어려운자 중 의사의 진단서를 제출한 자/ 임산부",
        "useCharge": "관내 1,250원 /관외 5km당 100원",
        "institutionNm": "파주도시관광공사",
        "phoneNumber": "031-950-1885",
        "referenceDate": "2021-03-31",
        "insttCode": "4060000"
    },
    {
        "tfcwkerMvmnCnterNm": "이천시교통약자이동지원센터",
        "rdnmadr": "경기도 이천시 부악로 30-45",
        "lnmadr": "경기도 이천시 중리동 382",
        "latitude": "37.2735354",
        "longitude": "127.4315494",
        "carHoldCo": "24",
        "carHoldKnd": "그랜드카니발+올뉴카니발",
        "slopeVhcleCo": "24",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-0017",
        "rceptItnadr": "https://www.2000happydream.or.kr",
        "appSvcNm": "이천교통약자",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "부득이한 사유로 예약을 취소하고자 할 때에는 늦어도 차량이용 일시의 24시간 이전에 취소하여야한다(30일)+승차할 때에 운전원에게 신분증을 제시하여 본인임을 확인시켜야 한(30일)+목적지 변경 또는 이용신청청을 취소할 경우에는 센터에 즉시 통보하여 승인을 받아야 한다(30일)+이천시 관외병원진료, 장애인단체 및 시설 이용 목적으로 이용시 이용자는 병원진료 종료시각이 나타난 진료영수증 등 증빙서류를, 장애인단체 및 시설 이용자는 관련 공문 등 증",
        "insideOpratArea": "이천시 전지역",
        "outsideOpratArea": "서울특별시+경기도+인천광역시+강원도원주+충북충주+충북음성",
        "useTrget": "「보행상 장애 표준 기준표」에 해당하는 장애인(장애인증명서 제출)+ 「보행상 장애 표준 기준표」에 해당하지 않는 장애인(진단서 제출)+65세 이상 고령자 중 대중교통 이용이 어려운 사람(진단서 제출)+임산부로서 대중교통 이용이 어려운 사람(진단서 제출)+국가유공자로서 대중교통 이용이 어려운 사람(진단서 제출)+교통약자를 동반하는 2인 이내의 가족 및 보호자",
        "useCharge": "기본요금 10km 1,200원+추가요금 5km 당 100원+왕복운행시 대기료 시간당 1,000원(2시간 이내)+고속도로통행료 및 유료주차장 사용료 이용자 부담",
        "institutionNm": "경기 이천시",
        "phoneNumber": "031-644-2372",
        "referenceDate": "2021-03-31",
        "insttCode": "B553081"
    },
    {
        "tfcwkerMvmnCnterNm": "한국교통장애인협회 영덕군지회",
        "rdnmadr": "경상북도 영덕군 영덕읍 남석2길 5",
        "lnmadr": "경상북도 영덕군 영덕읍 남석리 62-2",
        "latitude": "36.4104850029",
        "longitude": "129.367214",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-734-3006",
        "rceptItnadr": "yd8254@hanmail.net",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "30일",
        "useLmtt": "복지카드(신분증)의 제시 또는 관련서류의 제출을 거부한 경우+보호자 없이 탑승시 안전상의 문제가 발생 할 수 있다고 판단되는 경우+실제 탑승인과 복지카드의 대상자가 다를 경우+의도적으로 특별교통수단 운행을 방해한자(방뇨, 오물투기 등)+운행원칙에 반하는 무리한 요구를 하는 자",
        "insideOpratArea": "영덕 전지역",
        "outsideOpratArea": "경북 전지역+대구광역시",
        "useTrget": "1,2급 장애인+3급하지장애인+대중교통이 어렵다는 진단서 제출 장애인",
        "useCharge": "기본 5km 1,400 5km초과 미터당 200원 추가요금 발생 한나절대절60,000 반나절 30,000",
        "institutionNm": "경상북도 영덕군청",
        "phoneNumber": "054-730-6255",
        "referenceDate": "2021-09-15",
        "insttCode": "5180000"
    },
    {
        "tfcwkerMvmnCnterNm": "여수시교통약자이동지원센터",
        "rdnmadr": "전라남도 여수시 성산로 46(화장동)",
        "lnmadr": "전라남도 여수시 화장동 761-3",
        "latitude": "34.774271",
        "longitude": "127.6425851428",
        "carHoldCo": "23",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "6",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "없음",
        "useLmtt": "없음",
        "insideOpratArea": "여수시",
        "outsideOpratArea": "광주광역시+전남전지역",
        "useTrget": "대중교통 이용이 어려운 보행상 장애인",
        "useCharge": "기본요금 2km까지 700원+이후요금 164m당 30원+시간요금 39초당 30원",
        "institutionNm": "여수시",
        "phoneNumber": "061-659-4129",
        "referenceDate": "2020-10-30",
        "insttCode": "4810000"
    },
    {
        "tfcwkerMvmnCnterNm": "양구군교통약자이동지원센터",
        "rdnmadr": "강원도 양구군 양구읍 비봉로73번길12",
        "lnmadr": "강원도 양구군 양구읍 하리 97-3",
        "latitude": "38.1087482600",
        "longitude": "127.986475",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr/main.do",
        "appSvcNm": "강원도 교통약자 광역이동지원센터",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "1주일전～1일전",
        "useLmtt": "",
        "insideOpratArea": "관내 전구간",
        "outsideOpratArea": "강원도 내",
        "useTrget": "장애의 정도가 심한 장애인65세 이상 대중교통이 어려운 사람",
        "useCharge": "4km까지 1,100원",
        "institutionNm": "양구군",
        "phoneNumber": "033-480-2715",
        "referenceDate": "2020-07-08",
        "insttCode": "4320000"
    },
    {
        "tfcwkerMvmnCnterNm": "사단법인한국시각장애인연합회영월지회",
        "rdnmadr": "강원도 영월군 영월읍 단종로 21",
        "lnmadr": "강원도 영월군 영월읍 영흥리 959-27",
        "latitude": "37.185347",
        "longitude": "128.467917",
        "carHoldCo": "4",
        "carHoldKnd": "창림저상슬로프장애인차",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "24:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "24:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "일주일~1일전",
        "useLmtt": "예약취소 없이 3회 무단 불이용 시 또는 차량 도착 시 요청장소에 3회 무단 부재 시 한달간 이용 정지",
        "insideOpratArea": "영월군 전지역",
        "outsideOpratArea": "강원도+제천+단양",
        "useTrget": "휠체어 이용 1, 2급 장애인+그 외 이용자(진단서 첨부)",
        "useCharge": "4km 기본 1,100원, 이후 1km 당 100원",
        "institutionNm": "강원도 영월군",
        "phoneNumber": "033-370-2356",
        "referenceDate": "2018-08-31",
        "insttCode": "4270000"
    },
    {
        "tfcwkerMvmnCnterNm": "예산군 교통약자이동지원센터",
        "rdnmadr": "충청남도 예산군 예산읍 벚꽃로 171",
        "lnmadr": "충청남도 예산군 예산읍 발연리 67",
        "latitude": "36.69599281",
        "longitude": "126.8366807",
        "carHoldCo": "7",
        "carHoldKnd": "카니발 7대",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "이용 2일 전",
        "useLmtt": "",
        "insideOpratArea": "관내",
        "outsideOpratArea": "충청남도내",
        "useTrget": "대중교통이용이 어려운 정도가 심한 보행 장애인 및 65세 노인, 임산부, 일시적 장애인 등",
        "useCharge": "(관내) 기본요금: 2km까지 1000원, 추가요금: 130원/km (관외) 260원/km",
        "institutionNm": "충청남도 예산군청",
        "phoneNumber": "041-339-7694",
        "referenceDate": "2021-05-25",
        "insttCode": "4610000"
    },
    {
        "tfcwkerMvmnCnterNm": "보은군장애인생활이동지원센터",
        "rdnmadr": "충청북도 보은군 보은읍 뱃들로 68-38",
        "lnmadr": "충청북도 보은군 보은읍 이평리 105-2",
        "latitude": "36.4886825",
        "longitude": "127.7234966",
        "carHoldCo": "2",
        "carHoldKnd": "스타랙스12인승, 레이",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-543-2705",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "1주일전",
        "useLmtt": "없음",
        "insideOpratArea": "보은군 전지역",
        "outsideOpratArea": "청주, 대전",
        "useTrget": "등록된 장애인",
        "useCharge": "요금 기준표 참고",
        "institutionNm": "(사)충북시각장애인복지연합회보은군지회",
        "phoneNumber": "043-543-2705",
        "referenceDate": "2021-05-06",
        "insttCode": "4420000"
    },
    {
        "tfcwkerMvmnCnterNm": "양주시교통약자이동지원센터",
        "rdnmadr": "경기도 양주시 광적면 부흥로618번길 303",
        "lnmadr": "경기도 양주시 광적면 광석리 132",
        "latitude": "37.81249951",
        "longitude": "126.9723084",
        "carHoldCo": "22",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "22",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-861-9977",
        "rceptItnadr": "없음",
        "appSvcNm": "양주시 교통약자 스마트앱",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "이용예정일 2일전부터",
        "useLmtt": "",
        "insideOpratArea": "관내 전지역",
        "outsideOpratArea": "공항+경기북부+서울(병원진료시)+도봉산역 환승센터+수락산역+구파발역",
        "useTrget": "장애의 정도가 심한 장애인 중 보행상 장애인+65세 이상 대중교통 이용이 어려운 사람(진단서)+임산부(산모수첩) 등",
        "useCharge": "기본요금 : 10Km 1,200원+거리요금 : 10Km 초과시 5Km마다 100원 추가(유료도로 및 주차요금 이용자 부담)",
        "institutionNm": "양주시 대중교통과",
        "phoneNumber": "031-8082-6602",
        "referenceDate": "2021-04-21",
        "insttCode": "5590000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)한국교통장애인협회 울진군지회",
        "rdnmadr": "경상북도 울진군 울진읍 공세항길 19-60",
        "lnmadr": "경상북도 울진군 울진읍 읍내리 15-2",
        "latitude": "36.99137861",
        "longitude": "129.405693",
        "carHoldCo": "7",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "4",
        "rceptPhoneNumber": "054-782-5775",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "관내 3일전+관외 2달전",
        "useLmtt": "관내 주5회+관외:1달에 2번",
        "insideOpratArea": "울진군 관내",
        "outsideOpratArea": "경상북도+강릉병원+대구병원+동해병원+삼척병원",
        "useTrget": "장애등급 1급+2급 장애인+65세 이상의 대중교통수단이용이 어려운 사람(의사진단서)",
        "useCharge": "관내편도기준 기본4km까지 1,400원외 1km당 200원+관외요금 시외버스요금의 2배",
        "institutionNm": "경상북도 울진군청",
        "phoneNumber": "054-789-6393",
        "referenceDate": "2021-05-13",
        "insttCode": "5250000"
    },
    {
        "tfcwkerMvmnCnterNm": "진천군 교통약자이동지원센터",
        "rdnmadr": "충청북도 진천군 진천읍 중앙북1길 11-10",
        "lnmadr": "충청북도 진천군 진천읍 벽암리 570-1",
        "latitude": "36.8610976",
        "longitude": "127.439492",
        "carHoldCo": "6",
        "carHoldKnd": "스타렉스2+카니발4",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "043-534-5758",
        "rceptItnadr": "인터넷 예약 안됨",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "19:00",
        "wkendOperOpenHhmm": "08:30",
        "wkendOperCloseHhmm": "17:30",
        "beffatResvePd": "관내3일,관외7일",
        "useLmtt": "",
        "insideOpratArea": "진천군내",
        "outsideOpratArea": "청주, 진천군인접지역",
        "useTrget": "1. 「장애인복지법 시행규칙」 제2조제1항의 규정에 따른 장애의 정도가 심한 장애인으로서 버스 등 대중교통의 이용이 어려운 사람2. 만 65세 이상의 사람으로서 버스 등 대중교통의 이용이 어려운 사람 3. 제1호부터 제2호의 교통약자외 혼자서 외출과 이동이 곤란하여 특별교통수단이 필요하다고 인정되는 사람(임산부, 일시적 장애로 거동이 어려운 사람 등) 4. 제1호부터 제3호까지의 규정에 해당하는 교통약자를 동반하는 가족과 보호자",
        "useCharge": "5km까지 2,000원(초과시 1km당 360원)최대 4000원",
        "institutionNm": "진천군",
        "phoneNumber": "043-539-3727",
        "referenceDate": "2021-09-23",
        "insttCode": "4450000"
    },
    {
        "tfcwkerMvmnCnterNm": "안산시 하모니콜",
        "rdnmadr": "경기도 안산시 단원구 화랑로 260",
        "lnmadr": "경기도 안산시 단원구 초지동 666",
        "latitude": "37.3194760178",
        "longitude": "126.8164938939",
        "carHoldCo": "61",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "60",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1588-5410",
        "rceptItnadr": "없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "전구간",
        "outsideOpratArea": "수도권(서울,인천,경기)",
        "useTrget": "장애의정도가 심한 보행상장애인+국가유공상이자+노약자(재활치료 및 진료목적)+어린이(만5세미만으로 전문병원 이상 의료기관에서 1개월 이상의 지속적인 치료 진단)",
        "useCharge": "관내 : 1,200원(10km)+관외 : 기본 1,200원(10km) 추가 5km 마다 100원",
        "institutionNm": "안산도시공사",
        "phoneNumber": "031-8058-7497",
        "referenceDate": "2021-08-31",
        "insttCode": "3930000"
    },
    {
        "tfcwkerMvmnCnterNm": "청송군 교통약자이동지원센터",
        "rdnmadr": "경상북도 청송군 청송읍 중앙로 299",
        "lnmadr": "경상북도 청송군 청송읍 월막리 290-3",
        "latitude": "36.43511571",
        "longitude": "129.0614924",
        "carHoldCo": "2",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "2",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "http://www.brmcall.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "연중",
        "useLmtt": "",
        "insideOpratArea": "",
        "outsideOpratArea": "",
        "useTrget": "보행장애인으로서 장애의정도가 심한 장애인으로서 대중교통 이용이 어려운 사람 + 일시적 휠체어 이용자 + 서비스 대상자와 동승하는 최소 필요 보호자+임산부+노약자",
        "useCharge": "1,000원/10km(기본) + 200원/1km(추가)",
        "institutionNm": "청송군",
        "phoneNumber": "054-870-6254",
        "referenceDate": "2021-09-16",
        "insttCode": "5160000"
    },
    {
        "tfcwkerMvmnCnterNm": "진안군교통약자이동지원센터",
        "rdnmadr": "진안군 진안읍 관산2길 11",
        "lnmadr": "진안군 진안읍 군하리 91-1",
        "latitude": "35.790572",
        "longitude": "127.425266",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-433-4222",
        "rceptItnadr": "https://www.0632270002.com:8443/view/index.do",
        "appSvcNm": "전라북도 광역이동지원센터 승객용 앱",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "17:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "17:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "전일 17:00까지",
        "useLmtt": "1. 차량 도착 후 취소한 경우2. 차량 도착 후 아무런 연락이 없이 10분 이상 이용하지 않는 경우3. 사전 예약 후 예약시간으로부터 1시간 이내에 예약을 취소한 경우4. 이용신청 없이 운전원과 직접 연락하여 차량을 이용한 경우.5. 상담원, 운전원에 대하여 욕설, 폭언, 성적 희롱을 한 경우.6. 방뇨, 오물투기 등 의도적으로 차량의 운행을 방해하는 경우.7. 광역이동지원센테에 방문하여 무단으로 소란을 일으키거나 업무를 방해하는 경우8. 이",
        "insideOpratArea": "진안군",
        "outsideOpratArea": "제한없음",
        "useTrget": "1.장애의 정도가 “심한 장애인” 중 대중교통 이용이 어려운 자(보행상 장애인) 2.65세 이상으로 대중교통 이용이 어려운 자3.대중교통 이용이 어려운 임산부, 일시적 휠체어 이용자4.이용대상자를 동반하는 가족 및 보호자5.타 지역 거주자(심한 장애인)이나 일시적 방문자(사전신청 접수시)",
        "useCharge": "권역내 요금- 기본요금 2km당 700원- 주행요금 km당 100원(2천원 이상시 2천원)권역외 요금- 기본요금 2km당 700원- 주행요금 700m당 100원통행료 및 주차료 등 : 이용자 부담대기료-권역외 : 30분당 2,500원(1시간무료)-전라북도외 : 30분당 2,500원(2시간무료)",
        "institutionNm": "진안군",
        "phoneNumber": "063-430-2356",
        "referenceDate": "2021-09-15",
        "insttCode": "4730000"
    },
    {
        "tfcwkerMvmnCnterNm": "김천시교통약자이동지원센터",
        "rdnmadr": "경상북도 김천시 환경로 105",
        "lnmadr": "경상북도 김천시 신음동 52",
        "latitude": "36.131770",
        "longitude": "128.137665",
        "carHoldCo": "10",
        "carHoldKnd": "스타렉스3대+카니발7대",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-7770",
        "rceptItnadr": "www.brmcall.co.kr",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:01",
        "wkendRceptCloseHhmm": "00:01",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "7일",
        "useLmtt": "관외 운행은 병원이용목적에 한함+주말 운행은 사전예약자에 한함",
        "insideOpratArea": "김천시 전 지역",
        "outsideOpratArea": "경상북도 내, 대구광역시, 김천시와 연접한 시·군",
        "useTrget": "1급 ~ 3급 장애인 (장애 정도가 심한 장애인)+65세 이상으로 대중교통의 이용이 어려운 사람+사고ㆍ질병 등으로 인하여 일시적으로 휠체어 이용자+임산부로서 대중교통수단의 이용이 어려운 사람+국가유공자 등 예우 및 지원에 관한 법률 시행령 제14조제3항에 따른 상이등급+3급 이상에 해당하는 사람으로 대중교통 이용이 어려운 사람+그밖에 특별교통수단이 필요하다고 인정되는 사람+위 해당하는 교통약자를 동반하는 가족 및 보호자",
        "useCharge": "기본운임(2km 미만) : 1,400원+2km이상~10km 미만 : 300원/km+10km 이상 : 100원/km+시외:시외버스 요금의 2배+유료도로 이용료, 주차료는 이용자 부담",
        "institutionNm": "김천시",
        "phoneNumber": "054-420-6688",
        "referenceDate": "2021-09-16",
        "insttCode": "5060000"
    },
    {
        "tfcwkerMvmnCnterNm": "영광군 특별교통수단(장애인콜택시)",
        "rdnmadr": "전라남도 영광군 영광읍 옥당로 50",
        "lnmadr": "전라남도 영광군 영광읍 녹사리 242-1",
        "latitude": "35.26952915",
        "longitude": "126.5090179",
        "carHoldCo": "5",
        "carHoldKnd": "올뉴카니발",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "http://www.doumcall.kr",
        "appSvcNm": "전남광역승객용앱",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "07:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "17:00",
        "beffatResvePd": "1일 전",
        "useLmtt": "",
        "insideOpratArea": "영광군 관내",
        "outsideOpratArea": "전라남도 내",
        "useTrget": "중증 장애인+2급 이상의 상이등급+ 사고·질병 등으로 인한 일시적 장애+65세 이상 노약자+동반하는 가족 및 보호자 2인 이내",
        "useCharge": "기본요금2km  500원 / 추가 1㎞당 100 / 최고 1,000원 / (관외지역) 시외버스 요금",
        "institutionNm": "전남지체장애인협회 영광군지회",
        "phoneNumber": "061-353-8041",
        "referenceDate": "2021-09-15",
        "insttCode": "4970000"
    },
    {
        "tfcwkerMvmnCnterNm": "안성시교통약자이동지원센터",
        "rdnmadr": "경기도 안성시 보개면 종합운동장로 162",
        "lnmadr": "경기도 안성시 보개면 양복리 210",
        "latitude": "37.01319895",
        "longitude": "127.3278403",
        "carHoldCo": "15",
        "carHoldKnd": "카니발 승합",
        "slopeVhcleCo": "15",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-677-6655",
        "rceptItnadr": "www.asimc.or.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "3일전",
        "useLmtt": "예약취소 월2회+일반인동승+중도하차+의도적운행방해+요금체납",
        "insideOpratArea": "전지역",
        "outsideOpratArea": "서울시+경기도 전지역+천안+음성+진천",
        "useTrget": "장애1~2등급+65세이상 대중교통이용이 어려운자+임산부+영유아 동반 대중교통 이용이 어려운자+일시적 휄체어 이용자",
        "useCharge": "10km/1,300원시계외 20+할증대기료 1,000원",
        "institutionNm": "안성시시설관리공단위탁",
        "phoneNumber": "031-672-1234",
        "referenceDate": "2021-03-15",
        "insttCode": "4080000"
    },
    {
        "tfcwkerMvmnCnterNm": "무안군교통약지이동지원센터",
        "rdnmadr": "전라남도 무안군 무안읍 면성1길 27",
        "lnmadr": "전라남도 무안군 무안읍 성내리 174-10",
        "latitude": "34.99186126",
        "longitude": "126.478132",
        "carHoldCo": "4",
        "carHoldKnd": "카니발장애인차",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "http://www.doumcall.kr/",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "24시간 전",
        "useLmtt": "예약 후 당일 취소 및 연락불가시 이용제한",
        "insideOpratArea": "관내 전지역",
        "outsideOpratArea": "전라남도",
        "useTrget": "65세이상 대중교통이용 불가능자중복3급이상 중증장애인임산부일시적 휠체어 이용자",
        "useCharge": "2km 1400, 146m당 64원",
        "institutionNm": "사단법인 무안군장애인협회",
        "phoneNumber": "061-454-8818",
        "referenceDate": "2021-08-27",
        "insttCode": "4950000"
    },
    {
        "tfcwkerMvmnCnterNm": "가평군교통약자이동지원센터",
        "rdnmadr": "경기도 가평군 가평읍 문화로 153",
        "lnmadr": "경기도 가평군 가평읍 대곡리 318",
        "latitude": "37.82631492",
        "longitude": "127.5075875",
        "carHoldCo": "16",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "16",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-8078-8122",
        "rceptItnadr": "https://www.gpfmc.or.kr/sub2/sub2_4-2.php",
        "appSvcNm": "미정",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "17:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "20:00",
        "beffatResvePd": "이용일 2일전 까지",
        "useLmtt": "특별교통수단 이용대상자(등록심사를 받은 등록된자)에 한해서 사용 가능",
        "insideOpratArea": "가평전역",
        "outsideOpratArea": "경기도 인접지역(ㅇ야평,남양주,포천,구리,의정부)서울,춘천",
        "useTrget": "「장애인복지법 시행규�o」 제28조 제1항에 따른 보행상의 장애인으로서 버스, 지하철 등의 이용 어려운 사람 65세 이상으로 휠체어 이용으로 인한 버스 등 대중교통의 이용이 어려운 사람 임산부 및 영유아를 동반한 자로서 대중교통의 이용이 어려운 사람 사고·질병 등으로 일시적으로 휠체어를 이용하는 사람으로 대중교통의 이용이 어려운 사람",
        "useCharge": "기본요금: 1,300원(10km 이내),추가요금: 기본요금 초과부터 5km당 100원 추가",
        "institutionNm": "가평군",
        "phoneNumber": "031-580-2203",
        "referenceDate": "2021-08-24",
        "insttCode": "4160000"
    },
    {
        "tfcwkerMvmnCnterNm": "거창군교통약자이동지원센터",
        "rdnmadr": "경상남도 거창군 거창읍 중앙로 103",
        "lnmadr": "경상남도 거창군 거창읍 상림리 64-1",
        "latitude": "35.6866758379",
        "longitude": "127.9095331581",
        "carHoldCo": "7",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "5",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "전날 21:00",
        "useLmtt": "",
        "insideOpratArea": "거창군 관내",
        "outsideOpratArea": "경상남도+대구광역시(치료목적만 편도로 이용가능)",
        "useTrget": "심한 장애인 중 보행상 장애인, 65세이상 노인, 임산부, 휠체어이용자(대중교통 이용이 어려운자), 동반하는 가족 및 보호자",
        "useCharge": "관내 : 2,000원 + 관외 : 시외버스 요금의 1.5배",
        "institutionNm": "경상남도 거창군청",
        "phoneNumber": "055-940-3388",
        "referenceDate": "2021-08-31",
        "insttCode": "5470000"
    },
    {
        "tfcwkerMvmnCnterNm": "김포시 교통약자 이동지원센터",
        "rdnmadr": "경기도 김포시 금포로 1127",
        "lnmadr": "경기도 김포시 운양동 5-6",
        "latitude": "37.64689872",
        "longitude": "126.7047807",
        "carHoldCo": "40",
        "carHoldKnd": "그랜드카니발R",
        "slopeVhcleCo": "40",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-2008",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "0",
        "useLmtt": "대기시간 15분 초과 회차 발생 + 차량 도착 후 15분 이내에 미승차 월 3회 이상 +  상담원 상담 및 신청 방해 + 장난전화 3회 이상인 경우 + 이용예정시각 1시간 이내 취소한 경우가 월 3회 등",
        "insideOpratArea": "관내 전체",
        "outsideOpratArea": "경기도 + 서울시 +인천시",
        "useTrget": "1, 2급 등록 장애인(명부에 등재된 장애인 신분확인 후 이용가능) +65세이상 고령자로 대중교통 이용이 어려운 사람(이용대상자 심사 및 승인 후 이용가능 - 대중교통 이용불편 진단서 첨부)",
        "useCharge": "관내 1,000원, 관외 추가요금 100원/5km",
        "institutionNm": "김포시 시설관리공단",
        "phoneNumber": "031-986-9484",
        "referenceDate": "2021-10-01",
        "insttCode": "4090000"
    },
    {
        "tfcwkerMvmnCnterNm": "대광택시㈜",
        "rdnmadr": "경상남도 밀양시 부북면 밀양대로 1651",
        "lnmadr": "",
        "latitude": "35.47395045",
        "longitude": "128.7540292",
        "carHoldCo": "20",
        "carHoldKnd": "승합차",
        "slopeVhcleCo": "20",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "N",
        "useLmtt": "회원제 운영 예정",
        "insideOpratArea": "밀양시 관내 일원",
        "outsideOpratArea": "경상남도",
        "useTrget": "회원 가입자",
        "useCharge": "https://www.miryang.go.kr/web/index.do?mnNo=50306000000",
        "institutionNm": "㈜대광택시",
        "phoneNumber": "055-356-3962",
        "referenceDate": "2021-11-05",
        "insttCode": "5360000"
    },
    {
        "tfcwkerMvmnCnterNm": "예천군장애인이동지원센터",
        "rdnmadr": "경상북도 예천군 예천읍 대심1길 22",
        "lnmadr": "경상북도 예천군 예천읍 대심리 424-4",
        "latitude": "36.649653",
        "longitude": "128.441283",
        "carHoldCo": "6",
        "carHoldKnd": "그랜드카니발 저상슬로프 차량",
        "slopeVhcleCo": "6",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-652-7179",
        "rceptItnadr": "00:00",
        "appSvcNm": "00:00",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "24시간전",
        "useLmtt": "특별한 제한없음",
        "insideOpratArea": "예천군 관내 전지역",
        "outsideOpratArea": "대구광역시+경상권 전지역",
        "useTrget": "지체(하지)+뇌병변+신장 1∼2급장애인 및 동반보호자",
        "useCharge": "기본료 5km까지 1,200원+5km초과시 200원/km+톨게이트비+주차료 본인부담",
        "institutionNm": "경상북도 예천군",
        "phoneNumber": "054-650-6253",
        "referenceDate": "2021-10-29",
        "insttCode": "5230000"
    },
    {
        "tfcwkerMvmnCnterNm": "천안시 교통약자이동지원센터",
        "rdnmadr": "충청남도 천안시 동남구 다가말2길 104 일봉회관 5층",
        "lnmadr": "충청남도 천안시 동남구 다가동 405-6",
        "latitude": "36.797916",
        "longitude": "127.1431034",
        "carHoldCo": "41",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "41",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "041-558-0010",
        "rceptItnadr": "해당없음",
        "appSvcNm": "충남 광역이동지원센터 이용자용 앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "즉시콜",
        "useLmtt": "1. 이용고객의 차량을 예약하고 비장애인만 승차 시키는 경우2. 장애등급을 허위 고지하여 우선배차를 받는 등 부정 탑승 행위를 한 경우 3. 운전에 방해를 줄 수 있는 고객 탑승 시 보호자가 동승하지 않는 경우4. 교통약자를 위한 보호자의 동반 탑승은 최초 탑승 시부터 최종 목적지까지 같이 동승하여 타고 내려야 하며, 중도에 보호자만 개별적으로 타고 내리는 경우5. 장애인 보조견을 제외한 운전에 방해를 줄 수 있는 애완동물 및 폭발성, 인화성 ",
        "insideOpratArea": "천안시내권",
        "outsideOpratArea": "없음",
        "useTrget": "「교통약자의 이동편의 증진법 시행규칙」 제6조제1항 각 호의 사람+임신부+일시적으로 보행상 장애가 있는 사람",
        "useCharge": "관내지역(기본요금 2km당 1,000원+거리할증 1km당 130원)+관외지역(1km당 260원)+대기료 30분당 2,000원+통행료는 이용자 부담",
        "institutionNm": "충청남도 천안시 대중교통과",
        "phoneNumber": "041-521-5634",
        "referenceDate": "2021-10-22",
        "insttCode": "4490000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자 이동지원 센터 행복콜",
        "rdnmadr": "경상북도 문경시 남부4길 13(모전동, 장원하이드파크) 101호",
        "lnmadr": "경상북도 문경시 모전동 67",
        "latitude": "36.5871278",
        "longitude": "128.1940527",
        "carHoldCo": "8",
        "carHoldKnd": "카니발(휠체어슬로프) 차량",
        "slopeVhcleCo": "8",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-556-7755",
        "rceptItnadr": "인터넷 접수불가",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "당일 2시간 전 즉시예약",
        "useLmtt": "1) 당일 2시간 전 예약 건에 한함+2) 주말운행은 병원이용 목적인 사전 예약자에 한함+3) 예약 시, 1, 2급 장애인증명서(또는 복지카드) 또는 의사소견서를 첨부해야함.",
        "insideOpratArea": "문경시 전역",
        "outsideOpratArea": "경북+ 대구(병원이용목적으로만)",
        "useTrget": "1) 장애정도가 심한 장애인+2) 장애정도가 심하지 않은 장애인, 65세 이상 노약자, 임산부 중 대중교통 이용이 어려운자  및 일시적 장애로 인한 휠체어 이용자+3) 1과 2의 이용대상자 보호자 및 가족",
        "useCharge": "1) 기본요금:1,300원(5km내)+2) 추가요금: 200원/km(5km초과 시)*단, 관내는 5,000원 이내, 관외는 시외버스 요금의 2배 를 초과하지 못함.",
        "institutionNm": "문경시",
        "phoneNumber": "054-550-6859",
        "referenceDate": "2021-10-22",
        "insttCode": "5120000"
    },
    {
        "tfcwkerMvmnCnterNm": "강원도지체장애인협회 고성군지회",
        "rdnmadr": "강원도 고성군 죽왕면 동해대로 6520",
        "lnmadr": "강원도 고성군 죽왕면 가진리 299-19",
        "latitude": "38.37818193",
        "longitude": "128.4988401",
        "carHoldCo": "3",
        "carHoldKnd": "승합 중형",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr/main.do",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "0",
        "useLmtt": "",
        "insideOpratArea": "고성군 일원",
        "outsideOpratArea": "서울, 강원도내 당일 왕복 가능지역",
        "useTrget": "장애정도가 심한 장애인으로 대중교통이용이 어려운 사람, 65세 이상의 사람으로 대중교통 이용이 어려운 사람(소견서 및 진단서 첨부), 교통약자를 동반하는 가족 및 보호자, 장애인복지법 제65조에 따른 보장구 이용 대상자, 임산부 및 일시적으로 휠체어를 이용하는 사람으로 대중교통 이용이 어려운 사람 등",
        "useCharge": "운행요금 : 4km까지 1,100원 / 4km초과 시 1km마다 100원, 대기료 : 최초1시간 무료, 초과 30분 당 1,000원",
        "institutionNm": "강원도 고성군청",
        "phoneNumber": "033-680-3748",
        "referenceDate": "2021-10-20",
        "insttCode": "4340000"
    },
    {
        "tfcwkerMvmnCnterNm": "화성시 교통약자이동지원센터(화성나래)",
        "rdnmadr": "경기도 화성시 향남읍 향남로 470",
        "lnmadr": "경기도 화성시 향남읍 도이리 산31-6번지",
        "latitude": "37.13752921",
        "longitude": "126.9242565293",
        "carHoldCo": "58",
        "carHoldKnd": "슬로프형휠체어차량",
        "slopeVhcleCo": "58",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "080-600-0677",
        "rceptItnadr": "https://www.hsnarae.or.kr",
        "appSvcNm": "화성시 교통약자 이동지원센터",
        "weekdayRceptOpenHhmm": "06:00",
        "weekdayRceptColseHhmm": "22:00",
        "wkendRceptOpenHhmm": "06:00",
        "wkendRceptCloseHhmm": "22:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "24:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "24:00",
        "beffatResvePd": "이용일 전일 08:00부터 예약가능",
        "useLmtt": "본인확인 요구 거부, 본인 아닌 제3자가 차량을 이용할 수 있도록 허위 신청, 차량도착 후 10분 이내 미 승차, 이용신청 후 별도 통보없이 차량 미이용, 이용 예정시간 1시간 이내에 이용신청 취소, 원활한 운영저해 등 : 월 3회 누적 위반 시 7일간 이용 제한 / 상담원, 운전원에게 욕설, 폭언 및 폭행, 성희롱 등 : 1개월 내 이용 제한",
        "insideOpratArea": "화성시 전역",
        "outsideOpratArea": "서울, 인천, 경기(단, 출발지는 화성시 관내로 함)",
        "useTrget": "1. 장애정도가 심한 보행상 장애인, 2. 65세 이상 고령자, 임산부, 영유아 동반자, 어린이 등의 교통약자 중 대중교통 이용이 어렵다는 진단서를 제출한 사람, 3. 일시적인 보행상 장애로 대중교통 이용이 어렵다는 진단서를 제출한 사람, 4. 1~3까지 해당하는 교통약자를 동반하는 2명 이내의 보호자",
        "useCharge": "기본 1,200원(10km이내), 추가 100원/5km",
        "institutionNm": "화성도시공사",
        "phoneNumber": "080-600-0677",
        "referenceDate": "2021-10-20",
        "insttCode": "5530000"
    },
    {
        "tfcwkerMvmnCnterNm": "임실군장애인연합회 교통약자이동지원센터",
        "rdnmadr": "전라북도 임실군 임실읍 호국로 1644",
        "lnmadr": "전라북도 임실군 임실읍 이도리 380-2",
        "latitude": "35.61026512",
        "longitude": "127.283295",
        "carHoldCo": "3",
        "carHoldKnd": "스타렉스 2대, 카니발 1대",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "063-642-5118",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "10:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "10:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "0",
        "useLmtt": "",
        "insideOpratArea": "관내",
        "outsideOpratArea": "관내인탑승시 전지역 운행",
        "useTrget": "보행상의 장애인으로서 장애의 정도가 심한 장애인과, 65세 이상 노인 중 버스이용이 어려운 사람 등",
        "useCharge": "권역내(2km 기본요금 700원, km당 100원), 권역외(2km 기본요금 700원, 700m당 100원)",
        "institutionNm": "전라북도 임실군청",
        "phoneNumber": "063-640-2575",
        "referenceDate": "2021-10-21",
        "insttCode": "4760000"
    },
    {
        "tfcwkerMvmnCnterNm": "장성군교통약자이동편의증진센터(전남지체장애인협회 장성군지회)",
        "rdnmadr": "전라남도 장성군 장성읍 청운길 23",
        "lnmadr": "",
        "latitude": "35.30199904",
        "longitude": "126.7813166",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "-",
        "useLmtt": "",
        "insideOpratArea": "전라남도",
        "outsideOpratArea": "광주광역시",
        "useTrget": "심한장애인 중 보행상장애인 + 일시적으로 대중교통 이용 어려운 사람",
        "useCharge": "기본요금 500원(2Km까지), 1km당 100원",
        "institutionNm": "장성군",
        "phoneNumber": "061-390-7366",
        "referenceDate": "2021-10-20",
        "insttCode": "4980000"
    },
    {
        "tfcwkerMvmnCnterNm": "목포시 교통약자이동지원센터",
        "rdnmadr": "전라남도 목포시 영산로 350-3",
        "lnmadr": "전라남도 목포시 용당동 993-10",
        "latitude": "34.80554093",
        "longitude": "126.4042502",
        "carHoldCo": "20",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "http://www.doumcall.kr/index_main.html",
        "appSvcNm": "전남광역승객용앱",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "시외 경우 전일",
        "useLmtt": "",
        "insideOpratArea": "전지역",
        "outsideOpratArea": "전라남도(신안군 제외) 및 광주광역시",
        "useTrget": "중증 보행상 장애인, 65세 이상 고령자, 임산부, 일시적 휠체어 이용자로서 대중교통수단의 이용이 어려운자+ 교통약자를 동반하는 가족 및 보호자 2인 이내",
        "useCharge": "기본요금 500원(2km), 추가 1km당 100원(상한액 : 시내버스요금 1,350원)",
        "institutionNm": "목포시",
        "phoneNumber": "061-270-3328",
        "referenceDate": "2021-10-20",
        "insttCode": "4800000"
    },
    {
        "tfcwkerMvmnCnterNm": "창원시설공단 교통편의관리소",
        "rdnmadr": "경상남도 창원시 성산구 원이대로 450",
        "lnmadr": "경상남도 창원시 성산구 중앙동 1",
        "latitude": "35.234007",
        "longitude": "128.664735",
        "carHoldCo": "107",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "77",
        "liftVhcleCo": "24",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "경남특별교통수단",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "없음",
        "useLmtt": "당일 즉시 이용자 또는 예약자로서 차량 도착 후 이용 취소한 자+차량 도착 후 30분 이내에 승차하지 않는 경우가 3회 이상인 자+예약시간으로부터 1시간 이내 예약취소가 3회 이상인 자+이용신청 없이 운전원과 직접 연락하여 차량을 이용한 자+무임승차가 2회 이상인 자+교통약자와 동반할 목적이 아닌 일반인의 동승 및 중도 하차 요구자+상담원, 운전원에 대한 욕설,폭언,폭행,성적 희롱을 한 경우가 2회 이상인 자+의도적으로 특별교통수단의 운행을 방",
        "insideOpratArea": "창원시 전지역",
        "outsideOpratArea": "경상남도+부산광역시",
        "useTrget": "장애의 정도가 심한 장애인 중 보행상 장애가 있는 사람(등급제 폐지전 1·2급 장애인 모두포함)+국가유공자 상이등급 1, 2급으로 대중교통 이용이 어려운 자+65세 이상·임산부·일시적으로 휠체어를 이용하는 사람 중 대중교통 이용이 어려운 자",
        "useCharge": "관내요금 1,500원+관외요금 시외버스요금",
        "institutionNm": "창원시",
        "phoneNumber": "055-225-4313",
        "referenceDate": "2021-10-19",
        "insttCode": "5670000"
    },
    {
        "tfcwkerMvmnCnterNm": "김해교통약자콜택시",
        "rdnmadr": "",
        "lnmadr": "경상남도 김해시 삼정동 359",
        "latitude": "35.227692",
        "longitude": "128.900987",
        "carHoldCo": "50",
        "carHoldKnd": "스타렉스+카니발",
        "slopeVhcleCo": "48",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "http://www.15664488.co.kr/",
        "appSvcNm": "경남특별교통수단",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "1일전 21:00~ 24:00",
        "useLmtt": "",
        "insideOpratArea": "김해전역",
        "outsideOpratArea": "경남지역, 부산지역(편도운행)",
        "useTrget": "장애인등급1·2급 소지자 + 65세이상 장기요양등급소지자 + 임산부로 대중교통이용이 어려운 자(의사소견서첨부) + 일시적 휠체어 사용자로 대중교통이용이 어려운 자(의사소견서첨부)+교통약자를 동반하는 가족 및 보호자",
        "useCharge": "김해시내구간 기본요금 1,200원(2km), 주행 100원(500m) *김해시내 최대요금 2,400원 + 경남지역 시외버스 편도요금 + 부산지역 기본요금 2,400원, 주행요금 200원(500m) *부산 최대요금10,000원",
        "institutionNm": "김해시청",
        "phoneNumber": "055-330-2435",
        "referenceDate": "2021-10-15",
        "insttCode": "5350000"
    },
    {
        "tfcwkerMvmnCnterNm": "충주시특별교통수단이동지원센터",
        "rdnmadr": "충청북도 충주시 목행산단2로 18",
        "lnmadr": "충청북도 충주시 금릉동 206-55",
        "latitude": "37.00169614",
        "longitude": "127.9180329",
        "carHoldCo": "21",
        "carHoldKnd": "스타렉스+카니발+대형버스",
        "slopeVhcleCo": "21",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "043-857-6161",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "21:30",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "21:30",
        "weekdayOperOpenHhmm": "07:30",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:30",
        "wkendOperCloseHhmm": "22:00",
        "beffatResvePd": "1일",
        "useLmtt": "해당없음",
        "insideOpratArea": "충주시 전지역",
        "outsideOpratArea": "청주(충북대병원)+원주(세브란스병원)+서울(3차병원)",
        "useTrget": "정도가심한장애인 중 보행상 장애가 있는 자+65세이상 버스이용 어려운자+국가유공 상이1~2급",
        "useCharge": "5㎞ 1,000원+1㎞당 200원 추가",
        "institutionNm": "충청북도 충주시",
        "phoneNumber": "043-850-6821",
        "referenceDate": "2021-09-30",
        "insttCode": "4390000"
    },
    {
        "tfcwkerMvmnCnterNm": "논산시교통약자이동지원센터",
        "rdnmadr": "충청남도 논산시 해월로87번길 18",
        "lnmadr": "충청남도 논산시 부창동 274-139",
        "latitude": "36.2003202",
        "longitude": "127.078218",
        "carHoldCo": "10",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "10",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "21:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "2일",
        "useLmtt": "",
        "insideOpratArea": "논산시",
        "outsideOpratArea": "충청남도",
        "useTrget": "교통약자법 시행규칙 제6조에 해당되는 사람",
        "useCharge": "관내 기본요금 1400원(2km), km당 130원",
        "institutionNm": "충남지체장애인협회 논산시지부",
        "phoneNumber": "1600-6335",
        "referenceDate": "2021-09-30",
        "insttCode": "4540000"
    },
    {
        "tfcwkerMvmnCnterNm": "금산군 교통약자 이동지원센터",
        "rdnmadr": "충청남도 금산군 금산읍 인삼로232",
        "lnmadr": "",
        "latitude": "36.10193212",
        "longitude": "127.5067566",
        "carHoldCo": "3",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1644-5588",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "1일전",
        "useLmtt": "",
        "insideOpratArea": "금산군 전체지역",
        "outsideOpratArea": "대전+논산+무주+옥천",
        "useTrget": "중증장애1~3급하지장애인+노인장기요양1~3급+만65세이상노약자(진단서첨부)+상해및질병으로인한보행일시장애인+보호자2인",
        "useCharge": "관내지역기본요금 2km 1,300원 외 1km당 130원 추가 최대2,600원+관외지역 1km당 260원",
        "institutionNm": "금산군",
        "phoneNumber": "041-750-2732",
        "referenceDate": "2021-10-17",
        "insttCode": "4550000"
    },
    {
        "tfcwkerMvmnCnterNm": "청양군교통약자이동지원센터",
        "rdnmadr": "충청남도 청양군 청양읍 칠갑산로 87",
        "lnmadr": "충청남도 청양군 청양읍 송방리 293-1",
        "latitude": "36.44939025",
        "longitude": "126.786522",
        "carHoldCo": "3",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "3",
        "rceptPhoneNumber": "041-942-2111",
        "rceptItnadr": "없음",
        "appSvcNm": "없음",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "16:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "16:00",
        "beffatResvePd": "2일전",
        "useLmtt": "없음",
        "insideOpratArea": "청양군 전지역",
        "outsideOpratArea": "충청남도 전지역",
        "useTrget": "1.장애인복지법시행규칙에 따라 등록된 1급 또는 2급 장애인으로서버스 등의 이용이 어려운 사람+2. 65세 이상의 사람으로서 버스 등의 이용이 어려운 사람+3. 일시적으로 휠체어를 이용하는 사람이나 임산부로서 대중교통수단의 이용이 어려운 사람+4. 제1호에서 제3호까지에 해당하는 교통약자를 동반하는  가족 및 보호자",
        "useCharge": "관내 기본요금 2km까지 1,000원, 추가요금 km당 130원+관외 km당 260원+대기료 30분당 2000원",
        "institutionNm": "청양군청",
        "phoneNumber": "041-940-2423",
        "referenceDate": "2021-10-14",
        "insttCode": "4590000"
    },
    {
        "tfcwkerMvmnCnterNm": "이지콜센터",
        "rdnmadr": "전라북도 전주시 덕진구 기린대로 451",
        "lnmadr": "전라북도 전주시 덕진구 덕진동1가 1220-1",
        "latitude": "35.84075454",
        "longitude": "127.127127",
        "carHoldCo": "55",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "53",
        "liftVhcleCo": "2",
        "rceptPhoneNumber": "063-227-0002",
        "rceptItnadr": "http://www.0632270002.com",
        "appSvcNm": "즉시콜/예약콜",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "23:59",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "23:59",
        "beffatResvePd": "7일",
        "useLmtt": "이용신청 없이 운전원과 직접 연락하여 차량을 이용한 경우,이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우 1주일,  이용객과 동반할 목적이 아닌 비장애인을 동승시키는 경우 (기간에 관계없이 2회 적발시) 1년",
        "insideOpratArea": "전주시내",
        "outsideOpratArea": "전라북도내 및 전국",
        "useTrget": "장애의 정도가 심한 장애인 중 대중교통 이용이 어려운자(보행상 장애인)+65세 이상으로 대중교통 이용이 어려운 자(진단서제출)+일시적사용자(진단서제출)+임산부(진단서제출)+타지역 거주자(심한장애인) 또는 일시적 방문자(사전신청접수시)+교통약자동반가족 및 보호자",
        "useCharge": "기본 2㎞ 700원 1㎞당100원+전국 2㎞ 700원(전주시내) 700m당100원(대기료, 통행료, 주차료 등 본인부담)",
        "institutionNm": "전라북도 전주시청 시민교통과",
        "phoneNumber": "063-281-2542",
        "referenceDate": "2021-10-12",
        "insttCode": "4640000"
    },
    {
        "tfcwkerMvmnCnterNm": "대구시달서구장애인이동지원센터",
        "rdnmadr": "대구광역시 달서구 월성로 77",
        "lnmadr": "대구광역시 달서구 월성동 86",
        "latitude": "35.83004237",
        "longitude": "128.528337",
        "carHoldCo": "1",
        "carHoldKnd": "스타렉스",
        "slopeVhcleCo": "1",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "053-641-0641",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "09:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "09:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일",
        "useLmtt": "",
        "insideOpratArea": "대구광역시 전지역",
        "outsideOpratArea": "",
        "useTrget": "대구시 달서구내 등록장애인",
        "useCharge": "무료",
        "institutionNm": "대구광역시 달서구청",
        "phoneNumber": "053-667-2566",
        "referenceDate": "2021-10-06",
        "insttCode": "3470000"
    },
    {
        "tfcwkerMvmnCnterNm": "(사)지체장애인협회 의령군지회",
        "rdnmadr": "경상남도 의령군 의령읍 의병로8길 44 종합사회복지관 1층",
        "lnmadr": "경상남도 의령군 의령읍 서동리 543 종합사회복지관 1층",
        "latitude": "35.315489",
        "longitude": "128.255951",
        "carHoldCo": "4",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "www.15664488.co.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "21:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "21:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "1일",
        "useLmtt": "",
        "insideOpratArea": "의령군 관내 전체",
        "outsideOpratArea": "경상남도 관내 전체",
        "useTrget": "보행상 중증장애인+노약자+임산부+일시적 휠체어 이용자",
        "useCharge": "관내 2,500원+관외 시외버스 요금의 1.5배",
        "institutionNm": "경상남도 의령군청",
        "phoneNumber": "055-570-3133",
        "referenceDate": "2021-10-08",
        "insttCode": "5390000"
    },
    {
        "tfcwkerMvmnCnterNm": "경주시교통약자이동지원센터",
        "rdnmadr": "경주시 탈해로 57번길14(동천동)",
        "lnmadr": "경주시 동천동 876-1",
        "latitude": "35.851772",
        "longitude": "129.228791",
        "carHoldCo": "19",
        "carHoldKnd": "카니발 17대, 스타렉스 2대",
        "slopeVhcleCo": "19",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "054-777-2811",
        "rceptItnadr": "054-777-2811",
        "appSvcNm": "054-777-2811",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "18:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7일 이내",
        "useLmtt": "이용자 본인이 아니거사 증빙자료가 사실과 다를경우, 보호 장구를 설치함에도 불구하고 이동 시 안전상 문제가 발생할 소지가 높은 경우 등",
        "insideOpratArea": "경주시 전역",
        "outsideOpratArea": "경상북도 및 대구광역시",
        "useTrget": "「장애인복지법 시행규칙」 제2조제1항에 따른 장애의 정도가 심한 장애인으로 대중교통의 이용이 어려운 사람, 65세 이상 고령자로 버스 등의 이용이 어려운 사람, 사고, 질병 등 일시적 장애로 휠체어를 이용하는 사람으로서 대중교통의 이용이 어려운 사람, 규정에 해당하는 교통약자를 동반한 가족 및 보호자, 그 밖에 특별교통수단 이용이 필요하다고 인정되는 사람",
        "useCharge": "기본(4km) 1200, 초과 1km 당 180원",
        "institutionNm": "경주시, 경주시장애인단체협의회",
        "phoneNumber": "054-777-2811",
        "referenceDate": "2021-10-12",
        "insttCode": "5050000"
    },
    {
        "tfcwkerMvmnCnterNm": "광주희망콜",
        "rdnmadr": "경기도 광주시 청석로256",
        "lnmadr": "경기도 광주시 쌍령동 48-45",
        "latitude": "37.4099809209",
        "longitude": "127.2653230899",
        "carHoldCo": "24",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "19",
        "liftVhcleCo": "5",
        "rceptPhoneNumber": "1666-6636",
        "rceptItnadr": "http://www.gjhpcall.or.kr",
        "appSvcNm": "광주시 교통약자",
        "weekdayRceptOpenHhmm": "07:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "19:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "21:00",
        "beffatResvePd": "1.2급장애인, 휠체어 2일전 + 기타 1일전",
        "useLmtt": "이용자 준수사항 월 3회위반시 30일 이용정지 + 관외지역 병원, 치료목적외 불가",
        "insideOpratArea": "광주시 전지역",
        "outsideOpratArea": "서울 + 경기",
        "useTrget": "1.2급 장애인 + 휠체어 이용자 + 65세이상 노인, 임산부 등 대중교통이 어려운 사람",
        "useCharge": "10km이내 1,200원 + 추가 5km당 100원 + 대기료 1시간 1,000원 + 기타(통행료,주차비 등)",
        "institutionNm": "경기도 광주시청",
        "phoneNumber": "031-760-2120",
        "referenceDate": "2021-09-13",
        "insttCode": "5540000"
    },
    {
        "tfcwkerMvmnCnterNm": "산청군 교통약자 콜택시",
        "rdnmadr": "경상남도 산청군 산청읍 웅석봉로133번길 178",
        "lnmadr": "경상남도 산청군 산청읍 지리 132",
        "latitude": "35.413607",
        "longitude": "127.886574",
        "carHoldCo": "7",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "7",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "해당없음",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "21:00",
        "weekdayRceptColseHhmm": "23:59",
        "wkendRceptOpenHhmm": "21:00",
        "wkendRceptCloseHhmm": "23:59",
        "weekdayOperOpenHhmm": "06:00",
        "weekdayOperColseHhmm": "23:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "해당없음",
        "useLmtt": "회원으로 등록되지 않은자는 이용이 어려움",
        "insideOpratArea": "산청군 전체",
        "outsideOpratArea": "경상남도 내",
        "useTrget": "1. 「장애인복지법 시행규칙」 제28조제1항에 따른 보행상의 장애인으로서 장애의 정도가 심해 버스ㆍ지하철 등의 이용이 어려운 사람+2. 65세 이상의 사람으로서 버스ㆍ지하철 등의 이용이 어려운 사람+3. 임산부로서 대중교통수단의 이용이 어려운 사람+4. 일시적으로 휠체어를 이용하는 사람으로서 대중교통수단의 이용이 어려운 사람+5. 제1호부터 제4호까지에 해당하는 교통약자를 동반하는 가족 및 보호자",
        "useCharge": "2,500원~20,700원",
        "institutionNm": "산청콜택시(합)",
        "phoneNumber": "055-973-2531",
        "referenceDate": "2021-10-08",
        "insttCode": "5450000"
    },
    {
        "tfcwkerMvmnCnterNm": "고흥군교통약자이동지원센터",
        "rdnmadr": "전라남도 고흥군 고흥읍 신계학림길 39",
        "lnmadr": "전라남도 고흥군 고흥읍 남계리 400",
        "latitude": "34.6137935690",
        "longitude": "127.2879524306",
        "carHoldCo": "5",
        "carHoldKnd": "리프트1,슬로프4",
        "slopeVhcleCo": "4",
        "liftVhcleCo": "1",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "http://doumcall.kr",
        "appSvcNm": "전남광역콜",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "19:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "12:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "20:00",
        "wkendOperOpenHhmm": "08:00",
        "wkendOperCloseHhmm": "13:00",
        "beffatResvePd": "1일전 18:00까지",
        "useLmtt": "",
        "insideOpratArea": "고흥군",
        "outsideOpratArea": "광주광역시 및 전라남도",
        "useTrget": "장애정도가 심한 장애인, 65세이상 대중교통이용이 어려운자, 임산부",
        "useCharge": "기본요금 : 500원(2km까지) 이후 km당 100원",
        "institutionNm": "고흥군청",
        "phoneNumber": "061-830-5390",
        "referenceDate": "2021-09-24",
        "insttCode": "4880000"
    },
    {
        "tfcwkerMvmnCnterNm": "교통약자이동지원센터",
        "rdnmadr": "경기도 포천시 군내면 청성로 112",
        "lnmadr": "경기도 포천시 군내면 하성북리 618번지",
        "latitude": "37.89623177",
        "longitude": "127.211078",
        "carHoldCo": "17",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "17",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-536-2000",
        "rceptItnadr": "없음",
        "appSvcNm": "-",
        "weekdayRceptOpenHhmm": "13:00",
        "weekdayRceptColseHhmm": "21:00",
        "wkendRceptOpenHhmm": "13:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "2일전",
        "useLmtt": "예약당일1시간이내취소 3회 시 1주일 이용제한",
        "insideOpratArea": "포천시 전지역",
        "outsideOpratArea": "서울, 경기도, 인천, 철원",
        "useTrget": "장애정도가 심한 장애인(장애인복지법 시행규칙 제28조제1항에 따른 보행상의 장애)",
        "useCharge": "기본요금 - 1,250원(10km), 초과요금 - 관내 : 100원/5km 관외 150원/km",
        "institutionNm": "포천도시공사",
        "phoneNumber": "031-540-6000",
        "referenceDate": "2021-09-30",
        "insttCode": "5600000"
    },
    {
        "tfcwkerMvmnCnterNm": "강원도 교통약자 광역이동지원센터",
        "rdnmadr": "강원도 춘천시 봉의동 중앙로1",
        "lnmadr": "강원도 춘천시 봉의동 15",
        "latitude": "37.8855687",
        "longitude": "127.7301849",
        "carHoldCo": "30",
        "carHoldKnd": "카니발+스타렉스",
        "slopeVhcleCo": "25",
        "liftVhcleCo": "5",
        "rceptPhoneNumber": "1577-2014",
        "rceptItnadr": "http://call.gwd.go.kr",
        "appSvcNm": "강원도 광역 교통약자",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "이용 하루전(관외이용시)관외 병원이용시 일주일전부터 예약가능",
        "useLmtt": "휠체어 미사용자 이용 불가능",
        "insideOpratArea": "원주시내",
        "outsideOpratArea": "강원도 전역+병원+관공서+서울대병원 등",
        "useTrget": "거동이불편한 휠체어이용장애인+65세이상휠체어이용자+일시적 휠체어 이용자",
        "useCharge": "4km까지 기본 1,100원",
        "institutionNm": "원주시시설관리공단교통사업팀",
        "phoneNumber": "033-749-4811",
        "referenceDate": "2021-09-30",
        "insttCode": "4190000"
    },
    {
        "tfcwkerMvmnCnterNm": "경남지체장애인협회합천군지회",
        "rdnmadr": "경상남도 합천군 합천읍 남정길 79",
        "lnmadr": "경상남도 합천군 합천읍 합천리 497-8",
        "latitude": "35.56841416",
        "longitude": "128.1569121",
        "carHoldCo": "7",
        "carHoldKnd": "스타렉스",
        "slopeVhcleCo": "0",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1566-4488",
        "rceptItnadr": "http://www.kndaf.or.kr",
        "appSvcNm": "",
        "weekdayRceptOpenHhmm": "00:00",
        "weekdayRceptColseHhmm": "00:00",
        "wkendRceptOpenHhmm": "00:00",
        "wkendRceptCloseHhmm": "00:00",
        "weekdayOperOpenHhmm": "07:00",
        "weekdayOperColseHhmm": "22:00",
        "wkendOperOpenHhmm": "07:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "7",
        "useLmtt": "",
        "insideOpratArea": "2000",
        "outsideOpratArea": "2000",
        "useTrget": "중증장애1~2급+노인장기요양 1~2급+중복장애자+장애3~6급중 휠체어 이용자+만65세이상노약자(의사소견서첨부)+교통약자를 동반하는 가족 및 보호자(2명이내)+임산부",
        "useCharge": "2000",
        "institutionNm": "경제교통과",
        "phoneNumber": "055-930-3372",
        "referenceDate": "2021-10-07",
        "insttCode": "5480000"
    },
    {
        "tfcwkerMvmnCnterNm": "연천군교통약자이동지원센터",
        "rdnmadr": "경기도 연천군 전곡읍 전곡로 193",
        "lnmadr": "경기도 연천군 전곡읍 은대리 568-2",
        "latitude": "38.02903092",
        "longitude": "127.0661019",
        "carHoldCo": "13",
        "carHoldKnd": "카니발",
        "slopeVhcleCo": "13",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "031-835-1155",
        "rceptItnadr": "해당없음",
        "appSvcNm": "해당없음",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "17:00",
        "wkendRceptOpenHhmm": "08:00",
        "wkendRceptCloseHhmm": "12:00",
        "weekdayOperOpenHhmm": "00:00",
        "weekdayOperColseHhmm": "00:00",
        "wkendOperOpenHhmm": "00:00",
        "wkendOperCloseHhmm": "00:00",
        "beffatResvePd": "장애인 사용 2일전, 장애인 외 사용 1일전",
        "useLmtt": "□ 아래의 경우 10일 이용제한- 신분증 기타 회원 증명서류 등을 소지하지 않는 경우- 이용자 탑승 후(운행 중) 목적지를 변경하려는 경우- 예약된 시간까지 승차하지 못하여 승차대기를 요청하거나 예약시간 2시간 이내 취소 또는 변경한 경우가 월 3회 이상인 경우(월은 최초 경고 기준부터 다음 경고까지 순차적으로 월 기준이 변경됨)-이용자 본인(보호자 및 동승자 포함)의 과실로 예약시간에 탑승하지 못하여 이동지원 차량이 회차한 경우□ 아래의 경우",
        "insideOpratArea": "연천군 전지역",
        "outsideOpratArea": "경기도, 서월, 인천, 강원도 철원",
        "useTrget": "「장애인복지법 시행규칙」제28조제1항에 따른 보행상의 장애인으로서 같은 규칙 별표 1에 따른 장애의 정도가 심한 장애인으로서 버스·지하철 등의 이용이 어려운 사람, 만65세 이상 고령자 중 대중교통 서비스의 이용이 어렵거나 기타 거동이 불편한 사람, 혼자서 외출이 곤란하여 군수가 특별교통수단이 필요하다고 인정하는 사람(임산부, 영유아(만7세미만 또는 미취학) 1인 동반, 어린이(만13세미만 또는 초등학생) 2인 동반, 만80세 이상의 고령자, 교통약자를 동반하는 가족 및 보호자",
        "useCharge": "1,000원(기본)+10KM  초과시 KM당 100원 추가(관외 이용시 KM당 200원 추가)",
        "institutionNm": "연천군시설관리공단",
        "phoneNumber": "031-834-9580",
        "referenceDate": "2021-11-08",
        "insttCode": "4140000"
    },
    {
        "tfcwkerMvmnCnterNm": "구례군 교통약자 이동지원센터",
        "rdnmadr": "전라남도 구례군 구례읍 서시천로 106 (사)전남지체장애인협회 구례군지회 1층",
        "lnmadr": "전라남도 구례군 구례읍 봉북리 1423-1 (사)전남지체장애인협회 구례군지회 1층",
        "latitude": "35.2166161",
        "longitude": "127.4668741",
        "carHoldCo": "3",
        "carHoldKnd": "카니발(중형승합)",
        "slopeVhcleCo": "3",
        "liftVhcleCo": "0",
        "rceptPhoneNumber": "1899-1110",
        "rceptItnadr": "www.jnwf.kr",
        "appSvcNm": "전남광역콜 앱",
        "weekdayRceptOpenHhmm": "08:00",
        "weekdayRceptColseHhmm": "23:00",
        "wkendRceptOpenHhmm": "09:00",
        "wkendRceptCloseHhmm": "18:00",
        "weekdayOperOpenHhmm": "08:00",
        "weekdayOperColseHhmm": "18:00",
        "wkendOperOpenHhmm": "09:00",
        "wkendOperCloseHhmm": "18:00",
        "beffatResvePd": "하루전 18시",
        "useLmtt": "장애인콜택시 이용등록후 이용",
        "insideOpratArea": "구례군 전역",
        "outsideOpratArea": "전라남도,광주,남원,하동",
        "useTrget": "장애정도 심한 장애인+65세이상 대중교통이용이 어려운자+임산부+일시적휠체어 이용자",
        "useCharge": "2Km까지기본500원+초과1Km당100원추가",
        "institutionNm": "전라남도 구례군청 환경교통과",
        "phoneNumber": "061-780-2483",
        "referenceDate": "2021-10-31",
        "insttCode": "4870000"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}],"9k0mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Render", ()=>Render
);
var _mapJs = require("./map.js");
class Render {
    constructor(data){
        this._data = data;
        this.html = [];
        this._time1;
        this.$modal = $('#modalDetail').find('.modal-content');
        this._modalHtml = this.$modal.html();
    }
    get modalHtml() {
        return this._modalHtml;
    }
    get data() {
        return this._data;
    }
    get time1() {
        return this._time1;
    }
    set time1(val) {
        this._time1 = val;
    }
    getListArea() {
        this.data.forEach((el, idx)=>{
            this.val = el;
            const url = this.val.rceptItnadr;
            let URL = '예약접수';
            let dis = 'pointer';
            if (url.indexOf('http') < 0) {
                URL = '없음';
                dis = 'dis';
            }
            this.html.push(`
                <div class="border border-dark listItem" id="listItem-${idx}">
                    <div class="row align-items-center">
                        <div class="name pointer col" data-toggle="modal" data-target="#modalDetail">${this.val.tfcwkerMvmnCnterNm}</div>
                        <div class="time col">
                            <div class="row time_weekday">
                            <div class="col-4">평일</div>
                            <div class="col-8">${this.val.weekdayOperOpenHhmm} ~ ${this.val.weekdayOperColseHhmm}</div>
                            </div>
                            <div class="row time_weekend">
                            <div class="col-4">주말</div>
                            <div class="col-8">${this.val.wkendOperOpenHhmm} ~ ${this.val.wkendOperCloseHhmm}</div>
                            </div>
                        </div>
                        <div class="col tell">
                            <span class="tellNumber">${this.val.phoneNumber}</span>
                            <span class="pointer btnCopy"><i class="bi bi-clipboard"></i></span>
                            <input class="clip_target" type="text" style="z-index: -999; position:absolute;"/>
                        </div>
                        <div class="homepage col">
                            <a class="${dis}" href="${this.val.rceptItnadr}" target="black">${URL}</a>
                        </div>
                    </div>
                    <div class="row itemTypeCar">
                        <div class="col-3 empty"></div>
                        <div class="col-3 my-2">
                            <div class="row type_car _slopeVhcleCo">
                                <div class="col-4">슬로프</div>
                                <div class="col-8">${this.val.slopeVhcleCo}</div>
                            </div>
                            <div class="row type_car _liftVhcleCo">
                                <div class="col-4">리프트</div>
                                <div class="col-8">${this.val.liftVhcleCo}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
        $('#boxListItem').html('');
        $('#boxListItem').append(this.html.join(''));
        this.initCopy();
        this.initDetail();
    }
    getFilter(type) {
        if (Render.time1) {
            setTimeout(Render.time1);
            $('.tell').removeClass("bgOn");
        }
        const TYPE = type;
        $('.type_car').removeClass('bgOn');
        if (TYPE === 'allVhcleCo') {
            $('.listItem').removeClass('hide');
            return false;
        }
        $(`._${TYPE}`).addClass('bgOn');
        this.data.forEach((val, idx)=>{
            const $el = $(`.listItem-${idx}`);
            if (val[TYPE] === '0') $el.addClass("hide");
            else $el.hasClass('hide') && $el.removeClass("hide");
        });
    }
    initCopy() {
        const copyYes = 'bi-clipboard-check';
        const copyNo = 'bi-clipboard';
        $('.btnCopy').on('click', function() {
            Render.time1 && setTimeout(Render.time1);
            const $this = $(this);
            const $parent = $this.parent();
            const $tellNumber = $(this).prev();
            const $clipInput = $(this).next();
            const num = $tellNumber.text();
            $clipInput.val(num);
            $clipInput.select();
            try {
                const result = document.execCommand('copy');
                if (result) {
                    $parent.addClass('bgOn');
                    $this.find('i').removeClass(copyNo);
                    $this.find('i').addClass(copyYes);
                    Render.time1 = setTimeout(()=>{
                        $parent.removeClass('bgOn');
                        $this.find('i').removeClass(copyYes);
                        $this.find('i').addClass(copyNo);
                    }, 1500);
                } else alert('복사 오류');
            } catch (err) {
                alert('죄송합니다. 클립보드 복사 지원이 되지 않습니다.');
            }
        });
    }
    getDetail(obj) {}
    initDetail() {
        const self = this;
        $('.name').on("click", (e)=>{
            const idx = $(e.target).parents('.listItem').index();
            const keys = [
                'tfcwkerMvmnCnterNm',
                'weekdayRceptOpenHhmm',
                'weekdayRceptColseHhmm',
                'wkendRceptOpenHhmm',
                'wkendRceptCloseHhmm',
                'insideOpratArea',
                'outsideOpratArea',
                'useCharge'
            ];
            setModalHtml(idx, keys);
        });
        function setModalHtml(idx, keys) {
            const IDX = idx;
            const KEYS = keys;
            let result = self.modalHtml;
            KEYS.forEach((key)=>{
                result = result.replace(`{{__${key}__}}`, self.data[IDX][key]);
            });
            self.$modal.html(result);
        // const option = {
        //     origin: '127.11015314141542,37.39472714688412',
        //     destination : '127.10824367964793,37.401937080111644'
        // };
        // const map = new MAP.mapData(option);
        // MAP.mapData;
        }
    }
}

},{"./map.js":"5VGc0","@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}],"5VGc0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapData", ()=>mapData
) // function initSearchMap(){
 //     $(document).on('click', '.btnMap', (e)=>{
 //         const $this = $(e.target);
 //         console.log($this.attr('data')); // origin, destination
 //         KakaoMap();
 //     })
 // }
 // 주소 검색 API
 // https://postcode.map.daum.net/guide
 // 카카오맵 API 위도경도 알아내기
 // https://programmers-sosin.tistory.com/entry/Python-Kakao-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A3%BC%EC%86%8C%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%9C%84%EB%8F%84-%EA%B2%BD%EB%8F%84-%EC%95%8C%EC%95%84%EB%82%B4%EA%B8%B0-1
 // 카카오맵API
 // https://apis.map.kakao.com/web/guide/#routeurl
 // import kakaoMap from "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c9396da6d2318a0e00615c4923dbdc04";
 // const container = $('#');
 // var options = {
 //     center: new kakao.maps.LatLng(33.450701, 126.570667),
 //     level: 3
 // };
 // var map = new kakao.maps.Map(container, options);
;
// 카카오네비 api 문서
// https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#supported-browser
// 도메인 등록
// https://developers.kakao.com/docs/latest/ko/getting-started/app#platform
// import $export from "core-js/modules/_export";
// const URL = `https://apis-navi.kakaomobility.com/v1/priority=RECOMMEND&car_type=1&car_fuel=GASOLINE`;
// const INFO = `origin=127.11015314141542,37.39472714688412&destination=127.10824367964793%2C37.401937080111644`;
// origin
// 127.11015314141542,37.39472714688412
// destination
// 127.10824367964793,37.401937080111644
// const option = {
//     method : 'GET',
//     headers : new Headers({
//         "Authorization": `KakaoAK ${REST_API_KEY}`
//     }),
//     mode: 'no-cors',
//     body: JSON.stringify({
//         origin : '127.11015314141542,37.39472714688412',
//         destination : '127.10824367964793,37.401937080111644'
//     })
// }
// fetch(URL)
//     .then((res)=>{
//         res
//     })
// console.log(JSON.stringify({origin : '127.11015314141542,37.39472714688412',
//          destination : '127.10824367964793,37.401937080111644'}))
// const url2 = 'https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false';
// const req = new Request(url2, {
//     method: "GET",
//     headers: new Headers({ 
//         "Authorization": `KakaoAK ${REST_API_KEY}`
//     })
// });
// fetch(req)
//     .then(response => response.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// const obj = {
//     origin: 'ee',
//     destination: 'bb'
// };
const REST_API_KEY = 'a296f869f92b1a4919ba690e84991602';
const URL = 'https://apis-navi.kakaomobility.com/v1/directions?{{option}}';
class mapData {
    constructor(obj){
        this._obj = obj;
        this._data;
        this._origin;
        this._destination;
        this.KakaoNavi(this.getOption(this._obj));
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    getOption(object) {
        let option = '';
        Object.entries(object).forEach(([key, value])=>{
            option += `${key}=${value}&`;
        });
        return option.slice(0, -1);
    }
    KakaoNavi(opt) {
        const self = this;
        const req = new Request(URL.replace('{{option}}', opt), {
            method: "GET",
            headers: new Headers({
                "Authorization": `KakaoAK ${REST_API_KEY}`
            })
        });
        fetch(req).then((response)=>response.json()
        ).then((data)=>{
            self.data = data;
            console.log(self.data);
        }).catch((err)=>console.log(err)
        );
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1xsgi"}]},["5vDjm","1Z4Rq"], "1Z4Rq", "parcelRequire94c2")

//# sourceMappingURL=index.5d9dacde.js.map
