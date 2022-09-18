import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { useLocation } from 'wouter'

// Local imports
import { setDataAtom } from '../atoms/stateAtom'
import { resetUiStateAtom, setIsErrorAtom, setIsLoadingAtom, uiStateAtom } from '../atoms/uiAtoms'
import { generateScreenshot } from '../helpers/urlValidations'
import { Alert } from './Alert'

export const Form = () => {
  const [, navigate] = useLocation()

  const setData = useSetAtom(setDataAtom)
  const reset = useSetAtom(resetUiStateAtom)
  const setError = useSetAtom(setIsErrorAtom)
  const setLoading = useSetAtom(setIsLoadingAtom)

  const uiState = useAtomValue(uiStateAtom)
  const { isError, errorMsg } = uiState

  // const colorRef = useRef('')
  const urlRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    generateScreenshot(urlRef.current.value)
      .then((data) => {
        reset()
        setData(data)
        navigate('/result')
      })
      .catch((error) => {
        setError(error.message)
        urlRef.current.value = ''
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {isError && <Alert msg={errorMsg} />}
      <form
        onSubmit={handleSubmit}
        className='animate__animated animate__fadeIn relative top-36 w-full max-w-2xl px-5'
      >
        <h1 className='mb-10 select-none text-center text-4xl font-bold transition-colors duration-700 dark:text-white md:text-5xl'>
          Web Screenshots
        </h1>

        <div className='flex rounded-md shadow'>
          <label
            htmlFor='url'
            className='
        inline-flex cursor-pointer items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-gray-300 px-3 text-sm  text-gray-700 shadow-sm transition-colors duration-700 dark:border-gray-400 dark:bg-gray-400 dark:text-black'
          >
            https://
          </label>

          <input
            autoFocus
            // required
            type='text'
            id='url'
            className={`w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors duration-700 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:text-gray-200 md:py-3 ${
              isError && 'border-red-500 focus:ring-red-500'
            }`}
            name='url'
            placeholder='www.google.com'
            ref={urlRef}
          />
        </div>

        <button
          type='submit'
          className='mt-5 w-full rounded border-2 border-black bg-black px-4 py-2 font-bold text-white transition-colors duration-700 active:translate-y-0.5 dark:border-white dark:bg-white dark:text-black'
        >
          Capture
        </button>
      </form>
    </>
  )
}
