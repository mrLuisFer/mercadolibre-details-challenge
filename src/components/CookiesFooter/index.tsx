import WidthLayout from 'components/common/WidthLayout'
import { useState } from 'react'

export default function CookiesFooter() {
  const [hideBtn, setHideBtn] = useState(false)

  return (
    <>
      {!hideBtn && (
        <footer className="cookiesFooter">
          <WidthLayout>
            <p className="cookiesFooter-text">
              Al navegar en este sitio aceptás las cookies que utilizamos para mejorar tu
              experiencia.
            </p>{' '}
            <a className="cookiesFooter-link" href="/">
              Más información.
            </a>
            <button className="cookiesFooter-button" type="button" onClick={() => setHideBtn(true)}>
              Entendido
            </button>
          </WidthLayout>
        </footer>
      )}
    </>
  )
}
