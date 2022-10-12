import { audio } from "./dom.js";
import { songs } from "./songs.js";

let actualSong = null;

export const playSong = (songIndex) => {
  if (songIndex !== actualSong) {
    changeActiveClass(actualSong, songIndex);
    actualSong = songIndex;
    audio.src = songs[songIndex].url;
    audio.play();
    loadCover(songIndex);
    loadTitleAndAuthor(songIndex);
  }
};

const changeActiveClass = (lastIndex, newIndex) => {
  const clickcableSongs = document.querySelectorAll("a");
  if (lastIndex !== null) {
    clickcableSongs[lastIndex].classList.remove("active");
  }
  clickcableSongs[newIndex].classList.add("active");
};

const loadCover = (songIndex) => {
  const cover = document.querySelector(".art-box");
  cover.style.backgroundImage = `url("${songs[songIndex].image}")`;
};

const loadTitleAndAuthor = (songIndex) => {
  const title = document.querySelector(".artist-data h1");
  const author = document.querySelector(".artist-data h2");

  title.textContent = songs[songIndex].title;
  author.textContent = songs[songIndex].artist;
};
