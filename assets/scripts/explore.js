// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Created the varaibles for the components on html
  const voiceSelection = document.getElementById('voice-select');
  const playButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');

  const synth = window.speechSynthesis;
 let voices = [];


 // made the voice list using the speech synthesis documentation
 function populateVoiceList() {
   voices = synth.getVoices();

   voices.forEach((voice, index) => {
     const option = document.createElement('option');
     option.textContent = `${voice.name} (${voice.lang})`;
     option.value = index;
     voiceSelection.appendChild(option);
   });
 }

}
