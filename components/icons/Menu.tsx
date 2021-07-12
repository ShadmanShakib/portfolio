import React from 'react'

function Menu({...props}):JSX.Element {
    return (
        <svg {...props} width="16" height="10" viewBox="0 0 16 10">
        <title>Open mobile navigation</title>
        <g fill="var(--knockoutColor)" fillRule="evenodd">
          <rect y="8" width="16" height="2" rx="1"></rect>
          <rect y="4" width="16" height="2" rx="1"></rect>
          <rect width="16" height="2" rx="1"></rect>
        </g>
      </svg>
    )
}

export default Menu
