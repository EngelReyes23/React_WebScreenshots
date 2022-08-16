const regexUrl =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/;

const apiUrl =
  'https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=';

export const urlValidator = (url) => regexUrl.test(url);

// obtiene los datos ingresados por el usuario
const getData = () => {
  let url = document.getElementById('url').value; // obtiene la url del input
  document.getElementById('url').value = ''; // limpia el input

  // obtiene el color elegido por el usuario caso contrario devuelve color blanco
  const color = document.getElementById('color')?.value.replace('#', '') || 'ffffff';

  // le antepone https a la url en caso de no tenerlo
  if (!url.includes('http') || !url.includes('https')) url = `http://${url}`;

  return { url, color };
};

// genera la url para descargar el screenshot
const generateDownloadUrl = async (url) => {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return {
      imageUrl: url,
      downloadUrl: URL.createObjectURL(blob),
    };
  } catch (err) {
    return new Error(`Catch error ${err}`);
  }
};

// retorna la url de la imagen generada y url de descarga
export const generateScreenshot = async () => {
  try {
    const { url, color } = getData(); // obtiene los datos ingresados por el usuario
    if (urlValidator(url)) return await generateDownloadUrl(`${apiUrl}${url}&color=${color}`);
    return new Error(`Invalid url: ${url}`);
  } catch (error) {
    return new Error(`Catch error ${error}`);
  }
};
