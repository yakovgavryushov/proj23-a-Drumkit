
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops current key to replay it
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if not a transition
    this.classList.remove('playing')
    console.log(this)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);//