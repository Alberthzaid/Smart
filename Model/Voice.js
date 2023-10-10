const voz = (texto)=>{
    var u = new SpeechSynthesisUtterance();
    u.text = texto;
    u.lang = 'es-US';
    u.rate = 1;
    u.onend = function(event){console.log(event)}
    speechSynthesis.speak(u);
}

export {voz}