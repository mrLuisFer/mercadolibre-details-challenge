import { Dispatch, SetStateAction, useState } from 'react'

import { categs, TCategs } from './categories'

type Props = {
  setIsRenderMenu: Dispatch<SetStateAction<Boolean>>
}

export default function CategsMenu({ setIsRenderMenu }: Props) {
  const [showTechMenu, setShowTechMenu] = useState<Boolean>(false)
  const techCateg = 'tecnologia'

  const renderTechMenu = (category: TCategs) => {
    if (category.name.toLowerCase() === techCateg) {
      setShowTechMenu(true)
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
              onMouseEnter={() => renderTechMenu(category)}
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
      </div>
      {showTechMenu && <div>Menu</div>}
    </div>
  )
}
