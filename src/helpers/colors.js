// genera colores aleatorios en hexadecimal dependiendo del numero de colores
export const generateRandomColors = (numColors) => {
  const colorList = [];

  for (let i = 0; i < numColors; i++) {
    colorList.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }

  return colorList;
};
