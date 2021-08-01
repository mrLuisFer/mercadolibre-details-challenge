import { Dispatch, SetStateAction } from 'react'

type Props = {
  setIsRenderMenu: Dispatch<SetStateAction<Boolean>>
}

export default function CategsMenu({ setIsRenderMenu }: Props) {
  return (
    <div className="categsMenu-container">
      <div className="categsMenu" onMouseLeave={() => setIsRenderMenu(false)}>
        <p>Some</p>
        <p>Some</p>
        <p>Some</p>
        <p>Some</p>
        <p>Some</p>
        <p>Some</p>
      </div>
    </div>
  )
}
