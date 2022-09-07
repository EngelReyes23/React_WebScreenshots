import { useAtomValue } from 'jotai'

// Local Imports
import { isDarkModeAtom } from './atoms/uiAtoms'
import { AppRoutes } from './routes/AppRoutes'

function App () {
  const isDarkMode = useAtomValue(isDarkModeAtom)

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <AppRoutes />
    </div>
  )
}

export default App
