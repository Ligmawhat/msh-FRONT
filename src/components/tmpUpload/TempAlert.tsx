import React, { FC, useEffect, useState } from "react"

interface AlertProps {
  msg: any
  type: any
}

const Alert: FC<AlertProps> = ({ msg, type }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (msg) {
      setShow(true)
      setInterval(() => {
        setShow(false)
      }, 2000)
    }
  }, [msg])
  return <>{show && <div className={`alert alert-${type}`}>{msg}</div>}</>
}

export default Alert
