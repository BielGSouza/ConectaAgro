import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import CarrosselFuncionalidades from '../../components/CarrosselFuncionalidades/CarrosselFuncionalidades'
import Footer from '../../components/Footer'

const Home = () => {

  useEffect(() => {
      document.title = "ConectaAgro - Apresentação"
    }, [])

  return (
    <div>
      <Header />
      <Apresentacao />
      <CarrosselFuncionalidades />
      <Footer />
    </div>
  )
}

export default Home
