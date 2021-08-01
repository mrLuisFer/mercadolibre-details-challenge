import { createPortal } from 'react-dom'

export default function Modal({ children, htmlElement }: any) {
  document.body.style.overflow = 'hidden'

  return (
    <>
      {createPortal(
        <div aria-hidden="false" aria-modal="true">
          {children}
        </div>,
        htmlElement
      )}
    </>
  )
}
