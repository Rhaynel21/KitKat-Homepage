import coverSpinAndWin from '../assets/cover-spin-and-win.webp'
import coverConeOrStick from '../assets/cover-cone-or-stick.webp'
import coverFindTheIceCream from '../assets/cover-find-the-ice-cream.webp'

// The three boxes on the landing page. Tapping a box opens its game.
// `game` is not drawn on the page — the cover art carries the name — but
// it is what a screen reader announces for the link.
//
// `cover` is a shot of the game itself. All three are the same shape
// (460x818), which is what keeps the row even — crop a replacement to
// that aspect ratio.
//
// `wrapper` ('milk' | 'dark' | 'cookies') draws a Kit Kat pack instead,
// as a stand-in for a game that has no cover yet. A `cover` wins when
// both are set.
//
// `url` takes anything an <a href> takes. `external: true` opens the game
// in a new tab; false keeps it in the same tab, which is what you want on
// a kiosk. A box still set to '#' renders as "Coming Soon" and does not
// respond to a tap.

export const games = [
  {
    id: 'spin-and-win',
    game: 'Spin and Win',
    url: 'https://games.360logix.com/GAM195436436455',
    external: false,
    cover: coverSpinAndWin,
  },
  {
    id: 'cone-or-stick',
    game: 'Cone or Stick',
    url: 'https://games.360logix.com/GAM537738851395',
    external: false,
    cover: coverConeOrStick,
  },
  {
    id: 'find-the-ice-cream',
    game: 'Find The Ice Cream',
    url: 'https://games.360logix.com/GAM261982904527',
    external: false,
    cover: coverFindTheIceCream,
  },
]
