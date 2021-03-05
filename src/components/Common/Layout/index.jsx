import React from 'react'
import CreditCard from '../../Home/CreditCard'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => (
  <>
    <Header /> {children}
    <CreditCard />
    <Footer />
  </>
)

export default Layout
