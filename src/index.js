// credit plusjade.com/think-data/rock-paper-scissors/
const GAME_TRUTH = {
  'rock': {
    'scissors': 'WIN',
    'paper': 'LOSE',
    'rock': 'TIE'
  },
  'paper': {
    'rock': 'WIN',
    'scissors': 'LOSE',
    'paper': 'TIE'
  },
  'scissors': {
    'paper': 'WIN',
    'rock': 'LOSE',
    'scissors': 'TIE'
  }
}

const play = function (moveOne, moveTwo) {
  moveOne = moveOne.toString().toLowerCase()
  moveTwo = moveTwo.toString().toLowerCase()

  const eitherMoveIsntRockPaperOrScissors = !GAME_TRUTH[moveOne] || !GAME_TRUTH[moveTwo]
  if (eitherMoveIsntRockPaperOrScissors) throw new Error(`Invalid moves: ${moveOne} ${moveTwo}`)

  return GAME_TRUTH[moveOne][moveTwo]
}

const message = function (pOne, pTwo) {
  if (!pOne.name) pOne.name = 'Player One'
  if (!pTwo.name) pTwo.name = 'Player Two'

  pOne.outcome = play(pOne.move, pTwo.move)
  pTwo.outcome = play(pTwo.move, pOne.move)

  if (pOne.outcome === 'TIE') return `${pOne.name} (${pOne.move}) vs ${pTwo.name} (${pTwo.move}) it's a TIE!`
  return `${pOne.name} (${pOne.move}) ${pOne.outcome}! vs ${pTwo.name} (${pTwo.move}) ${pTwo.outcome}!`

}

module.exports = { play, message }
