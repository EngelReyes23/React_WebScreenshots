const regex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/;

const apiUrl =
  'https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=';

export const urlValidator = (url) => regex.test(url);

const getData = () => {
  let url = document.getElementById('url').value;
  const color = document.getElementById('color')?.value.replace('#', '') || 'ffffff';
  document.getElementById('url').value = '';

  if (!url.includes('http') || !url.includes('https')) url = `http://${url}`;

  return { url, color };
};

export const generateScreenshot = async () => {
  try {
    const { url, color } = getData();
    if (urlValidator(url)) return await generateDownloadUrl(apiUrl + url + '&color=' + color);
    return new Error('Invalid url');
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

// genera la url para descargar el screenshot
const generateDownloadUrl = async (url) => {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return {
      download: URL.createObjectURL(blob),
      url,
    };
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
