import { Link } from 'wouter'

export const NotFound = () => {
  return (
    <div className='bg-indigo-900 absolute w-full overflow-hidden h-screen select-none'>
      <img
        src='https://www.tailwind-kit.com/images/landscape/8.svg'
        className='absolute h-full w-full object-cover'
        alt='Landscape'
      />

      <div className='inset-0 bg-black opacity-25 absolute' />
      <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
        <Link to='/' replace type='button' className='grid items-center'>
          <span
            className='material-symbols-outlined absolute left-0 top-0 m-5 bg-transparent z-10 text-pink-700 hover:bg-pink-700
           active:bg-pink-900 hover:text-white transition-colors rounded-full border border-pink-700 cursor-pointer p-2.5'
          >
            arrow_back
          </span>
        </Link>
        <div className='w-full font-mono flex flex-col items-center relative z-10'>
          <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4'>
            You&#x27;re alone here
          </h1>
          <p className='font-extrabold text-8xl my-44 text-white animate-pulse'>404</p>
        </div>
      </div>
    </div>
  )
}
