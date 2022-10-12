import { audio, playButton } from "../dom.js";

export const manageControls = () => {
  if (audio.paused) {
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  } else {
    playButton.classList.add("fa-pause");
    playButton.classList.remove("fa-play");
  }
};
