import CookiesFooter from 'components/CookiesFooter'

import Header from '../components/Header'
import Routes from '../routes'

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
        <CookiesFooter />
      </div>
    </>
  )
}

export default App
