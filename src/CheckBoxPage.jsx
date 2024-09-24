import React from 'react'

export default function CheckBoxPage() {
  return (
    <>
    <div className=' bg-slate-800 h-screen flex flex-col justify-center items-center'>
        <div className=' w-2/5 bg-red-700 mx-auto h-1/2 rounded-lg flex justify-center items-center'>
        <input type='checkbox' id='checkbox' />
        <label htmlFor='checkbox'>Check me out</label>
        </div>
    </div>
    </>
  )
}
