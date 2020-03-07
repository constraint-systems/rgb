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
    keyAction(keystring, {
      repeat: false
    });
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
    onMouseDown: function onMouseDown() {
      keyTrigger('Space');
    },
    onMouseUp: function onMouseUp() {
      keyUpTrigger('Space');
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
      lineNumber: 597
    },
    __self: this
  }, __jsx("div", {
    style: {
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
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
      lineNumber: 599
    },
    __self: this
  }, __jsx("canvas", {
    ref: nref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
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
      lineNumber: 601
    },
    __self: this
  }, nrow1.map(function (l) {
    return __jsx("div", {
      onMouseDown: function onMouseDown() {
        keyTrigger(l);
      },
      onMouseUp: function onMouseUp() {
        keyUpTrigger(l);
      },
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615
      },
      __self: this
    }, l);
  }), nrow2.map(function (l) {
    return __jsx("div", {
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627
      },
      __self: this
    }, l);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1674335784",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;}body{background:#ddd;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBuQnlCLEFBR2dDLEFBS0EsQUFPWCxBQUtNLEFBR00sVUFQYixNQUtYLEdBSmtDLEVBWnVCLEFBS0QsQ0FjeEQsNEJBTkEsb0ZBUG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmxldCBwID0gMTZcbmxldCBwYWQgPSBwIC8gMlxubGV0IGNvbGtleXMgPSB7XG4gICcgJzogW251bGwsIDBdLFxuICBzOiBbMCwgMjU1XSxcbiAgZDogWzEsIDI1NV0sXG4gIGY6IFsyLCAyNTVdLFxuICB3OiBbMCwgMTIyXSxcbiAgZTogWzEsIDEyMl0sXG4gIHI6IFsyLCAxMjJdLFxufVxuXG5sZXQgcGNvbHMgPSAzXG5sZXQgcHJvd3MgPSAzXG5cbmxldCBrZXlfb3JkZXIgPSAnICAgd2Vyc2RmJy5zcGxpdCgnJylcblxubGV0IG5yb3cxID0gJ2hqa2wnLnNwbGl0KCcnKVxubGV0IG5yb3cyID0gJ+KGkOKGk+KGkeKGkicuc3BsaXQoJycpXG5cbmZ1bmN0aW9uIHJnYihhcnJheSkge1xuICByZXR1cm4gJ3JnYignICsgYXJyYXkuam9pbignLCcpICsgJyknXG59XG5cbmZ1bmN0aW9uIHB4KG51bSkge1xuICByZXR1cm4gbnVtICogcFxufVxuZnVuY3Rpb24gbyhudW0pIHtcbiAgcmV0dXJuIG51bSArIHBhZFxufVxuZnVuY3Rpb24gb3B4KG51bSkge1xuICByZXR1cm4gbyhweChudW0pKVxufVxuZnVuY3Rpb24gY3goY2FudmFzKSB7XG4gIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxufVxuXG5sZXQgZGltZW5zaW9ucyA9IFs0MCwgMzBdXG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHAgLyAyIH19IC8+XG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgbWFya2VyX3JlZiA9IHVzZVJlZihbMCwgMCwgMSwgMV0pXG4gIGxldCBbcG1hcmssIHNldFBNYXJrXSA9IHVzZVN0YXRlKFswLCAwXSlcbiAgbGV0IFtzaG93X2dyaWQsIHNldFNob3dHcmlkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW25lZWRsZV9kcm9wLCB0b2dOZWVkbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IGNvbG9yX3JlZiA9IHVzZVJlZihbMCwgMCwgMF0pXG4gIGxldCBzcGFjZXJlZiA9IHVzZVJlZih0cnVlKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBncmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHBpcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwbXJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHRleHRyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRvZ2dsZV9yZWYgPSB1c2VSZWYoc3BhY2VyZWYuY3VycmVudClcblxuICBsZXQgbnJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIGRyYXdHcmlkKCkge1xuICAgIGxldCBbY29scywgcm93c10gPSBkaW1lbnNpb25zXG4gICAgbGV0IGcgPSBncmVmLmN1cnJlbnRcbiAgICBsZXQgZ3ggPSBjeChnKVxuICAgIGd4LmNsZWFyUmVjdCgwLCAwLCBnLndpZHRoLCBnLmhlaWdodClcbiAgICBpZiAoc2hvd19ncmlkKSB7XG4gICAgICBneC5zdHJva2VTdHlsZSA9ICcjYmJiJ1xuICAgICAgZ3gubGluZVdpZHRoID0gMVxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sczsgY29sKyspIHtcbiAgICAgICAgICBneC5zdHJva2VSZWN0KG9weChjb2wpLCBvcHgocm93KSwgcCwgcClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhd0dyaWQoKVxuICB9LCBbc2hvd19ncmlkXSlcblxuICBmdW5jdGlvbiBkcmF3TWFya2VyKCkge1xuICAgIGxldCBbeCwgeSwgdywgaF0gPSBtYXJrZXJfcmVmLmN1cnJlbnRcbiAgICBsZXQgbSA9IG1yZWYuY3VycmVudFxuICAgIGxldCBteCA9IGN4KG0pXG4gICAgbXguY2xlYXJSZWN0KDAsIDAsIG0ud2lkdGgsIG0uaGVpZ2h0KVxuICAgIG14LmxpbmVXaWR0aCA9IDFcbiAgICBteC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICBteC5zdHJva2VSZWN0KG9weCh4KSAtIDEuNSwgb3B4KHkpIC0gMS41LCBweCh3KSArIDMsIHB4KGgpICsgMylcbiAgICBteC5saW5lV2lkdGggPSAyXG4gICAgbXguc3Ryb2tlU3R5bGUgPSAnY3lhbidcbiAgICBteC5zdHJva2VSZWN0KG9weCh4KSAtIDAsIG9weCh5KSAtIDAsIHB4KHcpICsgMCwgcHgoaCkgKyAwKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1BhbGV0dGUoKSB7XG4gICAgbGV0IHBjID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHBjeCA9IGN4KHBjKVxuXG4gICAgbGV0IGJsYW5rID0gWzAsIDAsIDBdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlfb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlfb3JkZXJbaV1cbiAgICAgIGxldCB2YWxzID0gY29sa2V5c1trZXldXG4gICAgICBsZXQgeCA9IGkgJSBwY29sc1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBwY29scylcbiAgICAgIGxldCBjb2xvciA9IGJsYW5rLnNsaWNlKClcbiAgICAgIGNvbG9yW3ZhbHNbMF1dID0gdmFsc1sxXVxuICAgICAgcGN4LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICAgIHBjeC5maWxsUmVjdChweCh4ICogNCksIHB4KHkgKiAyKSwgcCAqIDQsIHAgKiAyKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQTWFyaygpIHtcbiAgICBsZXQgY29sb3IgPSBjb2xvcl9yZWYuY3VycmVudFxuICAgIGxldCBwbSA9IHBtcmVmLmN1cnJlbnRcbiAgICBsZXQgcG14ID0gY3gocG0pXG4gICAgcG14LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICBwbXguZmlsbFN0eWxlID0gcG14LmZpbGxSZWN0KDAsIDAsIHBtLndpZHRoLCBwbS5oZWlnaHQpXG4gICAgaWYgKHNwYWNlcmVmLmN1cnJlbnQpIHtcbiAgICAgIHBteC5saW5lV2lkdGggPSAyXG4gICAgICBwbXguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgICBwbXguc3Ryb2tlUmVjdCgwLCAwLCBwbS53aWR0aCAtIDAsIHBtLmhlaWdodCAtIDApXG4gICAgICBwbXguc3Ryb2tlU3R5bGUgPSAnY3lhbidcbiAgICAgIHBteC5zdHJva2VSZWN0KDIsIDIsIHBtLndpZHRoIC0gNCwgcG0uaGVpZ2h0IC0gNClcbiAgICB9XG5cbiAgICB0b2dnbGVfcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1syXS5pbm5lckhUTUwgPSBzcGFjZXJlZi5jdXJyZW50ID8gJ29uJyA6ICdvZmYnXG5cbiAgICBsZXQgcGkgPSBwaXJlZi5jdXJyZW50XG4gICAgbGV0IHBpeCA9IGN4KHBpKVxuICAgIHBpeC5jbGVhclJlY3QoMCwgMCwgcGkud2lkdGgsIHBpLmhlaWdodClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleV9vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleV9vcmRlcltpXVxuICAgICAgbGV0IHZhbHMgPSBjb2xrZXlzW2tleV1cbiAgICAgIGxldCBjaGVjayA9IGNvbG9yW3ZhbHNbMF0gPT09IG51bGwgPyBpIDogdmFsc1swXV0gPT09IHZhbHNbMV1cbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICBsZXQgeCA9IGkgJSBwY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIHBjb2xzKVxuICAgICAgICBwaXguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgIHBpeC5saW5lV2lkdGggPSAxXG4gICAgICAgIHBpeC5zdHJva2VSZWN0KHB4KHggKiA0KSArIDAuNSwgcHgoeSAqIDIpICsgMC41LCBwICogNCAtIDEsIHAgKiAyIC0gMSlcbiAgICAgICAgcGl4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xuICAgICAgICBwaXgubGluZVdpZHRoID0gMVxuICAgICAgICBwaXguc3Ryb2tlUmVjdChweCh4ICogNCkgKyAxLjUsIHB4KHkgKiAyKSArIDEuNSwgcCAqIDQgLSAzLCBwICogMiAtIDMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHB0ZXh0ID0gcHRleHRyZWYuY3VycmVudFxuICAgIGxldCBjaGlsZHJlbiA9IHB0ZXh0LmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleV9vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uaW5uZXJIVE1MID0ga2V5X29yZGVyW2ldXG4gICAgfVxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sb3IubGVuZ3RoOyBjKyspIHtcbiAgICAgIGxldCBjaGVjayA9IGNvbG9yW2NdXG4gICAgICBpZiAoY2hlY2sgPT09IDApIHtcbiAgICAgICAgLy8gZmlyc3Qgcm93XG4gICAgICAgIGNoaWxkcmVuW2NdLmlubmVySFRNTCA9ICcwJ1xuICAgICAgfSBlbHNlIGlmIChjaGVjayA9PT0gMTIyKSB7XG4gICAgICAgIC8vIHNlY29uZCByb3dcbiAgICAgICAgY2hpbGRyZW5bYyArIDNdLmlubmVySFRNTCA9ICcxMjInXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrID09PSAyNTUpIHtcbiAgICAgICAgLy8gdGhpcmQgcm93XG4gICAgICAgIGNoaWxkcmVuW2MgKyA2XS5pbm5lckhUTUwgPSAnMjU1J1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBjLndpZHRoID0gcHgoY29scykgKyBwYWQgKiAyXG4gICAgYy5oZWlnaHQgPSBweChyb3dzKSArIHBhZCAqIDJcbiAgICBsZXQgY3R4ID0gY3goYylcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGN0eC5maWxsUmVjdChvKDApLCBvKDApLCBweChjb2xzKSwgcHgocm93cykpXG5cbiAgICBsZXQgZyA9IGdyZWYuY3VycmVudFxuICAgIGcud2lkdGggPSBweChjb2xzKSArIHBhZCAqIDJcbiAgICBnLmhlaWdodCA9IHB4KHJvd3MpICsgcGFkICogMlxuICAgIGRyYXdHcmlkKClcblxuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG4gICAgbS53aWR0aCA9IHB4KGNvbHMpICsgcGFkICogMlxuICAgIG0uaGVpZ2h0ID0gcHgocm93cykgKyBwYWQgKiAyXG4gICAgZHJhd01hcmtlcigpXG5cbiAgICBsZXQgcGMgPSBwcmVmLmN1cnJlbnRcbiAgICBwYy53aWR0aCA9IHB4KDMgKiA0KVxuICAgIHBjLmhlaWdodCA9IHB4KDMgKiAyKVxuICAgIGRyYXdQYWxldHRlKClcblxuICAgIGxldCBwaSA9IHBpcmVmLmN1cnJlbnRcbiAgICBwaS53aWR0aCA9IHB4KDMgKiA0KVxuICAgIHBpLmhlaWdodCA9IHB4KDMgKiAyKVxuICAgIGRyYXdQYWxldHRlKClcblxuICAgIGxldCBwbSA9IHBtcmVmLmN1cnJlbnRcbiAgICBwbS53aWR0aCA9IHB4KDQgKiAzICsgMilcbiAgICBwbS5oZWlnaHQgPSBweCgyICogMilcbiAgICBkcmF3UE1hcmsoKVxuXG4gICAgbGV0IG4gPSBucmVmLmN1cnJlbnRcbiAgICBuLndpZHRoID0gcHgoNCAqIDMpXG4gICAgbi5oZWlnaHQgPSBweCgyICogMilcbiAgICBkcmF3TmF2KClcblxuICAgIGtleUFjdGlvbihudWxsLCBudWxsKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBrZXlUcmlnZ2VyKGtleXN0cmluZykge1xuICAgIGttX3JlZi5jdXJyZW50W2tleXN0cmluZ10gPSB0cnVlXG4gICAga2V5QWN0aW9uKGtleXN0cmluZywgeyByZXBlYXQ6IGZhbHNlIH0pXG4gIH1cbiAgZnVuY3Rpb24ga2V5VXBUcmlnZ2VyKGtleXN0cmluZykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAga21fcmVmLmN1cnJlbnRba2V5c3RyaW5nXSA9IGZhbHNlXG4gICAgICBrZXlBY3Rpb24obnVsbCwgbnVsbClcbiAgICB9LCAwKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd05hdigpIHtcbiAgICBsZXQgbiA9IG5yZWYuY3VycmVudFxuICAgIGxldCBueCA9IGN4KG4pXG4gICAgbnguZmlsbFN0eWxlID0gJyNhYWEnXG4gICAgbnguZmlsbFJlY3QoMCwgMCwgbi53aWR0aCwgbi5oZWlnaHQpXG5cbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgZnVuY3Rpb24gZHJhd0FjdGl2ZSh4LCB5KSB7XG4gICAgICBueC5zdHJva2VTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIG54LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xuICAgICAgbngubGluZVdpZHRoID0gMlxuICAgICAgbnguc3Ryb2tlUmVjdChweCh4ICogMykgKyAxLCBweCh5ICogMikgKyAxLCBwICogMyAtIDIsIHAgKiAyIC0gMilcbiAgICB9XG5cbiAgICBpZiAoa20uaCkge1xuICAgICAgZHJhd0FjdGl2ZSgwLCAwKVxuICAgIH1cbiAgICBpZiAoa20uaikge1xuICAgICAgZHJhd0FjdGl2ZSgxLCAwKVxuICAgIH1cbiAgICBpZiAoa20uaykge1xuICAgICAgZHJhd0FjdGl2ZSgyLCAwKVxuICAgIH1cbiAgICBpZiAoa20ubCkge1xuICAgICAgZHJhd0FjdGl2ZSgzLCAwKVxuICAgIH1cblxuICAgIGlmIChrbS5hcnJvd2xlZnQpIHtcbiAgICAgIGRyYXdBY3RpdmUoMCwgMSlcbiAgICB9XG4gICAgaWYgKGttLmFycm93ZG93bikge1xuICAgICAgZHJhd0FjdGl2ZSgxLCAxKVxuICAgIH1cbiAgICBpZiAoa20uYXJyb3d1cCkge1xuICAgICAgZHJhd0FjdGl2ZSgyLCAxKVxuICAgIH1cbiAgICBpZiAoa20uYXJyb3dyaWdodCkge1xuICAgICAgZHJhd0FjdGl2ZSgzLCAxKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGUpIHtcbiAgICBsZXQgbWFya2VyID0gbWFya2VyX3JlZi5jdXJyZW50XG4gICAgbGV0IFtjb2xzLCByb3dzXSA9IGRpbWVuc2lvbnNcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgbGV0IG1vdmUgPSAxXG5cbiAgICBpZiAoa2V5ID09PSAnZycpIHtcbiAgICAgIHNldFNob3dHcmlkKHByZXYgPT4gIXByZXYpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHRlbXAud2lkdGggPSBjLndpZHRoIC0gcGFkICogMlxuICAgICAgdGVtcC5oZWlnaHQgPSBjLmhlaWdodCAtIHBhZCAqIDJcblxuICAgICAgbGV0IHRlbXB4ID0gdGVtcC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0ZW1weC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICB0ZW1weC5kcmF3SW1hZ2UoYywgLXBhZCwgLXBhZClcblxuICAgICAgdGVtcC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICdyZ2ItJyArXG4gICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICcucG5nJ1xuICAgICAgICApXG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3TmF2KClcbiAgICBsZXQgX21hcmtlciA9IG1hcmtlci5zbGljZSgpXG4gICAgaWYgKGttLmggfHwga20uYXJyb3dsZWZ0KSB7XG4gICAgICBpZiAobWFya2VyWzBdID49IG1vdmUpIHtcbiAgICAgICAgX21hcmtlclswXSAtPSBtb3ZlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrbS5qIHx8IGttLmFycm93ZG93bikge1xuICAgICAgaWYgKG1hcmtlclsxXSArIG1vdmUgPD0gcm93cyAtIDEpIHtcbiAgICAgICAgX21hcmtlclsxXSArPSBtb3ZlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrbS5rIHx8IGttLmFycm93dXApIHtcbiAgICAgIGlmIChtYXJrZXJbMV0gPj0gbW92ZSkge1xuICAgICAgICBfbWFya2VyWzFdIC09IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGttLmwgfHwga20uYXJyb3dyaWdodCkge1xuICAgICAgaWYgKG1hcmtlclswXSArIG1vdmUgPD0gY29scyAtIDEpIHtcbiAgICAgICAgX21hcmtlclswXSArPSBtb3ZlXG4gICAgICB9XG4gICAgfVxuICAgIG1hcmtlcl9yZWYuY3VycmVudCA9IF9tYXJrZXJcblxuICAgIGxldCByID0gMFxuICAgIGxldCBnID0gMFxuICAgIGxldCBiID0gMFxuICAgIGlmIChrbS5yKSB7XG4gICAgICBiID0gMTIyXG4gICAgfVxuICAgIGlmIChrbS5lKSB7XG4gICAgICBnID0gMTIyXG4gICAgfVxuICAgIGlmIChrbS53KSB7XG4gICAgICByID0gMTIyXG4gICAgfVxuICAgIGlmIChrbS5mKSB7XG4gICAgICBiID0gMjU1XG4gICAgfVxuICAgIGlmIChrbS5kKSB7XG4gICAgICBnID0gMjU1XG4gICAgfVxuICAgIGlmIChrbS5zKSB7XG4gICAgICByID0gMjU1XG4gICAgfVxuICAgIGxldCBjb2xvciA9IFtyLCBnLCBiXVxuICAgIGNvbG9yX3JlZi5jdXJyZW50ID0gY29sb3JcblxuICAgIGlmICgoa2V5ID09PSAnU3BhY2UnIHx8IGtleSA9PT0gJ0JhY2tzcGFjZScpICYmICFlLnJlcGVhdCkge1xuICAgICAgc3BhY2VyZWYuY3VycmVudCA9ICFzcGFjZXJlZi5jdXJyZW50XG4gICAgfVxuXG4gICAgZHJhd01hcmtlcigpXG5cbiAgICBpZiAoc3BhY2VyZWYuY3VycmVudCkge1xuICAgICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICAgIGxldCBjdHggPSBjeChjKVxuXG4gICAgICBjdHguZmlsbFN0eWxlID0gcmdiKGNvbG9yKVxuICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAuLi5fbWFya2VyLnNsaWNlKDAsIDIpLm1hcCh2ID0+IG9weCh2KSksXG4gICAgICAgIC4uLl9tYXJrZXIuc2xpY2UoMikubWFwKHYgPT4gcHgodikpXG4gICAgICApXG4gICAgfVxuXG4gICAgZHJhd1BNYXJrKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleS50b0xvd2VyQ2FzZSgpXSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5LnRvTG93ZXJDYXNlKCldID0gZmFsc2VcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgIGxldCBrZXlfY2hlY2sgPSBrZXlfb3JkZXIuc2xpY2UoKVxuICAgIGtleV9jaGVjay5wdXNoKCcgJylcbiAgICBrZXlfY2hlY2sucHVzaCgnYmFja3NwYWNlJylcbiAgICBpZiAoa2V5X2NoZWNrLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIGtleUFjdGlvbihudWxsLCBlKVxuICAgIH1cbiAgICBsZXQgbmF2X2NoZWNrID0gJ2hqa2wnLnNwbGl0KCcnKVxuICAgIG5hdl9jaGVjay5wdXNoKCdhcnJvd2xlZnQnLCAnYXJyb3dkb3duJywgJ2Fycm93dXAnLCAnYXJyb3dyaWdodCcpXG4gICAgaWYgKG5hdl9jaGVjay5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICBrZXlBY3Rpb24obnVsbCwgZSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIH1cbiAgfSwgW3BtYXJrXSlcblxuICBsZXQgW2NvbHMsIHJvd3NdID0gZGltZW5zaW9uc1xuXG4gIGxldCB0aXRsZSA9ICdSZ2InXG4gIGxldCBkZXNjcmlwdGlvbiA9ICdQaXhlbC1wYWludCB1c2luZyBrZXlib2FyZCBjb250cm9scy4nXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5SZ2I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9yZ2IuY29uc3RyYWludC5zeXN0ZW1zL3JnYi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3JnYi5jb25zdHJhaW50LnN5c3RlbXNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHB4KDQwKSxcbiAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHAgLyAyLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHAgLyAyLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBwIC8gMiwgcGFkZGluZ1JpZ2h0OiBwIC8gMiB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHB4KDIpLCBiYWNrZ3JvdW5kOiAnI2JiYicsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5VHJpZ2dlcignZycpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcignZycpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8ZGl2PntzaG93X2dyaWQgPyAnaGlkZScgOiAnc2hvdyd9IGdyaWQ8L2Rpdj5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBweCgyKSwgYmFja2dyb3VuZDogJyNiYmInLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGtleVRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICBrZXlVcFRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBwXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPGRpdj5zYXZlIGltYWdlIGFzIHBuZzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17Y3JlZn0gLz5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlZj17Z3JlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXttcmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IHAgLyAyLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogLXAgLyAyIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDAsIG1hcmdpblJpZ2h0OiBwIH19PlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e3ByZWZ9IC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17cGlyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cHRleHRyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHB4KDMgKiA0KSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHB4KDMgKiAyKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMWZyIDFmciAxZnInLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a2V5X29yZGVyLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2t9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKGspXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcihrKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7a31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RvZ2dsZV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHB4KDE0KSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PkRyYXcgdG9nZ2xlOjwvZGl2PlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMCwgbWFyZ2luUmlnaHQ6IHAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3BtcmVmfSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIgKiAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIHdlYmtpdFRleHRTdHJva2U6ICcycHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3BhY2VcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMiAqIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKCdTcGFjZScpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcignU3BhY2UnKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcGFjZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGxpbmVIZWlnaHQ6IHB4KDIpICsgJ3B4JyB9fT5OYXZpZ2F0aW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAwIH19PlxuICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17bnJlZn0gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcHgoNCAqIDMpLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bnJvdzEubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVRyaWdnZXIobClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKGwpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge25yb3cyLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2x9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/rgb/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.27f881dc3a151ea28284.hot-update.js.map