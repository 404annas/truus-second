import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ClickCursor from './components/ClickCursor'
import Home from './pages/Home'
import Work from './pages/Work'
import Footer from './sections/Footer'

function AppLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <ClickCursor />
      <Navbar />
      <main className={pathname === '/' ? '' : 'pt-28'}>
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
