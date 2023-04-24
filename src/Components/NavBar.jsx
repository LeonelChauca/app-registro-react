import React from 'react'

export const NavBar = () => {
  return (
    <>
        <div className=' container mx-auto font-mono font-bold flex justify-between text-lg p-4'>
            <div className=' flex items-center text-xl'>
                <h1 className=' '>APP-REGISTRO</h1>
            </div>
            <div className='flex text-white font-extralight'>
                <button className='mx-3 px-2 py-1 rounded-lg bg-blue-500 hover:bg-orange-400 transition-colors animate__animated animate__backInDown'>INICIAR SESION</button>
                <button className='mx-3 px-2 py-1 rounded-lg bg-blue-500 hover:bg-orange-400 transition-colors animate__animated animate__backInDown'>CREAR CUENTA</button>
            </div>
        </div>
    </>
  )
}
