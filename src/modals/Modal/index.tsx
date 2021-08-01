import { createPortal } from 'react-dom'

type Props = {
  children: any
  htmlElement: HTMLElement | null
}

export default function Modal({ children, htmlElement }: Props) {
  document.body.style.overflow = 'hidden'

  if (htmlElement === null) return <div />

  return (
    <>
      {createPortal(
        <div aria-hidden="false" aria-modal="true" className="modal">
          {children}
        </div>,
        htmlElement
      )}
    </>
  )
}
