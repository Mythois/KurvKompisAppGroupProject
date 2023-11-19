import React from 'react'
import { X } from 'lucide-react'

interface ConfirmationModalProps {
  productName: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ productName }) => {
  console.log('modal rendered')
  return (
    <div className="modal">
      {/* <button onClick={onClose}>
        <X size={24} />
      </button> */}
      <div className="modalContent">
        <p>{productName} has been added to the database!</p>
      </div>
    </div>
  )
}

export default ConfirmationModal
