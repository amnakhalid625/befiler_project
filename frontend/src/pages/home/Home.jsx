import React from 'react'
import Hero from '../../components/hero/Hero'
import Partner from '../../components/partners/Partners'
import MobileSection from '../../components/mobilesection/MobileSection'
import Products from '../../components/products/Products'
import Testimonial from '../../components/testimonial/Testimonial'
import Team from '../../components/team/Team'
import Videos from '../../components/videos/Video'
import Blog from '../../components/blogs/Blogs'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <Partner />
    <MobileSection />
    <Products />
    <Testimonial />
    <Team />
    <Videos />
    <Blog />
    <Footer />
    
    
    </>
  )
}

export default Home