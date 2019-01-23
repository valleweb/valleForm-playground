import React from 'react';
import useInput from '../hooks/useInput';
import useKeyboard from '../hooks/useKeyboard';

/**
 * TODO: Add JSDocs.
 * 
 */

const Home = () => {

  const jsonData = useInput();

  useKeyboard(13, () => {
    console.log(jsonData.value);
  });

  return (
    <div>
  
      <h1> valleForm Playground </h1>

      <div>
        <label htmlFor = 'jsonData'>Json</label>
        <textarea 
          id = 'jsonData'
          { ...jsonData }
        >
        </textarea>
      </div>

    </div>
  );
};

export default Home;