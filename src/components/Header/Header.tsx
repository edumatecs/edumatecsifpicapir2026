import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import logoHeader from '../../assets/images/logos/logo-header.webp'
import './Header.css'


function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function handleNavClick() {
    setMenuAberto(false)
  }

  return (
    <header>
      <div className="logo">
        <NavLink
          to="/"
          aria-label="Ir para a página inicial"
          onClick={handleNavClick}
        >
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
        <NavLink to="/" onClick={handleNavClick}>
          Início
        </NavLink>

        <NavLink to="/programacao" onClick={handleNavClick}>
          Programação
        </NavLink>

        <NavLink to="/grupos-trabalho" onClick={handleNavClick}>
          Grupos de Trabalho
        </NavLink>

        <NavLink to="/palestrantes" onClick={handleNavClick}>
          Palestrantes
        </NavLink>

        <NavLink to="/minicursos" onClick={handleNavClick}>
          Minicursos
        </NavLink>

        <NavLink to="/oficinas" onClick={handleNavClick}>
          Oficinas
        </NavLink>

        <NavLink to="/memorias/2025" onClick={handleNavClick}>
          1ª Edição EDUMATEC'S
        </NavLink>
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