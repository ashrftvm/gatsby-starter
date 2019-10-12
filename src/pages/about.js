import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default AboutPage
