import { actualSong } from "./loadSong";
import { manageControls } from "./manageControls";
import { audio } from "../dom";

export const playSong = () => {
  if (actualSong !== null) {
    audio.play();
    manageControls();
  }
};
