// TODO: Empezar con la función de prevSong

import { loadSongs } from "./modules/playlist.modules/loadSongs.js";
import { audio, nextButton, playButton } from "./modules/dom.js";
import { playSong } from "./modules/player-functions.modules/playSong.js";
import { pauseSong } from "./modules/player-functions.modules/pauseSong.js";
import { nextSong } from "./modules/player-functions.modules/nextSong.js";

const main = () => {
  loadSongs();
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });

  nextButton.addEventListener("click", () => {
    nextSong();
  });
};

main();
