// The details about items in the given ShoppingList as well as , where we want functionality for going to the next/previous item

import React from 'react';
import ItemDetails from '../components/ItemDetails';

interface ItemDetailsPageProps {
    showArrowButtons: boolean;
}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ showArrowButtons }) => {

    
    return (
        <div>
            <ItemDetails itemName={''} />
        </div>
    );
}

export default ItemDetailsPage;
