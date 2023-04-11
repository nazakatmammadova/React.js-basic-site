import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home (){
    return(
    <>
        <HeroSection/>
        <Cards/>
        <Footer/>
    </>
    )
}

export default Home