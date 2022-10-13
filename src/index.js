import { loadSongs } from "./modules/playlist.modules/loadSongs.js";
import { audio, nextButton, playButton, prevButton, progressSlider, toggleButton } from "./modules/dom.js";
import { playSong } from "./modules/player-functions.modules/playSong.js";
import { pauseSong } from "./modules/player-functions.modules/pauseSong.js";
import { nextSong } from "./modules/player-functions.modules/nextSong.js";
import { prevSong } from "./modules/player-functions.modules/prevSong.js";
import { setCurrentTime } from "./modules/player-functions.modules/setCurrentTime.js";
import { hidePlaylist } from "./modules/player-functions.modules/hidePlaylist.js";
import { loadSong } from "./modules/player-functions.modules/loadSong.js";
import { generateRandomQuote } from "./modules/generateRandomQuote.js";

const main = () => {
  loadSongs();
  loadSong(0);
  generateRandomQuote();
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

  prevButton.addEventListener("click", () => {
    prevSong();
  });

  progressSlider.addEventListener("change", () => {
    setCurrentTime();
  }
  );

  toggleButton.addEventListener("click", () => {
    hidePlaylist();
  });
};

main();
