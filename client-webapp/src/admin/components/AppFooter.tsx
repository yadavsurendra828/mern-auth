import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <CFooter>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
        Brown Ohaver
        </a>
        <span className="ms-1">&copy; {year} Brown Ohaver.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
