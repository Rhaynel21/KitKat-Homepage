// The three boxes in the "4 FINGERS" row. Each one opens a game.
//
// >>> Drop the game links here. That is the only edit needed. <<<
// `url` accepts anything an <a href> accepts: a full URL
// ("https://..."), or a path inside this site ("/games/snap").
// `external: true` opens the link in a new tab.

export const games = [
  {
    id: 'milk',
    name: 'Kit Kat Milk 45g',
    game: 'Snap Rush',
    tagline: 'Break the bar before the clock does.',
    url: 'https://games.360logix.com/GAM195436436455',
    external: false,
    wrapper: 'milk',
  },
  {
    id: 'dark',
    name: 'Kit Kat Dark 70% 45g',
    game: 'Cocoa Drop',
    tagline: 'Catch every falling finger. Miss three, you are out.',
    url: 'https://games.360logix.com/GAM537738851395',
    external: false,
    wrapper: 'dark',
  },
  {
    id: 'cookies',
    name: 'Kit Kat Double Cookies & Cream 45g',
    game: 'Wafer Stack',
    tagline: 'Stack the layers. Do not let the tower snap.',
    url: 'https://games.360logix.com/GAM261982904527',
    external: false,
    wrapper: 'cookies',
    isNew: true,
  },
]
