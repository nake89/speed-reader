console.log('start.')

let el = document.getElementById('app')
el.style.display = 'none'
let startButton = document.getElementById('start-button')
let textBoxContainer = document.getElementById('text-box-container')
let textBox = document.getElementById('text-box')
let wordCountDiv = document.getElementById('word-count')
let i = 0
let textArr
getWordCount()

startButton.addEventListener('click', () => {
  let textBoxValue = textBox.value
  el.style.display = 'inline-block'
  textBoxContainer.style.display = 'none'
  textArr = textBoxValue.split(' ')
  let speedReaderInterval = setInterval(() => {
    speedRead()
  }, 400)
  if (i == textArr.length) {
    clearInterval(speedReaderInterval)
  }
})

textBox.addEventListener('input', () => {
  getWordCount()
})

function getWordCount() {
  let wordCount = textBox.value.split(' ').length
  wordCountDiv.innerHTML = `Word count: ${wordCount} <br> WPM speed is: 300.<br>This text will read in ${(
    wordCount / 5
  ).toFixed()} seconds.`
}

function speedRead() {
  el.innerText = textArr[i] ?? ''
  i++
}
