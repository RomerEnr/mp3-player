import { songs } from "../songs.js";

export const loadTitleAndAuthor = (songIndex) => {
  const title = document.querySelector(".artist-data h1");
  const author = document.querySelector(".artist-data h2");

  title.textContent = songs[songIndex].title;
  author.textContent = songs[songIndex].artist;
};
