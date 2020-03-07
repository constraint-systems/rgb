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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/grant/s/cs/rgb/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


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

var dimensions = [40, 30];

var Space = function Space() {
  return __jsx("div", {
    style: {
      width: p / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  });
};

var Home = function Home() {
  var marker_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0, 0, 1, 1]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([0, 0]),
      pmark = _useState[0],
      setPMark = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      show_grid = _useState2[0],
      setShowGrid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      needle_drop = _useState3[0],
      togNeedle = _useState3[1];

  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});
  var color_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0, 0, 0]);
  var spaceref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var gref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var mref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var piref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var pmref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var ptextref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var toggle_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(spaceref.current);
  var nref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    drawGrid();
  }, [show_grid]);

  function drawMarker() {
    var _marker_ref$current = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(marker_ref.current, 4),
        x = _marker_ref$current[0],
        y = _marker_ref$current[1],
        w = _marker_ref$current[2],
        h = _marker_ref$current[3];

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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

  function keyTrigger(keystring) {
    km_ref.current[keystring] = true;
    keyAction(keystring, null);
  }

  function keyUpTrigger(keystring) {
    setTimeout(function () {
      km_ref.current[keystring] = false;
      keyAction(null, null);
    }, 0);
  }

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [pmark]);
  var cols = dimensions[0],
      rows = dimensions[1];
  var title = 'Rgb';
  var description = 'Pixel-paint using keyboard controls.';
  return __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Rgb"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://rgb.constraint.systems/rgb.png",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://rgb.constraint.systems",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
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
      lineNumber: 439
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
      lineNumber: 447
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
      lineNumber: 448
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: px(2),
      background: '#bbb',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown() {
      keyTrigger('g');
    },
    onMouseUp: function onMouseUp() {
      keyUpTrigger('g');
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, "g"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, show_grid ? 'hide' : 'show', " grid"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }), __jsx("div", {
    style: {
      width: px(2),
      background: '#bbb',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown() {
      keyTrigger('p');
    },
    onMouseUp: function onMouseUp() {
      keyUpTrigger('p');
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, "p"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, "save image as png"))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
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
      lineNumber: 488
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
      lineNumber: 496
    },
    __self: this
  })), __jsx("div", {
    style: {
      padding: p / 2,
      display: 'flex',
      marginTop: -p / 2
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
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
      lineNumber: 506
    },
    __self: this
  }, __jsx("canvas", {
    ref: pref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
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
      lineNumber: 508
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
      lineNumber: 512
    },
    __self: this
  }, key_order.map(function (k) {
    return __jsx("div", {
      key: k,
      onMouseDown: function onMouseDown() {
        keyTrigger(k);
      },
      onMouseUp: function onMouseUp() {
        keyUpTrigger(k);
      },
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: this
    }, k);
  }))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
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
      lineNumber: 544
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "Draw toggle:"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
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
      lineNumber: 556
    },
    __self: this
  }, __jsx("canvas", {
    ref: pmref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
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
      lineNumber: 560
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
      lineNumber: 575
    },
    __self: this
  }, "Space"))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, __jsx("div", {
    style: {
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
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
      lineNumber: 593
    },
    __self: this
  }, __jsx("canvas", {
    ref: nref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
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
      lineNumber: 595
    },
    __self: this
  }, nrow1.map(function (l) {
    return __jsx("div", {
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, l);
  }), nrow2.map(function (l) {
    return __jsx("div", {
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, l);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1674335784",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;}body{background:#ddd;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJtQnlCLEFBR2dDLEFBS0EsQUFPWCxBQUtNLEFBR00sVUFQYixNQUtYLEdBSmtDLEVBWnVCLEFBS0QsQ0FjeEQsNEJBTkEsb0ZBUG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmxldCBwID0gMTZcbmxldCBwYWQgPSBwIC8gMlxubGV0IGNvbGtleXMgPSB7XG4gICcgJzogW251bGwsIDBdLFxuICBzOiBbMCwgMjU1XSxcbiAgZDogWzEsIDI1NV0sXG4gIGY6IFsyLCAyNTVdLFxuICB3OiBbMCwgMTIyXSxcbiAgZTogWzEsIDEyMl0sXG4gIHI6IFsyLCAxMjJdLFxufVxuXG5sZXQgcGNvbHMgPSAzXG5sZXQgcHJvd3MgPSAzXG5cbmxldCBrZXlfb3JkZXIgPSAnICAgd2Vyc2RmJy5zcGxpdCgnJylcblxubGV0IG5yb3cxID0gJ2hqa2wnLnNwbGl0KCcnKVxubGV0IG5yb3cyID0gJ+KGkOKGk+KGkeKGkicuc3BsaXQoJycpXG5cbmZ1bmN0aW9uIHJnYihhcnJheSkge1xuICByZXR1cm4gJ3JnYignICsgYXJyYXkuam9pbignLCcpICsgJyknXG59XG5cbmZ1bmN0aW9uIHB4KG51bSkge1xuICByZXR1cm4gbnVtICogcFxufVxuZnVuY3Rpb24gbyhudW0pIHtcbiAgcmV0dXJuIG51bSArIHBhZFxufVxuZnVuY3Rpb24gb3B4KG51bSkge1xuICByZXR1cm4gbyhweChudW0pKVxufVxuZnVuY3Rpb24gY3goY2FudmFzKSB7XG4gIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxufVxuXG5sZXQgZGltZW5zaW9ucyA9IFs0MCwgMzBdXG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHAgLyAyIH19IC8+XG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgbWFya2VyX3JlZiA9IHVzZVJlZihbMCwgMCwgMSwgMV0pXG4gIGxldCBbcG1hcmssIHNldFBNYXJrXSA9IHVzZVN0YXRlKFswLCAwXSlcbiAgbGV0IFtzaG93X2dyaWQsIHNldFNob3dHcmlkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW25lZWRsZV9kcm9wLCB0b2dOZWVkbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IGNvbG9yX3JlZiA9IHVzZVJlZihbMCwgMCwgMF0pXG4gIGxldCBzcGFjZXJlZiA9IHVzZVJlZih0cnVlKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBncmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHBpcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwbXJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHRleHRyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRvZ2dsZV9yZWYgPSB1c2VSZWYoc3BhY2VyZWYuY3VycmVudClcblxuICBsZXQgbnJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIGRyYXdHcmlkKCkge1xuICAgIGxldCBbY29scywgcm93c10gPSBkaW1lbnNpb25zXG4gICAgbGV0IGcgPSBncmVmLmN1cnJlbnRcbiAgICBsZXQgZ3ggPSBjeChnKVxuICAgIGd4LmNsZWFyUmVjdCgwLCAwLCBnLndpZHRoLCBnLmhlaWdodClcbiAgICBpZiAoc2hvd19ncmlkKSB7XG4gICAgICBneC5zdHJva2VTdHlsZSA9ICcjYmJiJ1xuICAgICAgZ3gubGluZVdpZHRoID0gMVxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sczsgY29sKyspIHtcbiAgICAgICAgICBneC5zdHJva2VSZWN0KG9weChjb2wpLCBvcHgocm93KSwgcCwgcClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhd0dyaWQoKVxuICB9LCBbc2hvd19ncmlkXSlcblxuICBmdW5jdGlvbiBkcmF3TWFya2VyKCkge1xuICAgIGxldCBbeCwgeSwgdywgaF0gPSBtYXJrZXJfcmVmLmN1cnJlbnRcbiAgICBsZXQgbSA9IG1yZWYuY3VycmVudFxuICAgIGxldCBteCA9IGN4KG0pXG4gICAgbXguY2xlYXJSZWN0KDAsIDAsIG0ud2lkdGgsIG0uaGVpZ2h0KVxuICAgIG14LmxpbmVXaWR0aCA9IDFcbiAgICBteC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICBteC5zdHJva2VSZWN0KG9weCh4KSAtIDEuNSwgb3B4KHkpIC0gMS41LCBweCh3KSArIDMsIHB4KGgpICsgMylcbiAgICBteC5saW5lV2lkdGggPSAyXG4gICAgbXguc3Ryb2tlU3R5bGUgPSAnY3lhbidcbiAgICBteC5zdHJva2VSZWN0KG9weCh4KSAtIDAsIG9weCh5KSAtIDAsIHB4KHcpICsgMCwgcHgoaCkgKyAwKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1BhbGV0dGUoKSB7XG4gICAgbGV0IHBjID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHBjeCA9IGN4KHBjKVxuXG4gICAgbGV0IGJsYW5rID0gWzAsIDAsIDBdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlfb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlfb3JkZXJbaV1cbiAgICAgIGxldCB2YWxzID0gY29sa2V5c1trZXldXG4gICAgICBsZXQgeCA9IGkgJSBwY29sc1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBwY29scylcbiAgICAgIGxldCBjb2xvciA9IGJsYW5rLnNsaWNlKClcbiAgICAgIGNvbG9yW3ZhbHNbMF1dID0gdmFsc1sxXVxuICAgICAgcGN4LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICAgIHBjeC5maWxsUmVjdChweCh4ICogNCksIHB4KHkgKiAyKSwgcCAqIDQsIHAgKiAyKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQTWFyaygpIHtcbiAgICBsZXQgY29sb3IgPSBjb2xvcl9yZWYuY3VycmVudFxuICAgIGxldCBwbSA9IHBtcmVmLmN1cnJlbnRcbiAgICBsZXQgcG14ID0gY3gocG0pXG4gICAgcG14LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICBwbXguZmlsbFN0eWxlID0gcG14LmZpbGxSZWN0KDAsIDAsIHBtLndpZHRoLCBwbS5oZWlnaHQpXG4gICAgaWYgKHNwYWNlcmVmLmN1cnJlbnQpIHtcbiAgICAgIHBteC5saW5lV2lkdGggPSAyXG4gICAgICBwbXguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgICBwbXguc3Ryb2tlUmVjdCgwLCAwLCBwbS53aWR0aCAtIDAsIHBtLmhlaWdodCAtIDApXG4gICAgICBwbXguc3Ryb2tlU3R5bGUgPSAnY3lhbidcbiAgICAgIHBteC5zdHJva2VSZWN0KDIsIDIsIHBtLndpZHRoIC0gNCwgcG0uaGVpZ2h0IC0gNClcbiAgICB9XG5cbiAgICB0b2dnbGVfcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1syXS5pbm5lckhUTUwgPSBzcGFjZXJlZi5jdXJyZW50ID8gJ29uJyA6ICdvZmYnXG5cbiAgICBsZXQgcGkgPSBwaXJlZi5jdXJyZW50XG4gICAgbGV0IHBpeCA9IGN4KHBpKVxuICAgIHBpeC5jbGVhclJlY3QoMCwgMCwgcGkud2lkdGgsIHBpLmhlaWdodClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleV9vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleV9vcmRlcltpXVxuICAgICAgbGV0IHZhbHMgPSBjb2xrZXlzW2tleV1cbiAgICAgIGxldCBjaGVjayA9IGNvbG9yW3ZhbHNbMF0gPT09IG51bGwgPyBpIDogdmFsc1swXV0gPT09IHZhbHNbMV1cbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICBsZXQgeCA9IGkgJSBwY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIHBjb2xzKVxuICAgICAgICBwaXguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgIHBpeC5saW5lV2lkdGggPSAxXG4gICAgICAgIHBpeC5zdHJva2VSZWN0KHB4KHggKiA0KSArIDAuNSwgcHgoeSAqIDIpICsgMC41LCBwICogNCAtIDEsIHAgKiAyIC0gMSlcbiAgICAgICAgcGl4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xuICAgICAgICBwaXgubGluZVdpZHRoID0gMVxuICAgICAgICBwaXguc3Ryb2tlUmVjdChweCh4ICogNCkgKyAxLjUsIHB4KHkgKiAyKSArIDEuNSwgcCAqIDQgLSAzLCBwICogMiAtIDMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHB0ZXh0ID0gcHRleHRyZWYuY3VycmVudFxuICAgIGxldCBjaGlsZHJlbiA9IHB0ZXh0LmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleV9vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uaW5uZXJIVE1MID0ga2V5X29yZGVyW2ldXG4gICAgfVxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sb3IubGVuZ3RoOyBjKyspIHtcbiAgICAgIGxldCBjaGVjayA9IGNvbG9yW2NdXG4gICAgICBpZiAoY2hlY2sgPT09IDApIHtcbiAgICAgICAgLy8gZmlyc3Qgcm93XG4gICAgICAgIGNoaWxkcmVuW2NdLmlubmVySFRNTCA9ICcwJ1xuICAgICAgfSBlbHNlIGlmIChjaGVjayA9PT0gMTIyKSB7XG4gICAgICAgIC8vIHNlY29uZCByb3dcbiAgICAgICAgY2hpbGRyZW5bYyArIDNdLmlubmVySFRNTCA9ICcxMjInXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrID09PSAyNTUpIHtcbiAgICAgICAgLy8gdGhpcmQgcm93XG4gICAgICAgIGNoaWxkcmVuW2MgKyA2XS5pbm5lckhUTUwgPSAnMjU1J1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBjLndpZHRoID0gcHgoY29scykgKyBwYWQgKiAyXG4gICAgYy5oZWlnaHQgPSBweChyb3dzKSArIHBhZCAqIDJcbiAgICBsZXQgY3R4ID0gY3goYylcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGN0eC5maWxsUmVjdChvKDApLCBvKDApLCBweChjb2xzKSwgcHgocm93cykpXG5cbiAgICBsZXQgZyA9IGdyZWYuY3VycmVudFxuICAgIGcud2lkdGggPSBweChjb2xzKSArIHBhZCAqIDJcbiAgICBnLmhlaWdodCA9IHB4KHJvd3MpICsgcGFkICogMlxuICAgIGRyYXdHcmlkKClcblxuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG4gICAgbS53aWR0aCA9IHB4KGNvbHMpICsgcGFkICogMlxuICAgIG0uaGVpZ2h0ID0gcHgocm93cykgKyBwYWQgKiAyXG4gICAgZHJhd01hcmtlcigpXG5cbiAgICBsZXQgcGMgPSBwcmVmLmN1cnJlbnRcbiAgICBwYy53aWR0aCA9IHB4KDMgKiA0KVxuICAgIHBjLmhlaWdodCA9IHB4KDMgKiAyKVxuICAgIGRyYXdQYWxldHRlKClcblxuICAgIGxldCBwaSA9IHBpcmVmLmN1cnJlbnRcbiAgICBwaS53aWR0aCA9IHB4KDMgKiA0KVxuICAgIHBpLmhlaWdodCA9IHB4KDMgKiAyKVxuICAgIGRyYXdQYWxldHRlKClcblxuICAgIGxldCBwbSA9IHBtcmVmLmN1cnJlbnRcbiAgICBwbS53aWR0aCA9IHB4KDQgKiAzICsgMilcbiAgICBwbS5oZWlnaHQgPSBweCgyICogMilcbiAgICBkcmF3UE1hcmsoKVxuXG4gICAgbGV0IG4gPSBucmVmLmN1cnJlbnRcbiAgICBuLndpZHRoID0gcHgoNCAqIDMpXG4gICAgbi5oZWlnaHQgPSBweCgyICogMilcbiAgICBkcmF3TmF2KClcblxuICAgIGtleUFjdGlvbihudWxsLCBudWxsKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBrZXlUcmlnZ2VyKGtleXN0cmluZykge1xuICAgIGttX3JlZi5jdXJyZW50W2tleXN0cmluZ10gPSB0cnVlXG4gICAga2V5QWN0aW9uKGtleXN0cmluZywgbnVsbClcbiAgfVxuICBmdW5jdGlvbiBrZXlVcFRyaWdnZXIoa2V5c3RyaW5nKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBrbV9yZWYuY3VycmVudFtrZXlzdHJpbmddID0gZmFsc2VcbiAgICAgIGtleUFjdGlvbihudWxsLCBudWxsKVxuICAgIH0sIDApXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3TmF2KCkge1xuICAgIGxldCBuID0gbnJlZi5jdXJyZW50XG4gICAgbGV0IG54ID0gY3gobilcbiAgICBueC5maWxsU3R5bGUgPSAnI2FhYSdcbiAgICBueC5maWxsUmVjdCgwLCAwLCBuLndpZHRoLCBuLmhlaWdodClcblxuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBmdW5jdGlvbiBkcmF3QWN0aXZlKHgsIHkpIHtcbiAgICAgIG54LnN0cm9rZVN0eWxlID0gJ3doaXRlJ1xuICAgICAgbnguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgICBueC5saW5lV2lkdGggPSAyXG4gICAgICBueC5zdHJva2VSZWN0KHB4KHggKiAzKSArIDEsIHB4KHkgKiAyKSArIDEsIHAgKiAzIC0gMiwgcCAqIDIgLSAyKVxuICAgIH1cblxuICAgIGlmIChrbS5oKSB7XG4gICAgICBkcmF3QWN0aXZlKDAsIDApXG4gICAgfVxuICAgIGlmIChrbS5qKSB7XG4gICAgICBkcmF3QWN0aXZlKDEsIDApXG4gICAgfVxuICAgIGlmIChrbS5rKSB7XG4gICAgICBkcmF3QWN0aXZlKDIsIDApXG4gICAgfVxuICAgIGlmIChrbS5sKSB7XG4gICAgICBkcmF3QWN0aXZlKDMsIDApXG4gICAgfVxuXG4gICAgaWYgKGttLmFycm93bGVmdCkge1xuICAgICAgZHJhd0FjdGl2ZSgwLCAxKVxuICAgIH1cbiAgICBpZiAoa20uYXJyb3dkb3duKSB7XG4gICAgICBkcmF3QWN0aXZlKDEsIDEpXG4gICAgfVxuICAgIGlmIChrbS5hcnJvd3VwKSB7XG4gICAgICBkcmF3QWN0aXZlKDIsIDEpXG4gICAgfVxuICAgIGlmIChrbS5hcnJvd3JpZ2h0KSB7XG4gICAgICBkcmF3QWN0aXZlKDMsIDEpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZSkge1xuICAgIGxldCBtYXJrZXIgPSBtYXJrZXJfcmVmLmN1cnJlbnRcbiAgICBsZXQgW2NvbHMsIHJvd3NdID0gZGltZW5zaW9uc1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBsZXQgbW92ZSA9IDFcblxuICAgIGlmIChrZXkgPT09ICdnJykge1xuICAgICAgc2V0U2hvd0dyaWQocHJldiA9PiAhcHJldilcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdGVtcC53aWR0aCA9IGMud2lkdGggLSBwYWQgKiAyXG4gICAgICB0ZW1wLmhlaWdodCA9IGMuaGVpZ2h0IC0gcGFkICogMlxuXG4gICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRlbXB4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIHRlbXB4LmRyYXdJbWFnZShjLCAtcGFkLCAtcGFkKVxuXG4gICAgICB0ZW1wLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3JnYi0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGRyYXdOYXYoKVxuICAgIGxldCBfbWFya2VyID0gbWFya2VyLnNsaWNlKClcbiAgICBpZiAoa20uaCB8fCBrbS5hcnJvd2xlZnQpIHtcbiAgICAgIGlmIChtYXJrZXJbMF0gPj0gbW92ZSkge1xuICAgICAgICBfbWFya2VyWzBdIC09IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGttLmogfHwga20uYXJyb3dkb3duKSB7XG4gICAgICBpZiAobWFya2VyWzFdICsgbW92ZSA8PSByb3dzIC0gMSkge1xuICAgICAgICBfbWFya2VyWzFdICs9IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGttLmsgfHwga20uYXJyb3d1cCkge1xuICAgICAgaWYgKG1hcmtlclsxXSA+PSBtb3ZlKSB7XG4gICAgICAgIF9tYXJrZXJbMV0gLT0gbW92ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa20ubCB8fCBrbS5hcnJvd3JpZ2h0KSB7XG4gICAgICBpZiAobWFya2VyWzBdICsgbW92ZSA8PSBjb2xzIC0gMSkge1xuICAgICAgICBfbWFya2VyWzBdICs9IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgbWFya2VyX3JlZi5jdXJyZW50ID0gX21hcmtlclxuXG4gICAgbGV0IHIgPSAwXG4gICAgbGV0IGcgPSAwXG4gICAgbGV0IGIgPSAwXG4gICAgaWYgKGttLnIpIHtcbiAgICAgIGIgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLmUpIHtcbiAgICAgIGcgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLncpIHtcbiAgICAgIHIgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLmYpIHtcbiAgICAgIGIgPSAyNTVcbiAgICB9XG4gICAgaWYgKGttLmQpIHtcbiAgICAgIGcgPSAyNTVcbiAgICB9XG4gICAgaWYgKGttLnMpIHtcbiAgICAgIHIgPSAyNTVcbiAgICB9XG4gICAgbGV0IGNvbG9yID0gW3IsIGcsIGJdXG4gICAgY29sb3JfcmVmLmN1cnJlbnQgPSBjb2xvclxuXG4gICAgaWYgKChrZXkgPT09ICdTcGFjZScgfHwga2V5ID09PSAnQmFja3NwYWNlJykgJiYgIWUucmVwZWF0KSB7XG4gICAgICBzcGFjZXJlZi5jdXJyZW50ID0gIXNwYWNlcmVmLmN1cnJlbnRcbiAgICB9XG5cbiAgICBkcmF3TWFya2VyKClcblxuICAgIGlmIChzcGFjZXJlZi5jdXJyZW50KSB7XG4gICAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgICAgbGV0IGN0eCA9IGN4KGMpXG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoY29sb3IpXG4gICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgIC4uLl9tYXJrZXIuc2xpY2UoMCwgMikubWFwKHYgPT4gb3B4KHYpKSxcbiAgICAgICAgLi4uX21hcmtlci5zbGljZSgyKS5tYXAodiA9PiBweCh2KSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBkcmF3UE1hcmsoKVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5LnRvTG93ZXJDYXNlKCldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXkudG9Mb3dlckNhc2UoKV0gPSBmYWxzZVxuICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IGtleV9jaGVjayA9IGtleV9vcmRlci5zbGljZSgpXG4gICAga2V5X2NoZWNrLnB1c2goJyAnKVxuICAgIGtleV9jaGVjay5wdXNoKCdiYWNrc3BhY2UnKVxuICAgIGlmIChrZXlfY2hlY2suaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAga2V5QWN0aW9uKG51bGwsIGUpXG4gICAgfVxuICAgIGxldCBuYXZfY2hlY2sgPSAnaGprbCcuc3BsaXQoJycpXG4gICAgbmF2X2NoZWNrLnB1c2goJ2Fycm93bGVmdCcsICdhcnJvd2Rvd24nLCAnYXJyb3d1cCcsICdhcnJvd3JpZ2h0JylcbiAgICBpZiAobmF2X2NoZWNrLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIGtleUFjdGlvbihudWxsLCBlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgfVxuICB9LCBbcG1hcmtdKVxuXG4gIGxldCBbY29scywgcm93c10gPSBkaW1lbnNpb25zXG5cbiAgbGV0IHRpdGxlID0gJ1JnYidcbiAgbGV0IGRlc2NyaXB0aW9uID0gJ1BpeGVsLXBhaW50IHVzaW5nIGtleWJvYXJkIGNvbnRyb2xzLidcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPHRpdGxlPlJnYjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3JnYi5jb25zdHJhaW50LnN5c3RlbXMvcmdiLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vcmdiLmNvbnN0cmFpbnQuc3lzdGVtc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogcHgoNDApLFxuICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcCAvIDIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcCAvIDIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHAgLyAyLCBwYWRkaW5nUmlnaHQ6IHAgLyAyIH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHgoMiksIGJhY2tncm91bmQ6ICcjYmJiJywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKCdnJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKCdnJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxkaXY+e3Nob3dfZ3JpZCA/ICdoaWRlJyA6ICdzaG93J30gZ3JpZDwvZGl2PlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHB4KDIpLCBiYWNrZ3JvdW5kOiAnI2JiYicsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5VHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8ZGl2PnNhdmUgaW1hZ2UgYXMgcG5nPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtncmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e21yZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogcCAvIDIsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiAtcCAvIDIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMCwgbWFyZ2luUmlnaHQ6IHAgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17cHJlZn0gLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXtwaXJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXtwdGV4dHJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogcHgoMyAqIDQpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcHgoMyAqIDIpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnInLFxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxZnIgMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtrZXlfb3JkZXIubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleVRyaWdnZXIoaylcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKGspXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17dG9nZ2xlX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogcHgoMTQpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+RHJhdyB0b2dnbGU6PC9kaXY+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAwLCBtYXJnaW5SaWdodDogcCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cG1yZWZ9IC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMiAqIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgd2Via2l0VGV4dFN0cm9rZTogJzJweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcGFjZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyICogMikgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcGFjZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGxpbmVIZWlnaHQ6IHB4KDIpICsgJ3B4JyB9fT5OYXZpZ2F0aW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAwIH19PlxuICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17bnJlZn0gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcHgoNCAqIDMpLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bnJvdzEubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57bH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7bnJvdzIubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57bH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/rgb/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.efb2b48ce563e8472eca.hot-update.js.map