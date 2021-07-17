import WidthLayout from 'components/WidthLayout'
import MeliLogo from 'assets/logo.png'
import SearchIcon from 'assets/icons/search.svg'

import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="header">
      <WidthLayout>
        <div className="header-content" role="banner">
          <img
            alt="Logo de Mercado Libre"
            className="header-logo"
            draggable="false"
            src={MeliLogo}
            title="Mercado Libre"
          />
          <div className="header-form">
            <input
              className="header-form-input"
              id="header-input"
              name="header-form-input"
              type="text"
            />
            <button className="header-form-search">
              <img
                alt="Buscar"
                className="header-form-search-icon"
                src={SearchIcon}
                title="Buscar en Mercado Libre"
              />
            </button>
          </div>
        </div>
      </WidthLayout>
      <WidthLayout>
        <Navbar />
      </WidthLayout>
    </header>
  )
}
