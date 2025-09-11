//MIDI Pitch Numbers in an array, feel free to change to other midi note numbers
const midiPitches = [60, 62, 63, 67, 69, 72];

//Step 1


//Step 2

//Step 3


//-------------------------------------------FUNCTION DEFINITIONS----------------------------------
//Step 4






// Function to generate a random pitch (in Hz) from a given set of MIDI notes
const randomPitch = function() {
    // Pick a random MIDI note number from the midiPitches array
    let randoMidiNote = midiPitches[Math.floor(Math.random() * midiPitches.length)];

    // Convert the MIDI note number to frequency (Hz) using the formula
    // MIDI note 69 = A4 = 440 Hz, each semitone is 2^(1/12) times higher
    let newFreq = 440 * 2 ** ((randoMidiNote - 69) / 12);

    // Return the frequency value so it can be used in sound synthesis
    return newFreq;
}

//Step 5