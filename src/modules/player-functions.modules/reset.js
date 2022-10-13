import { progressSlider, currTime, totalDuration } from "../dom";

export const reset = () => {
  progressSlider.value = 0;
  currTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
};
