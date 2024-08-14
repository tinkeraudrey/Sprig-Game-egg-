/*
@title: egg
@author: Audrey Lucas
@tags: ['maze', 'levels']
@addedOn: 2024-08-13

HOW TO PLAY
'WASD' to control your player
'J' to reset the level

*/

const player = "p";
const eggwhite = "e";
const wall = "w";
const portal = "o";
const salt = "s";
const pepper = "r";
const upblack = "u"
const downblack = "d"
const leftblack = "l"
const rightblack = "z"
const eggblack = "b"
const handle = "h"

getFirst(salt)
getFirst(pepper)

const melody = tune`
82.1917808219178: G4-82.1917808219178,
82.1917808219178: E5-82.1917808219178,
2465.753424657534`
const melody2 = tune`
82.1917808219178: D4-82.1917808219178,
82.1917808219178: G5-82.1917808219178,
246.5753424657534,
82.1917808219178: B4-82.1917808219178,
82.1917808219178: C5-82.1917808219178,
82.1917808219178,
82.1917808219178: D5-82.1917808219178,
82.1917808219178: C5-82.1917808219178,
164.3835616438356,
82.1917808219178: A4-82.1917808219178,
164.3835616438356,
82.1917808219178: B5-82.1917808219178,
1315.0684931506848`

setLegend(
  [ player, bitmap`
................
................
................
.....00000......
....0999990.....
...099999990....
..09929992990...
..09909990990...
..09909990990...
..09999999990...
..09990009990...
...099999990....
....0999990.....
.....00000......
................
................` ],
  [ eggblack, bitmap`
00LLLLLLLLL00000
0LLLL00000022220
LLLL022222222220
LL0022222222220L
L02222222222220L
L02222222222220L
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
022222222222200L
L022222222220LLL
LL0022222200LLL0
LLLL000000LLLL00` ],
  [ eggwhite, bitmap`
...........0000.
.....00000022220
....022222222220
..0022222222220.
.02222222222220.
.02222222222220.
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
022222222222200.
.022222222220...
..0022222200....
....000000......` ],
  [ wall, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
  [ portal, bitmap`
....000000000...
..002HHL0HH2000.
.00L00000200LL00
00005002555H60L0
00H2500000005550
05555555555550H0
000005H0HHH25050
00205LL260L0HH00
05L00L0HLL0H6500
00L0000LLHL000L0
0L25205000005550
0555550555005200
00050H50000L6000
..056000550HL00.
..0005H25550L0..
...0000000000...` ],
  [ salt, bitmap`
................
......0LL0......
.....0L00L0.....
.....000000.....
......0000......
.....1....1.....
.....122221.....
.....122221.....
.....122221.....
....12222221....
....12222221....
....12222221....
....12222221....
....12222221....
.....111111.....
................` ],
  [ pepper, bitmap`
................
......0LL0......
.....0L00L0.....
.....000000.....
......0000......
.....1....1.....
.....1CCCC1.....
.....1CCCC1.....
.....1CCCC1.....
....1CCCCCC1....
....1CCCCCC1....
....1CCCCCC1....
....1CCCCCC1....
....1CCCCCC1....
.....111111.....
................` ],
  [ upblack, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
....00000000....
..000LLLLLL000..
.00LLLLLLLLLL00.` ],
  [ downblack, bitmap`
0LLLLLLLLLLLL00.
00000LLLLLL000..
0...00000000....
................
................
................
................
................
................
................
................
................
................
................
................
................` ],
  [ leftblack, bitmap`
................
...............0
..............00
..............0L
.............00L
.............0LL
.............0LL
.............0LL
.............0LL
.............0LL
.............0LL
.............0LL
.............00L
..............0L
..............0L
.............000` ],
  [ rightblack, bitmap`
................
0...............
00..............
L0..............
L00.............
LL0.............
LL0.............
LL0.............
LL0.............
LL0.............
LL0.............
L00.............
L0..............
00..............
0...............
................` ],
  [ handle, bitmap`
............000L
...........000L0
..........000L00
.........000L000
........000L000.
.......000L000..
......000L000...
.....000L000....
....000L000.....
...000L000......
..000L000.......
..00L000........
..00000.........
...000..........
................
................` ],
)


let level = 0
const levels = [
  map`
wwwwwwwwwww
w...w.....w
p.w...w.w.w
www.www.w.w
w...w...wsw
w.wwwww.w.w
w.wr.w..www
w.ww.ww.w.e
w.....w...w
wwwwwwwwwww`,
  map`
wwwwwwwwwwww
w.ww...w..sw
w....w...www
ww.wwwww..ww
ww.w.w.ww..w
w..w....ww.w
w.www.w....w
w...w.w..www
w.w.w.wwww.p
wrw.w......w
wwwewwwwwwww`,
  map`
wwwwwwwwwwewww
w........w...w
w.w.www..w.wow
w.w.w.w.wwwwww
w.w...w......w
w.w.w.wwwwww.w
w.www.....w..w
w..w...w.ww.ww
ww.wwwww.w...w
w...wowr.www.w
w.w.w.wwww...w
wsw.w......w.w
wwwpwwwwwwwwww`,
  map`
wwwwwwpwwwwwwwww
w......w.......w
w.w.w.wwww.w.w.w
wsw.w....w.www.w
www.wwww.w...w.w
w.w...w..www.w.w
w.www.w.ww...w.w
w.w...w.w..w.w.w
w.w.wwwwww.www.w
w...w......w...w
w.www.wwwwww.www
w.w.....w....w.w
w.www.w.www.ww.e
w.....w..rw....w
wwwwwwwwwwwwwwww`,
  map`
........
.e......
........
...p....
........
........
........`,
  map`
..u..
.lbz.
.hdsr
.....`,
]

const currentLevel = levels[level];
setMap(levels[level])


setSolids([player, wall])

setPushables({
  [ player ]: []
})


onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})
onInput("j", () => {
  const currentLevel = levels[level];
  
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

let saltCollected = false;
let pepperCollected = false;

afterInput(() => {

  const portalNumber = tilesWith(player).length;
  const portalCovered = tilesWith(portal, player).length;

  if (portalCovered === portalNumber) {
    getFirst(player).x = 12;
    getFirst(player).y = 2;
  }

  const saltNumber = tilesWith(player).length;
  const saltCovered = tilesWith(salt, player).length;

  if (saltCovered === saltNumber) {
    saltCollected = true
    getFirst(salt).remove()
    playTune(melody)

  }

  const pepperNumber = tilesWith(player).length;
  const pepperCovered = tilesWith(pepper, player).length;

  if (pepperCovered === pepperNumber) {
    pepperCollected = true
    getFirst(pepper).remove()
    playTune(melody)
  }

  if (saltCollected && pepperCollected) {
        setSolids([player, wall]);
    } else {
        setSolids([player, wall, eggwhite]);
    }

  const targetNumber = tilesWith(eggwhite).length;
  const numberCovered = tilesWith(eggwhite, player).length;

  if (numberCovered === targetNumber) {
    level = level + 1;
    const currentLevel = levels[level];

    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("you win!", { y: 4, color: color`3` });
    }
  }
});