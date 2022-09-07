import { useAtomValue, useSetAtom } from 'jotai'
import { useLocation } from 'wouter'

// Local imports
import { resetStateAtom, stateAtom } from '../atoms/stateAtom'
import { resetUiStateAtom, setIsLoadingAtom, uiStateAtom } from '../atoms/uiAtoms'
import { Error } from '../pages/Error'

export const Result = () => {
  const { errorMsg, isError, isLoading } = useAtomValue(uiStateAtom)
  const { urlDownload, urlImage } = useAtomValue(stateAtom)

  const setIsLoading = useSetAtom(setIsLoadingAtom)
  const resetUiState = useSetAtom(resetUiStateAtom)
  const resetState = useSetAtom(resetStateAtom)

  const [, setLocation] = useLocation()

  const handleBack = () => {
    resetUiState()
    resetState()
    setLocation('/', { replace: true })
  }

  if (!urlDownload && !isError) setLocation('/', { replace: true })

  if (isError) return <Error errorMsg={errorMsg} />

  return (
    <div className={`${isLoading ? 'hidden' : ''} animate__animated animate__fadeIn`}>
      <button
        onClick={handleBack}
        className='transition-colors top-0 left-0 m-5 absolute hover:bg-black hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white rounded-full flex items-center p-2'
      >
        <span className='material-symbols-outlined'>arrow_back</span>
      </button>
      <div className='max-w-2xl p-3 relative top-20 object-cover'>
        <img
          onLoad={() => setIsLoading(false)}
          src={urlImage}
          className='w-full object-cover rounded-md'
          alt={urlImage}
        />
      </div>
      <a
        className='border-2 border-black dark:border-white px-4 py-2 z-10 dark:text-white font-semibold relative top-32 rounded hover:bg-black transition-colors hover:text-white dark:hover:bg-white dark:hover:text-black mx-auto flex items-center gap-x-1 max-w-fit'
        download='WebScreenshot-img'
        href={urlDownload}
      >
        <span className='material-symbols-outlined'>download</span> Download
      </a>
    </div>
  )
}
