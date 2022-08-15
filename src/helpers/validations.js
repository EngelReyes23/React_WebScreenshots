const regex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/;
const apiUrl =
  'https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=';

export const urlValidator = (url) => regex.test(url);

export const generateScreenshot = async (url, color = '0000ff') => {
  try {
    return await generateDownloadUrl(apiUrl + url + '&color=' + color);
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
      url: URL.createObjectURL(blob),
      image: url,
    };
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
