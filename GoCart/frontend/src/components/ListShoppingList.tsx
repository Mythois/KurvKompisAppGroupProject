// // Currently not used

// // Functional component that renders a list of 'ListShoppingListElements'

// // import ListShoppingListElement from './ListShoppingListElement'
// import { Link } from 'react-router-dom'

// import { useState, useEffect } from 'react'

// import { loadShoppingLists, saveShoppingLists } from '../utils/shoppingListStorage'

// interface shoppingList {
//   title: string
//   items: string[]
//   id: string
// }

// function ListShoppingList() {
//   // State to store shopping lists and the title of a new list
//   const [shoppingLists, setShoppingLists] = useState(loadShoppingLists())
//   const [newListTitle, setNewListTitle] = useState('')

//   useEffect(() => {
//     // Load shopping lists from storage when the component mounts
//     const loadedLists = loadShoppingLists()
//     setShoppingLists(loadedLists)
//   }, [])

//   function createShoppingList() {
//     if (newListTitle.trim() === '') {
//       return
//     }

//     const newList = { id: shoppingLists.length, title: newListTitle, items: [] } // Use the length of shoppingLists as the ID
//     setShoppingLists((prevLists) => [...prevLists, newList] as shoppingList[]) // Update the shopping lists state
//     saveShoppingLists([...shoppingLists, newList] as shoppingList[]) // Save the updated shopping lists to storage
//     setNewListTitle('')
//   }

//   function deleteShoppingList(idToDelete: number) {
//     const updatedLists = shoppingLists.filter((_list, index) => index !== idToDelete) // Filter out the shopping list to delete

//     setShoppingLists(updatedLists) // Update the shopping lists state
//     saveShoppingLists(updatedLists) // Save the updated shopping lists to storage
//   }

//   return (
//     <div className="flex-1">
//       <div className="grid gap-4 md:grid-cols-2 m-2">
//         <input
//           className="inputfield span-col-1"
//           type="text"
//           placeholder="Enter title"
//           value={newListTitle}
//           onChange={(e) => setNewListTitle(e.target.value)}
//         />
//         <button onClick={createShoppingList} className="btn w-max mx-auto span-col-1">
//           Create Shopping List
//         </button>
//       </div>
//       <div className="mt-4">
//         {shoppingLists.map((shoppingList, index) => (
//           <div key={index} className="card flex justify-between">
//             <div>
//               <Link to={`/ShoppingListPage/${index}`}>
//                 <ListShoppingListElement listName={shoppingList.title} items={shoppingList.items} />
//               </Link>
//             </div>
//             <div className=" flex flex-col justify-end">
//               <button onClick={() => deleteShoppingList(index)} className="btn text-xs h-9">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ListShoppingList
