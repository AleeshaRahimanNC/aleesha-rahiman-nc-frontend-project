import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Strip from '../../Components/Strip/Strip'
import Services from '../../Components/Services/Services'


function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <Strip/>
    <Services/>
    <Testimonials/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home