import { useAtomValue } from 'jotai'

// Local Imports
import { isDarkModeAtom } from './atoms/uiAtoms'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  const isDarkMode = useAtomValue(isDarkModeAtom)

  return (
    <div
      className={`${
        isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'
      } transition-colors duration-700`}
    >
      <AppRoutes />
    </div>
  )
}

export default App
