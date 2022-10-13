import { progressSlider, audio } from "../dom";

export const setCurrentTime = () => {
  const seekTo = audio.duration * (progressSlider.value / 100);
  audio.currentTime = seekTo;

  console.log(progressSlider.value);
};
