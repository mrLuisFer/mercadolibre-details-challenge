import PayMethods from 'components/PayMethods'

const HomeScreen = () => {
  return (
    <div className="home">
      <p>HomeScreen </p>
      <br />
      <a href="/productId">Ver página de detalle de producto</a>
      <PayMethods />
    </div>
  )
}

export default HomeScreen
