import React from 'react'

export const Login = () => {
  return (
    <>
        <div className=' h-full-login flex items-center justify-center'>
            <div className=' bg-blue-300 p-4 flex flex-col items-center w-2/6 h-4/6'>
                <h3 className=' text-3xl py-4'>INICIAR SESION</h3>
                <form action="" className='w-full'>
                    <input type="text" className='form-input w-full'  />
                    <br />
                    <input type="text" className='form-input w-full'/>
                    <br />
                    <button>Enviar</button>
                </form>
                <p>Lorem ipsum dolor, sit</p>
            </div>      
        </div>
    </>
  )
}
