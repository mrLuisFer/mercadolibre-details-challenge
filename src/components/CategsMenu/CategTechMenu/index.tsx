import { Dispatch, SetStateAction } from 'react'

import { techMenuLinks } from './techMenuLinks'

type Props = {
  setShowTechMenu: Dispatch<SetStateAction<Boolean>>
}

export default function CategTechMenu({ setShowTechMenu }: Props) {
  return (
    <div className="categTechMenu" onMouseEnter={() => setShowTechMenu(true)}>
      <header className="categTechMenu-header">
        <h1>Tecnología</h1>
      </header>
      <section className="categTechMenu-detail">
        {techMenuLinks?.map((techLink) => (
          <article key={techLink.title} className="categTechMenu-detail-content">
            <h2 className="categTechMenu-detail-title">{techLink.title}</h2>
            <ul className="categTechMenu-detail-list">
              {techLink?.links?.map((link) => (
                <li key={link} className="categTechMenu-detail-item">
                  {link}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
