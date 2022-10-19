import ColorThief from "colorthief/dist/color-thief.mjs";
const colorThief = new ColorThief();

const createImage = (url) => {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject(new Error("Hubo un error cargando la imagen")));
  });
  return promise;
};

export const getColorByImage = async(url) => {
  const img = await createImage(url);
  const predominantRGB = await colorThief.getColor(img);
  return predominantRGB;
};

export const getPaletteByImage = async(url, colorCount = 3) => {
  const img = await createImage(url);
  const predominantsRGB = await colorThief.getPalette(img, colorCount);
  return predominantsRGB;
};
