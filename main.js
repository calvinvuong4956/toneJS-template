// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

// introDialog setup
introDialog.showModal();

// dialogClose setup
dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
  introDialog.close();
  //   when you close the dialog, the audio starts.
  Tone.start();
}

// ================================================================

// tone synth init (instrument)
const synth = new Tone.Synth().toDestination();

// ----------------------------------------------------------------

// playButton setup
// playButton.addEventListener("click", playNote);

// play sound with tone
function playNote() {
  //   synth.triggerAttackRelease("C4", "8n");
  // ("note", "note-length")
}

// ----------------------------------------------------------------

// separate attack/release functions with mouseDown/Up
function startNote() {
  synth.triggerAttack("C1");
}
function endNote() {
  synth.triggerRelease();
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
