// The register for every item in the database, where you get the opportunity to go to a site for adding items to the database

import React, { useState, useEffect } from 'react';
import { getFoodData, Food } from '../utils/mockup/mockup';
import { Searchbar } from '../components/Searchbar';
import ItemList from '../components/ItemList'; 
import NavButton from '../components/NavButton';

interface ItemRegisterProps {
    editable: boolean;
}

const ItemRegister: React.FC<ItemRegisterProps> = ({ editable }) => {
    const [filter, setFilter] = useState("");
    const [foodData, setFoodData] = useState<Food[]>([]);

    useEffect(() => {
        // Fetch the data from mockup once when the component mounts
        const data = getFoodData();
        // Convert the object to an array of Food[]
        const foodArray: Food[] = Object.values(data).flatMap((items) => items);
        setFoodData(foodArray);
    }, []);

    // Filter the food items based on the search query
    const filteredItems = foodData.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Map filtered items to objects that include all props
    // Define the itemPropsList based on the "editable" prop
    const itemPropsList = editable
        ? filteredItems.map((item) => ({
              itemName: item.name,
              increment: true,
              decrement: true,
              quantity: true,
          }))
        : filteredItems.map((item) => ({
              itemName: item.name,
              increment: false,
              decrement: false,
              quantity: false,
          }));
    
    return (
        <div>
            {/* Render the Searchbar component with the filter callback */}
            <Searchbar onFilter={(value: React.SetStateAction<string>) => setFilter(value)} />

            {/* Render the ItemList component with the extracted item names */}
            <ItemList items={itemPropsList} />

            {/* Add the NavButton component in the bottom right corner */}
            <div className="button-container flex justify-end">
                <NavButton route="/addItemToRegister" title={"Add item to register"} />
            </div>
        </div>
    );
}

export default ItemRegister;
