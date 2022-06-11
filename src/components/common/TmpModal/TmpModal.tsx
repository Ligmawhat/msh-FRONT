import React, { FC } from "react"
import "./TmpModal.scss"

interface ModalProps {
  children: any
  shown: boolean
  close: () => void
}

export const Modal: FC<ModalProps> = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close()
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation()
        }}
      >
        {/*<button onClick={close}>Close</button>*/}
        {children}
      </div>
    </div>
  ) : null
}
