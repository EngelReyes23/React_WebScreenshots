import { useSetAtom } from 'jotai'
import { useLocation } from 'wouter'
import { resetUiStateAtom } from '../atoms/uiAtoms'

export const Error = ({ errorMsg }) => {
  const [, setLocation] = useLocation()
  const resetState = useSetAtom(resetUiStateAtom)

  const handleBack = () => {
    resetState()
    setLocation('/', { replace: true })
  }

  return (
    <>
      <h1 className='text-4xl text-white font-bold'>Error</h1>
      <h2 className='text-3xl absolute top-0 bottom-0 left-0 right-0 text-white mx-auto'>
        {errorMsg}
      </h2>

      <button
        onClick={handleBack}
        className='transition-colors top-0 left-0 m-5 absolute hover:bg-black hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white rounded-full flex items-center p-2'
      >
        <span className='material-symbols-outlined'>arrow_back</span>
      </button>
    </>
  )
}
