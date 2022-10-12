import { changeActiveClass } from "./changeActiveClass.js";
import { audio } from "../dom.js";
import { loadCover } from "./loadCover.js";
import { loadTitleAndAuthor } from "./loadTitleAndAuthor.js";
import { manageControls } from "./manageControls.js";
import { playSong } from "./playSong.js";
import { songs } from "../songs.js";

export let actualSong = null;

export const loadSong = (songIndex) => {
  if (songIndex !== actualSong) {
    changeActiveClass(actualSong, songIndex);
    actualSong = songIndex;
    audio.src = songs[songIndex].url;
    playSong();
    loadCover(songIndex);
    loadTitleAndAuthor(songIndex);
    manageControls();
  }
};
