import { Link } from 'wouter'

export const NotFound = () => {
  return (
    <div className='absolute h-screen w-full select-none overflow-hidden bg-indigo-900'>
      <img
        src='https://www.tailwind-kit.com/images/landscape/8.svg'
        className='absolute h-full w-full object-cover'
        alt='Landscape'
      />

      <div className='absolute inset-0 bg-black opacity-25' />
      <div className='container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40'>
        <Link to='/' replace type='button' className='grid items-center'>
          <span
            className='material-symbols-outlined absolute left-0 top-0 z-10 m-5 cursor-pointer rounded-full border
           border-pink-700 bg-transparent p-2.5 text-pink-700 transition-colors hover:bg-pink-700 hover:text-white active:bg-pink-900'
          >
            arrow_back
          </span>
        </Link>
        <div className='relative z-10 flex w-full flex-col items-center font-mono'>
          <h1 className='mt-4 text-center text-5xl font-extrabold leading-tight text-white'>
            You&#x27;re alone here
          </h1>
          <p className='my-44 animate-pulse text-8xl font-extrabold text-white'>404</p>
        </div>
      </div>
    </div>
  )
}
