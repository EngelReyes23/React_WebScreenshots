import { useEffect, useState } from 'react';

// Local Imports
import { Form } from './components/Form';
import { ToggleButton } from './components/ToggleButton';
import { isDarkMode, setDarkMode } from './helpers/darkMode';

function App() {
  const [toggle, setToggle] = useState(isDarkMode());

  const handleToggle = () => {
    setToggle((toggle) => {
      setDarkMode(!toggle);
      return !toggle;
    });
  };

  // const handleInput = (e) => {
  //   e.preventDefault();

  //   console.log(`Value of e:`, e);
  // };

  useEffect(() => {
    setDarkMode(toggle);
  }, []);

  return (
    <div className='h-screen flex bg-gray-100 flex-col items-center dark:bg-gray-900 transition-colors duration-700'>
      <ToggleButton toggle={toggle} handleToggle={handleToggle} />

      <Form />
    </div>
  );
}

export default App;
