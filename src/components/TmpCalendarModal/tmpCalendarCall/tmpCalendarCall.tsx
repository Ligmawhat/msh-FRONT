import React, { useState } from "react"
import { Modal } from "../../common/TmpModal/TmpModal"
import TmpCalendarModal from "../TmpCalendarModal"

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
        <TmpCalendarModal />
      </Modal>
      <button onClick={modalHandler}>call calendar</button>
    </>
  )
}

export default TmpCalendarCall
