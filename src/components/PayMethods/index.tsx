import WidthLayout from 'components/common/WidthLayout'
import MoreIcon from 'assets/icons/payment-methods/more.svg'

import { payMethodsContent } from './payMethodsContent'

type TPayMethodsContent = {
  title: string
  link: string
  payMethodIcon: any
}
export default function PayMethods() {
  return (
    <WidthLayout>
      <section className="payMethods">
        <div className="payMethods-content">
          {payMethodsContent?.map((payMethod: TPayMethodsContent) => (
            <article key={payMethod.title} className="payMethods-card">
              <img alt="credit" className="payMethods-card-icon" src={payMethod.payMethodIcon} />
              <div className="payMethods-card-text">
                <h3 className="payMethods-card-text-title">{payMethod.title}</h3>
                <a className="payMethods-card-text-link" href="/">
                  {payMethod.link}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="payMethods-more">
          <img alt="more" src={MoreIcon} />
        </div>
      </section>
    </WidthLayout>
  )
}
