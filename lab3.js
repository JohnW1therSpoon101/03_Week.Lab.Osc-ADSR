//MIDI Pitch Numbers in an array, feel free to change to other midi note numbers
const midiPitches = [60, 62, 63, 67, 69, 72];

//Step 1
const ctx = new AudioContext();

//Step 2: Master Gain
const mastergain = new GainNode(ctx);
mastergain.gain.value = 0.5;
//Step 3 connect to destination
osc.connect(mastergain);
mastergain.connect(ctx.destination);
//-------------------------------------------FUNCTION DEFINITIONS----------------------------------
//Step 4
const osc = new OscillatorNode(ctx);
const note = function () {
  let osc = OscillatorNode(ctx);
  let adsr = GainNode(ctx);

  adsr.gain.value = 0;
  osc.frequency.value = randomPitch();
  osc.connect(adsr);
  adsr.connect(mastergain);
  osc.start();
  //ENVELOPE EVENT
  const now = ctx.currentTime;
  adsr.gain.cancelScheduledValues(now);
  adsr.gain.setValueAtTime(0.0, now)
  adsr.gain.linearRampToValueAtTime(0.25, now + 0.25);
  adsr.gain.linearRampToValueAtTime(0.0, now + 3.25);
  osc.stop(0.0, now + 3.30)
};

// Function to generate a random pitch (in Hz) from a given set of MIDI notes
const randomPitch = function () {
  // Pick a random MIDI note number from the midiPitches array
  let randoMidiNote =
    midiPitches[Math.floor(Math.random() * midiPitches.length)];

  // Convert the MIDI note number to frequency (Hz) using the formula
  // MIDI note 69 = A4 = 440 Hz, each semitone is 2^(1/12) times higher
  let newFreq = 440 * 2 ** ((randoMidiNote - 69) / 12);

  // Return the frequency value so it can be used in sound synthesis
  return newFreq;
};

//Step 5 adding the button

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 3</title>
    <script type="module" src="lab3.js"></script>
</head>
<body>
    <button id="playButton">Play a New Note</button>

</body>
</html>