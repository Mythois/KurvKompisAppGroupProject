import React from 'react'

interface ConfirmationModalProps {
  productName: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ productName }) => {
  return (
    <div className="modal" data-testid="confirmation-modal">
      <div className="modalContent">
        <p>"{productName}" has been added to the database!</p>
      </div>
    </div>
  )
}

export default ConfirmationModal
