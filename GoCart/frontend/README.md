# Functionality for components, pages & utils

## Apollo client

- We use apollo client to send queries from frontend to backend.

## Components

- Item: Represents an item in an itemList, with the props itemName (string, name of the Item), increment (boolean, whether to display the increment button), decrement (boolean, whether to display the decrement button) and quantity (boolean, whether to display the quantity field of the Item).

- ItemDetails: Displays details of a food item and allows for editing if specified (although the editable version is not fully implemented yet), with the props itemName (string, name of the Item) and editable (boolean, whether the component should be editable).

- ItemList: Renders a list of "items". Props: items (array), an array of objects representing items to display.

- Navbar: A navigation bar component, that makes it possible to navigate between different pages in the app. Props: title (string).

- Searchbar: A reusable input field for filtering items. We decided to use the same searchbar component as in project_1. Props: onFilter, a callback function that will be called when the filter value changes.

- NavButton: A reusable navigation button, that sends you to another page when being clicked. Props: Title (string, title/text for the button) and route (string, the route to navigate to when the button is clicked).

- DeleteButton: Not yet implemented, but is supposed to be a reusable delete button, for deleting a user made object.

- ArrowButton: A reusable button that represents going from one object to another, either forward or backward. Not yet implemented.

- ListShoppingListelement: Component representing an element in a ListShoppingList, a list of shopping lists. Props: ListName (string, the name of the shopping list), items (string[] and a string array of items).

- ShoppingList: The site that shows details about the shoppinglist with the specific title you choose to click on. Props: title (String, the title of the shopping list), items (string[], a string array of items) and id (string, an id that makes each shopping list stand out).

- ListShoppingList: Functional component that renders a list of 'ListShoppingListElements', with functionality such as creating and deleteing shopping lists in localstorage.

- FilterDropDown: The FilterDropdown component is used to create a filter for items based on categories. It displays a dropdown menu with radio buttons for selecting different categories. When a category is selected, the component triggers a callback function to notify the parent component of the selected category. Props: onCategoryChange (Function, a callback function that will be called when the filter category changes. It should accept a single argument, the selected category).

- SortButtons: The SortButtons component provides buttons for sorting items in ascending and descending order. It allows users to toggle between sorting options. When a sorting option is selected, the component triggers callback functions to notify the parent component about the chosen sorting order. Props: onSortAsc (function, a callback function that is called when the ascending sort button is clicked) and onSortDesc (function, a callback function that is called when the descending sort button is clicked).

## Pages

- Home: The home page of the application.

- ItemRegister: Either editable or none-editable. The none-editable represents a register for every item in the database, where you get the opportunity to go to a site for adding items to the database. The editable page represents the page where you add items from the register to your shopping list.

- ItemDailsPage: The details about items in the given ShoppingList as well as in the register, where we either want functionality for going to the next/previous item (in your shopping list), or just display general information about the chosen item in the register.

- ShoppingListPage: A page meant for mobile view only, while the shopping list will be displayed in the home page in desktop view. The page that shows the details about a spescific shopping list.

- AddItemToRegister: The site where you get the opportunity to add items to the register, containing the item info you wish. Not yet implemented.

## Utils

- mockup

  - GoCart.Products.json: Our data set as a json file.

- queryFunctions

  - getProduct.ts: query for getting products.

- shoppingListStorage: Functions for saving and loading the local shopping list storage.

- useWindowDimensions: Allows components to access and respond to changes in the dimensions of the browser window.
