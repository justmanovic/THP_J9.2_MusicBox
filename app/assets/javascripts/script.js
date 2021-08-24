let boom = document.getElementById("audio81")
let clap = document.getElementById("audio83")
let hihat = document.getElementById("audio68")
let kick = document.getElementById("audio70")
let openhat = document.getElementById("audio71")

console.log('salut')

document.addEventListener('keydown', (e) => {
  console.log('touche appuyée')
  const audio = document.getElementById(`audio${e.keyCode}`)
  const key = document.getElementById(`k${e.keyCode}`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play()
  key.classList.add('play')
})
