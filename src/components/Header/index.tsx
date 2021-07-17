import WidthLayout from 'components/WidthLayout'
import MeliLogo from 'assets/logo.png'

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
              <i className="fas fa-search header-form-search-icon" />
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
