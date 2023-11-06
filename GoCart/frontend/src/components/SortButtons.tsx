import React, { useState } from 'react'
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react'

function SortButtons() {
  const [downIsClicked, setDownIsClicked] = useState(false)
  const [upIsClicked, setUpIsClicked] = useState(false)

  function handleDownButtonClick() {
    setDownIsClicked(!downIsClicked)
    if (upIsClicked) {
      setUpIsClicked(!upIsClicked)
    }
  }

  function handleUpButtonClick() {
    setUpIsClicked(!upIsClicked)
    if (downIsClicked) {
      setDownIsClicked(!downIsClicked)
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
