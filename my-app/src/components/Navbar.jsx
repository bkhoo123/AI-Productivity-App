import React from 'react'

const NavBar = ({title}) => {
  return (
    <div className="h-20 border-b-2 p-6">
        <div className="text-2xl font-semibold">
            {title}
        </div>
    </div>
  )
}

export default NavBar