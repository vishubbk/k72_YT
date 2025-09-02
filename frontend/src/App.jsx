import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Agence from './pages/agence.jsx'
import Projects from './pages/projects.jsx'

import FullScreenNav from './components/Navigation/FullScreenNav.jsx'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
    
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/FullScreen' element={<FullScreenNav/>}/>
        <Route path='/Agency' element={<Agence/>}/>
        <Route path='/Works' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
