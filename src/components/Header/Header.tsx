import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/images/logos/logo-header.webp'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" aria-label="Ir para a página inicial">
          <img
            src={logoHeader}
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