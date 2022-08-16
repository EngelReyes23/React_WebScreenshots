import { useEffect, useState } from 'react';

// Local Imports
import { Input } from './components/Input';
import { ToggleButton } from './components/ToggleButton';
import { isDarkMode, setDarkMode } from './helpers/darkMode';

function App() {
  const [toggle, setToggle] = useState(isDarkMode());

  const handleToggle = () => {
    setDarkMode(!toggle);
    setToggle(!toggle);
  };

  const handleInput = () => {
    let url = document.getElementById('url').value;
    document.getElementById('url').value = '';
    url = url.includes('http://') || url.includes('https://') ? url : `https://${url}`;

    const color = document.getElementById('color').value.replace('#', '');

    console.log(url, color);
  };

  useEffect(() => {
    setDarkMode(toggle);
  }, []);

  return (
    <div
      className={'h-screen grid place-content-start justify-center relative gap-4 dark:bg-gray-900'}
    >
      <h1 className={'top-3 text-center text-4xl font-semibold dark:text-white'}>
        Web ScreenShots
      </h1>
      <Input />
      <input type='color' id='color' className={'appearance-none'} />

      <ToggleButton toggle={toggle} handleToggle={handleToggle} />
      <button onClick={handleInput} className={'bg-indigo-600 px-4 py-2 text-white rounded-md'}>
        Capture
      </button>
    </div>
  );
}

export default App;
