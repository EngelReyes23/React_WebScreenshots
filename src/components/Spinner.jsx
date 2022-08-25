import './spinner.css';

export const Spinner = () => {
  return (
    <div
      className={
        'h-screen bg-gray-900 bg-opacity-50 z-20 absolute w-full grid place-content-center'
      }
    >
      <div className='cube [&>div]:border-black [&>div]:bg-black/25 [&>div]:dark:border-white [&>div]:dark:bg-white/25'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
