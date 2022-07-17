const readline = require('readline')

console.clear()
console.log('==========================================================================================')
console.log('o                        This game will random number from 0-9                           o')
console.log('o    You will guess the next number is more, less or equal compare to current number     o')
console.log('o                        You get 1 score when you\'re correct                             o')
console.log('o                And lost 1 live when you\'re wrong, you have 5 lives to lose             o')
console.log('o                               How much score you can do?                               o')
console.log('o                                    Game Started !!                                     o')
console.log('==========================================================================================')

const generateRandomNumber = () => {
  // Todo: Create a logic to return integer between 0 - 9.
  return 0
}

let currentNumber = generateRandomNumber()
let liveRemain = 5
let score = 0

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
const waitForUserInput = () => {
  rl.question(
    `Current number is: ${currentNumber}\nGuess the next number is more, less or equal?\n(type m for more, l for less and e for equal): `,
    (input) => {
      const isGameOver = calculate(input)
      if (isGameOver) {
        rl.close()
      } else {
        waitForUserInput()
      }
  })
}

const calculate = (input) => {
  console.log('\n=============')
  console.log(`Current number is: ${currentNumber}`)
  console.log(`You guess: [${input}]`)

  const nextNumber = generateRandomNumber()
  console.log(`And the next number is: ${nextNumber}`)

  // Todo: create a logic to compare between currentNumber and nextNumber.
  // Log 'You are correct!' if it's correct answer, increase score by 1
  // Log 'You are wrong!' if it's incorrect, decrease life by 1
  // Return true when live remain is equal to 0 to end the game, otherwise return false

  currentNumber = nextNumber
  console.log('\n=============')
  console.log('\nNext question')
}

waitForUserInput()
