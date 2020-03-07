import Head from 'next/head'
import { useEffect, useState, useReducer, useRef } from 'react'

let p = 16
let pad = p / 2
let colkeys = {
  ' ': [null, 0],
  s: [0, 255],
  d: [1, 255],
  f: [2, 255],
  w: [0, 122],
  e: [1, 122],
  r: [2, 122],
}

let pcols = 3
let prows = 3

let key_order = '   wersdf'.split('')

let nrow1 = 'hjkl'.split('')
let nrow2 = '←↓↑→'.split('')
let nrow2keys = ['ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight'].map(v =>
  v.toLowerCase()
)

function rgb(array) {
  return 'rgb(' + array.join(',') + ')'
}

function px(num) {
  return num * p
}
function o(num) {
  return num + pad
}
function opx(num) {
  return o(px(num))
}
function cx(canvas) {
  return canvas.getContext('2d')
}

let dimensions = [40, 30]

let Space = () => <div style={{ width: p / 2 }} />

let Home = () => {
  let marker_ref = useRef([0, 0, 1, 1])
  let [pmark, setPMark] = useState([0, 0])
  let [show_grid, setShowGrid] = useState(false)
  let [needle_drop, togNeedle] = useState(false)

  let km_ref = useRef({})
  let color_ref = useRef([0, 0, 0])
  let spaceref = useRef(true)

  let cref = useRef(null)
  let gref = useRef(null)
  let mref = useRef(null)

  let pref = useRef(null)
  let piref = useRef(null)
  let pmref = useRef(null)
  let ptextref = useRef(null)
  let toggle_ref = useRef(spaceref.current)

  let nref = useRef(null)

  function drawGrid() {
    let [cols, rows] = dimensions
    let g = gref.current
    let gx = cx(g)
    gx.clearRect(0, 0, g.width, g.height)
    if (show_grid) {
      gx.strokeStyle = '#bbb'
      gx.lineWidth = 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          gx.strokeRect(opx(col), opx(row), p, p)
        }
      }
    }
  }

  useEffect(() => {
    drawGrid()
  }, [show_grid])

  function drawMarker() {
    let [x, y, w, h] = marker_ref.current
    let m = mref.current
    let mx = cx(m)
    mx.clearRect(0, 0, m.width, m.height)
    mx.lineWidth = 1
    mx.strokeStyle = 'black'
    mx.strokeRect(opx(x) - 1.5, opx(y) - 1.5, px(w) + 3, px(h) + 3)
    mx.lineWidth = 2
    mx.strokeStyle = 'cyan'
    mx.strokeRect(opx(x) - 0, opx(y) - 0, px(w) + 0, px(h) + 0)
  }

  function drawPalette() {
    let pc = pref.current
    let pcx = cx(pc)

    let blank = [0, 0, 0]
    for (let i = 0; i < key_order.length; i++) {
      let key = key_order[i]
      let vals = colkeys[key]
      let x = i % pcols
      let y = Math.floor(i / pcols)
      let color = blank.slice()
      color[vals[0]] = vals[1]
      pcx.fillStyle = rgb(color)
      pcx.fillRect(px(x * 4), px(y * 2), p * 4, p * 2)
    }
  }

  function drawPMark() {
    let color = color_ref.current
    let pm = pmref.current
    let pmx = cx(pm)
    pmx.fillStyle = rgb(color)
    pmx.fillStyle = pmx.fillRect(0, 0, pm.width, pm.height)
    if (spaceref.current) {
      pmx.lineWidth = 2
      pmx.strokeStyle = 'black'
      pmx.strokeRect(0, 0, pm.width - 0, pm.height - 0)
      pmx.strokeStyle = 'cyan'
      pmx.strokeRect(2, 2, pm.width - 4, pm.height - 4)
    }

    toggle_ref.current.childNodes[2].innerHTML = spaceref.current ? 'on' : 'off'

    let pi = piref.current
    let pix = cx(pi)
    pix.clearRect(0, 0, pi.width, pi.height)
    for (let i = 0; i < key_order.length; i++) {
      let key = key_order[i]
      let vals = colkeys[key]
      let check = color[vals[0] === null ? i : vals[0]] === vals[1]
      if (check) {
        let x = i % pcols
        let y = Math.floor(i / pcols)
        pix.strokeStyle = 'white'
        pix.lineWidth = 1
        pix.strokeRect(px(x * 4) + 0.5, px(y * 2) + 0.5, p * 4 - 1, p * 2 - 1)
        pix.strokeStyle = 'black'
        pix.lineWidth = 1
        pix.strokeRect(px(x * 4) + 1.5, px(y * 2) + 1.5, p * 4 - 3, p * 2 - 3)
      }
    }

    let ptext = ptextref.current
    let children = ptext.childNodes
    for (let i = 0; i < key_order.length; i++) {
      children[i].innerHTML = key_order[i]
    }
    for (let c = 0; c < color.length; c++) {
      let check = color[c]
      if (check === 0) {
        // first row
        children[c].innerHTML = '0'
      } else if (check === 122) {
        // second row
        children[c + 3].innerHTML = '122'
      } else if (check === 255) {
        // third row
        children[c + 6].innerHTML = '255'
      }
    }
  }

  useEffect(() => {
    let c = cref.current
    c.width = px(cols) + pad * 2
    c.height = px(rows) + pad * 2
    let ctx = cx(c)
    ctx.fillStyle = 'white'
    ctx.fillRect(o(0), o(0), px(cols), px(rows))

    let g = gref.current
    g.width = px(cols) + pad * 2
    g.height = px(rows) + pad * 2
    drawGrid()

    let m = mref.current
    m.width = px(cols) + pad * 2
    m.height = px(rows) + pad * 2
    drawMarker()

    let pc = pref.current
    pc.width = px(3 * 4)
    pc.height = px(3 * 2)
    drawPalette()

    let pi = piref.current
    pi.width = px(3 * 4)
    pi.height = px(3 * 2)
    drawPalette()

    let pm = pmref.current
    pm.width = px(4 * 3 + 2)
    pm.height = px(2 * 2)
    drawPMark()

    let n = nref.current
    n.width = px(4 * 3)
    n.height = px(2 * 2)
    drawNav()

    keyAction(null, null)
  }, [])

  function keyTrigger(keystring) {
    console.log(keystring)
    km_ref.current[keystring] = true
    keyAction(keystring, { repeat: false })
  }
  function keyUpTrigger(keystring) {
    setTimeout(() => {
      km_ref.current[keystring] = false
      keyAction(null, null)
    }, 0)
  }

  function drawNav() {
    let n = nref.current
    let nx = cx(n)
    nx.fillStyle = '#aaa'
    nx.fillRect(0, 0, n.width, n.height)

    let km = km_ref.current

    function drawActive(x, y) {
      nx.strokeStyle = 'white'
      nx.strokeStyle = 'black'
      nx.lineWidth = 2
      nx.strokeRect(px(x * 3) + 1, px(y * 2) + 1, p * 3 - 2, p * 2 - 2)
    }

    if (km.h) {
      drawActive(0, 0)
    }
    if (km.j) {
      drawActive(1, 0)
    }
    if (km.k) {
      drawActive(2, 0)
    }
    if (km.l) {
      drawActive(3, 0)
    }

    if (km.arrowleft) {
      drawActive(0, 1)
    }
    if (km.arrowdown) {
      drawActive(1, 1)
    }
    if (km.arrowup) {
      drawActive(2, 1)
    }
    if (km.arrowright) {
      drawActive(3, 1)
    }
  }

  function keyAction(key, e) {
    let marker = marker_ref.current
    let [cols, rows] = dimensions
    let km = km_ref.current

    let move = 1

    if (key === 'g') {
      setShowGrid(prev => !prev)
    } else if (key === 'p') {
      let link = document.createElement('a')

      let c = cref.current
      let temp = document.createElement('canvas')
      temp.width = c.width - pad * 2
      temp.height = c.height - pad * 2

      let tempx = temp.getContext('2d')
      tempx.fillStyle = 'white'
      tempx.drawImage(c, -pad, -pad)

      temp.toBlob(function(blob) {
        link.setAttribute(
          'download',
          'rgb-' +
            new Date()
              .toISOString()
              .slice(0, -4)
              .replace(/-/g, '')
              .replace(/:/g, '')
              .replace(/_/g, '')
              .replace(/\./g, '') +
            'Z' +
            '.png'
        )

        link.setAttribute('href', URL.createObjectURL(blob))
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        )
      })
    }

    drawNav()
    let _marker = marker.slice()
    if (km.h || km.arrowleft) {
      if (marker[0] >= move) {
        _marker[0] -= move
      }
    }
    if (km.j || km.arrowdown) {
      if (marker[1] + move <= rows - 1) {
        _marker[1] += move
      }
    }
    if (km.k || km.arrowup) {
      if (marker[1] >= move) {
        _marker[1] -= move
      }
    }
    if (km.l || km.arrowright) {
      if (marker[0] + move <= cols - 1) {
        _marker[0] += move
      }
    }
    marker_ref.current = _marker

    let r = 0
    let g = 0
    let b = 0
    if (km.r) {
      b = 122
    }
    if (km.e) {
      g = 122
    }
    if (km.w) {
      r = 122
    }
    if (km.f) {
      b = 255
    }
    if (km.d) {
      g = 255
    }
    if (km.s) {
      r = 255
    }
    let color = [r, g, b]
    color_ref.current = color

    if ((key === ' ' || key === 'Backspace') && !e.repeat) {
      spaceref.current = !spaceref.current
    }

    drawMarker()

    if (spaceref.current) {
      let c = cref.current
      let ctx = cx(c)

      ctx.fillStyle = rgb(color)
      ctx.fillRect(
        ..._marker.slice(0, 2).map(v => opx(v)),
        ..._marker.slice(2).map(v => px(v))
      )
    }

    drawPMark()
  }

  function downHandler(e) {
    km_ref.current[e.key.toLowerCase()] = true
    keyAction(e.key, e)
  }

  function upHandler(e) {
    km_ref.current[e.key.toLowerCase()] = false
    let key = e.key.toLowerCase()
    let key_check = key_order.slice()
    key_check.push(' ')
    key_check.push('backspace')
    if (key_check.indexOf(key) !== -1) {
      keyAction(null, e)
    }
    let nav_check = 'hjkl'.split('')
    nav_check.push('arrowleft', 'arrowdown', 'arrowup', 'arrowright')
    if (nav_check.indexOf(key) !== -1) {
      keyAction(null, e)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [pmark])

  let [cols, rows] = dimensions

  let title = 'Rgb'
  let description = 'Pixel-paint using keyboard controls.'

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>Rgb</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://rgb.constraint.systems/rgb.png"
        />
        <meta property="og:url" content="https://rgb.constraint.systems" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div
        style={{
          width: px(40),
          margin: '0 auto',
          paddingTop: p / 2,
          paddingBottom: p / 2,
        }}
      >
        <div style={{ paddingLeft: p / 2, paddingRight: p / 2 }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              lineHeight: px(2) + 'px',
              textAlign: 'center',
            }}
          >
            <div
              style={{ width: px(2), background: '#bbb', cursor: 'default' }}
              onMouseDown={() => {
                keyTrigger('g')
              }}
              onMouseUp={() => {
                keyUpTrigger('g')
              }}
            >
              g
            </div>
            <Space />
            <div>{show_grid ? 'hide' : 'show'} grid</div>
            <Space />
            <Space />
            <div
              style={{ width: px(2), background: '#bbb', cursor: 'default' }}
              onMouseDown={() => {
                keyTrigger('p')
              }}
              onMouseUp={() => {
                keyUpTrigger('p')
              }}
            >
              p
            </div>
            <Space />
            <div>save image as png</div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <canvas ref={cref} />
          <canvas
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            ref={gref}
          />
          <canvas
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            ref={mref}
          />
        </div>
        <div style={{ padding: p / 2, display: 'flex', marginTop: -p / 2 }}>
          <div style={{ position: 'relative', lineHeight: 0, marginRight: p }}>
            <canvas ref={pref} />
            <canvas
              ref={piref}
              style={{ position: 'absolute', left: 0, top: 0 }}
            />
            <div
              ref={ptextref}
              style={{
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
                userSelect: 'none',
              }}
            >
              {key_order.map(k => (
                <div
                  key={k}
                  onMouseDown={() => {
                    keyTrigger(k)
                  }}
                  onMouseUp={() => {
                    keyUpTrigger(k)
                  }}
                >
                  {k}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              ref={toggle_ref}
              style={{
                width: px(14),
                display: 'flex',
                lineHeight: px(2) + 'px',
              }}
            >
              <div>Draw toggle:</div>
              <Space />
              <div></div>
            </div>
            <div
              style={{ position: 'relative', lineHeight: 0, marginRight: p }}
            >
              <canvas ref={pmref} />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  lineHeight: px(2 * 2) + 'px',
                  color: 'black',
                  webkitTextStroke: '2px black',
                  textAlign: 'center',
                }}
              >
                Space
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  lineHeight: px(2 * 2) + 'px',
                  color: 'white',
                  textAlign: 'center',
                  cursor: 'default',
                  userSelect: 'none',
                }}
                onMouseDown={() => {
                  keyTrigger('Space')
                }}
                onMouseUp={() => {
                  keyUpTrigger('Space')
                }}
              >
                Space
              </div>
            </div>
          </div>
          <div>
            <div style={{ lineHeight: px(2) + 'px' }}>Navigation</div>
            <div style={{ position: 'relative', lineHeight: 0 }}>
              <canvas ref={nref} />
              <div
                style={{
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
                  userSelect: 'none',
                }}
              >
                {nrow1.map(l => (
                  <div
                    onMouseDown={() => {
                      keyTrigger(l)
                    }}
                    onMouseUp={() => {
                      keyUpTrigger(l)
                    }}
                  >
                    {l}
                  </div>
                ))}
                {nrow2.map((l, i) => (
                  <div
                    onMouseDown={() => {
                      keyTrigger(nrow2keys[i])
                    }}
                    onMouseUp={() => {
                      keyUpTrigger(nrow2keys[i])
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Italic.woff') format('woff');
          font-style: italic;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'custom', monospace;
        }
        body {
          background: #ddd;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
