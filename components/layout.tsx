import { ReactNode, useEffect, useState } from 'react'
import { KEY_PRODUCTS } from '../configs'
import Footer from "./Footer"
import Header from "./Header"
type Props = {
  children? : ReactNode,
}
const Layout = ({children}:Props) =>{
  return <div>
    <Header/>
    <main>{children}</main>
    <Footer/>
  </div>
}
export default Layout