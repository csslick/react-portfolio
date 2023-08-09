import { useEffect } from "react" // 1
import lenis from './utils/lenis' // 2
import link from './utils/link' // 2
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import './css/style.scss'

function App() {

  useEffect(() => {
      lenis();
      link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
