import { useEffect, useState } from 'react'
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react'

interface SortButtonsProps {
  onSortAsc: () => void;
  onSortDesc: () => void;
}

function SortButtons(props: SortButtonsProps) {
  // State variable to track the ascending button click state
  const [isAscClicked, setIsAscClicked] = useState(true);

  useEffect(() => {
    // Notify the parent component about the default descending order when the component mounts
    props.onSortAsc();
  }, []);

  // Handle ascending button click
  function handleAscClick() {
    if (!isAscClicked) {
      setIsAscClicked(true);
      props.onSortAsc(); // Notify the parent component about ascending sort
    }
  }

  // Handle descending button click
  function handleDescClick() {
    if (isAscClicked) {
      setIsAscClicked(false);
      props.onSortDesc(); // Notify the parent component about descending sort
    }
  }

  return (
    <div>
      {/* Sort buttons */}
      <div className={'flex gap-2'}>
        <button className={isAscClicked ? 'btnClicked' : 'btn'} onClick={handleAscClick}>
          <ArrowDownAZ size={30} />
        </button>
        <button className={!isAscClicked ? 'btnClicked' : 'btn'} onClick={handleDescClick}>
          <ArrowUpZA size={30} />
        </button>
      </div>
    </div>
  )
}

export default SortButtons
