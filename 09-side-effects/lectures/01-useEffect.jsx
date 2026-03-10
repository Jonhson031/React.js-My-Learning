// ? useEffect hook
// allows you to run side effects after React renders a component.

// A side effect is anything that interacts with the outside world.

/* Examples:
 - API requests
 - Local storage
 - Timers
 - Event listeners
 - Logging
 - DOM manipulation */

import { useEffect } from 'react';

useEffect(() => {
  // code to run after render
}, [dependencies]);



// 1. No array — runs after EVERY render
useEffect(() => {
  console.log('I run all the time');
});

// 2. Empty array — runs ONCE on mount only
useEffect(() => {
  console.log('I run once, like componentDidMount');
}, []);

// 3. With dependencies — runs when those values change
useEffect(() => {
  console.log('userId changed:', userId);
}, [userId]);


// ? Cleanup Function
// Some effects need to be cleaned up when the component unmounts or before the effect runs again — like event listeners or timers. You do this by returning a function:

// Event listener — cleaned up on unmount
useEffect(() => {
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize); // cleanup
  };
}, []);

// Timer — cleared before next effect or unmount
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(timer); // cleanup
}, []);