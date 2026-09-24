# Have A Break — Kit Kat Break Booth landing page

A React + Vite landing page in the Kit Kat house style, built for a **1080 × 1900
portrait smart display**. The whole page is one screen: nothing scrolls, and the
three games are visible the moment it loads. Tapping a game's cover opens it.

## Run it

```bash
npm install   # first time only
npm run dev   # http://localhost:5173
npm run build # production bundle into dist/
npm run preview
```

## The three games

Everything lives in one file: [`src/data/games.js`](src/data/games.js).

```js
{
  id: 'spin-and-win',
  game: 'Spin and Win',      // not drawn on the page; the cover carries the
                             // name. This is what a screen reader announces.
  url: 'https://games.360logix.com/GAM195436436455',
  external: false,           // true opens the game in a new tab
  cover: coverSpinAndWin,    // imported from src/assets
}
```

The cover art *is* the link — there is no button. A box still set to `'#'`
renders as **Coming Soon** and ignores taps.

`external: false` opens the game in the same tab, which is what you want on a
kiosk. Set it to `true` for a new tab.

All three covers are **460 × 818**. That shared aspect ratio is what keeps the
row even, so crop any replacement to match.

`wrapper` (`'milk' | 'dark' | 'cookies'`) draws a Kit Kat pack in SVG instead of
a cover, as a stand-in for a game whose cover does not exist yet. A `cover` wins
when both are set.

## Fitting one screen

Every vertical measurement is tied to `vh`, and below ~615px of viewport height
the root font-size shrinks too, so every `rem` based size follows it down.
Verified with no scrolling and no sideways overflow at 30 viewport sizes from
280 × 653 through 1080 × 1900 to 2560 × 1440.

Four things are easy to break by accident if you edit the CSS:

- **The headline must never wrap.** Two lines blow the layout apart. It is sized
  from the width actually available (`available width ÷ 5.9`, the measured
  width-to-font-size ratio of "Have A Break" in Anton) rather than a guessed
  `vw` number, and carries `white-space: nowrap`.
- **`minmax(0, 1fr)` on the game grid.** With a plain `1fr` the columns refuse to
  shrink below their content, the grid overflows, and it drags the whole page
  wider than the viewport.
- **`min-width: 0` on `.stage`.** Same trap one level up: a flex item will not
  shrink below its content without it, which lets narrow screens scroll
  sideways.
- **The cover art is pinned inside its stage** with `position: absolute` and
  `object-fit: contain`. Sizing it with `height: 100%` instead lets it escape
  the box and break the one-screen fit.

On a portrait display there is height to spare, so the chocolate ridge grows and
the centred column is nudged upward — both scoped to `max-aspect-ratio: 2/3`.
Landscape screens have no slack and keep the shallow ridge and even padding.

## How it is put together

| File | What it does |
| --- | --- |
| `src/App.jsx` | Page order: logo, hero, games, chocolate ridge |
| `src/components/Header.jsx` | The logo, inside the centred column |
| `src/components/Hero.jsx` | Headline and the bar that snaps apart |
| `src/components/GameShelf.jsx` | The three tappable covers |
| `src/components/PackShot.jsx` | Fallback pack artwork, drawn as SVG |
| `src/components/FloatingChunks.jsx` | Chocolate pieces tumbling around the hero |
| `src/components/ChocolateWave.jsx` | The melted-chocolate ridge at the bottom |
| `src/styles/global.css` | Colours, fonts and other design tokens |

The snap is two clipped copies of the same photo. They start pivoted together so
the bar reads as whole, hold for a beat, then swing apart about the break.

The logo sits inside the centred column rather than in a bar pinned to the top —
that is what keeps a gap from opening between it and the headline.

Colours are tokens in `src/styles/global.css`; change `--kk-red` or `--kk-gold`
there and the whole page follows. Animations respect `prefers-reduced-motion`,
which shows the bar already snapped.

## Assets

- `src/assets/kitkat-logo.png` — logo with the background removed, so the white
  oval sits straight on the red
- `src/assets/bar-break.webp` — the snapped bar photo (81 KB; source PNG 873 KB)
- `src/assets/cover-*.webp` — one cover per game, 460 × 818
- `src/assets/kitkat-finger.webp` — a single finger cut from a 4-finger bar, not
  used on the page yet
