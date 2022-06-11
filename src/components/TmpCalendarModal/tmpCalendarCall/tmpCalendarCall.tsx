import React, { useState } from "react"
import { Modal } from "../../common/TmpModal/TmpModal"

const TmpCalendarCall = () => {
  const [openModal, setOpenModal] = useState(false)

  function modalHandler() {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Modal
        shown={openModal}
        close={() => {
          setOpenModal(false)
        }}
      >
        <TmpCalendarCall />
      </Modal>
      <button onClick={modalHandler}>call calendar</button>
    </>
  )
}

export default TmpCalendarCall
