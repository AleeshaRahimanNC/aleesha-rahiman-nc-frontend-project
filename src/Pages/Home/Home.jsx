import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import AboutUs from '../../Components/AboutUs/AboutUs'



function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home