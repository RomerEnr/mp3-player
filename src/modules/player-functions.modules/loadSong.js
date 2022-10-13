import { changeActiveClass } from "./changeActiveClass.js";
import { audio } from "../dom.js";
import { loadCover } from "./loadCover.js";
import { loadTitleAndAuthor } from "./loadTitleAndAuthor.js";
import { manageControls } from "./manageControls.js";
import { playSong } from "./playSong.js";
import { songs } from "../songs.js";
import { reset } from "./reset.js";
import { setUpdate } from "./setUpdate.js";
import { nextSong } from "./nextSong.js";

export let actualSong = null;
let updateTimer;
export const loadSong = (songIndex) => {
  if (songIndex !== actualSong) {
    clearInterval(updateTimer);
    reset();

    changeActiveClass(actualSong, songIndex);
    actualSong = songIndex;
    audio.src = songs[songIndex].url;
    playSong();
    loadCover(songIndex);
    loadTitleAndAuthor(songIndex);
    manageControls();

    updateTimer = setInterval(setUpdate, 1000);
    audio.addEventListener("ended", nextSong);
  }
};
