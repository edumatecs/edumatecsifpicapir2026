import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Programacao from './pages/Programacao/Programacao'
import GruposTrabalho from './pages/GruposTrabalho/GruposTrabalho'
import Palestrantes from './pages/Palestrantes/Palestrantes'
import Minicursos from './pages/Minicursos/Minicursos'
import Oficinas from './pages/Oficinas/Oficinas'
import Anais from './pages/Anais/Anais'
import Memorias from './pages/Memorias/Memorias'


function App() {
  return (
    <BrowserRouter basename="/edumatecsifpicapir2026">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/grupos-trabalho" element={<GruposTrabalho />} />
        <Route path="/palestrantes" element={<Palestrantes />} />
        <Route path="/minicursos" element={<Minicursos />} />
        <Route path="/oficinas" element={<Oficinas />} />
        <Route path="/anais" element={<Anais />} />
        <Route path="/memorias/2025" element={<Memorias />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App