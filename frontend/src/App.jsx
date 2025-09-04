import { HashRouter   as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx'
import Agence from './pages/agence.jsx'
import Projects from './pages/projects.jsx'

import FullScreenNav from './components/Navigation/FullScreenNav.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'


const App = () => {
  return (
  <Router>
    <div className='overflow-x-hidden'>

      <FullScreenNav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/FullScreen' element={<FullScreenNav/>}/>
        <Route path='/Agency' element={<Agence/>}/>
        <Route path='/Works' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
