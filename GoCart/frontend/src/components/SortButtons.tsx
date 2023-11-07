import { useEffect, useState } from 'react'
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react'

interface SortButtonsProps {
  onSortAsc: () => void;
  onSortDesc: () => void;
}

function SortButtons(props: SortButtonsProps) {
  const [downIsClicked, setDownIsClicked] = useState(true)
  const [upIsClicked, setUpIsClicked] = useState(false)

  // Notify the parent component about the default descending order when the component mounts
  useEffect(() => {
    props.onSortAsc();
  }, []);

  function handleDownButtonClick() {
    setDownIsClicked(!downIsClicked)
    if (upIsClicked) {
      setUpIsClicked(!upIsClicked)
      props.onSortAsc()
    }
  }

  function handleUpButtonClick() {
    setUpIsClicked(!upIsClicked)
    if (downIsClicked) {
      setDownIsClicked(!downIsClicked)
      props.onSortDesc()
    }
  }

  return (
    <div>
      {/* Sort buttons */}
      <div className={'flex gap-2'}>
        <button className={`${downIsClicked ? 'btnClicked' : 'btn'}`} onClick={handleDownButtonClick}>
          <ArrowDownAZ size={30} />
        </button>
        <button className={`${upIsClicked ? 'btnClicked' : 'btn'}`} onClick={handleUpButtonClick}>
          <ArrowUpZA size={30} />
        </button>
      </div>
    </div>
  )
}

export default SortButtons
