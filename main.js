import {voz} from './Model/Voice.js'
import { Greet,
  NextGreet,
  NextGreet2,
  NextGreet3,
  NextGreet4} from './Model/Dialog.js';
const btn = document.getElementById('button');
emailjs.init('CN1BPNphBpoBJrICB')
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_9kvj93n';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


