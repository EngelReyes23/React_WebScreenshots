/* Verifica si existe algún tema definido en el localStorage y lo aplica
en caso contrario aplica el tema actual del SO */
export const isDarkMode = () => {
  // verifica si el modo esta activado en el SO
  const themeOS = window.matchMedia('(prefers-color-scheme: dark)').matches

  // verifica si existe un tema en el localStorage
  const isDefinedTheme = 'theme' in window.localStorage

  // verifica si el tema oscuro esta activado en el localStorage
  const themeLocal = window.localStorage.theme === 'dark'

  // retorna el tema definido por el usuario, caso contrario el tema del SO
  return isDefinedTheme ? themeLocal : themeOS
}

// Establece el tema oscuro o claro en el localStorage
export const setDarkMode = (flag) => {
  if (flag) {
    document.querySelector('#root').classList.add('dark')
    window.localStorage.theme = 'dark'
  } else {
    document.querySelector('#root').classList.remove('dark')
    window.localStorage.theme = 'light'
  }
}
