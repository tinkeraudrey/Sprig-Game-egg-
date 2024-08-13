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
....000000......` ]
)

setSolids([])

let level = 0
const levels = [
  map`
........
........
........
...p..e.
........
........
........`
]

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
  
})