import { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom";


function App() {
  let location = useLocation();
  return (
    <>
      <div className='flex justify-center'>
       {location.pathname == "/" ? <p className='text-white'>Root!</p> : <Outlet />}
      </div>
    </>
  )
}

export default App
