/*
  This file description is provided by ChatGPT.
  This file defines a custom React hook called 'useWindowDimensions'.
  It allows components to access and respond to changes in the dimensions of the browser window.

  The 'useWindowDimensions' hook provides an object with 'width' and 'height' properties
  representing the current dimensions of the window. It also updates these values automatically
  when the window is resized.

  Usage (TypeScript):
  1. Import 'useWindowDimensions' into your TypeScript React components.
  2. Call 'useWindowDimensions' within your component to access window dimensions.
  3. The component will automatically re-render whenever the window size changes.

  Example usage within a TypeScript component:
  ```typescript
  import useWindowDimensions from './useWindowDimensions'; // Adjust the import path as needed

  function MyComponent() {
    const { width, height } = useWindowDimensions();

    // Your component logic here, utilizing 'width' and 'height'
  }*/


import { useState, useEffect } from 'react';


// getWindowDimensions() retrieves and returns the current window dimensions.
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


// useWindowDimensions() is a custom hook called.
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    // handleResize() updates 'windowDimensions' with the latest dimensions of the window.
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Add an event listener for the 'resize' event that calls 'handleResize' when the window is resized.
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts.

  return windowDimensions;
}