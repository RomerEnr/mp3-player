import { generateRandomQuote } from "../generateRandomQuote";
import { songs } from "../songs";
import { actualSong, loadSong } from "./loadSong";

export const prevSong = () => {
  generateRandomQuote();
  const newIndex = actualSong - 1;
  if (newIndex < 0) {
    loadSong(songs.length - 1);
  } else {
    loadSong(newIndex);
  }
};
