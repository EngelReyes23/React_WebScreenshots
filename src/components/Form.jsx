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
    <form
      onSubmit={handleSubmit}
      className='animate__animated animate__fadeIn relative top-36 w-full px-5 max-w-2xl'
    >
      <h1 className='text-center font-bold text-4xl md:text-5xl dark:text-white mb-10 select-none transition-colors duration-700'>
        Web Screenshots
      </h1>
      {isError && <Alert msg={errorMsg} />}

      <div className='flex shadow rounded-md'>
        <label
          htmlFor='url'
          className='
        cursor-pointer rounded-l-md inline-flex  items-center px-3 border-t bg-gray-300 dark:bg-gray-400 dark:border-gray-400 border-l border-b  border-gray-300 text-gray-700 dark:text-black shadow-sm text-sm transition-colors duration-700'
        >
          https://
        </label>

        <input
          autoFocus
          // required
          type='text'
          id='url'
          className={`rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-400 w-full px-4 py-2 md:py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors duration-700 ${
            isError && 'focus:ring-red-500 border-red-500'
          }`}
          name='url'
          placeholder='www.google.com'
          ref={urlRef}
        />
      </div>

      <button
        type='submit'
        className='border-2 active:translate-y-0.5 border-black text-white dark:border-white px-4 py-2 w-full mt-5 rounded bg-black dark:bg-white dark:text-black font-bold transition-colors duration-700'
      >
        Capture
      </button>
    </form>
  )
}
