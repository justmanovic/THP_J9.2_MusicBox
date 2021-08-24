let boom = document.querySelector("#audio81")
let clap = document.querySelector("#audio83")
let hihat = document.querySelector("#audio68")
let kick = document.querySelector("#audio70")
let openhat = document.querySelector("#audio71")

console.log('salut')

document.addEventListener('keydown', (e) => {
  console.log('touche appuyée')
  const audio = document.querySelector(`#audio${e.keyCode}`)
  const key = document.querySelector(`#k${e.keyCode}`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play()
  key.classList.add('play')
})
