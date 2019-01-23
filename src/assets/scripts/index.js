import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './shell/Shell.js';

/**
 * DOM element for render the React app.
 * 
 */

const root = document.getElementById('root');

/**
 * First app render.
 * 
 */

ReactDOM.render(<Shell /> ,root);

/**
 * Register the serviceWorkers config file.
 * 
 */

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorkers.js')
//   });
// }