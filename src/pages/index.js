import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I am Asif, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        obcaecati.
      </h2>

      <p>
        Need a Developer?
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
