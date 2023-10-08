import ListShoppingList from '../components/ListShoppingList'  
import useWindowDimensions from '../utils/useWindowDeimensions';

// <ItemList items = {countries}/>

function Home() {
  
    const { width } = useWindowDimensions();

  return (
  
      <div className='flex flex-row'>
        <div className='bg-red-400 flex-1'><ListShoppingList/></div>
      { width > 500 && 
        <div className='bg-green-400 flex-1'>ShoppingList klone:</div>  
        } 
    </div>

  );
}

export default Home;

