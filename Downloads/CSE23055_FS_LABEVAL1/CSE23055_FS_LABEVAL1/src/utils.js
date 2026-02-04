// Audio utility for text-to-speech functionality
 const speak = (text) => {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel any currently playing speech immediately
  // window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0; // Set to 1.0 for clear, standard speed
  utterance.pitch = 1.0; // Standard pitch for natural pronunciation
  utterance.lang = 'en-US';

  window.speechSynthesis.speak(utterance);
};

export default speak;