/* The home page of the application. */

import React, { useEffect, useState } from 'react';
import ListShoppingList from '../components/ListShoppingList';
import useWindowDimensions from '../utils/useWindowDimensions';
import ShoppingList from '../components/ShoppingList';


function Home() {

  const { width } = useWindowDimensions(); // Get the window width

  return (
    <div className="grid gap-8 lg:gap-16 mt-8 md:grid-cols-2">
      <div className="md:col-span-1 mb-5">
        <ListShoppingList/>
      </div>
      <div className="md:col-span-1">
        <ShoppingList title={'test'} id={'0'} items={[]}/>
      </div>

    </div>
  );
}

export default Home;
