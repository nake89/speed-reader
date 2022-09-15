console.log('start')
//asdasd
let text =
  'When I do front-end dev, I no longer run a local instance. I have one script, that build, uploads and does cache invalidation. And it takes less than 10 seconds. No more allowing localhost for CORS (or even worse everything). Everything is running in the cloud as close to production because it is running on the same provider, just on a different stage (dev instead of production).'

let el = document.getElementById('app')
el.style.display = 'none'
let startButton = document.getElementById('startButton')
let textBoxContainer = document.getElementById('textBoxContainer')
let i = 0
let textArr
startButton.addEventListener('click', () => {
  let textBox = document.getElementById('textBox').value
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
