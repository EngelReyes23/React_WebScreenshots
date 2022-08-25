import { useContext } from 'react';
import { useLocation } from 'wouter';
import { context } from '../context';

export const Result = () => {
  const {
    data: { urlImage, urlDownload },
  } = useContext(context);

  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/', { replace: true });
  };

  // TODO: ubicar botones

  return (
    <div className='relative animate__animated animate__fadeIn'>
      <button
        onClick={handleBack}
        className='bg-purple-500 px-4 py-2 text-white z-10 rounded absolute top-5 left-2'
      >
        Back
      </button>
      <div className='max-w-2xl p-3 relative top-20 object-cover'>
        <img src={urlImage} className='w-full object-cover rounded-md' alt={urlImage} />
      </div>
      <a
        className='bg-violet-500 px-4 py-2 z-10 text-white font-semibold relative top-32 rounded hover:bg-violet-600 active:bg-violet-700 mx-auto'
        download={'WebScreenshot-img'}
        href={urlDownload}
      >
        Download
      </a>
    </div>
  );
};
