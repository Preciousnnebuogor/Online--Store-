import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Products from '@/components/productItem/Product'
import Footer from '@/components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}
