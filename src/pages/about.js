import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        quia ullam possimus enim odio laboriosam tempore sint aspernatur atque
        maxime!
      </p>
      <p>
        Say Hi!
        <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
