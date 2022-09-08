import { useAtomValue, useSetAtom } from 'jotai'
import { isDarkModeAtom, toggleDarkModeAtom } from '../atoms/uiAtoms'

export const ToggleButton = () => {
  const isDarkMode = useAtomValue(isDarkModeAtom)
  const toggleDarkMode = useSetAtom(toggleDarkModeAtom)

  return (
    <button
      onClick={toggleDarkMode}
      id='theme-toggle'
      type='button'
      className='fixed top-0 right-0 z-10 m-5 flex items-center rounded-full p-2 text-xl text-yellow-500 transition-colors hover:bg-yellow-500  hover:text-white dark:border-white/50 dark:text-white dark:hover:bg-white dark:hover:text-black'
    >
      <span className='material-symbols-outlined'>{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
    </button>
  )
}
