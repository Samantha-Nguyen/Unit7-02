// connect the button to the calculate function
document.getElementById('button').addEventListener('click', calculate)

let userInput = 0

function calculate () {
  // get the number that user typed turned into a integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // looks if userInput is positive or negative
  if (userInput >= 0) {
    document.getElementById('answer').innerHTML = 'This integer is positive'
  } else if (userInput <= 0) {
    document.getElementById('answer').innerHTML = 'This integer is negative'
  } else {
    document.getElementById('answer').innerHTML = 'Please enter a valid integer'
  }
}
