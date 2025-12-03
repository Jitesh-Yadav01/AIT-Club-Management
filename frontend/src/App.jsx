import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent'

import Footer from './sections/Footer/Footer'

export default function App() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const t = setTimeout(() => setLoading(false), 4000)
  //   return () => clearTimeout(t)
  // }, [])

  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <img src="/loader.gif" alt="Loading" className="loader-gif" />
  //     </div>
  //   )
  // }

  return (
    <div className="app">
      <Navbar />
      <div className="site-container">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
