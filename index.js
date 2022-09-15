console.log('start.')

let el = document.getElementById('app')
el.style.display = 'none'
let startButton = document.getElementById('start-button')
let textBoxContainer = document.getElementById('text-box-container')
let i = 0
let textArr
startButton.addEventListener('click', () => {
  let textBox = document.getElementById('text-box').value
  el.style.display = 'inline-block'
  textBoxContainer.style.display = 'none'
  textArr = textBox.split(' ')
  let speedReaderInterval = setInterval(() => {
    speedRead()
  }, 400)
  if (i == textArr.length) {
    clearInterval(speedReaderInterval)
  }
})
function speedRead() {
  el.innerText = textArr[i] ?? ''
  i++
}
