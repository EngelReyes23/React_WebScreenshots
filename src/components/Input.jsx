export const Input = () => {
  return (
    <div className='flex relative '>
      <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 dark:text-gray-600 shadow-sm text-sm dark:bg-gray-200'>
        https://
      </span>
      <input
        type='text'
        id='url'
        className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent'
        name='url'
        placeholder='www.google.com'
      />
    </div>
  );
};
