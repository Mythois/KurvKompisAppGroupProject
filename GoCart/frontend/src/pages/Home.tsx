/* The home page of the application. */

import React, { useEffect, useState } from 'react';
import ListShoppingList from '../components/ListShoppingList';
import useWindowDimensions from '../utils/useWindowDimensions';


function Home() {

  const { width } = useWindowDimensions(); // Get the window width

  return (
    <div className='flex flex-row'>

      <ListShoppingList/>

      {width > 500 && (
        <div className='bg-green-400 flex-1'>
          {/* Content to be displayed when the window width is greater than 500 pixels */}
        </div>
      )}
    </div>
  );
}

export default Home;
