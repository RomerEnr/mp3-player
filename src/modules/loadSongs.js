import { songs } from "./songs.js";
import { playSong } from "./playSong.js";

export const loadSongs = () => {
  songs.forEach((song, i) => {
    const clickcableSong = document.createElement("a");
    const songList = document.querySelector(".playlist-list");
    const songItem = document.createElement("li");

    clickcableSong.textContent = `${i + 1}. ${song.title} - ${song.artist}`;
    clickcableSong.href = "#";

    clickcableSong.addEventListener("click", () => {
      playSong(i);
    });

    songItem.appendChild(clickcableSong);
    songList.appendChild(songItem);
  });
};
