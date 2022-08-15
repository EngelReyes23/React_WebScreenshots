export const isDarkMode = () => {
  const themeOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDefinedTheme = 'theme' in localStorage;
  const themeLocal = localStorage.theme === 'dark';

  if (isDefinedTheme) return themeLocal;
  else return themeOS;
};

export const setDarkMode = (flag) => {
  if (flag) {
    document.querySelector('#root').classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.querySelector('#root').classList.remove('dark');
    localStorage.theme = 'light';
  }
};
