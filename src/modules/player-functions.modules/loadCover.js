import { songs } from "../songs.js";

export const loadCover = (songIndex) => {
  const cover = document.querySelector(".art-box");
  cover.style.backgroundImage = `url("${songs[songIndex].image}")`;
};
