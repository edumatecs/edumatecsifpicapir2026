import { NavLink } from 'react-router-dom'
import logo2026 from '../../assets/images/logos/logo-2026.webp'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" aria-label="Ir para a página inicial">
          <img
            src={logo2026}
            alt="Logo EDUMATEC'S 2026"
          />
        </NavLink>
      </div>

      <nav aria-label="Navegação principal">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/programacao">Programação</NavLink>
        <NavLink to="/palestrantes">Palestrantes</NavLink>
        <NavLink to="/minicursos">Minicursos</NavLink>
        <NavLink to="/oficinas">Oficinas</NavLink>
        <NavLink to="/memorias/2025">1ª Edição EDUMATEC'S</NavLink>
      </nav>
    </header>
  )
}

export default Header