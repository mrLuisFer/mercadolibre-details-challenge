import { Dispatch, SetStateAction, useState } from 'react'

import { categs, TCategs } from './categories'
import CategTechMenu from './CategTechMenu'

type Props = {
  setIsRenderMenu: Dispatch<SetStateAction<Boolean>>
}

export default function CategsMenu({ setIsRenderMenu }: Props) {
  const [showTechMenu, setShowTechMenu] = useState<Boolean>(false)
  const techCateg = 'tecnologia'

  const renderTechMenu = (category: TCategs, state: Boolean) => {
    if (category.name.toLowerCase() === techCateg) {
      setShowTechMenu(state)
    }
  }

  return (
    <div className="categsMenu-container">
      <div className="categsMenu" onMouseLeave={() => setIsRenderMenu(false)}>
        <ul className="categsMenu-categories">
          {categs?.map((category) => (
            <li
              key={category.name}
              className="categsMenu-categories-item"
              onMouseEnter={() => renderTechMenu(category, true)}
              onMouseLeave={() => renderTechMenu(category, false)}
            >
              <a
                className="categsMenu-categories-item-link"
                href={category.url}
                rel="noreferrer"
                target="_blank"
              >
                {category.name}
                {category.name.toLowerCase() === techCateg && (
                  <i className="fas fa-chevron-right arrow" />
                )}
              </a>
            </li>
          ))}
        </ul>
        {showTechMenu && <CategTechMenu setShowTechMenu={setShowTechMenu} />}
      </div>
    </div>
  )
}
