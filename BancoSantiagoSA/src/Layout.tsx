import './index.css'
import { Outlet } from 'react-router'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
