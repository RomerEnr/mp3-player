import { audio } from "../dom";
import { manageControls } from "./manageControls";

export const pauseSong = () => {
  audio.pause();
  manageControls();
};
