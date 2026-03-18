import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
import Navbar from './components/Navbar2'
import PreLoader from './components/PreLoader'
import Home from './pages/Home'
import Work from './pages/Work'
import Footer from './sections/Footer'

function AppLayout() {
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let timeoutId

    const hideLoader = () => {
      timeoutId = window.setTimeout(() => setIsLoading(false), 1400)
    }

    if (document.readyState === 'complete') {
      hideLoader()
    } else {
      window.addEventListener('load', hideLoader, { once: true })
    }

    return () => {
      window.removeEventListener('load', hideLoader)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <PreLoader isVisible={isLoading} />
      <Navbar />
      <main className={pathname === '/' ? '' : pathname === '/work' ? 'pt-28 bg-black text-white' : 'pt-28'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return <AppLayout />
}

export default App
