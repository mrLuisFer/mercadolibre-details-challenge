import { useState } from 'react'
import WidthLayout from 'components/common/WidthLayout'
import MeliLogo from 'assets/utils/logo.png'
import HeaderText from 'assets/utils/header-right-text.webp'
import CategsMenu from 'components/CategsMenu'

import Navbar from './Navbar'

export default function Header() {
  const [isRenderMenu, setIsRenderMenu] = useState<Boolean>(false)

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
              placeholder="Buscar productos, marcas y más"
              type="text"
            />
            <button className="header-form-search">
              <i className="fas fa-search header-form-search-icon" />
            </button>
          </div>
          <img
            alt="Comprá tu Point y QR a $189"
            className="header-rightText"
            draggable="false"
            src={HeaderText}
            title="Mercado Pago Point"
          />
        </div>
      </WidthLayout>
      <WidthLayout>
        <Navbar setIsRenderMenu={setIsRenderMenu} />
      </WidthLayout>
      {isRenderMenu && <CategsMenu setIsRenderMenu={setIsRenderMenu} />}
    </header>
  )
}
