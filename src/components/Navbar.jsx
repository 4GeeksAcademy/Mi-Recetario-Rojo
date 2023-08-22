import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row h-16 justify-between p-8 items-center bg-red-500 w-full '>
        <h2 className='text-lg font-bold'>
            Libro Rojo
        </h2>
        <button>
            <i className='fa-solid fa-plus'></i>
        </button>
    </div>
  )
}

export default Navbar