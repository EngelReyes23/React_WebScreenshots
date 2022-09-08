import './spinner.css'

export const Spinner = () => {
  return (
    <div className='h-screen bg-gray-900 bg-opacity-50 z-20 absolute w-full grid place-content-center'>
      <div className='sk-chase [&>div]:before:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
      </div>
    </div>
  )
}
