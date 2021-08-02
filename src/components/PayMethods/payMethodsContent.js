import CreditCard from 'assets/icons/payment-methods/credit.svg'
import DebitCard from 'assets/icons/payment-methods/debit.svg'
import MCreditCard from 'assets/icons/payment-methods/creditsv2.svg'
import AgreementIcon from 'assets/icons/payment-methods/agreement.svg'

/**
  @type TPayMethodsContent
    @param {string} title
    @param {string} link
    @param {any | string} payMethodIcon
*/
export const payMethodsContent = [
  {
    title: 'Tarjeta de Credito',
    link: 'Ver promociones bancarias',
    payMethodIcon: CreditCard
  },
  {
    title: 'Tarjeta de Debito',
    link: 'Ver mas',
    payMethodIcon: DebitCard
  },
  {
    title: 'Cuotas sin tarjeta',
    link: 'Conoce Mercado Credito',
    payMethodIcon: MCreditCard
  },
  {
    title: 'Efectivo',
    link: 'Ver mas',
    payMethodIcon: AgreementIcon
  }
]
