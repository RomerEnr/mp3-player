import { songs } from "../songs";
import { actualSong, loadSong } from "./loadSong";

export const nextSong = () => {
  const newIndex = actualSong + 1;
  if (newIndex > songs.length - 1) {
    loadSong(0);
  } else {
    loadSong(newIndex);
  }
};
