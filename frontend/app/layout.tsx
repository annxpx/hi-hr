import React from 'react'
import "./globals.css";

const LayoutPage = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutPage
