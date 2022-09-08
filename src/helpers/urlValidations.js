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

    return { urlImage: url, urlDownload: URL.createObjectURL(blob) }
  } catch (error) {
    throw new Error(error)
  }
}

// genera un color aleatorio en hexadecimal
const generateRandomColor = () => Math.floor(Math.random() * 16777215).toString(16)

// retorna la url de la imagen generada y url de descarga
export const generateScreenshot = async (url, color = 'ffffff') => {
  try {
    if (!url) throw new Error('Url is required')
    color = generateRandomColor()

    // le antepone https a la url en caso de no tenerlo
    if (!url.includes('http') || !url.includes('https')) url = `https://${url}`

    if (urlValidator(url)) return await generateDownloadUrl(`${apiUrl}${url}&color=${color}`)

    throw new Error('Url is not valid')
  } catch (error) {
    throw new Error(error)
  }
}
