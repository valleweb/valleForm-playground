import { useEffect } from 'react';

/**
 * The callback for executes when specific key are triggered.
 * @callback keyDownCallback
 * 
 */

/**
 * Custom React hook for handler keyboard inputs.
 * @module hooks/useKeyboard
 *
 * @param {number} key - Keyboard keycode.
 * @param {keyDownCallback} cb - Callback for execute.
 * 
 */

const useKeyboard = (key, cb) => {

  useEffect(() => {

    /**
     * Verify pressed keycode for execute callback.
     * 
     */

    const keyboardHandler = event => {
      const pressKey = event.which === key || event.keyCode === key;
      if (pressKey) {
        event.preventDefault();
        cb();
      }
    };

    /**
     * Add event listener when component are mount.
     * 
     */

    window.addEventListener('keydown', keyboardHandler);

    /**
     * Remove event listener when component are unmount.
     * 
     */

    return () => window.removeEventListener('keydown', keyboardHandler);

  });

};

export default useKeyboard;