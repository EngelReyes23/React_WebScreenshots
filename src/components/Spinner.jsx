import './spinner.css'

export const Spinner = () => (
  <div className='absolute z-20 grid h-screen w-screen place-content-center bg-gray-900 bg-opacity-50'>
    <div className='sk-chase from-green-300 via-blue-500 to-purple-600 [&>div]:before:bg-gradient-to-r'>
      <div className='sk-chase-dot' />
      <div className='sk-chase-dot' />
      <div className='sk-chase-dot' />
      <div className='sk-chase-dot' />
      <div className='sk-chase-dot' />
      <div className='sk-chase-dot' />
    </div>
  </div>
)
