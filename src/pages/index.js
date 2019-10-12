import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>
        I am Asif, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        obcaecati.
      </h2>

      <p>
        Need a Developer?
        <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
