const regexUrl =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/

const apiUrl =
  'https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url='

export const urlValidator = (url) => regexUrl.test(url)

// genera la url para descargar el screenshot
const generateDownloadUrl = async (url) => {
  try {
    const res = await fetch(url)
    const blob = await res.blob()
    return {
      urlImage: url,
      urlDownload: URL.createObjectURL(blob)
    }
  } catch (err) {
    return new Error(`Catch error ${err}`)
  }
}

// retorna la url de la imagen generada y url de descarga
export const generateScreenshot = async (url, color = 'ffffff') => {
  try {
    if (!url) throw new Error('Url is required')

    // le antepone https a la url en caso de no tenerlo
    if (!url.includes('http') || !url.includes('https')) url = `http://${url}`

    return urlValidator(url)
      ? await generateDownloadUrl(`${apiUrl}${url}&color=${color}`)
      : new Error('Url is not valid')
  } catch (error) {
    throw new Error(`Catch error ${error}`)
  }
}
