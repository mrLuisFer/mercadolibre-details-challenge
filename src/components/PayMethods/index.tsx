import WidthLayout from 'components/common/WidthLayout'
import CreditCard from 'assets/icons/payment-methods/credit.svg'

export default function PayMethods() {
  return (
    <WidthLayout>
      <section className="payMethods">
        <div className="payMethods-content">
          <article className="payMethods-card">
            <img alt="credit" className="payMethods-card-icon" src={CreditCard} />
            <div className="payMethods-card-text">
              <h3 className="payMethods-card-text-title">Tarjeta de Credito</h3>
              <a className="payMethods-card-text-link" href="/">
                Ver promociones bancarias
              </a>
            </div>
          </article>
        </div>
        <div>
          <p>mas</p>
        </div>
      </section>
    </WidthLayout>
  )
}
