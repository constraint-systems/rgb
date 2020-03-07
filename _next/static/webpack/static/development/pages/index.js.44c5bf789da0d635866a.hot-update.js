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
var nrow2keys = ['ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight'].map(function (v) {
  return v.toLowerCase();
});

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
      lineNumber: 46
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
    console.log(keystring);
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

    if ((key === ' ' || key === 'Backspace') && !e.repeat) {
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
      lineNumber: 421
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      paddingRight: p / 2,
      paddingBottom: p / 2
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
      lineNumber: 458
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
      lineNumber: 466
    },
    __self: this
  }, "g"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, show_grid ? 'hide' : 'show', " grid"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
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
      lineNumber: 481
    },
    __self: this
  }, "p"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, "save image as png"))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
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
      lineNumber: 498
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
      lineNumber: 506
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
      lineNumber: 515
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
      lineNumber: 516
    },
    __self: this
  }, __jsx("canvas", {
    ref: pref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
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
      lineNumber: 518
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
      lineHeight: px(2) + 'px',
      cursor: 'default',
      userSelect: 'none'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
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
        lineNumber: 541
      },
      __self: this
    }, k);
  }))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
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
      lineNumber: 556
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, "Draw toggle:"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
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
      lineNumber: 568
    },
    __self: this
  }, __jsx("canvas", {
    ref: pmref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
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
      lineNumber: 572
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
      textAlign: 'center',
      cursor: 'default',
      userSelect: 'none'
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
      lineNumber: 587
    },
    __self: this
  }, "Space"))), __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, __jsx("div", {
    style: {
      lineHeight: px(2) + 'px'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
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
      lineNumber: 613
    },
    __self: this
  }, __jsx("canvas", {
    ref: nref,
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
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
      lineHeight: px(2) + 'px',
      cursor: 'default',
      userSelect: 'none'
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
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
        lineNumber: 631
      },
      __self: this
    }, l);
  }), nrow2.map(function (l, i) {
    return __jsx("div", {
      onMouseDown: function onMouseDown() {
        keyTrigger(nrow2keys[i]);
      },
      onMouseUp: function onMouseUp() {
        keyUpTrigger(nrow2keys[i]);
      },
      className: "jsx-1674335784",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643
      },
      __self: this
    }, l);
  }))))), __jsx("div", {
    style: {
      paddingTop: p / 2,
      paddingLeft: p / 2,
      paddingRight: p / 2
    },
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
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
      lineNumber: 661
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/constraint-systems/rgb",
    target: "_blank",
    className: "jsx-1674335784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, "view source"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1674335784",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;}body{background:#ddd;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdxQnlCLEFBR2dDLEFBS0EsQUFPWCxBQUtNLEFBR00sVUFQYixNQUtYLEdBSmtDLEVBWnVCLEFBS0QsQ0FjeEQsNEJBTkEsb0ZBUG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmdiL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmxldCBwID0gMTZcbmxldCBwYWQgPSBwIC8gMlxubGV0IGNvbGtleXMgPSB7XG4gICcgJzogW251bGwsIDBdLFxuICBzOiBbMCwgMjU1XSxcbiAgZDogWzEsIDI1NV0sXG4gIGY6IFsyLCAyNTVdLFxuICB3OiBbMCwgMTIyXSxcbiAgZTogWzEsIDEyMl0sXG4gIHI6IFsyLCAxMjJdLFxufVxuXG5sZXQgcGNvbHMgPSAzXG5sZXQgcHJvd3MgPSAzXG5cbmxldCBrZXlfb3JkZXIgPSAnICAgd2Vyc2RmJy5zcGxpdCgnJylcblxubGV0IG5yb3cxID0gJ2hqa2wnLnNwbGl0KCcnKVxubGV0IG5yb3cyID0gJ+KGkOKGk+KGkeKGkicuc3BsaXQoJycpXG5sZXQgbnJvdzJrZXlzID0gWydBcnJvd0xlZnQnLCAnQXJyb3dEb3duJywgJ0Fycm93VXAnLCAnQXJyb3dSaWdodCddLm1hcCh2ID0+XG4gIHYudG9Mb3dlckNhc2UoKVxuKVxuXG5mdW5jdGlvbiByZ2IoYXJyYXkpIHtcbiAgcmV0dXJuICdyZ2IoJyArIGFycmF5LmpvaW4oJywnKSArICcpJ1xufVxuXG5mdW5jdGlvbiBweChudW0pIHtcbiAgcmV0dXJuIG51bSAqIHBcbn1cbmZ1bmN0aW9uIG8obnVtKSB7XG4gIHJldHVybiBudW0gKyBwYWRcbn1cbmZ1bmN0aW9uIG9weChudW0pIHtcbiAgcmV0dXJuIG8ocHgobnVtKSlcbn1cbmZ1bmN0aW9uIGN4KGNhbnZhcykge1xuICByZXR1cm4gY2FudmFzLmdldENvbnRleHQoJzJkJylcbn1cblxubGV0IGRpbWVuc2lvbnMgPSBbNDAsIDMwXVxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBwIC8gMiB9fSAvPlxuXG5sZXQgSG9tZSA9ICgpID0+IHtcbiAgbGV0IG1hcmtlcl9yZWYgPSB1c2VSZWYoWzAsIDAsIDEsIDFdKVxuICBsZXQgW3BtYXJrLCBzZXRQTWFya10gPSB1c2VTdGF0ZShbMCwgMF0pXG4gIGxldCBbc2hvd19ncmlkLCBzZXRTaG93R3JpZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtuZWVkbGVfZHJvcCwgdG9nTmVlZGxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBjb2xvcl9yZWYgPSB1c2VSZWYoWzAsIDAsIDBdKVxuICBsZXQgc3BhY2VyZWYgPSB1c2VSZWYodHJ1ZSlcblxuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgZ3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgbXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwaXJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcG1yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHB0ZXh0cmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0b2dnbGVfcmVmID0gdXNlUmVmKHNwYWNlcmVmLmN1cnJlbnQpXG5cbiAgbGV0IG5yZWYgPSB1c2VSZWYobnVsbClcblxuICBmdW5jdGlvbiBkcmF3R3JpZCgpIHtcbiAgICBsZXQgW2NvbHMsIHJvd3NdID0gZGltZW5zaW9uc1xuICAgIGxldCBnID0gZ3JlZi5jdXJyZW50XG4gICAgbGV0IGd4ID0gY3goZylcbiAgICBneC5jbGVhclJlY3QoMCwgMCwgZy53aWR0aCwgZy5oZWlnaHQpXG4gICAgaWYgKHNob3dfZ3JpZCkge1xuICAgICAgZ3guc3Ryb2tlU3R5bGUgPSAnI2JiYidcbiAgICAgIGd4LmxpbmVXaWR0aCA9IDFcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgZ3guc3Ryb2tlUmVjdChvcHgoY29sKSwgb3B4KHJvdyksIHAsIHApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRyYXdHcmlkKClcbiAgfSwgW3Nob3dfZ3JpZF0pXG5cbiAgZnVuY3Rpb24gZHJhd01hcmtlcigpIHtcbiAgICBsZXQgW3gsIHksIHcsIGhdID0gbWFya2VyX3JlZi5jdXJyZW50XG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcbiAgICBsZXQgbXggPSBjeChtKVxuICAgIG14LmNsZWFyUmVjdCgwLCAwLCBtLndpZHRoLCBtLmhlaWdodClcbiAgICBteC5saW5lV2lkdGggPSAxXG4gICAgbXguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgbXguc3Ryb2tlUmVjdChvcHgoeCkgLSAxLjUsIG9weCh5KSAtIDEuNSwgcHgodykgKyAzLCBweChoKSArIDMpXG4gICAgbXgubGluZVdpZHRoID0gMlxuICAgIG14LnN0cm9rZVN0eWxlID0gJ2N5YW4nXG4gICAgbXguc3Ryb2tlUmVjdChvcHgoeCkgLSAwLCBvcHgoeSkgLSAwLCBweCh3KSArIDAsIHB4KGgpICsgMClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQYWxldHRlKCkge1xuICAgIGxldCBwYyA9IHByZWYuY3VycmVudFxuICAgIGxldCBwY3ggPSBjeChwYylcblxuICAgIGxldCBibGFuayA9IFswLCAwLCAwXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5X29yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5X29yZGVyW2ldXG4gICAgICBsZXQgdmFscyA9IGNvbGtleXNba2V5XVxuICAgICAgbGV0IHggPSBpICUgcGNvbHNcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gcGNvbHMpXG4gICAgICBsZXQgY29sb3IgPSBibGFuay5zbGljZSgpXG4gICAgICBjb2xvclt2YWxzWzBdXSA9IHZhbHNbMV1cbiAgICAgIHBjeC5maWxsU3R5bGUgPSByZ2IoY29sb3IpXG4gICAgICBwY3guZmlsbFJlY3QocHgoeCAqIDQpLCBweCh5ICogMiksIHAgKiA0LCBwICogMilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3UE1hcmsoKSB7XG4gICAgbGV0IGNvbG9yID0gY29sb3JfcmVmLmN1cnJlbnRcbiAgICBsZXQgcG0gPSBwbXJlZi5jdXJyZW50XG4gICAgbGV0IHBteCA9IGN4KHBtKVxuICAgIHBteC5maWxsU3R5bGUgPSByZ2IoY29sb3IpXG4gICAgcG14LmZpbGxTdHlsZSA9IHBteC5maWxsUmVjdCgwLCAwLCBwbS53aWR0aCwgcG0uaGVpZ2h0KVxuICAgIGlmIChzcGFjZXJlZi5jdXJyZW50KSB7XG4gICAgICBwbXgubGluZVdpZHRoID0gMlxuICAgICAgcG14LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xuICAgICAgcG14LnN0cm9rZVJlY3QoMCwgMCwgcG0ud2lkdGggLSAwLCBwbS5oZWlnaHQgLSAwKVxuICAgICAgcG14LnN0cm9rZVN0eWxlID0gJ2N5YW4nXG4gICAgICBwbXguc3Ryb2tlUmVjdCgyLCAyLCBwbS53aWR0aCAtIDQsIHBtLmhlaWdodCAtIDQpXG4gICAgfVxuXG4gICAgdG9nZ2xlX3JlZi5jdXJyZW50LmNoaWxkTm9kZXNbMl0uaW5uZXJIVE1MID0gc3BhY2VyZWYuY3VycmVudCA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgbGV0IHBpID0gcGlyZWYuY3VycmVudFxuICAgIGxldCBwaXggPSBjeChwaSlcbiAgICBwaXguY2xlYXJSZWN0KDAsIDAsIHBpLndpZHRoLCBwaS5oZWlnaHQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlfb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlfb3JkZXJbaV1cbiAgICAgIGxldCB2YWxzID0gY29sa2V5c1trZXldXG4gICAgICBsZXQgY2hlY2sgPSBjb2xvclt2YWxzWzBdID09PSBudWxsID8gaSA6IHZhbHNbMF1dID09PSB2YWxzWzFdXG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgbGV0IHggPSBpICUgcGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBwY29scylcbiAgICAgICAgcGl4LnN0cm9rZVN0eWxlID0gJ3doaXRlJ1xuICAgICAgICBwaXgubGluZVdpZHRoID0gMVxuICAgICAgICBwaXguc3Ryb2tlUmVjdChweCh4ICogNCkgKyAwLjUsIHB4KHkgKiAyKSArIDAuNSwgcCAqIDQgLSAxLCBwICogMiAtIDEpXG4gICAgICAgIHBpeC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICAgICAgcGl4LmxpbmVXaWR0aCA9IDFcbiAgICAgICAgcGl4LnN0cm9rZVJlY3QocHgoeCAqIDQpICsgMS41LCBweCh5ICogMikgKyAxLjUsIHAgKiA0IC0gMywgcCAqIDIgLSAzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwdGV4dCA9IHB0ZXh0cmVmLmN1cnJlbnRcbiAgICBsZXQgY2hpbGRyZW4gPSBwdGV4dC5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlfb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmlubmVySFRNTCA9IGtleV9vcmRlcltpXVxuICAgIH1cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbG9yLmxlbmd0aDsgYysrKSB7XG4gICAgICBsZXQgY2hlY2sgPSBjb2xvcltjXVxuICAgICAgaWYgKGNoZWNrID09PSAwKSB7XG4gICAgICAgIC8vIGZpcnN0IHJvd1xuICAgICAgICBjaGlsZHJlbltjXS5pbm5lckhUTUwgPSAnMCdcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2sgPT09IDEyMikge1xuICAgICAgICAvLyBzZWNvbmQgcm93XG4gICAgICAgIGNoaWxkcmVuW2MgKyAzXS5pbm5lckhUTUwgPSAnMTIyJ1xuICAgICAgfSBlbHNlIGlmIChjaGVjayA9PT0gMjU1KSB7XG4gICAgICAgIC8vIHRoaXJkIHJvd1xuICAgICAgICBjaGlsZHJlbltjICsgNl0uaW5uZXJIVE1MID0gJzI1NSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgYy53aWR0aCA9IHB4KGNvbHMpICsgcGFkICogMlxuICAgIGMuaGVpZ2h0ID0gcHgocm93cykgKyBwYWQgKiAyXG4gICAgbGV0IGN0eCA9IGN4KGMpXG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICBjdHguZmlsbFJlY3QobygwKSwgbygwKSwgcHgoY29scyksIHB4KHJvd3MpKVxuXG4gICAgbGV0IGcgPSBncmVmLmN1cnJlbnRcbiAgICBnLndpZHRoID0gcHgoY29scykgKyBwYWQgKiAyXG4gICAgZy5oZWlnaHQgPSBweChyb3dzKSArIHBhZCAqIDJcbiAgICBkcmF3R3JpZCgpXG5cbiAgICBsZXQgbSA9IG1yZWYuY3VycmVudFxuICAgIG0ud2lkdGggPSBweChjb2xzKSArIHBhZCAqIDJcbiAgICBtLmhlaWdodCA9IHB4KHJvd3MpICsgcGFkICogMlxuICAgIGRyYXdNYXJrZXIoKVxuXG4gICAgbGV0IHBjID0gcHJlZi5jdXJyZW50XG4gICAgcGMud2lkdGggPSBweCgzICogNClcbiAgICBwYy5oZWlnaHQgPSBweCgzICogMilcbiAgICBkcmF3UGFsZXR0ZSgpXG5cbiAgICBsZXQgcGkgPSBwaXJlZi5jdXJyZW50XG4gICAgcGkud2lkdGggPSBweCgzICogNClcbiAgICBwaS5oZWlnaHQgPSBweCgzICogMilcbiAgICBkcmF3UGFsZXR0ZSgpXG5cbiAgICBsZXQgcG0gPSBwbXJlZi5jdXJyZW50XG4gICAgcG0ud2lkdGggPSBweCg0ICogMyArIDIpXG4gICAgcG0uaGVpZ2h0ID0gcHgoMiAqIDIpXG4gICAgZHJhd1BNYXJrKClcblxuICAgIGxldCBuID0gbnJlZi5jdXJyZW50XG4gICAgbi53aWR0aCA9IHB4KDQgKiAzKVxuICAgIG4uaGVpZ2h0ID0gcHgoMiAqIDIpXG4gICAgZHJhd05hdigpXG5cbiAgICBrZXlBY3Rpb24obnVsbCwgbnVsbClcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24ga2V5VHJpZ2dlcihrZXlzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhrZXlzdHJpbmcpXG4gICAga21fcmVmLmN1cnJlbnRba2V5c3RyaW5nXSA9IHRydWVcbiAgICBrZXlBY3Rpb24oa2V5c3RyaW5nLCB7IHJlcGVhdDogZmFsc2UgfSlcbiAgfVxuICBmdW5jdGlvbiBrZXlVcFRyaWdnZXIoa2V5c3RyaW5nKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBrbV9yZWYuY3VycmVudFtrZXlzdHJpbmddID0gZmFsc2VcbiAgICAgIGtleUFjdGlvbihudWxsLCBudWxsKVxuICAgIH0sIDApXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3TmF2KCkge1xuICAgIGxldCBuID0gbnJlZi5jdXJyZW50XG4gICAgbGV0IG54ID0gY3gobilcbiAgICBueC5maWxsU3R5bGUgPSAnI2FhYSdcbiAgICBueC5maWxsUmVjdCgwLCAwLCBuLndpZHRoLCBuLmhlaWdodClcblxuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBmdW5jdGlvbiBkcmF3QWN0aXZlKHgsIHkpIHtcbiAgICAgIG54LnN0cm9rZVN0eWxlID0gJ3doaXRlJ1xuICAgICAgbnguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgICBueC5saW5lV2lkdGggPSAyXG4gICAgICBueC5zdHJva2VSZWN0KHB4KHggKiAzKSArIDEsIHB4KHkgKiAyKSArIDEsIHAgKiAzIC0gMiwgcCAqIDIgLSAyKVxuICAgIH1cblxuICAgIGlmIChrbS5oKSB7XG4gICAgICBkcmF3QWN0aXZlKDAsIDApXG4gICAgfVxuICAgIGlmIChrbS5qKSB7XG4gICAgICBkcmF3QWN0aXZlKDEsIDApXG4gICAgfVxuICAgIGlmIChrbS5rKSB7XG4gICAgICBkcmF3QWN0aXZlKDIsIDApXG4gICAgfVxuICAgIGlmIChrbS5sKSB7XG4gICAgICBkcmF3QWN0aXZlKDMsIDApXG4gICAgfVxuXG4gICAgaWYgKGttLmFycm93bGVmdCkge1xuICAgICAgZHJhd0FjdGl2ZSgwLCAxKVxuICAgIH1cbiAgICBpZiAoa20uYXJyb3dkb3duKSB7XG4gICAgICBkcmF3QWN0aXZlKDEsIDEpXG4gICAgfVxuICAgIGlmIChrbS5hcnJvd3VwKSB7XG4gICAgICBkcmF3QWN0aXZlKDIsIDEpXG4gICAgfVxuICAgIGlmIChrbS5hcnJvd3JpZ2h0KSB7XG4gICAgICBkcmF3QWN0aXZlKDMsIDEpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZSkge1xuICAgIGxldCBtYXJrZXIgPSBtYXJrZXJfcmVmLmN1cnJlbnRcbiAgICBsZXQgW2NvbHMsIHJvd3NdID0gZGltZW5zaW9uc1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBsZXQgbW92ZSA9IDFcblxuICAgIGlmIChrZXkgPT09ICdnJykge1xuICAgICAgc2V0U2hvd0dyaWQocHJldiA9PiAhcHJldilcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdGVtcC53aWR0aCA9IGMud2lkdGggLSBwYWQgKiAyXG4gICAgICB0ZW1wLmhlaWdodCA9IGMuaGVpZ2h0IC0gcGFkICogMlxuXG4gICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRlbXB4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIHRlbXB4LmRyYXdJbWFnZShjLCAtcGFkLCAtcGFkKVxuXG4gICAgICB0ZW1wLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3JnYi0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGRyYXdOYXYoKVxuICAgIGxldCBfbWFya2VyID0gbWFya2VyLnNsaWNlKClcbiAgICBpZiAoa20uaCB8fCBrbS5hcnJvd2xlZnQpIHtcbiAgICAgIGlmIChtYXJrZXJbMF0gPj0gbW92ZSkge1xuICAgICAgICBfbWFya2VyWzBdIC09IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGttLmogfHwga20uYXJyb3dkb3duKSB7XG4gICAgICBpZiAobWFya2VyWzFdICsgbW92ZSA8PSByb3dzIC0gMSkge1xuICAgICAgICBfbWFya2VyWzFdICs9IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGttLmsgfHwga20uYXJyb3d1cCkge1xuICAgICAgaWYgKG1hcmtlclsxXSA+PSBtb3ZlKSB7XG4gICAgICAgIF9tYXJrZXJbMV0gLT0gbW92ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa20ubCB8fCBrbS5hcnJvd3JpZ2h0KSB7XG4gICAgICBpZiAobWFya2VyWzBdICsgbW92ZSA8PSBjb2xzIC0gMSkge1xuICAgICAgICBfbWFya2VyWzBdICs9IG1vdmVcbiAgICAgIH1cbiAgICB9XG4gICAgbWFya2VyX3JlZi5jdXJyZW50ID0gX21hcmtlclxuXG4gICAgbGV0IHIgPSAwXG4gICAgbGV0IGcgPSAwXG4gICAgbGV0IGIgPSAwXG4gICAgaWYgKGttLnIpIHtcbiAgICAgIGIgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLmUpIHtcbiAgICAgIGcgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLncpIHtcbiAgICAgIHIgPSAxMjJcbiAgICB9XG4gICAgaWYgKGttLmYpIHtcbiAgICAgIGIgPSAyNTVcbiAgICB9XG4gICAgaWYgKGttLmQpIHtcbiAgICAgIGcgPSAyNTVcbiAgICB9XG4gICAgaWYgKGttLnMpIHtcbiAgICAgIHIgPSAyNTVcbiAgICB9XG4gICAgbGV0IGNvbG9yID0gW3IsIGcsIGJdXG4gICAgY29sb3JfcmVmLmN1cnJlbnQgPSBjb2xvclxuXG4gICAgaWYgKChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdCYWNrc3BhY2UnKSAmJiAhZS5yZXBlYXQpIHtcbiAgICAgIHNwYWNlcmVmLmN1cnJlbnQgPSAhc3BhY2VyZWYuY3VycmVudFxuICAgIH1cblxuICAgIGRyYXdNYXJrZXIoKVxuXG4gICAgaWYgKHNwYWNlcmVmLmN1cnJlbnQpIHtcbiAgICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgICBsZXQgY3R4ID0gY3goYylcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjb2xvcilcbiAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgLi4uX21hcmtlci5zbGljZSgwLCAyKS5tYXAodiA9PiBvcHgodikpLFxuICAgICAgICAuLi5fbWFya2VyLnNsaWNlKDIpLm1hcCh2ID0+IHB4KHYpKVxuICAgICAgKVxuICAgIH1cblxuICAgIGRyYXdQTWFyaygpXG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXkudG9Mb3dlckNhc2UoKV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleS50b0xvd2VyQ2FzZSgpXSA9IGZhbHNlXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKClcbiAgICBsZXQga2V5X2NoZWNrID0ga2V5X29yZGVyLnNsaWNlKClcbiAgICBrZXlfY2hlY2sucHVzaCgnICcpXG4gICAga2V5X2NoZWNrLnB1c2goJ2JhY2tzcGFjZScpXG4gICAgaWYgKGtleV9jaGVjay5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICBrZXlBY3Rpb24obnVsbCwgZSlcbiAgICB9XG4gICAgbGV0IG5hdl9jaGVjayA9ICdoamtsJy5zcGxpdCgnJylcbiAgICBuYXZfY2hlY2sucHVzaCgnYXJyb3dsZWZ0JywgJ2Fycm93ZG93bicsICdhcnJvd3VwJywgJ2Fycm93cmlnaHQnKVxuICAgIGlmIChuYXZfY2hlY2suaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAga2V5QWN0aW9uKG51bGwsIGUpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB9XG4gIH0sIFtwbWFya10pXG5cbiAgbGV0IFtjb2xzLCByb3dzXSA9IGRpbWVuc2lvbnNcblxuICBsZXQgdGl0bGUgPSAnUmdiJ1xuICBsZXQgZGVzY3JpcHRpb24gPSAnUGl4ZWwtcGFpbnQgdXNpbmcga2V5Ym9hcmQgY29udHJvbHMuJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8dGl0bGU+UmdiPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vcmdiLmNvbnN0cmFpbnQuc3lzdGVtcy9yZ2IucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9yZ2IuY29uc3RyYWludC5zeXN0ZW1zXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBweCg0MCksXG4gICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBwIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBwIC8gMixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogcCAvIDIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHAgLyAyLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcCAvIDIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHgoMiksIGJhY2tncm91bmQ6ICcjYmJiJywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKCdnJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKCdnJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxkaXY+e3Nob3dfZ3JpZCA/ICdoaWRlJyA6ICdzaG93J30gZ3JpZDwvZGl2PlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHB4KDIpLCBiYWNrZ3JvdW5kOiAnI2JiYicsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5VHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8ZGl2PnNhdmUgaW1hZ2UgYXMgcG5nPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtncmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e21yZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogcCAvIDIsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiAtcCAvIDIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMCwgbWFyZ2luUmlnaHQ6IHAgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17cHJlZn0gLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXtwaXJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXtwdGV4dHJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogcHgoMyAqIDQpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcHgoMyAqIDIpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnInLFxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxZnIgMWZyIDFmcicsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a2V5X29yZGVyLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2t9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKGspXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcihrKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7a31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RvZ2dsZV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHB4KDE0KSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMikgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PkRyYXcgdG9nZ2xlOjwvZGl2PlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMCwgbWFyZ2luUmlnaHQ6IHAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3BtcmVmfSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHB4KDIgKiAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIHdlYmtpdFRleHRTdHJva2U6ICcycHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3BhY2VcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcHgoMiAqIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGtleVRyaWdnZXIoJ1NwYWNlJylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKCdTcGFjZScpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwYWNlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbGluZUhlaWdodDogcHgoMikgKyAncHgnIH19Pk5hdmlnYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDAgfX0+XG4gICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtucmVmfSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBweCg0ICogMyksXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxZnIgMWZyJyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25yb3cxLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKGwpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVVwVHJpZ2dlcihsKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtucm93Mi5tYXAoKGwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyKG5yb3cya2V5c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5VXBUcmlnZ2VyKG5yb3cya2V5c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBwIC8gMiwgcGFkZGluZ0xlZnQ6IHAgLyAyLCBwYWRkaW5nUmlnaHQ6IHAgLyAyIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBweCgyKSArICdweCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb25zdHJhaW50LXN5c3RlbXMvcmdiXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgdmlldyBzb3VyY2VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/rgb/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.44c5bf789da0d635866a.hot-update.js.map