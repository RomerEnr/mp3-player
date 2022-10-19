import { songs } from "../songs.js";
import { getColorByImage } from "./getColorByImage.js";
import { progressSlider, mp3Player } from "../dom.js";

export const loadCover = (songIndex) => {
  const cover = document.querySelector(".art-box");
  const url = songs[songIndex].image;
  cover.style.backgroundImage = `url("${url}")`;
  getColorByImage(url)
    .then(predominantRGB => setColor(predominantRGB));
};

const setColor = ([r, g, b]) => {
  const rbgColor = `rgb(${r}, ${g}, ${b})`;
  progressSlider.style.setProperty("--highlight-color", rbgColor);
  mp3Player.style.setProperty("--highlight-color", rbgColor);
};
