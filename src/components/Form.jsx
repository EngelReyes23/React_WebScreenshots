export const Form = () => {
  return (
    <form className='relative top-10 md:top-36 w-full px-5 max-w-3xl'>
      <h1
        className={
          'text-center text-4xl font-bold lg:text-5xl dark:text-white mb-10 select-none transition-colors duration-700'
        }
      >
        Web Screenshots
      </h1>

      <div className='flex shadow-xl rounded-md'>
        <label
          htmlFor='url'
          className='
        cursor-pointer rounded-l-md inline-flex  items-center px-3 border-t bg-gray-100 dark:bg-gray-300 border-l border-b  border-gray-300 text-gray-500 dark:text-gray-600 shadow-sm text-sm transition-colors duration-700'
        >
          https://
        </label>

        <input
          type='text'
          id='url'
          className='rounded-r-lg flex-1 appearance-none border border-gray-300  w-full px-4 py-3 bg-white dark:bg-gray-100  text-gray-900 placeholder-gray-400  focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent transition-colors duration-700'
          name='url'
          placeholder='www.google.com'
        />
      </div>
    </form>
  );
};
