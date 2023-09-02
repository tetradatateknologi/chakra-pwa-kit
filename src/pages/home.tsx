import Testimonials from '../components/testimonials'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Features from '../components/features'
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Carousel />
      <Features />
      <Footer />
    </>
  )
}