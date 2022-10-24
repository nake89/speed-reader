console.log("start.");

let WPM = 300;
let debugDiv = document.getElementById("debug");
//debugDiv.innerText = interval;
let el = document.getElementById("app");
el.style.display = "none";
let startButton = document.getElementById("start-button");
let textBoxContainer = document.getElementById("text-box-container");
let textBox = document.getElementById("text-box");
let wordCountDiv = document.getElementById("word-count");
let i = 0;
let textArr;
getWordCount();

let wpmDropdown = document.getElementById("wpm");
wpmDropdown.onchange = function () {
  WPM = Number(this.value);
  document.getElementById("wpmNum").innerText = this.value;
};

startButton.addEventListener("click", () => {
  let textBoxValue = textBox.value;
  el.style.display = "inline-block";
  textBoxContainer.style.display = "none";
  textArr = textBoxValue.split(" ");
  let interval = (1 / (WPM / 60)) * 1000;
  let speedReaderInterval = setInterval(() => {
    speedRead();
  }, interval);
  if (i == textArr.length) {
    clearInterval(speedReaderInterval);
  }
});

textBox.addEventListener("input", () => {
  getWordCount();
});

function getWordCount() {
  let wordCount = textBox.value.split(" ").length;
  wordCountDiv.innerHTML = `Word count: ${wordCount} <br> WPM speed is: <span id="wpmNum">300</span>.<br>This text will read in ${(
    wordCount / 5
  ).toFixed()} seconds.`;
}

function speedRead() {
  el.innerText = textArr[i] ?? "";
  i++;
}
