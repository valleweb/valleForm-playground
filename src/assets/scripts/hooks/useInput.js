import { useState } from 'react';

/**
 * Custom React hook for <input /> value data binding.
 * @module hooks/useInput
 *
 * @param {string} initialValue - Initial text for binding.
 *
 * @typedef  {object} InputProps
 * @property {string} value - Current <input /> value.
 * @property {object} onChange - Event handler for get value and set state.
 *
 * @returns {data} - <input /> value and onChange props.
 * 
 */

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  /**
   * Get and set <input /> value and set state.
   * 
   */

  const handleValue = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleValue
  };
};

export default useInput;