// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Made the componets for expose html
  const hornSelect=document.getElementById("horn-select");
  const hornImage=document.querySelector("#expose img");
  const audio=document.querySelector("audio");
  const volumeSlider=document.getElementById("volume");
  const volumeIcon=document.querySelector("#volume-controls img");
  const playButton=document.querySelector("button");

  const jsConfetti = new JSConfetti();

  //Change image based on the options
  hornSelect.addEventListener("change", () => {
    const horn=hornSelect.value;
    hornImage.src=`assets/images/${horn}.svg`;
    hornImage.alt=horn.replace("-", " ");
    audio.src=`assets/audio/${horn}.mp3`;
  });

  //Add the functionailty so that the sound icon changes based on the volume level 
  volumeSlider.addEventListener("input", () => {
    const volume = parseInt(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0){
      volumeIcon.src ="assets/icons/volume-level-0.svg";
      volumeIcon.alt ="Volume level 0";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });

  //when on the party horn option add confetti to screen when click
  playButton.addEventListener("click", () => {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
  
}