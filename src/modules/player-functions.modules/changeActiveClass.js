export const changeActiveClass = (lastIndex, newIndex) => {
  const clickcableSongs = document.querySelectorAll("a");
  if (lastIndex !== null) {
    clickcableSongs[lastIndex].classList.remove("active");
  }
  clickcableSongs[newIndex].classList.add("active");
};
