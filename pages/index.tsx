import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Products from './products'
const Home: NextPage = () => {
  return (
    <Layout>
      <Products/>
    </Layout>
  )
}

export default Home
