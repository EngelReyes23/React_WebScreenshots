import { useRef } from 'react'

// Local imports

export const Form = () => {
  // const { setData, setIsLoading, setIsError } = useContext(context)
  // const [, navigate] = useLocation()

  // const colorRef = useRef('')
  const urlRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Muestra el spinner
    // setIsLoading(true)

    // generateScreenshot(urlRef.current.value, colorRef.current.value)
    //   .then((rep) => {
    //     setData(rep)
    //     navigate('/result')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //     setIsError(true)
    //   })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='animate__animated animate__fadeIn relative top-36 w-full px-5 max-w-2xl'
    >
      <h1 className='text-center font-bold text-5xl dark:text-white mb-10 select-none transition-colors duration-700'>
        Web Screenshots
      </h1>

      <div className='flex shadow rounded-md'>
        <label
          htmlFor='url'
          className='
        cursor-pointer rounded-l-md inline-flex  items-center px-3 border-t bg-gray-300 dark:bg-gray-400 dark:border-gray-400 border-l border-b  border-gray-300 text-gray-700 dark:text-black shadow-sm text-sm transition-colors duration-700'
        >
          https://
        </label>

        <input
          required
          type='text'
          id='url'
          className='rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-400  w-full px-4 py-3 bg-white dark:bg-gray-700  text-gray-900 dark:text-gray-200 placeholder-gray-400   focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent transition-colors duration-700'
          name='url'
          placeholder='www.google.com'
          ref={urlRef}
        />
      </div>
      <button
        type='submit'
        className='border-2 border-black hover:text-white dark:border-white dark:text-white px-4 py-2 w-full mt-5 rounded hover:bg-black dark:hover:bg-white dark:hover:text-black font-bold transition-colors'
      >
        Capture
      </button>
    </form>
  )
}
