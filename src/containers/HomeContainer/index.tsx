import React, { Fragment } from 'react'
import Header from '../../components/layout/ui/Header'
import MainLayout from '../../components/layout/MainLayout'
import Footer from '../../components/layout/ui/Footer'

const HomeContainer: React.FC = () => {
  return (
    <Fragment>
      <Header isLogoCentered={false} />
      <MainLayout />
      <Footer />
    </Fragment>
  )
}

export default HomeContainer
