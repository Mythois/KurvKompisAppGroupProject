// Storage functions for shopping lists

interface ShoppingList {
    id: string;
    title: string;
    items: string[];
  }
  
  function saveShoppingLists(shoppingLists: ShoppingList[]) {
    localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
  }
  
  function loadShoppingLists(): ShoppingList[] {
    const storedLists = localStorage.getItem('shoppingLists');
    return storedLists ? JSON.parse(storedLists) : [];
  }
  
  export { saveShoppingLists, loadShoppingLists };
  