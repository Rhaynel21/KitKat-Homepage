# Have A Break — Kit Kat landing page

A React + Vite landing page in the Kit Kat house style, built for a **1080 × 1900
portrait smart display**. The whole page is one screen: nothing scrolls, and the
three game boxes are visible the moment it loads.

## Run it

```bash
npm install   # first time only
npm run dev   # http://localhost:5173
npm run build # production bundle into dist/
npm run preview
```

## The three games

Everything lives in one file: [`src/data/games.js`](src/data/games.js). Edit that
and nothing else.

```js
{
  id: 'milk',
  name: 'Kit Kat Milk 45g',   // small line above the game title
  game: 'Snap Rush',          // the game name, in gold
  tagline: 'Break the bar before the clock does.',
  url: 'https://games.360logix.com/GAM195436436455',
  external: false,            // true opens the game in a new tab
  wrapper: 'milk',            // pack artwork: 'milk' | 'dark' | 'cookies'
}
```

A box whose `url` is still `'#'` renders as **Coming Soon** and is not clickable;
give it a real URL and it becomes **Play Now** on its own.

`external: false` means the game opens in the same tab, which is usually what you
want on a kiosk. Set it to `true` for a new tab.

## Fitting one screen

Every vertical measurement is tied to `vh`, so the layout compresses instead of
spilling over. The root font-size itself shrinks below ~615px of height, so every rem based
size follows it down. Verified to fit with no scrolling at 1080×1900, 1920×1080,
1440×900, 1366×768, 1280×600, 1024×480, 915×450, 732×512, 600×400, 430×932 and
390×844.

Two things are easy to break if you edit the CSS:

- **The headline must never wrap.** Two lines blows the layout apart. It is sized
  from the width actually available (`available width ÷ 5.9`, the measured
  width-to-font-size ratio of "Have A Break" in Anton) rather than a guessed `vw`
  number, and carries `white-space: nowrap`.
- **The game grid uses `minmax(0, 1fr)`.** With a plain `1fr` the columns refuse
  to shrink below their content, the grid overflows, and it drags the whole page
  wider than the viewport.

## How it is put together

| File | What it does |
| --- | --- |
| `src/App.jsx` | Page order: header, hero, games, chocolate ridge |
| `src/components/Header.jsx` | The logo (no nav links) |
| `src/components/Hero.jsx` | Headline and the bar that snaps apart |
| `src/components/GameShelf.jsx` | The three boxes |
| `src/components/PackShot.jsx` | Wrapper artwork, three colourways, drawn as SVG |
| `src/components/FloatingChunks.jsx` | Chocolate pieces tumbling around the hero |
| `src/components/ChocolateWave.jsx` | The melted-chocolate ridge at the bottom |
| `src/styles/global.css` | Colours, fonts and other design tokens |

The snap is two clipped copies of the same photo. They start pivoted together so
the bar reads as whole, hold for a beat, then swing apart about the break.

Colours are tokens in `src/styles/global.css` — change `--kk-red` or `--kk-gold`
there and the whole page follows. Animations respect `prefers-reduced-motion`,
which shows the bar already snapped.

## Assets

- `src/assets/kitkat-logo.png` — logo, background removed so the white oval sits
  straight on the red
- `src/assets/bar-break.webp` — the snapped bar photo (81 KB; the source PNG was
  873 KB)
