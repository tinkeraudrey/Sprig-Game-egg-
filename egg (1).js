/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 2
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p";
const eggwhite = "e";
const wall = "w";
const portal = "o";

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
...0000000000...` ]
)

setSolids([player, wall])

let level = 0
const levels = [
  map`
wwwwwwwwwww
w...w.....w
p.w...w.w.w
www.www.w.w
w...w...w.w
w.wwwww.w.w
w.w..w..www
w.ww.ww.w.e
w.....w...w
wwwwwwwwwww`,
  map`
wwwwwwwwwwww
w.ww...w...w
w....w...www
ww.wwwww..ww
ww.w.w.ww..w
w..w....ww.w
w.www.w....w
w...w.w..www
w.w.w.wwww.p
w.w.w......w
wwwewwwwwwww`,
  map`
...........e..
.p............
.........o....
..............
..............
..............
..............
..............
..............
..............
.....o........
..............
..............`,
  map`
wwwwwwpwwwwwwwww
w......w.......w
w.w.w.wwww.w.w.w
w.w.w....w.www.w
www.wwww.w...w.w
w.w...w..www.w.w
w.www.w.ww...w.w
w.w...w.w..w.w.w
w.w.wwwwww.www.w
w...w......w...w
w.www.wwwwww.www
w.w.....w....w.w
w.www.w.www.ww.e
w.....w...w....w
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
........
.e......
........
...p....
........
........
........`,
]

const currentLevel = levels[level];
setMap(levels[level])

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

afterInput(() => {
  
  const portalNumber = tilesWith(player).length;
  
  const portalCovered = tilesWith(portal, player).length;

  if (portalCovered === portalNumber) {
    getFirst(player).x = 5;
    getFirst(player).y = 10;
  }
  
  const targetNumber = tilesWith(eggwhite).length;
  
  const numberCovered = tilesWith(eggwhite, player).length;

  // if the number of goals is the same as the number of goals covered
  // all goals are covered and we can go to the next level
  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    // otherwise, we have finished the last level, there is no level
    // after the last level
    if (currentLevel !== undefined) {
      // Function to create a 1-second pause
      
      setMap(currentLevel);
    } else {
      addText("you win!", { y: 4, color: color`3` });
    }
  }
});

