import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import logoHeader from '../../assets/images/logos/logo-header.webp'
import './Header.css'


function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

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

      <nav
        id="menu-principal"
        className={menuAberto ? 'menu-aberto' : ''}
        aria-label="Navegação principal"
      >
        <NavLink to="/">Início</NavLink>
        <NavLink to="/programacao">Programação</NavLink>
        <NavLink to="/palestrantes">Palestrantes</NavLink>
        <NavLink to="/minicursos">Minicursos</NavLink>
        <NavLink to="/oficinas">Oficinas</NavLink>
        <NavLink to="/memorias/2025">1ª Edição EDUMATEC'S</NavLink>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <Menu size={24} />
      </button>
    </header>
  )
}


export default Header