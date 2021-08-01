export default function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-sendto">
        <i className="fas fa-map-marker-alt navbar-sendto-icon" />
        <p className="navbar-sendto-text">
          <span>Enviar a</span> Córdoba 5822
        </p>
      </div>
      <ul className="navbar-list navbar-category">
        <li className="navbar-category-item categories">Categorias</li>
        <li className="navbar-category-item">Ofertas</li>
        <li className="navbar-category-item">Historial</li>
        <li className="navbar-category-item">Supermercado</li>
        <li className="navbar-category-item">Moda</li>
        <li className="navbar-category-item">Vender</li>
        <li className="navbar-category-item">Ayuda</li>
      </ul>
      <ul className="navbar-list navbar-account">
        <li className="navbar-category-item">Crea tu cuenta</li>
        <li className="navbar-category-item">Ingresa</li>
        <li className="navbar-category-item">Mis compras</li>
        <li className="navbar-category-item">
          <i className="fas fa-shopping-cart" />
        </li>
      </ul>
    </nav>
  )
}
