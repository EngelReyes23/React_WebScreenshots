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
        <Link
          to='/'
          replace
          type='button'
          className='absolute left-0 top-0 m-5 xl: bg-transparent z-10 text-pink-700 hover:bg-pink-700 active:bg-pink-900 hover:text-white transition-colors rounded-full border border-pink-700 p-3 cursor-pointer '
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5 rotate-180'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span className='sr-only'>Icon description</span>
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
