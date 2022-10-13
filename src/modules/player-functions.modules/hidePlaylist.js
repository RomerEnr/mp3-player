import { toggleButton } from "../dom";

export const hidePlaylist = () => {
  const playlist = document.querySelector(".playlist");
  playlist.classList.toggle("hide");
  toggleButton.classList.toggle("fa-toggle-on");
};
