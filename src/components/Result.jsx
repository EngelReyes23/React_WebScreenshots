import { useAtomValue, useSetAtom } from 'jotai'
import { useLocation } from 'wouter'

// Local imports
import { resetStateAtom, stateAtom } from '../atoms/stateAtom'
import { resetUiStateAtom, setIsLoadingAtom, uiStateAtom } from '../atoms/uiAtoms'

export const Result = () => {
  const { isError, isLoading } = useAtomValue(uiStateAtom)
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

  return (
    <div className={`${isLoading ? 'hidden' : ''} animate__animated animate__fadeIn`}>
      <button
        onClick={handleBack}
        className='absolute top-0 left-0 m-5 flex items-center rounded-full p-2 transition-colors hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black'
      >
        <span className='material-symbols-outlined'>arrow_back</span>
      </button>
      <div className='relative top-20 max-w-2xl object-cover p-3'>
        <img
          onLoad={() => setIsLoading(false)}
          src={urlImage}
          className='w-full rounded-md object-cover'
          alt={urlImage}
        />
      </div>
      <a
        className='relative top-24 z-10 mx-auto flex max-w-fit items-center gap-x-1 rounded border-2 border-black bg-black px-4 py-2  font-semibold text-white transition-colors active:translate-y-0.5 dark:border-white dark:bg-white dark:text-black'
        download='WebScreenshot-img'
        href={urlDownload}
      >
        <span className='material-symbols-outlined'>download</span> Download
      </a>
    </div>
  )
}
