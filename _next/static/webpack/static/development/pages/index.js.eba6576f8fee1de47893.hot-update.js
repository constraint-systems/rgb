webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/grant/s/cs/rgb/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


var p = 16;
var pad = p / 2;
var colkeys = {
  ' ': [null, 0],
  s: [0, 255],
  d: [1, 255],
  f: [2, 255],
  w: [0, 122],
  e: [1, 122],
  r: [2, 122]
};
var pcols = 3;
var prows = 3;
var key_order = '   wersdf'.split('');
var nrow1 = 'hjkl'.split('');
var nrow2 = '←↓↑→'.split('');

function rgb(array) {
  return 'rgb(' + array.join(',') + ')';
}

function px(num) {
  return num * p;
}

function o(num) {
  return num + pad;
}

function opx(num) {
  return o(px(num));
}

function cx(canvas) {
  return canvas.getContext('2d');
}

function Reducer(state, action) {
  switch (action.type) {
    case 'set_marker':
      {
        var _state = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state);

        _state.marker = action.payload;
        return _state;
      }

      defaut: throw new Error();

  }
}

var dimensions = [40, 30];

var Space = function Space() {
  return __jsx("div", {
    style: {
      width: p / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  });
};

var Home = function Home() {
  var marker_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([0, 0]),
      pmark = _useState[0],
      setPMark = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show_grid = _useState2[0],
      setShowGrid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      needle_drop = _useState3[0],
      togNeedle = _useState3[1];

  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var color_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([0, 0, 0]);
  var spaceref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(true);
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var gref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var mref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var piref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var pmref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ptextref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var toggle_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(spaceref.current);
  var nref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  function drawGrid() {
    var cols = dimensions[0],
        rows = dimensions[1];
    var g = gref.current;
    var gx = cx(g);
    gx.clearRect(0, 0, g.width, g.height);

    if (show_grid) {
      gx.strokeStyle = '#bbb';
      gx.lineWidth = 1;

      for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
          gx.strokeRect(opx(col), opx(row), p, p);
        }
      }
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    drawGrid();
  }, [show_grid]);

  function drawMarker() {
    var _state$marker = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.marker, 4),
        x = _state$marker[0],
        y = _state$marker[1],
        w = _state$marker[2],
        h = _state$marker[3];

    var m = mref.current;
    var mx = cx(m);
    mx.clearRect(0, 0, m.width, m.height);
    mx.lineWidth = 1;
    mx.strokeStyle = 'black';
    mx.strokeRect(opx(x) - 1.5, opx(y) - 1.5, px(w) + 3, px(h) + 3);
    mx.lineWidth = 2;
    mx.strokeStyle = 'cyan';
    mx.strokeRect(opx(x) - 0, opx(y) - 0, px(w) + 0, px(h) + 0);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, [state.marker]);

  function drawPalette() {
    var pc = pref.current;
    var pcx = cx(pc);
    var blank = [0, 0, 0];

    for (var i = 0; i < key_order.length; i++) {
      var key = key_order[i];
      var vals = colkeys[key];
      var x = i % pcols;
      var y = Math.floor(i / pcols);
      var color = blank.slice();
      color[vals[0]] = vals[1];
      pcx.fillStyle = rgb(color);
      pcx.fillRect(px(x * 4), px(y * 2), p * 4, p * 2);
    }
  }

  function drawPMark() {
    var color = color_ref.current;
    var pm = pmref.current;
    var pmx = cx(pm);
    pmx.fillStyle = rgb(color);
    pmx.fillStyle = pmx.fillRect(0, 0, pm.width, pm.height);

    if (spaceref.current) {
      pmx.lineWidth = 2;
      pmx.strokeStyle = 'black';
      pmx.strokeRect(0, 0, pm.width - 0, pm.height - 0);
      pmx.strokeStyle = 'cyan';
      pmx.strokeRect(2, 2, pm.width - 4, pm.height - 4);
    }

    toggle_ref.current.childNodes[2].innerHTML = spaceref.current ? 'on' : 'off';
    var pi = piref.current;
    var pix = cx(pi);
    pix.clearRect(0, 0, pi.width, pi.height);

    for (var i = 0; i < key_order.length; i++) {
      var key = key_order[i];
      var vals = colkeys[key];
      var check = color[vals[0] === null ? i : vals[0]] === vals[1];

      if (check) {
        var x = i % pcols;
        var y = Math.floor(i / pcols);
        pix.strokeStyle = 'white';
        pix.lineWidth = 1;
        pix.strokeRect(px(x * 4) + 0.5, px(y * 2) + 0.5, p * 4 - 1, p * 2 - 1);
        pix.strokeStyle = 'black';
        pix.lineWidth = 1;
        pix.strokeRect(px(x * 4) + 1.5, px(y * 2) + 1.5, p * 4 - 3, p * 2 - 3);
      }
    }

    var ptext = ptextref.current;
    var children = ptext.childNodes;

    for (var _i = 0; _i < key_order.length; _i++) {
      children[_i].innerHTML = key_order[_i];
    }

    for (var c = 0; c < color.length; c++) {
      var _check = color[c];

      if (_check === 0) {
        // first row
        children[c].innerHTML = '0';
      } else if (_check === 122) {
        // second row
        children[c + 3].innerHTML = '122';
      } else if (_check === 255) {
        // third row
        children[c + 6].innerHTML = '255';
      }
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var c = cref.current;
    c.width = px(cols) + pad * 2;
    c.height = px(rows) + pad * 2;
    var ctx = cx(c);
    ctx.fillStyle = 'white';
    ctx.fillRect(o(0), o(0), px(cols), px(rows));
    var g = gref.current;
    g.width = px(cols) + pad * 2;
    g.height = px(rows) + pad * 2;
    drawGrid();
    var m = mref.current;
    m.width = px(cols) + pad * 2;
    m.height = px(rows) + pad * 2;
    drawMarker();
    var pc = pref.current;
    pc.width = px(3 * 4);
    pc.height = px(3 * 2);
    drawPalette();
    var pi = piref.current;
    pi.width = px(3 * 4);
    pi.height = px(3 * 2);
    drawPalette();
    var pm = pmref.current;
    pm.width = px(4 * 3 + 2);
    pm.height = px(2 * 2);
    drawPMark();
    var n = nref.current;
    n.width = px(4 * 3);
    n.height = px(2 * 2);
    drawNav();
    keyAction(null, null);
  }, []);

  function drawNav() {
    var n = nref.current;
    var nx = cx(n);
    nx.fillStyle = '#aaa';
    nx.fillRect(0, 0, n.width, n.height);
    var km = km_ref.current;

    function drawActive(x, y) {
      nx.strokeStyle = 'white';
      nx.strokeStyle = 'black';
      nx.lineWidth = 2;
      nx.strokeRect(px(x * 3) + 1, px(y * 2) + 1, p * 3 - 2, p * 2 - 2);
    }

    if (km.h) {
      drawActive(0, 0);
    }

    if (km.j) {
      drawActive(1, 0);
    }

    if (km.k) {
      drawActive(2, 0);
    }

    if (km.l) {
      drawActive(3, 0);
    }

    if (km.arrowleft) {
      drawActive(0, 1);
    }

    if (km.arrowdown) {
      drawActive(1, 1);
    }

    if (km.arrowup) {
      drawActive(2, 1);
    }

    if (km.arrowright) {
      drawActive(3, 1);
    }
  }

  function keyAction(key, e) {
    var marker = marker_ref.current;
    var cols = dimensions[0],
        rows = dimensions[1];
    var km = km_ref.current;
    var move = 1;

    if (key === 'g') {
      setShowGrid(function (prev) {
        return !prev;
      });
    } else if (key === 'p') {
      var link = document.createElement('a');
      var c = cref.current;
      var temp = document.createElement('canvas');
      temp.width = c.width - pad * 2;
      temp.height = c.height - pad * 2;
      var tempx = temp.getContext('2d');
      tempx.fillStyle = 'white';
      tempx.drawImage(c, -pad, -pad);
      temp.toBlob(function (blob) {
        link.setAttribute('download', 'rgb-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    drawNav();

    var _marker = marker.slice();

    if (km.h || km.arrowleft) {
      if (marker[0] >= move) {
        _marker[0] -= move;
      }
    }

    if (km.j || km.arrowdown) {
      if (marker[1] + move <= rows - 1) {
        _marker[1] += move;
      }
    }

    if (km.k || km.arrowup) {
      if (marker[1] >= move) {
        _marker[1] -= move;
      }
    }

    if (km.l || km.arrowright) {
      if (marker[0] + move <= cols - 1) {
        _marker[0] += move;
      }
    }

    marker_ref.current = _marker;
    var r = 0;
    var g = 0;
    var b = 0;

    if (km.r) {
      b = 122;
    }

    if (km.e) {
      g = 122;
    }

    if (km.w) {
      r = 122;
    }

    if (km.f) {
      b = 255;
    }

    if (km.d) {
      g = 255;
    }

    if (km.s) {
      r = 255;
    }

    var color = [r, g, b];
    color_ref.current = color;

    if ((key === 'Space' || key === 'Backspace') && !e.repeat) {
      spaceref.current = !spaceref.current;
    }

    drawMarker();

    if (spaceref.current) {
      var _c = cref.current;
      var ctx = cx(_c);
      ctx.fillStyle = rgb(color);
      ctx.fillRect.apply(ctx, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_marker.slice(0, 2).map(function (v) {
        return opx(v);
      })).concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_marker.slice(2).map(function (v) {
        return px(v);
      }))));
    }

    drawPMark();
  }

  function downHandler(e) {
    km_ref.current[e.key.toLowerCase()] = true;
    keyAction(e.key, e);
  }

  function upHandler(e) {
    km_ref.current[e.key.toLowerCase()] = false;
    var key = e.key.toLowerCase();
    var key_check = key_order.slice();
    key_check.push(' ');
    key_check.push('backspace');

    if (key_check.indexOf(key) !== -1) {
      keyAction(null, e);
    }

    var nav_check = 'hjkl'.split('');
    nav_check.push('arrowleft', 'arrowdown', 'arrowup', 'arrowright');

    if (nav_check.indexOf(key) !== -1) {
      keyAction(null, e);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [pmark]);

  var _state$dimensions = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.dimensions, 2),
      cols = _state$dimensions[0],
      rows = _state$dimensions[1];

  var title = 'Rgb';
  var description = 'Pixel-paint using keyboard controls.';
  return __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, "Rgb"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://rgb.constraint.systems/rgb.png",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://rgb.constraint.systems",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: px(40),
      margin: '0 auto',
      paddingTop: p / 2,
      paddingBottom: p / 2
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: p / 2,
      paddingRight: p / 2
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      display: 'flex',
      lineHeight: px(2) + 'px',
      textAlign: 'center'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: px(2),
      background: '#bbb'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, "g"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, show_grid ? 'hide' : 'show', " grid"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }), __jsx("div", {
    style: {
      width: px(2),
      background: '#bbb'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, "p"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, "save image as png"))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: gref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: mref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  })), __jsx("div", {
    style: {
      paddingLeft: pad,
      paddingRight: pad,
      display: 'none'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, cols, "x", rows, ": ", state.marker.slice(0, 2).join(','), ' ', state.marker.slice(2).join('x')), __jsx("div", {
    style: {
      padding: p / 2,
      display: 'flex',
      marginTop: -p / 2
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      lineHeight: 0,
      marginRight: p
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, __jsx("canvas", {
    ref: pref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }), __jsx("canvas", {
    ref: piref,
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }), __jsx("div", {
    ref: ptextref,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: px(3 * 4),
      height: px(3 * 2),
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
      textAlign: 'center',
      color: 'white',
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, key_order.map(function (k) {
    return __jsx("div", {
      key: k,
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, k);
  }))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, __jsx("div", {
    ref: toggle_ref,
    style: {
      width: px(14),
      display: 'flex',
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, "Draw toggle:"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative',
      lineHeight: 0,
      marginRight: p
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, __jsx("canvas", {
    ref: pmref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      lineHeight: px(2 * 2) + 'px',
      color: 'black',
      webkitTextStroke: '2px black',
      textAlign: 'center'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "Space"), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      lineHeight: px(2 * 2) + 'px',
      color: 'white',
      textAlign: 'center'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "Space"))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, __jsx("div", {
    style: {
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, "Navigation"), __jsx("div", {
    style: {
      position: 'relative',
      lineHeight: 0
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }, __jsx("canvas", {
    ref: nref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: px(4 * 3),
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      textAlign: 'center',
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, nrow1.map(function (l) {
    return __jsx("div", {
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587
      },
      __self: this
    }, l);
  }), nrow2.map(function (l) {
    return __jsx("div", {
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590
      },
      __self: this
    }, l);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1674335784",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;}body{background:#ddd;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFsQnlCLEFBR2dDLEFBS0EsQUFPWCxBQUtNLEFBR00sVUFQYixNQUtYLEdBSmtDLEVBWnVCLEFBS0QsQ0FjeEQsNEJBTkEsb0ZBUG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmxldCBwID0gMTZcbmxldCBwYWQgPSBwIC8gMlxubGV0IGNvbGtleXMgPSB7XG4gICcgJzogW251bGwsIDBdLFxuICBzOiBbMCwgMjU1XSxcbiAgZDogWzEsIDI1NV0sXG4gIGY6IFsyLCAyNTVdLFxuICB3OiBbMCwgMTIyXSxcbiAgZTogWzEsIDEyMl0sXG4gIHI6IFsyLCAxMjJdLFxufVxuXG5sZXQgcGNvbHMgPSAzXG5sZXQgcHJvd3MgPSAzXG5cbmxldCBrZXlfb3JkZXIgPSAnICAgd2Vyc2RmJy5zcGxpdCgnJylcblxubGV0IG5yb3cxID0gJ2hqa2wnLnNwbGl0KCcnKVxubGV0IG5yb3cyID0gJ+KGkOKGk+KGkeKGkicuc3BsaXQoJycpXG5cbmZ1bmN0aW9uIHJnYihhcnJheSkge1xuICByZXR1cm4gJ3JnYignICsgYXJyYXkuam9pbignLCcpICsgJyknXG59XG5cbmZ1bmN0aW9uIHB4KG51bSkge1xuICByZXR1cm4gbnVtICogcFxufVxuZnVuY3Rpb24gbyhudW0pIHtcbiAgcmV0dXJuIG51bSArIHBhZFxufVxuZnVuY3Rpb24gb3B4KG51bSkge1xuICByZXR1cm4gbyhweChudW0pKVxufVxuZnVuY3Rpb24gY3goY2FudmFzKSB7XG4gIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxufVxuXG5mdW5jdGlvbiBSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ3NldF9tYXJrZXInOlxuICAgICAge1xuICAgICAgICBsZXQgX3N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpXG4gICAgICAgIF9zdGF0ZS5tYXJrZXIgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICByZXR1cm4gX3N0YXRlXG4gICAgICB9XG4gICAgICBkZWZhdXQ6IHRocm93IG5ldyBFcnJvcigpXG4gIH1cbn1cblxubGV0IGRpbWVuc2lvbnMgPSBbNDAsIDMwXVxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBwIC8gMiB9fSAvPlxuXG5sZXQgSG9tZSA9ICgpID0+IHtcbiAgbGV0IG1hcmtlcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtwbWFyaywgc2V0UE1hcmtdID0gdXNlU3RhdGUoWzAsIDBdKVxuICBsZXQgW3Nob3dfZ3JpZCwgc2V0U2hvd0dyaWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbbmVlZGxlX2Ryb3AsIHRvZ05lZWRsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBsZXQga21fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgY29sb3JfcmVmID0gdXNlUmVmKFswLCAwLCAwXSlcbiAgbGV0IHNwYWNlcmVmID0gdXNlUmVmKHRydWUpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGdyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IG1yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcGlyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHBtcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwdGV4dHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9nZ2xlX3JlZiA9IHVzZVJlZihzcGFjZXJlZi5jdXJyZW50KVxuXG4gIGxldCBucmVmID0gdXNlUmVmKG51bGwpXG5cbiAgZnVuY3Rpb24gZHJhd0dyaWQoKSB7XG4gICAgbGV0IFtjb2xzLCByb3dzXSA9IGRpbWVuc2lvbnNcbiAgICBsZXQgZyA9IGdyZWYuY3VycmVudFxuICAgIGxldCBneCA9IGN4KGcpXG4gICAgZ3guY2xlYXJSZWN0KDAsIDAsIGcud2lkdGgsIGcuaGVpZ2h0KVxuICAgIGlmIChzaG93X2dyaWQpIHtcbiAgICAgIGd4LnN0cm9rZVN0eWxlID0gJyNiYmInXG4gICAgICBneC5saW5lV2lkdGggPSAxXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2xzOyBjb2wrKykge1xuICAgICAgICAgIGd4LnN0cm9rZVJlY3Qob3B4KGNvbCksIG9weChyb3cpLCBwLCBwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkcmF3R3JpZCgpXG4gIH0sIFtzaG93X2dyaWRdKVxuXG4gIGZ1bmN0aW9uIGRyYXdNYXJrZXIoKSB7XG4gICAgbGV0IFt4LCB5LCB3LCBoXSA9IHN0YXRlLm1hcmtlclxuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG4gICAgbGV0IG14ID0gY3gobSlcbiAgICBteC5jbGVhclJlY3QoMCwgMCwgbS53aWR0aCwgbS5oZWlnaHQpXG4gICAgbXgubGluZVdpZHRoID0gMVxuICAgIG14LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xuICAgIG14LnN0cm9rZVJlY3Qob3B4KHgpIC0gMS41LCBvcHgoeSkgLSAxLjUsIHB4KHcpICsgMywgcHgoaCkgKyAzKVxuICAgIG14LmxpbmVXaWR0aCA9IDJcbiAgICBteC5zdHJva2VTdHlsZSA9ICdjeWFuJ1xuICAgIG14LnN0cm9rZVJlY3Qob3B4KHgpIC0gMCwgb3B4KHkpIC0gMCwgcHgodykgKyAwLCBweChoKSArIDApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICB9LCBbc3RhdGUubWFya2VyXSlcblxuICBmdW5jdGlvbiBkcmF3UGFsZXR0ZSgpIHtcbiAgICBsZXQgcGMgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcGN4ID0gY3gocGMpXG5cbiAgICBsZXQgYmxhbmsgPSBbMCwgMCwgMF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleV9vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleV9vcmRlcltpXVxuICAgICAgbGV0IHZhbHMgPSBjb2xrZXlzW2tleV1cbiAgICAgIGxldCB4ID0gaSAlIHBjb2xzXG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIHBjb2xzKVxuICAgICAgbGV0IGNvbG9yID0gYmxhbmsuc2xpY2UoKVxuICAgICAgY29sb3JbdmFsc1swXV0gPSB2YWxzWzFdXG4gICAgICBwY3guZmlsbFN0eWxlID0gcmdiKGNvbG9yKVxuICAgICAgcGN4LmZpbGxSZWN0KHB4KHggKiA0KSwgcHgoeSAqIDIpLCBwICogNCwgcCAqIDIpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1BNYXJrKCkge1xuICAgIGxldCBjb2xvciA9IGNvbG9yX3JlZi5jdXJyZW50XG4gICAgbGV0IHBtID0gcG1yZWYuY3VycmVudFxuICAgIGxldCBwbXggPSBjeChwbSlcbiAgICBwbXguZmlsbFN0eWxlID0gcmdiKGNvbG9yKVxuICAgIHBteC5maWxsU3R5bGUgPSBwbXguZmlsbFJlY3QoMCwgMCwgcG0ud2lkdGgsIHBtLmhlaWdodClcbiAgICBpZiAoc3BhY2VyZWYuY3VycmVudCkge1xuICAgICAgcG14LmxpbmVXaWR0aCA9IDJcbiAgICAgIHBteC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICAgIHBteC5zdHJva2VSZWN0KDAsIDAsIHBtLndpZHRoIC0gMCwgcG0uaGVpZ2h0IC0gMClcbiAgICAgIHBteC5zdHJva2VTdHlsZSA9ICdjeWFuJ1xuICAgICAgcG14LnN0cm9rZVJlY3QoMiwgMiwgcG0ud2lkdGggLSA0LCBwbS5oZWlnaHQgLSA0KVxuICAgIH1cblxuICAgIHRvZ2dsZV9yZWYuY3VycmVudC5jaGlsZE5vZGVzWzJdLmlubmVySFRNTCA9IHNwYWNlcmVmLmN1cnJlbnQgPyAnb24nIDogJ29mZidcblxuICAgIGxldCBwaSA9IHBpcmVmLmN1cnJlbnRcbiAgICBsZXQgcGl4ID0gY3gocGkpXG4gICAgcGl4LmNsZWFyUmVjdCgwLCAwLCBwaS53aWR0aCwgcGkuaGVpZ2h0KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5X29yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5X29yZGVyW2ldXG4gICAgICBsZXQgdmFscyA9IGNvbGtleXNba2V5XVxuICAgICAgbGV0IGNoZWNrID0gY29sb3JbdmFsc1swXSA9PT0gbnVsbCA/IGkgOiB2YWxzWzBdXSA9PT0gdmFsc1sxXVxuICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgIGxldCB4ID0gaSAlIHBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gcGNvbHMpXG4gICAgICAgIHBpeC5zdHJva2VTdHlsZSA9ICd3aGl0ZSdcbiAgICAgICAgcGl4LmxpbmVXaWR0aCA9IDFcbiAgICAgICAgcGl4LnN0cm9rZVJlY3QocHgoeCAqIDQpICsgMC41LCBweCh5ICogMikgKyAwLjUsIHAgKiA0IC0gMSwgcCAqIDIgLSAxKVxuICAgICAgICBwaXguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgICAgIHBpeC5saW5lV2lkdGggPSAxXG4gICAgICAgIHBpeC5zdHJva2VSZWN0KHB4KHggKiA0KSArIDEuNSwgcHgoeSAqIDIpICsgMS41LCBwICogNCAtIDMsIHAgKiAyIC0gMylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHRleHQgPSBwdGV4dHJlZi5jdXJyZW50XG4gICAgbGV0IGNoaWxkcmVuID0gcHRleHQuY2hpbGROb2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5X29yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5pbm5lckhUTUwgPSBrZXlfb3JkZXJbaV1cbiAgICB9XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xvci5sZW5ndGg7IGMrKykge1xuICAgICAgbGV0IGNoZWNrID0gY29sb3JbY11cbiAgICAgIGlmIChjaGVjayA9PT0gMCkge1xuICAgICAgICAvLyBmaXJzdCByb3dcbiAgICAgICAgY2hpbGRyZW5bY10uaW5uZXJIVE1MID0gJzAnXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrID09PSAxMjIpIHtcbiAgICAgICAgLy8gc2Vjb25kIHJvd1xuICAgICAgICBjaGlsZHJlbltjICsgM10uaW5uZXJIVE1MID0gJzEyMidcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2sgPT09IDI1NSkge1xuICAgICAgICAvLyB0aGlyZCByb3dcbiAgICAgICAgY2hpbGRyZW5bYyArIDZdLmlubmVySFRNTCA9ICcyNTUnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGMud2lkdGggPSBweChjb2xzKSArIHBhZCAqIDJcbiAgICBjLmhlaWdodCA9IHB4KHJvd3MpICsgcGFkICogMlxuICAgIGxldCBjdHggPSBjeChjKVxuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgY3R4LmZpbGxSZWN0KG8oMCksIG8oMCksIHB4KGNvbHMpLCBweChyb3dzKSlcblxuICAgIGxldCBnID0gZ3JlZi5jdXJyZW50XG4gICAgZy53aWR0aCA9IHB4KGNvbHMpICsgcGFkICogMlxuICAgIGcuaGVpZ2h0ID0gcHgocm93cykgKyBwYWQgKiAyXG4gICAgZHJhd0dyaWQoKVxuXG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcbiAgICBtLndpZHRoID0gcHgoY29scykgKyBwYWQgKiAyXG4gICAgbS5oZWlnaHQgPSBweChyb3dzKSArIHBhZCAqIDJcbiAgICBkcmF3TWFya2VyKClcblxuICAgIGxldCBwYyA9IHByZWYuY3VycmVudFxuICAgIHBjLndpZHRoID0gcHgoMyAqIDQpXG4gICAgcGMuaGVpZ2h0ID0gcHgoMyAqIDIpXG4gICAgZHJhd1BhbGV0dGUoKVxuXG4gICAgbGV0IHBpID0gcGlyZWYuY3VycmVudFxuICAgIHBpLndpZHRoID0gcHgoMyAqIDQpXG4gICAgcGkuaGVpZ2h0ID0gcHgoMyAqIDIpXG4gICAgZHJhd1BhbGV0dGUoKVxuXG4gICAgbGV0IHBtID0gcG1yZWYuY3VycmVudFxuICAgIHBtLndpZHRoID0gcHgoNCAqIDMgKyAyKVxuICAgIHBtLmhlaWdodCA9IHB4KDIgKiAyKVxuICAgIGRyYXdQTWFyaygpXG5cbiAgICBsZXQgbiA9IG5yZWYuY3VycmVudFxuICAgIG4ud2lkdGggPSBweCg0ICogMylcbiAgICBuLmhlaWdodCA9IHB4KDIgKiAyKVxuICAgIGRyYXdOYXYoKVxuXG4gICAga2V5QWN0aW9uKG51bGwsIG51bGwpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGRyYXdOYXYoKSB7XG4gICAgbGV0IG4gPSBucmVmLmN1cnJlbnRcbiAgICBsZXQgbnggPSBjeChuKVxuICAgIG54LmZpbGxTdHlsZSA9ICcjYWFhJ1xuICAgIG54LmZpbGxSZWN0KDAsIDAsIG4ud2lkdGgsIG4uaGVpZ2h0KVxuXG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGZ1bmN0aW9uIGRyYXdBY3RpdmUoeCwgeSkge1xuICAgICAgbnguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4gICAgICBueC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICAgIG54LmxpbmVXaWR0aCA9IDJcbiAgICAgIG54LnN0cm9rZVJlY3QocHgoeCAqIDMpICsgMSwgcHgoeSAqIDIpICsgMSwgcCAqIDMgLSAyLCBwICogMiAtIDIpXG4gICAgfVxuXG4gICAgaWYgKGttLmgpIHtcbiAgICAgIGRyYXdBY3RpdmUoMCwgMClcbiAgICB9XG4gICAgaWYgKGttLmopIHtcbiAgICAgIGRyYXdBY3RpdmUoMSwgMClcbiAgICB9XG4gICAgaWYgKGttLmspIHtcbiAgICAgIGRyYXdBY3RpdmUoMiwgMClcbiAgICB9XG4gICAgaWYgKGttLmwpIHtcbiAgICAgIGRyYXdBY3RpdmUoMywgMClcbiAgICB9XG5cbiAgICBpZiAoa20uYXJyb3dsZWZ0KSB7XG4gICAgICBkcmF3QWN0aXZlKDAsIDEpXG4gICAgfVxuICAgIGlmIChrbS5hcnJvd2Rvd24pIHtcbiAgICAgIGRyYXdBY3RpdmUoMSwgMSlcbiAgICB9XG4gICAgaWYgKGttLmFycm93dXApIHtcbiAgICAgIGRyYXdBY3RpdmUoMiwgMSlcbiAgICB9XG4gICAgaWYgKGttLmFycm93cmlnaHQpIHtcbiAgICAgIGRyYXdBY3RpdmUoMywgMSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBlKSB7XG4gICAgbGV0IG1hcmtlciA9IG1hcmtlcl9yZWYuY3VycmVudFxuICAgIGxldCBbY29scywgcm93c10gPSBkaW1lbnNpb25zXG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGxldCBtb3ZlID0gMVxuXG4gICAgaWYgKGtleSA9PT0gJ2cnKSB7XG4gICAgICBzZXRTaG93R3JpZChwcmV2ID0+ICFwcmV2KVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncCcpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0ZW1wLndpZHRoID0gYy53aWR0aCAtIHBhZCAqIDJcbiAgICAgIHRlbXAuaGVpZ2h0ID0gYy5oZWlnaHQgLSBwYWQgKiAyXG5cbiAgICAgIGxldCB0ZW1weCA9IHRlbXAuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdGVtcHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgdGVtcHguZHJhd0ltYWdlKGMsIC1wYWQsIC1wYWQpXG5cbiAgICAgIHRlbXAudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAncmdiLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAnLnBuZydcbiAgICAgICAgKVxuXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhd05hdigpXG4gICAgbGV0IF9tYXJrZXIgPSBtYXJrZXIuc2xpY2UoKVxuICAgIGlmIChrbS5oIHx8IGttLmFycm93bGVmdCkge1xuICAgICAgaWYgKG1hcmtlclswXSA+PSBtb3ZlKSB7XG4gICAgICAgIF9tYXJrZXJbMF0gLT0gbW92ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa20uaiB8fCBrbS5hcnJvd2Rvd24pIHtcbiAgICAgIGlmIChtYXJrZXJbMV0gKyBtb3ZlIDw9IHJvd3MgLSAxKSB7XG4gICAgICAgIF9tYXJrZXJbMV0gKz0gbW92ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa20uayB8fCBrbS5hcnJvd3VwKSB7XG4gICAgICBpZiAobWFya2VyWzFdID49IG1vdmUpIHtcbiAgICAgICAgX21hcmtlclsxXSAtPSBtb3ZlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrbS5sIHx8IGttLmFycm93cmlnaHQpIHtcbiAgICAgIGlmIChtYXJrZXJbMF0gKyBtb3ZlIDw9IGNvbHMgLSAxKSB7XG4gICAgICAgIF9tYXJrZXJbMF0gKz0gbW92ZVxuICAgICAgfVxuICAgIH1cbiAgICBtYXJrZXJfcmVmLmN1cnJlbnQgPSBfbWFya2VyXG5cbiAgICBsZXQgciA9IDBcbiAgICBsZXQgZyA9IDBcbiAgICBsZXQgYiA9IDBcbiAgICBpZiAoa20ucikge1xuICAgICAgYiA9IDEyMlxuICAgIH1cbiAgICBpZiAoa20uZSkge1xuICAgICAgZyA9IDEyMlxuICAgIH1cbiAgICBpZiAoa20udykge1xuICAgICAgciA9IDEyMlxuICAgIH1cbiAgICBpZiAoa20uZikge1xuICAgICAgYiA9IDI1NVxuICAgIH1cbiAgICBpZiAoa20uZCkge1xuICAgICAgZyA9IDI1NVxuICAgIH1cbiAgICBpZiAoa20ucykge1xuICAgICAgciA9IDI1NVxuICAgIH1cbiAgICBsZXQgY29sb3IgPSBbciwgZywgYl1cbiAgICBjb2xvcl9yZWYuY3VycmVudCA9IGNvbG9yXG5cbiAgICBpZiAoKGtleSA9PT0gJ1NwYWNlJyB8fCBrZXkgPT09ICdCYWNrc3BhY2UnKSAmJiAhZS5yZXBlYXQpIHtcbiAgICAgIHNwYWNlcmVmLmN1cnJlbnQgPSAhc3BhY2VyZWYuY3VycmVudFxuICAgIH1cblxuICAgIGRyYXdNYXJrZXIoKVxuXG4gICAgaWYgKHNwYWNlcmVmLmN1cnJlbnQpIHtcbiAgICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgICBsZXQgY3R4ID0gY3goYylcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgLi4uX21hcmtlci5zbGljZSgwLCAyKS5tYXAodiA9PiBvcHgodikpLFxuICAgICAgICAuLi5fbWFya2VyLnNsaWNlKDIpLm1hcCh2ID0+IHB4KHYpKVxuICAgICAgKVxuICAgIH1cblxuICAgIGRyYXdQTWFyaygpXG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXkudG9Mb3dlckNhc2UoKV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleS50b0xvd2VyQ2FzZSgpXSA9IGZhbHNlXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKClcbiAgICBsZXQga2V5X2NoZWNrID0ga2V5X29yZGVyLnNsaWNlKClcbiAgICBrZXlfY2hlY2sucHVzaCgnICcpXG4gICAga2V5X2NoZWNrLnB1c2goJ2JhY2tzcGFjZScpXG4gICAgaWYgKGtleV9jaGVjay5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICBrZXlBY3Rpb24obnVsbCwgZSlcbiAgICB9XG4gICAgbGV0IG5hdl9jaGVjayA9ICdoamtsJy5zcGxpdCgnJylcbiAgICBuYXZfY2hlY2sucHVzaCgnYXJyb3dsZWZ0JywgJ2Fycm93ZG93bicsICdhcnJvd3VwJywgJ2Fycm93cmlnaHQnKVxuICAgIGlmIChuYXZfY2hlY2suaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAga2V5QWN0aW9uKG51bGwsIGUpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB9XG4gIH0sIFtwbWFya10pXG5cbiAgbGV0IFtjb2xzLCByb3dzXSA9IHN0YXRlLmRpbWVuc2lvbnNcblxuICBsZXQgdGl0bGUgPSAnUmdiJ1xuICBsZXQgZGVzY3JpcHRpb24gPSAnUGl4ZWwtcGFpbnQgdXNpbmcga2V5Ym9hcmQgY29udHJvbHMuJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8dGl0bGU+UmdiPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vcmdiLmNvbnN0cmFpbnQuc3lzdGVtcy9yZ2IucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9yZ2IuY29uc3RyYWludC5zeXN0ZW1zXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBweCg0MCksXG4gICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBwIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBwIC8gMixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogcCAvIDIsIHBhZGRpbmdSaWdodDogcCAvIDIgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBweCgyKSwgYmFja2dyb3VuZDogJyNiYmInIH19Pmc8L2Rpdj5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPGRpdj57c2hvd19ncmlkID8gJ2hpZGUnIDogJ3Nob3cnfSBncmlkPC9kaXY+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogcHgoMiksIGJhY2tncm91bmQ6ICcjYmJiJyB9fT5wPC9kaXY+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxkaXY+c2F2ZSBpbWFnZSBhcyBwbmc8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e2dyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlZj17bXJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogcGFkLCBwYWRkaW5nUmlnaHQ6IHBhZCwgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgIHtjb2xzfXh7cm93c306IHtzdGF0ZS5tYXJrZXIuc2xpY2UoMCwgMikuam9pbignLCcpfXsnICd9XG4gICAgICAgICAge3N0YXRlLm1hcmtlci5zbGljZSgyKS5qb2luKCd4Jyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IHAgLyAyLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogLXAgLyAyIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDAsIG1hcmdpblJpZ2h0OiBwIH19PlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e3ByZWZ9IC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17cGlyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cHRleHRyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHB4KDMgKiA0KSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHB4KDMgKiAyKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMWZyIDFmciAxZnInLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a2V5X29yZGVyLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30+e2t9PC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0b2dnbGVfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBweCgxNCksXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5EcmF3IHRvZ2dsZTo8L2Rpdj5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDAsIG1hcmdpblJpZ2h0OiBwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtwbXJlZn0gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyICogMikgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICB3ZWJraXRUZXh0U3Ryb2tlOiAnMnB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwYWNlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIgKiAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwYWNlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbGluZUhlaWdodDogcHgoMikgKyAncHgnIH19Pk5hdmlnYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDAgfX0+XG4gICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtucmVmfSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBweCg0ICogMyksXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtucm93MS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PntsfTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtucm93Mi5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PntsfTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/rgb/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.eba6576f8fee1de47893.hot-update.js.map