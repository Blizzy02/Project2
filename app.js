const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()

}




pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? "0" + (i+1) : (i +1)
    const newUrl = "ART151\Project 2\piano-keys-sound\key" + number + ".wav"
    pianoKey.addEventListener('click',() => playSound(newUrl))
})