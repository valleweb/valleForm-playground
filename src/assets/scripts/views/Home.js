/* eslint max-len: 0 */

import React from 'react';
import useInput from '../hooks/useInput';
//import useKeyboard from '../hooks/useKeyboard';

/**
 * TODO: Add JSDocs.
 * 
 */

const Home = () => {

  const jsonData = useInput();


  // useKeyboard(32, () => {
  //   //console.log(jsonData.value);
  // });


  return (
    <div className = 'play'>

      <div className = 'play__input'>

        <div className = 'input__title'>
          Insert the json code bellow.
          <button className = 'btn btn--small btn--inactive' disabled>
            Copy
          </button>
        </div>

        <textarea 
          id = 'jsonData'
          className = 'input__field'
          autoFocus
          { ...jsonData }
        >
        </textarea>

      </div>

      <div className = 'play__output'>
        <div className = 'body'></div>
      </div>

      <div className = 'play__footer'>
  
        <div className = 'play__footer__left'>
        
          <button className = 'btn'>
            <svg className = 'btn__icon btn__icon--left'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/>
            </svg>
            Generate
          </button>
          
          <div className = 'info'>
            <span className = 'info__text'> valleForm version: 0.1.0 </span>
            <span className = 'info__text'> Data structure version: 0.1.0 </span>
          </div>

        </div>
    
        <div className = 'play__footer__right'>

          <button className = 'btn btn--inactive' disabled> 
            <svg 
              className = 'btn__icon btn__icon--left'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z'/>
            </svg>
            Import .json
          </button>

          <button className = 'btn btn--inactive' disabled>
            <svg
              className = 'btn__icon btn__icon--left'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z'/></svg>
              Export .json 
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;