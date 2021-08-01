import { ReactChildren, ReactNode } from 'react'

type Props = {
  children: ReactChildren | ReactNode
}

export default function WidthLayout({ children }: Props) {
  return <div className="widthLayout">{children}</div>
}
