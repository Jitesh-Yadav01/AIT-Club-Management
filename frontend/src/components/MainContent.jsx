import React from 'react'
import '../styles/site.css'
import Home from '../sections/Home'
import Clubs from '../sections/Clubs/Clubs'
import ContactUs from '../sections/ContactUs/ContactUs'

export default function MainContent(){
  return (
    <main className="main">
      <Home />
      <Clubs />
      <ContactUs />
    </main>
  )
}
