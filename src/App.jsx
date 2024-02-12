
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import { Home, Researcher, FullStack, NotFound, Contact } from './pages'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Underconstruction from './pages/underconstruction/Underconstruction';

const App = () => {

  const [mode, setMode] = useState('light')

  const [viewMenu, setViewMenu] = useState(false);

  const handleMode = () => {
    if (localStorage.getItem('mode')) {
      setMode(localStorage.getItem('mode'))
      document.documentElement.classList.add(mode)

    } else {
      localStorage.setItem("mode", mode)
      document.documentElement.classList.add(mode)
    }
  }

  useEffect(() => handleMode(), [mode])


  return (
    <BrowserRouter>
      <Navbar
        mode={mode}
        setMode={setMode}
        viewMenu={viewMenu}
        setViewMenu={setViewMenu} />

      <Routes>
        <Route path='3d-portfolio/' element={<Home mode={mode} />} />
        <Route path='3d-portfolio/researcher' element={<Researcher />} />
        <Route path='3d-portfolio/fullstack' element={<FullStack />} />
        <Route path='3d-portfolio/video' element={<Underconstruction />} />
        <Route path='3d-portfolio/contact' element={<Contact />} />
        <Route path='3d-portfolio/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App