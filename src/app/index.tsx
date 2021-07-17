import React from 'react'

import Navbar from '../components/Navbar'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App
