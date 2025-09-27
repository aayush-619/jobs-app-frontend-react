import React from 'react'

const Card = ({children , bg='bg-white'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md border border-gray-200`}>
      {children}
    </div>
  )
}

export default Card