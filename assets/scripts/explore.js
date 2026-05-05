// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('#voice-select');
  const textarea = document.querySelector('#text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('#explore img');

  const synth = window.speechSynthesis;

  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  button.addEventListener('click', () => {
    if (synth.speaking) return;

    const utterance = new SpeechSynthesisUtterance(textarea.value);

    const selectedVoice = synth.getVoices().find(v => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
      face.alt = 'Smiling open face';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
      face.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
