import React from 'react'

interface ModalProps {
  text: string
}

function Modal({ text }: ModalProps) {
  return (
    <div className="modal">
      <div className="modalContent">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Modal
