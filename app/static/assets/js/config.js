/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.
 * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).
 */

'use strict';

// JS global variables
let isDark = document.documentElement.classList.contains('dark-style');
let config = {
  colors: {
    primary: '#696cff',
    secondary: '#8592a3',
    success: '#71dd37',
    info: '#03c3ec',
    warning: '#ffab00',
    danger: '#ff3e1d',
    dark: '#233446',
    black: '#000',
    white: isDark ? '#2b2c40' : '#fff',
    body: isDark ? '#232333' : '#f4f5fb',
    headingColor: isDark ? '#d1d2de' : '#566a7f',
    axisColor: isDark ? '#7c7ea0' : '#a1acb8',
    borderColor: isDark ? '#434368' : '#eceef1'
  }
};
