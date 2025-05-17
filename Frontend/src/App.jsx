import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'




function App() {
  return (
    <>
<div className=' dark:bg-slate-950 dark:text-white'>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/Signup' element={<Signup/>} />
   </Routes>
</div>

    </>
  )
}

export default App
