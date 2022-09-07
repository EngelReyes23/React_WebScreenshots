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
      className='fixed z-10 top-0 right-0 m-5 text-yellow-500 dark:text-white text-xl transition-colors rounded-full flex items-center p-2  dark:border-white/50 hover:bg-yellow-500 hover:text-white dark:hover:text-black dark:hover:bg-white'
    >
      <span className='material-symbols-outlined'>{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
    </button>
  )
}
