import { useState } from 'react'
import CategsMenu from 'modals/CategsMenu'

export default function Navbar() {
  const [isRenderMenu, setIsRenderMenu] = useState<Boolean>(false)

  const renderCategsMenu = () => {
    setIsRenderMenu(true)
  }

  const hideCategsMenu = () => {
    setIsRenderMenu(false)
  }

  console.log(isRenderMenu)

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-sendto">
        <i className="fas fa-map-marker-alt navbar-sendto-icon" />
        <p className="navbar-sendto-text">
          <span>Enviar a</span> Córdoba 5822
        </p>
      </div>
      <ul className="navbar-list navbar-category">
        <li
          className="navbar-category-item categories"
          onMouseEnter={renderCategsMenu}
          onMouseLeave={hideCategsMenu}
        >
          Categorias
        </li>
        <li className="navbar-category-item">Ofertas</li>
        <li className="navbar-category-item">Historial</li>
        <li className="navbar-category-item">Supermercado</li>
        <li className="navbar-category-item">Moda</li>
        <li className="navbar-category-item">Vender</li>
        <li className="navbar-category-item">Ayuda</li>
      </ul>
      <ul className="navbar-list navbar-account">
        <li className="navbar-account-item">Crea tu cuenta</li>
        <li className="navbar-account-item">Ingresa</li>
        <li className="navbar-account-item">Mis compras</li>
        <li className="navbar-account-item">
          <i className="fas fa-shopping-cart" />
        </li>
      </ul>
      {isRenderMenu && <CategsMenu />}
    </nav>
  )
}
